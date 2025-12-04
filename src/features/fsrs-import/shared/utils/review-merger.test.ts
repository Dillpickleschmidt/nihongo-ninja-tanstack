// src/features/fsrs-import/shared/utils/review-merger.test.ts

import { describe, it, expect } from "vitest"
import { Rating } from "ts-fsrs"
import { mergeReviews } from "./review-merger"
import { type NormalizedReview } from "../types/import-data-models"

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

    it("preserves both existing and imported reviews when no conflicts", () => {
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

      const existingInResult = result.filter((r) => r.source === "existing")
      expect(existingInResult).toHaveLength(2)
      const importedInResult = result.filter((r) => r.source === "imported")
      expect(importedInResult).toHaveLength(2)
    })

    it("handles empty review arrays", () => {
      // Both empty
      expect(mergeReviews([], [])).toHaveLength(0)

      // Empty existing
      const importedOnly = mergeReviews([], [
        {
          timestamp: new Date("2024-01-03T10:00:00Z"),
          grade: Rating.Hard,
          source: "imported",
        },
      ])
      expect(importedOnly).toHaveLength(1)
      expect(importedOnly[0].source).toBe("imported")

      // Empty imported
      const existingOnly = mergeReviews(
        [
          {
            timestamp: new Date("2024-01-01T10:00:00Z"),
            grade: Rating.Good,
            source: "existing",
          },
        ],
        []
      )
      expect(existingOnly).toHaveLength(1)
      expect(existingOnly[0].source).toBe("existing")
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
    it("maintains chronological order with unsorted input", () => {
      const unsortedExisting: NormalizedReview[] = [
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

      const unsortedImported: NormalizedReview[] = [
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

      const result = mergeReviews(unsortedExisting, unsortedImported)

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

  })
})
