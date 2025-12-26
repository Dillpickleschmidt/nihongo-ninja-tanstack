import { v } from "convex/values"
import { mutation, query } from "../_generated/server"
import * as Sharing from "../model/sharing"

/**
 * Get shared decks with pagination and sorting
 */
export const getSharedDecks = query({
  args: {
    sortBy: v.union(v.literal("recent"), v.literal("popular")),
    limit: v.number(),
    offset: v.number(),
  },
  handler: (ctx, args) => Sharing.getSharedDecks(ctx, args),
})

/**
 * Check if a deck is shared
 */
export const isShared = query({
  args: { deckId: v.id("userDecks") },
  handler: (ctx, { deckId }) => Sharing.isShared(ctx, deckId),
})

/**
 * Share a deck publicly
 */
export const shareDeck = mutation({
  args: { deckId: v.id("userDecks") },
  handler: (ctx, { deckId }) => Sharing.shareDeck(ctx, deckId),
})

/**
 * Remove a deck from public sharing
 */
export const unshareDeck = mutation({
  args: { deckId: v.id("userDecks") },
  handler: (ctx, { deckId }) => Sharing.unshareDeck(ctx, deckId),
})

/**
 * Import a shared deck into user's account
 */
export const importSharedDeck = mutation({
  args: { deckId: v.id("userDecks") },
  handler: (ctx, { deckId }) => Sharing.importSharedDeck(ctx, deckId),
})
