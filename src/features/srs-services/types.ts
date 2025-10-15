// features/srs-services/types.ts
import type { PracticeMode } from "@/features/vocab-practice/types"

export type SRSServiceType = "anki" | "jpdb" | "wanikani" | "local"

/**
 * Result type for getDueCount() with explicit unavailable states
 */
export type DueCountResult = {
  count: number | null
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
 * Interface that all SRS service adapters must implement
 */
export interface SRSServiceAdapter {
  readonly type: SRSServiceType

  getDueCount(): Promise<DueCountResult>
  getDueCards(): Promise<DueCard[]>
  submitReview(cardId: string, rating: number): Promise<void>
}
