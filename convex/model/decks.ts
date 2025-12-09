import { MutationCtx, QueryCtx } from '../_generated/server'
import { Id } from '../_generated/dataModel'

type DeckSource =
  | 'built-in'
  | 'anki'
  | 'wanikani'
  | 'jpdb'
  | 'user'
  | 'shared'
  | 'learning_path'

type PracticeMode = 'meanings' | 'spellings'

export async function getUserDecks(ctx: QueryCtx, userId: string) {
  return ctx.db
    .query('userDecks')
    .withIndex('by_user', (q) => q.eq('userId', userId))
    .collect()
}

export async function createDeck(
  ctx: MutationCtx,
  data: {
    userId: string
    deckId: string
    deckName: string
    deckDescription?: string
    folderId?: Id<'userDeckFolders'>
    source: DeckSource
    originalDeckId?: string
    allowedPracticeModes: PracticeMode[]
  }
) {
  return ctx.db.insert('userDecks', data)
}

export async function updateDeck(
  ctx: MutationCtx,
  deckId: Id<'userDecks'>,
  updates: {
    deckName?: string
    deckDescription?: string
    folderId?: Id<'userDeckFolders'> | null
  }
) {
  // Convert null to undefined for Convex (optional fields)
  const patch: {
    deckName?: string
    deckDescription?: string
    folderId?: Id<'userDeckFolders'>
  } = {}
  if (updates.deckName !== undefined) {
    patch.deckName = updates.deckName
  }
  if (updates.deckDescription !== undefined) {
    patch.deckDescription = updates.deckDescription
  }
  if (updates.folderId !== undefined) {
    patch.folderId = updates.folderId ?? undefined
  }
  await ctx.db.patch(deckId, patch)
}

export async function deleteDeck(ctx: MutationCtx, deckId: Id<'userDecks'>) {
  await ctx.db.delete(deckId)
}
