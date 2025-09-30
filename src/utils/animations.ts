// utils/animations.ts

export const ANIMATION_CONFIG = {
  duration: 300,
  easings: {
    transform: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacityEnter: "cubic-bezier(0.25, 1, 0.5, 1)", // Fast start, slow end
    opacityExit: "cubic-bezier(0.5, 0, 0.75, 0)", // Slow start, fast end
  },
} as const

type Direction = "left" | "right" | "up" | "down"

export function createSlideWithFadeInAnimation(
  element: HTMLElement,
  direction: Direction,
  options: { withOpacity?: boolean; duration?: number } = {},
) {
  const { withOpacity = true, duration = ANIMATION_CONFIG.duration } = options
  const animations: Animation[] = []

  // Ensure element has position relative for left/top to work
  if (element.style.position === "" || element.style.position === "static") {
    element.style.position = "relative"
  }

  // Get starting position values based on desired visual movement direction
  const getStartPosition = (dir: Direction) => {
    switch (dir) {
      case "left":
        return { left: "30px" } // Start from right, slide left
      case "right":
        return { left: "-30px" } // Start from left, slide right
      case "up":
        return { top: "30px" } // Start from below, slide up
      case "down":
        return { top: "-30px" } // Start from above, slide down
    }
  }

  const getEndPosition = (dir: Direction) => {
    switch (dir) {
      case "left":
      case "right":
        return { left: "0px" }
      case "up":
      case "down":
        return { top: "0px" }
    }
  }

  // Position animation
  const posAnim = element.animate([getStartPosition(direction), getEndPosition(direction)], {
    duration: duration,
    easing: ANIMATION_CONFIG.easings.transform,
    fill: "forwards",
  })
  animations.push(posAnim)

  // Opacity animation (if requested)
  if (withOpacity) {
    const opacityAnim = element.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: duration,
      easing: ANIMATION_CONFIG.easings.opacityEnter,
      fill: "forwards",
    })
    animations.push(opacityAnim)
  }

  return Promise.all(animations.map((anim) => anim.finished))
}

export function createSlideWithFadeOutAnimation(
  element: HTMLElement,
  direction: Direction,
) {
  // Ensure element has position relative for left/top to work
  if (element.style.position === "" || element.style.position === "static") {
    element.style.position = "relative"
  }

  // Get ending position values based on desired visual movement direction
  const getStartPosition = (dir: Direction) => {
    switch (dir) {
      case "left":
      case "right":
        return { left: "0px" }
      case "up":
      case "down":
        return { top: "0px" }
    }
  }

  const getEndPosition = (dir: Direction) => {
    switch (dir) {
      case "left":
        return { left: "-30px" } // End to the left
      case "right":
        return { left: "30px" } // End to the right
      case "up":
        return { top: "-30px" } // End above
      case "down":
        return { top: "30px" } // End below
    }
  }

  const positionAnim = element.animate(
    [getStartPosition(direction), getEndPosition(direction)],
    {
      duration: ANIMATION_CONFIG.duration,
      easing: ANIMATION_CONFIG.easings.transform,
      fill: "forwards",
    },
  )

  const opacityAnim = element.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: ANIMATION_CONFIG.duration,
    easing: ANIMATION_CONFIG.easings.opacityExit,
    fill: "forwards",
  })

  return Promise.all([positionAnim.finished, opacityAnim.finished])
}

export function prepareElementForEnter(
  element: HTMLElement,
  direction: Direction,
  withOpacity = true,
) {
  // Ensure element has position relative for left/top to work
  if (element.style.position === "" || element.style.position === "static") {
    element.style.position = "relative"
  }

  // Set initial position based on desired visual movement direction
  switch (direction) {
    case "left":
      element.style.left = "30px" // Start from right, slide left
      break
    case "right":
      element.style.left = "-30px" // Start from left, slide right
      break
    case "up":
      element.style.top = "30px" // Start from below, slide up
      break
    case "down":
      element.style.top = "-30px" // Start from above, slide down
      break
  }

  if (withOpacity) {
    element.style.opacity = "0"
  }
}

// Animation configuration for component-specific animations
const COMPONENT_ANIMATION_CONFIG = {
  "[data-word-hierarchy-progress]": { direction: "right" as const, baseDelay: 0, staggerDelay: 0 },
  "[data-word-hierarchy-content]": { direction: "right" as const, baseDelay: 75, staggerDelay: 0 },
  "[data-history-item]": { direction: "left" as const, baseDelay: 0, staggerDelay: 0 },
  "[data-featured-item]": { direction: "left" as const, baseDelay: 0, staggerDelay: 50 },
  "[data-struggles-item]": { direction: "left" as const, baseDelay: 0, staggerDelay: 0 },
  "[data-lessons-section]": { direction: "up" as const, baseDelay: 0, staggerDelay: 0 },
} as const

// Utility function for components to trigger their own animations
export function triggerComponentAnimations(selectors: string[]) {
  selectors.forEach((selector) => {
    const config = COMPONENT_ANIMATION_CONFIG[selector as keyof typeof COMPONENT_ANIMATION_CONFIG]
    if (!config) return

    const elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>
    elements.forEach((element, index) => {
      if (element) {
        prepareElementForEnter(element, config.direction, true)

        const delay = config.baseDelay + (index * config.staggerDelay)
        requestAnimationFrame(() => {
          setTimeout(() => {
            createSlideWithFadeInAnimation(element, config.direction, {
              duration: ANIMATION_CONFIG.duration,
              withOpacity: true,
            })
          }, delay)
        })
      }
    })
  })
}
