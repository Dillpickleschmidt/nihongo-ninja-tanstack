import { createServerFn } from "@tanstack/solid-start"
import { getUser } from "@/features/supabase/getUser"
import {
  batchUpsertFSRSCardsForUser,
  getFSRSCards,
} from "@/features/supabase/db/fsrs"
import {
  ImportSessionManager,
  type ImportDependencies,
} from "../services/import-orchestrator"
import type { ImportAdapter } from "../adapters/import-adapter-interface"
import { type NormalizedCard } from "../shared/types/import-data-models"
import { z } from "zod"

const ImportReviewsInputSchema = z.object({
  cards: z.array(z.unknown()),
  source: z.string().min(1),
})
type ImportReviewsInput = z.infer<typeof ImportReviewsInputSchema>

export const importReviewsServerFn = createServerFn({
  method: "POST",
})
  .inputValidator((input: any): ImportReviewsInput => {
    return ImportReviewsInputSchema.parse(input)
  })
  .handler(async ({ data }) => {
    const dependencies: ImportDependencies = {
      getFSRSCards: (userId: string, keys: string[]) =>
        getFSRSCards(userId, keys),
      batchUpsertFSRSCards: (processedCards) =>
        batchUpsertFSRSCardsForUser({ data: processedCards }),
      getCurrentUser: getUser,
    }

    const passthroughAdapter: ImportAdapter<NormalizedCard[]> = {
      validateInput: (cards: any): cards is NormalizedCard[] =>
        Array.isArray(cards),
      transformCards: (cards: NormalizedCard[]) => cards,
      getSupportedCardTypes: () => ["normalized"],
      normalizeGrade: (grade: any) => grade,
    }

    const sessionManager = new ImportSessionManager()
    const result = await sessionManager.importCards(
      data,
      passthroughAdapter,
      dependencies,
    )

    if (!result.success) {
      throw new Error(result.message)
    }

    return result
  })
