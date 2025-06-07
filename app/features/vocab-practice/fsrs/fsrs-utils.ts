import {
  createEmptyCard,
  fsrs,
  generatorParameters,
  Rating,
  type Grade,
  type Card as FSRSCard,
} from "ts-fsrs"
import type { FSRSCardData } from "@/features/supabase/db/utils"

const params = generatorParameters({
  // enable_fuzz: true,
  // enable_short_term: false,
})
const fsrsInstance = fsrs(params)

/**
 * Find an FSRS card by practice_item_key.
 */
export function findFSRSCardByKey(
  cards: FSRSCardData[],
  practiceItemKey: string,
): FSRSCardData | undefined {
  return cards.find((card) => card.practice_item_key === practiceItemKey)
}

/**
 * Get or create an FSRS card for a vocab item.
 */
export function getOrCreateFSRSCard(
  cards: FSRSCardData[],
  practiceItemKey: string,
): FSRSCardData {
  let card = findFSRSCardByKey(cards, practiceItemKey)
  if (card) return card

  // Create a new FSRS card
  const now = new Date()
  const newFSRSCard: FSRSCard = createEmptyCard(now)
  const newCardData: FSRSCardData = {
    practice_item_key: practiceItemKey,
    fsrs_card: newFSRSCard,
  }
  return newCardData
}

/**
 * Update an FSRS card with a new review.
 */
export function updateLocalFSRSCard(
  cardData: FSRSCardData,
  rating: Rating,
  now: Date,
): FSRSCardData {
  const { card: updatedCard } = fsrsInstance.next(
    cardData.fsrs_card,
    now,
    rating as Grade,
  )
  return {
    ...cardData,
    fsrs_card: updatedCard,
  }
}

/**
 * Map cardStyle and correctness to FSRS Rating.
 */
export function getFSRSRatingFromPracticeEvent(
  cardStyle: "multiple-choice" | "write",
  correct: boolean,
): Rating {
  if (!correct) return Rating.Again
  if (cardStyle === "multiple-choice") return Rating.Good
  if (cardStyle === "write") return Rating.Easy
  return Rating.Again
}
