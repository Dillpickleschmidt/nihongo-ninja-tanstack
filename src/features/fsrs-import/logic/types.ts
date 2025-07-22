// src/features/fsrs-import/logic/types.ts

import type { FSRS } from "ts-fsrs"
import type { NormalizedCard } from "../adapters/import-adapter-interface"

/**
 * External dependencies that need to be injected for testing
 */
export interface ImportDependencies {
  // Database operations
  getFSRSCardsByKeys: (userId: string, keys: string[]) => Promise<any[]>
  batchUpsertFSRSCards: (data: any[]) => Promise<void>

  // External services
  waniKaniService: {
    batchFindSubjects: (terms: string[]) => Promise<Map<string, any[]>>
  }

  // Authentication
  getCurrentUser: () => Promise<{ user: { id: string } | null }>
}

/**
 * Input validation result
 */
export interface ValidationResult {
  valid: boolean
  cards: NormalizedCard[]
  errors: string[]
}

/**
 * Import processing result
 */
export interface ImportResult {
  success: boolean
  message: string
  stats?: {
    processed: number
    duplicatesRemoved: number
    duration: string
  }
}

/**
 * Card batch processing context
 */
export interface BatchProcessingContext {
  userId: string
  source: string
  fsrsInstance: FSRS
}
