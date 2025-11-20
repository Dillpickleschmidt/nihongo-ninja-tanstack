import { createSignal, batch } from "solid-js"
import type { ItemStatus, ImportState } from "../types"

const LONG_PRESS_DURATION = 300
const LONG_PRESS_TOLERANCE = 10
const SCROLL_EDGE_THRESHOLD = 80
const MAX_SCROLL_SPEED = 20

export function useImportSelection() {
  const [itemStates, setItemStates] = createSignal<ImportState>({})
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

  // Find item ID under pointer using elementsFromPoint
  const getItemIdAtPoint = (x: number, y: number): string | null => {
    const elements = document.elementsFromPoint(x, y)
    for (const el of elements) {
      const itemId = (el as HTMLElement).getAttribute("data-import-item-id")
      if (itemId) return itemId
    }
    return null
  }

  // Handle auto-scroll based on pointer distance from edges
  const handleAutoScroll = (clientY: number) => {
    const distFromTop = clientY
    const distFromBottom = window.innerHeight - clientY

    let scrollAmount = 0

    if (distFromTop < SCROLL_EDGE_THRESHOLD) {
      // Near top: scroll up
      const intensity = 1 - distFromTop / SCROLL_EDGE_THRESHOLD
      scrollAmount = -Math.round(intensity * MAX_SCROLL_SPEED)
    } else if (distFromBottom < SCROLL_EDGE_THRESHOLD) {
      // Near bottom: scroll down
      const intensity = 1 - distFromBottom / SCROLL_EDGE_THRESHOLD
      scrollAmount = Math.round(intensity * MAX_SCROLL_SPEED)
    }

    if (scrollAmount !== 0) {
      window.scrollBy(0, scrollAmount)
    }
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
      const itemId = getItemIdAtPoint(e.clientX, e.clientY)
      const groupIds = dragGroupIds()
      const anchor = dragAnchorId()

      if (
        itemId &&
        anchor &&
        groupIds.includes(itemId) &&
        groupIds.includes(anchor)
      ) {
        const startIdx = groupIds.indexOf(anchor)
        const endIdx = groupIds.indexOf(itemId)
        const [min, max] = [
          Math.min(startIdx, endIdx),
          Math.max(startIdx, endIdx),
        ]
        const range = groupIds.slice(min, max + 1)

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
      const preventClick = (e: MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        document.removeEventListener("click", preventClick, true)
      }
      document.addEventListener("click", preventClick, true)
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
      const startIdx = allIdsInGroup.indexOf(currentAnchor)
      const endIdx = allIdsInGroup.indexOf(id)
      const [min, max] = [
        Math.min(startIdx, endIdx),
        Math.max(startIdx, endIdx),
      ]
      const range = allIdsInGroup.slice(min, max + 1)
      setSelectedIds(new Set(range))
      return
    }

    // 2. Meta/Ctrl-Click (Toggle Selection)
    if (metaKey) {
      const currentSelected = new Set(selectedIds())
      if (currentSelected.has(id)) currentSelected.delete(id)
      else currentSelected.add(id)

      setSelectedIds(currentSelected)
      setAnchorId(id)
      return
    }

    // 3. Regular Click (Single Selection)
    const currentSelected = new Set(selectedIds())

    if (currentSelected.has(id) && currentSelected.size === 1) {
      setSelectedIds(new Set<string>())
      setAnchorId(null)
    } else {
      setSelectedIds(new Set([id]))
      setAnchorId(id)
    }
  }

  const toggleSelectGroup = (ids: string[]) => {
    const currentSelected = new Set(selectedIds())
    const allInGroupSelected = ids.every((id) => currentSelected.has(id))

    if (allInGroupSelected) {
      ids.forEach((id) => currentSelected.delete(id))
    } else {
      ids.forEach((id) => currentSelected.add(id))
    }
    setSelectedIds(currentSelected)
    setAnchorId(null)
  }

  const applyStatus = (status: ItemStatus) => {
    const currentStates = { ...itemStates() }
    const selected = selectedIds()

    batch(() => {
      selected.forEach((id) => {
        if (status === null) delete currentStates[id]
        else currentStates[id] = status
      })
      setItemStates(currentStates)
      setSelectedIds(new Set<string>())
      setAnchorId(null)
    })
  }

  const clearSelection = () => {
    setSelectedIds(new Set<string>())
    setAnchorId(null)
  }

  return {
    itemStates,
    selectedIds,
    anchorId,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
  }
}
