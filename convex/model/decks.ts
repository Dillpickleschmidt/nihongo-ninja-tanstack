import { MutationCtx, QueryCtx } from '../_generated/server'
import { Id } from '../_generated/dataModel'
import { deleteDeckVocabItems } from './vocabulary'
import { deleteShareForDeck } from './sharing'
import { chapters } from '../../src/data/chapters'
import { dynamic_modules } from '../../src/data/dynamic_modules'

type DeckSource =
  | 'built-in'
  | 'anki'
  | 'wanikani'
  | 'jpdb'
  | 'user'
  | 'shared'
  | 'learning_path'

type PracticeMode = 'meanings' | 'spellings'

// ===== Unified Deck Type =====

export interface UnifiedDeck {
  id: string
  deckName: string
  deckDescription?: string
  folderId?: string
  source: 'user' | 'built-in'
}

// ===== Built-in Deck Generation =====

export function getBuiltInDecks(): UnifiedDeck[] {
  const decks: UnifiedDeck[] = []

  for (const [textbookId, textbookChapters] of Object.entries(chapters)) {
    for (const [chapterSlug, chapter] of Object.entries(textbookChapters)) {
      const folderId = `${textbookId}/${chapterSlug}`

      for (const moduleId of chapter.learning_path_item_ids) {
        const module = dynamic_modules[moduleId]
        // Only include vocab-practice modules as decks (skip vocab-list, vocab-test, sentence-practice)
        if (module?.module_type === 'vocab-practice') {
          decks.push({
            id: moduleId,
            deckName: module.title,
            folderId,
            source: 'built-in',
          })
        }
      }
    }
  }

  return decks
}

// ===== Unified Query (built-in + user) =====

export async function getAllDecks(ctx: QueryCtx): Promise<UnifiedDeck[]> {
  const builtIn = getBuiltInDecks()

  const identity = await ctx.auth.getUserIdentity()
  if (!identity) {
    return builtIn
  }

  const userDecks = await getUserDecks(ctx)

  const normalized: UnifiedDeck[] = userDecks.map((d) => ({
    id: d._id,
    deckName: d.deckName,
    deckDescription: d.deckDescription,
    folderId: d.folderId,
    source: (d.source === 'user' ? 'user' : 'built-in') as 'user' | 'built-in',
  }))

  return [...builtIn, ...normalized]
}

// ===== Query Helpers =====

export async function getUserDecks(ctx: QueryCtx) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error('Unauthenticated')

  return ctx.db
    .query('userDecks')
    .withIndex('by_user', (q) => q.eq('userId', identity.subject))
    .collect()
}

// ===== Validation Helpers =====

export async function checkDeckNameUnique(
  ctx: QueryCtx,
  name: string,
  excludeDeckId?: Id<'userDecks'>
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error('Unauthenticated')

  const existingDecks = await ctx.db
    .query('userDecks')
    .withIndex('by_user', (q) => q.eq('userId', identity.subject))
    .collect()
  const duplicate = existingDecks.find(
    (d) =>
      d.deckName.toLowerCase() === name.toLowerCase() &&
      d._id !== excludeDeckId
  )
  if (duplicate) {
    throw new Error('A deck with this name already exists')
  }
}

export async function verifyDeckOwnership(ctx: QueryCtx, deckDocId: Id<'userDecks'>) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error('Unauthenticated')

  const deck = await ctx.db.get(deckDocId)
  if (!deck) throw new Error('Deck not found')
  if (deck.userId !== identity.subject) throw new Error('Unauthorized')
  return deck
}

// ===== Mutation Helpers =====

export async function createDeck(
  ctx: MutationCtx,
  data: {
    deckName: string
    deckDescription?: string
    folderId?: Id<'userDeckFolders'>
    source: DeckSource
    originalDeckId?: Id<'userDecks'>
    allowedPracticeModes: PracticeMode[]
  }
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error('Unauthenticated')

  return ctx.db.insert('userDecks', {
    ...data,
    userId: identity.subject,
  })
}

export async function updateDeck(
  ctx: MutationCtx,
  deckId: Id<'userDecks'>,
  updates: {
    deckName?: string
    deckDescription?: string
    folderId?: Id<'userDeckFolders'> | null
    allowedPracticeModes?: PracticeMode[]
  }
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error('Unauthenticated')

  // Convert null to undefined for Convex (optional fields)
  const patch: {
    deckName?: string
    deckDescription?: string
    folderId?: Id<'userDeckFolders'>
    allowedPracticeModes?: PracticeMode[]
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
  if (updates.allowedPracticeModes !== undefined) {
    patch.allowedPracticeModes = updates.allowedPracticeModes
  }
  await ctx.db.patch(deckId, patch)
}

export async function deleteDeck(ctx: MutationCtx, deckId: Id<'userDecks'>) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error('Unauthenticated')

  await deleteDeckVocabItems(ctx, deckId)
  await deleteShareForDeck(ctx, deckId)
  await ctx.db.delete(deckId)
}
