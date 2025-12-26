import { createSignal, createMemo, onCleanup } from "solid-js"
import { useImportSelection } from "./useImportSelection"
import { useStatusOverrides, type OverrideItem } from "./useStatusOverrides"
import { isAtOrAboveStatus, type ItemStatus } from "../status"
import type { PracticeItemType } from "convex/validators"

interface UseImportFlowOptions {
  /** Returns the base status for an item (before any override) */
  getBaseStatus: (key: string, type: PracticeItemType) => ItemStatus
}

/**
 * Consolidates import flow logic shared between JpdbResultsView and ManualMarkingSection.
 * Combines selection, overrides, undo dialog state, and click-outside behavior.
 */
export function useImportFlow(options: UseImportFlowOptions) {
  const selection = useImportSelection()
  const overrides = useStatusOverrides()

  const [showUndoDialog, setShowUndoDialog] = createSignal(false)
  const [pendingUndoItem, setPendingUndoItem] =
    createSignal<OverrideItem | null>(null)

  const getOverrideStatus = (
    key: string,
    type: PracticeItemType,
  ): ItemStatus | undefined =>
    overrides.hasOverride(key, type)
      ? overrides.getOverride(key, type)
      : undefined

  /** Call inside onMount */
  const setupClickOutside = () => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest("[data-import-item-id]") ||
        target.closest("[data-floating-bar]") ||
        target.closest("[role='dialog']")
      ) {
        return
      }
      selection.resetSelection()
    }
    document.addEventListener("click", handleClickOutside)
    onCleanup(() => document.removeEventListener("click", handleClickOutside))
  }

  const countSelectedAtOrAbove = (status: ItemStatus): number => {
    return selection
      .selectedPairs()
      .filter(({ key, type }) =>
        isAtOrAboveStatus(options.getBaseStatus(key, type), status),
      ).length
  }

  /** Applies status to selected items, skipping those already at or above target */
  const handleApplyStatus = (status: NonNullable<ItemStatus>) => {
    const items = selection.selectedPairs()
    if (items.length === 0) return

    const itemsToApply = items.filter(
      ({ key, type }) =>
        !isAtOrAboveStatus(options.getBaseStatus(key, type), status),
    )
    if (itemsToApply.length === 0) {
      selection.resetSelection()
      return
    }

    overrides.applyToSelected(itemsToApply, status)
    selection.resetSelection()
  }

  /** Shows undo dialog for clearing overrides on all selected items */
  const handleClearOverrides = () => {
    const count = undoDialogSelectedCount()
    if (count === 0) return
    setPendingUndoItem(null)
    setShowUndoDialog(true)
  }

  /** Handle undo click - shows dialog if multiple selected, otherwise undoes single item */
  const handleUndoClick = (
    _e: MouseEvent,
    key: string,
    type: PracticeItemType,
  ) => {
    const items = selection.selectedPairs()
    const selectedWithOverrides = items.filter((item) =>
      overrides.hasOverride(item.key, item.type),
    )

    if (
      items.length > 1 &&
      selection.isSelected(key) &&
      selectedWithOverrides.length > 0
    ) {
      setPendingUndoItem({ key, type })
      setShowUndoDialog(true)
    } else {
      overrides.clearOverride(key, type)
    }
  }

  const handleUndoSingle = () => {
    const item = pendingUndoItem()
    if (item) overrides.clearOverride(item.key, item.type)
    setShowUndoDialog(false)
    setPendingUndoItem(null)
  }

  const handleUndoSelected = () => {
    const items = selection.selectedPairs()
    const itemsWithOverrides = items.filter((item) =>
      overrides.hasOverride(item.key, item.type),
    )
    overrides.clearOverrides(itemsWithOverrides)
    setShowUndoDialog(false)
    setPendingUndoItem(null)
    selection.resetSelection()
  }

  /** For undo dialog */
  const undoDialogSelectedCount = createMemo(
    () =>
      selection
        .selectedPairs()
        .filter((item) => overrides.hasOverride(item.key, item.type)).length,
  )

  return {
    // Selection
    isSelected: selection.isSelected,
    selectedPairs: selection.selectedPairs,
    handleItemClick: selection.handleItemClick,
    handlePointerDown: selection.handlePointerDown,
    toggleAll: selection.toggleAll,
    resetSelection: selection.resetSelection,
    selectedCount: selection.selectedCount,

    // Overrides
    overrides: overrides.overrides,
    getOverride: overrides.getOverride,
    hasOverride: overrides.hasOverride,
    getOverrideStatus,

    // Status application
    handleApplyStatus,
    countSelectedAtOrAbove,

    // Undo / Clear overrides
    handleUndoClick,
    handleClearOverrides,
    showUndoDialog,
    setShowUndoDialog,
    pendingUndoItem,
    handleUndoSingle,
    handleUndoSelected,
    undoDialogSelectedCount,

    // Setup
    setupClickOutside,
  }
}
