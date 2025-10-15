// features/srs-services/adapters/jpdb-adapter.ts
import type {
  SRSServiceAdapter,
  DueCard,
  DueCountResult,
  SeenCardsStatsResult,
} from "../types"

/**
 * JPDB adapter - currently not supported for due card fetching
 */
export class JpdbAdapter implements SRSServiceAdapter {
  readonly type = "jpdb" as const

  async getDueCount(): Promise<DueCountResult> {
    return {
      total: null,
      meanings: null,
      spellings: null,
      unavailableReason: "NOT_SUPPORTED",
    }
  }

  async getDueCards(): Promise<DueCard[]> {
    return [] // JPDB_NOT_SUPPORTED - return empty array
  }

  async submitReview(cardId: string, rating: number): Promise<void> {
    throw new Error("JPDB review submission not yet implemented")
  }

  async getSeenCardsStats(): Promise<SeenCardsStatsResult> {
    return { stats: null, unavailableReason: "NOT_SUPPORTED" }
  }
}
