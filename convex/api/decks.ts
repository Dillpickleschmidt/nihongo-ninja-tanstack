import { v } from 'convex/values'
import { mutation } from '../_generated/server'
import * as Decks from '../model/decks'

/**
 * Create a new user deck
 */
export const createDeck = mutation({
  args: {
    deckName: v.string(),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id('userDeckFolders')),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('Unauthenticated')

    // Business rule: Check for duplicate deck name
    const existingDecks = await Decks.getUserDecks(ctx, identity.subject)
    const duplicate = existingDecks.find(
      (d) => d.deckName.toLowerCase() === args.deckName.toLowerCase()
    )
    if (duplicate) {
      throw new Error('A deck with this name already exists')
    }

    const deckId = crypto.randomUUID()
    return Decks.createDeck(ctx, {
      userId: identity.subject,
      deckId,
      deckName: args.deckName,
      deckDescription: args.deckDescription,
      folderId: args.folderId,
      source: 'user',
      allowedPracticeModes: ['meanings', 'spellings'],
    })
  },
})

/**
 * Update a deck (rename, update description, or move to folder)
 */
export const updateDeck = mutation({
  args: {
    deckId: v.id('userDecks'),
    deckName: v.optional(v.string()),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.union(v.id('userDeckFolders'), v.null())),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('Unauthenticated')
    const { deckId, ...updates } = args
    return Decks.updateDeck(ctx, deckId, updates)
  },
})

/**
 * Delete a deck
 */
export const deleteDeck = mutation({
  args: { deckId: v.id('userDecks') },
  handler: async (ctx, { deckId }) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('Unauthenticated')
    return Decks.deleteDeck(ctx, deckId)
  },
})
