// src/data/wanikani/utils.ts
import { createServerFn, serverOnly } from "@tanstack/solid-start"
import Database, { type Database as SQLiteDatabase } from "better-sqlite3"
import { existsSync } from "fs"
import {
  getFSRSCardsByKeys,
  type FSRSCardData,
} from "@/features/supabase/db/utils"
import type {
  FullHierarchyData,
  HierarchySummary,
  Kanji,
  KanjiRadicalRelation,
  KanjiRow,
  ProgressState,
  Radical,
  RadicalRow,
  VocabHierarchy,
  VocabKanjiRelation,
  VocabRow,
  WaniKaniMeaning,
} from "./types"

const WELL_KNOWN_THRESHOLD = 21

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

/**
 * Retrieve WaniKani hierarchy, summary, and flat lists.
 */
async function fetchStaticHierarchyFromDb(slugs: string[]) {
  const db = await getDbConnection()
  const vocabRows = await fetchVocabulary(slugs)
  if (vocabRows.length === 0) return null

  const vocabIds = vocabRows.map((v) => v.id)
  const vocabPlaceholders = vocabIds.map(() => "?").join(",")

  const kanjiQuery = `
      SELECT DISTINCT k.id, k.characters, k.slug, k.meanings, k.meaning_mnemonic, k.reading_mnemonic, vk.vocab_id
      FROM kanji k
      JOIN vocab_kanji vk ON k.id = vk.kanji_id
      WHERE vk.vocab_id IN (${vocabPlaceholders})
    `
  const kanjiResults = db.prepare(kanjiQuery).all(...vocabIds) as (KanjiRow & {
    vocab_id: number
  })[]

  const kanjiIds = [...new Set(kanjiResults.map((k) => k.id))]
  const kanjiPlaceholders = kanjiIds.map(() => "?").join(",")

  const radicalsQuery = `
      SELECT DISTINCT r.id, r.characters, r.slug, r.meanings, r.meaning_mnemonic, kr.kanji_id
      FROM radicals r
      JOIN kanji_radicals kr ON r.id = kr.radical_id
      WHERE kr.kanji_id IN (${kanjiPlaceholders})
    `
  const radicalResults = db
    .prepare(radicalsQuery)
    .all(...kanjiIds) as (RadicalRow & { kanji_id: number })[]

  const kanjiRows = kanjiResults.map((k) => ({
    ...k,
    meanings: parseMeanings(k.meanings),
  }))

  const radicalRows = radicalResults.map((r) => ({
    ...r,
    meanings: parseMeanings(r.meanings),
  }))

  const relations = {
    vocabKanjiRelations: kanjiResults.map((k) => ({
      vocab_id: k.vocab_id,
      kanji_id: k.id,
    })),
    kanjiRadicalRelations: radicalResults.map((r) => ({
      kanji_id: r.kanji_id,
      radical_id: r.id,
    })),
  }

  return {
    vocabRows,
    kanjiRows,
    radicalRows,
    relations,
  }
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

function parseMeanings(meaningsJson: string): string[] {
  const parsedMeanings = JSON.parse(meaningsJson) as WaniKaniMeaning[]
  return parsedMeanings.map((m) => m.meaning)
}

function extractUniqueItems(hierarchy: VocabHierarchy[]): {
  uniqueKanji: Kanji[]
  uniqueRadicals: Radical[]
} {
  const uniqueKanjiMap = new Map<number, Kanji>()
  const uniqueRadicalsMap = new Map<number, Radical>()

  for (const vocab of hierarchy) {
    for (const kanji of vocab.kanji) {
      uniqueKanjiMap.set(kanji.id, kanji)
      for (const radical of kanji.radicals) {
        uniqueRadicalsMap.set(radical.id, radical)
      }
    }
  }

  return {
    uniqueKanji: Array.from(uniqueKanjiMap.values()),
    uniqueRadicals: Array.from(uniqueRadicalsMap.values()),
  }
}

function calculateSummary(
  hierarchy: VocabHierarchy[],
  uniqueKanji: Kanji[],
  uniqueRadicals: Radical[],
): HierarchySummary {
  const countProgress = (items: { progress?: ProgressState }[]) => ({
    wellKnown: items.filter((i) => i.progress === "well_known").length,
    learning: items.filter((i) => i.progress === "learning").length,
  })

  return {
    vocab: { total: hierarchy.length, ...countProgress(hierarchy) },
    kanji: { total: uniqueKanji.length, ...countProgress(uniqueKanji) },
    radicals: {
      total: uniqueRadicals.length,
      ...countProgress(uniqueRadicals),
    },
  }
}

// =============================================================================
// STATIC DATA ASSEMBLY FUNCTIONS
// =============================================================================

function buildStaticHierarchy(
  vocabRows: VocabRow[],
  kanjiRows: Omit<Kanji, "radicals" | "progress">[],
  radicalRows: Omit<Radical, "progress">[],
  relations: {
    vocabKanjiRelations: VocabKanjiRelation[]
    kanjiRadicalRelations: KanjiRadicalRelation[]
  },
): VocabHierarchy[] {
  // Build radicals map
  const radicalsMap = new Map<number, Radical>(
    radicalRows.map((r) => [r.id, { ...r }]),
  )

  // Build kanji map
  const kanjiMap = new Map<number, Kanji>(
    kanjiRows.map((k) => [k.id, { ...k, radicals: [] }]),
  )

  // Connect kanji to radicals
  for (const rel of relations.kanjiRadicalRelations) {
    const kanji = kanjiMap.get(rel.kanji_id)
    const radical = radicalsMap.get(rel.radical_id)
    if (kanji && radical) kanji.radicals.push(radical)
  }

  // Build vocabulary hierarchy
  return vocabRows.map((vocab) => {
    const relatedKanjiIds = relations.vocabKanjiRelations
      .filter((r) => r.vocab_id === vocab.id)
      .map((r) => r.kanji_id)
    const kanjiForVocab = relatedKanjiIds
      .map((id) => kanjiMap.get(id))
      .filter((k): k is Kanji => !!k)

    return {
      ...vocab,
      kanji: kanjiForVocab,
    }
  })
}

// =============================================================================
// PROGRESS-RELATED FUNCTIONS
// =============================================================================

function determineProgress(
  type: "vocabulary" | "kanji" | "radical",
  slug: string,
  progressMap: Map<string, FSRSCardData>,
): ProgressState {
  const key = `${type}:${slug}`
  const cardData = progressMap.get(key)

  if (!cardData) return "not_seen"

  return cardData.fsrs_card.stability >= WELL_KNOWN_THRESHOLD
    ? "well_known"
    : "learning"
}

function addProgressToItems<T extends { slug: string }>(
  items: T[],
  progressMap: Map<string, FSRSCardData>,
  type: "vocabulary" | "kanji" | "radical",
): (T & { progress: ProgressState })[] {
  return items.map((item) => ({
    ...item,
    progress: determineProgress(type, item.slug, progressMap),
  }))
}

function enrichWithProgress(
  hierarchy: VocabHierarchy[],
  uniqueKanji: Kanji[],
  uniqueRadicals: Radical[],
  progressMap: Map<string, FSRSCardData>,
): {
  hierarchy: VocabHierarchy[]
  uniqueKanji: Kanji[]
  uniqueRadicals: Radical[]
} {
  // Add progress to radicals
  const radicalsWithProgress = addProgressToItems(
    uniqueRadicals,
    progressMap,
    "radical",
  )
  const radicalsProgressMap = new Map(
    radicalsWithProgress.map((r) => [r.id, r]),
  )

  // Add progress to kanji and update their radicals
  const kanjiWithProgress = uniqueKanji.map((kanji) => ({
    ...kanji,
    progress: determineProgress("kanji", kanji.slug, progressMap),
    radicals: kanji.radicals.map((r) => radicalsProgressMap.get(r.id) || r),
  }))
  const kanjiProgressMap = new Map(kanjiWithProgress.map((k) => [k.id, k]))

  // Add progress to vocabulary and update their kanji
  const hierarchyWithProgress = hierarchy.map((vocab) => ({
    ...vocab,
    progress: determineProgress("vocabulary", vocab.slug, progressMap),
    kanji: vocab.kanji.map((k) => kanjiProgressMap.get(k.id) || k),
  }))

  return {
    hierarchy: hierarchyWithProgress,
    uniqueKanji: kanjiWithProgress,
    uniqueRadicals: radicalsWithProgress,
  }
}

// =============================================================================
// MAIN EXPORT FUNCTIONS (SERVER FUNCTIONS)
// =============================================================================

export const getWKHierarchy = createServerFn({ method: "GET" })
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }): Promise<FullHierarchyData | null> => {
    if (!slugs || slugs.length === 0) return null

    const staticData = await fetchStaticHierarchyFromDb(slugs)
    if (!staticData) return null

    const { vocabRows, kanjiRows, radicalRows, relations } = staticData
    const hierarchy = buildStaticHierarchy(
      vocabRows,
      kanjiRows,
      radicalRows,
      relations,
    )
    const { uniqueKanji, uniqueRadicals } = extractUniqueItems(hierarchy)
    const summary = calculateSummary(hierarchy, uniqueKanji, uniqueRadicals)

    return { hierarchy, uniqueKanji, uniqueRadicals, summary }
  })

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
