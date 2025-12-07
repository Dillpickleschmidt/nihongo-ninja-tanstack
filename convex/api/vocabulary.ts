import { v } from 'convex/values'
import { query, internalMutation } from '../_generated/server'
import { partOfSpeechValidator } from '../validators'

/**
 * Get core vocabulary items by their unique keys
 */
export const getByKeys = query({
  args: { keys: v.array(v.string()) },
  handler: async (ctx, args) => {
    if (args.keys.length === 0) return {}

    const results: Record<
      string,
      {
        word: string
        furigana: string
        english: string[]
        partOfSpeech?: string
        info?: string[]
        mnemonics?: any
        exampleSentences?: any
        videos?: any
        particles?: any
        overwriteWord?: string
      }
    > = {}

    for (const key of args.keys) {
      const item = await ctx.db
        .query('coreVocabularyItems')
        .withIndex('by_key', (q) => q.eq('key', key))
        .first()

      if (item) {
        results[key] = {
          word: item.word,
          furigana: item.furigana,
          english: item.english,
          partOfSpeech: item.partOfSpeech,
          info: item.info,
          mnemonics: item.mnemonics,
          exampleSentences: item.exampleSentences,
          videos: item.videos,
          particles: item.particles,
          overwriteWord: item.overwriteWord,
        }
      }
    }

    return results
  },
})

/**
 * Get core vocabulary sets by their IDs
 */
export const getSets = query({
  args: { setIds: v.array(v.string()) },
  handler: async (ctx, args) => {
    if (args.setIds.length === 0) return {}

    const results: Record<string, string[]> = {}

    for (const setId of args.setIds) {
      const set = await ctx.db
        .query('coreVocabularySets')
        .withIndex('by_setId', (q) => q.eq('setId', setId))
        .first()

      if (set) {
        results[setId] = set.vocabularyKeys
      }
    }

    return results
  },
})

/**
 * Get vocabulary items for given set IDs
 * Results are segmented by set ID
 */
export const getBySets = query({
  args: { setIds: v.array(v.string()) },
  handler: async (ctx, args) => {
    if (args.setIds.length === 0) return {}

    // First get all sets
    const sets: Record<string, string[]> = {}
    for (const setId of args.setIds) {
      const set = await ctx.db
        .query('coreVocabularySets')
        .withIndex('by_setId', (q) => q.eq('setId', setId))
        .first()

      if (set) {
        sets[setId] = set.vocabularyKeys
      }
    }

    // Collect all unique keys
    const allKeys = new Set<string>()
    for (const keys of Object.values(sets)) {
      for (const key of keys) {
        allKeys.add(key)
      }
    }

    // Fetch all items
    const itemsMap: Record<string, any> = {}
    for (const key of allKeys) {
      const item = await ctx.db
        .query('coreVocabularyItems')
        .withIndex('by_key', (q) => q.eq('key', key))
        .first()

      if (item) {
        itemsMap[key] = {
          word: item.word,
          furigana: item.furigana,
          english: item.english,
          partOfSpeech: item.partOfSpeech,
          info: item.info,
          mnemonics: item.mnemonics,
          exampleSentences: item.exampleSentences,
          videos: item.videos,
          particles: item.particles,
          overwriteWord: item.overwriteWord,
        }
      }
    }

    // Build result with items in original order per set
    const results: Record<string, any[]> = {}
    for (const [setId, keys] of Object.entries(sets)) {
      results[setId] = keys.map((key) => itemsMap[key]).filter(Boolean)
    }

    return results
  },
})

// ============================================
// Internal mutations for seeding (CLI only)
// ============================================

/**
 * Seed core vocabulary items (internal - no auth)
 */
export const seedItems = internalMutation({
  args: {
    items: v.array(
      v.object({
        key: v.string(),
        word: v.string(),
        furigana: v.string(),
        english: v.array(v.string()),
        partOfSpeech: v.optional(partOfSpeechValidator),
        info: v.optional(v.array(v.string())),
        mnemonics: v.optional(v.any()),
        exampleSentences: v.optional(v.any()),
        videos: v.optional(v.any()),
        particles: v.optional(v.any()),
        overwriteWord: v.optional(v.string()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    for (const item of args.items) {
      // Check if exists
      const existing = await ctx.db
        .query('coreVocabularyItems')
        .withIndex('by_key', (q) => q.eq('key', item.key))
        .first()

      if (existing) {
        // Update existing
        await ctx.db.patch(existing._id, item)
      } else {
        // Insert new
        await ctx.db.insert('coreVocabularyItems', item)
      }
    }

    return { count: args.items.length }
  },
})

/**
 * Seed core vocabulary sets (internal - no auth)
 */
export const seedSets = internalMutation({
  args: {
    sets: v.array(
      v.object({
        setId: v.string(),
        vocabularyKeys: v.array(v.string()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    for (const set of args.sets) {
      // Check if exists
      const existing = await ctx.db
        .query('coreVocabularySets')
        .withIndex('by_setId', (q) => q.eq('setId', set.setId))
        .first()

      if (existing) {
        // Update existing
        await ctx.db.patch(existing._id, { vocabularyKeys: set.vocabularyKeys })
      } else {
        // Insert new
        await ctx.db.insert('coreVocabularySets', set)
      }
    }

    return { count: args.sets.length }
  },
})

/**
 * Clear all core vocabulary data (internal - for re-seeding)
 */
export const clearAll = internalMutation({
  args: {},
  handler: async (ctx) => {
    const items = await ctx.db.query('coreVocabularyItems').collect()
    for (const item of items) {
      await ctx.db.delete(item._id)
    }

    const sets = await ctx.db.query('coreVocabularySets').collect()
    for (const set of sets) {
      await ctx.db.delete(set._id)
    }

    return { deletedItems: items.length, deletedSets: sets.length }
  },
})
