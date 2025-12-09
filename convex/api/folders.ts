import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import * as Folders from '../model/folders'
import * as Decks from '../model/decks'

/**
 * Get all folders and decks for the current user (user data only)
 */
export const getUserFoldersAndDecks = query({
  args: {},
  handler: async (ctx) => {
    const [folders, decks] = await Promise.all([
      Folders.getUserFolders(ctx),
      Decks.getUserDecks(ctx),
    ])
    return { folders, decks }
  },
})

/**
 * Get all folders and decks (unified: built-in + user)
 */
export const getAllFoldersAndDecks = query({
  args: {},
  handler: async (ctx) => {
    const [folders, decks] = await Promise.all([
      Folders.getAllFolders(ctx),
      Decks.getAllDecks(ctx),
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
    await Folders.checkFolderNameUnique(ctx, args.folderName, args.parentFolderId)
    return Folders.createFolder(ctx, args.folderName, args.parentFolderId)
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
    await Folders.verifyFolderOwnership(ctx, args.folderId)
    const { folderId, ...updates } = args
    return Folders.updateFolder(ctx, folderId, updates)
  },
})

/**
 * Delete a folder with strategy for handling child decks
 */
export const deleteFolder = mutation({
  args: {
    folderId: v.id('userDeckFolders'),
    strategy: v.union(v.literal('move-up'), v.literal('delete-all')),
  },
  handler: async (ctx, { folderId, strategy }) => {
    await Folders.verifyFolderOwnership(ctx, folderId)
    return Folders.deleteFolderWithStrategy(ctx, folderId, strategy)
  },
})
