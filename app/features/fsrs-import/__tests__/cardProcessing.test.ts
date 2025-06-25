// src/features/fsrs-import/__tests__/cardProcessing.test.ts

import { describe, it, expect, vi, beforeEach } from "vitest"
import { createEmptyCard } from "ts-fsrs"
import {
  determineMode,
  normalizeSearchTerm,
  validateCardStructure,
  selectBestCard,
  groupCardsByKey,
  deduplicateCards,
  type ProcessedCard,
} from "../cardProcessing"

const mockConsoleLog = vi.spyOn(console, "log").mockImplementation(() => {})

beforeEach(() => {
  mockConsoleLog.mockClear()
})

describe("cardProcessing", () => {
  // =============================================================================
  // CARD TYPE HELPERS TESTS
  // =============================================================================

  describe("determineMode", () => {
    it("returns 'readings' for kanji practice item type", () => {
      const result = determineMode("kanji", "漢字")
      expect(result).toBe("readings")
    })

    it("returns 'readings' for radical practice item type", () => {
      const result = determineMode("radical", "一")
      expect(result).toBe("readings")
    })

    it("returns 'readings' for vocabulary with kanji characters", () => {
      const result = determineMode("vocabulary", "食べ物")
      expect(result).toBe("readings")
    })

    it("returns 'kana' for pure kana vocabulary", () => {
      const result = determineMode("vocabulary", "ひらがな")
      expect(result).toBe("kana")
    })

    it("returns 'readings' for mixed kanji and kana", () => {
      const result = determineMode("vocabulary", "お寿司")
      expect(result).toBe("readings")
    })

    it("handles empty spelling string", () => {
      const result = determineMode("vocabulary", "")
      expect(result).toBe("readings")
    })

    it("handles special characters in spelling", () => {
      const result = determineMode("vocabulary", "ABC123!@#")
      expect(result).toBe("kana")
    })
  })

  describe("normalizeSearchTerm", () => {
    it("trims whitespace from term", () => {
      const result = normalizeSearchTerm("  hello world  ")
      expect(result).toBe("hello world")
    })

    it("handles empty string", () => {
      const result = normalizeSearchTerm("")
      expect(result).toBe("")
    })

    it("handles null/undefined input", () => {
      expect(normalizeSearchTerm(null)).toBe("")
      expect(normalizeSearchTerm(undefined)).toBe("")
    })

    it("preserves CJK characters correctly", () => {
      const result = normalizeSearchTerm("  漢字ひらがなカタカナ  ")
      expect(result).toBe("漢字ひらがなカタカナ")
    })

    it("handles mixed scripts", () => {
      const result = normalizeSearchTerm("  Hello世界123  ")
      expect(result).toBe("Hello世界123")
    })
  })

  describe("validateCardStructure", () => {
    it("accepts card with required fields", () => {
      const card: ProcessedCard = {
        practice_item_key: "test-key",
        type: "vocabulary",
        fsrs_card: createEmptyCard(),
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "test",
      }

      const result = validateCardStructure(card)
      expect(result).toBe(true)
    })

    it("rejects card with missing practice_item_key", () => {
      const card = {
        type: "vocabulary",
        fsrs_card: createEmptyCard(),
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "test",
      } as any

      const result = validateCardStructure(card)
      expect(result).toBe(false)
    })

    it("rejects card with missing type", () => {
      const card = {
        practice_item_key: "test-key",
        fsrs_card: createEmptyCard(),
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "test",
      } as any

      const result = validateCardStructure(card)
      expect(result).toBe(false)
    })

    it("handles optional fields correctly", () => {
      const cardWithLesson: ProcessedCard = {
        practice_item_key: "test-key",
        type: "vocabulary",
        fsrs_card: createEmptyCard(),
        mode: "kana",
        fsrs_logs: [],
        lesson_id: "lesson-123",
        source: "test",
      }

      const cardWithoutLesson: ProcessedCard = {
        practice_item_key: "test-key",
        type: "vocabulary",
        fsrs_card: createEmptyCard(),
        mode: "kana",
        fsrs_logs: [],
        lesson_id: null,
        source: "test",
      }

      expect(validateCardStructure(cardWithLesson)).toBe(true)
      expect(validateCardStructure(cardWithoutLesson)).toBe(true)
    })

    it("rejects card with empty practice_item_key", () => {
      const card: ProcessedCard = {
        practice_item_key: "",
        type: "vocabulary",
        fsrs_card: createEmptyCard(),
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "test",
      }

      const result = validateCardStructure(card)
      expect(result).toBe(false)
    })

    it("rejects card with invalid type", () => {
      const card = {
        practice_item_key: "test-key",
        type: "invalid-type",
        fsrs_card: createEmptyCard(),
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "test",
      } as any

      const result = validateCardStructure(card)
      expect(result).toBe(false)
    })

    it("rejects card with missing fsrs_card", () => {
      const card = {
        practice_item_key: "test-key",
        type: "vocabulary",
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "test",
      } as any

      const result = validateCardStructure(card)
      expect(result).toBe(false)
    })

    it("rejects card with missing source", () => {
      const card = {
        practice_item_key: "test-key",
        type: "vocabulary",
        fsrs_card: createEmptyCard(),
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
      } as any

      const result = validateCardStructure(card)
      expect(result).toBe(false)
    })
  })

  // =============================================================================
  // DUPLICATE HANDLING TESTS
  // =============================================================================

  describe("selectBestCard", () => {
    it("chooses card with higher stability", () => {
      const card1: ProcessedCard = {
        practice_item_key: "test-key",
        type: "vocabulary",
        fsrs_card: { ...createEmptyCard(), stability: 5.0 },
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "source1",
      }

      const card2: ProcessedCard = {
        practice_item_key: "test-key",
        type: "vocabulary",
        fsrs_card: { ...createEmptyCard(), stability: 10.0 },
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "source2",
      }

      const result = selectBestCard([card1, card2])

      expect(result.source).toBe("source2")
      expect(result.fsrs_card.stability).toBe(10.0)
    })

    it("chooses first card when stability equal", () => {
      const card1: ProcessedCard = {
        practice_item_key: "test-key",
        type: "vocabulary",
        fsrs_card: { ...createEmptyCard(), stability: 5.0 },
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "source1",
      }

      const card2: ProcessedCard = {
        practice_item_key: "test-key",
        type: "vocabulary",
        fsrs_card: { ...createEmptyCard(), stability: 5.0 },
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "source2",
      }

      const result = selectBestCard([card1, card2])

      expect(result.source).toBe("source1")
    })

    it("preserves source metadata in selection", () => {
      const card1: ProcessedCard = {
        practice_item_key: "test-key",
        type: "vocabulary",
        fsrs_card: { ...createEmptyCard(), stability: 1.0 },
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "jpdb-vocab-spelling",
      }

      const card2: ProcessedCard = {
        practice_item_key: "test-key",
        type: "vocabulary",
        fsrs_card: { ...createEmptyCard(), stability: 5.0 },
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "jpdb-kanji-character",
      }

      const result = selectBestCard([card1, card2])

      expect(result.source).toBe("jpdb-kanji-character")
      expect(result.practice_item_key).toBe("test-key")
      expect(result.type).toBe("vocabulary")
    })
  })

  describe("groupCardsByKey", () => {
    it("groups cards by practice_item_key + type", () => {
      const cards: ProcessedCard[] = [
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: createEmptyCard(),
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source1",
        },
        {
          practice_item_key: "key1",
          type: "kanji",
          fsrs_card: createEmptyCard(),
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source2",
        },
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: createEmptyCard(),
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source3",
        },
      ]

      const result = groupCardsByKey(cards)

      expect(result.size).toBe(2)
      expect(result.get("key1-vocabulary")).toHaveLength(2)
      expect(result.get("key1-kanji")).toHaveLength(1)
    })

    it("handles empty card array", () => {
      const cards: ProcessedCard[] = []

      const result = groupCardsByKey(cards)

      expect(result.size).toBe(0)
    })

    it("handles single card", () => {
      const cards: ProcessedCard[] = [
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: createEmptyCard(),
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source1",
        },
      ]

      const result = groupCardsByKey(cards)

      expect(result.size).toBe(1)
      expect(result.get("key1-vocabulary")).toHaveLength(1)
    })

    it("preserves source information for each card", () => {
      const cards: ProcessedCard[] = [
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: createEmptyCard(),
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "jpdb-vocab",
        },
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: createEmptyCard(),
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "wanikani-vocab",
        },
      ]

      const result = groupCardsByKey(cards)

      const group = result.get("key1-vocabulary")!
      expect(group[0].source).toBe("jpdb-vocab")
      expect(group[1].source).toBe("wanikani-vocab")
    })

    it("generates consistent keys", () => {
      const card1: ProcessedCard = {
        practice_item_key: "test",
        type: "vocabulary",
        fsrs_card: createEmptyCard(),
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "source1",
      }

      const card2: ProcessedCard = {
        practice_item_key: "test",
        type: "vocabulary",
        fsrs_card: createEmptyCard(),
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "source2",
      }

      const result1 = groupCardsByKey([card1])
      const result2 = groupCardsByKey([card2])

      expect([...result1.keys()][0]).toBe([...result2.keys()][0])
    })
  })

  describe("deduplicateCards", () => {
    it("removes duplicates and keeps best", () => {
      const cards: ProcessedCard[] = [
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: { ...createEmptyCard(), stability: 2.0 },
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source1",
        },
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: { ...createEmptyCard(), stability: 5.0 },
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source2",
        },
        {
          practice_item_key: "key2",
          type: "kanji",
          fsrs_card: { ...createEmptyCard(), stability: 3.0 },
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source3",
        },
      ]

      const result = deduplicateCards(cards)

      expect(result.deduplicatedCards).toHaveLength(2)

      const key1Card = result.deduplicatedCards.find(
        (c) => c.practice_item_key === "key1",
      )
      expect(key1Card?.source).toBe("source2")
      expect(key1Card?.fsrs_card.stability).toBe(5.0)
    })

    it("logs duplicate resolution with source info", () => {
      const cards: ProcessedCard[] = [
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: { ...createEmptyCard(), stability: 2.0 },
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "jpdb-vocab",
        },
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: { ...createEmptyCard(), stability: 5.0 },
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "jpdb-kanji",
        },
      ]

      const result = deduplicateCards(cards)

      expect(mockConsoleLog).toHaveBeenCalledWith(
        expect.stringContaining("DUPLICATE key1-vocabulary"),
      )
      expect(mockConsoleLog).toHaveBeenCalledWith(
        expect.stringContaining("kept source 'jpdb-kanji'"),
      )
    })

    it("handles no duplicates (returns all cards)", () => {
      const cards: ProcessedCard[] = [
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: createEmptyCard(),
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source1",
        },
        {
          practice_item_key: "key2",
          type: "kanji",
          fsrs_card: createEmptyCard(),
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source2",
        },
      ]

      const result = deduplicateCards(cards)

      expect(result.deduplicatedCards).toHaveLength(2)
      expect(result.duplicatesRemoved).toBe(0)
      expect(mockConsoleLog).not.toHaveBeenCalled()
    })

    it("counts removed duplicates correctly", () => {
      const cards: ProcessedCard[] = [
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: { ...createEmptyCard(), stability: 1.0 },
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source1",
        },
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: { ...createEmptyCard(), stability: 2.0 },
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source2",
        },
        {
          practice_item_key: "key1",
          type: "vocabulary",
          fsrs_card: { ...createEmptyCard(), stability: 3.0 },
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "source3",
        },
      ]

      const result = deduplicateCards(cards)

      expect(result.deduplicatedCards).toHaveLength(1)
      expect(result.duplicatesRemoved).toBe(2)
    })

    it("maintains non-duplicate cards unchanged", () => {
      const originalCard: ProcessedCard = {
        practice_item_key: "unique-key",
        type: "vocabulary",
        fsrs_card: { ...createEmptyCard(), stability: 4.0 },
        mode: "readings",
        fsrs_logs: [],
        lesson_id: null,
        source: "original-source",
      }

      const cards: ProcessedCard[] = [
        originalCard,
        {
          practice_item_key: "duplicate-key",
          type: "vocabulary",
          fsrs_card: { ...createEmptyCard(), stability: 1.0 },
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "dup1",
        },
        {
          practice_item_key: "duplicate-key",
          type: "vocabulary",
          fsrs_card: { ...createEmptyCard(), stability: 2.0 },
          mode: "readings",
          fsrs_logs: [],
          lesson_id: null,
          source: "dup2",
        },
      ]

      const result = deduplicateCards(cards)

      const uniqueCard = result.deduplicatedCards.find(
        (c) => c.practice_item_key === "unique-key",
      )
      expect(uniqueCard).toEqual(originalCard)
    })
  })
})
