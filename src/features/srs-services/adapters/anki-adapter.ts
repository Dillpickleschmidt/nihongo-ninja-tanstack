// features/srs-services/adapters/anki-adapter.ts
import { isServer } from "solid-js/web"
import { getDueCards } from "@/features/service-api-functions/anki/anki-connect-client"
import type { SRSServiceAdapter, DueCard, DueCountResult } from "../types"

/**
 * Anki adapter that uses AnkiConnect to communicate with Anki desktop/mobile
 * This adapter runs client-side only since AnkiConnect is on localhost
 */
export class AnkiAdapter implements SRSServiceAdapter {
  readonly type = "anki" as const

  async getDueCount(): Promise<DueCountResult> {
    if (isServer) {
      return { count: null, unavailableReason: "CLIENT_ONLY" }
    }
    const cards = await getDueCards()
    return { count: cards.length }
  }

  async getDueCards(): Promise<DueCard[]> {
    if (isServer) return [] // CLIENT_ONLY - return empty array
    const ankiCards = await getDueCards()

    // Transform Anki card format to our common DueCard format
    return ankiCards.map((card: any) => ({
      id: `anki:${card.cardId}`,
      type: "vocabulary" as const, // Anki doesn't distinguish types like we do
      practice_item_key: card.fields?.Front?.value || card.cardId.toString(),
      mode: "meanings" as const, // Default to meanings for now
      due_at: card.due ? new Date(card.due * 1000) : undefined,
    }))
  }

  async submitReview(cardId: string, rating: number): Promise<void> {
    // Extract Anki card ID from our format
    const ankiCardId = cardId.replace("anki:", "")

    // TODO: Implement AnkiConnect answerCards endpoint
    // This would call: ankiConnectRequest("answerCards", { cards: [{ cardId, ease: rating }] })
    throw new Error("Anki review submission not yet implemented")
  }
}
