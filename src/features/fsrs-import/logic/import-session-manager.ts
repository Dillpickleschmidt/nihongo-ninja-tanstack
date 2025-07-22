// src/features/fsrs-import/logic/import-session-manager.ts

import { createEmptyCard, FSRS } from "ts-fsrs"
import { mergeReviews } from "../utils/reviewMerger"
import {
  simulateFSRSReviews,
  type FSRSProcessingGrade,
} from "./spaced-repetition-processor"
import {
  determineMode,
  deduplicateCards,
  type ProcessedCard,
  type DeduplicationStats,
} from "./card-validation-deduplication"
import type { ImportAdapter, NormalizedCard } from "../adapters/import-adapter-interface"
import type {
  ImportDependencies,
  ValidationResult,
  ImportResult,
  BatchProcessingContext,
} from "./types"

// Re-export key types for external consumers
export {
  CustomFSRSRating,
  type FSRSProcessingGrade,
  type NormalizedReview,
} from "./spaced-repetition-processor"
export {
  type ProcessedCard,
  type DeduplicationStats,
} from "./card-validation-deduplication"

/**
 * Manages the complete import session with dependency injection for testability.
 * Follows the same pattern as PracticeSessionManager.
 */
export class ImportSessionManager {
  private readonly BATCH_SIZE = 50
  private readonly FSRS_REQUEST_RETENTION = 0.8

  // =============================================================================
  // BATCH PROCESSING UTILITIES
  // =============================================================================

