// app/data/wanikani/utils.ts
import { createServerFn } from "@tanstack/solid-start"
import Database from "better-sqlite3"
import path from "node:path"

// --- Type Definitions ---

type ProgressState = "learned" | "in_progress" | "not_learned"

export interface Radical {
  id: number
  characters: string | null
  slug: string
  progress: ProgressState
}

export interface Kanji {
  id: number
  characters: string
  slug: string
  radicals: Radical[]
  progress: ProgressState
}

export interface VocabHierarchy {
  id: number
  characters: string
  slug: string
  kanji: Kanji[]
  learned: boolean
}

export interface HierarchySummary {
  vocab: { total: number; learned: number }
  kanji: { total: number; learned: number; inProgress: number }
  radicals: { total: number; learned: number; inProgress: number }
}

export interface FullHierarchyData {
  hierarchy: VocabHierarchy[]
  uniqueKanji: Kanji[]
  uniqueRadicals: Radical[]
  summary: HierarchySummary
}

// A static set of learned/in-progress item IDs to simulate user progress.
const MOCK_USER_PROGRESS_DB = {
  learnedVocabIds: new Set([8788]),
  learnedKanjiIds: new Set([662, 701]),
  inProgressKanjiIds: new Set([667]),
  learnedRadicalIds: new Set([13, 22, 214]),
  inProgressRadicalIds: new Set([36, 89, 192]),
}

/**
 * Server Function to retrieve WaniKani hierarchy, summary, and flat lists.
 * It fetches the real structure from the DB and augments it with mock progress.
 */
export const getWKVocabularyHierarchy = createServerFn({ method: "GET" })
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }): Promise<FullHierarchyData | null> => {
    if (slugs.length === 0) {
      return null
    }

    const dbPath = path.join(
      process.cwd(),
      "app",
      "data",
      "wanikani",
      "wanikani.db",
    )
    const db = new Database(dbPath, { readonly: true, fileMustExist: true })

    try {
      const vocabPlaceholders = slugs.map(() => "?").join(",")
      const vocabRows = db
        .prepare(
          `SELECT id, characters, slug FROM vocabulary WHERE slug IN (${vocabPlaceholders})`,
        )
        .all(...slugs) as { id: number; characters: string; slug: string }[]

      if (vocabRows.length === 0) return null

      const vocabIds = vocabRows.map((v) => v.id)
      const kanjiPlaceholders = vocabIds.map(() => "?").join(",")
      const kanjiRows = db
        .prepare(
          ` SELECT DISTINCT k.id, k.characters, k.slug FROM kanji k
            JOIN vocab_kanji vk ON k.id = vk.kanji_id WHERE vk.vocab_id IN (${kanjiPlaceholders})`,
        )
        .all(...vocabIds) as Omit<Kanji, "radicals" | "progress">[]

      const kanjiIds = kanjiRows.map((k) => k.id)
      const radicalPlaceholders = kanjiIds.map(() => "?").join(",")
      const radicalRows =
        kanjiIds.length > 0
          ? (db
              .prepare(
                ` SELECT DISTINCT r.id, r.characters, r.slug FROM radicals r
                  JOIN kanji_radicals kr ON r.id = kr.radical_id WHERE kr.kanji_id IN (${radicalPlaceholders})`,
              )
              .all(...kanjiIds) as Omit<Radical, "progress">[])
          : []

      const vocabKanjiRelations = db
        .prepare(
          `SELECT vocab_id, kanji_id FROM vocab_kanji WHERE vocab_id IN (${vocabPlaceholders})`,
        )
        .all(...vocabIds) as { vocab_id: number; kanji_id: number }[]
      const kanjiRadicalRelations =
        kanjiIds.length > 0
          ? (db
              .prepare(
                `SELECT kanji_id, radical_id FROM kanji_radicals WHERE kanji_id IN (${radicalPlaceholders})`,
              )
              .all(...kanjiIds) as { kanji_id: number; radical_id: number }[])
          : []

      const getProgress = (
        id: number,
        learnedSet: Set<number>,
        inProgressSet: Set<number>,
      ): ProgressState => {
        if (learnedSet.has(id)) return "learned"
        if (inProgressSet.has(id)) return "in_progress"
        return "not_learned"
      }

      const radicalsMap = new Map(
        radicalRows.map((r) => [
          r.id,
          {
            ...r,
            progress: getProgress(
              r.id,
              MOCK_USER_PROGRESS_DB.learnedRadicalIds,
              MOCK_USER_PROGRESS_DB.inProgressRadicalIds,
            ),
          },
        ]),
      )

      const kanjiMap = new Map<number, Kanji>()
      for (const kanji of kanjiRows) {
        kanjiMap.set(kanji.id, {
          ...kanji,
          radicals: [],
          progress: getProgress(
            kanji.id,
            MOCK_USER_PROGRESS_DB.learnedKanjiIds,
            MOCK_USER_PROGRESS_DB.inProgressKanjiIds,
          ),
        })
      }

      for (const rel of kanjiRadicalRelations) {
        const kanji = kanjiMap.get(rel.kanji_id)
        const radical = radicalsMap.get(rel.radical_id)
        if (kanji && radical) kanji.radicals.push(radical)
      }

      const hierarchy: VocabHierarchy[] = vocabRows.map((vocab) => {
        const relatedKanjiIds = vocabKanjiRelations
          .filter((r) => r.vocab_id === vocab.id)
          .map((r) => r.kanji_id)
        const kanji = relatedKanjiIds
          .map((id) => kanjiMap.get(id))
          .filter((k): k is Kanji => !!k)
        return {
          ...vocab,
          kanji,
          learned: MOCK_USER_PROGRESS_DB.learnedVocabIds.has(vocab.id),
        }
      })

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
      const uniqueKanji = Array.from(uniqueKanjiMap.values())
      const uniqueRadicals = Array.from(uniqueRadicalsMap.values())

      const summary: HierarchySummary = {
        vocab: {
          total: hierarchy.length,
          learned: hierarchy.filter((v) => v.learned).length,
        },
        kanji: {
          total: uniqueKanji.length,
          learned: uniqueKanji.filter((k) => k.progress === "learned").length,
          inProgress: uniqueKanji.filter((k) => k.progress === "in_progress")
            .length,
        },
        radicals: {
          total: uniqueRadicals.length,
          learned: uniqueRadicals.filter((r) => r.progress === "learned")
            .length,
          inProgress: uniqueRadicals.filter((r) => r.progress === "in_progress")
            .length,
        },
      }

      return { hierarchy, uniqueKanji, uniqueRadicals, summary }
    } finally {
      db.close()
    }
  })
