import { QueryCtx } from '../_generated/server'
import { type VocabularyItem } from '../validators'

/**
 * Fetches vocabulary items by keys with optional deck override
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
 * Fetches vocabulary sets by IDs
 */
export async function fetchSetsByIds(
  ctx: QueryCtx,
  setIds: string[]
): Promise<Record<string, string[]>> {
  if (setIds.length === 0) return {}

  const sets: Record<string, string[]> = {}

  for (const setId of setIds) {
    const set = await ctx.db
      .query('coreVocabularySets')
      .withIndex('by_setId', (q) => q.eq('setId', setId))
      .first()

    if (set) {
      sets[setId] = set.vocabularyKeys
    }
  }

  return sets
}

/**
 * Fetches vocabulary items organized by set IDs
 */
export async function fetchVocabBySets(
  ctx: QueryCtx,
  setIds: string[]
): Promise<Record<string, VocabularyItem[]>> {
  if (setIds.length === 0) return {}

  // Fetch all sets and collect unique keys
  const sets = await fetchSetsByIds(ctx, setIds)
  const allKeys = new Set<string>()

  for (const keys of Object.values(sets)) {
    keys.forEach((key) => allKeys.add(key))
  }

  // Fetch all items
  const itemsMap = await fetchVocabItemsByKeys(ctx, [...allKeys], null)

  // Build result with items in original order per set
  return Object.fromEntries(
    Object.entries(sets).map(([setId, keys]) => [
      setId,
      keys.map((key) => itemsMap[key]).filter(Boolean),
    ])
  )
}
