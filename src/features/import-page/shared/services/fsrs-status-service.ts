import { getAllFSRSCardsForUser } from "@/features/supabase/db/fsrs"
import type { Card } from "ts-fsrs"
import type { ItemStatus } from "../types"

/**
 * Calculates ItemStatus from an FSRS card based on its state and timing.
 * State mapping:
 * - State 0 (New): null (no status)
 * - State 1/3 (Learning/Relearning): "learning"
 * - State 2 (Review): "decent" if < 21 days since review, else "mastered"
 */
function calculateItemStatus(fsrsCard: Card): ItemStatus {
  if (fsrsCard.state === 0) {
    return null
  }

  if (fsrsCard.state === 1 || fsrsCard.state === 3) {
    return "learning"
  }

  if (fsrsCard.state === 2) {
    const lastReview = fsrsCard.last_review
    const due = fsrsCard.due

    if (!lastReview || !due) {
      return "decent"
    }

    const daysSinceReview = Math.floor(
      (due.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24)
    )

    return daysSinceReview >= 21 ? "mastered" : "decent"
  }

  return null
}

/**
 * Fetches FSRS statuses for vocabulary and kanji items in a single optimized query.
 * Returns a Map keyed by the natural practice_item_key (vocab word or kanji character).
 * Uses Map-based lookups for O(1) performance instead of O(n²) .find() loops.
 */
export async function fetchItemStatuses(
  userId: string,
  vocabWords: string[],
  kanjiChars: string[],
): Promise<Map<string, ItemStatus>> {
  const allCards = await getAllFSRSCardsForUser(userId, "meanings")
  const statusMap = new Map<string, ItemStatus>()

  // Create lookup maps for O(1) access instead of O(n) .find() per item
  const vocabCardsMap = new Map(
    allCards
      .filter((c) => c.type === "vocabulary")
      .map((c) => [c.practice_item_key, c])
  )

  const kanjiCardsMap = new Map(
    allCards
      .filter((c) => c.type === "kanji")
      .map((c) => [c.practice_item_key, c])
  )

  // Map vocabulary statuses - O(1) lookup
  for (const word of vocabWords) {
    const card = vocabCardsMap.get(word)
    statusMap.set(word, card ? calculateItemStatus(card.fsrs_card) : null)
  }

  // Map kanji statuses - O(1) lookup
  for (const char of kanjiChars) {
    const card = kanjiCardsMap.get(char)
    statusMap.set(char, card ? calculateItemStatus(card.fsrs_card) : null)
  }

  return statusMap
}

/**
 * Filters out mastered items from a list.
 * Used to exclude items that don't need further practice.
 */
export function filterOutMastered<T extends { id: string }>(
  items: T[],
  statuses: Map<string, ItemStatus>,
): T[] {
  return items.filter((item) => statuses.get(item.id) !== "mastered")
}
