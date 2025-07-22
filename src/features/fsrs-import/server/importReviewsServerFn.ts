// src/features/fsrs-import/importReviewsServerFn.ts

import { createServerFn } from "@tanstack/solid-start"
import { getUser } from "@/features/supabase/getUser"
import {
  batchUpsertFSRSCardsForUser,
  getFSRSCardsByKeys,
} from "@/features/supabase/db/utils"
import { getWaniKaniService } from "../services/wanikani-database-service"
import { ImportSessionManager } from "../logic/import-session-manager"
import type { ImportDependencies } from "../logic/types"
import type { ImportAdapter, NormalizedCard } from "../adapters/import-adapter-interface"

type ImportReviewsInput = {
  cards: NormalizedCard[]
  source: string
}

/**
 * Refactored server function using the new modular ImportSessionManager.
 * Now acts as a thin wrapper that injects dependencies and delegates to pure logic.
 */
export const importReviewsServerFn = createServerFn({
  method: "POST",
})
  .validator((input: any): ImportReviewsInput => {
    if (!Array.isArray(input.cards)) {
      throw new Error("Invalid data: cards array required")
    }
    if (typeof input.source !== "string") {
      throw new Error("Invalid data: source string required")
    }
    return input as ImportReviewsInput
  })
  .handler(async ({ data }) => {
    // Create dependency injection object with real implementations
    const dependencies: ImportDependencies = {
      // Database operations
      getFSRSCardsByKeys: (userId: string, keys: string[]) =>
        getFSRSCardsByKeys(userId, keys),
      batchUpsertFSRSCards: (processedCards) =>
        batchUpsertFSRSCardsForUser({ data: processedCards }),

      // External services
      waniKaniService: getWaniKaniService(),

      // Authentication
      getCurrentUser: getUser,
    }

    // Create a pass-through adapter for already-normalized cards
    // This maintains backward compatibility with existing callers
    const passthroughAdapter: ImportAdapter<NormalizedCard[]> = {
      validateInput: (cards: any): cards is NormalizedCard[] => Array.isArray(cards),
      transformCards: (cards: NormalizedCard[]) => cards,
      getSupportedCardTypes: () => ["normalized"], // Pass-through doesn't filter by type
      normalizeGrade: (grade: any) => grade // Pass-through assumes grades are already normalized
    }

    // Create session manager and delegate the entire import process
    const sessionManager = new ImportSessionManager()
    const result = await sessionManager.importCards(
      data,
      passthroughAdapter,
      dependencies,
    )

    // Convert result format to match expected server function response
    if (!result.success) {
      throw new Error(result.message)
    }

    return result
  })
