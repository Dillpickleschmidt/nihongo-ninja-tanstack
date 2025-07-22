// src/features/fsrs-import/logic/index.ts

export { ImportSessionManager } from "./import-session-manager"
export {
  CustomFSRSRating,
  mapGradeToFSRS,
  simulateFSRSReviews,
  type FSRSProcessingGrade,
  type NormalizedReview
} from "./spaced-repetition-processor"
export {
  determineMode,
  normalizeSearchTerm,
  validateCardStructure,
  selectBestCard,
  groupCardsByKey,
  deduplicateCards,
  type ProcessedCard,
  type DeduplicationStats
} from "./card-validation-deduplication"
export type {
  ImportDependencies,
  ValidationResult,
  ImportResult,
  BatchProcessingContext
} from "./types"