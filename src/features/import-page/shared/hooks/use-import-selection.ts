// src/features/import-page/hooks/use-import-selection.ts
import { createSignal } from "solid-js"
import type { ItemStatus } from "../types"
import { createAutoScroller } from "@/utils/auto-scroll"
import { getItemIdAtPoint } from "@/utils/dom-helpers"

const LONG_PRESS_DURATION = 300
const LONG_PRESS_TOLERANCE = 10

/**
 * Calculates the range of items between two IDs in a list
 * Used for shift-click and drag selection
 */
function calculateRange(
  groupIds: string[],
  startId: string,
  endId: string,
): string[] {
  const startIdx = groupIds.indexOf(startId)
  const endIdx = groupIds.indexOf(endId)

  if (startIdx === -1 || endIdx === -1) {
    return []
  }

  const [min, max] = [Math.min(startIdx, endIdx), Math.max(startIdx, endIdx)]
  return groupIds.slice(min, max + 1)
}

export function useImportSelection(
  onUpdateStatus?: (id: string, status: ItemStatus | null) => void,
  deleteItems?: (ids: string[]) => void,
) {
  const [selectedIds, setSelectedIds] = createSignal<Set<string>>(new Set())
  const [anchorId, setAnchorId] = createSignal<string | null>(null)

  // Long-press and drag tracking
  const [isLongPressing, setIsLongPressing] = createSignal(false)
  const [dragAnchorId, setDragAnchorId] = createSignal<string | null>(null)
  const [dragGroupIds, setDragGroupIds] = createSignal<string[]>([])
  let longPressTimer: ReturnType<typeof setTimeout> | null = null
  let scrollInterval: ReturnType<typeof setInterval> | null = null
  let dragStartX = 0
  let dragStartY = 0
  let dragMode: "select" | "deselect" | null = null
  let didLongPress = false

  // Create auto-scroller instance
  const handleAutoScroll = createAutoScroller()

  // Helper to reset selection state
  const resetSelection = () => {
    setSelectedIds(new Set<string>())
    setAnchorId(null)
  }

  const handlePointerDown = (
    e: PointerEvent,
    id: string,
    groupIds: string[],
  ) => {
    e.preventDefault()
    dragStartX = e.clientX
    dragStartY = e.clientY
    setDragAnchorId(id)
    setDragGroupIds(groupIds)

    // Start the long-press timer
    longPressTimer = setTimeout(() => {
      setIsLongPressing(true)
      didLongPress = true

      const isAlreadySelected = selectedIds().has(id)

      if (isAlreadySelected) {
        // Deselect mode: remove the item from selection
        dragMode = "deselect"
        const current = new Set(selectedIds())
        current.delete(id)
        setSelectedIds(current)
      } else {
        // Select mode: add this item to selection
        dragMode = "select"
        const current = new Set(selectedIds())
        current.add(id)
        setSelectedIds(current)
        setAnchorId(id)
      }

      // Haptic feedback if available
      if ("vibrate" in navigator) {
        navigator.vibrate(50)
      }

      longPressTimer = null
    }, LONG_PRESS_DURATION)

    // Add pointer move and up listeners
    document.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    })
    document.addEventListener("pointerup", handlePointerUp)
    document.addEventListener("pointercancel", handlePointerUp)
  }

  const handlePointerMove = (e: PointerEvent) => {
    // If timer hasn't fired yet, check if pointer moved too much
    if (longPressTimer !== null) {
      const dx = e.clientX - dragStartX
      const dy = e.clientY - dragStartY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > LONG_PRESS_TOLERANCE) {
        // Pointer moved too much, cancel long-press
        clearTimeout(longPressTimer)
        longPressTimer = null
        handlePointerUp()
        return
      }
    }

    // If we're in long-press mode, update selection based on current pointer
    if (isLongPressing()) {
      const itemId = getItemIdAtPoint(e.clientX, e.clientY, "data-import-item-id")
      const groupIds = dragGroupIds()
      const anchor = dragAnchorId()

      if (
        itemId &&
        anchor &&
        groupIds.includes(itemId) &&
        groupIds.includes(anchor)
      ) {
        const range = calculateRange(groupIds, anchor, itemId)

        if (dragMode === "deselect") {
          // Remove items in range from selection
          const current = new Set(selectedIds())
          range.forEach((id) => current.delete(id))
          setSelectedIds(current)
        } else {
          // Add items in range to selection (select mode)
          const current = new Set(selectedIds())
          range.forEach((id) => current.add(id))
          setSelectedIds(current)
        }
      }

      // Handle auto-scroll
      handleAutoScroll(e.clientY)
    }
  }

  const handlePointerUp = () => {
    // Clear timer if still pending
    if (longPressTimer !== null) {
      clearTimeout(longPressTimer)
      longPressTimer = null
    }

    // Clear scroll interval if active
    if (scrollInterval !== null) {
      clearInterval(scrollInterval)
      scrollInterval = null
    }

    // If long-press occurred, prevent the subsequent click event
    if (didLongPress) {
      document.addEventListener(
        "click",
        (e) => {
          e.stopPropagation()
          e.preventDefault()
        },
        { capture: true, once: true },
      )
    }

    // Clear drag state
    setIsLongPressing(false)
    setDragAnchorId(null)
    setDragGroupIds([])
    dragMode = null
    didLongPress = false

    // Remove listeners
    document.removeEventListener("pointermove", handlePointerMove)
    document.removeEventListener("pointerup", handlePointerUp)
    document.removeEventListener("pointercancel", handlePointerUp)
  }

  const handleItemClick = (
    e: MouseEvent,
    id: string,
    allIdsInGroup: string[],
  ) => {
    e.stopPropagation()
    e.preventDefault()

    const shiftKey = e.shiftKey
    const metaKey = e.ctrlKey || e.metaKey

    const currentAnchor = anchorId()

    // 1. Shift-Click (Range Selection)
    if (
      shiftKey &&
      currentAnchor &&
      allIdsInGroup.includes(currentAnchor) &&
      allIdsInGroup.includes(id)
    ) {
      const range = calculateRange(allIdsInGroup, currentAnchor, id)
      setSelectedIds(new Set(range))
      return
    }

    // 2. Meta/Ctrl-Click (Toggle Selection)
    if (metaKey) {
      const currentSelected = new Set(selectedIds())
      currentSelected.has(id) ? currentSelected.delete(id) : currentSelected.add(id)
      setSelectedIds(currentSelected)
      setAnchorId(id)
      return
    }

    // 3. Regular Click (Single Selection)
    const currentSelected = new Set(selectedIds())

    if (currentSelected.has(id) && currentSelected.size === 1) {
      resetSelection()
    } else {
      setSelectedIds(new Set([id]))
      setAnchorId(id)
    }
  }

  const toggleSelectGroup = (ids: string[]) => {
    const currentSelected = new Set(selectedIds())
    const allInGroupSelected = ids.every((id) => currentSelected.has(id))

    ids.forEach((id) =>
      allInGroupSelected ? currentSelected.delete(id) : currentSelected.add(id)
    )
    setSelectedIds(currentSelected)
    setAnchorId(null)
  }

  const applyStatus = (status: ItemStatus) => {
    const selected = selectedIds()
    selected.forEach((id) => onUpdateStatus?.(id, status))
    resetSelection()
  }

  const clearSelection = resetSelection

  const handleDelete = (id: string) => {
    const idsToDelete = selectedIds().has(id) ? Array.from(selectedIds()) : [id]
    deleteItems?.(idsToDelete)
    resetSelection()
  }

  return {
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
    handleDelete,
  }
}
