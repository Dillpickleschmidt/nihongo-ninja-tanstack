import { describe, it, expect } from "vitest"
import { createEmptyCard } from "ts-fsrs"
import {
  determineMode,
  normalizeSearchTerm,
  validateCardStructure,
} from "./import-orchestrator-utils"
import { type ProcessedCard } from "../types/fsrs-types"

describe("Import Orchestrator Utilities", () => {
  // Test data
  const mockCard: ProcessedCard = {
    practice_item_key: "猫",
    type: "vocabulary",
    fsrs_card: createEmptyCard(new Date("2024-01-01")),
    mode: "meanings",
    fsrs_logs: [],
    source: "test-source",
  }

  describe("determineMode", () => {
    it("should return 'meanings' for kanji type", () => {
      expect(determineMode("kanji", "猫")).toBe("meanings")
      expect(determineMode("kanji", "")).toBe("meanings")
    })

    it("should return 'meanings' for radical type", () => {
      expect(determineMode("radical", "⼈")).toBe("meanings")
    })

    it("should return 'meanings' for vocabulary with kanji", () => {
      expect(determineMode("vocabulary", "猫")).toBe("meanings")
      expect(determineMode("vocabulary", "日本語")).toBe("meanings")
      expect(determineMode("vocabulary", "食べる")).toBe("meanings")
    })

    it("should return 'spellings' for vocabulary with only kana", () => {
      expect(determineMode("vocabulary", "ひらがな")).toBe("spellings")
      expect(determineMode("vocabulary", "カタカナ")).toBe("spellings")
      expect(determineMode("vocabulary", "あいうえお")).toBe("spellings")
    })

    it("should return 'meanings' for empty vocabulary spelling", () => {
      expect(determineMode("vocabulary", "")).toBe("meanings")
      expect(determineMode("vocabulary", "   ")).toBe("spellings") // whitespace only
    })

    it("should return 'meanings' as default fallback", () => {
      // @ts-expect-error - testing invalid type
      expect(determineMode("unknown", "test")).toBe("meanings")
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
      expect(validateCardStructure({ ...mockCard, mode: "meanings" })).toBe(
        true,
      )
      expect(validateCardStructure({ ...mockCard, mode: "spellings" })).toBe(
        true,
      )
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
  })
})
