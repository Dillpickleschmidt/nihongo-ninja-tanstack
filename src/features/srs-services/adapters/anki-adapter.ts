// features/srs-services/adapters/anki-adapter.ts
import { isServer } from "solid-js/web"
import {
  getDueCards,
  getAllSeenCards,
  getWeekSeenCards,
  extractJapaneseTextFromCard,
} from "@/features/service-api-functions/anki/anki-connect-client"
import { isKanji } from "@/data/wanikani/hierarchy-builder"
import type {
  SRSServiceAdapter,
  DueCard,
  DueCountResult,
  SeenCardsStatsResult,
} from "../types"

/**
 * Anki adapter that uses AnkiConnect to communicate with Anki desktop/mobile
 * This adapter runs client-side only since AnkiConnect is on localhost
 */
export class AnkiAdapter implements SRSServiceAdapter {
  readonly type = "anki" as const

  async getDueCount(): Promise<DueCountResult> {
    if (isServer) {
      return {
        total: null,
        meanings: null,
        spellings: null,
        unavailableReason: "CLIENT_ONLY",
      }
    }

    const ankiCards = await getDueCards()

    const meaningsBreakdown = { vocab: 0, kanji: 0 }
    let spellingsCount = 0

    for (const card of ankiCards) {
      const japaneseText = extractJapaneseTextFromCard(card)
      if (!japaneseText) continue

      const isKanjiCard = japaneseText.length === 1 && isKanji(japaneseText)

      if (isKanjiCard) {
        meaningsBreakdown.kanji++
      } else {
        meaningsBreakdown.vocab++
      }
    }

    const total = meaningsBreakdown.vocab + meaningsBreakdown.kanji + spellingsCount

    return {
      total,
      meanings: meaningsBreakdown,
      spellings: spellingsCount,
    }
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

  async getSeenCardsStats(): Promise<SeenCardsStatsResult> {
    if (isServer) {
      return { stats: null, unavailableReason: "CLIENT_ONLY" }
    }

    // Get all seen cards and weekly cards in parallel
    const [allCards, weekCards] = await Promise.all([
      getAllSeenCards(),
      getWeekSeenCards(),
    ])

    let kanjiCount = 0
    let vocabCount = 0
    let kanjiWeekCount = 0
    let vocabWeekCount = 0

    // Calculate total counts
    for (const card of allCards) {
      const japaneseText = extractJapaneseTextFromCard(card)

      // Skip cards without Japanese text
      if (!japaneseText) continue

      // Single kanji character = kanji, otherwise = vocab
      if (japaneseText.length === 1 && isKanji(japaneseText)) {
        kanjiCount++
      } else {
        vocabCount++
      }
    }

    // Calculate weekly counts
    for (const card of weekCards) {
      const japaneseText = extractJapaneseTextFromCard(card)

      // Skip cards without Japanese text
      if (!japaneseText) continue

      // Single kanji character = kanji, otherwise = vocab
      if (japaneseText.length === 1 && isKanji(japaneseText)) {
        kanjiWeekCount++
      } else {
        vocabWeekCount++
      }
    }

    return {
      stats: {
        vocab: vocabCount,
        kanji: kanjiCount,
        vocabWeek: vocabWeekCount,
        kanjiWeek: kanjiWeekCount,
      },
    }
  }
}
