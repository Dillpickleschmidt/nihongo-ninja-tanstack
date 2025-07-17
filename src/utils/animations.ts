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
  options: { withOpacity?: boolean } = {},
) {
  const { withOpacity = true } = options
  const animations: Animation[] = []

  // Get starting transform values based on desired visual movement direction
  const getStartTransform = (dir: Direction) => {
    switch (dir) {
      case "left":
        return "translateX(30px)" // Start from right, slide left
      case "right":
        return "translateX(-30px)" // Start from left, slide right
      case "up":
        return "translateY(30px)" // Start from below, slide up
      case "down":
        return "translateY(-30px)" // Start from above, slide down
    }
  }

  // Transform animation
  animations.push(
    element.animate(
      [
        { transform: getStartTransform(direction) },
        {
          transform:
            direction === "left" || direction === "right"
              ? "translateX(0px)"
              : "translateY(0px)",
        },
      ],
      {
        duration: ANIMATION_CONFIG.duration,
        easing: ANIMATION_CONFIG.easings.transform,
        fill: "forwards",
      },
    ),
  )

  // Opacity animation (if requested)
  if (withOpacity) {
    animations.push(
      element.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: ANIMATION_CONFIG.duration,
        easing: ANIMATION_CONFIG.easings.opacityEnter,
        fill: "forwards",
      }),
    )
  }

  return Promise.all(animations.map((anim) => anim.finished))
}

export function createSlideWithFadeOutAnimation(
  element: HTMLElement,
  direction: Direction,
) {
  // Get ending transform values based on desired visual movement direction
  const getEndTransform = (dir: Direction) => {
    switch (dir) {
      case "left":
        return "translateX(-30px)" // End to the left
      case "right":
        return "translateX(30px)" // End to the right
      case "up":
        return "translateY(-30px)" // End above
      case "down":
        return "translateY(30px)" // End below
    }
  }

  const transformAnim = element.animate(
    [
      {
        transform:
          direction === "left" || direction === "right"
            ? "translateX(0px)"
            : "translateY(0px)",
      },
      { transform: getEndTransform(direction) },
    ],
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

  return Promise.all([transformAnim.finished, opacityAnim.finished])
}

export function prepareElementForEnter(
  element: HTMLElement,
  direction: Direction,
  withOpacity = true,
) {
  // Set initial transform based on desired visual movement direction
  const getStartTransform = (dir: Direction) => {
    switch (dir) {
      case "left":
        return "translateX(30px)" // Start from right, slide left
      case "right":
        return "translateX(-30px)" // Start from left, slide right
      case "up":
        return "translateY(30px)" // Start from below, slide up
      case "down":
        return "translateY(-30px)" // Start from above, slide down
    }
  }

  element.style.transform = getStartTransform(direction)
  if (withOpacity) {
    element.style.opacity = "0"
  }
}
