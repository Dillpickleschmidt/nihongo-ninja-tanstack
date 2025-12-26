import { v } from "convex/values"
import { query } from "../_generated/server"
import { fetchDeckVocab } from "../model/vocabulary"
import { buildDeckHierarchy } from "../model/hierarchy"

/**
 * Get vocabulary with full kanji/radical hierarchy for a deck
 * For built-in decks, deckId is the vocab set ID
 * For user decks, deckId is the Convex document ID
 */
export const getVocabHierarchyByDeck = query({
  args: {
    deckId: v.string(),
    deckSource: v.union(v.literal("user"), v.literal("built-in")),
  },
  handler: async (ctx, args) => {
    const vocabulary = await fetchDeckVocab(ctx, args.deckId, args.deckSource)
    return buildDeckHierarchy(ctx, vocabulary)
  },
})
