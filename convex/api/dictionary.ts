import { v } from 'convex/values'
import { query, internalMutation } from '../_generated/server'

/**
 * Find terms with all metadata for an expression
 */
export const findTerms = query({
  args: { expression: v.string() },
  handler: async (ctx, args) => {
    // Get all terms matching the expression
    const terms = await ctx.db
      .query('terms')
      .withIndex('by_expression', (q) => q.eq('expression', args.expression))
      .collect()

    // Get all term meta for this expression
    const termMeta = await ctx.db
      .query('termMeta')
      .withIndex('by_expression', (q) => q.eq('expression', args.expression))
      .collect()

    return { terms, termMeta }
  },
})

/**
 * Get kanji data by character
 */
export const getKanji = query({
  args: { character: v.string() },
  handler: async (ctx, args) => {
    const kanji = await ctx.db
      .query('kanji')
      .withIndex('by_character', (q) => q.eq('character', args.character))
      .first()

    if (!kanji) return null

    // Get kanji meta
    const meta = await ctx.db
      .query('kanjiMeta')
      .withIndex('by_character', (q) => q.eq('character', args.character))
      .collect()

    return { kanji, meta }
  },
})

/**
 * Get tag metadata for a dictionary
 */
export const getTagMeta = query({
  args: {
    dictionary: v.string(),
    names: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const results = []
    for (const name of args.names) {
      const tag = await ctx.db
        .query('tagMeta')
        .withIndex('by_dictionary_name', (q) =>
          q.eq('dictionary', args.dictionary).eq('name', name),
        )
        .first()

      if (tag) {
        results.push(tag)
      }
    }
    return results
  },
})

/**
 * Get dictionary info
 */
export const getDictionary = query({
  args: { title: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('dictionaries')
      .withIndex('by_title', (q) => q.eq('title', args.title))
      .first()
  },
})

// ============================================
// Internal mutations for seeding (CLI only)
// ============================================

/**
 * Seed dictionary metadata (internal - no auth)
 */
export const seedDictionary = internalMutation({
  args: {
    dictionary: v.object({
      title: v.string(),
      revision: v.string(),
      format: v.number(),
      sequenced: v.boolean(),
      author: v.optional(v.string()),
      url: v.optional(v.string()),
      description: v.optional(v.string()),
      attribution: v.optional(v.string()),
      sourceLanguage: v.optional(v.string()),
      targetLanguage: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query('dictionaries')
      .withIndex('by_title', (q) => q.eq('title', args.dictionary.title))
      .first()

    if (existing) {
      await ctx.db.patch(existing._id, args.dictionary)
    } else {
      await ctx.db.insert('dictionaries', args.dictionary)
    }

    return { success: true }
  },
})

/**
 * Seed terms in batch (internal - no auth)
 */
export const seedTerms = internalMutation({
  args: {
    terms: v.array(
      v.object({
        dictionary: v.string(),
        expression: v.string(),
        reading: v.string(),
        definitionTags: v.optional(v.string()),
        rules: v.optional(v.string()),
        score: v.number(),
        glossary: v.any(),
        sequence: v.number(),
        termTags: v.optional(v.string()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    for (const term of args.terms) {
      await ctx.db.insert('terms', term)
    }
    return { count: args.terms.length }
  },
})

/**
 * Seed term meta in batch (internal - no auth)
 */
export const seedTermMeta = internalMutation({
  args: {
    items: v.array(
      v.object({
        dictionary: v.string(),
        expression: v.string(),
        mode: v.string(),
        data: v.any(),
      }),
    ),
  },
  handler: async (ctx, args) => {
    for (const item of args.items) {
      await ctx.db.insert('termMeta', item)
    }
    return { count: args.items.length }
  },
})

/**
 * Seed tag meta in batch (internal - no auth)
 */
export const seedTagMeta = internalMutation({
  args: {
    items: v.array(
      v.object({
        dictionary: v.string(),
        name: v.string(),
        category: v.optional(v.string()),
        sortOrder: v.number(),
        description: v.optional(v.string()),
        score: v.number(),
      }),
    ),
  },
  handler: async (ctx, args) => {
    for (const item of args.items) {
      await ctx.db.insert('tagMeta', item)
    }
    return { count: args.items.length }
  },
})

/**
 * Seed kanji in batch (internal - no auth)
 */
export const seedKanji = internalMutation({
  args: {
    items: v.array(
      v.object({
        dictionary: v.string(),
        character: v.string(),
        onyomi: v.optional(v.string()),
        kunyomi: v.optional(v.string()),
        tags: v.optional(v.string()),
        meanings: v.any(),
        stats: v.optional(v.any()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    for (const item of args.items) {
      await ctx.db.insert('kanji', item)
    }
    return { count: args.items.length }
  },
})

/**
 * Seed kanji meta in batch (internal - no auth)
 */
export const seedKanjiMeta = internalMutation({
  args: {
    items: v.array(
      v.object({
        dictionary: v.string(),
        character: v.string(),
        mode: v.string(),
        data: v.any(),
      }),
    ),
  },
  handler: async (ctx, args) => {
    for (const item of args.items) {
      await ctx.db.insert('kanjiMeta', item)
    }
    return { count: args.items.length }
  },
})

/**
 * Clear all dictionary data for a specific dictionary (internal)
 */
export const clearDictionary = internalMutation({
  args: { dictionary: v.string() },
  handler: async (ctx, args) => {
    let deleted = 0

    // Delete terms
    const terms = await ctx.db
      .query('terms')
      .filter((q) => q.eq(q.field('dictionary'), args.dictionary))
      .collect()
    for (const term of terms) {
      await ctx.db.delete(term._id)
      deleted++
    }

    // Delete term meta
    const termMeta = await ctx.db
      .query('termMeta')
      .filter((q) => q.eq(q.field('dictionary'), args.dictionary))
      .collect()
    for (const item of termMeta) {
      await ctx.db.delete(item._id)
      deleted++
    }

    // Delete tag meta
    const tagMeta = await ctx.db
      .query('tagMeta')
      .filter((q) => q.eq(q.field('dictionary'), args.dictionary))
      .collect()
    for (const item of tagMeta) {
      await ctx.db.delete(item._id)
      deleted++
    }

    // Delete kanji
    const kanji = await ctx.db
      .query('kanji')
      .filter((q) => q.eq(q.field('dictionary'), args.dictionary))
      .collect()
    for (const item of kanji) {
      await ctx.db.delete(item._id)
      deleted++
    }

    // Delete kanji meta
    const kanjiMeta = await ctx.db
      .query('kanjiMeta')
      .filter((q) => q.eq(q.field('dictionary'), args.dictionary))
      .collect()
    for (const item of kanjiMeta) {
      await ctx.db.delete(item._id)
      deleted++
    }

    // Delete dictionary entry
    const dict = await ctx.db
      .query('dictionaries')
      .withIndex('by_title', (q) => q.eq('title', args.dictionary))
      .first()
    if (dict) {
      await ctx.db.delete(dict._id)
      deleted++
    }

    return { deleted }
  },
})
