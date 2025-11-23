// src/features/resolvers/vocabulary.ts
import { getCoreVocabularyByKeys } from "@/features/supabase/db/core-vocab"
import { getVocabForDeckConverted } from "@/features/supabase/db/deck"
import type { VocabularyItem } from "@/data/types"

/**
 * Fetches vocabulary from database
 * @param keys - Array of vocabulary keys to fetch
 * @param deckId - Optional user deck ID (deck vocab overrides core vocab)
 * @returns Array of VocabularyItem objects
 */
export async function getVocabFromDB(
  keys: string[],
  deckId?: string,
): Promise<VocabularyItem[]> {
  const [coreVocab, deckVocab] = await Promise.all([
    getCoreVocabularyByKeys(keys),
    deckId ? getVocabForDeckConverted(deckId) : Promise.resolve([]),
  ])

  // Merge: deck items override core items for matching keys
  const deckVocabMap = new Map(deckVocab.map((item) => [item.word, item]))

  return keys
    .map((key) => deckVocabMap.get(key) || coreVocab.get(key))
    .filter((item): item is VocabularyItem => item !== undefined)
}
