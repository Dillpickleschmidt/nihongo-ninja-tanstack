import { v } from "convex/values"
import { query } from "../_generated/server"
import { resolveDeckById } from "../model/decks"
import { fetchDeckVocab } from "../model/vocabulary"
import { buildDeckHierarchy } from "../model/hierarchy"

/**
 * Get deck metadata + vocabulary with full kanji/radical hierarchy
 * Accepts any deck ID (built-in or user) via resolveDeckById
 */
export const getDeckHierarchy = query({
  args: {
    deckId: v.string(),
  },
  handler: async (ctx, args) => {
    const deck = await resolveDeckById(ctx, args.deckId)
    if (!deck) return null

    const vocabulary = await fetchDeckVocab(ctx, deck.id, deck.source)
    const hierarchy = await buildDeckHierarchy(ctx, vocabulary)
    return { deck, hierarchy }
  },
})
