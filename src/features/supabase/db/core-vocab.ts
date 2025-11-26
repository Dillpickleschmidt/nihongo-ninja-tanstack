// src/features/supabase/db/core_vocab.ts
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import type { VocabularyItem } from "@/data/types"

/**
 * Fetches core vocabulary items by their unique keys
 * @param keys Array of unique vocabulary keys (e.g., ["あ", "私1", "こんにちは"])
 * @returns Map of key -> VocabularyItem for efficient lookup
 */
export async function getCoreVocabularyByKeys(
  keys: string[],
): Promise<Map<string, VocabularyItem>> {
  if (!keys || keys.length === 0) {
    return new Map()
  }

  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from("core_vocabulary_items")
    .select("*")
    .in("key", keys)

  if (error) {
    console.error("Error fetching core vocabulary items:", error)
    return new Map()
  }

  // Transform database rows to VocabularyItem format
  const cache = new Map<string, VocabularyItem>()

  for (const row of data || []) {
    const item: VocabularyItem = {
      word: row.word,
      furigana: row.furigana,
      english: row.english,
      part_of_speech: row.part_of_speech || undefined,
      info: row.info || undefined,
      mnemonics: row.mnemonics || undefined,
      example_sentences: row.example_sentences || undefined,
      videos: row.videos || undefined,
      particles: row.particles || undefined,
      overwrite_word: row.overwrite_word || undefined,
    }

    cache.set(row.key, item)
  }

  return cache
}

/**
 * Fetches core vocabulary sets by their IDs
 * @param setIds Array of set IDs (e.g., ["hiragana", "katakana", "chapter1"])
 * @returns Record mapping setId -> vocabulary keys array
 */
export async function getCoreVocabularySets(
  setIds: string[],
): Promise<Record<string, string[]>> {
  if (!setIds || setIds.length === 0) {
    return {}
  }

  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from("core_vocabulary_sets")
    .select("set_id, vocabulary_keys")
    .in("set_id", setIds)

  if (error) {
    console.error("Error fetching core vocabulary sets:", error)
    return {}
  }

  // Transform database rows to Record format
  const result: Record<string, string[]> = {}

  for (const row of data || []) {
    result[row.set_id] = row.vocabulary_keys
  }

  return result
}

/**
 * Fetches vocabulary items for given set IDs in a single query using RPC
 * Results are segmented by set ID to preserve original array ordering
 * @param setIds Array of set IDs (e.g., ["hiragana", "katakana", "chapter1"])
 * @returns Record mapping setId -> array of VocabularyItem objects in original order
 */
export async function getVocabularyBySets(
  setIds: string[],
): Promise<Record<string, VocabularyItem[]>> {
  if (!setIds || setIds.length === 0) {
    return {}
  }

  const supabase = createSupabaseClient()

  const { data, error } = await supabase.rpc("get_vocabulary_by_sets", {
    set_ids: setIds,
  })

  if (error) {
    console.error("Error fetching vocabulary by sets:", error)
    return {}
  }

  // data is now a JSONB object: { "set_id": [...items], ... }
  const result: Record<string, VocabularyItem[]> = {}

  if (data && typeof data === "object") {
    for (const [setId, items] of Object.entries(data)) {
      result[setId] = (items as any[]).map((row) => ({
        word: row.word,
        furigana: row.furigana,
        english: row.english,
        part_of_speech: row.part_of_speech || undefined,
        info: row.info || undefined,
        mnemonics: row.mnemonics || undefined,
        example_sentences: row.example_sentences || undefined,
        videos: row.videos || undefined,
        particles: row.particles || undefined,
        overwrite_word: row.overwrite_word || undefined,
      }))
    }
  }

  return result
}
