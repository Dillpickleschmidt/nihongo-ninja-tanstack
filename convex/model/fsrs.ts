import { MutationCtx, QueryCtx } from '../_generated/server'
import type { PracticeMode, PracticeItemType } from '../validators'
import type { Infer } from 'convex/values'
import type { importCardValidator } from '../validators'
import { type Card, type ReviewLog } from 'ts-fsrs'

// Convex storage format (timestamps instead of Dates)
type ConvexCard = Omit<Card, 'due' | 'last_review' | 'learning_steps'> & {
  due: number
  learning_steps?: number
}

type ConvexReviewLog = Omit<ReviewLog, 'due' | 'review'> & {
  due: number
  review: number
}

export interface FSRSCardData {
  practiceItemKey: string
  fsrsCard: ConvexCard
  fsrsLogs: ConvexReviewLog[]
  mode: PracticeMode
  type: PracticeItemType
}

export interface TsFSRSCardData {
  practiceItemKey: string
  fsrsCard: Card
  fsrsLogs: ReviewLog[]
  mode: PracticeMode
  type: PracticeItemType
}

// Convert Convex storage format → ts-fsrs format (for loading)
export function toTsFsrs(convex: FSRSCardData): TsFSRSCardData {
  const { due, learning_steps, ...cardRest } = convex.fsrsCard
  return {
    ...convex,
    fsrsCard: {
      ...cardRest,
      due: new Date(due),
      learning_steps: learning_steps ?? 0,
      last_review: undefined,
    },
    fsrsLogs: convex.fsrsLogs.map((log) => ({
      ...log,
      due: new Date(log.due),
      review: new Date(log.review),
    })),
  }
}

// Convert ts-fsrs format → Convex storage format (for saving)
export function toConvexFsrs(ts: TsFSRSCardData): FSRSCardData {
  const { due, last_review, ...cardRest } = ts.fsrsCard
  return {
    ...ts,
    fsrsCard: { ...cardRest, due: due.getTime() },
    fsrsLogs: ts.fsrsLogs.map(({ due, review, learning_steps, ...rest }) => ({
      ...rest,
      due: due.getTime(),
      review: review.getTime(),
      learning_steps: learning_steps ?? 0,
    })),
  }
}

// Helper: fetch existing card by key/mode/type
function fetchExistingCard(
  ctx: MutationCtx | QueryCtx,
  userId: string,
  key: string,
  mode: PracticeMode,
  type: PracticeItemType
) {
  return ctx.db
    .query('userFsrsCards')
    .withIndex('by_user_key_mode_type', (q) =>
      q.eq('userId', userId).eq('practiceItemKey', key).eq('mode', mode).eq('type', type)
    )
    .first()
}

// Helper: check if incoming card should be imported over existing
function shouldImportCard(
  incomingScheduledDays: number,
  existing: { fsrsCard: { scheduled_days: number } } | null
): boolean {
  if (!existing) return true
  return incomingScheduledDays >= existing.fsrsCard.scheduled_days
}

export async function getFSRSCardsForItems(
  ctx: QueryCtx,
  keys: string[],
  mode: PracticeMode
): Promise<FSRSCardData[]> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return []

  const userId = identity.subject

  const results = await Promise.all(
    keys.map((key) =>
      ctx.db
        .query('userFsrsCards')
        .withIndex('by_user_key_mode', (q) =>
          q.eq('userId', userId).eq('practiceItemKey', key).eq('mode', mode)
        )
        .first()
    )
  )

  return results
    .filter((card): card is NonNullable<typeof card> => card !== null)
    .map((card) => ({
      practiceItemKey: card.practiceItemKey,
      fsrsCard: card.fsrsCard,
      fsrsLogs: card.fsrsLogs,
      mode: card.mode,
      type: card.type,
    }))
}

export async function getDueFSRSCards(
  ctx: QueryCtx,
  mode: PracticeMode,
  limit: number = 100
): Promise<FSRSCardData[]> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return []

  const userId = identity.subject
  const now = Date.now()

  const cards = await ctx.db
    .query('userFsrsCards')
    .withIndex('by_user_mode_due', (q) =>
      q.eq('userId', userId).eq('mode', mode).lte('dueAt', now)
    )
    .take(limit)

  return cards.map((card) => ({
    practiceItemKey: card.practiceItemKey,
    fsrsCard: card.fsrsCard,
    fsrsLogs: card.fsrsLogs,
    mode: card.mode,
    type: card.type,
  }))
}

