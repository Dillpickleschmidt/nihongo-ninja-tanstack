import { v } from "convex/values"
import { query } from "../_generated/server"
import { practiceModeValidator } from "../validators"
import { resolveDeckById } from "../model/decks"
import { fetchDeckVocab } from "../model/vocabulary"
import {
  buildDeckHierarchy,
  extractHierarchyKeys,
} from "../model/hierarchy"
import * as FSRS from "../model/fsrs"

export const getPracticeData = query({
  args: {
    deckId: v.string(),
    mode: practiceModeValidator,
  },
  handler: async (ctx, args) => {
    const deck = await resolveDeckById(ctx, args.deckId)
    if (!deck) return null

    const vocabulary = await fetchDeckVocab(ctx, deck.id, deck.source)
    const hierarchy = await buildDeckHierarchy(ctx, vocabulary)
    const keys = extractHierarchyKeys(hierarchy)

    const [moduleFsrs, reviewFsrs] = await Promise.all([
      keys.length > 0
        ? FSRS.getFSRSCardsForItems(ctx, keys, args.mode)
        : { vocabulary: [], kanji: [], radical: [] },
      FSRS.getDueFSRSCards(ctx, args.mode, 50),
    ])

    return { deck, hierarchy, moduleFsrs, reviewFsrs }
  },
})

