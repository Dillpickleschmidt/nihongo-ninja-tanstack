// src/features/resolvers/util/hierarchy-builder.ts
// Clean, declarative hierarchy system for vocabulary → kanji → radicals

import { getWanikaniItems } from "@/features/supabase/db/wanikani"
import { extractKanjiCharacters } from "@/data/utils/text/japanese"

// =============================================================================
// CLEAN TYPES - Simple, focused objects
// =============================================================================

export type VocabEntry = {
  word: string // "二十三"
  kanjiComponents: string[] // ["二", "十", "三"]
}

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

export type VocabHierarchy = {
  vocabulary: VocabEntry[]
  kanji: KanjiEntry[]
  radicals: RadicalEntry[]
}

// =============================================================================
// MAIN HIERARCHY BUILDER
// =============================================================================

/**
 * Build a clean vocabulary hierarchy from vocabulary words
 * This is the main entry point for the hierarchy system
 *
 * @param vocabularyWords - Array of vocabulary words (e.g., ["一", "二十三", "学校"])
 * @returns Clean hierarchy with vocabulary → kanji → radicals structure
 */
export async function buildVocabHierarchy(
  vocabularyWords: string[],
): Promise<VocabHierarchy> {
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

  // 4. Build clean vocabulary entries with their kanji dependencies
  const vocabularyEntries: VocabEntry[] = vocabularyWords.map((word) => ({
    word,
    kanjiComponents: extractKanjiCharacters(word),
  }))

  const result: VocabHierarchy = {
    vocabulary: vocabularyEntries,
    kanji: kanjiEntries,
    radicals: radicalEntries,
  }

  return result
}