export async function getItemStatuses(
  ctx: QueryCtx,
  keys: string[]
): Promise<Record<string, { state: number; scheduled_days: number }>> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return {}

  const userId = identity.subject

  const results = await Promise.all(
    keys.map((key) =>
      ctx.db
        .query('userFsrsCards')
        .withIndex('by_user_key_mode', (q) =>
          q.eq('userId', userId).eq('practiceItemKey', key).eq('mode', 'meanings')
        )
        .first()
    )
  )

  const statusMap: Record<string, { state: number; scheduled_days: number }> = {}
  for (let i = 0; i < keys.length; i++) {
    const card = results[i]
    if (card) {
      // Encode key to avoid non-ASCII characters in object keys
      statusMap[encodeURIComponent(keys[i])] = {
        state: card.fsrsCard.state,
        scheduled_days: card.fsrsCard.scheduled_days,
      }
    }
  }

  return statusMap
}

export async function getDueFSRSCardsCount(ctx: QueryCtx): Promise<number> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return 0

  const userId = identity.subject
  const now = Date.now()

  const [meaningsCards, spellingsCards] = await Promise.all([
    ctx.db
      .query('userFsrsCards')
      .withIndex('by_user_mode_due', (q) =>
        q.eq('userId', userId).eq('mode', 'meanings').lte('dueAt', now)
      )
      .collect(),
    ctx.db
      .query('userFsrsCards')
      .withIndex('by_user_mode_due', (q) =>
        q.eq('userId', userId).eq('mode', 'spellings').lte('dueAt', now)
      )
      .collect(),
  ])

  return meaningsCards.length + spellingsCards.length
}

export async function upsertFSRSCard(
  ctx: MutationCtx,
  data: {
    practiceItemKey: string
    fsrsCard: FSRSCardData['fsrsCard']
    fsrsLogs: FSRSCardData['fsrsLogs']
    mode: PracticeMode
    type: PracticeItemType
  }
): Promise<void> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) {
    throw new Error('Must be authenticated to save FSRS progress')
  }

  const userId = identity.subject
  const existing = await fetchExistingCard(ctx, userId, data.practiceItemKey, data.mode, data.type)

  const cardData = {
    userId,
    practiceItemKey: data.practiceItemKey,
    fsrsCard: data.fsrsCard,
    fsrsLogs: data.fsrsLogs,
    dueAt: data.fsrsCard.due,
    stability: data.fsrsCard.stability,
    mode: data.mode,
    type: data.type,
  }

  if (existing) {
    await ctx.db.patch(existing._id, cardData)
  } else {
    await ctx.db.insert('userFsrsCards', cardData)
  }
}

type ImportCard = Infer<typeof importCardValidator>

// Skip importing cards where existing has a longer interval (better knowledge)
const SKIP_WORSE_IMPORTS = true

/**
 * Import FSRS cards in batch.
 * When SKIP_WORSE_IMPORTS is true, skips cards where the existing stored card
 * has a longer interval than the incoming card.
 */
export async function batchImportFSRSCards(
  ctx: MutationCtx,
  cards: ImportCard[]
): Promise<{ imported: number }> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) {
    throw new Error('Must be authenticated to import cards')
  }

  const userId = identity.subject

  // Batch fetch existing cards
  const existingCards = await Promise.all(
    cards.map((card) => fetchExistingCard(ctx, userId, card.searchTerm, 'meanings', card.type))
  )

  // Filter + upsert in one pass
  let importedCount = 0
  await Promise.all(
    cards.map((card, i) => {
      const existing = existingCards[i]

      if (SKIP_WORSE_IMPORTS && !shouldImportCard(card.fsrsCard.scheduled_days, existing)) {
        return null
      }

      importedCount++

      const cardData = {
        userId,
        practiceItemKey: card.searchTerm,
        fsrsCard: card.fsrsCard,
        fsrsLogs: card.fsrsLogs,
        dueAt: card.fsrsCard.due,
        stability: card.fsrsCard.stability,
        mode: 'meanings' as const, // Import always targets meanings mode for now
        type: card.type,
      }

      return existing
        ? ctx.db.patch(existing._id, cardData)
        : ctx.db.insert('userFsrsCards', cardData)
    })
  )

  return { imported: importedCount }
}
