import { createContext, useContext, JSXElement, Accessor } from "solid-js"
import { useImportState } from "../hooks/useImportState"
import { useImportSelection } from "../hooks/use-import-selection"
import type { ItemStatus } from "../types"
import type { ImportState } from "../hooks/useImportState"

export interface ImportFlowContextValue {
  // Badge state
  itemStates: Accessor<ImportState>
  updateItemStatus: (id: string, status: ItemStatus) => void
  initialItemStates: Accessor<ImportState>
  captureInitialState: () => void

  // Selection state
  selectedIds: Accessor<Set<string>>
  handleItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  handlePointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
  toggleSelectGroup: (ids: string[]) => void
  applyStatus: (status: ItemStatus) => void
  clearSelection: () => void
  handleDelete: (id: string) => void
}

const ImportFlowContext = createContext<ImportFlowContextValue>()

export function ImportFlowProvider(props: {
  children: JSXElement
}) {
  // Badge state management
  const {
    itemStates,
    updateItemStatus,
    initialItemStates,
    captureInitialState,
  } = useImportState()

  // Selection state management
  const {
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
    handleDelete,
  } = useImportSelection(updateItemStatus)

  const value: ImportFlowContextValue = {
    itemStates,
    updateItemStatus,
    initialItemStates,
    captureInitialState,
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
    handleDelete,
  }

  return (
    <ImportFlowContext.Provider value={value}>
      {props.children}
    </ImportFlowContext.Provider>
  )
}

export function useImportFlow() {
  const context = useContext(ImportFlowContext)
  if (!context) {
    throw new Error("useImportFlow must be used within ImportFlowProvider")
  }
  return context
}
