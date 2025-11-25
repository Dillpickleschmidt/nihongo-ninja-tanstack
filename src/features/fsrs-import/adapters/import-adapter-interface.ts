import {
  type NormalizedCard,
  type NormalizedReview,
  NormalizedReviewSchema,
} from "../shared/types/import-data-models"
import { type FSRSProcessingGrade } from "../shared/types/fsrs-types"
import { normalizeTimestamp } from "./adapter-utils"

export { type NormalizedCard, type NormalizedReview }

export interface RawReview {
  timestamp: unknown
  grade: any
  source: string
}

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
