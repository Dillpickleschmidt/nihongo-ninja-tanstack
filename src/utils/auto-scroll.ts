// src/utils/auto-scroll.ts

export interface AutoScrollerOptions {
  edgeThreshold?: number
  maxSpeed?: number
}

/**
 * Creates an auto-scroll handler for drag operations
 * Scrolls the window when pointer gets close to screen edges
 */
export function createAutoScroller(options: AutoScrollerOptions = {}) {
  const edgeThreshold = options.edgeThreshold ?? 80
  const maxSpeed = options.maxSpeed ?? 20

  return (clientY: number) => {
    const distFromTop = clientY
    const distFromBottom = window.innerHeight - clientY

    if (distFromTop < edgeThreshold) {
      // Near top: scroll up
      const intensity = 1 - distFromTop / edgeThreshold
      window.scrollBy(0, -Math.round(intensity * maxSpeed))
      return
    }

    if (distFromBottom < edgeThreshold) {
      // Near bottom: scroll down
      const intensity = 1 - distFromBottom / edgeThreshold
      window.scrollBy(0, Math.round(intensity * maxSpeed))
    }
  }
}
