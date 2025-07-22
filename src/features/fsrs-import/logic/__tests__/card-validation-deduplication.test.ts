// src/features/fsrs-import/logic/card-validation-deduplication.test.ts

import { describe, it, expect } from "vitest"
import { createEmptyCard } from "ts-fsrs"
import {
  determineMode,
  normalizeSearchTerm,
  validateCardStructure,
  selectBestCard,
  groupCardsByKey,
  deduplicateCards,
  type ProcessedCard,
} from "../card-validation-deduplication"

describe("Card Validation and Deduplication Utilities", () => {
  // Test data
  const mockCard: ProcessedCard = {
    practice_item_key: "猫",
    type: "vocabulary",
    fsrs_card: createEmptyCard(new Date("2024-01-01")),
    mode: "readings",
    fsrs_logs: [],
    lesson_id: null,
    source: "test-source",
  }

  describe("determineMode", () => {
    it("should return 'readings' for kanji type", () => {
      expect(determineMode("kanji", "猫")).toBe("readings")
      expect(determineMode("kanji", "")).toBe("readings")
    })

    it("should return 'readings' for radical type", () => {
      expect(determineMode("radical", "⼈")).toBe("readings")
    })

    it("should return 'readings' for vocabulary with kanji", () => {
      expect(determineMode("vocabulary", "猫")).toBe("readings")
      expect(determineMode("vocabulary", "日本語")).toBe("readings")
      expect(determineMode("vocabulary", "食べる")).toBe("readings")
    })

    it("should return 'kana' for vocabulary with only kana", () => {
      expect(determineMode("vocabulary", "ひらがな")).toBe("kana")
      expect(determineMode("vocabulary", "カタカナ")).toBe("kana")
      expect(determineMode("vocabulary", "あいうえお")).toBe("kana")
    })

    it("should return 'readings' for empty vocabulary spelling", () => {
      expect(determineMode("vocabulary", "")).toBe("readings")
      expect(determineMode("vocabulary", "   ")).toBe("kana") // whitespace only
    })

    it("should return 'readings' as default fallback", () => {
      // @ts-expect-error - testing invalid type
      expect(determineMode("unknown", "test")).toBe("readings")
    })
  })

  describe("normalizeSearchTerm", () => {
    it("should trim whitespace", () => {
      expect(normalizeSearchTerm("  hello  ")).toBe("hello")
      expect(normalizeSearchTerm("\\ttest\\n")).toBe("\\ttest\\n") // literal backslash chars
    })

    it("should handle null and undefined", () => {
      expect(normalizeSearchTerm(null)).toBe("")
      expect(normalizeSearchTerm(undefined)).toBe("")
    })

    it("should handle non-string types", () => {
      // @ts-expect-error - testing invalid type
      expect(normalizeSearchTerm(123)).toBe("")
      // @ts-expect-error - testing invalid type
      expect(normalizeSearchTerm({})).toBe("")
      // @ts-expect-error - testing invalid type
      expect(normalizeSearchTerm([])).toBe("")
    })

    it("should preserve valid strings", () => {
      expect(normalizeSearchTerm("猫")).toBe("猫")
      expect(normalizeSearchTerm("test")).toBe("test")
    })
  })

  describe("validateCardStructure", () => {
    it("should validate correct card structure", () => {
      expect(validateCardStructure(mockCard)).toBe(true)
    })

    it("should reject non-object cards", () => {
      expect(validateCardStructure(null)).toBe(false)
      expect(validateCardStructure("string")).toBe(false)
      expect(validateCardStructure(123)).toBe(false)
      expect(validateCardStructure([])).toBe(false)
    })

    it("should reject cards with invalid practice_item_key", () => {
      expect(
        validateCardStructure({ ...mockCard, practice_item_key: "" }),
      ).toBe(false)
      expect(
        validateCardStructure({ ...mockCard, practice_item_key: "   " }),
      ).toBe(false)
      expect(
        validateCardStructure({ ...mockCard, practice_item_key: 123 }),
      ).toBe(false)
    })

    it("should reject cards with invalid source", () => {
      expect(validateCardStructure({ ...mockCard, source: 123 })).toBe(false)
      expect(validateCardStructure({ ...mockCard, source: null })).toBe(false)
    })

    it("should reject cards with invalid type", () => {
      expect(validateCardStructure({ ...mockCard, type: "invalid" })).toBe(
        false,
      )
      expect(validateCardStructure({ ...mockCard, type: null })).toBe(false)
    })

    it("should accept valid types", () => {
      expect(validateCardStructure({ ...mockCard, type: "vocabulary" })).toBe(
        true,
      )
      expect(validateCardStructure({ ...mockCard, type: "kanji" })).toBe(true)
      expect(validateCardStructure({ ...mockCard, type: "radical" })).toBe(true)
    })

    it("should reject cards with invalid mode", () => {
      expect(validateCardStructure({ ...mockCard, mode: "invalid" })).toBe(
        false,
      )
      expect(validateCardStructure({ ...mockCard, mode: null })).toBe(false)
    })

    it("should accept valid modes", () => {
      expect(validateCardStructure({ ...mockCard, mode: "readings" })).toBe(
        true,
      )
      expect(validateCardStructure({ ...mockCard, mode: "kana" })).toBe(true)
    })

    it("should reject cards with invalid fsrs_card", () => {
      expect(validateCardStructure({ ...mockCard, fsrs_card: null })).toBe(
        false,
      )
      expect(validateCardStructure({ ...mockCard, fsrs_card: "string" })).toBe(
        false,
      )
    })

    it("should reject cards with invalid fsrs_logs", () => {
      expect(
        validateCardStructure({ ...mockCard, fsrs_logs: "not array" }),
      ).toBe(false)
      expect(validateCardStructure({ ...mockCard, fsrs_logs: null })).toBe(
        false,
      )
    })

    it("should accept null or string lesson_id", () => {
      expect(validateCardStructure({ ...mockCard, lesson_id: null })).toBe(true)
      expect(validateCardStructure({ ...mockCard, lesson_id: "lesson1" })).toBe(
        true,
      )
      expect(validateCardStructure({ ...mockCard, lesson_id: 123 })).toBe(false)
    })
  })

  describe("selectBestCard", () => {
    it("should throw error for empty array", () => {
      expect(() => selectBestCard([])).toThrow(
        "Cannot select best card from empty array",
      )
    })

    it("should return single card when array has one item", () => {
      const result = selectBestCard([mockCard])
      expect(result).toBe(mockCard)
    })

    it("should select card with higher stability", () => {
      const card1 = {
        ...mockCard,
        fsrs_card: { ...mockCard.fsrs_card, stability: 1.5 },
        source: "source1",
      }
      const card2 = {
        ...mockCard,
        fsrs_card: { ...mockCard.fsrs_card, stability: 2.5 },
        source: "source2",
      }

      const result = selectBestCard([card1, card2])
      expect(result.source).toBe("source2")
    })

    it("should keep first card when stability is equal", () => {
      const card1 = {
        ...mockCard,
        fsrs_card: { ...mockCard.fsrs_card, stability: 1.5 },
        source: "source1",
      }
      const card2 = {
        ...mockCard,
        fsrs_card: { ...mockCard.fsrs_card, stability: 1.5 },
        source: "source2",
      }

      const result = selectBestCard([card1, card2])
      expect(result.source).toBe("source1")
    })

    it("should handle cards with undefined/null stability", () => {
      const card1 = {
        ...mockCard,
        fsrs_card: { ...mockCard.fsrs_card, stability: undefined },
        source: "source1",
      }
      const card2 = {
        ...mockCard,
        fsrs_card: { ...mockCard.fsrs_card, stability: 2.5 },
        source: "source2",
      }

      const result = selectBestCard([card1, card2])
      expect(result.source).toBe("source2")
    })
  })

  describe("groupCardsByKey", () => {
    it("should group cards by unique key", () => {
      const cards = [
        { ...mockCard, practice_item_key: "猫", type: "vocabulary" as const },
        { ...mockCard, practice_item_key: "猫", type: "kanji" as const },
        { ...mockCard, practice_item_key: "犬", type: "vocabulary" as const },
      ]

      const grouped = groupCardsByKey(cards)

      expect(grouped.size).toBe(3)
      expect(grouped.get("猫-vocabulary")).toHaveLength(1)
      expect(grouped.get("猫-kanji")).toHaveLength(1)
      expect(grouped.get("犬-vocabulary")).toHaveLength(1)
    })

    it("should handle multiple cards with same key", () => {
      const cards = [
        {
          ...mockCard,
          practice_item_key: "猫",
          type: "vocabulary" as const,
          source: "source1",
        },
        {
          ...mockCard,
          practice_item_key: "猫",
          type: "vocabulary" as const,
          source: "source2",
        },
      ]

      const grouped = groupCardsByKey(cards)

      expect(grouped.size).toBe(1)
      expect(grouped.get("猫-vocabulary")).toHaveLength(2)
    })

    it("should handle empty array", () => {
      const grouped = groupCardsByKey([])
      expect(grouped.size).toBe(0)
    })
  })

  describe("deduplicateCards", () => {
    it("should keep all cards when no duplicates", () => {
      const cards = [
        { ...mockCard, practice_item_key: "猫", type: "vocabulary" as const },
        { ...mockCard, practice_item_key: "犬", type: "vocabulary" as const },
      ]

      const result = deduplicateCards(cards)

      expect(result.deduplicatedCards).toHaveLength(2)
      expect(result.duplicatesRemoved).toBe(0)
    })

    it("should remove duplicates and keep best card", () => {
      const cards = [
        {
          ...mockCard,
          practice_item_key: "猫",
          type: "vocabulary" as const,
          fsrs_card: { ...mockCard.fsrs_card, stability: 1.0 },
          source: "source1",
        },
        {
          ...mockCard,
          practice_item_key: "猫",
          type: "vocabulary" as const,
          fsrs_card: { ...mockCard.fsrs_card, stability: 2.0 },
          source: "source2",
        },
      ]

      const result = deduplicateCards(cards)

      expect(result.deduplicatedCards).toHaveLength(1)
      expect(result.duplicatesRemoved).toBe(1)
      expect(result.deduplicatedCards[0].source).toBe("source2") // Higher stability
    })

    it("should handle mixed duplicates and unique cards", () => {
      const cards = [
        {
          ...mockCard,
          practice_item_key: "猫",
          type: "vocabulary" as const,
          source: "dup1",
        },
        {
          ...mockCard,
          practice_item_key: "猫",
          type: "vocabulary" as const,
          source: "dup2",
        },
        {
          ...mockCard,
          practice_item_key: "犬",
          type: "vocabulary" as const,
          source: "unique",
        },
      ]

      const result = deduplicateCards(cards)

      expect(result.deduplicatedCards).toHaveLength(2)
      expect(result.duplicatesRemoved).toBe(1)
    })

    it("should handle empty array", () => {
      const result = deduplicateCards([])

      expect(result.deduplicatedCards).toHaveLength(0)
      expect(result.duplicatesRemoved).toBe(0)
    })

    it("should handle multiple duplicate groups", () => {
      const cards = [
        {
          ...mockCard,
          practice_item_key: "猫",
          type: "vocabulary" as const,
          source: "cat1",
        },
        {
          ...mockCard,
          practice_item_key: "猫",
          type: "vocabulary" as const,
          source: "cat2",
        },
        {
          ...mockCard,
          practice_item_key: "犬",
          type: "vocabulary" as const,
          source: "dog1",
        },
        {
          ...mockCard,
          practice_item_key: "犬",
          type: "vocabulary" as const,
          source: "dog2",
        },
        {
          ...mockCard,
          practice_item_key: "犬",
          type: "vocabulary" as const,
          source: "dog3",
        },
      ]

      const result = deduplicateCards(cards)

      expect(result.deduplicatedCards).toHaveLength(2)
      expect(result.duplicatesRemoved).toBe(3) // 1 from cat group + 2 from dog group
    })
  })
})

