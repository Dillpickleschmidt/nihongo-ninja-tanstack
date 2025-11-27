import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import type { ItemStatusData } from "../services/fsrs-status-service"

export function buildExistingCardsMap(
  statusMap: Map<string, ItemStatusData>
): Map<string, FSRSCardData> {
  const cardsMap = new Map<string, FSRSCardData>()
  statusMap.forEach((statusData, id) => {
    if (statusData.card) {
      cardsMap.set(id, statusData.card)
    }
  })
  return cardsMap
}

export function extractCardsFromStatuses(
  statusMap: Map<string, ItemStatusData>
): FSRSCardData[] {
  return Array.from(statusMap.values())
    .filter((statusData) => statusData.card)
    .map((statusData) => statusData.card!)
}

export function buildCardTypeIdSets(
  statusMap: Map<string, ItemStatusData>
): {
  vocabIds: Set<string>
  kanjiIds: Set<string>
} {
  const vocabIds = new Set<string>()
  const kanjiIds = new Set<string>()

  statusMap.forEach((statusData, id) => {
    if (statusData.card) {
      if (statusData.card.type === "vocabulary") {
        vocabIds.add(id)
      } else if (statusData.card.type === "kanji") {
        kanjiIds.add(id)
      }
    }
  })

  return { vocabIds, kanjiIds }
}
