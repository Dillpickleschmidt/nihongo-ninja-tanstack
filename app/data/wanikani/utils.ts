// app/data/wanikani/utils.ts
import { createServerFn } from "@tanstack/solid-start"
import type { Database as Db } from "better-sqlite3"
import Database from "better-sqlite3"
import path from "node:path"
import {
  getFSRSCardsByKeys,
  type FSRSCardData,
} from "@/features/supabase/db/utils"
import { getUser } from "@/features/supabase/getUser"
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

// --- Database & Data Fetching Functions ---

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

  // --- ADDED: Logging for missing vocabulary ---
  // if (results.length !== slugs.length) {
  //   const foundSlugs = new Set(results.map((v) => v.slug))
  //   for (const slug of slugs) {
  //     if (!foundSlugs.has(slug)) {
  //       console.warn(
  //         `WaniKani DB Warning: Vocabulary slug not found: '${slug}'`,
  //       )
  //     }
  //   }
  // }
  //
  // return results
}

// Update fetchRelatedKanji to include mnemonics
function fetchRelatedKanji(db: Db, vocabIds: number[]): KanjiRow[] {
  if (vocabIds.length === 0) return []
  const placeholders = vocabIds.map(() => "?").join(",")
  return db
    .prepare(
      `SELECT DISTINCT k.id, k.characters, k.slug, k.meanings, k.meaning_mnemonic, k.reading_mnemonic FROM kanji k JOIN vocab_kanji vk ON k.id = vk.kanji_id WHERE vk.vocab_id IN (${placeholders})`,
    )
    .all(...vocabIds) as KanjiRow[]
}

// Update fetchRelatedRadicals to include mnemonics
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

    const parsedKanjiRows = kanjiRows.map((k) => {
      const parsedMeanings = JSON.parse(k.meanings) as WaniKaniMeaning[]
      const meaningStrings = parsedMeanings.map((m) => m.meaning)
      return {
        ...k,
        meanings: meaningStrings,
        meaning_mnemonic: k.meaning_mnemonic, // Direct assignment
        reading_mnemonic: k.reading_mnemonic, // Direct assignment
      }
    })

    const parsedRadicalRows = radicalRows.map((r) => {
      const parsedMeanings = JSON.parse(r.meanings) as WaniKaniMeaning[]
      const meaningStrings = parsedMeanings.map((m) => m.meaning)
      return {
        ...r,
        meanings: meaningStrings,
        meaning_mnemonic: r.meaning_mnemonic, // Direct assignment
      }
    })

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

// --- Data Processing & Assembly Functions ---

/** Determines an item's progress state using the live FSRS data map. */
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

/** Assembles the full data hierarchy from raw DB rows and live user progress. */
function buildRichHierarchy(
  vocabRows: VocabRow[],
  kanjiRows: Omit<Kanji, "radicals" | "progress">[],
  radicalRows: Omit<Radical, "progress">[],
  relations: {
    vocabKanjiRelations: VocabKanjiRelation[]
    kanjiRadicalRelations: KanjiRadicalRelation[]
  },
  progressMap: Map<string, FSRSCardData>,
): VocabHierarchy[] {
  const radicalsMap = new Map<number, Radical>(
    radicalRows.map((r) => [
      r.id,
      {
        ...r,
        progress: determineProgress("radical", r.slug, progressMap),
      },
    ]),
  )
  const kanjiMap = new Map<number, Kanji>(
    kanjiRows.map((k) => [
      k.id,
      {
        ...k,
        radicals: [],
        progress: determineProgress("kanji", k.slug, progressMap),
      },
    ]),
  )

  for (const rel of relations.kanjiRadicalRelations) {
    const kanji = kanjiMap.get(rel.kanji_id)
    const radical = radicalsMap.get(rel.radical_id)
    if (kanji && radical) kanji.radicals.push(radical)
  }
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
      progress: determineProgress("vocabulary", vocab.slug, progressMap),
    }
  })
}

/** Extracts unique Kanji and Radicals from the assembled hierarchy. */
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

// --- EXPORTED SERVER FUNCTIONS ---

