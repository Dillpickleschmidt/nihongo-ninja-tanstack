import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import { requireAuth } from '../auth'

/**
 * Creates a public share for a user's deck
 */
export const shareDeck = mutation({
  args: { deckId: v.string() },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    // Verify user owns the deck
    const deck = await ctx.db
      .query('userDecks')
      .withIndex('by_deckId', (q) => q.eq('deckId', args.deckId))
      .first()

    if (!deck || deck.userId !== user._id) {
      throw new Error('Deck not found or not owned by user')
    }

    // Check if already shared
    const existingShare = await ctx.db
      .query('publicDeckShares')
      .withIndex('by_deck', (q) => q.eq('deckId', args.deckId))
      .first()

    if (existingShare) {
      throw new Error('Deck is already shared publicly')
    }

    const id = await ctx.db.insert('publicDeckShares', {
      deckId: args.deckId,
      sharedBy: user._id,
      importCount: 0,
    })

    return { _id: id }
  },
})

/**
 * Removes public sharing for a user's deck
 */
export const unshareDeck = mutation({
  args: { deckId: v.string() },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const share = await ctx.db
      .query('publicDeckShares')
      .withIndex('by_deck', (q) => q.eq('deckId', args.deckId))
      .first()

    if (!share || share.sharedBy !== user._id) {
      throw new Error('Share not found or not owned by user')
    }

    await ctx.db.delete(share._id)

    return { success: true }
  },
})

/**
 * Gets share status for a deck
 */
export const getDeckShareStatus = query({
  args: { deckId: v.string() },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const share = await ctx.db
      .query('publicDeckShares')
      .withIndex('by_deck', (q) => q.eq('deckId', args.deckId))
      .first()

    if (!share || share.sharedBy !== user._id) {
      return { isShared: false, sharedAt: null }
    }

    return {
      isShared: true,
      sharedAt: share._creationTime,
    }
  },
})

/**
 * Gets all publicly shared decks with pagination
 */
export const getSharedDecks = query({
  args: {
    offset: v.optional(v.number()),
    limit: v.optional(v.number()),
    sortBy: v.optional(v.union(v.literal('recent'), v.literal('popular'))),
  },
  handler: async (ctx, args) => {
    const offset = args.offset || 0
    const limit = args.limit || 20
    const sortBy = args.sortBy || 'recent'

    const shares = await ctx.db.query('publicDeckShares').collect()

    // Sort shares
    if (sortBy === 'popular') {
      shares.sort((a, b) => b.importCount - a.importCount)
    } else {
      shares.sort((a, b) => b._creationTime - a._creationTime)
    }

    // Apply pagination
    const paginatedShares = shares.slice(offset, offset + limit)

    // Fetch deck details for each share
    const results = []
    for (const share of paginatedShares) {
      const deck = await ctx.db
        .query('userDecks')
        .withIndex('by_deckId', (q) => q.eq('deckId', share.deckId))
        .first()

      if (deck) {
        results.push({
          deckId: share.deckId,
          sharedAt: share._creationTime,
          sharedBy: share.sharedBy,
          importCount: share.importCount,
          deckName: deck.deckName,
          deckDescription: deck.deckDescription,
          source: deck.source,
        })
      }
    }

    return results
  },
})

/**
 * Gets detailed info about a shared deck for preview
 */
export const getSharedDeckInfo = query({
  args: { deckId: v.string() },
  handler: async (ctx, args) => {
    const share = await ctx.db
      .query('publicDeckShares')
      .withIndex('by_deck', (q) => q.eq('deckId', args.deckId))
      .first()

    if (!share) {
      throw new Error('Shared deck not found')
    }

    const deck = await ctx.db
      .query('userDecks')
      .withIndex('by_deckId', (q) => q.eq('deckId', args.deckId))
      .first()

    if (!deck) {
      throw new Error('Deck not found')
    }

    // Get vocabulary count
    const vocabItems = await ctx.db
      .query('deckVocabularyItems')
      .withIndex('by_deck', (q) => q.eq('deckId', args.deckId))
      .collect()

    return {
      deckId: share.deckId,
      sharedAt: share._creationTime,
      sharedBy: share.sharedBy,
      deckName: deck.deckName,
      deckDescription: deck.deckDescription,
      source: deck.source,
      vocabularyCount: vocabItems.length,
    }
  },
})

/**
 * Imports a shared deck into the current user's account
 */
export const importDeck = mutation({
  args: {
    deckId: v.string(),
    targetFolderId: v.optional(v.id('userDeckFolders')),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    // Verify the deck is publicly shared
    const share = await ctx.db
      .query('publicDeckShares')
      .withIndex('by_deck', (q) => q.eq('deckId', args.deckId))
      .first()

    if (!share) {
      throw new Error('Shared deck not found')
    }

    // Check if user is trying to import their own deck
    if (share.sharedBy === user._id) {
      throw new Error('Cannot import your own shared deck')
    }

    // Check if user already imported this deck
    const existingImport = await ctx.db
      .query('userDecks')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .filter((q) =>
        q.and(
          q.eq(q.field('source'), 'shared'),
          q.eq(q.field('originalDeckId'), args.deckId),
        ),
      )
      .first()

    if (existingImport) {
      throw new Error('You have already imported this shared deck')
    }

    // Get original deck and vocabulary
    const originalDeck = await ctx.db
      .query('userDecks')
      .withIndex('by_deckId', (q) => q.eq('deckId', args.deckId))
      .first()

    if (!originalDeck) {
      throw new Error('Original deck not found')
    }

    const vocabItems = await ctx.db
      .query('deckVocabularyItems')
      .withIndex('by_deck', (q) => q.eq('deckId', args.deckId))
      .collect()

    if (vocabItems.length === 0) {
      throw new Error('Shared deck contains no vocabulary items')
    }

    // Create the imported deck
    const newDeckId = crypto.randomUUID()

    await ctx.db.insert('userDecks', {
      userId: user._id,
      deckId: newDeckId,
      deckName: originalDeck.deckName,
      deckDescription: originalDeck.deckDescription,
      folderId: args.targetFolderId,
      source: 'shared',
      originalDeckId: args.deckId,
      allowedPracticeModes: ['meanings', 'spellings'],
    })

    // Copy vocabulary items
    for (const item of vocabItems) {
      await ctx.db.insert('deckVocabularyItems', {
        deckId: newDeckId,
        word: item.word,
        furigana: item.furigana,
        english: item.english,
        info: item.info,
        mnemonics: item.mnemonics,
        exampleSentences: item.exampleSentences,
        videos: item.videos,
        particles: item.particles,
        isVerb: item.isVerb,
      })
    }

    // Increment import count
    await ctx.db.patch(share._id, {
      importCount: share.importCount + 1,
    })

    return {
      deckId: newDeckId,
      originalDeckName: originalDeck.deckName,
      vocabularyCount: vocabItems.length,
    }
  },
})
