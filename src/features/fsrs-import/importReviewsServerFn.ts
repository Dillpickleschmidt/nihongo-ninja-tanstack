// src/features/fsrs-import/importReviewsServerFn.ts

import { createServerFn } from "@tanstack/solid-start"
import { createEmptyCard, FSRS } from "ts-fsrs"
import { getUser } from "@/features/supabase/getUser"
import {
  batchUpsertFSRSCardsForUser,
  getFSRSCardsByKeys,
} from "@/features/supabase/db/utils"
import { getWaniKaniService } from "./wanikaniService"
import { simulateFSRSReviews, type FSRSProcessingGrade } from "./fsrsProcessor"
import { mergeReviews } from "./reviewMerger"
import {
  deduplicateCards,
  determineMode,
  type ProcessedCard,
} from "./cardProcessing"
import { processBatches } from "./batchProcessing"
import type { NormalizedCard } from "./importAdapter"

type ImportReviewsInput = {
  cards: NormalizedCard[]
  source: string
}

/**
 * Simple server function that uses all the new modular components.
 */
export const importReviewsServerFn = createServerFn({
  method: "POST",
})
  .validator((input: any): ImportReviewsInput => {
    if (!Array.isArray(input.cards)) {
      throw new Error("Invalid data: cards array required")
    }
    if (typeof input.source !== "string") {
      throw new Error("Invalid data: source string required")
    }
    return input as ImportReviewsInput
  })
  .handler(async ({ data }) => {
    const { cards, source } = data

    // Auth check
    const response = await getUser()
    if (!response.user) {
      throw new Error("Authentication required")
    }
    const userId = response.user.id

    console.log(`[Import] Starting ${source} import: ${cards.length} cards`)
    const startTime = Date.now()

    try {
      // Process in batches using new batch processing utility
      const allProcessedCards = await processBatches(
        cards,
        50,
        async (cardBatch) => await processCardBatch(userId, cardBatch, source),
      )

      const flattenedCards = allProcessedCards.flat()

      if (flattenedCards.length === 0) {
        return {
          success: false,
          message: "No valid WaniKani subjects found for your cards",
        }
      }

      // Use new deduplication logic
      const { deduplicatedCards, duplicatesRemoved } =
        deduplicateCards(flattenedCards)

      // Save to database
      await batchUpsertFSRSCardsForUser({ data: deduplicatedCards })

      const duration = ((Date.now() - startTime) / 1000).toFixed(1)

      return {
        success: true,
        message: `Successfully imported ${deduplicatedCards.length} cards in ${duration}s`,
        stats: {
          processed: deduplicatedCards.length,
          duplicatesRemoved,
          duration: `${duration}s`,
        },
      }
    } catch (error) {
      console.error(`[Import] ${source} import failed:`, error)
      throw new Error(
        `Import failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      )
    }
  })

/**
 * Process a batch of cards using all the new modular functions.
 */
async function processCardBatch(
  userId: string,
  cards: NormalizedCard[],
  source: string,
) {
  // Use new WaniKani service for lookups
  const waniKaniService = getWaniKaniService()
  const searchTerms = cards.map((card) => card.searchTerm)
  const waniKaniResults = waniKaniService.batchFindSubjects(searchTerms)

  const fsrsInstance = new FSRS({ request_retention: 0.8 })
  const processedCards: ProcessedCard[] = []

  for (const card of cards) {
    const subjects = waniKaniResults.get(card.searchTerm) || []

    for (const subject of subjects) {
      // Use new card processing helpers
      const mode = determineMode(subject.type, card.searchTerm)

      // Get existing card
      const existingCards = await getFSRSCardsByKeys(userId, [subject.slug])
      const existingCard = existingCards.find(
        (c) => c.practice_item_key === subject.slug && c.type === subject.type,
      )

      // Use new review merger
      const existingReviews =
        existingCard?.fsrs_logs?.map((log) => ({
          timestamp: new Date(log.review),
          grade: log.rating as FSRSProcessingGrade,
          source: "existing",
        })) || []

      const mergedReviews = mergeReviews(existingReviews, card.reviews)

      // Use new FSRS processor
      const initialCard =
        existingCard?.fsrs_card || createEmptyCard(new Date("2000-01-01"))
      const { finalCard, logs } = simulateFSRSReviews(
        initialCard!,
        mergedReviews,
        fsrsInstance,
      )

      // Skip never-forget cards
      if (finalCard.stability === Infinity) continue

      processedCards.push({
        practice_item_key: subject.slug,
        type: subject.type,
        fsrs_card: finalCard,
        mode,
        fsrs_logs: logs,
        lesson_id: null,
        source: `${source}-${card.source}`,
      })
    }
  }

  return processedCards
}
