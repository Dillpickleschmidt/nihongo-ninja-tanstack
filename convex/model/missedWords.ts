import type { MutationCtx, QueryCtx } from "../_generated/server"
import type { PracticeMode } from "../validators"
import { fetchVocabItemsByKeys } from "./vocabulary"
import { createDeck } from "./decks"
import { createDeckVocabItems } from "./vocabulary"

export interface MissedItem {
  practiceItemKey: string
  type: string
  missCount: number
}

/**
 * Finds the user's most-missed practice items within a time window.
 * "Missed" = FSRS review log with rating === 1 (Again).
 */
export async function getMostMissedItems(
  ctx: QueryCtx,
  args: { daysBack: number; maxItems: number; mode: PracticeMode },
): Promise<MissedItem[]> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return []

  const cutoff = Date.now() - args.daysBack * 86_400_000

  // Fetch all cards for this user+mode (we use a large dueAt range to get all)
  const cards = await ctx.db
    .query("userFsrsCards")
    .withIndex("by_user_mode_dueAt", (q) =>
      q.eq("userId", identity.subject).eq("mode", args.mode),
    )
    .collect()

  if (cards.length === 0) return []

  // For each card, count recent misses (rating === 1 = Rating.Again)
  const missCountMap: Map<
    string,
    { practiceItemKey: string; type: string; count: number }
  > = new Map()

  for (const card of cards) {
    const logs = await ctx.db
      .query("userFsrsCardLogs")
      .withIndex("by_card", (q) => q.eq("cardId", card._id))
      .collect()

    let count = 0
    for (const log of logs) {
      if (log.rating === 1 && log.review >= cutoff) {
        count++
      }
    }

    if (count > 0) {
      missCountMap.set(card._id, {
        practiceItemKey: card.practiceItemKey,
        type: card.type,
        count,
      })
    }
  }

  // Sort by miss count desc, take top N
  const sorted = [...missCountMap.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, args.maxItems)

  return sorted.map((item) => ({
    practiceItemKey: item.practiceItemKey,
    type: item.type,
    missCount: item.count,
  }))
}

/**
 * Creates a new user deck from a list of practiceItemKeys.
 * Looks up full vocab data from coreVocabularyItems.
 */
export async function buildMissedWordsDeck(
  ctx: MutationCtx,
  args: { practiceItemKeys: string[]; deckName: string },
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  // Fetch full vocab data for these keys
  const vocabMap = await fetchVocabItemsByKeys(ctx, args.practiceItemKeys, null)

  const vocabItems = args.practiceItemKeys
    .map((key) => vocabMap[encodeURIComponent(key)])
    .filter(Boolean)
    .map((item) => ({
      word: item.word,
      furigana: item.furigana || undefined,
      english: item.english,
      info: item.info,
      mnemonics: item.mnemonics,
      exampleSentences: item.exampleSentences,
      particles: item.particles,
    }))

  if (vocabItems.length === 0) {
    throw new Error("No vocabulary items found for the given keys")
  }

  const deckId = await createDeck(ctx, {
    deckName: args.deckName,
    source: "user",
    allowedPracticeModes: ["meanings", "spellings"],
  })

  await createDeckVocabItems(ctx, deckId, vocabItems)

  return deckId
}
