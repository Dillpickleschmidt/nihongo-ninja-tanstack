// src/data/wanikani/utils.ts
import { createServerFn, serverOnly } from "@tanstack/solid-start"
import Database, { type Database as SQLiteDatabase } from "better-sqlite3"
import { existsSync } from "fs"
import {
  getFSRSCardsByKeys,
  type FSRSCardData,
} from "@/features/supabase/db/fsrs-operations"
import type {
  Kanji,
  KanjiRow,
  Radical,
  RadicalRow,
  VocabRow,
  WaniKaniMeaning,
} from "./types"
import {
  buildVocabHierarchy,
  type VocabHierarchy as CleanVocabHierarchy,
} from "./hierarchy-builder"

// =============================================================================
// DATABASE & STATIC DATA FUNCTIONS
// =============================================================================

// Global database connection cache for Lambda warm starts
let globalDbConnection: SQLiteDatabase | null = null

export const getDbConnection = serverOnly(async (): Promise<SQLiteDatabase> => {
  // Return cached connection if available
  if (globalDbConnection) {
    try {
      globalDbConnection.prepare("SELECT 1").get()
      return globalDbConnection
    } catch (error) {
      globalDbConnection = null
    }
  }

  const dbPath = await getDbPath()

  try {
    globalDbConnection = new Database(dbPath, { readonly: true })
    // Test the connection
    globalDbConnection.prepare("SELECT COUNT(*) FROM vocabulary").get()
    return globalDbConnection
  } catch (error) {
    console.error(`[Utils] Failed to open database at ${dbPath}:`, error)
    throw error
  }
})

async function getDbPath(): Promise<string> {
  // The Nitro hook places the file in the server root, which becomes the Lambda task root.
  const prodPath = "/var/task/wanikani.db"
  if (existsSync(prodPath)) {
    return prodPath
  }

  // Fallback for local development
  const devPath = "./public/wanikani.db"
  if (existsSync(devPath)) {
    return devPath
  }

  throw new Error(
    "Could not locate wanikani.db file in production or development paths.",
  )
}

async function fetchVocabulary(slugs: string[]): Promise<VocabRow[]> {
  if (slugs.length === 0) return []

  const db = await getDbConnection()
  const placeholders = slugs.map(() => "?").join(",")
  const query = `SELECT id, characters, slug FROM vocabulary WHERE slug IN (${placeholders})`
  const result = db.prepare(query).all(...slugs) as VocabRow[]

  return result
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

function parseMeanings(meaningsJson: string): string[] {
  const parsedMeanings = JSON.parse(meaningsJson) as WaniKaniMeaning[]
  return parsedMeanings.map((m) => m.meaning)
}

// =============================================================================
// MAIN EXPORT FUNCTIONS (SERVER FUNCTIONS)
// =============================================================================

// CLEAN HIERARCHY SYSTEM - Simple, declarative approach
export const getWKHierarchy = createServerFn({ method: "GET" })
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }): Promise<CleanVocabHierarchy | null> => {
    if (!slugs || slugs.length === 0) return null

    try {
      // Use the new clean hierarchy builder
      const cleanHierarchy = await buildVocabHierarchy(slugs)

      return cleanHierarchy
    } catch (error) {
      console.error("🚨 [Utils] NEW hierarchy system failed:", error)
      return null
    }
  })

// Legacy function removed - using clean hierarchy system only

export const getUserProgressForVocab = createServerFn({ method: "GET" })
  .validator((data: { slugs: string[]; userId: string }) => data)
  .handler(async ({ data }): Promise<Record<string, FSRSCardData> | null> => {
    if (!data || !data.slugs || data.slugs.length === 0 || !data.userId) {
      return null
    }

    const fsrsData = await getFSRSCardsByKeys(data.userId, data.slugs)

    // Return a plain object instead of Map (for server JSON serialization)
    const progressRecord: Record<string, FSRSCardData> = {}
    fsrsData.forEach((card) => {
      progressRecord[`${card.type}:${card.practice_item_key}`] = card
    })

    return progressRecord
  })

export const getItemDetailsBySlugsBatch = createServerFn({ method: "GET" })
  .validator((data: { kanji: string[]; radicals: string[] }) => data)
  .handler(
    async ({ data }): Promise<{ kanji: Kanji[]; radicals: Radical[] }> => {
      const db = await getDbConnection()
      const results = { kanji: [] as Kanji[], radicals: [] as Radical[] }

      if (data.kanji.length > 0) {
        const kanjiPlaceholders = data.kanji.map(() => "?").join(",")
        const kanjiQuery = `SELECT id, characters, slug, meanings, meaning_mnemonic, reading_mnemonic FROM kanji WHERE slug IN (${kanjiPlaceholders})`
        const kanjiRows = db
          .prepare(kanjiQuery)
          .all(...data.kanji) as KanjiRow[]

        results.kanji = kanjiRows.map((row) => ({
          id: row.id,
          characters: row.characters,
          slug: row.slug,
          meanings: parseMeanings(row.meanings),
          radicals: [],
          meaning_mnemonic: row.meaning_mnemonic,
          reading_mnemonic: row.reading_mnemonic,
        }))
      }

      if (data.radicals.length > 0) {
        const radicalPlaceholders = data.radicals.map(() => "?").join(",")
        const radicalQuery = `SELECT id, characters, slug, meanings, meaning_mnemonic FROM radicals WHERE slug IN (${radicalPlaceholders})`
        const radicalRows = db
          .prepare(radicalQuery)
          .all(...data.radicals) as RadicalRow[]

        results.radicals = radicalRows.map((row) => ({
          id: row.id,
          characters: row.characters,
          slug: row.slug,
          meanings: parseMeanings(row.meanings),
          meaning_mnemonic: row.meaning_mnemonic,
        }))
      }

      return results
    },
  )
