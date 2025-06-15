// app/data/wanikani/utils.ts
import { createServerFn } from "@tanstack/solid-start"
import type { Database as Db } from "better-sqlite3"
import Database from "better-sqlite3"
import path from "node:path"
import type {
  FullHierarchyData,
  HierarchySummary,
  Kanji,
  KanjiRadicalRelation,
  KanjiRow,
  ProgressState,
  Radical,
  RadicalRow,
  UserProgressData,
  VocabHierarchy,
  VocabKanjiRelation,
  VocabRow,
} from "./types"

// --- Mock Data and Constants ---

const MOCK_USER_PROGRESS_DB: UserProgressData = {
  vocabProgress: new Map([[8788, { stability: 50 }]]),
  kanjiProgress: new Map([
    [662, { stability: 100 }],
    [701, { stability: 25 }],
    [667, { stability: 15 }],
  ]),
  radicalProgress: new Map([
    [13, { stability: 30 }],
    [22, { stability: 21 }],
    [36, { stability: 5 }],
    [89, { stability: 19 }],
  ]),
}

const WELL_KNOWN_THRESHOLD = 21

// --- Database & Data Fetching Functions ---

/** Establishes and returns a connection to the SQLite database. */
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

/** Fetches base vocabulary items from the database by their slugs. */
function fetchVocabulary(db: Db, slugs: string[]): VocabRow[] {
  if (slugs.length === 0) return []
  const placeholders = slugs.map(() => "?").join(",")
  return db
    .prepare(
      `SELECT id, characters, slug FROM vocabulary WHERE slug IN (${placeholders})`,
    )
    .all(...slugs) as VocabRow[]
}

/** Fetches Kanji related to a list of vocabulary IDs. */
function fetchRelatedKanji(db: Db, vocabIds: number[]): KanjiRow[] {
  if (vocabIds.length === 0) return []
  const placeholders = vocabIds.map(() => "?").join(",")
  return db
    .prepare(
      `SELECT DISTINCT k.id, k.characters, k.slug FROM kanji k JOIN vocab_kanji vk ON k.id = vk.kanji_id WHERE vk.vocab_id IN (${placeholders})`,
    )
    .all(...vocabIds) as KanjiRow[]
}

/** Fetches Radicals related to a list of Kanji IDs. */
function fetchRelatedRadicals(db: Db, kanjiIds: number[]): RadicalRow[] {
  if (kanjiIds.length === 0) return []
  const placeholders = kanjiIds.map(() => "?").join(",")
  return db
    .prepare(
      `SELECT DISTINCT r.id, r.characters, r.slug FROM radicals r JOIN kanji_radicals kr ON r.id = kr.radical_id WHERE kr.kanji_id IN (${placeholders})`,
    )
    .all(...kanjiIds) as RadicalRow[]
}

/** Fetches relationship data from join tables. */
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

/** Determines an item's progress state based on its stability. */
function determineProgress(
  id: number,
  progressMap: Map<number, { stability: number }>,
): ProgressState {
  const card = progressMap.get(id)
  if (!card) return "not_seen"
  return card.stability >= WELL_KNOWN_THRESHOLD ? "well_known" : "learning"
}

/** Assembles the full data hierarchy from raw database rows and user progress. */
function buildHierarchy(
  vocabRows: VocabRow[],
  kanjiRows: KanjiRow[],
  radicalRows: RadicalRow[],
  relations: {
    vocabKanjiRelations: VocabKanjiRelation[]
    kanjiRadicalRelations: KanjiRadicalRelation[]
  },
  progressData: UserProgressData,
): VocabHierarchy[] {
  const radicalsMap = new Map(
    radicalRows.map((r) => [
      r.id,
      {
        ...r,
        progress: determineProgress(r.id, progressData.radicalProgress),
      },
    ]),
  )

  const kanjiMap = new Map<number, Kanji>()
  for (const kanji of kanjiRows) {
    kanjiMap.set(kanji.id, {
      ...kanji,
      radicals: [],
      progress: determineProgress(kanji.id, progressData.kanjiProgress),
    })
  }

  for (const rel of relations.kanjiRadicalRelations) {
    const kanji = kanjiMap.get(rel.kanji_id)
    const radical = radicalsMap.get(rel.radical_id)
    if (kanji && radical) kanji.radicals.push(radical)
  }

  return vocabRows.map((vocab) => {
    const relatedKanjiIds = relations.vocabKanjiRelations
      .filter((r) => r.vocab_id === vocab.id)
      .map((r) => r.kanji_id)
    const kanji = relatedKanjiIds
      .map((id) => kanjiMap.get(id))
      .filter((k): k is Kanji => !!k)
    return {
      ...vocab,
      kanji,
      progress: determineProgress(vocab.id, progressData.vocabProgress),
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

/** Calculates summary statistics based on the processed data. */
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
 * Server Function to retrieve WaniKani hierarchy, summary, and flat lists.
 * It composes smaller functions to fetch, process, and assemble the data.
 */
export const getWKVocabularyHierarchy = createServerFn({ method: "GET" })
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }): Promise<FullHierarchyData | null> => {
    if (!slugs || slugs.length === 0) {
      return null
    }

    const db = getDbConnection()
    try {
      const vocabRows = fetchVocabulary(db, slugs)
      if (vocabRows.length === 0) return null

      const vocabIds = vocabRows.map((v) => v.id)
      const kanjiRows = fetchRelatedKanji(db, vocabIds)
      const kanjiIds = kanjiRows.map((k) => k.id)
      const radicalRows = fetchRelatedRadicals(db, kanjiIds)
      const relations = fetchRelationships(db, vocabIds, kanjiIds)

      const hierarchy = buildHierarchy(
        vocabRows,
        kanjiRows,
        radicalRows,
        relations,
        MOCK_USER_PROGRESS_DB,
      )

      const { uniqueKanji, uniqueRadicals } = extractUniqueItems(hierarchy)
      const summary = calculateSummary(hierarchy, uniqueKanji, uniqueRadicals)

      return { hierarchy, uniqueKanji, uniqueRadicals, summary }
    } finally {
      db.close()
    }
  })
