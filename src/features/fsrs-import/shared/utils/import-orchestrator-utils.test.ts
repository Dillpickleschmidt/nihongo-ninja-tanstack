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
    it("returns 'meanings' for kanji and radical types", () => {
      expect(determineMode("kanji", "猫")).toBe("meanings")
      expect(determineMode("radical", "⼈")).toBe("meanings")
    })

    it("returns correct mode based on vocabulary script type", () => {
      // Kanji vocabulary -> meanings
      expect(determineMode("vocabulary", "猫")).toBe("meanings")
      expect(determineMode("vocabulary", "食べる")).toBe("meanings")
      // Kana-only vocabulary -> spellings
      expect(determineMode("vocabulary", "ひらがな")).toBe("spellings")
      expect(determineMode("vocabulary", "カタカナ")).toBe("spellings")
      // Empty defaults to meanings
      expect(determineMode("vocabulary", "")).toBe("meanings")
    })

    it("defaults to 'meanings' for unknown types", () => {
      // @ts-expect-error - testing invalid type
      expect(determineMode("unknown", "test")).toBe("meanings")
    })
  })

  describe("normalizeSearchTerm", () => {
    it("normalizes search terms", () => {
      expect(normalizeSearchTerm("  hello  ")).toBe("hello")
      expect(normalizeSearchTerm("猫")).toBe("猫")
      expect(normalizeSearchTerm(null)).toBe("")
      expect(normalizeSearchTerm(undefined)).toBe("")
      // @ts-expect-error - testing invalid type
      expect(normalizeSearchTerm(123)).toBe("")
    })
  })

  describe("validateCardStructure", () => {
    it("validates correct card structure", () => {
      expect(validateCardStructure(mockCard)).toBe(true)
    })

    it("rejects invalid cards", () => {
      // Invalid object structure
      expect(validateCardStructure(null)).toBe(false)
      expect(validateCardStructure("string")).toBe(false)
      expect(validateCardStructure([])).toBe(false)

      // Missing required fields
      expect(validateCardStructure({ ...mockCard, practice_item_key: "" })).toBe(false)
      expect(validateCardStructure({ ...mockCard, type: "invalid" })).toBe(false)
      expect(validateCardStructure({ ...mockCard, mode: "invalid" })).toBe(false)
      expect(validateCardStructure({ ...mockCard, fsrs_card: null })).toBe(false)
      expect(validateCardStructure({ ...mockCard, fsrs_logs: null })).toBe(false)
    })
  })
})
