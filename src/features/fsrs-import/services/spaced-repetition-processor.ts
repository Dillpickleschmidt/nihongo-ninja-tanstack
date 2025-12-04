// src/features/fsrs-import/logic/spaced-repetition-processor.ts

import {
  FSRS,
  State,
  Rating,
  createEmptyCard,
  type Card,
  type ReviewLog,
} from "ts-fsrs"
import type { NormalizedReview } from "../shared/types/import-data-models"
import type { FSRSProcessingGrade } from "../shared/types/fsrs-types"

// =============================================================================
// CONSTANTS AND TYPES
// =============================================================================

const NEVER_FORGET_YEARS = 100

// Custom actions for specific grades
// Using string constants instead of Symbols for SSR serialization compatibility
export const CustomFSRSRating = {
  Ignore: "IGNORE_REVIEW" as const,
  Forget: "FORGET_CARD" as const,
  NeverForget: "NEVER_FORGET_CARD" as const,
} as const

// =============================================================================
// SPACED REPETITION PROCESSING UTILITIES
// =============================================================================

/**
 * Maps a generic grade to an FSRS Grade or a custom action.
 */
export function mapGradeToFSRS(grade: any): FSRSProcessingGrade {
  // If it's already a valid FSRS grade or custom rating, return as-is
  if (typeof grade === "number" && grade >= 1 && grade <= 4) {
    return grade as import("ts-fsrs").Grade
  }

  if (
    grade === CustomFSRSRating.Ignore ||
    grade === CustomFSRSRating.Forget ||
    grade === CustomFSRSRating.NeverForget
  ) {
    return grade
  }

  // Handle unknown grades
  console.warn(
    `[FSRSProcessor] Unhandled grade '${grade}'. Defaulting to 'Again'.`,
  )
  return Rating.Again
}

/**
 * Simulates FSRS progression for a card based on normalized reviews.
 * Reviews MUST be sorted chronologically by timestamp.
 */
export function simulateFSRSReviews(
  initialCard: Card,
  reviews: NormalizedReview[],
  fsrsInstance?: FSRS,
): { finalCard: Card; logs: ReviewLog[] } {
  const fsrs = fsrsInstance ?? new FSRS({ request_retention: 0.8 })

  // If we have reviews, create a fresh card with the first review timestamp as creation date
  // This prevents FSRS from thinking the card has been sitting around for decades
  let currentCard: Card
  if (reviews.length > 0) {
    const firstReviewDate = reviews[0].timestamp
    currentCard = createEmptyCard(firstReviewDate)
  } else {
    // Fallback to the provided initial card if no reviews
    currentCard = { ...initialCard }
  }

  const reviewLogs: ReviewLog[] = []

  for (const review of reviews) {
    const processingGrade = mapGradeToFSRS(review.grade)
    const reviewDate = review.timestamp

    if (processingGrade === CustomFSRSRating.Ignore) {
      continue
    }

    if (processingGrade === CustomFSRSRating.Forget) {
      // Use FSRS forget method instead of resetting to empty card
      const { card: forgottenCard, log: forgetLog } = fsrs.forget(
        currentCard,
        reviewDate,
        false, // reset_count parameter - set to false to preserve review count
      )
      currentCard = forgottenCard
      if (forgetLog) {
        reviewLogs.push(forgetLog)
      }
      continue
    }

    if (processingGrade === CustomFSRSRating.NeverForget) {
      currentCard.state = State.Review
      currentCard.due = new Date(
        reviewDate.getTime() + NEVER_FORGET_YEARS * 365 * 24 * 60 * 60 * 1000,
      )
      currentCard.stability = Infinity
      currentCard.last_review = reviewDate
      return { finalCard: currentCard, logs: reviewLogs }
    }

    // At this point, processingGrade can only be a numeric FSRS Rating (1-4)
    if (typeof processingGrade === "number") {
      const { card: updatedCard, log: newLog } = fsrs.next(
        currentCard,
        reviewDate,
        processingGrade,
      )

      currentCard = updatedCard
      if (newLog) {
        reviewLogs.push(newLog)
      }
    }
  }

  return { finalCard: currentCard, logs: reviewLogs }
}
