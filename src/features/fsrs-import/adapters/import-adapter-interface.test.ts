import { describe, it, expect } from "vitest"
import { normalizeReview, type RawReview } from "./import-adapter-interface"
import { Rating } from "ts-fsrs"

describe("Import Adapter Interface", () => {
  describe("normalizeReview", () => {
    // Valid inputs
    it("normalizes valid review with Date timestamp", () => {
      const rawReview: RawReview = {
        timestamp: new Date("2024-01-01T12:00:00Z"),
        grade: Rating.Good,
        source: "jpdb"
      }

      const result = normalizeReview(rawReview)

      expect(result.timestamp).toBeInstanceOf(Date)
      expect(result.grade).toBe(Rating.Good)
      expect(result.source).toBe("jpdb")
    })


    // Schema validation errors
    it("throws error for invalid timestamp", () => {
      const rawReview: RawReview = {
        timestamp: "invalid-date",
        grade: Rating.Good,
        source: "test"
      }

      expect(() => normalizeReview(rawReview)).toThrow()
    })

    it("throws error for null timestamp", () => {
      const rawReview: RawReview = {
        timestamp: null,
        grade: Rating.Good,
        source: "test"
      }

      expect(() => normalizeReview(rawReview)).toThrow()
    })

    it("throws error for missing timestamp", () => {
      const rawReview = {
        grade: Rating.Good,
        source: "test"
      } as any

      expect(() => normalizeReview(rawReview)).toThrow()
    })

    it("throws error for missing source", () => {
      const rawReview = {
        timestamp: 1704110400,
        grade: Rating.Good
      } as any

      expect(() => normalizeReview(rawReview)).toThrow()
    })

  })
})
