import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import { requireAuth } from '../auth'
import { practiceModeValidator, practiceItemTypeValidator } from '../validators'

/**
 * Get all FSRS cards for a user filtered by mode
 */
export const getAllCards = query({
  args: { mode: practiceModeValidator },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const cards = await ctx.db
      .query('userFsrsCards')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .filter((q) => q.eq(q.field('mode'), args.mode))
      .collect()

    return cards
  },
})

/**
 * Get FSRS cards by practice item keys for a user
 */
export const getCards = query({
  args: {
    keys: v.array(v.string()),
    mode: practiceModeValidator,
    type: practiceItemTypeValidator,
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    if (args.keys.length === 0) return []

    const cards = await ctx.db
      .query('userFsrsCards')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .filter((q) =>
        q.and(q.eq(q.field('mode'), args.mode), q.eq(q.field('type'), args.type)),
      )
      .collect()

    // Filter to only requested keys
    const keySet = new Set(args.keys)
    return cards.filter((card) => keySet.has(card.practiceItemKey))
  },
})

/**
 * Get due FSRS cards for a user
 */
export const getDueCards = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)
    const now = Date.now()
    const limit = args.limit || 1000

    const cards = await ctx.db
      .query('userFsrsCards')
      .withIndex('by_user_due', (q) => q.eq('userId', user._id).lte('dueAt', now))
      .take(limit)

    return cards
  },
})

/**
 * Get count of due FSRS cards by mode and type
 */
export const getDueCountsByMode = query({
  args: {},
  handler: async (ctx) => {
    const user = await requireAuth(ctx)
    const now = Date.now()

    const cards = await ctx.db
      .query('userFsrsCards')
      .withIndex('by_user_due', (q) => q.eq('userId', user._id).lte('dueAt', now))
      .collect()

    const meaningsBreakdown = { vocab: 0, kanji: 0 }
    let spellingsCount = 0

    for (const card of cards) {
      if (card.mode === 'meanings') {
        if (card.type === 'vocabulary') {
          meaningsBreakdown.vocab++
        } else if (card.type === 'kanji' || card.type === 'radical') {
          meaningsBreakdown.kanji++
        }
      } else if (card.mode === 'spellings') {
        if (card.type === 'vocabulary') {
          spellingsCount++
        }
      }
    }

    const total = meaningsBreakdown.vocab + meaningsBreakdown.kanji + spellingsCount

    return {
      total,
      meanings: meaningsBreakdown,
      spellings: spellingsCount,
    }
  },
})

/**
 * Get vocabulary statistics (total and weekly counts)
 */
export const getVocabularyStats = query({
  args: {},
  handler: async (ctx) => {
    const user = await requireAuth(ctx)
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000

    const allCards = await ctx.db
      .query('userFsrsCards')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .collect()

    // Use Sets to count unique practice_item_keys
    const vocabKeys = new Set<string>()
    const kanjiKeys = new Set<string>()
    const vocabKeysWeek = new Set<string>()
    const kanjiKeysWeek = new Set<string>()

    for (const card of allCards) {
      if (card.type === 'vocabulary') {
        vocabKeys.add(card.practiceItemKey)
        if (card._creationTime >= weekAgo) {
          vocabKeysWeek.add(card.practiceItemKey)
        }
      } else if (card.type === 'kanji' || card.type === 'radical') {
        kanjiKeys.add(card.practiceItemKey)
        if (card._creationTime >= weekAgo) {
          kanjiKeysWeek.add(card.practiceItemKey)
        }
      }
    }

    return {
      vocab_total: vocabKeys.size,
      kanji_total: kanjiKeys.size,
      vocab_week: vocabKeysWeek.size,
      kanji_week: kanjiKeysWeek.size,
    }
  },
})

/**
 * Upsert a single FSRS card
 */
