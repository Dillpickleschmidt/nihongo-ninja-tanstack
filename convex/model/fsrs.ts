import { MutationCtx, QueryCtx } from "../_generated/server"
import { Doc, Id } from "../_generated/dataModel"
import type { Infer } from "convex/values"
import type {
  PracticeMode,
  PracticeItemType,
  fsrsCardValidator,
  fsrsReviewLogValidator,
} from "../validators"
import type { Card, ReviewLog } from "ts-fsrs"

// Validated formats (what API receives - already storage-ready)
type ValidatedCard = Infer<typeof fsrsCardValidator>
type ValidatedLog = Infer<typeof fsrsReviewLogValidator>

// Helper: Convert flat card document to ts-fsrs Card (for algorithm operations)
export function toTsFsrsCard(doc: Doc<"userFsrsCards">): Card {
  return {
    due: new Date(doc.dueAt),
    stability: doc.stability,
    difficulty: doc.difficulty,
    elapsed_days: doc.elapsed_days,
    scheduled_days: doc.scheduled_days,
    reps: doc.reps,
    lapses: doc.lapses,
    state: doc.state,
    learning_steps: doc.learning_steps ?? 0,
    last_review: undefined,
  }
}

// Helper: Convert ts-fsrs Card to flat fields for storage
export function fromTsFsrsCard(card: Card) {
  const { due, last_review, ...rest } = card
  return { ...rest, dueAt: due.getTime() }
}

// Helper: Convert ts-fsrs ReviewLog to flat fields for storage
export function fromTsFsrsLog(log: ReviewLog) {
  const { due, review, ...rest } = log
  return { ...rest, due: due.getTime(), review: review.getTime() }
}

// Helper: query cards by user + mode, with optional dueAt upper bound
function queryCardsByMode(
  ctx: QueryCtx,
  userId: string,
  mode: PracticeMode,
  dueAt?: number,
) {
  return ctx.db
    .query("userFsrsCards")
    .withIndex("by_user_mode_dueAt", (q) => {
      const base = q.eq("userId", userId).eq("mode", mode)
      return dueAt !== undefined ? base.lte("dueAt", dueAt) : base
    })
}

// Helper: fetch existing card by key/mode/type
function fetchExistingCard(
  ctx: MutationCtx | QueryCtx,
  userId: string,
  key: string,
  mode: PracticeMode,
  type: PracticeItemType,
) {
  return ctx.db
    .query("userFsrsCards")
    .withIndex("by_user_key_mode_type", (q) =>
      q
        .eq("userId", userId)
        .eq("practiceItemKey", key)
        .eq("mode", mode)
        .eq("type", type),
    )
    .first()
}

// Helper: check if incoming card should be imported over existing
function shouldImportCard(
  incomingScheduledDays: number,
  existing: Doc<"userFsrsCards"> | null,
): boolean {
  if (!existing) return true
  return incomingScheduledDays >= existing.scheduled_days
}

export async function getFSRSCardsForItems(
  ctx: QueryCtx,
  keys: string[],
  mode: PracticeMode,
): Promise<{
  vocabulary: Doc<"userFsrsCards">[]
  kanji: Doc<"userFsrsCards">[]
  radical: Doc<"userFsrsCards">[]
}> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) {
    return { vocabulary: [], kanji: [], radical: [] }
  }

  const userId = identity.subject
  const uniqueSortedKeys = [...new Set(keys)].sort()

  const results = await Promise.all(
    uniqueSortedKeys.map((key) =>
      ctx.db
        .query("userFsrsCards")
        .withIndex("by_user_key_mode_type", (q) =>
          q.eq("userId", userId).eq("practiceItemKey", key).eq("mode", mode),
        )
        .collect(),
    ),
  )

  const bucketed = {
    vocabulary: [] as Doc<"userFsrsCards">[],
    kanji: [] as Doc<"userFsrsCards">[],
    radical: [] as Doc<"userFsrsCards">[],
  }

  for (const cardsForKey of results) {
    for (const card of cardsForKey) {
      bucketed[card.type].push(card)
    }
  }

  return bucketed
}

export async function getDueFSRSCards(
  ctx: QueryCtx,
  mode: PracticeMode,
  limit?: number,
): Promise<Doc<"userFsrsCards">[]> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return []

  const query = queryCardsByMode(ctx, identity.subject, mode, Date.now())
  return limit === undefined ? query.collect() : query.take(limit)
}

/**
 * All unique practice item keys the user has ever practiced (both modes).
 */
export async function getAllPracticedKeys(ctx: QueryCtx): Promise<string[]> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return []

  const userId = identity.subject
  const [spellings, meanings] = await Promise.all([
    queryCardsByMode(ctx, userId, "spellings").collect(),
    queryCardsByMode(ctx, userId, "meanings").collect(),
  ])

  const seen = new Set<string>()
  for (const card of spellings) {
    if (card.type === "vocabulary") seen.add(card.practiceItemKey)
  }
  for (const card of meanings) {
    if (card.type === "vocabulary") seen.add(card.practiceItemKey)
  }
  return [...seen]
}

