// src/features/fsrs-import/importAdapter.ts

import { type Grade } from "ts-fsrs"
import {
  CustomFSRSRating,
  type FSRSProcessingGrade,
  type NormalizedReview,
} from "../logic/spaced-repetition-processor"

export { CustomFSRSRating, type NormalizedReview }

export type NormalizedCard = {
  searchTerm: string
  reviews: NormalizedReview[]
  source: string
}

type RawReview = {
  timestamp: Date | string | number
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
  let timestamp: Date

  // Handle different timestamp formats
  if (rawReview.timestamp instanceof Date) {
    timestamp = rawReview.timestamp
  } else if (typeof rawReview.timestamp === "string") {
    timestamp = new Date(rawReview.timestamp)
  } else if (typeof rawReview.timestamp === "number") {
    // Assume unix timestamp in seconds, convert to milliseconds
    timestamp = new Date(rawReview.timestamp * 1000)
  } else {
    throw new Error(`Invalid timestamp format: ${rawReview.timestamp}`)
  }

  return {
    timestamp,
    grade: rawReview.grade,
    source: rawReview.source,
  }
}