export const upsertCard = mutation({
  args: {
    practiceItemKey: v.string(),
    type: practiceItemTypeValidator,
    mode: practiceModeValidator,
    fsrsCard: v.any(),
    fsrsLogs: v.optional(v.array(v.any())),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    // Check if card exists
    const existing = await ctx.db
      .query('userFsrsCards')
      .withIndex('by_user_key_mode_type', (q) =>
        q
          .eq('userId', user._id)
          .eq('practiceItemKey', args.practiceItemKey)
          .eq('mode', args.mode)
          .eq('type', args.type),
      )
      .first()

    const dueAt =
      typeof args.fsrsCard.due === 'string'
        ? new Date(args.fsrsCard.due).getTime()
        : args.fsrsCard.due

    if (existing) {
      await ctx.db.patch(existing._id, {
        fsrsCard: args.fsrsCard,
        fsrsLogs: args.fsrsLogs || existing.fsrsLogs,
        dueAt,
        stability: args.fsrsCard.stability,
      })
    } else {
      await ctx.db.insert('userFsrsCards', {
        userId: user._id,
        practiceItemKey: args.practiceItemKey,
        type: args.type,
        mode: args.mode,
        fsrsCard: args.fsrsCard,
        fsrsLogs: args.fsrsLogs || [],
        dueAt,
        stability: args.fsrsCard.stability,
      })
    }

    return { success: true }
  },
})

/**
 * Batch upsert FSRS cards
 */
export const batchUpsert = mutation({
  args: {
    cards: v.array(
      v.object({
        practiceItemKey: v.string(),
        type: practiceItemTypeValidator,
        mode: practiceModeValidator,
        fsrsCard: v.any(),
        fsrsLogs: v.optional(v.array(v.any())),
      }),
    ),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    for (const card of args.cards) {
      const existing = await ctx.db
        .query('userFsrsCards')
        .withIndex('by_user_key_mode_type', (q) =>
          q
            .eq('userId', user._id)
            .eq('practiceItemKey', card.practiceItemKey)
            .eq('mode', card.mode)
            .eq('type', card.type),
        )
        .first()

      const dueAt =
        typeof card.fsrsCard.due === 'string'
          ? new Date(card.fsrsCard.due).getTime()
          : card.fsrsCard.due

      if (existing) {
        await ctx.db.patch(existing._id, {
          fsrsCard: card.fsrsCard,
          fsrsLogs: card.fsrsLogs || existing.fsrsLogs,
          dueAt,
          stability: card.fsrsCard.stability,
        })
      } else {
        await ctx.db.insert('userFsrsCards', {
          userId: user._id,
          practiceItemKey: card.practiceItemKey,
          type: card.type,
          mode: card.mode,
          fsrsCard: card.fsrsCard,
          fsrsLogs: card.fsrsLogs || [],
          dueAt,
          stability: card.fsrsCard.stability,
        })
      }
    }

    return { success: true }
  },
})

/**
 * Delete a single FSRS card
 */
export const deleteCard = mutation({
  args: {
    practiceItemKey: v.string(),
    type: practiceItemTypeValidator,
    mode: practiceModeValidator,
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const card = await ctx.db
      .query('userFsrsCards')
      .withIndex('by_user_key_mode_type', (q) =>
        q
          .eq('userId', user._id)
          .eq('practiceItemKey', args.practiceItemKey)
          .eq('mode', args.mode)
          .eq('type', args.type),
      )
      .first()

    if (card) {
      await ctx.db.delete(card._id)
    }

    return { success: true }
  },
})

/**
 * Batch delete FSRS cards
 */
export const batchDelete = mutation({
  args: {
    items: v.array(
      v.object({
        practiceItemKey: v.string(),
        type: practiceItemTypeValidator,
        mode: practiceModeValidator,
      }),
    ),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    for (const item of args.items) {
      const card = await ctx.db
        .query('userFsrsCards')
        .withIndex('by_user_key_mode_type', (q) =>
          q
            .eq('userId', user._id)
            .eq('practiceItemKey', item.practiceItemKey)
            .eq('mode', item.mode)
            .eq('type', item.type),
        )
        .first()

      if (card) {
        await ctx.db.delete(card._id)
      }
    }

    return { success: true }
  },
})
