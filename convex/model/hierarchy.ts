import type { QueryCtx } from '../_generated/server'
import type {
  VocabularyItem,
  KanjiEntry,
  RadicalEntry,
  VocabHierarchy,
  VocabRelationship,
  KanjiRelationship,
} from '../validators'
import { extractKanjiCharacters } from '../../src/data/utils/text/japanese'
import { fetchKanjiAndRadicals } from './kanji'

export type DeckHierarchyResult = {
  vocabulary: VocabularyItem[]
  hierarchy: VocabHierarchy
  kanji: KanjiEntry[]
  radicals: RadicalEntry[]
  skippedKanji: string[]
  skippedRadicals: string[]
}

export async function buildDeckHierarchy(
  ctx: QueryCtx,
  vocabulary: VocabularyItem[]
): Promise<DeckHierarchyResult> {
  const kanjiChars = extractAllKanjiFromVocab(vocabulary)
  const kanjiResult = await fetchKanjiAndRadicals(ctx, kanjiChars, [])
  const radicalChars = extractAllRadicalsFromKanji(kanjiResult.kanji)
  const radicalResult = await fetchKanjiAndRadicals(ctx, [], radicalChars)
  const hierarchy = buildHierarchyRelationships(
    vocabulary,
    kanjiResult.kanji,
    radicalResult.radicals
  )

  return {
    vocabulary,
    hierarchy,
    kanji: kanjiResult.kanji,
    radicals: radicalResult.radicals,
    skippedKanji: kanjiResult.skippedKanji,
    skippedRadicals: radicalResult.skippedRadicals,
  }
}

/**
 * Extract all unique kanji characters from vocabulary items
 * Preserves order of first appearance
 */
export function extractAllKanjiFromVocab(vocabulary: VocabularyItem[]): string[] {
  const seen = new Set<string>()
  const result: string[] = []

  for (const item of vocabulary) {
    for (const kanji of extractKanjiCharacters(item.word)) {
      if (!seen.has(kanji)) {
        seen.add(kanji)
        result.push(kanji)
      }
    }
  }

  return result
}

/**
 * Extract all unique radicals from kanji entries
 * Preserves order of first appearance
 */
function extractAllRadicalsFromKanji(kanjiEntries: KanjiEntry[]): string[] {
  const seen = new Set<string>()
  const result: string[] = []

  for (const kanji of kanjiEntries) {
    for (const radical of kanji.radicalComponents) {
      if (!seen.has(radical)) {
        seen.add(radical)
        result.push(radical)
      }
    }
  }

  return result
}

/**
 * Build hierarchy relationships from vocabulary and kanji/radical data
 * Returns lightweight relationship objects for dependency tracking
 */
function buildHierarchyRelationships(
  vocabulary: VocabularyItem[],
  kanjiEntries: KanjiEntry[],
  radicalEntries: RadicalEntry[]
): VocabHierarchy {
  const vocabRelationships: VocabRelationship[] = vocabulary.map((item) => ({
    word: item.word,
    kanjiComponents: extractKanjiCharacters(item.word),
  }))

  const kanjiRelationships: KanjiRelationship[] = kanjiEntries.map((k) => ({
    kanji: k.kanji,
    radicalComponents: k.radicalComponents,
  }))

  const radicals: string[] = radicalEntries.map((r) => r.radical)

  return {
    vocabulary: vocabRelationships,
    kanji: kanjiRelationships,
    radicals,
  }
}
