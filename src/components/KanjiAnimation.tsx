import {
  createSignal,
  onMount,
  onCleanup,
  createEffect,
  type JSX,
} from "solid-js"
import { raphaelColors } from "../utils/raphael-colors"

interface Point {
  x: number
  y: number
}

export interface KanjiAnimationRef {
  play: () => void
  stop: () => void
  reset: () => void
  getState: () => { isAnimating: boolean; isComplete: boolean }
}

export interface KanjiDisplaySettings {
  numbers: boolean
  startDots: boolean
  directionLines: boolean
}

export interface KanjiAnimationSettings {
  enabled: boolean
  speed: number
  autoplay: boolean
}

export interface KanjiStyleSettings {
  strokeWidth: number
  strokeColor: string
  size: number
  showGrid: boolean
}

interface KanjiAnimationProps {
  processedSvgContent: string
  styleSettings?: Partial<KanjiStyleSettings>
  displaySettings?: Partial<KanjiDisplaySettings>
  animationSettings?: Partial<KanjiAnimationSettings>
  class?: string
  children?: JSX.Element | ((ref: KanjiAnimationRef) => JSX.Element)
}

export function KanjiAnimation(props: KanjiAnimationProps) {
  // -----------------------------
  // State
  // -----------------------------
  const [isAnimating, setIsAnimating] = createSignal(false)
  const [animationComplete, setAnimationComplete] = createSignal(false)
  const [hasAutoPlayed, setHasAutoPlayed] = createSignal(false)

  // Computed settings with defaults
  const styleSettings = () => ({
    strokeWidth: 3,
    strokeColor: "#ffffff",
    size: 128,
    showGrid: false,
    ...props.styleSettings,
  })

  const displaySettings = () => ({
    numbers: false,
    startDots: false,
    directionLines: false,
    ...props.displaySettings,
  })

  const animationSettings = () => ({
    enabled: true,
    speed: 0.5,
    autoplay: true,
    ...props.animationSettings,
  })

  // Create ref object with animation methods
  const animationRef: KanjiAnimationRef = {
    play: () => {
      if (!isAnimating() && animationSettings().enabled) {
        animateStrokes()
      }
    },
    stop: () => {
      if (isAnimating()) {
        stopAnimation()
      }
    },
    reset: () => {
      resetToBackground()
    },
    getState: () => ({
      isAnimating: isAnimating(),
      isComplete: animationComplete(),
    }),
  }

  let svgRef: SVGSVGElement | undefined
  let containerRef: HTMLDivElement | undefined
  let animationId: number | undefined

  // -----------------------------
  // Helpers
  // -----------------------------
  const samplePath = (path: SVGPathElement, numSamples = 100): Point[] => {
    const points: Point[] = []
    const length = path.getTotalLength()
    for (let i = 0; i <= numSamples; i++) {
      const distance = (i / numSamples) * length
      const point = path.getPointAtLength(distance)
      points.push({ x: point.x, y: point.y })
    }
    return points
  }

  const createPathFromPoints = (points: Point[]): string =>
    points.length === 0
      ? ""
      : `M${points[0].x},${points[0].y}${points
          .slice(1)
          .map((p) => `L${p.x},${p.y}`)
          .join("")}`

  const setupSvg = () => {
    if (!svgRef) return

    // The SVG is already pre-processed server-side, so we only need to:
    // 1. Set up client-only interactive features (dots and direction lines)
    // 2. Ensure proper state for animations

    // Handle stroke numbers, dots, and direction lines (client-only features)
    const strokeNumbers = svgRef.querySelector('g[id*="StrokeNumbers"]')
    if (strokeNumbers) {
      const numbersEl = strokeNumbers as SVGElement
      numbersEl.style.transition = "opacity 0.25s ease-in"

      // Create separate groups for dots and direction lines (not processed server-side)
      const strokePaths = svgRef.querySelectorAll('path[id*="-s"]')

      // Remove existing groups (in case of re-setup)
      svgRef.querySelector("#stroke-dots")?.remove()
      svgRef.querySelector("#direction-lines")?.remove()

      const dotsGroup = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g",
      )
      dotsGroup.id = "stroke-dots"
      dotsGroup.style.opacity = "0"
      dotsGroup.style.transition = "opacity 0.25s ease-in"

      const linesGroup = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g",
      )
      linesGroup.id = "direction-lines"
      linesGroup.style.opacity = "0"
      linesGroup.style.transition = "opacity 0.25s ease-in"

      // Style numbers and create dots/direction lines with matching colors
      raphaelColors.reset()
      const numberTexts = numbersEl.querySelectorAll("text")
      numberTexts.forEach((text, index) => {
        const color = raphaelColors.getColor()
        const textEl = text as SVGTextElement

        // Only re-style text when animations are enabled (preserve server-side styling otherwise)
        if (animationSettings().enabled) {
          textEl.style.fill = color
          textEl.style.fontSize = "10px"
          textEl.style.fontWeight = "500"
        }

        // Create dot and direction line at start of corresponding stroke
        if (index < strokePaths.length) {
          const path = strokePaths[index] as SVGPathElement
          const previewLength = 8 // Fixed length for consistent appearance

          // Create dot at start point
          const startPoint = path.getPointAtLength(0)
          const dot = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle",
          )
          dot.setAttribute("cx", startPoint.x.toString())
          dot.setAttribute("cy", startPoint.y.toString())
          dot.setAttribute("r", "2")
          dot.setAttribute("fill", color)
          dotsGroup.appendChild(dot)

          // Create direction line following the stroke curve
          const previewPoints: Point[] = []
          for (let i = 0; i <= 10; i++) {
            const distance = (i / 10) * previewLength
            const point = path.getPointAtLength(distance)
            previewPoints.push({ x: point.x, y: point.y })
          }

          const previewPath = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
          )
          const pathData = createPathFromPoints(previewPoints)
          previewPath.setAttribute("d", pathData)
          previewPath.setAttribute("stroke", color)
          previewPath.setAttribute("stroke-width", "1.5")
          previewPath.setAttribute("fill", "none")
          previewPath.setAttribute("stroke-linecap", "round")
          linesGroup.appendChild(previewPath)
        }
      })

      svgRef.appendChild(dotsGroup)
      svgRef.appendChild(linesGroup)
    }

    // Apply current visibility state for client-side features
    updateClientSideVisibility()
  }

  const updateClientSideVisibility = () => {
    if (!svgRef) return

    // Update client-side features (numbers, dots, direction lines)
    // These only show at the end of animation or when animations are disabled
    const canShow = !animationSettings().enabled || animationComplete()

    // Only manage numbers visibility when animations are enabled (server-side handles disabled case)
    if (animationSettings().enabled) {
      updateElement(
        'g[id*="StrokeNumbers"]',
        canShow && displaySettings().numbers,
        true,
      ) // Move to top
    }
    updateElement("#stroke-dots", canShow && displaySettings().startDots)
    updateElement(
      "#direction-lines",
      canShow && displaySettings().directionLines,
    )
  }

  // -----------------------------
  // Animation
  // -----------------------------

  const updateElement = (
    selector: string,
    show: boolean,
    moveToTop = false,
  ) => {
    const element = svgRef?.querySelector(selector)
    if (!element) return

    const el = element as SVGElement
    if (show) {
      if (selector.includes("StrokeNumbers")) el.style.display = "block"
      if (moveToTop) svgRef!.appendChild(el)
      requestAnimationFrame(() => {
        el.style.opacity = "1"
      })
    } else {
      el.style.opacity = "0"
    }
  }

  const animateSingleStroke = (
    path: SVGPathElement,
    points: Point[],
    animPath: SVGPathElement,
  ): Promise<void> => {
    return new Promise<void>((resolve) => {
      const strokeLength = path.getTotalLength()

      // Define speeds at different progress points
      const speedMarkers = [
        { progress: 0.0, speed: 0.2 },
        { progress: 0.25, speed: 2.75 },
        { progress: 0.5, speed: 2.75 },
        { progress: 0.75, speed: 1.5 },
        { progress: 1.0, speed: 0.1 },
      ]

      const getSpeedAtProgress = (t: number): number => {
        for (let i = 0; i < speedMarkers.length - 1; i++) {
          const current = speedMarkers[i]
          const next = speedMarkers[i + 1]

          if (t >= current.progress && t <= next.progress) {
            const segmentProgress =
              (t - current.progress) / (next.progress - current.progress)
            return (
              current.speed + (next.speed - current.speed) * segmentProgress
            )
          }
        }
        return speedMarkers[speedMarkers.length - 1].speed
      }

      const start = Date.now()
      let accumulatedProgress = 0
      let lastTime = start

      const animate = () => {
        const now = Date.now()
        const deltaTime = now - lastTime
        lastTime = now

        const duration =
          Math.sqrt(strokeLength) *
          (100 - 75 * Math.sqrt(animationSettings().speed))

        // Use accumulated progress to determine speed curve
        const currentSpeed = getSpeedAtProgress(accumulatedProgress)

        // Accumulate progress based on current speed
        const baseProgressIncrement = deltaTime / duration
        accumulatedProgress += baseProgressIncrement * currentSpeed
        accumulatedProgress = Math.min(accumulatedProgress, 1)

        const pointIndex = Math.floor(accumulatedProgress * (points.length - 1))
        const currentPoints = points.slice(0, pointIndex + 1)

        if (currentPoints.length > 0) {
          animPath.setAttribute("d", createPathFromPoints(currentPoints))
        }

        if (accumulatedProgress < 1) {
          animationId = requestAnimationFrame(animate)
        } else {
          animPath.setAttribute("d", createPathFromPoints(points))
          resolve()
        }
      }

      animate()
    })
  }

  const stopAnimation = () => {
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = undefined
    }
    setIsAnimating(false)
  }

  const resetToBackground = () => {
    if (!svgRef) return

    stopAnimation()
    svgRef.querySelector("#animation-strokes")?.remove()

    // Reset stroke opacity to server-processed state
    const strokePaths = svgRef.querySelectorAll('path[id*="-s"]')
    const opacity = animationSettings().enabled ? "0.3" : "1"
    strokePaths.forEach(
      (path) => ((path as SVGPathElement).style.opacity = opacity),
    )

    // Update client-side features
    updateClientSideVisibility()

    setAnimationComplete(!animationSettings().enabled)
  }

  const animateStrokes = async () => {
    if (!svgRef || isAnimating() || !animationSettings().enabled) return

    const strokePaths = svgRef.querySelectorAll('path[id*="-s"]')
    if (strokePaths.length === 0) return

    setIsAnimating(true)
    setAnimationComplete(false)

    // Clear any existing animation without changing isAnimating state
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = undefined
    }
    svgRef.querySelector("#animation-strokes")?.remove()

    // Set stroke opacity for animation
    strokePaths.forEach(
      (path) => ((path as SVGPathElement).style.opacity = "0.3"),
    )

    const animGroup = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g",
    )
    animGroup.id = "animation-strokes"
    Object.assign(animGroup.style, {
      fill: "none",
      stroke: styleSettings().strokeColor,
      strokeWidth: styleSettings().strokeWidth.toString(),
      strokeLinecap: "round",
      strokeLinejoin: "round",
    })
    svgRef.appendChild(animGroup)

    for (let i = 0; i < strokePaths.length; i++) {
      if (!isAnimating()) break

      const path = strokePaths[i] as SVGPathElement
      const animPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      )
      animGroup.appendChild(animPath)

      await animateSingleStroke(path, samplePath(path, 100), animPath)

      if (!isAnimating()) break

      if (i < strokePaths.length - 1) {
        await new Promise((resolve) =>
          setTimeout(resolve, 200 - 175 * Math.sqrt(animationSettings().speed)),
        )
      }
    }

    if (isAnimating()) {
      setIsAnimating(false)
      setAnimationComplete(true)

      // Show client-side elements based on their individual props
      if (displaySettings().numbers)
        updateElement('g[id*="StrokeNumbers"]', true, true)
      if (displaySettings().startDots) updateElement("#stroke-dots", true, true)
      if (displaySettings().directionLines)
        updateElement("#direction-lines", true, true)
    }
  }

  // -----------------------------
  // Lifecycle
  // -----------------------------

  // Watch for prop changes and update visibility
  createEffect(() => {
    // Update client-side visibility when settings change
    updateClientSideVisibility()
  })

  onCleanup(() => {
    if (animationId) cancelAnimationFrame(animationId)
  })

  createEffect(() => {
    if (containerRef) {
      const svg = containerRef.querySelector("svg") as SVGSVGElement
      if (svg) {
        svgRef = svg
        setupSvg()
      }
    }
  })

  // Autoplay after initial setup
  createEffect(() => {
    const shouldAutoplay = animationSettings().autoplay

    if (
      shouldAutoplay &&
      svgRef &&
      animationSettings().enabled &&
      !hasAutoPlayed() &&
      !isAnimating()
    ) {
      setHasAutoPlayed(true)
      animateStrokes()
    }
  })

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <div
      class={`kanji-animation group relative ${props.class || ""}`}
      style={{
        width: `${styleSettings().size}px`,
        height: `${styleSettings().size}px`,
      }}
      role="img"
      aria-label="Kanji stroke order animation"
    >
      <div ref={containerRef} innerHTML={props.processedSvgContent} />
      {props.children && (
        <div class="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-active:opacity-100">
          {typeof props.children === "function"
            ? props.children(animationRef)
            : props.children}
        </div>
      )}
    </div>
  )
}
