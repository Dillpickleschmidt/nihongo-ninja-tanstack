import { createSignal, onMount, onCleanup, createEffect } from "solid-js"
import { raphaelColors } from "../utils/raphael-colors"

interface Point {
  x: number
  y: number
}

interface KanjiAnimationProps {
  svgPath: string
  strokeWidth?: number
  strokeColor?: string
  showGrid?: boolean
  size?: number // square size in px
  showNumbers?: boolean
  speed?: number // 0 = slow, 0.5 = medium, 1 = fast
  enableAnimate?: boolean // when false, shows fully filled character
  onControlsReady?: (controls: {
    animate: () => void
    reset: () => void
    isAnimating: () => boolean
    toggleNumbers: (show: boolean) => void
    animationComplete: () => boolean
  }) => void
  class?: string
}

export function KanjiAnimation(props: KanjiAnimationProps) {
  // -----------------------------
  // State
  // -----------------------------
  const [svgContent, setSvgContent] = createSignal<string>("")
  const [isAnimating, setIsAnimating] = createSignal(false)
  const [showNumbers, setShowNumbers] = createSignal(props.showNumbers ?? false)
  const [animationComplete, setAnimationComplete] = createSignal(false)

  let svgRef: SVGSVGElement | undefined
  let containerRef: HTMLDivElement | undefined
  let animationId: number | undefined

  // -----------------------------
  // Config
  // -----------------------------
  const config = () => ({
    strokeWidth: props.strokeWidth ?? 3,
    strokeColor: props.strokeColor ?? "#ffffff",
    size: props.size ?? 128,
    speed: props.speed ?? 0.5,
    enableAnimate: props.enableAnimate ?? true,
  })

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
    const { size, strokeColor, strokeWidth } = config()

    svgRef.setAttribute("width", size.toString())
    svgRef.setAttribute("height", size.toString())

    if (props.showGrid) {
      svgRef.querySelector("#kanji-grid")?.remove()
      const viewBox = svgRef.getAttribute("viewBox")
      const boxSize = viewBox ? Number(viewBox.split(" ")[2]) || 109 : 109
      const mid = boxSize / 2

      const gridGroup = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g",
      )
      Object.assign(gridGroup, { id: "kanji-grid" })
      gridGroup.style.opacity = "0.3"

      const createLine = (d: string) => {
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        )
        line.setAttribute("d", d)
        line.setAttribute("stroke", "rgb(163 163 163)")
        line.setAttribute("stroke-width", "0.5")
        line.setAttribute("stroke-dasharray", "3,3")
        line.setAttribute("fill", "none")
        return line
      }

      gridGroup.append(
        createLine(`M${mid},0 L${mid},${boxSize}`),
        createLine(`M0,${mid} L${boxSize},${mid}`),
      )
      svgRef.insertBefore(gridGroup, svgRef.firstChild)
    }

    svgRef.querySelectorAll('path[id*="-s"]').forEach((path) => {
      const pathEl = path as SVGPathElement
      pathEl.style.stroke = strokeColor
      pathEl.style.strokeWidth = strokeWidth.toString()
      pathEl.style.fill = "none"
      pathEl.style.strokeLinecap = "round"
      pathEl.style.strokeLinejoin = "round"
    })

    const strokeNumbers = svgRef.querySelector('g[id*="StrokeNumbers"]')
    if (strokeNumbers) {
      const numbersEl = strokeNumbers as SVGElement
      numbersEl.style.display = "none"
      numbersEl.style.opacity = "0"
      numbersEl.style.transition = "opacity 0.25s ease-in"

      // Color each number individually using raphael colors
      raphaelColors.reset()
      const numberTexts = numbersEl.querySelectorAll("text")
      numberTexts.forEach((text) => {
        const textEl = text as SVGTextElement
        textEl.style.fill = raphaelColors.getColor()
        textEl.style.fontSize = "10px"
        textEl.style.fontWeight = "500"
      })
    }

    resetToBackground()
  }

  // -----------------------------
  // Animation
  // -----------------------------
  const getSpeedMultiplier = () => 100 - 75 * Math.sqrt(config().speed)
  const getStrokeDelay = () => 200 - 175 * Math.sqrt(config().speed)

  const updateStrokeNumbers = (show: boolean, moveToTop = false) => {
    const strokeNumbers = svgRef?.querySelector('g[id*="StrokeNumbers"]')
    if (strokeNumbers) {
      const numbersEl = strokeNumbers as SVGElement
      if (show) {
        // For fade-in: set display first, then opacity on next frame
        numbersEl.style.display = "block"
        if (moveToTop) svgRef!.appendChild(numbersEl)
        requestAnimationFrame(() => {
          numbersEl.style.opacity = "1"
        })
      } else {
        // For fade-out: just set opacity (display stays block)
        numbersEl.style.opacity = "0"
      }
    }
  }

  const animateSingleStroke = (
    path: SVGPathElement,
    points: Point[],
    animPath: SVGPathElement,
  ): Promise<void> => {
    return new Promise<void>((resolve) => {
      const strokeLength = path.getTotalLength()
      const duration = Math.sqrt(strokeLength) * getSpeedMultiplier()

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

        const duration = Math.sqrt(strokeLength) * getSpeedMultiplier()

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

  const resetToBackground = () => {
    if (!svgRef) return
    const { enableAnimate } = config()

    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = undefined
    }

    svgRef.querySelector("#animation-strokes")?.remove()

    const strokePaths = svgRef.querySelectorAll('path[id*="-s"]')
    const opacity = enableAnimate ? "0.3" : "1"
    const showNums = !enableAnimate && showNumbers()

    strokePaths.forEach(
      (path) => ((path as SVGPathElement).style.opacity = opacity),
    )
    updateStrokeNumbers(showNums)

    setAnimationComplete(!enableAnimate)
  }

  const animateStrokes = async () => {
    const { enableAnimate, strokeColor, strokeWidth, speed } = config()
    if (!svgRef || isAnimating() || !enableAnimate) return

    const strokePaths = svgRef.querySelectorAll('path[id*="-s"]')
    if (strokePaths.length === 0) return

    setIsAnimating(true)
    resetToBackground()

    const animGroup = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g",
    )
    animGroup.id = "animation-strokes"
    Object.assign(animGroup.style, {
      fill: "none",
      stroke: strokeColor,
      strokeWidth: strokeWidth.toString(),
      strokeLinecap: "round",
      strokeLinejoin: "round",
    })
    svgRef.appendChild(animGroup)

    for (let i = 0; i < strokePaths.length; i++) {
      const path = strokePaths[i] as SVGPathElement
      const animPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      )
      animGroup.appendChild(animPath)

      await animateSingleStroke(path, samplePath(path, 100), animPath)

      if (i < strokePaths.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, getStrokeDelay()))
      }
    }

    setIsAnimating(false)
    setAnimationComplete(true)

    if (showNumbers()) {
      updateStrokeNumbers(true, true)
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
    if (props.onControlsReady) {
      props.onControlsReady({
        animate: animateStrokes,
        reset: resetToBackground,
        isAnimating,
        toggleNumbers: (show: boolean) => {
          setShowNumbers(show)
          if (animationComplete() && svgRef) {
            updateStrokeNumbers(show)
          }
        },
        animationComplete,
      })
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

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <div
      class={`kanji-animation ${props.class || ""}`}
      style={{ width: `${config().size}px`, height: `${config().size}px` }}
      role="img"
      aria-label="Kanji stroke order animation"
    >
      <div ref={containerRef} innerHTML={svgContent()} />
    </div>
  )
}
