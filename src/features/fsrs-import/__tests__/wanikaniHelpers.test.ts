// src/features/fsrs-import/__tests__/wanikaniHelpers.test.ts

import { describe, it, expect, vi, beforeEach } from "vitest"
import {
  mapWaniKaniObjectToDBType,
  deduplicateSubjects,
  prepareBatchQuery,
  groupSubjectsBySearchTerm,
  type WaniKaniSubjectMapping,
  type WaniKaniApiSubjectRow,
} from "../wanikaniHelpers"

const mockConsoleWarn = vi.spyOn(console, "warn").mockImplementation(() => {})

beforeEach(() => {
  mockConsoleWarn.mockClear()
})

describe("wanikaniHelpers", () => {
  describe("mapWaniKaniObjectToDBType", () => {
    it("maps 'vocabulary' to 'vocabulary'", () => {
      const result = mapWaniKaniObjectToDBType("vocabulary")
      expect(result).toBe("vocabulary")
    })

    it("maps 'kana_vocabulary' to 'vocabulary'", () => {
      const result = mapWaniKaniObjectToDBType("kana_vocabulary")
      expect(result).toBe("vocabulary")
    })

    it("maps 'kanji' to 'kanji'", () => {
      const result = mapWaniKaniObjectToDBType("kanji")
      expect(result).toBe("kanji")
    })

    it("maps 'radical' to 'radical'", () => {
      const result = mapWaniKaniObjectToDBType("radical")
      expect(result).toBe("radical")
    })

    it("handles unknown type with warning", () => {
      const unknownType = "unknown_type" as any
      const result = mapWaniKaniObjectToDBType(unknownType)

      expect(mockConsoleWarn).toHaveBeenCalledWith(
        "[WaniKaniMapper] Unknown WaniKani object type: unknown_type. Defaulting to 'vocabulary'.",
      )
      expect(result).toBe("vocabulary")
    })

    it("defaults unknown type to 'vocabulary'", () => {
      const unknownType = "invalid" as any
      const result = mapWaniKaniObjectToDBType(unknownType)

      expect(result).toBe("vocabulary")
    })
  })

  describe("deduplicateSubjects", () => {
    it("removes subjects with same slug and type", () => {
      const subjects: WaniKaniSubjectMapping[] = [
        { id: 1, slug: "test-slug", type: "vocabulary" },
        { id: 2, slug: "test-slug", type: "vocabulary" },
        { id: 3, slug: "different-slug", type: "vocabulary" },
      ]

      const result = deduplicateSubjects(subjects)

      expect(result).toHaveLength(2)
      expect(result[0]).toEqual({
        id: 1,
        slug: "test-slug",
        type: "vocabulary",
      })
      expect(result[1]).toEqual({
        id: 3,
        slug: "different-slug",
        type: "vocabulary",
      })
    })

    it("preserves subjects with different slug", () => {
      const subjects: WaniKaniSubjectMapping[] = [
        { id: 1, slug: "slug-1", type: "vocabulary" },
        { id: 2, slug: "slug-2", type: "vocabulary" },
      ]

      const result = deduplicateSubjects(subjects)

      expect(result).toHaveLength(2)
      expect(result).toEqual(subjects)
    })

    it("preserves subjects with different type", () => {
      const subjects: WaniKaniSubjectMapping[] = [
        { id: 1, slug: "test-slug", type: "vocabulary" },
        { id: 2, slug: "test-slug", type: "kanji" },
      ]

      const result = deduplicateSubjects(subjects)

      expect(result).toHaveLength(2)
      expect(result).toEqual(subjects)
    })

    it("handles empty subject array", () => {
      const subjects: WaniKaniSubjectMapping[] = []

      const result = deduplicateSubjects(subjects)

      expect(result).toEqual([])
    })

    it("maintains original order for unique subjects", () => {
      const subjects: WaniKaniSubjectMapping[] = [
        { id: 3, slug: "c", type: "vocabulary" },
        { id: 1, slug: "a", type: "vocabulary" },
        { id: 2, slug: "b", type: "vocabulary" },
      ]

      const result = deduplicateSubjects(subjects)

      expect(result[0].slug).toBe("c")
      expect(result[1].slug).toBe("a")
      expect(result[2].slug).toBe("b")
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

    it("handles large term arrays", () => {
      const terms = Array.from({ length: 100 }, (_, i) => `term${i}`)
      const result = prepareBatchQuery(terms)

      expect(result.placeholders.split(",")).toHaveLength(100)
      expect(result.parameters).toHaveLength(400) // 100 terms * 4 tables
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
    it("groups results by character/spelling", () => {
      const searchTerms = ["term1", "term2"]
      const dbResults: (WaniKaniApiSubjectRow & { characters: string })[] = [
        { id: 1, object: "vocabulary", slug: "slug1", characters: "term1" },
        { id: 2, object: "kanji", slug: "slug2", characters: "term1" },
        { id: 3, object: "vocabulary", slug: "slug3", characters: "term2" },
      ]

      const result = groupSubjectsBySearchTerm(searchTerms, dbResults)

      expect(result.size).toBe(2)
      expect(result.get("term1")).toHaveLength(2)
      expect(result.get("term2")).toHaveLength(1)
    })

    it("handles results with no matches", () => {
      const searchTerms = ["term1", "term2"]
      const dbResults: (WaniKaniApiSubjectRow & { characters: string })[] = []

      const result = groupSubjectsBySearchTerm(searchTerms, dbResults)

      expect(result.size).toBe(2)
      expect(result.get("term1")).toEqual([])
      expect(result.get("term2")).toEqual([])
    })

    it("deduplicates within each group", () => {
      const searchTerms = ["term1"]
      const dbResults: (WaniKaniApiSubjectRow & { characters: string })[] = [
        { id: 1, object: "vocabulary", slug: "same-slug", characters: "term1" },
        { id: 2, object: "vocabulary", slug: "same-slug", characters: "term1" },
        { id: 3, object: "kanji", slug: "same-slug", characters: "term1" },
      ]

      const result = groupSubjectsBySearchTerm(searchTerms, dbResults)

      const term1Results = result.get("term1")!
      expect(term1Results).toHaveLength(2) // Should deduplicate the vocabulary duplicates
      expect(term1Results.some((s) => s.type === "vocabulary")).toBe(true)
      expect(term1Results.some((s) => s.type === "kanji")).toBe(true)
    })

    it("preserves all unique subjects per term", () => {
      const searchTerms = ["term1"]
      const dbResults: (WaniKaniApiSubjectRow & { characters: string })[] = [
        { id: 1, object: "vocabulary", slug: "slug1", characters: "term1" },
        { id: 2, object: "kanji", slug: "slug2", characters: "term1" },
        { id: 3, object: "radical", slug: "slug3", characters: "term1" },
      ]

      const result = groupSubjectsBySearchTerm(searchTerms, dbResults)

      const term1Results = result.get("term1")!
      expect(term1Results).toHaveLength(3)
      expect(term1Results.map((s) => s.type)).toEqual(
        expect.arrayContaining(["vocabulary", "kanji", "radical"]),
      )
    })

    it("handles empty search terms", () => {
      const searchTerms: string[] = []
      const dbResults: (WaniKaniApiSubjectRow & { characters: string })[] = [
        { id: 1, object: "vocabulary", slug: "slug1", characters: "term1" },
      ]

      const result = groupSubjectsBySearchTerm(searchTerms, dbResults)

      expect(result.size).toBe(0)
    })

    it("correctly maps WaniKani object types", () => {
      const searchTerms = ["term1"]
      const dbResults: (WaniKaniApiSubjectRow & { characters: string })[] = [
        { id: 1, object: "vocabulary", slug: "slug1", characters: "term1" },
        {
          id: 2,
          object: "kana_vocabulary",
          slug: "slug2",
          characters: "term1",
        },
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
          "vocabulary",
          "kanji",
          "radical",
        ]),
      )
    })
  })
})
