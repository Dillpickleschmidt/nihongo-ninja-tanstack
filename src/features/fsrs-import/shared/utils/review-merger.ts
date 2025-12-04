import { type NormalizedReview } from "../types/import-data-models"

/**
 * Merges existing and imported reviews chronologically.
 * Imported reviews overwrite existing reviews at the same timestamp.
 * Filters out reviews with invalid timestamps or future dates.
 */
export function mergeReviews(
  existingReviews: NormalizedReview[],
  importedReviews: NormalizedReview[],
): NormalizedReview[] {
  // Filter out invalid reviews
  const validExistingReviews = filterValidReviews(existingReviews)
  const validImportedReviews = filterValidReviews(importedReviews)

  // Create a map of imported reviews by timestamp for quick lookup
  const importedByTimestamp = new Map<number, NormalizedReview>()

  for (const review of validImportedReviews) {
    const timestamp = review.timestamp.getTime()
    importedByTimestamp.set(timestamp, review)
  }

  // Start with existing reviews that don't conflict with imported ones
  const mergedReviews: NormalizedReview[] = []

  for (const existingReview of validExistingReviews) {
    const timestamp = existingReview.timestamp.getTime()

    // If imported review exists at same timestamp, skip existing (imported wins)
    if (!importedByTimestamp.has(timestamp)) {
      mergedReviews.push(existingReview)
    }
  }

  // Add all imported reviews
  mergedReviews.push(...validImportedReviews)

  // Sort chronologically by timestamp
  mergedReviews.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())

  return mergedReviews
}

/**
 * Filters out reviews with invalid timestamps, future dates, or malformed objects.
 */
function filterValidReviews(reviews: NormalizedReview[]): NormalizedReview[] {
  const now = Date.now()

  return reviews.filter((review) => {
    // Check if review has required fields
    if (!review || typeof review !== "object") {
      return false
    }

    if (!review.timestamp || review.grade === undefined || review.grade === null) {
      return false
    }

    // Check if timestamp is a valid Date
    if (
      !(review.timestamp instanceof Date) ||
      isNaN(review.timestamp.getTime())
    ) {
      return false
    }

    // Skip future dates
    if (review.timestamp.getTime() > now) {
      console.warn(
        `[ReviewMerger] Skipping review with future date: ${review.timestamp.toISOString()}`,
      )
      return false
    }

    return true
  })
}
