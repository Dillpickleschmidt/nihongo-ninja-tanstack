// features/srs-services/types.ts
import type { PracticeMode } from "@/features/vocab-practice/types"

export type SRSServiceType = "anki" | "jpdb" | "wanikani" | "local"

export type DueCountResult = {
  total: number | null
  meanings: { vocab: number; kanji: number } | null
  spellings: number | null
  unavailableReason?: "CLIENT_ONLY" | "NOT_SUPPORTED"
}

/**
 * Common due card structure used across all SRS services
 */
export interface DueCard {
  id: string
  type: DBPracticeItemType
  practice_item_key: string
  mode: PracticeMode
  due_at?: Date
}

/**
 * Stats for seen cards broken down by type
 */
export interface SeenCardsStats {
  vocab: number
  kanji: number
  vocabWeek: number
  kanjiWeek: number
}

/**
 * Result type for getSeenCardsStats() with explicit unavailable states
 */
export type SeenCardsStatsResult = {
  stats: SeenCardsStats | null
  unavailableReason?: "CLIENT_ONLY" | "NOT_SUPPORTED"
}

/**
 * Interface that all SRS service adapters must implement
 */
export interface SRSServiceAdapter {
  readonly type: SRSServiceType

  getDueCount(): Promise<DueCountResult>
  getDueCards(): Promise<DueCard[]>
  submitReview(cardId: string, rating: number): Promise<void>
  getSeenCardsStats(): Promise<SeenCardsStatsResult>
}
