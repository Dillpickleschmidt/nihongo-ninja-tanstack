// features/srs-services/adapters/wanikani-adapter.ts
import type { SRSServiceAdapter, DueCard, DueCountResult } from "../types"

/**
 * WaniKani adapter - placeholder for future implementation
 * Will use WaniKani API to fetch due reviews and submit review results
 */
export class WanikaniAdapter implements SRSServiceAdapter {
  readonly type = "wanikani" as const

  async getDueCount(): Promise<DueCountResult> {
    throw new Error("WaniKani live mode not yet implemented")
  }

  async getDueCards(): Promise<DueCard[]> {
    throw new Error("WaniKani live mode not yet implemented")
  }

  async submitReview(cardId: string, rating: number): Promise<void> {
    throw new Error("WaniKani live mode not yet implemented")
  }
}