type StatusData = { state: number; scheduled_days: number }
type StatusesByType = Record<PracticeItemType, Record<string, StatusData>>

export async function getItemStatuses(
  ctx: QueryCtx,
  items: { key: string; type: PracticeItemType }[],
): Promise<StatusesByType> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return { vocabulary: {}, kanji: {}, radical: {} }

  const userId = identity.subject

  const results = await Promise.all(
    items.map((item) =>
      ctx.db
        .query("userFsrsCards")
        .withIndex("by_user_key_mode_type", (q) =>
          q
            .eq("userId", userId)
            .eq("practiceItemKey", item.key)
            .eq("mode", "meanings")
            .eq("type", item.type),
        )
        .first(),
    ),
  )

  const statusMap: StatusesByType = { vocabulary: {}, kanji: {}, radical: {} }
  for (let i = 0; i < items.length; i++) {
    const card = results[i]
    if (card) {
      // Convex requires ASCII field names, so encode Japanese keys
      statusMap[items[i].type][encodeURIComponent(items[i].key)] = {
        state: card.state,
        scheduled_days: card.scheduled_days,
      }
    }
  }

  return statusMap
}

export async function getDueFSRSCardsCount(
  ctx: QueryCtx,
): Promise<{ meanings: number; spellings: number }> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return { meanings: 0, spellings: 0 }

  const userId = identity.subject
  const now = Date.now()

  const [meanings, spellings] = await Promise.all([
    queryCardsByMode(ctx, userId, "meanings", now).collect(),
    queryCardsByMode(ctx, userId, "spellings", now).collect(),
  ])

  return { meanings: meanings.length, spellings: spellings.length }
}

export async function upsertFSRSCard(
  ctx: MutationCtx,
  data: {
    practiceItemKey: string
    card: ValidatedCard
    newLogs: ValidatedLog[]
    mode: PracticeMode
    type: PracticeItemType
  },
): Promise<void> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) {
    throw new Error("Must be authenticated to save FSRS progress")
  }

  const userId = identity.subject
  const existing = await fetchExistingCard(
    ctx,
    userId,
    data.practiceItemKey,
    data.mode,
    data.type,
  )

  const cardData = {
    userId,
    practiceItemKey: data.practiceItemKey,
    mode: data.mode,
    type: data.type,
    ...data.card,
  }

  let cardId: Id<"userFsrsCards">

  if (existing) {
    await ctx.db.patch(existing._id, data.card)
    cardId = existing._id
  } else {
    cardId = await ctx.db.insert("userFsrsCards", cardData)
  }

  // Insert new logs
  await Promise.all(
    data.newLogs.map((log) =>
      ctx.db.insert("userFsrsCardLogs", { cardId, ...log }),
    ),
  )
}

// Skip importing cards where existing has a longer interval (better knowledge)
const SKIP_WORSE_IMPORTS = true

/**
 * Import FSRS cards in batch.
 * When SKIP_WORSE_IMPORTS is true, skips cards where the existing stored card
 * has a longer interval than the incoming card.
 */
export async function batchImportFSRSCards(
  ctx: MutationCtx,
  cards: {
    searchTerm: string
    type: PracticeItemType
    card: ValidatedCard
    logs: ValidatedLog[]
  }[],
): Promise<{ imported: number }> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) {
    throw new Error("Must be authenticated to import cards")
  }

  const userId = identity.subject

  // Batch fetch existing cards
  const existingCards = await Promise.all(
    cards.map((card) =>
      fetchExistingCard(ctx, userId, card.searchTerm, "meanings", card.type),
    ),
  )

  // Filter + upsert in one pass
  let importedCount = 0
  await Promise.all(
    cards.map(async (card, i) => {
      const existing = existingCards[i]

      if (
        SKIP_WORSE_IMPORTS &&
        !shouldImportCard(card.card.scheduled_days, existing)
      ) {
        return null
      }

      importedCount++

      const cardData = {
        userId,
        practiceItemKey: card.searchTerm,
        mode: "meanings" as const,
        type: card.type,
        ...card.card,
      }

      let cardId: Id<"userFsrsCards">

      if (existing) {
        await ctx.db.patch(existing._id, card.card)
        cardId = existing._id
      } else {
        cardId = await ctx.db.insert("userFsrsCards", cardData)
      }

      // Insert all logs for this card
      await Promise.all(
        card.logs.map((log) =>
          ctx.db.insert("userFsrsCardLogs", { cardId, ...log }),
        ),
      )
    }),
  )

  return { imported: importedCount }
}
