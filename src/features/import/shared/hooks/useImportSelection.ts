import { batch, createMemo, createSignal } from "solid-js"
import { createStore } from "solid-js/store"
import { createAutoScroller } from "@/utils/auto-scroll"
import { getItemIdAtPoint } from "@/utils/dom-helpers"
import type { PracticeItemType } from "convex/validators"

const LONG_PRESS_DURATION = 300
const LONG_PRESS_TOLERANCE = 10

export interface SelectedItem {
  key: string
  type: PracticeItemType
}

function calculateRange(groupIds: string[], startId: string, endId: string): string[] {
  const startIdx = groupIds.indexOf(startId)
  const endIdx = groupIds.indexOf(endId)

  if (startIdx === -1 || endIdx === -1) {
    return []
  }

  const [min, max] = [Math.min(startIdx, endIdx), Math.max(startIdx, endIdx)]
  return groupIds.slice(min, max + 1)
}

/**
 * Encapsulates all selection state and handlers for import pages.
 * Supports click, shift-click, ctrl/meta-click, and long-press drag selection.
 * Tracks both key and type for each selected item.
 */
export function useImportSelection() {
  const [selectedItems, setSelectedItems] = createStore<Record<string, PracticeItemType>>({})
  const [anchorId, setAnchorId] = createSignal<string | null>(null)

  // Long-press and drag tracking
  const [isLongPressing, setIsLongPressing] = createSignal(false)
  const [dragAnchorId, setDragAnchorId] = createSignal<string | null>(null)
  const [dragGroupIds, setDragGroupIds] = createSignal<string[]>([])
  const [dragType, setDragType] = createSignal<PracticeItemType | null>(null)
  let longPressTimer: ReturnType<typeof setTimeout> | null = null
  let dragStartX = 0
  let dragStartY = 0
  let dragMode: "select" | "deselect" | null = null
  let didLongPress = false

  const handleAutoScroll = createAutoScroller()

  const selectedPairs = createMemo<SelectedItem[]>(() =>
    Object.entries(selectedItems).map(([key, type]) => ({ key, type }))
  )

  const isSelected = (key: string) => key in selectedItems

  const selectedCount = () => Object.keys(selectedItems).length

  const resetSelection = () => {
    batch(() => {
      for (const key of Object.keys(selectedItems)) {
        setSelectedItems(key, undefined as unknown as PracticeItemType)
      }
    })
    setAnchorId(null)
  }

  const setSelected = (ids: string[], type: PracticeItemType, selected: boolean) => {
    batch(() => {
      for (const id of ids) {
        if (selected) {
          setSelectedItems(id, type)
        } else {
          setSelectedItems(id, undefined as unknown as PracticeItemType)
        }
      }
    })
  }

  const setOnlySelected = (ids: string[], type: PracticeItemType) => {
    batch(() => {
      for (const key of Object.keys(selectedItems)) {
        setSelectedItems(key, undefined as unknown as PracticeItemType)
      }
      for (const id of ids) {
        setSelectedItems(id, type)
      }
    })
  }

  const toggleAll = <T>(
    items: T[],
    keyExtractor: (item: T) => string,
    type: PracticeItemType,
    checked: boolean
  ) => {
    batch(() => {
      for (const item of items) {
        if (checked) {
          setSelectedItems(keyExtractor(item), type)
        } else {
          setSelectedItems(keyExtractor(item), undefined as unknown as PracticeItemType)
        }
      }
    })
  }

  const handlePointerDown = (e: PointerEvent, id: string, type: PracticeItemType, groupIds: string[]) => {
    e.preventDefault()
    dragStartX = e.clientX
    dragStartY = e.clientY
    setDragAnchorId(id)
    setDragGroupIds(groupIds)
    setDragType(type)

    longPressTimer = setTimeout(() => {
      setIsLongPressing(true)
      didLongPress = true

      const isAlreadySelected = id in selectedItems

      if (isAlreadySelected) {
        dragMode = "deselect"
        setSelectedItems(id, undefined as unknown as PracticeItemType)
      } else {
        dragMode = "select"
        setSelectedItems(id, type)
        setAnchorId(id)
      }

      if ("vibrate" in navigator) {
        navigator.vibrate(50)
      }

      longPressTimer = null
    }, LONG_PRESS_DURATION)

    document.addEventListener("pointermove", handlePointerMove, { passive: true })
    document.addEventListener("pointerup", handlePointerUp)
    document.addEventListener("pointercancel", handlePointerUp)
  }

  const handlePointerMove = (e: PointerEvent) => {
    if (longPressTimer !== null) {
      const dx = e.clientX - dragStartX
      const dy = e.clientY - dragStartY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > LONG_PRESS_TOLERANCE) {
        clearTimeout(longPressTimer)
        longPressTimer = null
        handlePointerUp()
        return
      }
    }

    if (isLongPressing()) {
      const itemId = getItemIdAtPoint(e.clientX, e.clientY, "data-import-item-id")
      const groupIds = dragGroupIds()
      const anchor = dragAnchorId()
      const type = dragType()

      if (itemId && anchor && type && groupIds.includes(itemId) && groupIds.includes(anchor)) {
        const range = calculateRange(groupIds, anchor, itemId)

        if (dragMode === "deselect") {
          setSelected(range, type, false)
        } else {
          setSelected(range, type, true)
        }
      }

      handleAutoScroll(e.clientY)
    }
  }

  const handlePointerUp = () => {
    if (longPressTimer !== null) {
      clearTimeout(longPressTimer)
      longPressTimer = null
    }

    if (didLongPress) {
      document.addEventListener(
        "click",
        (e) => {
          e.stopPropagation()
          e.preventDefault()
        },
        { capture: true, once: true }
      )
    }

    setIsLongPressing(false)
    setDragAnchorId(null)
    setDragGroupIds([])
    setDragType(null)
    dragMode = null
    didLongPress = false

    document.removeEventListener("pointermove", handlePointerMove)
    document.removeEventListener("pointerup", handlePointerUp)
    document.removeEventListener("pointercancel", handlePointerUp)
  }

  const handleItemClick = (e: MouseEvent, id: string, type: PracticeItemType, allIdsInGroup: string[]) => {
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
      setOnlySelected(range, type)
      return
    }

    // 2. Meta/Ctrl-Click (Toggle Selection)
    if (metaKey) {
      if (id in selectedItems) {
        setSelectedItems(id, undefined as unknown as PracticeItemType)
      } else {
        setSelectedItems(id, type)
      }
      setAnchorId(id)
      return
    }

    // 3. Regular Click (Single Selection)
    if (id in selectedItems && Object.keys(selectedItems).length === 1) {
      resetSelection()
    } else {
      setOnlySelected([id], type)
      setAnchorId(id)
    }
  }

  return {
    selectedItems,
    selectedPairs,
    isSelected,
    handleItemClick,
    handlePointerDown,
    resetSelection,
    selectedCount,
    toggleAll,
  }
}
