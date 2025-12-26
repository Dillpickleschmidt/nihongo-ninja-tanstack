import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import * as FSRS from '../model/fsrs'
import {
  practiceModeValidator,
  practiceItemTypeValidator,
  practiceItemKeyValidator,
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
 * Get item statuses (state + scheduled_days) for batch status calculation
 */
export const getItemStatuses = query({
  args: { items: v.array(practiceItemKeyValidator) },
  handler: (ctx, args) => FSRS.getItemStatuses(ctx, args.items),
})

/**
 * Upsert FSRS card after answering
 */
export const upsertFSRSCard = mutation({
  args: {
    practiceItemKey: v.string(),
    card: fsrsCardValidator,
    newLogs: v.array(fsrsReviewLogValidator),
    mode: practiceModeValidator,
    type: practiceItemTypeValidator,
  },
  handler: (ctx, args) => FSRS.upsertFSRSCard(ctx, args),
})

/**
 * Import pre-processed FSRS cards in batch (e.g., from JPDB JSON)
 */
export const batchImportFSRSCards = mutation({
  args: {
    cards: v.array(
      v.object({
        searchTerm: v.string(),
        type: practiceItemTypeValidator,
        card: fsrsCardValidator,
        logs: v.array(fsrsReviewLogValidator),
      })
    ),
  },
  handler: (ctx, args) => FSRS.batchImportFSRSCards(ctx, args.cards),
})
