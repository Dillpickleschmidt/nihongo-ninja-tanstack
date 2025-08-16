// src/data/wanikani/hierarchy-builder.ts
// Clean, declarative hierarchy system for vocabulary → kanji → radicals

import { getDbConnection } from "./utils"

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
  meaning_mnemonic?: string
  reading_mnemonic?: string
}

export type RadicalEntry = {
  radical: string // "一"
  meanings: string[]
  meaning_mnemonic?: string
}

export type VocabHierarchy = {
  vocabulary: VocabEntry[]
  kanji: KanjiEntry[]
  radicals: RadicalEntry[]
}

// =============================================================================
// KANJI DETECTION & EXTRACTION
// =============================================================================

/**
 * Extract all kanji characters from text using Unicode ranges
 * @param text - Input text that may contain kanji
 * @returns Array of unique kanji characters
 */
export function extractKanjiCharacters(text: string): string[] {
  // Kanji Unicode ranges:
  // \u4e00-\u9faf: CJK Unified Ideographs (main kanji block)
  const kanjiRegex = /[\u4e00-\u9faf]/g
  const matches = text.match(kanjiRegex) || []
  return [...new Set(matches)] // Remove duplicates
}

/**
 * Check if a character is a kanji
 * @param char - Single character to check
 * @returns True if the character is kanji
 */
export function isKanji(char: string): boolean {
  return /[\u4e00-\u9faf]/.test(char)
}

// =============================================================================
// DATABASE QUERY FUNCTIONS
// =============================================================================

/**
 * Fetch kanji data by kanji characters (batch query)
 * @param kanjiChars - Array of kanji characters to look up
 * @returns Array of kanji entries with their data
 */
async function fetchKanjiByCharacters(
  kanjiChars: string[],
): Promise<KanjiEntry[]> {
  if (kanjiChars.length === 0) return []

  const db = await getDbConnection()
  const placeholders = kanjiChars.map(() => "?").join(",")

  // Get kanji with their radicals in a single query
  const query = `
    SELECT DISTINCT 
      k.characters as kanji_char,
      k.meanings as kanji_meanings,
      k.meaning_mnemonic as kanji_meaning_mnemonic,
      k.reading_mnemonic as kanji_reading_mnemonic,
      r.characters as radical_char,
      r.meanings as radical_meanings,
      r.meaning_mnemonic as radical_meaning_mnemonic
    FROM kanji k
    LEFT JOIN kanji_radicals kr ON k.id = kr.kanji_id
    LEFT JOIN radicals r ON kr.radical_id = r.id
    WHERE k.characters IN (${placeholders})
  `

  const rows = db.prepare(query).all(...kanjiChars) as Array<{
    kanji_char: string
    kanji_meanings: string
    kanji_meaning_mnemonic?: string
    kanji_reading_mnemonic?: string
    radical_char?: string
    radical_meanings?: string
    radical_meaning_mnemonic?: string
  }>

  // Group by kanji character
  const kanjiMap = new Map<string, KanjiEntry>()

  for (const row of rows) {
    if (!kanjiMap.has(row.kanji_char)) {
      kanjiMap.set(row.kanji_char, {
        kanji: row.kanji_char,
        radicalComponents: [],
        meanings: JSON.parse(row.kanji_meanings).map((m: any) => m.meaning),
        meaning_mnemonic: row.kanji_meaning_mnemonic || undefined,
        reading_mnemonic: row.kanji_reading_mnemonic || undefined,
      })
    }

    // Add radical if it exists and isn't already added
    if (row.radical_char) {
      const kanjiEntry = kanjiMap.get(row.kanji_char)!
      if (!kanjiEntry.radicalComponents.includes(row.radical_char)) {
        kanjiEntry.radicalComponents.push(row.radical_char)
      }
    }
  }

  const result = Array.from(kanjiMap.values())

  return result
}

// =============================================================================
// MAIN HIERARCHY BUILDER
// =============================================================================

/**
 * Build a clean vocabulary hierarchy from vocabulary words
 * This is the main entry point for the new hierarchy system
 *
 * @param vocabularyWords - Array of vocabulary words (e.g., ["一", "二十三", "学校"])
 * @returns Clean hierarchy with vocabulary → kanji → radicals structure
 */
export async function buildVocabHierarchy(
  vocabularyWords: string[],
): Promise<VocabHierarchy> {
  // 1. Extract all unique kanji from all vocabulary words
  const allKanjiChars = [
    ...new Set(vocabularyWords.flatMap((word) => extractKanjiCharacters(word))),
  ]

  // 2. Query database for kanji and their radicals (batch operations)
  const kanjiEntries = await fetchKanjiByCharacters(allKanjiChars)

  // 3. Build radical entries from the kanji we found
  const radicalMap = new Map<string, RadicalEntry>()

  // Get radical data from the same query results we used for kanji
  const db = await getDbConnection()
  const allRadicalChars = [
    ...new Set(kanjiEntries.flatMap((k) => k.radicalComponents)),
  ]

  if (allRadicalChars.length > 0) {
    const placeholders = allRadicalChars.map(() => "?").join(",")
    const radicalQuery = `
      SELECT characters, meanings, meaning_mnemonic
      FROM radicals 
      WHERE characters IN (${placeholders})
    `

    const radicalRows = db
      .prepare(radicalQuery)
      .all(...allRadicalChars) as Array<{
      characters: string
      meanings: string
      meaning_mnemonic?: string
    }>

    for (const row of radicalRows) {
      radicalMap.set(row.characters, {
        radical: row.characters,
        meanings: JSON.parse(row.meanings).map((m: any) => m.meaning),
        meaning_mnemonic: row.meaning_mnemonic || undefined,
      })
    }
  }

  // 4. Build clean vocabulary entries with their kanji dependencies
  const vocabularyEntries: VocabEntry[] = vocabularyWords.map((word) => ({
    word,
    kanjiComponents: extractKanjiCharacters(word),
  }))

  const result: VocabHierarchy = {
    vocabulary: vocabularyEntries,
    kanji: kanjiEntries,
    radicals: Array.from(radicalMap.values()),
  }

  return result
}

