import { type ProcessedCard } from "../types/fsrs-types"
import { type DeduplicationStats } from "../types/import-data-models"

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
