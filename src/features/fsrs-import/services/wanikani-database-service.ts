// src/features/fsrs-import/wanikaniService.ts

import { type Database as SQLiteDB } from "better-sqlite3"
import { getDbConnection } from "@/data/wanikani/utils"
import {
  prepareBatchQuery,
  groupSubjectsBySearchTerm,
  type WaniKaniSubjectMapping,
  type WaniKaniApiSubjectRow,
} from "./wanikani-database-helpers"

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
 * WaniKani database service that handles subject lookups and mapping.
 * Now uses the shared database connection from utils.ts
 */
export class WaniKaniService {
  private cache: Map<string, WaniKaniSubjectMapping[]> = new Map()

  constructor() {
    console.log(
      "[WaniKaniService] Initialized (using shared DB connection from utils)",
    )
  }

  /**
   * Batch find subjects for multiple search terms at once.
   * Uses helper functions for query preparation and result processing.
   */
  public async batchFindSubjects(
    searchTerms: string[],
  ): Promise<Map<string, WaniKaniSubjectMapping[]>> {
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
        // Get shared database connection
        const db = await getDbConnection()

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

        const stmt = db.prepare(query)
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
  public async findSubjects(
    searchTerm: string,
  ): Promise<WaniKaniSubjectMapping[]> {
    if (!searchTerm?.trim()) {
      return []
    }

    const results = await this.batchFindSubjects([searchTerm])
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
   * Close the service (only clears cache now, DB connection managed by utils)
   */
  public close(): void {
    try {
      this.cache.clear()
      console.log("[WaniKaniService] Service closed and cache cleared.")
    } catch (error) {
      console.error("[WaniKaniService] Error closing service:", error)
    }
  }
}

// Cleanup on Lambda shutdown
process.on("SIGTERM", () => {
  serviceInstance?.close()
})
