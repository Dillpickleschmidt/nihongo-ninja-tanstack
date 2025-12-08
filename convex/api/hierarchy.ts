import { v } from 'convex/values'
import { query } from '../_generated/server'
import { fetchVocabItemsByKeys } from './vocabulary'
import { fetchKanjiAndRadicals } from './kanji'
import { extractKanjiCharacters } from '../../src/data/utils/text/japanese'
import type {
  VocabularyItem,
  VocabHierarchy,
  VocabRelationship,
  KanjiRelationship,
  KanjiEntry,
  RadicalEntry,
} from '../validators'

/**
 * Get vocabulary hierarchy with all related kanji and radicals
 * Returns vocabulary items, hierarchy relationships, and kanji/radical display data
 */
export const getVocabHierarchy = query({
  args: {
    keys: v.array(v.string()),
    deckId: v.union(v.string(), v.null()),
  },
  handler: async (ctx, args) => {
    if (args.keys.length === 0) {
      return {
        vocabulary: [] as VocabularyItem[],
        hierarchy: { vocabulary: [], kanji: [], radicals: [] } as VocabHierarchy,
        kanji: [] as KanjiEntry[],
        radicals: [] as RadicalEntry[],
        skippedKanji: [] as string[],
        skippedRadicals: [] as string[],
      }
    }

    // 1. Fetch vocabulary items
    const vocabMap = await fetchVocabItemsByKeys(ctx, args.keys, args.deckId)
    const vocabulary = args.keys
      .map((key) => vocabMap[key])
      .filter((item): item is VocabularyItem => item !== undefined)

    // 2. Extract all unique kanji from vocabulary words (preserving order)
    const allKanjiChars: string[] = []
    const seenKanji = new Set<string>()
    for (const item of vocabulary) {
      for (const kanji of extractKanjiCharacters(item.word)) {
        if (!seenKanji.has(kanji)) {
          seenKanji.add(kanji)
          allKanjiChars.push(kanji)
        }
      }
    }

    // 3. Fetch kanji entries
    const kanjiResult = await fetchKanjiAndRadicals(ctx, allKanjiChars, [])
    const kanjiEntries = kanjiResult.kanji

    // 4. Get all unique radicals from kanji components (preserving order)
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

    // 5. Fetch radical entries
    const radicalResult = await fetchKanjiAndRadicals(ctx, [], allRadicalChars)
    const radicalEntries = radicalResult.radicals

    // 6. Build hierarchy relationships
    const vocabRelationships: VocabRelationship[] = vocabulary.map((item) => ({
      word: item.word,
      kanjiComponents: extractKanjiCharacters(item.word),
    }))

    const kanjiRelationships: KanjiRelationship[] = kanjiEntries.map((k) => ({
      kanji: k.kanji,
      radicalComponents: k.radicalComponents,
    }))

    const hierarchy: VocabHierarchy = {
      vocabulary: vocabRelationships,
      kanji: kanjiRelationships,
      radicals: radicalEntries.map((r) => r.radical),
    }

    return {
      vocabulary,
      hierarchy,
      kanji: kanjiEntries,
      radicals: radicalEntries,
      skippedKanji: kanjiResult.skippedKanji,
      skippedRadicals: radicalResult.skippedRadicals,
    }
  },
})
