// src/features/resolvers/util/hierarchy-builder.ts
// Clean, declarative hierarchy system for vocabulary → kanji → radicals

import { getWanikaniItems } from "@/features/supabase/db/wanikani"
import { extractKanjiCharacters } from "@/data/utils/text/japanese"

// =============================================================================
// CLEAN TYPES - Simple, focused objects
// =============================================================================

// --- Display Data Types (full data for rendering) ---

export type KanjiEntry = {
  kanji: string // "二"
  radicalComponents: string[] // ["一", "亅"]
  meanings: string[]
  meaning_mnemonic: string
  reading_mnemonic?: string
}

export type RadicalEntry = {
  radical: string // "一"
  meanings: string[]
  meaning_mnemonic: string
}

// --- Relationship Types (lightweight, for dependency tracking) ---

export type VocabRelationship = {
  word: string // "二十三"
  kanjiComponents: string[] // ["二", "十", "三"]
}

export type KanjiRelationship = {
  kanji: string // "二"
  radicalComponents: string[] // ["一", "亅"]
}

/**
 * VocabHierarchy contains ONLY relationship data (no display data like meanings).
 * Used for dependency tracking and prerequisite logic.
 * Display data (KanjiEntry[], RadicalEntry[]) is stored separately.
 */
export type VocabHierarchy = {
  vocabulary: VocabRelationship[]
  kanji: KanjiRelationship[]
  radicals: string[] // Just the radical characters
}

// =============================================================================
// MAIN HIERARCHY BUILDER
// =============================================================================

/**
 * Build a vocabulary hierarchy from vocabulary words.
 * Fetches kanji and radical data from the database.
 *
 * @param vocabularyWords - Array of vocabulary words (e.g., ["一", "二十三", "学校"])
 * @returns Hierarchy (relationships only) + display data (kanji/radicals with meanings)
 */
export async function buildVocabHierarchy(vocabularyWords: string[]): Promise<{
  hierarchy: VocabHierarchy
  kanji: KanjiEntry[]
  radicals: RadicalEntry[]
}> {
  // 1. Extract all unique kanji from all vocabulary words (preserving order)
  const allKanjiChars: string[] = []
  const seenKanji = new Set<string>()
  for (const word of vocabularyWords) {
    for (const kanji of extractKanjiCharacters(word)) {
      if (!seenKanji.has(kanji)) {
        seenKanji.add(kanji)
        allKanjiChars.push(kanji)
      }
    }
  }

  // 2. Query database for kanji and their radicals (batch operations)
  const kanjiEntries = (await getWanikaniItems(allKanjiChars)).kanji

  // 3. Get all unique radicals from kanji components and fetch their data (preserving order)
  const allRadicalChars: string[] = []
  const seenRadicals = new Set<string>()
  for (const kanji of kanjiEntries) {
    for (const radical of kanji.radicalComponents) {
      if (!seenRadicals.has(radical)) {
        seenRadicals.add(radical)
        allRadicalChars.push(radical)
      }
    }
  }

  const radicalResult = await getWanikaniItems([], allRadicalChars)
  const radicalEntries = radicalResult.radicals

  // 4. Build lightweight hierarchy (relationships only)
  const hierarchy = buildHierarchyFromData(
    vocabularyWords,
    kanjiEntries,
    radicalEntries,
  )

  return {
    hierarchy,
    kanji: kanjiEntries,
    radicals: radicalEntries,
  }
}

/**
 * Build a lightweight hierarchy from already-fetched data.
 * This avoids re-fetching when display data is already available.
 *
 * @param vocabularyWords - Array of vocabulary words
 * @param kanjiEntries - Already-fetched kanji display data
 * @param radicalEntries - Already-fetched radical display data
 * @returns Lightweight hierarchy with only relationship data
 */
export function buildHierarchyFromData(
  vocabularyWords: string[],
  kanjiEntries: KanjiEntry[],
  radicalEntries: RadicalEntry[],
): VocabHierarchy {
  // Build vocabulary relationships
  const vocabulary: VocabRelationship[] = vocabularyWords.map((word) => ({
    word,
    kanjiComponents: extractKanjiCharacters(word),
  }))

  // Build kanji relationships (strip display data)
  const kanji: KanjiRelationship[] = kanjiEntries.map((k) => ({
    kanji: k.kanji,
    radicalComponents: k.radicalComponents,
  }))

  // Just the radical characters
  const radicals: string[] = radicalEntries.map((r) => r.radical)

  return { vocabulary, kanji, radicals }
}
