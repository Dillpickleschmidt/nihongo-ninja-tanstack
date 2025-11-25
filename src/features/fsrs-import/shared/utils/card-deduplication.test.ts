import { describe, it, expect } from "vitest"
import { createEmptyCard } from "ts-fsrs"
import {
  selectBestCard,
  groupCardsByKey,
  deduplicateCards,
} from "./card-deduplication"
import { type ProcessedCard } from "../types/fsrs-types"

describe("Card Deduplication Utilities", () => {
  // Test data
  const mockCard: ProcessedCard = {
    practice_item_key: "猫",
    type: "vocabulary",
    fsrs_card: createEmptyCard(new Date("2024-01-01")),
    mode: "meanings",
    fsrs_logs: [],
    source: "test-source",
  }

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
