import { createEmptyCard, FSRS } from "ts-fsrs"
import { simulateFSRSReviews } from "./spaced-repetition-processor"
import { mergeReviews } from "../shared/utils/review-merger"
import { validateCardStructure } from "../shared/utils/import-orchestrator-utils"
import { deduplicateCards } from "../shared/utils/card-deduplication"
import { processBatches } from "../shared/utils/batch-processing"
import type { ImportAdapter } from "../adapters/import-adapter-interface"
import type {
  ProcessedCard,
  FSRSProcessingGrade,
} from "../shared/types/fsrs-types"
import {
  type NormalizedCard,
  type ValidationResult,
  type ImportResult,
  type BatchProcessingContext,
  type DeduplicationStats,
  safeParseImportInput,
  ImportResultSchema,
} from "../shared/types/import-data-models"

// =============================================================================
// DEPENDENCY INJECTION INTERFACE
// =============================================================================

/**
 * External dependencies that need to be injected for testing
 */
export interface ImportDependencies {
  // Database operations
  getFSRSCards: (userId: string, keys: string[]) => Promise<any[]>
  batchUpsertFSRSCards: (data: any[]) => Promise<void>

  // Authentication
  getCurrentUser: () => Promise<{ user: { id: string } | null }>
}

// =============================================================================
// MAIN IMPORT MANAGER CLASS
// =============================================================================

/**
 * Manages the complete import session with dependency injection for testability.
 * Uses Zod validation throughout for type safety.
 */
export class ImportSessionManager {
  private readonly BATCH_SIZE = 50
  private readonly FSRS_REQUEST_RETENTION = 0.8

  // =============================================================================
  // STATIC UTILITY METHODS
  // =============================================================================

  /**
   * Extract unique search terms from a batch of cards.
   */
  static extractSearchTerms(cards: NormalizedCard[]): string[] {
    return cards.map((card) => card.searchTerm)
  }

  /**
   * Build a single FSRS card for both vocabulary and kanji cards.
   */
  static buildFSRSCard(
    card: NormalizedCard,
    existingCards: any[],
    context: BatchProcessingContext,
  ): ProcessedCard | null {
    try {
      const practiceItemKey = card.searchTerm
      const type = card.source.includes("kanji") ? "kanji" : "vocabulary"
      const mode = "meanings"

      // Find matching existing card
      const existingCard = existingCards.find(
        (c) => c.practice_item_key === practiceItemKey && c.type === type,
      )

      // Convert existing reviews to the format expected by review merger
      const existingReviews =
        existingCard?.fsrs_logs?.map((log: any) => ({
          timestamp: new Date(log.review),
          grade: log.rating as FSRSProcessingGrade,
          source: "existing",
        })) || []

      // Merge reviews using utility
      const mergedReviews = mergeReviews(existingReviews, card.reviews)

      // Simulate FSRS reviews
      const initialCard =
        existingCard?.fsrs_card || createEmptyCard(new Date("2000-01-01"))

      const { finalCard, logs } = simulateFSRSReviews(
        initialCard,
        mergedReviews,
        context.fsrsInstance,
      )

      const processedCard = {
        practice_item_key: practiceItemKey,
        type,
        fsrs_card: finalCard,
        mode,
        fsrs_logs: logs,
        source: `${context.source}-${card.source}`,
      }

      // Validate the result with Zod
      if (!validateCardStructure(processedCard)) {
        console.error(`Invalid processed card structure for ${card.searchTerm}`)
        return null
      }

      return processedCard
    } catch (error) {
      console.error(
        `Error building vocabulary FSRS card for ${card.searchTerm}:`,
        error,
      )
      return null
    }
  }

  /**
   * Static validation method for input data with Zod.
   */
  static validateInput<T>(
    input: any,
    adapter: ImportAdapter<T>,
  ): ValidationResult {
    try {
      // Check basic structure manually to provide specific error messages
      if (!Array.isArray(input.cards)) {
        return {
          valid: false,
          cards: [],
          errors: ["Invalid data: cards array required"],
        }
      }

      if (typeof input.source !== "string") {
        return {
          valid: false,
          cards: [],
          errors: ["Invalid data: source string required"],
        }
      }

      // Parse input with Zod for additional validation
      const parseResult = safeParseImportInput(input)
      if (!parseResult.success) {
        return {
          valid: false,
          cards: [],
          errors: [`Invalid input format: ${parseResult.error.message}`],
        }
      }

      const validInput = parseResult.data

      // Validate adapter input format
      if (!adapter.validateInput(validInput.cards)) {
        return {
          valid: false,
          cards: [],
          errors: ["Invalid data format for adapter"],
        }
      }

      // Transform cards using adapter
      const normalizedCards = adapter.transformCards(validInput.cards)

      if (normalizedCards.length === 0) {
        return {
          valid: false,
          cards: [],
          errors: ["No valid cards found in input data"],
        }
      }

      return {
        valid: true,
        cards: normalizedCards,
        errors: [],
      }
    } catch (error) {
      return {
        valid: false,
        cards: [],
        errors: [
          `Validation error: ${error instanceof Error ? error.message : "Unknown error"}`,
        ],
      }
    }
  }

