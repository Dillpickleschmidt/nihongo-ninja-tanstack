// src/features/fsrs-import/cardProcessing.ts

import { type Card, type ReviewLog } from "ts-fsrs"

export type ProcessedCard = {
  practice_item_key: string
  type: DBPracticeItemType
  fsrs_card: Card
  mode: "readings" | "kana"
  fsrs_logs: ReviewLog[]
  lesson_id: string | null
  source: string
}

// Regex to check for CJK Unified Ideographs (Kanji)
const KANJI_REGEX = /[\u4e00-\u9faf\u3400-\u4dbf]/

// =============================================================================
// CARD TYPE HELPERS
// =============================================================================

/**
 * Determines the practice mode based on item type and content.
 * Returns "readings" for kanji/radical types or vocabulary containing kanji.
 * Returns "kana" for pure kana vocabulary.
 */
export function determineMode(
  practiceItemType: DBPracticeItemType,
  originalSpelling: string,
): "readings" | "kana" {
  // Kanji and radicals always use readings mode
  if (practiceItemType === "kanji" || practiceItemType === "radical") {
    return "readings"
  }

  // For vocabulary, check if it contains kanji characters
  if (practiceItemType === "vocabulary") {
    // If spelling is empty or contains kanji, use readings mode
    if (!originalSpelling || KANJI_REGEX.test(originalSpelling)) {
      return "readings"
    }

    // Pure kana vocabulary uses kana mode
    return "kana"
  }

  // Default fallback
  return "readings"
}

/**
 * Normalizes search terms by trimming whitespace and handling null/undefined.
 */
export function normalizeSearchTerm(term: string | null | undefined): string {
  if (term === null || term === undefined) {
    return ""
  }

  if (typeof term !== "string") {
    return ""
  }

  return term.trim()
}

/**
 * Validates that a card has all required fields and proper structure.
 */
export function validateCardStructure(card: any): card is ProcessedCard {
  // Check if card is an object
  if (typeof card !== "object" || card === null) {
    return false
  }

  // Check required string fields
  if (
    typeof card.practice_item_key !== "string" ||
    card.practice_item_key.trim() === ""
  ) {
    return false
  }

  if (typeof card.source !== "string") {
    return false
  }

  // Check type is valid
  if (!["vocabulary", "kanji", "radical"].includes(card.type)) {
    return false
  }

  // Check mode is valid
  if (!["readings", "kana"].includes(card.mode)) {
    return false
  }

  // Check fsrs_card exists (basic structure check)
  if (typeof card.fsrs_card !== "object" || card.fsrs_card === null) {
    return false
  }

  // Check fsrs_logs is an array
  if (!Array.isArray(card.fsrs_logs)) {
    return false
  }

  // lesson_id can be null or string
  if (card.lesson_id !== null && typeof card.lesson_id !== "string") {
    return false
  }

  return true
}

// =============================================================================
// DUPLICATE HANDLING
// =============================================================================

/**
 * Selects the best card from a group of duplicates.
 * Chooses the card with the highest stability.
 * If stability is equal, chooses the first card.
 */
export function selectBestCard(cards: ProcessedCard[]): ProcessedCard {
  if (cards.length === 0) {
    throw new Error("Cannot select best card from empty array")
  }

  if (cards.length === 1) {
    return cards[0]
  }

  return cards.reduce((best, current) => {
    const bestStability = best.fsrs_card.stability || 0
    const currentStability = current.fsrs_card.stability || 0

    // Choose card with higher stability
    if (currentStability > bestStability) {
      return current
    }

    // If stability is equal (or both undefined/null), keep the first one
    return best
  })
}

/**
 * Groups cards by their unique key (practice_item_key + type).
 */
export function groupCardsByKey(
  cards: ProcessedCard[],
): Map<string, ProcessedCard[]> {
  const groups = new Map<string, ProcessedCard[]>()

  for (const card of cards) {
    const uniqueKey = `${card.practice_item_key}-${card.type}`

    if (!groups.has(uniqueKey)) {
      groups.set(uniqueKey, [])
    }

    groups.get(uniqueKey)!.push(card)
  }

  return groups
}

/**
 * Removes duplicate cards and keeps the best one from each group.
 * Returns deduplicated cards and count of removed duplicates.
 */
export function deduplicateCards(cards: ProcessedCard[]): {
  deduplicatedCards: ProcessedCard[]
  duplicatesRemoved: number
} {
  const groups = groupCardsByKey(cards)
  const deduplicatedCards: ProcessedCard[] = []
  let duplicatesRemoved = 0

  for (const [uniqueKey, cardGroup] of groups.entries()) {
    if (cardGroup.length > 1) {
      // Found duplicates - select the best one
      const bestCard = selectBestCard(cardGroup)

      // Log duplicate resolution for debugging
      console.log(
        `[DuplicateHandling] DUPLICATE ${uniqueKey} - kept source '${bestCard.source}' (stability: ${bestCard.fsrs_card.stability}) over ${cardGroup.length - 1} others`,
      )

      deduplicatedCards.push(bestCard)
      duplicatesRemoved += cardGroup.length - 1
    } else {
      // No duplicates - keep the single card
      deduplicatedCards.push(cardGroup[0])
    }
  }

  return {
    deduplicatedCards,
    duplicatesRemoved,
  }
}
