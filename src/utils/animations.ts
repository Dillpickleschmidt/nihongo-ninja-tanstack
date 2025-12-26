// utils/animations.ts

export const ANIMATION_CONFIG = {
  duration: 300,
  distance: 30,
  easings: {
    transform: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacityEnter: "cubic-bezier(0.25, 1, 0.5, 1)",
    opacityExit: "cubic-bezier(0.5, 0, 0.75, 0)",
  },
} as const

export type Position = "left" | "right" | "up" | "down"

function getTranslateValue(position: Position, distance: number): string {
  switch (position) {
    case "left":
      return `translate3d(${-distance}px, 0, 0)`
    case "right":
      return `translate3d(${distance}px, 0, 0)`
    case "up":
      return `translate3d(0, ${-distance}px, 0)`
    case "down":
      return `translate3d(0, ${distance}px, 0)`
  }
}

export function getInitialAnimationStyles(
  initialPosition: Position,
  withOpacity = true,
  distance: number = ANIMATION_CONFIG.distance,
): Record<string, string> {
  const styles: Record<string, string> = {
    "will-change": "transform, opacity",
    "backface-visibility": "hidden",
    transform: getTranslateValue(initialPosition, distance),
  }

  if (withOpacity) {
    styles.opacity = "0"
  }

  return styles
}

export function animateElementIn(
  element: HTMLElement,
  initialPosition: Position,
  options: { withOpacity?: boolean; duration?: number; distance?: number } = {},
): Promise<void> {
  const {
    withOpacity = true,
    duration = ANIMATION_CONFIG.duration,
    distance = ANIMATION_CONFIG.distance,
  } = options

  return new Promise((resolve) => {
    element.style.transition = "none"
    element.style.transform = getTranslateValue(initialPosition, distance)
    if (withOpacity) {
      element.style.opacity = "0"
    }

    void element.offsetHeight // Force reflow

    const transitions = [
      `transform ${duration}ms ${ANIMATION_CONFIG.easings.transform}`,
    ]
    if (withOpacity) {
      transitions.push(
        `opacity ${duration}ms ${ANIMATION_CONFIG.easings.opacityEnter}`,
      )
    }
    element.style.transition = transitions.join(", ")

    requestAnimationFrame(() => {
      element.style.transform = "translate3d(0, 0, 0)"
      if (withOpacity) {
        element.style.opacity = "1"
      }
    })

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName === "transform") {
        element.removeEventListener("transitionend", handleTransitionEnd)
        element.style.willChange = ""
        resolve()
      }
    }
    element.addEventListener("transitionend", handleTransitionEnd)
  })
}

export function animateElementOut(
  element: HTMLElement,
  exitPosition: Position,
  options: { withOpacity?: boolean; duration?: number; distance?: number } = {},
): Promise<void> {
  const {
    withOpacity = true,
    duration = ANIMATION_CONFIG.duration,
    distance = ANIMATION_CONFIG.distance,
  } = options

  return new Promise((resolve) => {
    // Hint to browser for GPU acceleration
    element.style.willChange = "transform, opacity"
    element.style.backfaceVisibility = "hidden"

    const transitions = [
      `transform ${duration}ms ${ANIMATION_CONFIG.easings.transform}`,
    ]
    if (withOpacity) {
      transitions.push(
        `opacity ${duration}ms ${ANIMATION_CONFIG.easings.opacityExit}`,
      )
    }
    element.style.transition = transitions.join(", ")

    requestAnimationFrame(() => {
      element.style.transform = getTranslateValue(exitPosition, distance)
      if (withOpacity) {
        element.style.opacity = "0"
      }
    })

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName === "transform") {
        element.removeEventListener("transitionend", handleTransitionEnd)
        element.style.willChange = ""
        resolve()
      }
    }
    element.addEventListener("transitionend", handleTransitionEnd)
  })
}

// Animates element when it enters/exits the "safe zone" (viewport minus offsets).
// Uses sentinel wrapper to decouple position tracking from animation (no feedback loops).
export function observeElementForAnimation(
  element: HTMLElement,
  options: {
    screenBottomOffset?: number
    screenTopOffset?: number
    initialPosition?: Position
    startVisible?: boolean
    noExit?: boolean
  } = {},
): () => void {
  const {
    screenBottomOffset = 50,
    screenTopOffset = 50,
    initialPosition = "left",
    startVisible = false,
    noExit = false,
  } = options

  // Apply initial animation styles only if element should start hidden
  if (!startVisible) {
    Object.assign(element.style, getInitialAnimationStyles(initialPosition))
  }

  // Create sentinel wrapper (observing this instead of element avoids animation feedback)
  const sentinel = document.createElement("div")
  // Copy snap classes to sentinel so scroll-snap still works
  if (element.classList.contains("snap-start"))
    sentinel.classList.add("snap-start")
  if (element.classList.contains("snap-center"))
    sentinel.classList.add("snap-center")
  if (element.classList.contains("snap-end")) sentinel.classList.add("snap-end")
  element.parentNode?.insertBefore(sentinel, element)
  sentinel.appendChild(element)

  let isVisible = startVisible
  let lastScrollY = window.scrollY

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const currentScrollY = window.scrollY
        const isScrollingDown = currentScrollY > lastScrollY
        lastScrollY = currentScrollY

        if (entry.isIntersecting && !isVisible) {
          isVisible = true
          animateElementIn(element, initialPosition)
        } else if (!entry.isIntersecting && isVisible && !noExit) {
          isVisible = false
          // For vertical animations, exit opposite to scroll direction
          const isVertical =
            initialPosition === "up" || initialPosition === "down"
          const exitPosition = isVertical
            ? isScrollingDown
              ? "up"
              : "down"
            : initialPosition
          animateElementOut(element, exitPosition)
        }
      })
    },
    {
      rootMargin: `-${screenTopOffset}% 0px -${screenBottomOffset}% 0px`,
      threshold: 0,
    },
  )

  observer.observe(sentinel)

  return () => {
    observer.disconnect()
    sentinel.parentNode?.insertBefore(element, sentinel)
    sentinel.remove()
  }
}