  /**
   * Static method for deduplication logic.
   */
  static deduplicateProcessedCards(
    processedCards: ProcessedCard[],
  ): DeduplicationStats {
    return deduplicateCards(processedCards)
  }

  // =============================================================================
  // MAIN IMPORT METHOD
  // =============================================================================

  /**
   * Main import orchestration method with dependency injection.
   */
  async importCards<T>(
    input: { cards: T; source: string },
    adapter: ImportAdapter<T>,
    dependencies: ImportDependencies,
  ): Promise<ImportResult> {
    const startTime = Date.now()

    try {
      // Step 1: Validate input with Zod
      const validation = ImportSessionManager.validateInput(input, adapter)
      if (!validation.valid) {
        return {
          success: false,
          message: `Validation failed: ${validation.errors.join(", ")}`,
        }
      }

      const { cards } = validation
      console.log(
        `[Import] Starting ${input.source} import: ${cards.length} cards`,
      )

      // Step 2: Authenticate user (injected dependency)
      const userResponse = await dependencies.getCurrentUser()
      if (!userResponse.user) {
        return {
          success: false,
          message: "Authentication required",
        }
      }
      const userId = userResponse.user.id

      // Step 3: Process cards in batches
      const context: BatchProcessingContext = {
        userId,
        source: input.source,
        fsrsInstance: new FSRS({
          request_retention: this.FSRS_REQUEST_RETENTION,
        }),
      }

      const allProcessedCards = await processBatches(
        cards,
        this.BATCH_SIZE,
        async (cardBatch) =>
          await this.processCardBatch(cardBatch, context, dependencies),
      )

      const flattenedCards = allProcessedCards.flat()

      if (flattenedCards.length === 0) {
        return {
          success: false,
          message: "No valid WaniKani subjects found for your cards",
        }
      }

      // Step 4: Deduplicate
      const { deduplicatedCards, duplicatesRemoved } =
        ImportSessionManager.deduplicateProcessedCards(flattenedCards)

      // Step 5: Save to database (injected dependency)
      await dependencies.batchUpsertFSRSCards(deduplicatedCards)

      // Step 6: Return success result
      const duration = ((Date.now() - startTime) / 1000).toFixed(1)

      const result = {
        success: true,
        message: `Successfully imported ${deduplicatedCards.length} cards in ${duration}s`,
        stats: {
          processed: deduplicatedCards.length,
          duplicatesRemoved,
          duration: `${duration}s`,
        },
      }

      // Validate result with Zod
      return ImportResultSchema.parse(result)
    } catch (error) {
      console.error(`[Import] ${input.source} import failed:`, error)
      return {
        success: false,
        message: `Import failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      }
    }
  }

  // =============================================================================
  // PRIVATE METHODS
  // =============================================================================

  /**
   * Process a single batch of cards.
   */
  private async processCardBatch(
    cards: NormalizedCard[],
    context: BatchProcessingContext,
    dependencies: ImportDependencies,
  ): Promise<ProcessedCard[]> {
    // Get search terms for all cards
    const searchTerms = ImportSessionManager.extractSearchTerms(cards)

    // Fetch existing cards from database
    const existingCardsArray = await dependencies.getFSRSCards(
      context.userId,
      searchTerms,
    )

    // Group existing cards by search term for efficient lookup
    const existingCardsMap = new Map<string, any[]>()
    for (const card of existingCardsArray) {
      const key = card.practice_item_key
      if (!existingCardsMap.has(key)) {
        existingCardsMap.set(key, [])
      }
      existingCardsMap.get(key)!.push(card)
    }

    // Process all cards uniformly
    const processedCards: ProcessedCard[] = []
    for (const card of cards) {
      const processedCard = ImportSessionManager.buildFSRSCard(
        card,
        existingCardsMap.get(card.searchTerm) || [],
        context,
      )

      // Skip never-forget cards and invalid cards
      if (processedCard && processedCard.fsrs_card.stability !== Infinity) {
        processedCards.push(processedCard)
      }
    }

    return processedCards
  }
}
