// src/features/fsrs-import/fsrsProcessor.ts

import {
  FSRS,
  State,
  createEmptyCard,
  Rating,
  type Card,
  type ReviewLog,
} from "ts-fsrs"
import {
  CustomFSRSRating,
  type JpdbReview,
  type FSRSProcessingGrade,
} from "./types"

// Constants
const SECONDS_TO_MS = 1000
const NEVER_FORGET_YEARS = 10

/**
 * Maps a jpdb.io grade string to an FSRS Grade or a custom action.
 */
export function mapJpdbGradeToFSRS(
  jpdbGrade: JpdbReview["grade"],
): FSRSProcessingGrade {
  switch (jpdbGrade) {
    case "okay":
      return Rating.Good
    case "hard":
      return Rating.Hard
    case "something":
      return Rating.Again
    case "easy":
      return Rating.Easy
    case "unknown":
      return CustomFSRSRating.Ignore
    case "nothing":
      return CustomFSRSRating.Forget
    case "never-forget":
      return CustomFSRSRating.NeverForget
    case "known":
      return Rating.Good
    default:
      console.warn(
        `[FSRSProcessor] Unhandled jpdb.io grade '${jpdbGrade}'. Defaulting to 'Again'.`,
      )
      return Rating.Again
  }
}

/**
 * Simulates FSRS progression for a card based on a sequence of jpdb.io reviews.
 * JpdbReviews MUST be sorted chronologically by timestamp.
 */
export function simulateFSRSReviews(
  initialCard: Card,
  jpdbReviews: JpdbReview[],
  fsrsInstance?: FSRS,
): { finalCard: Card; logs: ReviewLog[] } {
  const fsrs =
    fsrsInstance ??
    new FSRS({
      request_retention: 0.8,
    })

  // If we have reviews, create a fresh card with the first review timestamp as creation date
  // This prevents FSRS from thinking the card has been sitting around for decades
  let currentCard: Card
  if (jpdbReviews.length > 0) {
    const firstReviewDate = new Date(jpdbReviews[0].timestamp * SECONDS_TO_MS)
    currentCard = createEmptyCard(firstReviewDate)
  } else {
    // Fallback to the provided initial card if no reviews
    currentCard = { ...initialCard }
  }
  const reviewLogs: ReviewLog[] = []

  for (const jpdbReview of jpdbReviews) {
    const processingGrade = mapJpdbGradeToFSRS(jpdbReview.grade)
    const reviewDate = new Date(jpdbReview.timestamp * SECONDS_TO_MS)

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
