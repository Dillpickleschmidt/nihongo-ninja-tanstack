import { MutationCtx, QueryCtx } from '../_generated/server'
import { Id } from '../_generated/dataModel'

export async function getUserFolders(ctx: QueryCtx, userId: string) {
  return ctx.db
    .query('userDeckFolders')
    .withIndex('by_user', (q) => q.eq('userId', userId))
    .collect()
}

export async function createFolder(
  ctx: MutationCtx,
  userId: string,
  folderName: string,
  parentFolderId?: Id<'userDeckFolders'>
) {
  return ctx.db.insert('userDeckFolders', {
    userId,
    folderName,
    parentFolderId,
  })
}

export async function updateFolder(
  ctx: MutationCtx,
  folderId: Id<'userDeckFolders'>,
  updates: {
    folderName?: string
    parentFolderId?: Id<'userDeckFolders'> | null
  }
) {
  // Convert null to undefined for Convex (optional fields)
  const patch: { folderName?: string; parentFolderId?: Id<'userDeckFolders'> } =
    {}
  if (updates.folderName !== undefined) {
    patch.folderName = updates.folderName
  }
  if (updates.parentFolderId !== undefined) {
    patch.parentFolderId = updates.parentFolderId ?? undefined
  }
  await ctx.db.patch(folderId, patch)
}

// Cascade delete with strategy
export async function deleteFolderWithStrategy(
  ctx: MutationCtx,
  folderId: Id<'userDeckFolders'>,
  strategy: 'move-up' | 'delete-all'
) {
  const folder = await ctx.db.get(folderId)
  if (!folder) throw new Error('Folder not found')

  // Get all descendant folders recursively
  const allFolderIds = await getDescendantFolderIds(ctx, folderId)
  allFolderIds.add(folderId)

  // Get all decks in the folder tree
  const allDecks = await ctx.db
    .query('userDecks')
    .withIndex('by_user', (q) => q.eq('userId', folder.userId))
    .collect()

  const decksInFolders = allDecks.filter(
    (d) => d.folderId && allFolderIds.has(d.folderId)
  )

  if (strategy === 'move-up') {
    // Move decks to parent folder
    for (const deck of decksInFolders) {
      await ctx.db.patch(deck._id, { folderId: folder.parentFolderId })
    }
  } else {
    // Delete all decks in folder tree
    for (const deck of decksInFolders) {
      await ctx.db.delete(deck._id)
    }
  }

  // Delete all folders
  for (const id of allFolderIds) {
    await ctx.db.delete(id)
  }
}

async function getDescendantFolderIds(
  ctx: QueryCtx | MutationCtx,
  folderId: Id<'userDeckFolders'>
): Promise<Set<Id<'userDeckFolders'>>> {
  const result = new Set<Id<'userDeckFolders'>>()
  const children = await ctx.db
    .query('userDeckFolders')
    .filter((q) => q.eq(q.field('parentFolderId'), folderId))
    .collect()

  for (const child of children) {
    result.add(child._id)
    const descendants = await getDescendantFolderIds(ctx, child._id)
    descendants.forEach((id) => result.add(id))
  }
  return result
}
