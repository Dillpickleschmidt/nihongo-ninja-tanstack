import { createSignal, createEffect, onCleanup } from "solid-js"

export function useScrollToIncomplete(getFirstIncompleteIndex: () => number) {
  const tileRefs: HTMLElement[] = []
  const [blinkingTileIndex, setBlinkingTileIndex] = createSignal<number | null>(
    null,
  )
  const [isTargetVisible, setIsTargetVisible] = createSignal(false)

  const handleTileRef = (el: HTMLElement, index: number) => {
    tileRefs[index] = el
  }

  const handleScrollToNext = () => {
    const firstIncompleteIndex = getFirstIncompleteIndex()
    if (firstIncompleteIndex >= 0) {
      const element = tileRefs[firstIncompleteIndex]
      if (element) {
        // Trigger blink animation
        setBlinkingTileIndex(firstIncompleteIndex)

        // Scroll to element
        element.scrollIntoView({ behavior: "smooth", block: "center" })

        // Remove blink after animation completes (1.2s)
        setTimeout(() => setBlinkingTileIndex(null), 1200)
      }
    }
  }

  // Hide button when target is visible
  createEffect(() => {
    const firstIncompleteIndex = getFirstIncompleteIndex()
    const targetElement =
      firstIncompleteIndex >= 0 ? tileRefs[firstIncompleteIndex] : null

    if (targetElement) {
      const checkPosition = () => {
        const isAtOrAboveMiddle =
          targetElement.getBoundingClientRect().top < window.innerHeight / 2
        setIsTargetVisible(isAtOrAboveMiddle)
      }

      window.addEventListener("scroll", checkPosition, { passive: true })
      checkPosition() // Initial check
      onCleanup(() => window.removeEventListener("scroll", checkPosition))
    } else {
      setIsTargetVisible(false)
    }
  })

  return {
    handleTileRef,
    handleScrollToNext,
    blinkingTileIndex,
    shouldShowButton: () =>
      getFirstIncompleteIndex() >= 0 && !isTargetVisible(),
  }
}
