import { v } from "convex/values"
import { query } from "../_generated/server"
import * as Vocabulary from "../model/vocabulary"
import { resolveDeckById } from "../model/decks"
import { fetchKanjiAndRadicals } from "../model/kanji"

/**
 * Get vocabulary items for given set IDs
 * Results are segmented by set ID
 */
export const getBySets = query({
  args: { setIds: v.array(v.string()) },
  handler: async (ctx, { setIds }) => {
    return Vocabulary.fetchVocabBySets(ctx, setIds)
  },
})

/**
 * Get vocabulary items by their keys (word spellings)
 */
export const getByKeys = query({
  args: { keys: v.array(v.string()) },
  handler: async (ctx, { keys }) => {
    return Vocabulary.fetchVocabItemsByKeys(ctx, keys, null)
  },
})

/**
 * Get vocabulary items for a deck (built-in or user)
 */
export const getDeckVocab = query({
  args: { deckId: v.string() },
  handler: async (ctx, { deckId }) => {
    const deck = await resolveDeckById(ctx, deckId)
    if (!deck) return []
    return Vocabulary.fetchDeckVocab(ctx, deck.id, deck.source)
  },
})

/**
 * Lightweight search index for all visible decks (deck ID + searchable terms)
 */
export const getSearchIndex = query({
  args: {},
  handler: async (ctx) => {
    return Vocabulary.getSearchIndex(ctx)
  },
})

/**
 * Get kanji entries for given kanji characters
 */
export const getKanjiByChars = query({
  args: { chars: v.array(v.string()) },
  handler: async (ctx, { chars }) => {
    const { kanji } = await fetchKanjiAndRadicals(ctx, chars)
    return kanji
  },
})
