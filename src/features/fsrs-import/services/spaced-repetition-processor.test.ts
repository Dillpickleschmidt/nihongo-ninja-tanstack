import { describe, it, expect, vi } from "vitest"
import { FSRS, createEmptyCard, Rating, State } from "ts-fsrs"
import { mapGradeToFSRS, simulateFSRSReviews, CustomFSRSRating } from "./spaced-repetition-processor"
import { type NormalizedReview } from "../shared/types/import-data-models"

describe("Spaced Repetition Processor", () => {
  describe("mapGradeToFSRS", () => {
    // Valid FSRS numeric grades (1-4)
    it("returns valid numeric grades (1-4) as-is", () => {
      expect(mapGradeToFSRS(1)).toBe(1)
      expect(mapGradeToFSRS(2)).toBe(2)
      expect(mapGradeToFSRS(3)).toBe(3)
      expect(mapGradeToFSRS(4)).toBe(4)
    })

    // Custom ratings
    it("returns custom FSRS ratings as-is", () => {
      expect(mapGradeToFSRS(CustomFSRSRating.Ignore)).toBe(CustomFSRSRating.Ignore)
      expect(mapGradeToFSRS(CustomFSRSRating.Forget)).toBe(CustomFSRSRating.Forget)
      expect(mapGradeToFSRS(CustomFSRSRating.NeverForget)).toBe(CustomFSRSRating.NeverForget)
    })

    // Edge cases - invalid values default to Rating.Again
    it("defaults invalid grades to Rating.Again", () => {
      expect(mapGradeToFSRS("invalid-grade")).toBe(Rating.Again)
      expect(mapGradeToFSRS(null)).toBe(Rating.Again)
      expect(mapGradeToFSRS(undefined)).toBe(Rating.Again)
      expect(mapGradeToFSRS(0)).toBe(Rating.Again)
      expect(mapGradeToFSRS(5)).toBe(Rating.Again)
      expect(mapGradeToFSRS(-1)).toBe(Rating.Again)
    })

    // Console warning for unknown grade
    it("logs warning for unknown grade", () => {
      const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
      mapGradeToFSRS("unknown")
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining("Unhandled grade")
      )
      consoleWarnSpy.mockRestore()
    })
  })

  describe("simulateFSRSReviews", () => {
    // Empty reviews
    it("returns initial card when no reviews", () => {
      const initialCard = createEmptyCard()
      const { finalCard, logs } = simulateFSRSReviews(initialCard, [])

      expect(finalCard).toEqual(initialCard)
      expect(logs).toEqual([])
    })

    // Single review processing
    it("processes single valid review", () => {
      const initialCard = createEmptyCard()
      const reviews: NormalizedReview[] = [
        { timestamp: new Date("2024-01-01T00:00:00Z"), grade: Rating.Good, source: "test" }
      ]

      const { finalCard, logs } = simulateFSRSReviews(initialCard, reviews)

      expect(logs).toHaveLength(1)
      expect(finalCard.reps).toBe(1)
    })

    // Creates fresh card with first review timestamp
    it("creates card with first review timestamp as creation date", () => {
      const initialCard = createEmptyCard(new Date("1990-01-01"))
      const firstReviewDate = new Date("2024-01-01")
      const reviews: NormalizedReview[] = [
        { timestamp: firstReviewDate, grade: Rating.Good, source: "test" }
      ]

      const { finalCard } = simulateFSRSReviews(initialCard, reviews)

      expect(finalCard.last_review).toEqual(firstReviewDate)
    })

    // Multiple reviews in chronological order
    it("processes multiple reviews in order", () => {
      const initialCard = createEmptyCard()
      const reviews: NormalizedReview[] = [
        { timestamp: new Date("2024-01-01"), grade: Rating.Again, source: "test" },
        { timestamp: new Date("2024-01-02"), grade: Rating.Good, source: "test" },
        { timestamp: new Date("2024-01-03"), grade: Rating.Easy, source: "test" }
      ]

      const { finalCard, logs } = simulateFSRSReviews(initialCard, reviews)

      expect(logs).toHaveLength(3)
      expect(finalCard.reps).toBe(3)
    })

    // Ignore reviews
    it("skips reviews with Ignore grade", () => {
      const initialCard = createEmptyCard()
      const reviews: NormalizedReview[] = [
        { timestamp: new Date("2024-01-01"), grade: CustomFSRSRating.Ignore, source: "test" },
        { timestamp: new Date("2024-01-02"), grade: Rating.Good, source: "test" }
      ]

      const { finalCard, logs } = simulateFSRSReviews(initialCard, reviews)

      expect(logs).toHaveLength(1) // Only the Good rating
      expect(finalCard.reps).toBe(1)
    })

    // Forget reviews
    it("resets card to new state with Forget grade", () => {
      const initialCard = createEmptyCard()
      const reviews: NormalizedReview[] = [
        { timestamp: new Date("2024-01-01"), grade: Rating.Good, source: "test" },
        { timestamp: new Date("2024-01-02"), grade: CustomFSRSRating.Forget, source: "test" }
      ]

      const { finalCard, logs } = simulateFSRSReviews(initialCard, reviews)

      // Both reviews should be processed
      expect(logs).toHaveLength(2)

      // Forget resets card to New state
      expect(finalCard.state).toBe(State.New)

      // Learning parameters are reset to zero
      expect(finalCard.stability).toBe(0)
      expect(finalCard.difficulty).toBe(0)

      // Review count is preserved (from first Good review)
      expect(finalCard.reps).toBe(1)
    })

    // NeverForget reviews
    it("sets card to never-forget state", () => {
      const initialCard = createEmptyCard()
      const reviewDate = new Date("2024-01-01")
      const reviews: NormalizedReview[] = [
        { timestamp: reviewDate, grade: CustomFSRSRating.NeverForget, source: "test" }
      ]

      const { finalCard, logs } = simulateFSRSReviews(initialCard, reviews)

      expect(finalCard.state).toBe(State.Review)
      expect(finalCard.stability).toBe(Infinity)
      expect(finalCard.last_review).toEqual(reviewDate)
    })

    // NeverForget terminates processing
    it("terminates processing after NeverForget", () => {
      const initialCard = createEmptyCard()
      const reviews: NormalizedReview[] = [
        { timestamp: new Date("2024-01-01"), grade: Rating.Good, source: "test" },
        { timestamp: new Date("2024-01-02"), grade: CustomFSRSRating.NeverForget, source: "test" },
        { timestamp: new Date("2024-01-03"), grade: Rating.Easy, source: "test" }
      ]

      const { finalCard, logs } = simulateFSRSReviews(initialCard, reviews)

      expect(logs).toHaveLength(1) // Only the first Good rating
      expect(finalCard.state).toBe(State.Review)
      expect(finalCard.stability).toBe(Infinity)
    })

    // Mixed review types
    it("handles mixed review types correctly", () => {
      const initialCard = createEmptyCard()
      const reviews: NormalizedReview[] = [
        { timestamp: new Date("2024-01-01"), grade: Rating.Again, source: "test" },
        { timestamp: new Date("2024-01-02"), grade: CustomFSRSRating.Ignore, source: "test" },
        { timestamp: new Date("2024-01-03"), grade: Rating.Good, source: "test" },
        { timestamp: new Date("2024-01-04"), grade: CustomFSRSRating.Forget, source: "test" },
        { timestamp: new Date("2024-01-05"), grade: Rating.Easy, source: "test" }
      ]

      const { logs } = simulateFSRSReviews(initialCard, reviews)

      // Should have: Again, Good, Forget, Easy (Ignore is skipped)
      expect(logs).toHaveLength(4)
    })
  })
})
