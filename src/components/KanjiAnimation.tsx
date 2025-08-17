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
  svgPath: string
  styleSettings?: Partial<KanjiStyleSettings>
  displaySettings?: Partial<KanjiDisplaySettings>
  animationSettings?: Partial<KanjiAnimationSettings>
  // Settings change callbacks
  onDisplaySettingsChange?: (settings: KanjiDisplaySettings) => void
  onAnimationSettingsChange?: (settings: KanjiAnimationSettings) => void
  class?: string
  children?: JSX.Element | ((ref: KanjiAnimationRef) => JSX.Element)
}

export function KanjiAnimation(props: KanjiAnimationProps) {
  // -----------------------------
  // State
  // -----------------------------
  const [svgContent, setSvgContent] = createSignal<string>("")
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

  // Notify parent of settings changes
  createEffect(() => {
    props.onDisplaySettingsChange?.(displaySettings())
  })

  createEffect(() => {
    props.onAnimationSettingsChange?.(animationSettings())
  })

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

    // Apply size from styleSettings
    svgRef.setAttribute("width", styleSettings().size.toString())
    svgRef.setAttribute("height", styleSettings().size.toString())

    if (styleSettings().showGrid) {
      // Remove any existing grid
      svgRef.querySelector("#kanji-grid")?.remove()

      const gridGroup = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g",
      )
      gridGroup.id = "kanji-grid"
      gridGroup.style.opacity = "0.3"

      // Vertical line
      const vLine = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      )
      vLine.setAttribute("d", "M54.5,0 L54.5,109")
      vLine.setAttribute("stroke", "rgb(163 163 163)")
      vLine.setAttribute("stroke-width", "0.5")
      vLine.setAttribute("stroke-dasharray", "3,3")
      vLine.setAttribute("fill", "none")
      gridGroup.appendChild(vLine)

      // Horizontal line
      const hLine = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      )
      hLine.setAttribute("d", "M0,54.5 L109,54.5")
      hLine.setAttribute("stroke", "rgb(163 163 163)")
      hLine.setAttribute("stroke-width", "0.5")
      hLine.setAttribute("stroke-dasharray", "3,3")
      hLine.setAttribute("fill", "none")
      gridGroup.appendChild(hLine)

      svgRef.insertBefore(gridGroup, svgRef.firstChild)
    }
    // --- End grid setup ---

    // Style background strokes
    svgRef.querySelectorAll('path[id*="-s"]').forEach((path) => {
      const pathEl = path as SVGPathElement
      pathEl.style.stroke = styleSettings().strokeColor
      pathEl.style.strokeWidth = styleSettings().strokeWidth.toString()
      pathEl.style.fill = "none"
      pathEl.style.strokeLinecap = "round"
      pathEl.style.strokeLinejoin = "round"
    })

    // Handle stroke numbers, dots, and direction lines
    const strokeNumbers = svgRef.querySelector('g[id*="StrokeNumbers"]')
    if (strokeNumbers) {
      const numbersEl = strokeNumbers as SVGElement
      numbersEl.style.display = "none"
      numbersEl.style.opacity = "0"
      numbersEl.style.transition = "opacity 0.25s ease-in"

      // Create separate groups for dots and direction lines
      const strokePaths = svgRef.querySelectorAll('path[id*="-s"]')

      // Remove existing groups
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

      // Color each number and create matching dots/lines
      raphaelColors.reset()
      const numberTexts = numbersEl.querySelectorAll("text")
      numberTexts.forEach((text, index) => {
        const color = raphaelColors.getColor()
        const textEl = text as SVGTextElement
        textEl.style.fill = color
        textEl.style.fontSize = "10px"
        textEl.style.fontWeight = "500"

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

    // Reset to background state
    resetToBackground()
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

    const strokePaths = svgRef.querySelectorAll('path[id*="-s"]')
    const opacity = animationSettings().enabled ? "0.3" : "1"

    strokePaths.forEach(
      (path) => ((path as SVGPathElement).style.opacity = opacity),
    )

    // Update each element based on animation state and individual props
    const canShow = !animationSettings().enabled
    updateElement(
      'g[id*="StrokeNumbers"]',
      canShow && displaySettings().numbers,
    )
    updateElement("#stroke-dots", canShow && displaySettings().startDots)
    updateElement(
      "#direction-lines",
      canShow && displaySettings().directionLines,
    )

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

      // Show elements based on their individual props
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
  const loadSvg = async () => {
    if (!props.svgPath) return
    try {
      setSvgContent(await (await fetch(props.svgPath)).text())
    } catch (error) {
      console.error("Failed to load SVG:", error)
    }
  }

  onMount(() => {
    loadSvg()
  })

  // Watch for prop changes and update visibility
  createEffect(() => {
    // Track all reactive dependencies explicitly
    const enableAnimate = animationSettings().enabled
    const isComplete = animationComplete()
    const showNums = displaySettings().numbers
    const showDots = displaySettings().startDots
    const showLines = displaySettings().directionLines

    if (svgRef) {
      const canShow = isComplete || !enableAnimate

      updateElement('g[id*="StrokeNumbers"]', canShow && showNums)
      updateElement("#stroke-dots", canShow && showDots)
      updateElement("#direction-lines", canShow && showLines)
    }
  })

  onCleanup(() => {
    if (animationId) cancelAnimationFrame(animationId)
  })

  createEffect(() => {
    const content = svgContent()
    if (content && containerRef) {
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
    const content = svgContent()

    if (
      shouldAutoplay &&
      content &&
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
      <div ref={containerRef} innerHTML={svgContent()} />
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
