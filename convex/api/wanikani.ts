import { v } from 'convex/values'
import { query, internalMutation } from '../_generated/server'

/**
 * Get WaniKani items (kanji and radicals) by characters
 */
export const getItems = query({
  args: {
    kanji: v.array(v.string()),
    radicals: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const radicals = args.radicals || []
    const allCharacters = [...args.kanji, ...radicals]

    if (allCharacters.length === 0) {
      return { kanji: [], radicals: [] }
    }

    // Fetch all items by characters
    const items = []
    for (const char of allCharacters) {
      const item = await ctx.db
        .query('wanikaniItems')
        .withIndex('by_character', (q) => q.eq('characters', char))
        .first()

      if (item) {
        items.push(item)
      }
    }

    // Organize items by type
    const kanjiMap = new Map<string, (typeof items)[0]>()
    const radicalMap = new Map<string, (typeof items)[0]>()

    for (const item of items) {
      if (item.characterType === 'kanji' && item.characters) {
        kanjiMap.set(item.characters, item)
      } else if (item.characterType === 'radical' && item.characters) {
        radicalMap.set(item.characters, item)
      }
    }

    // Fetch radical component details for each kanji
    const allComponentIds = new Set<number>()
    for (const item of kanjiMap.values()) {
      if (item.componentIds) {
        item.componentIds.forEach((id) => allComponentIds.add(id))
      }
    }

    // Fetch all radical components
    const componentRadicalMap = new Map<number, string>()
    if (allComponentIds.size > 0) {
      const allRadicals = await ctx.db.query('wanikaniItems').collect()

      for (const item of allRadicals) {
        if (
          item.characterType === 'radical' &&
          item.characters &&
          allComponentIds.has(item.wanikaniId)
        ) {
          componentRadicalMap.set(item.wanikaniId, item.characters)
        }
      }
    }

    // Build kanji entries
    const kanjiEntries = args.kanji
      .map((char) => {
        const item = kanjiMap.get(char)
        if (!item) return null

        const radicalComponents = (item.componentIds || [])
          .map((id) => componentRadicalMap.get(id))
          .filter((c): c is string => c !== undefined)

        return {
          kanji: char,
          radicalComponents,
          meanings: item.meanings,
          meaningMnemonic: item.meaningMnemonic,
          ...(item.readingMnemonic && { readingMnemonic: item.readingMnemonic }),
        }
      })
      .filter((entry): entry is NonNullable<typeof entry> => entry !== null)

    // Build radical entries
    const radicalEntries = radicals
      .map((char) => {
        const item = radicalMap.get(char)
        if (!item) return null

        return {
          radical: char,
          meanings: item.meanings,
          meaningMnemonic: item.meaningMnemonic,
        }
      })
      .filter((entry): entry is NonNullable<typeof entry> => entry !== null)

    return { kanji: kanjiEntries, radicals: radicalEntries }
  },
})

/**
 * Get a single WaniKani item by wanikaniId
 */
export const getById = query({
  args: { wanikaniId: v.number() },
  handler: async (ctx, args) => {
    const item = await ctx.db
      .query('wanikaniItems')
      .withIndex('by_wanikaniId', (q) => q.eq('wanikaniId', args.wanikaniId))
      .first()

    return item
  },
})

// ============================================
// Internal mutations for seeding (CLI only)
// ============================================

/**
 * Seed WaniKani items (internal - no auth)
 */
export const seedItems = internalMutation({
  args: {
    items: v.array(
      v.object({
        wanikaniId: v.number(),
        characters: v.optional(v.string()),
        characterType: v.union(v.literal('radical'), v.literal('kanji')),
        meanings: v.array(v.string()),
        readingMnemonic: v.optional(v.string()),
        meaningMnemonic: v.string(),
        componentIds: v.array(v.number()),
        characterImageUrl: v.optional(v.string()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    for (const item of args.items) {
      // Check if exists
      const existing = await ctx.db
        .query('wanikaniItems')
        .withIndex('by_wanikaniId', (q) => q.eq('wanikaniId', item.wanikaniId))
        .first()

      if (existing) {
        // Update existing
        await ctx.db.patch(existing._id, item)
      } else {
        // Insert new
        await ctx.db.insert('wanikaniItems', item)
      }
    }

    return { count: args.items.length }
  },
})

/**
 * Clear all WaniKani data (internal - for re-seeding)
 */
export const clearAll = internalMutation({
  args: {},
  handler: async (ctx) => {
    const items = await ctx.db.query('wanikaniItems').collect()
    for (const item of items) {
      await ctx.db.delete(item._id)
    }

    return { deleted: items.length }
  },
})
