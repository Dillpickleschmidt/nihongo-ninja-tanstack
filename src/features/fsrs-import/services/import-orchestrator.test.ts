// src/features/fsrs-import/logic/import-session-manager.test.ts

import { describe, it, expect, vi } from "vitest"
import { FSRS } from "ts-fsrs"
import {
  ImportSessionManager,
  type ImportDependencies,
} from "./import-orchestrator"
import type { ProcessedCard } from "../shared/types/fsrs-types"
import type { BatchProcessingContext, NormalizedCard } from "../shared/types/import-data-models"
import type { ImportAdapter } from "../adapters/import-adapter-interface"

describe("ImportSessionManager", () => {
  // Mock data
  const mockNormalizedCards: NormalizedCard[] = [
    {
      searchTerm: "猫",
      reviews: [
        {
          timestamp: new Date("2024-01-01"),
          grade: 3,
          source: "test-source",
        },
      ],
      source: "test-kanji-1",
    },
  ]

  const mockValidateInput = vi.fn().mockReturnValue(true)
  const mockAdapter: ImportAdapter<any> = {
    validateInput: mockValidateInput as any,
    transformCards: vi.fn().mockReturnValue(mockNormalizedCards),
    getSupportedCardTypes: vi.fn().mockReturnValue(["vocabulary"]),
    normalizeGrade: vi.fn().mockReturnValue(3),
  }

  const mockProcessedCards: ProcessedCard[] = [
    {
      practice_item_key: "猫",
      type: "vocabulary",
      fsrs_card: {} as any,
      mode: "meanings",
      fsrs_logs: [],
      source: "test-source-test-kanji-1",
    },
  ]

  // Additional test data for card processing
  const mockWaniKaniResults = new Map([
    ["猫", [{ slug: "猫", type: "vocabulary", meanings: ["cat"] }]],
    ["犬", [{ slug: "犬", type: "vocabulary", meanings: ["dog"] }]],
  ])

  const mockExistingCardsData = new Map<string, any[]>([
    ["猫", []],
    ["犬", []],
  ])

  const mockContext: BatchProcessingContext = {
    userId: "test-user",
    source: "test-source",
    fsrsInstance: new FSRS({ request_retention: 0.8 }),
  }

  describe("Static Methods - Pure Logic", () => {
    describe("card processing utilities", () => {
      it("should extract search terms from normalized cards (including empty arrays)", () => {
        const searchTerms =
          ImportSessionManager.extractSearchTerms(mockNormalizedCards)
        expect(searchTerms).toEqual(["猫"])

        // Empty array case
        const emptySearchTerms = ImportSessionManager.extractSearchTerms([])
        expect(emptySearchTerms).toEqual([])
      })

      it("should extract unique slugs from WaniKani results (including multiple subjects per term)", () => {
        // Basic case
        const slugs =
          ImportSessionManager.extractSubjectSlugs(mockWaniKaniResults)
        expect(slugs).toEqual(expect.arrayContaining(["猫", "犬"]))
        expect(slugs).toHaveLength(2)

        // Multiple subjects per search term
        const resultsWithMultiple = new Map([
          [
            "本",
            [
              { slug: "本-vocab", type: "vocabulary", meanings: ["book"] },
              { slug: "本-kanji", type: "kanji", meanings: ["book", "origin"] },
            ],
          ],
        ])
        const multiSlugs =
          ImportSessionManager.extractSubjectSlugs(resultsWithMultiple)
        expect(multiSlugs).toEqual(expect.arrayContaining(["本-vocab", "本-kanji"]))
        expect(multiSlugs).toHaveLength(2)
      })

      it("should group existing cards by practice_item_key", () => {
        const existingCards = [
          { practice_item_key: "猫", type: "vocabulary", fsrs_card: {} },
          { practice_item_key: "猫", type: "kanji", fsrs_card: {} },
          { practice_item_key: "犬", type: "vocabulary", fsrs_card: {} },
        ]

        const grouped =
          ImportSessionManager.groupExistingCardsBySlug(existingCards)

        expect(grouped.get("猫")).toHaveLength(2)
        expect(grouped.get("犬")).toHaveLength(1)
        expect(grouped.has("存在しない")).toBe(false)
      })

      it("should build FSRS card from normalized card data", () => {
        const mockSubject = {
          slug: "猫",
          type: "vocabulary",
          meanings: ["cat"],
        }

        const result = ImportSessionManager.buildFSRSCard(
          mockNormalizedCards[0],
          mockSubject,
          [],
          mockContext,
        )

        expect(result).toBeTruthy()
        expect(result?.practice_item_key).toBe("猫")
        expect(result?.type).toBe("vocabulary")
        expect(result?.source).toBe("test-source-test-kanji-1")
        expect(result?.fsrs_card).toBeDefined()
        expect(result?.fsrs_logs).toBeDefined()
      })

      it("should process multiple cards and return processed cards array", () => {
        const cards = [
          mockNormalizedCards[0],
          {
            searchTerm: "犬",
            reviews: [
              {
                timestamp: new Date("2024-01-02"),
                grade: 4,
                source: "test-source",
              },
            ],
            source: "test-card-2",
          },
        ]

        const results = ImportSessionManager.processCards(
          cards,
          mockWaniKaniResults,
          mockExistingCardsData,
          mockContext,
        )

        expect(results).toHaveLength(2)
        expect(results[0].practice_item_key).toBe("猫")
        expect(results[1].practice_item_key).toBe("犬")
      })

      it("should handle cards with no WaniKani subjects", () => {
        const cardWithNoSubject: NormalizedCard = {
          searchTerm: "存在しない",
          reviews: [],
          source: "test",
        }

        const results = ImportSessionManager.processCards(
          [cardWithNoSubject],
          mockWaniKaniResults, // Doesn't contain "存在しない"
          mockExistingCardsData,
          mockContext,
        )

        expect(results).toHaveLength(0)
      })
    })

    describe("validateInput", () => {
      it("should validate correct input format", () => {
        const input = {
          cards: mockNormalizedCards,
          source: "test-source",
        }

        const result = ImportSessionManager.validateInput(input, mockAdapter)

        expect(result.valid).toBe(true)
        expect(result.cards).toEqual(mockNormalizedCards)
        expect(result.errors).toHaveLength(0)
      })

      it("should reject invalid input (missing/wrong types for cards and source)", () => {
        // Invalid cards array
        const result1 = ImportSessionManager.validateInput(
          { cards: "not-an-array", source: "test-source" },
          mockAdapter,
        )
        expect(result1.valid).toBe(false)
        expect(result1.errors).toContain("Invalid data: cards array required")

        // Missing source
        const result2 = ImportSessionManager.validateInput(
          { cards: mockNormalizedCards, source: null },
          mockAdapter,
        )
        expect(result2.valid).toBe(false)
        expect(result2.errors).toContain("Invalid data: source string required")
      })

      it("should reject when adapter validation fails or no cards produced", () => {
        // Adapter validation failure
        const invalidAdapter = {
          ...mockAdapter,
          validateInput: vi.fn().mockReturnValue(false) as any,
        }
        const result1 = ImportSessionManager.validateInput(
          { cards: mockNormalizedCards, source: "test-source" },
          invalidAdapter,
        )
        expect(result1.valid).toBe(false)
        expect(result1.errors).toContain("Invalid data format for adapter")

        // Empty adapter results
        const emptyAdapter = {
          ...mockAdapter,
          transformCards: vi.fn().mockReturnValue([]),
        }
        const result2 = ImportSessionManager.validateInput(
          { cards: mockNormalizedCards, source: "test-source" },
          emptyAdapter,
        )
        expect(result2.valid).toBe(false)
        expect(result2.errors).toContain("No valid cards found in input data")
      })

      it("should handle transform errors gracefully", () => {
        const errorAdapter = {
          ...mockAdapter,
          transformCards: vi.fn().mockImplementation(() => {
            throw new Error("Transform failed")
          }),
        }

        const result = ImportSessionManager.validateInput(
          { cards: mockNormalizedCards, source: "test-source" },
          errorAdapter,
        )

        expect(result.valid).toBe(false)
        expect(result.errors[0]).toContain("Transform failed")
      })
    })

    describe("deduplicateProcessedCards", () => {
      it("should deduplicate processed cards", () => {
        const cardsWithDuplicates = [
          mockProcessedCards[0],
          { ...mockProcessedCards[0] }, // Duplicate
          {
            ...mockProcessedCards[0],
            practice_item_key: "犬", // Different card
          },
        ]

        const result =
          ImportSessionManager.deduplicateProcessedCards(cardsWithDuplicates)

        expect(result.deduplicatedCards).toHaveLength(2)
        expect(result.duplicatesRemoved).toBe(1)

        // Empty array case
        const emptyResult = ImportSessionManager.deduplicateProcessedCards([])
        expect(emptyResult.deduplicatedCards).toHaveLength(0)
        expect(emptyResult.duplicatesRemoved).toBe(0)
      })
    })
  })

  describe("Instance Methods - Integration Logic", () => {
    const createMockDependencies = (): ImportDependencies => ({
      getFSRSCards: vi.fn().mockResolvedValue([]),
      batchUpsertFSRSCards: vi.fn().mockResolvedValue(undefined),
      waniKaniService: {
        batchFindSubjects: vi
          .fn()
          .mockResolvedValue(
            new Map([
              ["猫", [{ slug: "猫", type: "vocabulary", meanings: ["cat"] }]],
            ]),
          ),
      },
      getCurrentUser: vi.fn().mockResolvedValue({ user: { id: "test-user" } }),
    })

    describe("importCards", () => {
      it("should successfully import valid cards", async () => {
        const mockDependencies = createMockDependencies()
        const sessionManager = new ImportSessionManager()

        const result = await sessionManager.importCards(
          { cards: mockNormalizedCards, source: "test-source" },
          mockAdapter,
          mockDependencies,
        )

        expect(result.success).toBe(true)
        expect(result.message).toContain("Successfully imported")
        expect(result.stats).toBeDefined()
        expect(mockDependencies.getCurrentUser).toHaveBeenCalledTimes(1)
        expect(mockDependencies.batchUpsertFSRSCards).toHaveBeenCalledTimes(1)
      })

      it("should fail on validation, authentication, or data lookup errors", async () => {
        // Validation error
        const deps1 = createMockDependencies()
        const result1 = await new ImportSessionManager().importCards(
          { cards: "invalid", source: "test-source" },
          mockAdapter,
          deps1,
        )
        expect(result1.success).toBe(false)
        expect(result1.message).toContain("Validation failed")

        // Authentication error
        const deps2 = createMockDependencies()
        deps2.getCurrentUser = vi
          .fn()
          .mockResolvedValue({ user: null })
        const result2 = await new ImportSessionManager().importCards(
          { cards: mockNormalizedCards, source: "test-source" },
          mockAdapter,
          deps2,
        )
        expect(result2.success).toBe(false)
        expect(result2.message).toBe("Authentication required")

        // No WaniKani subjects found
        const deps3 = createMockDependencies()
        deps3.waniKaniService.batchFindSubjects = vi
          .fn()
          .mockResolvedValue(new Map())
        const result3 = await new ImportSessionManager().importCards(
          { cards: mockNormalizedCards, source: "test-source" },
          mockAdapter,
          deps3,
        )
        expect(result3.success).toBe(false)
        expect(result3.message).toBe(
          "No valid WaniKani subjects found for your cards",
        )
      })

      it("should handle processing errors gracefully", async () => {
        const mockDependencies = createMockDependencies()
        mockDependencies.batchUpsertFSRSCards = vi
          .fn()
          .mockRejectedValue(new Error("Database error"))

        const result = await new ImportSessionManager().importCards(
          { cards: mockNormalizedCards, source: "test-source" },
          mockAdapter,
          mockDependencies,
        )

        expect(result.success).toBe(false)
        expect(result.message).toContain("Database error")
      })
    })
  })
})
