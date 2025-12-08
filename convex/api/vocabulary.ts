import { v } from 'convex/values'
import { query, type QueryCtx } from '../_generated/server'
import { type VocabularyItem } from '../validators'

/**
 * Shared helper to fetch vocabulary items by keys with deck override
 */
export async function fetchVocabItemsByKeys(
  ctx: QueryCtx,
  keys: string[],
  deckId: string | null
): Promise<Record<string, VocabularyItem>> {
  if (keys.length === 0) return {}

  // Fetch core vocab items
  const results: Record<string, VocabularyItem> = {}
  for (const key of keys) {
    const item = await ctx.db
      .query('coreVocabularyItems')
      .withIndex('by_key', (q) => q.eq('key', key))
      .first()

    if (item) {
      const { _id, _creationTime, ...vocabItem } = item
      results[key] = vocabItem
    }
  }

  // If deckId provided, fetch deck vocab and merge (deck overrides core)
  if (deckId !== null) {
    const deckItems = await ctx.db
      .query('deckVocabularyItems')
      .withIndex('by_deck', (q) => q.eq('deckId', deckId))
      .collect()

    for (const deckItem of deckItems) {
      if (keys.includes(deckItem.word)) {
        results[deckItem.word] = {
          key: deckItem.word,
          word: deckItem.word,
          furigana: deckItem.furigana ?? '',
          english: deckItem.english,
          info: deckItem.info,
          mnemonics: deckItem.mnemonics,
          exampleSentences: deckItem.exampleSentences,
          videos: deckItem.videos,
          particles: deckItem.particles,
        } as VocabularyItem
      }
    }
  }

  return results
}

/**
 * Get vocabulary items by their unique keys
 * If deckId is provided, deck items override core items for matching keys
 */
export const getByKeys = query({
  args: {
    keys: v.array(v.string()),
    deckId: v.union(v.string(), v.null()),
  },
  handler: async (ctx, args) => {
    return fetchVocabItemsByKeys(ctx, args.keys, args.deckId)
  },
})

/**
 * Get core vocabulary sets by their IDs
 */
export const getSets = query({
  args: { setIds: v.array(v.string()) },
  handler: async (ctx, args) => {
    if (args.setIds.length === 0) return {}

    const results: Record<string, string[]> = {}

    for (const setId of args.setIds) {
      const set = await ctx.db
        .query('coreVocabularySets')
        .withIndex('by_setId', (q) => q.eq('setId', setId))
        .first()

      if (set) {
        results[setId] = set.vocabularyKeys
      }
    }

    return results
  },
})

/**
 * Get vocabulary items for given set IDs
 * Results are segmented by set ID
 */
export const getBySets = query({
  args: { setIds: v.array(v.string()) },
  handler: async (ctx, args) => {
    if (args.setIds.length === 0) return {}

    // Fetch all sets and collect unique keys
    const sets: Record<string, string[]> = {}
    const allKeys = new Set<string>()

    for (const setId of args.setIds) {
      const set = await ctx.db
        .query('coreVocabularySets')
        .withIndex('by_setId', (q) => q.eq('setId', setId))
        .first()

      if (set) {
        sets[setId] = set.vocabularyKeys
        set.vocabularyKeys.forEach((key) => allKeys.add(key))
      }
    }

    // Fetch all items using shared helper
    const itemsMap = await fetchVocabItemsByKeys(ctx, [...allKeys], null)

    // Build result with items in original order per set
    return Object.fromEntries(
      Object.entries(sets).map(([setId, keys]) => [
        setId,
        keys.map((key) => itemsMap[key]).filter(Boolean),
      ])
    )
  },
})
