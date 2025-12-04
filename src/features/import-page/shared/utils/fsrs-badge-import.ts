import {
  batchUpsertFSRSCardsForUser,
  batchDeleteFSRSCards,
  type FSRSCardData,
} from "@/features/supabase/db/fsrs"
import type { ProcessedCard } from "@/features/fsrs-import/shared/types/fsrs-types"
import type { DBPracticeItemType } from "@/features/fsrs-import/shared/types/fsrs-types"
import type { ItemStatus } from "../types"
import { detectItemChanges, type ImportState } from "./import-change-detector"
import { createFSRSCardFromStatus } from "./fsrs-card-factory"

export interface ImportContext {
  userId: string
  itemStates: ImportState // current (mutable)
  initialItemStates: ImportState // snapshot (immutable)
  typeResolver: (id: string) => DBPracticeItemType
  existingCards: Map<string, FSRSCardData> // from initial fetch (has full card with lapses)
  routeType: "manual" | "automatic" | "learning-path"
}

export interface ImportResult {
  success: boolean
  message: string
  upserted: number
  deleted: number
  errors?: string[]
  changes: ItemChange[]
}

export type ItemChange = ReturnType<typeof detectItemChanges>[number]

export async function processImportChanges(
  context: ImportContext,
): Promise<ImportResult> {
  try {
    const allItemIds = Object.keys(context.initialItemStates)
    const changes = detectItemChanges(
      allItemIds,
      context.initialItemStates,
      context.itemStates,
      context.typeResolver,
    )

    if (changes.length === 0) {
      return {
        success: true,
        message: "No changes to import",
        upserted: 0,
        deleted: 0,
        changes: [],
      }
    }

    const upsertsToProcess = changes.filter((c) => c.changeType === "upsert")
    const deletesToProcess = changes.filter((c) => c.changeType === "delete")

    const errors: string[] = []
    let upsertCount = 0
    let deleteCount = 0

    if (upsertsToProcess.length > 0) {
      try {
        const processedCards = upsertsToProcess.map((change) => {
          const currentStatus = context.itemStates[change.id] as ItemStatus
          const existingCard = context.existingCards.get(change.id)?.fsrs_card
          const newFsrsCard = createFSRSCardFromStatus(
            currentStatus,
            existingCard,
          )

          const processedCard: ProcessedCard = {
            practice_item_key: change.id,
            type: change.type,
            fsrs_card: newFsrsCard,
            mode: "meanings",
            fsrs_logs: [],
          }

          return processedCard
        })

        await batchUpsertFSRSCardsForUser(processedCards)
        upsertCount = processedCards.length
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error"
        errors.push(`Upsert failed: ${message}`)
      }
    }

    if (deletesToProcess.length > 0) {
      try {
        const deleteItems = deletesToProcess.map((change) => ({
          practice_item_key: change.id,
          type: change.type,
          mode: "meanings" as const,
        }))

        await batchDeleteFSRSCards(deleteItems)
        deleteCount = deleteItems.length
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error"
        errors.push(`Delete failed: ${message}`)
      }
    }

    const allSucceeded = errors.length === 0
    const messageDetails: string[] = []
    if (upsertCount > 0) messageDetails.push(`upserted ${upsertCount}`)
    if (deleteCount > 0) messageDetails.push(`deleted ${deleteCount}`)

    return {
      success: allSucceeded,
      message: allSucceeded
        ? `Successfully ${messageDetails.join(" and ")}`
        : `Import partially failed: ${errors.join("; ")}`,
      upserted: upsertCount,
      deleted: deleteCount,
      errors: errors.length > 0 ? errors : undefined,
      changes,
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return {
      success: false,
      message: `Import failed: ${message}`,
      upserted: 0,
      deleted: 0,
      errors: [message],
      changes: [],
    }
  }
}
