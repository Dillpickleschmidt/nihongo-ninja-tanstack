import { v } from "convex/values"
import { query, mutation } from "../_generated/server"
import { practiceModeValidator } from "../validators"
import * as MissedWords from "../model/missedWords"

export const getMostMissedItems = query({
  args: {
    daysBack: v.number(),
    maxItems: v.number(),
    mode: practiceModeValidator,
  },
  handler: (ctx, args) => MissedWords.getMostMissedItems(ctx, args),
})

export const buildMissedWordsDeck = mutation({
  args: {
    practiceItemKeys: v.array(v.string()),
    deckName: v.string(),
  },
  handler: (ctx, args) => MissedWords.buildMissedWordsDeck(ctx, args),
})
