import { batch, createSignal } from "solid-js"
import { SetStoreFunction } from "solid-js/store"
import { createAutoScroller } from "@/utils/auto-scroll"
import { getItemIdAtPoint } from "@/utils/dom-helpers"

const LONG_PRESS_DURATION = 300
const LONG_PRESS_TOLERANCE = 10

/**
 * Calculates the range of items between two IDs in a list
 * Used for shift-click and drag selection
 */
function calculateRange(groupIds: string[], startId: string, endId: string): string[] {
  const startIdx = groupIds.indexOf(startId)
  const endIdx = groupIds.indexOf(endId)

  if (startIdx === -1 || endIdx === -1) {
    return []
  }

  const [min, max] = [Math.min(startIdx, endIdx), Math.max(startIdx, endIdx)]
  return groupIds.slice(min, max + 1)
}

export function useImportSelection(
  selectedKeys: Record<string, boolean>,
  setSelectedKeys: SetStoreFunction<Record<string, boolean>>
) {
  const [anchorId, setAnchorId] = createSignal<string | null>(null)

  // Long-press and drag tracking
  const [isLongPressing, setIsLongPressing] = createSignal(false)
  const [dragAnchorId, setDragAnchorId] = createSignal<string | null>(null)
  const [dragGroupIds, setDragGroupIds] = createSignal<string[]>([])
  let longPressTimer: ReturnType<typeof setTimeout> | null = null
  let dragStartX = 0
  let dragStartY = 0
  let dragMode: "select" | "deselect" | null = null
  let didLongPress = false

  const handleAutoScroll = createAutoScroller()

  const resetSelection = () => {
    batch(() => {
      for (const key of Object.keys(selectedKeys)) {
        if (selectedKeys[key]) {
          setSelectedKeys(key, false)
        }
      }
    })
    setAnchorId(null)
  }

  const setSelected = (ids: string[], selected: boolean) => {
    batch(() => {
      for (const id of ids) {
        setSelectedKeys(id, selected)
      }
    })
  }

  const setOnlySelected = (ids: string[]) => {
    batch(() => {
      // Clear all
      for (const key of Object.keys(selectedKeys)) {
        if (selectedKeys[key]) {
          setSelectedKeys(key, false)
        }
      }
      // Set new selection
      for (const id of ids) {
        setSelectedKeys(id, true)
      }
    })
  }

  const handlePointerDown = (e: PointerEvent, id: string, groupIds: string[]) => {
    e.preventDefault()
    dragStartX = e.clientX
    dragStartY = e.clientY
    setDragAnchorId(id)
    setDragGroupIds(groupIds)

    longPressTimer = setTimeout(() => {
      setIsLongPressing(true)
      didLongPress = true

      const isAlreadySelected = selectedKeys[id]

      if (isAlreadySelected) {
        dragMode = "deselect"
        setSelectedKeys(id, false)
      } else {
        dragMode = "select"
        setSelectedKeys(id, true)
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

      if (itemId && anchor && groupIds.includes(itemId) && groupIds.includes(anchor)) {
        const range = calculateRange(groupIds, anchor, itemId)

        if (dragMode === "deselect") {
          setSelected(range, false)
        } else {
          setSelected(range, true)
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
    dragMode = null
    didLongPress = false

    document.removeEventListener("pointermove", handlePointerMove)
    document.removeEventListener("pointerup", handlePointerUp)
    document.removeEventListener("pointercancel", handlePointerUp)
  }

  const handleItemClick = (e: MouseEvent, id: string, allIdsInGroup: string[]) => {
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
      setOnlySelected(range)
      return
    }

    // 2. Meta/Ctrl-Click (Toggle Selection)
    if (metaKey) {
      setSelectedKeys(id, !selectedKeys[id])
      setAnchorId(id)
      return
    }

    // 3. Regular Click (Single Selection)
    if (selectedKeys[id] && Object.values(selectedKeys).filter(Boolean).length === 1) {
      resetSelection()
    } else {
      setOnlySelected([id])
      setAnchorId(id)
    }
  }

  return {
    handleItemClick,
    handlePointerDown,
    resetSelection,
  }
}
