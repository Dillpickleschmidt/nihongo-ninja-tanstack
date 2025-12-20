import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import * as FSRS from '../model/fsrs'
import {
  practiceModeValidator,
  practiceItemTypeValidator,
  fsrsCardValidator,
  fsrsReviewLogValidator,
} from '../validators'

/**
 * Get FSRS cards for specific practice items
 */
export const getFSRSCardsForItems = query({
  args: {
    keys: v.array(v.string()),
    mode: practiceModeValidator,
  },
  handler: (ctx, args) => FSRS.getFSRSCardsForItems(ctx, args.keys, args.mode),
})

/**
 * Get due FSRS cards for review mixing
 */
export const getDueFSRSCards = query({
  args: {
    mode: practiceModeValidator,
    limit: v.optional(v.number()),
  },
  handler: (ctx, args) => FSRS.getDueFSRSCards(ctx, args.mode, args.limit),
})

/**
 * Get count of all due FSRS cards across all modes
 */
export const getDueFSRSCardsCount = query({
  args: {},
  handler: (ctx) => FSRS.getDueFSRSCardsCount(ctx),
})

/**
 * Upsert FSRS card after answering
 */
export const upsertFSRSCard = mutation({
  args: {
    practiceItemKey: v.string(),
    fsrsCard: fsrsCardValidator,
    fsrsLogs: v.array(fsrsReviewLogValidator),
    mode: practiceModeValidator,
    type: practiceItemTypeValidator,
  },
  handler: (ctx, args) => FSRS.upsertFSRSCard(ctx, args),
})
