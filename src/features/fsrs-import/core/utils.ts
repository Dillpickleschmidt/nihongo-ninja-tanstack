import type { Card, ReviewLog } from "ts-fsrs"
import {
  type ProcessedCard,
  type DeduplicationStats,
  type NormalizedReview,
  type DBPracticeItemType,
  type PracticeMode,
  ProcessedCardSchema,
  parseProcessedCard,
} from "./schemas"

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
): PracticeMode {
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
 * Validates that a card has all required fields and proper structure using Zod.
 */
export function validateCardStructure(card: any): card is ProcessedCard {
  try {
    parseProcessedCard(card)
    return true
  } catch {
    return false
  }
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

// =============================================================================
// REVIEW MERGING UTILITIES
// =============================================================================

/**
 * Merges existing and imported reviews chronologically.
 * Imported reviews overwrite existing reviews at the same timestamp.
 * Filters out reviews with invalid timestamps or future dates.
 */
export function mergeReviews(
  existingReviews: NormalizedReview[],
  importedReviews: NormalizedReview[],
): NormalizedReview[] {
  // Filter out invalid reviews
  const validExistingReviews = filterValidReviews(existingReviews)
  const validImportedReviews = filterValidReviews(importedReviews)

  // Create a map of imported reviews by timestamp for quick lookup
  const importedByTimestamp = new Map<number, NormalizedReview>()

  for (const review of validImportedReviews) {
    const timestamp = review.timestamp.getTime()
    importedByTimestamp.set(timestamp, review)
  }

  // Start with existing reviews that don't conflict with imported ones
  const mergedReviews: NormalizedReview[] = []

  for (const existingReview of validExistingReviews) {
    const timestamp = existingReview.timestamp.getTime()

    // If imported review exists at same timestamp, skip existing (imported wins)
    if (!importedByTimestamp.has(timestamp)) {
      mergedReviews.push(existingReview)
    }
  }

  // Add all imported reviews
  mergedReviews.push(...validImportedReviews)

  // Sort chronologically by timestamp
  mergedReviews.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())

  return mergedReviews
}

/**
 * Filters out reviews with invalid timestamps, future dates, or malformed objects.
 */
function filterValidReviews(reviews: NormalizedReview[]): NormalizedReview[] {
  const now = Date.now()

  return reviews.filter((review) => {
    // Check if review has required fields
    if (!review || typeof review !== "object") {
      return false
    }

    if (!review.timestamp || !review.grade || !review.source) {
      return false
    }

    // Check if timestamp is a valid Date
    if (
      !(review.timestamp instanceof Date) ||
      isNaN(review.timestamp.getTime())
    ) {
      return false
    }

    // Skip future dates
    if (review.timestamp.getTime() > now) {
      console.warn(
        `[ReviewMerger] Skipping review with future date: ${review.timestamp.toISOString()}`,
      )
      return false
    }

    return true
  })
}

// =============================================================================
// BATCH PROCESSING UTILITIES
// =============================================================================

/**
 * Splits an array into chunks of specified size.
 * Preserves element order within chunks.
 */
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  if (chunkSize <= 0) {
    throw new Error("Chunk size must be greater than 0")
  }

  if (array.length === 0) {
    return []
  }

  const chunks: T[][] = []

  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }

  return chunks
}

/**
 * Processes batches in parallel using Promise.all.
 * Maintains result order and fails fast on any error.
 */
export async function processBatches<T, R>(
  items: T[],
  chunkSize: number,
  processor: (batch: T[]) => Promise<R>,
): Promise<R[]> {
  if (items.length === 0) {
    return []
  }

  // Split items into chunks
  const chunks = chunkArray(items, chunkSize)

  // Process all chunks in parallel
  const results = await Promise.all(chunks.map((chunk) => processor(chunk)))

  return results
}
