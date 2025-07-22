// src/features/fsrs-import/logic/card-validation-deduplication.ts

import type { Card, ReviewLog } from "ts-fsrs"

// =============================================================================
// TYPES
// =============================================================================

export type ProcessedCard = {
  practice_item_key: string
  type: DBPracticeItemType
  fsrs_card: Card
  mode: "readings" | "kana"
  fsrs_logs: ReviewLog[]
  lesson_id: string | null
  source: string
}

export type DeduplicationStats = {
  deduplicatedCards: ProcessedCard[]
  duplicatesRemoved: number
}

// =============================================================================
// CARD VALIDATION UTILITIES
// =============================================================================

const KANJI_REGEX = /[\u4e00-\u9faf\u3400-\u4dbf]/

/**
 * Determines the practice mode based on item type and content.
 * Returns "readings" for kanji/radical types or vocabulary containing kanji.
 * Returns "kana" for pure kana vocabulary.
 */
export function determineMode(
  practiceItemType: DBPracticeItemType,
  originalSpelling: string,
): "readings" | "kana" {
  // Non-vocabulary types always use readings mode
  if (practiceItemType !== "vocabulary") {
    return "readings"
  }

  // Vocabulary with kanji or empty spelling uses readings, pure kana uses kana
  return !originalSpelling || KANJI_REGEX.test(originalSpelling)
    ? "readings"
    : "kana"
}

/**
 * Normalizes search terms by trimming whitespace and handling null/undefined.
 */
export function normalizeSearchTerm(term: string | null | undefined): string {
  return typeof term === "string" ? term.trim() : ""
}

/**
 * Validates that a card has all required fields and proper structure.
 */
export function validateCardStructure(card: any): card is ProcessedCard {
  if (typeof card !== "object" || card === null) return false

  // Required string fields must be present and non-empty (after trim)
  if (
    typeof card.practice_item_key !== "string" ||
    !card.practice_item_key.trim()
  )
    return false
  if (typeof card.source !== "string") return false

  // Validate enums
  if (!["vocabulary", "kanji", "radical"].includes(card.type)) return false
  if (!["readings", "kana"].includes(card.mode)) return false

  // Validate object/array fields
  if (typeof card.fsrs_card !== "object" || card.fsrs_card === null)
    return false
  if (!Array.isArray(card.fsrs_logs)) return false

  // lesson_id can be null or string
  if (card.lesson_id !== null && typeof card.lesson_id !== "string")
    return false

  return true
}

// =============================================================================
// CARD DEDUPLICATION UTILITIES
// =============================================================================

/**
 * Selects the best card from a group of duplicates.
 * Chooses the card with the highest stability.
 * If stability is equal, chooses the first card.
 */
export function selectBestCard(cards: ProcessedCard[]): ProcessedCard {
  if (cards.length === 0)
    throw new Error("Cannot select best card from empty array")
  if (cards.length === 1) return cards[0]

  return cards.reduce((best, current) => {
    const bestStability = best.fsrs_card.stability || 0
    const currentStability = current.fsrs_card.stability || 0
    return currentStability > bestStability ? current : best
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
    const existing = groups.get(uniqueKey) || []
    groups.set(uniqueKey, [...existing, card])
  }

  return groups
}

/**
 * Removes duplicate cards and keeps the best one from each group.
 * Returns deduplicated cards and count of removed duplicates.
 */
export function deduplicateCards(cards: ProcessedCard[]): DeduplicationStats {
  const groups = groupCardsByKey(cards)
  const deduplicatedCards: ProcessedCard[] = []
  let duplicatesRemoved = 0

  for (const [uniqueKey, cardGroup] of groups.entries()) {
    const bestCard = selectBestCard(cardGroup)
    deduplicatedCards.push(bestCard)

    const removedCount = cardGroup.length - 1
    if (removedCount > 0) {
      duplicatesRemoved += removedCount
      console.log(
        `[DuplicateHandling] DUPLICATE ${uniqueKey} - kept source '${bestCard.source}' (stability: ${bestCard.fsrs_card.stability}) over ${removedCount} others`,
      )
    }
  }

  return { deduplicatedCards, duplicatesRemoved }
}