export const getRichWKHierarchyWithProgress = createServerFn({ method: "GET" })
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }): Promise<FullHierarchyData | null> => {
    if (!slugs || slugs.length === 0) return null
    const userResponse = await getUser()
    if (!userResponse.user) return null

    const staticData = fetchStaticHierarchyFromDb(slugs)
    if (!staticData) return null
    const { vocabRows, kanjiRows, radicalRows, relations } = staticData

    const allSlugs = new Set<string>()
    vocabRows.forEach((v) => allSlugs.add(v.slug))
    kanjiRows.forEach((k) => allSlugs.add(k.slug))
    radicalRows.forEach((r) => r.slug && allSlugs.add(r.slug))

    const fsrsData = await getFSRSCardsByKeys(
      userResponse.user.id,
      Array.from(allSlugs),
    )
    const progressMap = new Map(
      fsrsData.map((card) => [`${card.type}:${card.practice_item_key}`, card]),
    )

    const hierarchy = buildRichHierarchy(
      vocabRows,
      kanjiRows,
      radicalRows,
      relations,
      progressMap,
    )
    const { uniqueKanji, uniqueRadicals } = extractUniqueItems(hierarchy)
    const summary = calculateSummary(hierarchy, uniqueKanji, uniqueRadicals)

    return { hierarchy, uniqueKanji, uniqueRadicals, summary }
  })

// --- Pass parsed meanings into the static objects ---
export const getStaticWKHierarchy = createServerFn({ method: "GET" })
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }): Promise<FullHierarchyData | null> => {
    const staticData = fetchStaticHierarchyFromDb(slugs)
    if (!staticData) return null
    const { vocabRows, kanjiRows, radicalRows, relations } = staticData

    const kanjiMap = new Map<number, Kanji>(
      kanjiRows.map((k) => [k.id, { ...k, radicals: [] }]),
    )
    const radicalsMap = new Map<number, Radical>(
      radicalRows.map((r) => [r.id, { ...r }]),
    )

    for (const rel of relations.kanjiRadicalRelations) {
      const kanji = kanjiMap.get(rel.kanji_id)
      const radical = radicalsMap.get(rel.radical_id)
      if (kanji && radical) kanji.radicals.push(radical)
    }

    const hierarchy = vocabRows.map((vocab) => {
      const relatedKanjiIds = relations.vocabKanjiRelations
        .filter((r) => r.vocab_id === vocab.id)
        .map((r) => r.kanji_id)
      const kanjiForVocab = relatedKanjiIds
        .map((id) => kanjiMap.get(id))
        .filter((k): k is Kanji => !!k)
      return { ...vocab, kanji: kanjiForVocab }
    })

    const { uniqueKanji, uniqueRadicals } = extractUniqueItems(hierarchy)

    return { hierarchy, uniqueKanji, uniqueRadicals }
  })

/**
 * Fetches detailed Kanji data by its slug.
 */
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

      const parsedMeanings = JSON.parse(kanjiRow.meanings) as WaniKaniMeaning[]
      const meaningStrings = parsedMeanings.map((m) => m.meaning)

      // Radicals are not needed for a single Kanji lookup in this context
      return {
        id: kanjiRow.id,
        characters: kanjiRow.characters,
        slug: kanjiRow.slug,
        meanings: meaningStrings,
        radicals: [], // Empty array as radicals are not fetched in this specific lookup
        meaning_mnemonic: kanjiRow.meaning_mnemonic, // Direct assignment
        reading_mnemonic: kanjiRow.reading_mnemonic, // Direct assignment
      }
    } finally {
      db.close()
    }
  })

/**
 * Fetches detailed Radical data by its slug.
 */
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

      const parsedMeanings = JSON.parse(
        radicalRow.meanings,
      ) as WaniKaniMeaning[]
      const meaningStrings = parsedMeanings.map((m) => m.meaning)

      return {
        id: radicalRow.id,
        characters: radicalRow.characters,
        slug: radicalRow.slug,
        meanings: meaningStrings,
        meaning_mnemonic: radicalRow.meaning_mnemonic,
      }
    } finally {
      db.close()
    }
  })
