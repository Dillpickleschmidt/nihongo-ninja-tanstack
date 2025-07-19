// src/features/fsrs-import/wanikaniService.ts

import Database, { Database as SQLiteDB } from "better-sqlite3"
import * as path from "path"
import * as fs from "fs"
import { WANIKANI_DB_BASE64 } from "@/data/wanikani/wanikani-db-embedded"
import {
  prepareBatchQuery,
  groupSubjectsBySearchTerm,
  type WaniKaniSubjectMapping,
  type WaniKaniApiSubjectRow,
} from "./wanikaniHelpers"

// Singleton instance
let serviceInstance: WaniKaniService | null = null

/**
 * Get singleton instance of WaniKani service
 */
export function getWaniKaniService(): WaniKaniService {
  if (!serviceInstance) {
    serviceInstance = new WaniKaniService()
  }
  return serviceInstance
}

/**
 * WaniKani database service that handles subject lookups and mapping
 */
export class WaniKaniService {
  private db: SQLiteDB
  private cache: Map<string, WaniKaniSubjectMapping[]> = new Map()

  constructor() {
    const dbPath = this.getDbPath()
    console.log(`[WaniKaniService] Opening DB at: ${dbPath}`)

    try {
      this.db = new Database(dbPath, { readonly: true })
      // Test the connection
      this.db.prepare("SELECT COUNT(*) FROM vocabulary").get()
      console.log("[WaniKaniService] Successfully opened WaniKani DB.")
    } catch (error) {
      console.error(`[WaniKaniService] Failed to open DB at ${dbPath}:`, error)
      throw new Error(
        `Failed to initialize WaniKani DB: ${error instanceof Error ? error.message : String(error)}`,
      )
    }
  }

  private getDbPath(): string {
    if (process.env.LAMBDA_TASK_ROOT) {
      // Lambda environment - create database from embedded base64 data
      const tmpDbPath = "/tmp/wanikani.db"
      
      // Check if already written to /tmp
      if (!fs.existsSync(tmpDbPath)) {
        console.log(`[WaniKaniService] Creating database from embedded base64 data...`)
        try {
          const dbBuffer = Buffer.from(WANIKANI_DB_BASE64, 'base64')
          fs.writeFileSync(tmpDbPath, dbBuffer)
          console.log(`[WaniKaniService] Successfully created database at: ${tmpDbPath} (${dbBuffer.length} bytes)`)
        } catch (error) {
          console.error(`[WaniKaniService] Failed to create database from base64:`, error)
          throw error
        }
      } else {
        console.log(`[WaniKaniService] Database already exists in /tmp`)
      }
      
      return tmpDbPath
    }
    // Local development
    return path.join(process.cwd(), "src/data/wanikani/wanikani.db")
  }

  /**
   * Batch find subjects for multiple search terms at once.
   * Uses helper functions for query preparation and result processing.
   */
  public batchFindSubjects(
    searchTerms: string[],
  ): Map<string, WaniKaniSubjectMapping[]> {
    const results = new Map<string, WaniKaniSubjectMapping[]>()
    const uncachedTerms: string[] = []

    // Check cache first
    for (const term of searchTerms) {
      if (!term?.trim()) {
        results.set(term, [])
        continue
      }

      const trimmedTerm = term.trim()

      if (this.cache.has(trimmedTerm)) {
        results.set(term, this.cache.get(trimmedTerm)!)
      } else {
        uncachedTerms.push(trimmedTerm)
      }
    }

    // Batch query for uncached terms
    if (uncachedTerms.length > 0) {
      console.log(
        `[WaniKaniService] Batch querying ${uncachedTerms.length} uncached terms`,
      )

      try {
        // Use helper function to prepare batch query
        const { placeholders, parameters } = prepareBatchQuery(uncachedTerms)

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

        const stmt = this.db.prepare(query)
        const rows = stmt.all(...parameters) as (WaniKaniApiSubjectRow & {
          characters: string
        })[]

        // Use helper function to group and process results
        const groupedResults = groupSubjectsBySearchTerm(uncachedTerms, rows)

        // Cache results and map back to original terms
        for (const [trimmedTerm, subjects] of groupedResults.entries()) {
          this.cache.set(trimmedTerm, subjects)

          // Find original term that maps to this trimmed term
          const originalTerm = searchTerms.find(
            (term) => term?.trim() === trimmedTerm,
          )
          if (originalTerm) {
            results.set(originalTerm, subjects)
          }
        }
      } catch (error) {
        console.error(`[WaniKaniService] Batch query failed:`, error)

        // Return empty results for failed terms
        for (const term of searchTerms) {
          if (!results.has(term)) {
            const trimmedTerm = term?.trim() || ""
            this.cache.set(trimmedTerm, [])
            results.set(term, [])
          }
        }
      }
    }

    return results
  }

  /**
   * Finds matching WaniKani subjects for a single search term.
   * Uses the batch method internally for consistency.
   */
  public findSubjects(searchTerm: string): WaniKaniSubjectMapping[] {
    if (!searchTerm?.trim()) {
      return []
    }

    const results = this.batchFindSubjects([searchTerm])
    return results.get(searchTerm) || []
  }

  /**
   * Clear the internal cache (useful for testing or memory management)
   */
  public clearCache(): void {
    this.cache.clear()
    console.log("[WaniKaniService] Cache cleared.")
  }

  /**
   * Get cache statistics
   */
  public getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    }
  }

  /**
   * Close the database connection
   */
  public close(): void {
    try {
      this.db?.close()
      this.cache.clear()
      console.log("[WaniKaniService] Database connection closed.")
    } catch (error) {
      console.error("[WaniKaniService] Error closing database:", error)
    }
  }
}

// Cleanup on Lambda shutdown
process.on("SIGTERM", () => {
  serviceInstance?.close()
})
