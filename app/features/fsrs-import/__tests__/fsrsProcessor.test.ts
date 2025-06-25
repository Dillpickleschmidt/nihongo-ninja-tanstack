// src/features/fsrs-import/__tests__/fsrsProcessor.test.ts

import { describe, it, expect, vi, beforeEach } from "vitest"
import { State, createEmptyCard, Rating } from "ts-fsrs"
import {
  mapGradeToFSRS,
  simulateFSRSReviews,
  CustomFSRSRating,
  type NormalizedReview,
} from "../fsrsProcessor"

// Mock console.warn to test warning behavior
const mockConsoleWarn = vi.spyOn(console, "warn").mockImplementation(() => {})

beforeEach(() => {
  mockConsoleWarn.mockClear()
})

describe("fsrsProcessor", () => {
  describe("mapGradeToFSRS", () => {
    it("maps Rating.Good to Rating.Good", () => {
      expect(mapGradeToFSRS(Rating.Good)).toBe(Rating.Good)
    })

    it("maps Rating.Hard to Rating.Hard", () => {
      expect(mapGradeToFSRS(Rating.Hard)).toBe(Rating.Hard)
    })

    it("maps Rating.Again to Rating.Again", () => {
      expect(mapGradeToFSRS(Rating.Again)).toBe(Rating.Again)
    })

    it("maps Rating.Easy to Rating.Easy", () => {
      expect(mapGradeToFSRS(Rating.Easy)).toBe(Rating.Easy)
    })

    it("maps CustomFSRSRating.Ignore to CustomFSRSRating.Ignore", () => {
      expect(mapGradeToFSRS(CustomFSRSRating.Ignore)).toBe(
        CustomFSRSRating.Ignore,
      )
    })

    it("maps CustomFSRSRating.Forget to CustomFSRSRating.Forget", () => {
      expect(mapGradeToFSRS(CustomFSRSRating.Forget)).toBe(
        CustomFSRSRating.Forget,
      )
    })

    it("maps CustomFSRSRating.NeverForget to CustomFSRSRating.NeverForget", () => {
      expect(mapGradeToFSRS(CustomFSRSRating.NeverForget)).toBe(
        CustomFSRSRating.NeverForget,
      )
    })

    it("handles unknown grade and logs warning", () => {
      const unknownGrade = "invalid-grade" as any
      const result = mapGradeToFSRS(unknownGrade)

      expect(mockConsoleWarn).toHaveBeenCalledWith(
        "[FSRSProcessor] Unhandled grade 'invalid-grade'. Defaulting to 'Again'.",
      )
      expect(result).toBe(Rating.Again)
    })

    it("defaults unknown grade to Rating.Again", () => {
      const unknownGrade = 999 as any
      const result = mapGradeToFSRS(unknownGrade)

      expect(result).toBe(Rating.Again)
    })
  })

  describe("simulateFSRSReviews - Basic Simulation", () => {
    const initialCard = createEmptyCard(new Date("2024-01-01T00:00:00Z"))

    it("with empty review array returns initial card unchanged", () => {
      const { finalCard } = simulateFSRSReviews(initialCard, [])

      expect(finalCard).toEqual(initialCard)
    })

    it("with empty review array returns empty logs", () => {
      const { logs } = simulateFSRSReviews(initialCard, [])

      expect(logs).toEqual([])
    })

    it("with single Rating.Good review updates card correctly", () => {
      const reviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Good,
          source: "test",
        },
      ]

      const { finalCard } = simulateFSRSReviews(initialCard, reviews)

      // Card should be in Learning state after first review
      expect(finalCard.state).toBe(State.Learning)
      expect(finalCard.last_review).toEqual(new Date("2024-01-02T10:00:00Z"))
      expect(finalCard.stability).toBeGreaterThan(0)
    })

    it("with single review generates one log entry", () => {
      const reviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Good,
          source: "test",
        },
      ]

      const { logs } = simulateFSRSReviews(initialCard, reviews)

      expect(logs).toHaveLength(1)
      expect(logs[0].review).toEqual(new Date("2024-01-02T10:00:00Z"))
      expect(logs[0].rating).toBe(Rating.Good)
    })

    it("uses first review timestamp as card creation date", () => {
      const firstReviewDate = new Date("2024-01-15T09:00:00Z")
      const reviews: NormalizedReview[] = [
        {
          timestamp: firstReviewDate,
          grade: Rating.Good,
          source: "test",
        },
      ]

      const { finalCard } = simulateFSRSReviews(initialCard, reviews)

      // The card should have been created at the first review time
      // (we can't directly check creation time, but we can verify the card behaves as expected)
      expect(finalCard.last_review).toEqual(firstReviewDate)
    })

    it("with multiple reviews processes in order", () => {
      const reviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Good,
          source: "test",
        },
        {
          timestamp: new Date("2024-01-05T14:00:00Z"),
          grade: Rating.Hard,
          source: "test",
        },
        {
          timestamp: new Date("2024-01-10T16:00:00Z"),
          grade: Rating.Easy,
          source: "test",
        },
      ]

      const { finalCard } = simulateFSRSReviews(initialCard, reviews)

      expect(finalCard.last_review).toEqual(new Date("2024-01-10T16:00:00Z"))
      expect(finalCard.state).toBe(State.Review)
      expect(finalCard.reps).toBe(3)
    })

    it("with multiple reviews generates multiple logs", () => {
      const reviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Good,
          source: "test",
        },
        {
          timestamp: new Date("2024-01-05T14:00:00Z"),
          grade: Rating.Again,
          source: "test",
        },
      ]

      const { logs } = simulateFSRSReviews(initialCard, reviews)

      expect(logs).toHaveLength(2)
      expect(logs[0].rating).toBe(Rating.Good)
      expect(logs[1].rating).toBe(Rating.Again)
    })
  })

  describe("simulateFSRSReviews - Custom Grade Handling", () => {
    const initialCard = createEmptyCard(new Date("2024-01-01T00:00:00Z"))

    it("skips CustomFSRSRating.Ignore reviews", () => {
      const reviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: CustomFSRSRating.Ignore,
          source: "test",
        },
        {
          timestamp: new Date("2024-01-03T10:00:00Z"),
          grade: Rating.Good,
          source: "test",
        },
      ]

      const { logs, finalCard } = simulateFSRSReviews(initialCard, reviews)

      // Should only process the Good review, ignore the Ignore review
      expect(logs).toHaveLength(1)
      expect(logs[0].rating).toBe(Rating.Good)
      expect(finalCard.last_review).toEqual(new Date("2024-01-03T10:00:00Z"))
    })

    it("with only Ignore reviews returns initial card structure", () => {
      const reviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: CustomFSRSRating.Ignore,
          source: "test",
        },
        {
          timestamp: new Date("2024-01-03T10:00:00Z"),
          grade: CustomFSRSRating.Ignore,
          source: "test",
        },
      ]

      const { finalCard, logs } = simulateFSRSReviews(initialCard, reviews)

      expect(logs).toHaveLength(0)
      // Check that it's essentially an empty card, but allow for timestamp difference
      expect(finalCard.reps).toBe(0)
      expect(finalCard.lapses).toBe(0)
      expect(finalCard.state).toBe(initialCard.state)
      expect(finalCard.last_review).toBe(undefined)
    })

    it("handles CustomFSRSRating.Forget with forget method", () => {
      // First establish a card with some progress
      const progressReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: Rating.Good,
          source: "test",
        },
      ]

      const { finalCard: progressedCard } = simulateFSRSReviews(
        initialCard,
        progressReviews,
      )
      expect(progressedCard.state).not.toBe(State.New)

      // Now forget it
      const forgetReviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-10T10:00:00Z"),
          grade: CustomFSRSRating.Forget,
          source: "test",
        },
      ]

      const { finalCard, logs } = simulateFSRSReviews(
        progressedCard,
        forgetReviews,
      )

      // Card should be reset to New state
      expect(finalCard.state).toBe(State.New)
      expect(logs).toHaveLength(1)
    })

    it("forget review generates forget log", () => {
      const reviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: CustomFSRSRating.Forget,
          source: "test",
        },
      ]

      const { logs } = simulateFSRSReviews(initialCard, reviews)

      expect(logs).toHaveLength(1)
      expect(logs[0].review).toEqual(new Date("2024-01-02T10:00:00Z"))
    })

    it("handles CustomFSRSRating.NeverForget sets infinite stability", () => {
      const reviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: CustomFSRSRating.NeverForget,
          source: "test",
        },
      ]

      const { finalCard } = simulateFSRSReviews(initialCard, reviews)

      expect(finalCard.stability).toBe(Infinity)
      expect(finalCard.state).toBe(State.Review)
    })

    it("NeverForget sets due date far in future", () => {
      const reviewDate = new Date("2024-01-02T10:00:00Z")
      const reviews: NormalizedReview[] = [
        {
          timestamp: reviewDate,
          grade: CustomFSRSRating.NeverForget,
          source: "test",
        },
      ]

      const { finalCard } = simulateFSRSReviews(initialCard, reviews)

      const expectedDueDate = new Date(
        reviewDate.getTime() + 10 * 365 * 24 * 60 * 60 * 1000, // 10 years in future
      )
      expect(finalCard.due).toEqual(expectedDueDate)
      expect(finalCard.last_review).toEqual(reviewDate)
    })

    it("NeverForget returns early (no further processing)", () => {
      const reviews: NormalizedReview[] = [
        {
          timestamp: new Date("2024-01-02T10:00:00Z"),
          grade: CustomFSRSRating.NeverForget,
          source: "test",
        },
        {
          timestamp: new Date("2024-01-03T10:00:00Z"),
          grade: Rating.Good,
          source: "test",
        },
      ]

      const { finalCard, logs } = simulateFSRSReviews(initialCard, reviews)

      // Should stop processing after NeverForget
      expect(logs).toHaveLength(0)
      expect(finalCard.stability).toBe(Infinity)
      expect(finalCard.last_review).toEqual(new Date("2024-01-02T10:00:00Z"))
    })
  })
})
