import { getAllFSRSCardsForUser, type FSRSCardData } from "@/features/supabase/db/fsrs"
import type { Card } from "ts-fsrs"
import type { ItemStatus } from "../types"

export interface ItemStatusData {
  status: ItemStatus
  card?: FSRSCardData // full card data if exists (includes lapses for later use)
}

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

export async function fetchItemStatuses(
  userId: string,
  vocabWords: string[],
  kanjiChars: string[],
): Promise<Map<string, ItemStatusData>> {
  const allCards = await getAllFSRSCardsForUser(userId, "meanings")
  const statusMap = new Map<string, ItemStatusData>()

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

  for (const word of vocabWords) {
    const card = vocabCardsMap.get(word)
    statusMap.set(word, {
      status: card ? calculateItemStatus(card.fsrs_card) : null,
      card,
    })
  }

  for (const char of kanjiChars) {
    const card = kanjiCardsMap.get(char)
    statusMap.set(char, {
      status: card ? calculateItemStatus(card.fsrs_card) : null,
      card,
    })
  }

  return statusMap
}

export function filterOutMastered<T extends { id: string }>(
  items: T[],
  statuses: Map<string, ItemStatus>,
): T[] {
  return items.filter((item) => statuses.get(item.id) !== "mastered")
}
