import {
  type NormalizedCard,
  type NormalizedReview,
  type FSRSProcessingGrade,
  type RawReview,
  normalizeTimestamp,
  NormalizedReviewSchema,
} from "../core/schemas"

export { type NormalizedCard, type NormalizedReview }

export interface ImportAdapter<TInput> {
  validateInput(data: any): data is TInput
  transformCards(data: TInput): NormalizedCard[]
  getSupportedCardTypes(): string[]
  normalizeGrade(grade: any): FSRSProcessingGrade
}

export function createAdapter<TInput>(
  adapter: ImportAdapter<TInput>,
): ImportAdapter<TInput> {
  return adapter
}

export function normalizeReview(rawReview: RawReview): NormalizedReview {
  const normalized = {
    timestamp: normalizeTimestamp(rawReview.timestamp),
    grade: rawReview.grade,
    source: rawReview.source,
  }

  return NormalizedReviewSchema.parse(normalized)
}
