import { createSignal, createEffect, onCleanup } from "solid-js"

/**
 * Manages scroll-to-incomplete lesson behavior with visual feedback
 * Returns refs handler, scroll callback, blinking state, and button visibility
 */
export function useScrollToIncomplete(getFirstIncompleteIndex: () => number) {
  const lessonRefs: HTMLElement[] = []
  const [blinkingLessonIndex, setBlinkingLessonIndex] = createSignal<
    number | null
  >(null)
  const [isTargetVisible, setIsTargetVisible] = createSignal(false)

  const handleLessonRef = (el: HTMLElement, index: number) => {
    lessonRefs[index] = el
  }

  const handleScrollToNext = () => {
    const firstIncompleteIndex = getFirstIncompleteIndex()
    if (firstIncompleteIndex >= 0) {
      const element = lessonRefs[firstIncompleteIndex]
      if (element) {
        // Trigger blink animation
        setBlinkingLessonIndex(firstIncompleteIndex)

        // Scroll to element
        element.scrollIntoView({ behavior: "smooth", block: "center" })

        // Remove blink after animation completes (1.2s)
        setTimeout(() => setBlinkingLessonIndex(null), 1200)
      }
    }
  }

  // Hide button when target is visible
  createEffect(() => {
    const firstIncompleteIndex = getFirstIncompleteIndex()
    const targetElement =
      firstIncompleteIndex >= 0 ? lessonRefs[firstIncompleteIndex] : null

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
    handleLessonRef,
    handleScrollToNext,
    blinkingLessonIndex,
    shouldShowButton: () =>
      getFirstIncompleteIndex() >= 0 && !isTargetVisible(),
  }
}
