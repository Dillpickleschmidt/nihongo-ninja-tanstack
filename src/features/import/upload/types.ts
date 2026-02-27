import { State, type Card, type ReviewLog } from "ts-fsrs"
import type { PracticeItemType } from "convex/validators"
import type { ItemStatus } from "../shared/status"

/**
 * Import item for UI display
 */
export interface ImportItem {
  id: string
  status: ItemStatus
}

/**
 * Processed card ready for import (includes final FSRS state)
 */
export interface ProcessedCard {
  searchTerm: string
  type: PracticeItemType
  fsrsCard: Card
  fsrsLogs: ReviewLog[]
}

/**
 * Result from processing an import file
 */
export interface ImportProcessResult {
  vocabItems: ImportItem[]
  kanjiItems: ImportItem[]
  processedCards: ProcessedCard[]
}

/**
 * Determines import item status based on FSRS card state after review simulation
 */
export function getItemStatusFromFSRSCard(fsrsCard: {
  state: number
  stability: number
}): ItemStatus {
  if (fsrsCard.state === State.New) {
    return null
  }

  if (
    fsrsCard.state === State.Learning ||
    fsrsCard.state === State.Relearning
  ) {
    return "learning"
  }

  if (fsrsCard.state === State.Review) {
    if (fsrsCard.stability >= 21) {
      return "mastered"
    } else {
      return "decent"
    }
  }

  return null
}