  /**
   * Splits an array into chunks of specified size.
   * Preserves element order within chunks.
   */
  static chunkArray<T>(array: T[], chunkSize: number): T[][] {
    if (chunkSize <= 0) {
      throw new Error("Chunk size must be greater than 0")
    }

    if (array.length === 0) {
      return []
    }

    const chunks: T[][] = []

    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize))
    }

    return chunks
  }

  /**
   * Processes batches in parallel using Promise.all.
   * Maintains result order and fails fast on any error.
   */
  static async processBatches<T, R>(
    items: T[],
    chunkSize: number,
    processor: (batch: T[]) => Promise<R>,
  ): Promise<R[]> {
    if (items.length === 0) {
      return []
    }

    // Split items into chunks
    const chunks = ImportSessionManager.chunkArray(items, chunkSize)

    // Process all chunks in parallel
    const results = await Promise.all(chunks.map((chunk) => processor(chunk)))

    return results
  }

  // --- CORE IMPORT SESSION LOGIC ---

  /**
   * Extract unique search terms from a batch of cards.
   * Useful for preparing batch lookups.
   */
  static extractSearchTerms(cards: NormalizedCard[]): string[] {
    return cards.map((card) => card.searchTerm)
  }

  /**
   * Extract unique subject slugs for database queries.
   * Takes the results from WaniKani lookups and extracts all slugs.
   */
  static extractSubjectSlugs(waniKaniResults: Map<string, any[]>): string[] {
    const slugs = new Set<string>()

    for (const subjects of waniKaniResults.values()) {
      for (const subject of subjects) {
        slugs.add(subject.slug)
      }
    }

    return Array.from(slugs)
  }

  /**
   * Group existing cards by subject slug for efficient lookup.
   * Converts array of existing cards to a map for O(1) lookups.
   */
  static groupExistingCardsBySlug(existingCards: any[]): Map<string, any[]> {
    const grouped = new Map<string, any[]>()

    for (const card of existingCards) {
      const slug = card.practice_item_key
      if (!grouped.has(slug)) {
        grouped.set(slug, [])
      }
      grouped.get(slug)!.push(card)
    }

    return grouped
  }

  /**
   * Build a single FSRS card from normalized card data and subject mapping.
   * Pure function that handles FSRS simulation and card state calculation.
   */
  static buildFSRSCard(
    card: NormalizedCard,
    subject: any,
    existingCards: any[],
    context: BatchProcessingContext,
  ): ProcessedCard | null {
    try {
      const mode = determineMode(subject.type, card.searchTerm)

      // Find matching existing card
      const existingCard = existingCards.find(
        (c) => c.practice_item_key === subject.slug && c.type === subject.type,
      )

      // Convert existing reviews to the format expected by review merger
      const existingReviews =
        existingCard?.fsrs_logs?.map((log: any) => ({
          timestamp: new Date(log.review),
          grade: log.rating as FSRSProcessingGrade,
          source: "existing",
        })) || []

      // Merge reviews using existing utility
      const mergedReviews = mergeReviews(existingReviews, card.reviews)

      // Simulate FSRS reviews
      const initialCard =
        existingCard?.fsrs_card || createEmptyCard(new Date("2000-01-01"))

      const { finalCard, logs } = simulateFSRSReviews(
        initialCard,
        mergedReviews,
        context.fsrsInstance,
      )

      return {
        practice_item_key: subject.slug,
        type: subject.type,
        fsrs_card: finalCard,
        mode,
        fsrs_logs: logs,
        lesson_id: null,
        source: `${context.source}-${card.source}`,
      }
    } catch (error) {
      console.error(`Error building FSRS card for ${card.searchTerm}:`, error)
      return null
    }
  }

  /**
   * Process a batch of cards with pre-fetched data.
   * This is the pure logic extracted from the original processCardBatch function.
   */
  static processCards(
    cards: NormalizedCard[],
    waniKaniResults: Map<string, any[]>,
    existingCardsData: Map<string, any[]>,
    context: BatchProcessingContext,
  ): ProcessedCard[] {
    const processedCards: ProcessedCard[] = []

    for (const card of cards) {
      const subjects = waniKaniResults.get(card.searchTerm) || []

      for (const subject of subjects) {
        const processedCard = this.buildFSRSCard(
          card,
          subject,
          existingCardsData.get(subject.slug) || [],
          context,
        )

        // Skip never-forget cards
        if (processedCard && processedCard.fsrs_card.stability !== Infinity) {
          processedCards.push(processedCard)
        }
      }
    }

    return processedCards
  }

  /**
   * Static validation method for input data.
   * Pure function that can be tested independently.
   */
  static validateInput<T>(
    input: any,
    adapter: ImportAdapter<T>,
  ): ValidationResult {
    try {
      // Validate required fields
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

      // Validate adapter input format
      if (!adapter.validateInput(input.cards)) {
        return {
          valid: false,
          cards: [],
          errors: ["Invalid data format for adapter"],
        }
      }

      // Transform cards using adapter
      const normalizedCards = adapter.transformCards(input.cards)

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
   * Pure function that uses existing deduplication utilities.
   */
  static deduplicateProcessedCards(
    processedCards: ProcessedCard[],
  ): DeduplicationStats {
    return deduplicateCards(processedCards)
  }

  /**
   * Main import orchestration method with dependency injection.
   * Handles side effects by delegating to injected dependencies.
   */
  async importCards<T>(
    input: { cards: T; source: string },
    adapter: ImportAdapter<T>,
    dependencies: ImportDependencies,
  ): Promise<ImportResult> {
    const startTime = Date.now()

    try {
      // Step 1: Validate input (pure function)
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

      const allProcessedCards = await ImportSessionManager.processBatches(
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

      // Step 4: Deduplicate (pure function)
      const { deduplicatedCards, duplicatesRemoved } =
        ImportSessionManager.deduplicateProcessedCards(flattenedCards)

      // Step 5: Save to database (injected dependency)
      await dependencies.batchUpsertFSRSCards(deduplicatedCards)

      // Step 6: Return success result
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
      console.error(`[Import] ${input.source} import failed:`, error)
      return {
        success: false,
        message: `Import failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      }
    }
  }

  /**
   * Process a single batch of cards.
   * Coordinates the pure logic with injected dependencies.
   */
  private async processCardBatch(
    cards: NormalizedCard[],
    context: BatchProcessingContext,
    dependencies: ImportDependencies,
  ): Promise<ProcessedCard[]> {
    // Step 1: Get search terms (pure function)
    const searchTerms = ImportSessionManager.extractSearchTerms(cards)

    // Step 2: Fetch WaniKani mappings (injected dependency)
    const waniKaniResults =
      await dependencies.waniKaniService.batchFindSubjects(searchTerms)

    // Step 3: Extract subject slugs for database query (pure function)
    const subjectSlugs =
      ImportSessionManager.extractSubjectSlugs(waniKaniResults)

    // Step 4: Fetch existing cards from database (injected dependency)
    const existingCardsArray = await dependencies.getFSRSCardsByKeys(
      context.userId,
      subjectSlugs,
    )

    // Step 5: Group existing cards for efficient lookup (pure function)
    const existingCardsData =
      ImportSessionManager.groupExistingCardsBySlug(existingCardsArray)

    // Step 6: Process cards using pure logic
    return ImportSessionManager.processCards(
      cards,
      waniKaniResults,
      existingCardsData,
      context,
    )
  }
}

