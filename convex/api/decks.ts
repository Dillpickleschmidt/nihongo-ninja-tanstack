import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import { requireAuth } from '../auth'
import { practiceModeValidator } from '../validators'

// Source type for deck creation
const sourceValidator = v.union(
  v.literal('built-in'),
  v.literal('anki'),
  v.literal('wanikani'),
  v.literal('jpdb'),
  v.literal('user'),
  v.literal('shared'),
  v.literal('learning_path'),
)

// Vocabulary item validator for deck creation
const vocabItemValidator = v.object({
  word: v.string(),
  furigana: v.optional(v.string()),
  english: v.array(v.string()),
  info: v.optional(v.array(v.string())),
  mnemonics: v.optional(v.any()),
  exampleSentences: v.optional(v.any()),
  videos: v.optional(v.any()),
  particles: v.optional(v.any()),
  isVerb: v.optional(v.boolean()),
})

/**
 * Creates a new user deck
 */
export const createDeck = mutation({
  args: {
    deckName: v.string(),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id('userDeckFolders')),
    originalDeckId: v.optional(v.string()),
    source: sourceValidator,
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const deckId = crypto.randomUUID()

    const id = await ctx.db.insert('userDecks', {
      userId: user._id,
      deckId,
      deckName: args.deckName,
      deckDescription: args.deckDescription,
      folderId: args.folderId,
      originalDeckId: args.originalDeckId,
      source: args.source,
      allowedPracticeModes: ['meanings', 'spellings'],
    })

    return { _id: id, deckId }
  },
})

/**
 * Updates an existing user deck
 */
export const updateDeck = mutation({
  args: {
    deckId: v.string(),
    deckName: v.optional(v.string()),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id('userDeckFolders')),
    allowedPracticeModes: v.optional(v.array(practiceModeValidator)),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const deck = await ctx.db
      .query('userDecks')
      .withIndex('by_deckId', (q) => q.eq('deckId', args.deckId))
      .first()

    if (!deck || deck.userId !== user._id) {
      throw new Error('Deck not found or not owned by user')
    }

    const updates: Partial<typeof deck> = {}
    if (args.deckName !== undefined) updates.deckName = args.deckName
    if (args.deckDescription !== undefined) updates.deckDescription = args.deckDescription
    if (args.folderId !== undefined) updates.folderId = args.folderId
    if (args.allowedPracticeModes !== undefined)
      updates.allowedPracticeModes = args.allowedPracticeModes

    await ctx.db.patch(deck._id, updates)

    return { success: true }
  },
})

/**
 * Creates a custom deck with vocabulary items
 */
export const createCustomDeck = mutation({
  args: {
    deckName: v.string(),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id('userDeckFolders')),
    vocabularyItems: v.array(vocabItemValidator),
    allowedPracticeModes: v.optional(v.array(practiceModeValidator)),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const deckId = crypto.randomUUID()

    await ctx.db.insert('userDecks', {
      userId: user._id,
      deckId,
      deckName: args.deckName,
      deckDescription: args.deckDescription,
      folderId: args.folderId,
      source: 'user',
      allowedPracticeModes: args.allowedPracticeModes || ['meanings', 'spellings'],
    })

    // Insert vocabulary items
    for (const item of args.vocabularyItems) {
      await ctx.db.insert('deckVocabularyItems', {
        deckId,
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

    return { deckId }
  },
})

/**
 * Gets deck info by deckId
 */
export const getDeckInfo = query({
  args: { deckId: v.string() },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const deck = await ctx.db
      .query('userDecks')
      .withIndex('by_deckId', (q) => q.eq('deckId', args.deckId))
      .first()

    if (!deck || deck.userId !== user._id) {
      throw new Error('Deck not found or not owned by user')
    }

    return {
      deckName: deck.deckName,
      deckDescription: deck.deckDescription,
      source: deck.source,
      originalDeckId: deck.originalDeckId,
      allowedPracticeModes: deck.allowedPracticeModes,
    }
  },
})

/**
 * Gets vocabulary items for a deck
 */
export const getVocabularyForDeck = query({
  args: { deckId: v.string() },
  handler: async (ctx, args) => {
    const items = await ctx.db
      .query('deckVocabularyItems')
      .withIndex('by_deck', (q) => q.eq('deckId', args.deckId))
      .collect()

    return items
  },
})

/**
 * Gets the real deck_id for a built-in deck by original_deck_id
 */
export const getDeckIdByOriginalId = query({
  args: { originalDeckId: v.string() },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const deck = await ctx.db
      .query('userDecks')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .filter((q) => q.eq(q.field('originalDeckId'), args.originalDeckId))
      .first()

    if (!deck) {
      throw new Error('Deck not found')
    }

    return deck.deckId
  },
})

/**
 * Deletes a deck and its vocabulary items
 */
export const deleteDeck = mutation({
  args: { deckId: v.string() },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const deck = await ctx.db
      .query('userDecks')
      .withIndex('by_deckId', (q) => q.eq('deckId', args.deckId))
      .first()

    if (!deck || deck.userId !== user._id) {
      throw new Error('Deck not found or not owned by user')
    }

    // Delete vocabulary items
    const vocabItems = await ctx.db
      .query('deckVocabularyItems')
      .withIndex('by_deck', (q) => q.eq('deckId', args.deckId))
      .collect()

    for (const item of vocabItems) {
      await ctx.db.delete(item._id)
    }

    // Delete deck
    await ctx.db.delete(deck._id)

    return { success: true }
  },
})

/**
 * Adds vocabulary items to an existing deck
 */
export const addVocabularyItems = mutation({
  args: {
    deckId: v.string(),
    items: v.array(vocabItemValidator),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const deck = await ctx.db
      .query('userDecks')
      .withIndex('by_deckId', (q) => q.eq('deckId', args.deckId))
      .first()

    if (!deck || deck.userId !== user._id) {
      throw new Error('Deck not found or not owned by user')
    }

    for (const item of args.items) {
      await ctx.db.insert('deckVocabularyItems', {
        deckId: args.deckId,
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

    return { success: true }
  },
})

/**
 * Removes a vocabulary item from a deck
 */
export const removeVocabularyItem = mutation({
  args: { itemId: v.id('deckVocabularyItems') },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const item = await ctx.db.get(args.itemId)
    if (!item) {
      throw new Error('Vocabulary item not found')
    }

    // Verify user owns the deck
    const deck = await ctx.db
      .query('userDecks')
      .withIndex('by_deckId', (q) => q.eq('deckId', item.deckId))
      .first()

    if (!deck || deck.userId !== user._id) {
      throw new Error('Deck not found or not owned by user')
    }

    await ctx.db.delete(args.itemId)

    return { success: true }
  },
})
