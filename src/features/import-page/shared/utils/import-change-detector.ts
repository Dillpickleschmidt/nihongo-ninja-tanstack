import type { ItemStatus } from "../types"
import type { DBPracticeItemType } from "@/features/fsrs-import/shared/types/fsrs-types"

export type ImportState = Record<string, ItemStatus>

export interface ItemChange {
  id: string
  type: DBPracticeItemType
  initialStatus: ItemStatus
  currentStatus: ItemStatus
  changeType: "upsert" | "delete" | "none"
}

export function detectItemChanges(
  itemIds: string[],
  initialStates: ImportState,
  currentStates: ImportState,
  typeResolver: (id: string) => DBPracticeItemType,
): ItemChange[] {
  const changes: ItemChange[] = []

  for (const id of itemIds) {
    const initial = initialStates[id] ?? null
    const current = currentStates[id] ?? null

    if (initial === current) {
      continue
    }

    const type = typeResolver(id)
    const changeType = current === null ? "delete" : "upsert"

    changes.push({
      id,
      type,
      initialStatus: initial,
      currentStatus: current,
      changeType,
    })
  }

  return changes
}
