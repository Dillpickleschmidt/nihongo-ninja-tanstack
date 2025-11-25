// src/features/fsrs-import/__tests__/wanikaniHelpers.test.ts

import { describe, it, expect, vi, beforeEach } from "vitest"
import {
  mapWaniKaniObjectToDBType,
  deduplicateSubjects,
  prepareBatchQuery,
  groupSubjectsBySearchTerm,
  type WaniKaniSubjectMapping,
  type WaniKaniApiSubjectRow,
} from "./wanikani-database-helpers"

const mockConsoleWarn = vi.spyOn(console, "warn").mockImplementation(() => { })

beforeEach(() => {
  mockConsoleWarn.mockClear()
})

describe("wanikaniHelpers", () => {
  describe("mapWaniKaniObjectToDBType", () => {
    it("maps WaniKani object types to database types", () => {
      expect(mapWaniKaniObjectToDBType("vocabulary")).toBe("vocabulary")
      expect(mapWaniKaniObjectToDBType("kana_vocabulary")).toBe("vocabulary")
      expect(mapWaniKaniObjectToDBType("kanji")).toBe("kanji")
      expect(mapWaniKaniObjectToDBType("radical")).toBe("radical")
    })

    it("defaults unknown type to vocabulary with warning", () => {
      const result = mapWaniKaniObjectToDBType("unknown_type" as any)
      expect(mockConsoleWarn).toHaveBeenCalled()
      expect(result).toBe("vocabulary")
    })
  })

  describe("deduplicateSubjects", () => {
    it("removes duplicate subjects based on slug and type", () => {
      const subjects: WaniKaniSubjectMapping[] = [
        { id: 1, slug: "test-slug", type: "vocabulary" },
        { id: 2, slug: "test-slug", type: "vocabulary" },
        { id: 3, slug: "different-slug", type: "vocabulary" },
        { id: 4, slug: "test-slug", type: "kanji" }, // Different type, should keep
      ]

      const result = deduplicateSubjects(subjects)

      expect(result).toHaveLength(3) // Keeps first of duplicates + different slug + different type
      expect(result.some((s) => s.slug === "test-slug" && s.type === "vocabulary")).toBe(true)
      expect(result.some((s) => s.slug === "different-slug")).toBe(true)
      expect(result.some((s) => s.type === "kanji")).toBe(true)
    })

    it("handles empty arrays", () => {
      expect(deduplicateSubjects([])).toEqual([])
    })
  })

  describe("prepareBatchQuery", () => {
    it("generates correct placeholder count", () => {
      const terms = ["term1", "term2", "term3"]
      const result = prepareBatchQuery(terms)

      expect(result.placeholders).toBe("?,?,?")
    })

    it("creates proper SQL parameter array", () => {
      const terms = ["term1", "term2"]
      const result = prepareBatchQuery(terms)

      // Should repeat terms for each table (vocabulary, kana_vocabulary, kanji, radicals)
      expect(result.parameters).toEqual([
        "term1",
        "term2", // for vocabulary
        "term1",
        "term2", // for kana_vocabulary
        "term1",
        "term2", // for kanji
        "term1",
        "term2", // for radicals
      ])
    })

    it("handles empty term array", () => {
      const terms: string[] = []
      const result = prepareBatchQuery(terms)

      expect(result.placeholders).toBe("")
      expect(result.parameters).toEqual([])
    })

    it("handles single term", () => {
      const terms = ["single-term"]
      const result = prepareBatchQuery(terms)

      expect(result.placeholders).toBe("?")
      expect(result.parameters).toEqual([
        "single-term",
        "single-term",
        "single-term",
        "single-term",
      ])
    })
  })

  describe("groupSubjectsBySearchTerm", () => {
    it("groups results by search term and deduplicates", () => {
      // Test basic grouping with multiple terms
      const searchTerms = ["term1", "term2"]
      const dbResults: (WaniKaniApiSubjectRow & { characters: string })[] = [
        { id: 1, object: "vocabulary", slug: "slug1", characters: "term1" },
        { id: 2, object: "kanji", slug: "slug2", characters: "term1" },
        { id: 3, object: "vocabulary", slug: "slug3", characters: "term2" },
        // Duplicates that should be removed
        { id: 4, object: "vocabulary", slug: "slug1", characters: "term1" },
      ]

      const result = groupSubjectsBySearchTerm(searchTerms, dbResults)

      expect(result.size).toBe(2)
      // term1 should have 2 unique items (vocab and kanji, deduplicated)
      expect(result.get("term1")).toHaveLength(2)
      expect(result.get("term1")!.some((s) => s.type === "vocabulary")).toBe(true)
      expect(result.get("term1")!.some((s) => s.type === "kanji")).toBe(true)
      // term2 should have 1 item
      expect(result.get("term2")).toHaveLength(1)
    })

    it("preserves all subject types and maps WaniKani object types", () => {
      const searchTerms = ["term1"]
      const dbResults: (WaniKaniApiSubjectRow & { characters: string })[] = [
        { id: 1, object: "vocabulary", slug: "slug1", characters: "term1" },
        { id: 2, object: "kana_vocabulary", slug: "slug2", characters: "term1" },
        { id: 3, object: "kanji", slug: "slug3", characters: "term1" },
        { id: 4, object: "radical", slug: "slug4", characters: "term1" },
      ]

      const result = groupSubjectsBySearchTerm(searchTerms, dbResults)

      const term1Results = result.get("term1")!
      expect(term1Results).toHaveLength(4)

      const types = term1Results.map((s) => s.type)
      expect(types).toEqual(
        expect.arrayContaining([
          "vocabulary",
          "vocabulary", // kana_vocabulary maps to vocabulary
          "kanji",
          "radical",
        ]),
      )
    })

    it("handles edge cases (empty results and empty search terms)", () => {
      // Empty results with search terms
      const result1 = groupSubjectsBySearchTerm(["term1", "term2"], [])
      expect(result1.size).toBe(2)
      expect(result1.get("term1")).toEqual([])
      expect(result1.get("term2")).toEqual([])

      // Empty search terms with results
      const result2 = groupSubjectsBySearchTerm([], [
        { id: 1, object: "vocabulary", slug: "slug1", characters: "term1" },
      ])
      expect(result2.size).toBe(0)
    })
  })
})
