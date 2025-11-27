import { createSignal } from "solid-js"
import type { ItemStatus } from "../types"

export type ImportState = Record<string, ItemStatus>

export function useImportState(initialState?: ImportState) {
  const [itemStates, setItemStates] = createSignal<ImportState>(
    initialState ?? {},
  )
  const [initialItemStates, setInitialItemStates] = createSignal<ImportState>(
    {},
  )

  const updateItemStatus = (id: string, status: ItemStatus) => {
    setItemStates((prev) => ({
      ...prev,
      [id]: status,
    }))
  }

  const captureInitialState = () => {
    setInitialItemStates(structuredClone(itemStates()))
  }

  return {
    itemStates,
    setItemStates,
    updateItemStatus,
    initialItemStates,
    captureInitialState,
  }
}
