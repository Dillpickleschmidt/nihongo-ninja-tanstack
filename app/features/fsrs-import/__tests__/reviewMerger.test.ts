// src/features/fsrs-import/__tests__/reviewMerger.test.ts

import { describe, it, expect } from "vitest"
import { Rating } from "ts-fsrs"
import { mergeReviews, type NormalizedReview } from "../reviewMerger"

describe("reviewMerger", () => {
  describe("mergeReviews - Basic Merging", () => {
    it("merges two non-overlapping review arrays chronologically", () => {
      const existingReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-01T10:00:00Z"),
          grade: Rating.Good,
          source: "existing",
        },
      ]

      const importedReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-03T10:00:00Z"),
          grade: Rating.Hard,
          source: "imported",
        },
      ]

      const result = mergeReviews(existingReviews, importedReviews)

      expect(result).toHaveLength(2)
      expect(result[0].timestamp).toEqual(new Date("2024-01-01T10:00:00Z"))
      expect(result[0].source).toBe("existing")
      expect(result[1].timestamp).toEqual(new Date("2024-01-03T10:00:00Z"))
      expect(result[1].source).toBe("imported")
    })

    it("preserves existing reviews when no conflicts", () => {
      const existingReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-01T10:00:00Z"),
          grade: Rating.Good,
          source: "existing",
        },
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Easy,
          source: "existing",
        },
      ]

      const importedReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-05T10:00:00Z"),
          grade: Rating.Hard,
          source: "imported",
        },
      ]

      const result = mergeReviews(existingReviews, importedReviews)

      const existingInResult = result.filter((r) => r.source === "existing")
      expect(existingInResult).toHaveLength(2)
      expect(existingInResult[0].grade).toBe(Rating.Good)
      expect(existingInResult[1].grade).toBe(Rating.Easy)
    })

    it("preserves imported reviews when no conflicts", () => {
      const existingReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-01T10:00:00Z"),
          grade: Rating.Good,
          source: "existing",
        },
      ]

      const importedReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-03T10:00:00Z"),
          grade: Rating.Hard,
          source: "imported",
        },
        {
          timestamp: new Date("2024-01-05T10:00:00Z"),
          grade: Rating.Again,
          source: "imported",
        },
      ]

      const result = mergeReviews(existingReviews, importedReviews)

      const importedInResult = result.filter((r) => r.source === "imported")
      expect(importedInResult).toHaveLength(2)
      expect(importedInResult[0].grade).toBe(Rating.Hard)
      expect(importedInResult[1].grade).toBe(Rating.Again)
    })

    it("handles empty existing reviews array", () => {
      const existingReviews: NormalizedReview[] = []

      const importedReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-03T10:00:00Z"),
          grade: Rating.Hard,
          source: "imported",
        },
      ]

      const result = mergeReviews(existingReviews, importedReviews)

      expect(result).toHaveLength(1)
      expect(result[0].source).toBe("imported")
      expect(result[0].grade).toBe(Rating.Hard)
    })

    it("handles empty imported reviews array", () => {
      const existingReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-01T10:00:00Z"),
          grade: Rating.Good,
          source: "existing",
        },
      ]

      const importedReviews: NormalizedReview[] = []

      const result = mergeReviews(existingReviews, importedReviews)

      expect(result).toHaveLength(1)
      expect(result[0].source).toBe("existing")
      expect(result[0].grade).toBe(Rating.Good)
    })

    it("handles both arrays empty", () => {
      const existingReviews: NormalizedReview[] = []
      const importedReviews: NormalizedReview[] = []

      const result = mergeReviews(existingReviews, importedReviews)

      expect(result).toHaveLength(0)
    })
  })

  describe("mergeReviews - Duplicate Timestamp Handling", () => {
    it("imported review overwrites existing at same timestamp", () => {
      const existingReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Good,
          source: "existing",
        },
      ]

      const importedReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Hard,
          source: "imported",
        },
      ]

      const result = mergeReviews(existingReviews, importedReviews)

      expect(result).toHaveLength(1)
      expect(result[0].source).toBe("imported")
      expect(result[0].grade).toBe(Rating.Hard)
    })

    it("multiple duplicates all resolved to imported", () => {
      const existingReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-01T10:00:00Z"),
          grade: Rating.Good,
          source: "existing",
        },
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Easy,
          source: "existing",
        },
      ]

      const importedReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-01T10:00:00Z"),
          grade: Rating.Hard,
          source: "imported",
        },
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Again,
          source: "imported",
        },
      ]

      const result = mergeReviews(existingReviews, importedReviews)

      expect(result).toHaveLength(2)
      expect(result.every((r) => r.source === "imported")).toBe(true)
      expect(result[0].grade).toBe(Rating.Hard)
      expect(result[1].grade).toBe(Rating.Again)
    })

    it("maintains chronological order after duplicate resolution", () => {
      const existingReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-01T10:00:00Z"),
          grade: Rating.Good,
          source: "existing",
        },
        {
          timestamp: new Date("2024-01-03T10:00:00Z"),
          grade: Rating.Easy,
          source: "existing",
        },
      ]

      const importedReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Hard,
          source: "imported",
        },
        {
          timestamp: new Date("2024-01-03T10:00:00Z"),
          grade: Rating.Again,
          source: "imported",
        },
      ]

      const result = mergeReviews(existingReviews, importedReviews)

      expect(result).toHaveLength(3)
      expect(result[0].timestamp).toEqual(new Date("2024-01-01T10:00:00Z"))
      expect(result[1].timestamp).toEqual(new Date("2024-01-02T10:00:00Z"))
      expect(result[2].timestamp).toEqual(new Date("2024-01-03T10:00:00Z"))
      expect(result[2].source).toBe("imported") // Duplicate resolved to imported
    })
  })

  describe("mergeReviews - Chronological Ordering", () => {
    it("sorts unsorted existing reviews", () => {
      const existingReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-03T10:00:00Z"),
          grade: Rating.Good,
          source: "existing",
        },
        {
          timestamp: new Date("2024-01-01T10:00:00Z"),
          grade: Rating.Hard,
          source: "existing",
        },
      ]

      const importedReviews: NormalizedReview[] = []

      const result = mergeReviews(existingReviews, importedReviews)

      expect(result[0].timestamp).toEqual(new Date("2024-01-01T10:00:00Z"))
      expect(result[1].timestamp).toEqual(new Date("2024-01-03T10:00:00Z"))
    })

    it("sorts unsorted imported reviews", () => {
      const existingReviews: NormalizedReview[] = []

      const importedReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-05T10:00:00Z"),
          grade: Rating.Good,
          source: "imported",
        },
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Hard,
          source: "imported",
        },
      ]

      const result = mergeReviews(existingReviews, importedReviews)

      expect(result[0].timestamp).toEqual(new Date("2024-01-02T10:00:00Z"))
      expect(result[1].timestamp).toEqual(new Date("2024-01-05T10:00:00Z"))
    })

    it("maintains overall chronological order in result", () => {
      const existingReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-04T10:00:00Z"),
          grade: Rating.Good,
          source: "existing",
        },
        {
          timestamp: new Date("2024-01-01T10:00:00Z"),
          grade: Rating.Hard,
          source: "existing",
        },
      ]

      const importedReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-05T10:00:00Z"),
          grade: Rating.Easy,
          source: "imported",
        },
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Again,
          source: "imported",
        },
      ]

      const result = mergeReviews(existingReviews, importedReviews)

      const timestamps = result.map((r) => r.timestamp.getTime())
      const sortedTimestamps = [...timestamps].sort()
      expect(timestamps).toEqual(sortedTimestamps)
    })
  })

  describe("mergeReviews - Edge Cases", () => {
    it("ignores reviews with future dates", () => {
      const futureDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year from now

      const existingReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-01T10:00:00Z"),
          grade: Rating.Good,
          source: "existing",
        },
      ]

      const importedReviews: NormalizedReview[] = [
        {
          timestamp: futureDate,
          grade: Rating.Hard,
          source: "imported",
        },
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Easy,
          source: "imported",
        },
      ]

      const result = mergeReviews(existingReviews, importedReviews)

      // Should skip the future date and only include valid reviews
      expect(result).toHaveLength(2)
      expect(result[0].timestamp).toEqual(new Date("2024-01-01T10:00:00Z"))
      expect(result[1].timestamp).toEqual(new Date("2024-01-02T10:00:00Z"))
    })

    it("handles malformed review objects gracefully", () => {
      const existingReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-01T10:00:00Z"),
          grade: Rating.Good,
          source: "existing",
        },
      ]

      // Simulate malformed reviews that might slip through TypeScript
      const importedReviews: any[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Hard,
          source: "imported",
        },
        {
          // Missing timestamp
          grade: Rating.Easy,
          source: "imported",
        },
        {
          timestamp: new Date("2024-01-03T10:00:00Z"),
          // Missing grade
          source: "imported",
        },
      ]

      const result = mergeReviews(
        existingReviews,
        importedReviews as NormalizedReview[],
      )

      // Should only include valid reviews
      expect(result.length).toBeGreaterThan(0)
      expect(
        result.every(
          (r) => r.timestamp instanceof Date && r.grade !== undefined,
        ),
      ).toBe(true)
    })
  })
})
