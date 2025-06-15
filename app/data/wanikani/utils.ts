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
  const results = db
    .prepare(
      `SELECT id, characters, slug FROM vocabulary WHERE slug IN (${placeholders})`,
    )
    .all(...slugs) as VocabRow[]

  // --- ADDED: Logging for missing vocabulary ---
  if (results.length !== slugs.length) {
    const foundSlugs = new Set(results.map((v) => v.slug))
    for (const slug of slugs) {
      if (!foundSlugs.has(slug)) {
        console.warn(
          `WaniKani DB Warning: Vocabulary slug not found: '${slug}'`,
        )
      }
    }
  }

  return results
}

function fetchRelatedKanji(db: Db, vocabIds: number[]): KanjiRow[] {
  if (vocabIds.length === 0) return []
  const placeholders = vocabIds.map(() => "?").join(",")
  return db
    .prepare(
      `SELECT DISTINCT k.id, k.characters, k.slug FROM kanji k JOIN vocab_kanji vk ON k.id = vk.kanji_id WHERE vk.vocab_id IN (${placeholders})`,
    )
    .all(...vocabIds) as KanjiRow[]
}

function fetchRelatedRadicals(db: Db, kanjiIds: number[]): RadicalRow[] {
  if (kanjiIds.length === 0) return []
  const placeholders = kanjiIds.map(() => "?").join(",")
  return db
    .prepare(
      `SELECT DISTINCT r.id, r.characters, r.slug FROM radicals r JOIN kanji_radicals kr ON r.id = kr.radical_id WHERE kr.kanji_id IN (${placeholders})`,
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
function buildHierarchy(
  vocabRows: VocabRow[],
  kanjiRows: KanjiRow[],
  radicalRows: RadicalRow[],
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

  const kanjiMap = new Map<number, Kanji>()
  for (const kanji of kanjiRows) {
    kanjiMap.set(kanji.id, {
      ...kanji,
      radicals: [],
      progress: determineProgress("kanji", kanji.slug, progressMap),
    })
  }

  for (const rel of relations.kanjiRadicalRelations) {
    const kanji = kanjiMap.get(rel.kanji_id)
    const radical = radicalsMap.get(rel.radical_id)
    if (kanji && radical) {
      kanji.radicals.push(radical)
    } else {
      // --- ADDED: Logging for missing radicals in relationships ---
      if (!radical) {
        console.warn(
          `WaniKani DB Warning: Radical with ID ${rel.radical_id} referenced by Kanji ID ${rel.kanji_id} but not found.`,
        )
      }
    }
  }

  return vocabRows.map((vocab) => {
    const relatedKanjiIds = relations.vocabKanjiRelations
      .filter((r) => r.vocab_id === vocab.id)
      .map((r) => r.kanji_id)

    const kanjiForVocab: Kanji[] = []
    for (const id of relatedKanjiIds) {
      const kanji = kanjiMap.get(id)
      if (kanji) {
        kanjiForVocab.push(kanji)
      } else {
        // --- ADDED: Logging for missing kanji in relationships ---
        console.warn(
          `WaniKani DB Warning: Kanji with ID ${id} linked to vocabulary '${vocab.characters}' but not found.`,
        )
      }
    }

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
  const countProgress = (items: { progress: ProgressState }[]) => ({
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

// --- Main Server Function ---

/**
 * Retrieve WaniKani hierarchy, summary, and flat lists.
 */
export const getWKVocabularyHierarchy = createServerFn({ method: "GET" })
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }): Promise<FullHierarchyData | null> => {
    if (!slugs || slugs.length === 0) return null

    const userResponse = await getUser()
    if (!userResponse.user) return null

    const db = getDbConnection()
    try {
      // 1. Fetch all related items from the local SQLite DB
      const vocabRows = fetchVocabulary(db, slugs)
      if (vocabRows.length === 0) return null

      const vocabIds = vocabRows.map((v) => v.id)
      const kanjiRows = fetchRelatedKanji(db, vocabIds)
      const kanjiIds = kanjiRows.map((k) => k.id)
      const radicalRows = fetchRelatedRadicals(db, kanjiIds)
      const relations = fetchRelationships(db, vocabIds, kanjiIds)

      // 2. Collect all unique slugs to fetch progress for
      const allSlugs = new Set<string>()
      vocabRows.forEach((v) => allSlugs.add(v.slug))
      kanjiRows.forEach((k) => allSlugs.add(k.slug))
      radicalRows.forEach((r) => r.slug && allSlugs.add(r.slug))

      // 3. Fetch live FSRS progress data from Supabase
      const fsrsData = await getFSRSCardsByKeys(
        userResponse.user.id,
        Array.from(allSlugs),
      )

      // 4. Create a performance-optimized lookup map with a composite key
      const progressMap = new Map(
        fsrsData.map((card) => [
          `${card.type}:${card.practice_item_key}`,
          card,
        ]),
      )

      // 5. Build the final hierarchy using the live progress data
      const hierarchy = buildHierarchy(
        vocabRows,
        kanjiRows,
        radicalRows,
        relations,
        progressMap,
      )

      const { uniqueKanji, uniqueRadicals } = extractUniqueItems(hierarchy)
      const summary = calculateSummary(hierarchy, uniqueKanji, uniqueRadicals)

      return { hierarchy, uniqueKanji, uniqueRadicals, summary }
    } finally {
      db.close()
    }
  })
