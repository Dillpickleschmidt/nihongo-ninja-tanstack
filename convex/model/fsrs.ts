import { MutationCtx, QueryCtx } from '../_generated/server'
import type { PracticeMode, PracticeItemType } from '../validators'
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

  // Check if card exists
  const existing = await ctx.db
    .query('userFsrsCards')
    .withIndex('by_user_key_mode_type', (q) =>
      q
        .eq('userId', userId)
        .eq('practiceItemKey', data.practiceItemKey)
        .eq('mode', data.mode)
        .eq('type', data.type)
    )
    .first()

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
