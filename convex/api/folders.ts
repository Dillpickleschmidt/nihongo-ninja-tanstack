import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import * as Folders from '../model/folders'
import * as Decks from '../model/decks'

/**
 * Get all folders and decks for the current user
 */
export const getUserFoldersAndDecks = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return null

    const [folders, decks] = await Promise.all([
      Folders.getUserFolders(ctx, identity.subject),
      Decks.getUserDecks(ctx, identity.subject),
    ])

    return { folders, decks }
  },
})

/**
 * Create a new folder
 */
export const createFolder = mutation({
  args: {
    folderName: v.string(),
    parentFolderId: v.optional(v.id('userDeckFolders')),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('Unauthenticated')

    // Business rule: Check for duplicate name in same parent
    const existingFolders = await Folders.getUserFolders(ctx, identity.subject)
    const duplicate = existingFolders.find(
      (f) =>
        f.folderName.toLowerCase() === args.folderName.toLowerCase() &&
        f.parentFolderId === args.parentFolderId
    )
    if (duplicate) {
      throw new Error('A folder with this name already exists here')
    }

    return Folders.createFolder(
      ctx,
      identity.subject,
      args.folderName,
      args.parentFolderId
    )
  },
})

/**
 * Update a folder (rename or move)
 */
export const updateFolder = mutation({
  args: {
    folderId: v.id('userDeckFolders'),
    folderName: v.optional(v.string()),
    parentFolderId: v.optional(v.union(v.id('userDeckFolders'), v.null())),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('Unauthenticated')
    const { folderId, ...updates } = args
    return Folders.updateFolder(ctx, folderId, updates)
  },
})

/**
 * Delete a folder with strategy for handling child decks
 * - 'move-up': Move decks to parent folder
 * - 'delete-all': Delete all decks in folder tree
 */
export const deleteFolder = mutation({
  args: {
    folderId: v.id('userDeckFolders'),
    strategy: v.union(v.literal('move-up'), v.literal('delete-all')),
  },
  handler: async (ctx, { folderId, strategy }) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('Unauthenticated')
    return Folders.deleteFolderWithStrategy(ctx, folderId, strategy)
  },
})
