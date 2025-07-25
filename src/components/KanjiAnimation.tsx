import { createSignal, onMount, onCleanup, createEffect } from "solid-js"

interface Point {
  x: number
  y: number
}

interface KanjiAnimationProps {
  svgPath?: string
  strokeWidth?: number
  strokeColor?: string
  strokeDelay?: number
  showNumbers?: boolean
  class?: string
}

export function KanjiAnimation(props: KanjiAnimationProps) {
  const [svgContent, setSvgContent] = createSignal<string>("")
  const [isAnimating, setIsAnimating] = createSignal(false)
  const [showNumbers, setShowNumbers] = createSignal(props.showNumbers ?? false)
  const [animationComplete, setAnimationComplete] = createSignal(false)
  let svgRef: SVGSVGElement | undefined
  let animationId: number | undefined

  const strokeWidth = () => props.strokeWidth ?? 3
  const strokeColor = () => props.strokeColor ?? "#ffffff"
  const strokeDelay = () => props.strokeDelay ?? 300

  const samplePath = (
    path: SVGPathElement,
    numSamples: number = 100,
  ): Point[] => {
    const points: Point[] = []
    const length = path.getTotalLength()

    for (let i = 0; i <= numSamples; i++) {
      const distance = (i / numSamples) * length
      const point = path.getPointAtLength(distance)
      points.push({ x: point.x, y: point.y })
    }

    return points
  }

  const createPathFromPoints = (points: Point[]): string => {
    if (points.length === 0) return ""

    let path = `M${points[0].x},${points[0].y}`
    for (let i = 1; i < points.length; i++) {
      path += `L${points[i].x},${points[i].y}`
    }

    return path
  }

  const setupSvg = () => {
    if (!svgRef) return

    const strokePaths = svgRef.querySelectorAll('path[id*="-s"]')
    const strokeNumbers = svgRef.querySelector('g[id*="StrokeNumbers"]')

    // Style all stroke paths
    strokePaths.forEach((path) => {
      const pathEl = path as SVGPathElement
      pathEl.style.stroke = strokeColor()
      pathEl.style.strokeWidth = strokeWidth().toString()
      pathEl.style.fill = "none"
      pathEl.style.strokeLinecap = "round"
      pathEl.style.strokeLinejoin = "round"
    })

    // Hide stroke numbers initially
    if (strokeNumbers) {
      ;(strokeNumbers as SVGElement).style.display = "none"
    }

    resetToBackground()
  }

  const animateSingleStroke = (
    path: SVGPathElement,
    points: Point[],
    animPath: SVGPathElement,
  ): Promise<void> => {
    return new Promise<void>((resolve) => {
      const start = Date.now()
      const strokeLength = path.getTotalLength()
      const duration = strokeLength * 9

      // Define speeds at different progress points
      const speedMarkers = [
        { progress: 0.0, speed: 0.2 }, // Start slow
        { progress: 0.25, speed: 2.75 }, // Speed up
        { progress: 0.5, speed: 1.5 }, // Peak speed
        { progress: 0.75, speed: 1.5 }, // Slow down
        { progress: 1.0, speed: 0.1 }, // End very slow
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

      let accumulatedProgress = 0
      let lastTime = start

      const animate = () => {
        const now = Date.now()
        const deltaTime = now - lastTime
        lastTime = now

        // Use accumulated progress to determine speed, not time progress
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

        // Only complete when accumulated progress reaches 1
        if (accumulatedProgress < 1) {
          animationId = requestAnimationFrame(animate)
        } else {
          // Ensure final state
          animPath.setAttribute("d", createPathFromPoints(points))
          resolve()
        }
      }

      animate()
    })
  }

  const resetToBackground = () => {
    if (!svgRef) return

    const strokePaths = svgRef.querySelectorAll('path[id*="-s"]')
    const strokeNumbers = svgRef.querySelector('g[id*="StrokeNumbers"]')

    // Remove any animation elements
    const animGroup = svgRef.querySelector("#animation-strokes")
    if (animGroup) animGroup.remove()

    // Show background strokes at low opacity
    strokePaths.forEach((path) => {
      ;(path as SVGPathElement).style.opacity = "0.3"
    })

    // Hide stroke numbers
    if (strokeNumbers) {
      ;(strokeNumbers as SVGElement).style.display = "none"
    }

    setAnimationComplete(false)
  }

  const animateStrokes = async () => {
    if (!svgRef || isAnimating()) return

    const strokePaths = svgRef.querySelectorAll('path[id*="-s"]')
    if (strokePaths.length === 0) return

    setIsAnimating(true)
    resetToBackground()

    // Create animation container
    const animGroup = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g",
    )
    animGroup.setAttribute("id", "animation-strokes")
    animGroup.style.fill = "none"
    animGroup.style.stroke = strokeColor()
    animGroup.style.strokeWidth = strokeWidth().toString()
    animGroup.style.strokeLinecap = "round"
    animGroup.style.strokeLinejoin = "round"
    svgRef.appendChild(animGroup)

    // Animate each stroke
    for (let i = 0; i < strokePaths.length; i++) {
      const path = strokePaths[i] as SVGPathElement
      const points = samplePath(path, 100)

      const animPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      )
      animGroup.appendChild(animPath)

      await animateSingleStroke(path, points, animPath)

      // Delay between strokes
      if (i < strokePaths.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, strokeDelay()))
      }
    }

    setIsAnimating(false)
    setAnimationComplete(true)

    // Show stroke numbers if enabled
    if (showNumbers()) {
      const strokeNumbers = svgRef.querySelector('g[id*="StrokeNumbers"]')
      if (strokeNumbers) {
        ;(strokeNumbers as SVGElement).style.display = "block"
      }
    }
  }

  const loadSvg = async () => {
    const path = props.svgPath
    if (!path) return

    try {
      const response = await fetch(path)
      const svgText = await response.text()
      setSvgContent(svgText)
    } catch (error) {
      console.error("Failed to load SVG:", error)
    }
  }

  onMount(() => {
    loadSvg()
  })

  onCleanup(() => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  })

  let containerRef: HTMLDivElement | undefined

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

  return (
    <div class={`kanji-animation ${props.class || ""}`}>
      <div ref={containerRef} innerHTML={svgContent()} />

      <div class="mt-4 space-y-2">
        <div class="space-x-2">
          <button
            onClick={animateStrokes}
            disabled={isAnimating()}
            class="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
          >
            {isAnimating() ? "Animating..." : "Animate"}
          </button>
          <button
            onClick={resetToBackground}
            class="rounded bg-gray-500 px-4 py-2 text-white"
          >
            Reset
          </button>
        </div>

        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            id="show-numbers"
            checked={showNumbers()}
            onChange={(e) => {
              setShowNumbers(e.target.checked)
              if (animationComplete() && svgRef) {
                const strokeNumbers = svgRef.querySelector(
                  'g[id*="StrokeNumbers"]',
                )
                if (strokeNumbers) {
                  ;(strokeNumbers as SVGElement).style.display = e.target
                    .checked
                    ? "block"
                    : "none"
                }
              }
            }}
            class="rounded"
          />
          <label for="show-numbers" class="text-sm text-white">
            Show stroke numbers after animation
          </label>
        </div>
      </div>
    </div>
  )
}
