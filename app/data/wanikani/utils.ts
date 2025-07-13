// app/data/wanikani/utils.ts
import { createServerFn } from "@tanstack/solid-start"
import type { Database as Db } from "better-sqlite3"
import Database from "better-sqlite3"
import path from "node:path"
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

function getDbConnection(): Db {
  const dbPath = path.join(
    process.cwd(),
    "app",
    "data",
    "wanikani",
    "wanikani.db",
  )
  return new Database(dbPath, { readonly: true, fileMustExist: true })
}

function fetchVocabulary(db: Db, slugs: string[]): VocabRow[] {
  if (slugs.length === 0) return []
  const placeholders = slugs.map(() => "?").join(",")
  return db
    .prepare(
      `SELECT id, characters, slug FROM vocabulary WHERE slug IN (${placeholders})`,
    )
    .all(...slugs) as VocabRow[]
}

function fetchRelatedKanji(db: Db, vocabIds: number[]): KanjiRow[] {
  if (vocabIds.length === 0) return []
  const placeholders = vocabIds.map(() => "?").join(",")
  return db
    .prepare(
      `SELECT DISTINCT k.id, k.characters, k.slug, k.meanings, k.meaning_mnemonic, k.reading_mnemonic FROM kanji k JOIN vocab_kanji vk ON k.id = vk.kanji_id WHERE vk.vocab_id IN (${placeholders})`,
    )
    .all(...vocabIds) as KanjiRow[]
}

function fetchRelatedRadicals(db: Db, kanjiIds: number[]): RadicalRow[] {
  if (kanjiIds.length === 0) return []
  const placeholders = kanjiIds.map(() => "?").join(",")
  return db
    .prepare(
      `SELECT DISTINCT r.id, r.characters, r.slug, r.meanings, r.meaning_mnemonic FROM radicals r JOIN kanji_radicals kr ON r.id = kr.radical_id WHERE kr.kanji_id IN (${placeholders})`,
    )
    .all(...kanjiIds) as RadicalRow[]
}

function fetchRelationships(db: Db, vocabIds: number[], kanjiIds: number[]) {
  const vocabPlaceholders = vocabIds.map(() => "?").join(",")
  const vocabKanjiRelations = db
    .prepare(
      `SELECT vocab_id, kanji_id FROM vocab_kanji WHERE vocab_id IN (${vocabPlaceholders})`,
    )
    .all(...vocabIds) as VocabKanjiRelation[]

  let kanjiRadicalRelations: KanjiRadicalRelation[] = []
  if (kanjiIds.length > 0) {
    const radicalPlaceholders = kanjiIds.map(() => "?").join(",")
    kanjiRadicalRelations = db
      .prepare(
        `SELECT kanji_id, radical_id FROM kanji_radicals WHERE kanji_id IN (${radicalPlaceholders})`,
      )
      .all(...kanjiIds) as KanjiRadicalRelation[]
  }
  return { vocabKanjiRelations, kanjiRadicalRelations }
}

/**
 * Retrieve WaniKani hierarchy, summary, and flat lists.
 */
function fetchStaticHierarchyFromDb(slugs: string[]) {
  const db = getDbConnection()
  try {
    const vocabRows = fetchVocabulary(db, slugs)
    if (vocabRows.length === 0) return null

    const vocabIds = vocabRows.map((v) => v.id)
    const kanjiRows = fetchRelatedKanji(db, vocabIds)
    const kanjiIds = kanjiRows.map((k) => k.id)
    const radicalRows = fetchRelatedRadicals(db, kanjiIds)
    const relations = fetchRelationships(db, vocabIds, kanjiIds)

    const parsedKanjiRows = kanjiRows.map((k) => ({
      ...k,
      meanings: parseMeanings(k.meanings),
    }))

    const parsedRadicalRows = radicalRows.map((r) => ({
      ...r,
      meanings: parseMeanings(r.meanings),
    }))

    return {
      vocabRows,
      kanjiRows: parsedKanjiRows,
      radicalRows: parsedRadicalRows,
      relations,
    }
  } finally {
    db.close()
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

    const staticData = fetchStaticHierarchyFromDb(slugs)
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
    if (!data || !data.slugs || data.slugs.length === 0 || !data.userId)
      return null

    // Get all vocabulary items and their related kanji/radicals to build the full slug list
    const staticData = fetchStaticHierarchyFromDb(data.slugs)
    if (!staticData) return null

    // Collect all slugs for progress lookup
    const allSlugs = new Set<string>()
    staticData.vocabRows.forEach((v) => allSlugs.add(v.slug))
    staticData.kanjiRows.forEach((k) => allSlugs.add(k.slug))
    staticData.radicalRows.forEach((r) => r.slug && allSlugs.add(r.slug))

    const fsrsData = await getFSRSCardsByKeys(data.userId, Array.from(allSlugs))

    // Return a plain object instead of Map
    const progressRecord: Record<string, FSRSCardData> = {}
    fsrsData.forEach((card) => {
      progressRecord[`${card.type}:${card.practice_item_key}`] = card
    })

    return progressRecord
  })

export const getKanjiDetailsBySlug = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }): Promise<Kanji | null> => {
    if (!slug) return null
    const db = getDbConnection()
    try {
      const kanjiRow = db
        .prepare(
          `SELECT id, characters, slug, meanings, meaning_mnemonic, reading_mnemonic FROM kanji WHERE slug = ?`,
        )
        .get(slug) as KanjiRow | undefined

      if (!kanjiRow) return null

      return {
        id: kanjiRow.id,
        characters: kanjiRow.characters,
        slug: kanjiRow.slug,
        meanings: parseMeanings(kanjiRow.meanings),
        radicals: [], // Empty array as radicals are not fetched in this specific lookup
        meaning_mnemonic: kanjiRow.meaning_mnemonic,
        reading_mnemonic: kanjiRow.reading_mnemonic,
      }
    } finally {
      db.close()
    }
  })

export const getRadicalDetailsBySlug = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }): Promise<Radical | null> => {
    if (!slug) return null
    const db = getDbConnection()
    try {
      const radicalRow = db
        .prepare(
          `SELECT id, characters, slug, meanings, meaning_mnemonic FROM radicals WHERE slug = ?`,
        )
        .get(slug) as RadicalRow | undefined

      if (!radicalRow) return null

      return {
        id: radicalRow.id,
        characters: radicalRow.characters,
        slug: radicalRow.slug,
        meanings: parseMeanings(radicalRow.meanings),
        meaning_mnemonic: radicalRow.meaning_mnemonic,
      }
    } finally {
      db.close()
    }
  })
