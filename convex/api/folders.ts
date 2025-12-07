import { v } from 'convex/values'
import { mutation, query } from '../_generated/server'
import { requireAuth } from '../auth'
import type { Id } from '../_generated/dataModel'

/**
 * Gets all folders and decks for a user in a single query
 */
export const getUserFoldersAndDecks = query({
  args: {},
  handler: async (ctx) => {
    const user = await requireAuth(ctx)

    // Fetch folders, decks, and shares in parallel
    const [folders, decks, shares] = await Promise.all([
      ctx.db
        .query('userDeckFolders')
        .withIndex('by_user', (q) => q.eq('userId', user._id))
        .collect(),

      ctx.db
        .query('userDecks')
        .withIndex('by_user', (q) => q.eq('userId', user._id))
        .collect(),

      ctx.db
        .query('publicDeckShares')
        .filter((q) => q.eq(q.field('sharedBy'), user._id))
        .collect(),
    ])

    // Build share status map
    const shareStatus: Record<string, boolean> = {}
    for (const share of shares) {
      shareStatus[share.deckId] = true
    }

    return { folders, decks, shareStatus }
  },
})

/**
 * Creates a new folder
 */
export const createFolder = mutation({
  args: {
    folderName: v.string(),
    parentFolderId: v.optional(v.id('userDeckFolders')),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const id = await ctx.db.insert('userDeckFolders', {
      userId: user._id,
      folderName: args.folderName,
      parentFolderId: args.parentFolderId,
    })

    return { _id: id }
  },
})

/**
 * Updates an existing folder
 */
export const updateFolder = mutation({
  args: {
    folderId: v.id('userDeckFolders'),
    folderName: v.optional(v.string()),
    parentFolderId: v.optional(v.id('userDeckFolders')),
  },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const folder = await ctx.db.get(args.folderId)
    if (!folder || folder.userId !== user._id) {
      throw new Error('Folder not found or not owned by user')
    }

    const updates: Partial<typeof folder> = {}
    if (args.folderName !== undefined) updates.folderName = args.folderName
    if (args.parentFolderId !== undefined) updates.parentFolderId = args.parentFolderId

    await ctx.db.patch(args.folderId, updates)

    return { success: true }
  },
})

/**
 * Deletes a folder and moves its decks to root
 */
export const deleteFolder = mutation({
  args: { folderId: v.id('userDeckFolders') },
  handler: async (ctx, args) => {
    const user = await requireAuth(ctx)

    const folder = await ctx.db.get(args.folderId)
    if (!folder || folder.userId !== user._id) {
      throw new Error('Folder not found or not owned by user')
    }

    // Move decks in this folder to root
    const decks = await ctx.db
      .query('userDecks')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .filter((q) => q.eq(q.field('folderId'), args.folderId))
      .collect()

    for (const deck of decks) {
      await ctx.db.patch(deck._id, { folderId: undefined })
    }

    // Find and delete child folders recursively
    const childFolders = await ctx.db
      .query('userDeckFolders')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .filter((q) => q.eq(q.field('parentFolderId'), args.folderId))
      .collect()

    for (const child of childFolders) {
      // Move child folder's decks to root
      const childDecks = await ctx.db
        .query('userDecks')
        .withIndex('by_user', (q) => q.eq('userId', user._id))
        .filter((q) => q.eq(q.field('folderId'), child._id))
        .collect()

      for (const deck of childDecks) {
        await ctx.db.patch(deck._id, { folderId: undefined })
      }

      await ctx.db.delete(child._id)
    }

    // Delete the folder
    await ctx.db.delete(args.folderId)

    return { success: true }
  },
})

/**
 * Ensures a folder hierarchy exists, creating folders as needed
 * Used during deck import to automatically create folder structure
 */
export const ensureFolderHierarchy = mutation({
  args: {
    pathNames: v.array(v.string()),
  },
  handler: async (ctx, args): Promise<{ targetFolderId: string | null }> => {
    const user = await requireAuth(ctx)

    if (args.pathNames.length === 0) {
      return { targetFolderId: null }
    }

    // Get all user folders
    const existingFolders = await ctx.db
      .query('userDeckFolders')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .collect()

    // Build a lookup map for existing folders
    const folderMap = new Map<string, string>()
    for (const folder of existingFolders) {
      const key = `${folder.parentFolderId ?? 'root'}:${folder.folderName}`
      folderMap.set(key, folder._id)
    }

    let currentParentId: string | null = null

    for (const folderName of args.pathNames) {
      const lookupKey = `${currentParentId ?? 'root'}:${folderName}`
      const existingId = folderMap.get(lookupKey)

      if (existingId) {
        currentParentId = existingId
      } else {
        // Create the folder - need to cast parentFolderId properly
        const newFolderId: Id<'userDeckFolders'> = await ctx.db.insert('userDeckFolders', {
          userId: user._id,
          folderName,
          parentFolderId: currentParentId as Id<'userDeckFolders'> | undefined,
        })
        // Update lookup map for subsequent iterations
        folderMap.set(lookupKey, newFolderId)
        currentParentId = newFolderId
      }
    }

    return { targetFolderId: currentParentId }
  },
})
