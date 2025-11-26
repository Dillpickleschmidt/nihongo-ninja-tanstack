import { createServerFn } from "@tanstack/solid-start"
import { createEmptyCard, FSRS } from "ts-fsrs"
import { getUser } from "@/features/supabase/getUser"
import {
  batchUpsertFSRSCardsForUser,
  getAllFSRSCardsForUser,
} from "@/features/supabase/db/fsrs"
import { mergeReviews } from "../shared/utils/review-merger"
import { simulateFSRSReviews } from "../services/spaced-repetition-processor"
import { deduplicateCards } from "../shared/utils/card-deduplication"
import { processBatches } from "../shared/utils/batch-processing"
import { type NormalizedCard } from "../shared/types/import-data-models"
import type { FSRSProcessingGrade, ProcessedCard } from "../shared/types/fsrs-types"
import { z } from "zod"

const ImportReviewsInputSchema = z.object({
  cards: z.array(z.unknown()),
  source: z.string().min(1),
})
type ImportReviewsInput = z.infer<typeof ImportReviewsInputSchema>

export const importReviewsServerFn = createServerFn({
  method: "POST",
})
  .inputValidator((input: any): ImportReviewsInput => {
    return ImportReviewsInputSchema.parse(input)
  })
  .handler(async ({ data }) => {
    const startTime = Date.now()

    try {
      // Validate input
      if (!Array.isArray(data.cards)) {
        throw new Error("Invalid data: cards array required")
      }

      const cards = data.cards as NormalizedCard[]
      if (cards.length === 0) {
        throw new Error("No valid cards found in input data")
      }

      // Authenticate user
      const userResponse = await getUser()
      if (!userResponse.user) {
        throw new Error("Authentication required")
      }

      const userId = userResponse.user.id

      // Fetch all existing FSRS cards for the user
      const existingCardsArray = await getAllFSRSCardsForUser(userId, "meanings")

      // Group existing cards by search term for efficient lookup
      const existingCardsMap = new Map<string, any[]>()
      for (const card of existingCardsArray) {
        const key = card.practice_item_key
        if (!existingCardsMap.has(key)) {
          existingCardsMap.set(key, [])
        }
        existingCardsMap.get(key)!.push(card)
      }

      // Process cards in batches
      const fsrsInstance = new FSRS({ request_retention: 0.8 })
      const allProcessedCards = await processBatches(
        cards,
        50,
        async (batch) => {
          const processed: ProcessedCard[] = []

          for (const card of batch) {
            const practiceItemKey = card.searchTerm
            const existingCard = existingCardsMap.get(practiceItemKey)

            // Convert existing reviews
            const existingReviews =
              existingCard?.[0]?.fsrs_logs?.map((log: any) => ({
                timestamp: new Date(log.review),
                grade: log.rating as FSRSProcessingGrade,
                source: "existing",
              })) || []

            // Merge reviews
            const mergedReviews = mergeReviews(existingReviews, card.reviews)

            // Simulate FSRS
            const initialCard =
              existingCard?.[0]?.fsrs_card || createEmptyCard(new Date("2000-01-01"))

            const { finalCard, logs } = simulateFSRSReviews(
              initialCard,
              mergedReviews,
              fsrsInstance,
            )

            const processedCard: ProcessedCard = {
              practice_item_key: practiceItemKey,
              type: card.type,
              fsrs_card: finalCard,
              mode: "meanings",
              fsrs_logs: logs,
            }

            // Skip never-forget cards
            if (processedCard.fsrs_card.stability !== Infinity) {
              processed.push(processedCard)
            }
          }

          return processed
        },
      )

      const flattenedCards = allProcessedCards.flat()

      if (flattenedCards.length === 0) {
        throw new Error("No valid cards could be processed from the import")
      }

      // Deduplicate
      const { deduplicatedCards, duplicatesRemoved } =
        deduplicateCards(flattenedCards)

      // Save to database
      await batchUpsertFSRSCardsForUser(deduplicatedCards)

      // Return success
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
      throw new Error(
        `Import failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      )
    }
  })
