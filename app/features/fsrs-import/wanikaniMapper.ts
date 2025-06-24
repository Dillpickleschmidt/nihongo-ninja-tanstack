// src/features/fsrs-import/wanikaniMapper.ts

import Database, { Database as SQLiteDB } from "better-sqlite3"
import * as path from "path"
import type { WaniKaniSubjectMapping, DBPracticeItemType } from "./types"

// WaniKani API Subject Types (Subset for Mapping)
interface WaniKaniApiSubjectRow {
  id: number
  object: "radical" | "kanji" | "vocabulary" | "kana_vocabulary"
  characters: string | null
  slug: string
}

// Singleton instance
let mapperInstance: WaniKaniMapper | null = null

/**
 * Get singleton instance of WaniKani mapper
 */
export function getWaniKaniMapper(): WaniKaniMapper {
  if (!mapperInstance) {
    mapperInstance = new WaniKaniMapper()
  }
  return mapperInstance
}

/**
 * Maps WaniKani subject 'object' type to the DBPracticeItemType enum.
 */
function mapWaniKaniObjectToDBType(
  objectType: WaniKaniApiSubjectRow["object"],
): DBPracticeItemType {
  switch (objectType) {
    case "vocabulary":
    case "kana_vocabulary":
      return "vocabulary"
    case "kanji":
      return "kanji"
    case "radical":
      return "radical"
    default:
      console.warn(
        `[WaniKaniMapper] Unknown WaniKani object type: ${objectType}. Defaulting to 'vocabulary'.`,
      )
      return "vocabulary"
  }
}

/**
 * Handles mapping jpdb.io character/spelling strings to WaniKani subjects
 */
export class WaniKaniMapper {
  private db: SQLiteDB
  private cache: Map<string, WaniKaniSubjectMapping[]> = new Map()

  constructor() {
    const dbPath = this.getDbPath()
    console.log(`[WaniKaniMapper] Opening DB at: ${dbPath}`)

    try {
      this.db = new Database(dbPath, { readonly: true })
      // Test the connection
      this.db.prepare("SELECT COUNT(*) FROM vocabulary").get()
      console.log("[WaniKaniMapper] Successfully opened WaniKani DB.")
    } catch (error) {
      console.error(`[WaniKaniMapper] Failed to open DB at ${dbPath}:`, error)
      throw new Error(
        `Failed to initialize WaniKani DB: ${error instanceof Error ? error.message : String(error)}`,
      )
    }
  }

  private getDbPath(): string {
    if (process.env.LAMBDA_TASK_ROOT) {
      // Lambda environment
      return path.join(
        process.env.LAMBDA_TASK_ROOT,
        "app/data/wanikani/wanikani.db",
      )
    }
    // Local development
    return path.join(process.cwd(), "app/data/wanikani/wanikani.db")
  }

  /**
   * Batch find subjects for multiple search terms at once
   */
  public batchFindSubjects(
    searchTerms: string[],
  ): Map<string, WaniKaniSubjectMapping[]> {
    const results = new Map<string, WaniKaniSubjectMapping[]>()
    const uncachedTerms: string[] = []
    const termMapping = new Map<string, string>()

    // Check cache first and prepare uncached terms
    for (const term of searchTerms) {
      if (!term?.trim()) {
        results.set(term, [])
        continue
      }

      const trimmedTerm = term.trim()
      termMapping.set(trimmedTerm, term)

      if (this.cache.has(trimmedTerm)) {
        results.set(term, this.cache.get(trimmedTerm)!)
      } else {
        uncachedTerms.push(trimmedTerm)
      }
    }

    // Batch query for uncached terms
    if (uncachedTerms.length > 0) {
      console.log(
        `[WaniKaniMapper] Batch querying ${uncachedTerms.length} uncached terms`,
      )

      const placeholders = uncachedTerms.map(() => "?").join(",")
      const query = `
        SELECT characters, id, object, slug FROM (
          SELECT characters, id, object, slug FROM vocabulary WHERE characters IN (${placeholders})
          UNION ALL
          SELECT characters, id, object, slug FROM kana_vocabulary WHERE characters IN (${placeholders})
          UNION ALL
          SELECT characters, id, object, slug FROM kanji WHERE characters IN (${placeholders})
          UNION ALL
          SELECT characters, id, object, slug FROM radicals WHERE characters IN (${placeholders})
        ) ORDER BY characters
      `

      try {
        const stmt = this.db.prepare(query)
        const params = [
          ...uncachedTerms, // for vocabulary
          ...uncachedTerms, // for kana_vocabulary
          ...uncachedTerms, // for kanji
          ...uncachedTerms, // for radicals
        ]

        const rows = stmt.all(...params) as (WaniKaniApiSubjectRow & {
          characters: string
        })[]

        // Group results by characters
        const groupedResults = new Map<string, WaniKaniSubjectMapping[]>()

        for (const row of rows) {
          const mappedSubject: WaniKaniSubjectMapping = {
            id: row.id,
            slug: row.slug,
            type: mapWaniKaniObjectToDBType(row.object),
          }

          if (!groupedResults.has(row.characters)) {
            groupedResults.set(row.characters, [])
          }
          groupedResults.get(row.characters)!.push(mappedSubject)
        }

        // Deduplicate, cache results, and map back to original terms
        for (const trimmedTerm of uncachedTerms) {
          const subjects = groupedResults.get(trimmedTerm) || []

          // Remove duplicates based on slug+type combination
          const seen = new Set<string>()
          const deduped = subjects.filter((subject) => {
            const key = `${subject.type}-${subject.slug}`
            if (seen.has(key)) return false
            seen.add(key)
            return true
          })

          // Cache the result
          this.cache.set(trimmedTerm, deduped)

          // Map back to original term
          const originalTerm = termMapping.get(trimmedTerm)!
          results.set(originalTerm, deduped)
        }
      } catch (error) {
        console.error(`[WaniKaniMapper] Batch query failed:`, error)
        // Return empty results for failed terms
        for (const trimmedTerm of uncachedTerms) {
          const originalTerm = termMapping.get(trimmedTerm)!
          this.cache.set(trimmedTerm, [])
          results.set(originalTerm, [])
        }
      }
    }

    return results
  }

  /**
   * Finds matching WaniKani subjects for a given jpdb.io character or spelling.
   * A single jpdb.io character might map to multiple WaniKani subjects.
   * Now uses caching for performance.
   */
  public findSubjects(searchTerm: string): WaniKaniSubjectMapping[] {
    if (!searchTerm?.trim()) {
      return []
    }

    const trimmedTerm = searchTerm.trim()

    // Check cache first
    if (this.cache.has(trimmedTerm)) {
      return this.cache.get(trimmedTerm)!
    }

    // Use batch method for single term
    const results = this.batchFindSubjects([searchTerm])
    return results.get(searchTerm) || []
  }

  /**
   * Close the database connection
   */
  public close(): void {
    try {
      this.db?.close()
      this.cache.clear()
      console.log("[WaniKaniMapper] Database connection closed.")
    } catch (error) {
      console.error("[WaniKaniMapper] Error closing database:", error)
    }
  }
}

// Cleanup on Lambda shutdown
process.on("SIGTERM", () => {
  mapperInstance?.close()
})
