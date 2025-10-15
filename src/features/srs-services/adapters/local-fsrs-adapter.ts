// features/srs-services/adapters/local-fsrs-adapter.ts
import {
  getDueFSRSCardsCount,
  getDueFSRSCards,
  upsertFSRSCardForUser,
} from "@/features/supabase/db/fsrs"
import type { SRSServiceAdapter, DueCard, DueCountResult } from "../types"
import type { PracticeMode } from "@/features/vocab-practice/types"

/**
 * Local FSRS adapter that uses the existing Supabase FSRS database
 */
export class LocalFSRSAdapter implements SRSServiceAdapter {
  readonly type = "local" as const
  private userId: string

  constructor(userId: string) {
    this.userId = userId
  }

  async getDueCount(): Promise<DueCountResult> {
    const count = await getDueFSRSCardsCount(this.userId)
    return { count }
  }

  async getDueCards(): Promise<DueCard[]> {
    const fsrsCards = await getDueFSRSCards({ data: this.userId })

    return fsrsCards.map((card) => ({
      id: `${card.user_id}:${card.practice_item_key}:${card.type}:${card.mode}`,
      type: card.type as DBPracticeItemType,
      practice_item_key: card.practice_item_key,
      mode: card.mode as PracticeMode,
      due_at: new Date(card.fsrs_card.due),
    }))
  }

  async submitReview(cardId: string, rating: number): Promise<void> {
    // Parse the cardId to extract practice_item_key, type, and mode
    const [_userId, practice_item_key, type, mode] = cardId.split(":")

    if (!practice_item_key || !type || !mode) {
      throw new Error("Invalid card ID format")
    }

    // For local FSRS, we would need to:
    // 1. Get the current card
    // 2. Update it with the new rating using FSRS algorithm
    // 3. Upsert back to database
    // This is a simplified stub - actual implementation would be more complex
    throw new Error("Local FSRS review submission not yet implemented")
  }
}
