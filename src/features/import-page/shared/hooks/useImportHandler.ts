import { createSignal, Accessor } from "solid-js"
import { toast } from "solid-sonner"
import { getUser } from "@/features/supabase/getUser"
import { processImportChanges, type ImportResult } from "../utils/fsrs-badge-import"
import type { ImportState } from "./useImportState"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import type { DBPracticeItemType } from "@/features/fsrs-import/shared/types/fsrs-types"

export interface ImportHandlerOptions {
  itemStates: Accessor<ImportState>
  initialItemStates: Accessor<ImportState>
  getTypeResolver: () => (id: string) => DBPracticeItemType
  getExistingCards: () => Map<string, FSRSCardData>
  routeType: "manual" | "automatic" | "learning-path"
  onSuccess?: (result: any) => void
  onError?: (error: Error) => void
}

export function useImportHandler(options: ImportHandlerOptions) {
  const [isImporting, setIsImporting] = createSignal(false)

  const handleImport = async (): Promise<ImportResult> => {
    const response = await getUser()
    if (!response.user) {
      toast.error("Not authenticated")
      return {
        success: false,
        message: "Not authenticated",
        upserted: 0,
        deleted: 0,
        changes: [],
      }
    }

    setIsImporting(true)
    try {
      const result = await processImportChanges({
        userId: response.user.id,
        itemStates: options.itemStates(),
        initialItemStates: options.initialItemStates(),
        typeResolver: options.getTypeResolver(),
        existingCards: options.getExistingCards(),
        routeType: options.routeType,
      })

      if (result.success) {
        const details: string[] = []
        if (result.upserted > 0) details.push(`${result.upserted} upserted`)
        if (result.deleted > 0) details.push(`${result.deleted} deleted`)
        const message =
          details.length > 0
            ? `Import complete: ${details.join(", ")}`
            : "No changes to import"
        toast.success(message)
        options.onSuccess?.(result)
      } else {
        toast.error(result.message)
      }

      return result
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Import failed")
      toast.error(error.message)
      console.error(`[${options.routeType} Import] Error:`, error)
      options.onError?.(error)
      return {
        success: false,
        message: error.message,
        upserted: 0,
        deleted: 0,
        changes: [],
      }
    } finally {
      setIsImporting(false)
    }
  }

  return { handleImport, isImporting }
}
