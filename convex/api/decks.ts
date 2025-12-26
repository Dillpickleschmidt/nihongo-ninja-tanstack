import { v } from "convex/values"
import { mutation, query } from "../_generated/server"
import * as Decks from "../model/decks"
import * as Vocabulary from "../model/vocabulary"
import {
  practiceModeValidator,
  deckVocabItemInputValidator,
} from "../validators"

/**
 * Create a new user deck
 */
export const createDeck = mutation({
  args: {
    deckName: v.string(),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id("userDeckFolders")),
  },
  handler: async (ctx, args) => {
    await Decks.checkDeckNameUnique(ctx, args.deckName)
    return Decks.createDeck(ctx, {
      ...args,
      source: "user",
      allowedPracticeModes: ["meanings", "spellings"],
    })
  },
})

/**
 * Update a deck (rename, update description, or move to folder)
 */
export const updateDeck = mutation({
  args: {
    deckId: v.id("userDecks"),
    deckName: v.optional(v.string()),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.union(v.id("userDeckFolders"), v.null())),
  },
  handler: async (ctx, args) => {
    await Decks.verifyDeckOwnership(ctx, args.deckId)
    if (args.deckName) {
      await Decks.checkDeckNameUnique(ctx, args.deckName, args.deckId)
    }
    const { deckId, ...updates } = args
    return Decks.updateDeck(ctx, deckId, updates)
  },
})

/**
 * Delete a deck (also deletes all vocabulary items)
 */
export const deleteDeck = mutation({
  args: { deckId: v.id("userDecks") },
  handler: async (ctx, { deckId }) => {
    await Decks.verifyDeckOwnership(ctx, deckId)
    return Decks.deleteDeck(ctx, deckId)
  },
})

/**
 * Create a new deck with vocabulary items (atomic operation)
 */
export const createDeckWithVocab = mutation({
  args: {
    deckName: v.string(),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id("userDeckFolders")),
    allowedPracticeModes: v.array(practiceModeValidator),
    vocabularyItems: v.array(deckVocabItemInputValidator),
  },
  handler: async (ctx, args) => {
    await Decks.checkDeckNameUnique(ctx, args.deckName)
    const { vocabularyItems, ...deckData } = args
    const deckId = await Decks.createDeck(ctx, {
      ...deckData,
      source: "user",
    })
    await Vocabulary.createDeckVocabItems(ctx, deckId, vocabularyItems)
    return deckId
  },
})

/**
 * Update a deck and replace all vocabulary items (atomic operation)
 */
export const updateDeckWithVocab = mutation({
  args: {
    deckId: v.id("userDecks"),
    deckName: v.optional(v.string()),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.union(v.id("userDeckFolders"), v.null())),
    allowedPracticeModes: v.optional(v.array(practiceModeValidator)),
    vocabularyItems: v.optional(v.array(deckVocabItemInputValidator)),
  },
  handler: async (ctx, args) => {
    await Decks.verifyDeckOwnership(ctx, args.deckId)
    if (args.deckName) {
      await Decks.checkDeckNameUnique(ctx, args.deckName, args.deckId)
    }
    const { deckId, vocabularyItems, ...updates } = args
    await Decks.updateDeck(ctx, deckId, updates)
    if (vocabularyItems !== undefined) {
      await Vocabulary.replaceDeckVocabItems(ctx, deckId, vocabularyItems)
    }
    return deckId
  },
})

/**
 * Get vocabulary items for a deck
 */
export const getDeckVocabItems = query({
  args: { deckId: v.id("userDecks") },
  handler: (ctx, { deckId }) => Vocabulary.getDeckVocabItems(ctx, deckId),
})

/**
 * Get deck metadata and vocabulary items together (for editing)
 */
export const getDeckWithVocab = query({
  args: { deckId: v.id("userDecks") },
  handler: async (ctx, { deckId }) => {
    await Decks.verifyDeckOwnership(ctx, deckId)
    const deck = await ctx.db.get(deckId)
    const vocabItems = await Vocabulary.getDeckVocabItems(ctx, deckId)
    return { deck, vocabItems }
  },
})

/**
 * Copy a deck with all vocabulary items
 */
export const copyDeck = mutation({
  args: {
    deckId: v.string(),
    deckSource: v.union(v.literal("user"), v.literal("built-in")),
    deckName: v.string(),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id("userDeckFolders")),
  },
  handler: async (ctx, args) => {
    await Decks.checkDeckNameUnique(ctx, args.deckName)
    const vocabItems = await Vocabulary.fetchDeckVocab(
      ctx,
      args.deckId,
      args.deckSource,
    )
    const newDeckId = await Decks.createDeck(ctx, {
      deckName: args.deckName,
      deckDescription: args.deckDescription,
      folderId: args.folderId,
      source: "user",
      allowedPracticeModes: ["meanings", "spellings"],
    })
    await Vocabulary.createDeckVocabItems(ctx, newDeckId, vocabItems)
    return newDeckId
  },
})
