/**
 * Core primitive for scroll-aware visibility detection.
 * Detects when an element enters/exits the viewport and tracks scroll direction.
 */
export function createScrollObserver(
  element: HTMLElement,
  callbacks: {
    onEnter?: () => void
    onExitUp?: () => void
    onExitDown?: () => void
  },
  options?: { rootMargin?: string },
): () => void {
  const { rootMargin = "-50% 0px -50% 0px" } = options ?? {}
  let isVisible = false
  let lastScrollY = window.scrollY

  const observer = new IntersectionObserver(
    (entries) => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY
      lastScrollY = currentScrollY

      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          isVisible = true
          callbacks.onEnter?.()
        } else if (!entry.isIntersecting && isVisible) {
          // Only mark as not visible if an exit callback exists and is called
          if (isScrollingDown) {
            if (callbacks.onExitDown) {
              isVisible = false
              callbacks.onExitDown()
            }
          } else {
            if (callbacks.onExitUp) {
              isVisible = false
              callbacks.onExitUp()
            }
          }
        }
      })
    },
    { rootMargin, threshold: 0 },
  )

  observer.observe(element)
  return () => observer.disconnect()
}

export function observeOneWaySnap(element: HTMLElement): () => void {
  const snapClass = element.classList.contains("snap-start")
    ? "snap-start"
    : element.classList.contains("snap-center")
      ? "snap-center"
      : element.classList.contains("snap-end")
        ? "snap-end"
        : null

  if (!snapClass) return () => {}

  // Create zero-height marker at top of element
  const topMarker = document.createElement("div")
  element.prepend(topMarker)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // requestAnimationFrame to fix some subtle race condition
        requestAnimationFrame(() => {
          if (entry.isIntersecting) {
            element.classList.remove(snapClass)
            if (element.parentElement?.classList.contains(snapClass)) {
              element.parentElement.classList.remove(snapClass)
            }
          } else if (entry.boundingClientRect.top >= 0) {
            element.classList.add(snapClass)
            if (
              element.parentElement?.classList.contains(snapClass) === false
            ) {
              element.parentElement?.classList.add(snapClass)
            }
          }
        })
      })
    },
    { rootMargin: "0px 0px -80% 0px", threshold: 0 },
  )

  observer.observe(topMarker)

  return () => {
    observer.disconnect()
    topMarker.remove()
  }
}
