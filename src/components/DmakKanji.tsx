import { createSignal, onMount, onCleanup, createEffect } from "solid-js"
import { raphaelColors } from "../utils/raphael-colors"

interface StrokeData {
  path: string
  length: number
  duration: number
  animatedElement: SVGPathElement | null
}

interface DmakKanjiProps {
  svgPath?: string
  showGrid?: boolean
  shouldShowNumbers: boolean
  colored: boolean
  onControlsReady?: (controls: {
    render: () => void
    erase: () => void
    isAnimating: () => boolean
  }) => void
  class?: string
}

export function DmakKanji(props: DmakKanjiProps) {
  const [svgContent, setSvgContent] = createSignal<string>("")
  const [strokes, setStrokes] = createSignal<StrokeData[]>([])
  const [currentStroke, setCurrentStroke] = createSignal(0)
  const [isAnimating, setIsAnimating] = createSignal(false)
  const [animationComplete, setAnimationComplete] = createSignal(false)

  let svgRef: SVGSVGElement | undefined
  let containerRef: HTMLDivElement | undefined
  let timeouts: number[] = []

  const setupSvg = () => {
    if (!svgRef) return

    // Add grid if enabled
    if (props.showGrid) {
      const gridGroup = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g",
      )
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

    // Style background strokes
    const backgroundPaths = svgRef.querySelectorAll('path[id*="-s"]')
    backgroundPaths.forEach((path) => {
      const pathEl = path as SVGPathElement
      pathEl.style.stroke = "rgb(82 82 82)" // neutral-600
      pathEl.style.strokeWidth = "3"
      pathEl.style.fill = "none"
      pathEl.style.strokeLinecap = "round"
      pathEl.style.strokeLinejoin = "round"
    })

    // Hide stroke numbers initially
    const strokeNumbers = svgRef.querySelector('g[id*="StrokeNumbers"]')
    if (strokeNumbers) {
      ;(strokeNumbers as SVGElement).style.display = "none"
    }

    // Parse strokes
    const strokeData: StrokeData[] = []
    backgroundPaths.forEach((path) => {
      const pathEl = path as SVGPathElement
      const pathData = pathEl.getAttribute("d")
      if (pathData) {
        const length = pathEl.getTotalLength()
        strokeData.push({
          path: pathData,
          length,
          duration: length * 10, // Simple duration calculation
          animatedElement: null,
        })
      }
    })
    setStrokes(strokeData)
  }

  const animateStroke = (strokeIndex: number) => {
    const stroke = strokes()[strokeIndex]
    if (!stroke || !svgRef) return

    // Create animated path element
    const animPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    )
    animPath.setAttribute("d", stroke.path)
    animPath.setAttribute("stroke", "#BF0000") // Red during animation
    animPath.setAttribute("stroke-width", "3")
    animPath.setAttribute("stroke-linecap", "round")
    animPath.setAttribute("stroke-linejoin", "round")
    animPath.setAttribute("fill", "none")

    // Set up dash animation
    animPath.style.strokeDasharray = `${stroke.length} ${stroke.length}`
    animPath.style.strokeDashoffset = stroke.length.toString()

    svgRef.appendChild(animPath)
    stroke.animatedElement = animPath

    // Trigger animation
    animPath.getBoundingClientRect() // Force layout
    animPath.style.transition = `stroke-dashoffset ${stroke.duration}ms ease`
    animPath.style.strokeDashoffset = "0"

    // After animation completes, change to final color
    const timeout = setTimeout(() => {
      if (animPath && animPath.parentNode) {
        const finalColor = props.colored
          ? raphaelColors.getColor()
          : "rgb(255 255 255)" // primary color (white in dark mode)
        animPath.style.stroke = finalColor
        animPath.style.transition = "stroke 400ms ease"
      }

      // Move to next stroke or complete
      if (strokeIndex < strokes().length - 1) {
        setCurrentStroke(strokeIndex + 1)
        animateStroke(strokeIndex + 1)
      } else {
        setCurrentStroke(strokes().length)
        setIsAnimating(false)
        setAnimationComplete(true)
        showStrokeNumbers()
      }
    }, stroke.duration)

    timeouts.push(timeout)
  }

  const showStrokeNumbers = () => {
    if (!svgRef) return

    if (props.shouldShowNumbers && animationComplete()) {
      // Find existing stroke numbers in the original SVG
      const strokeNumbers = svgRef.querySelector('g[id*="StrokeNumbers"]')
      if (strokeNumbers) {
        ;(strokeNumbers as SVGElement).style.display = "block"
        // Move to end to ensure it's on top
        svgRef.appendChild(strokeNumbers)
      }
    } else {
      // Hide stroke numbers
      const strokeNumbers = svgRef.querySelector('g[id*="StrokeNumbers"]')
      if (strokeNumbers) {
        ;(strokeNumbers as SVGElement).style.display = "none"
      }
    }
  }

  const render = () => {
    if (isAnimating() || strokes().length === 0) return

    raphaelColors.reset()
    setIsAnimating(true)
    setAnimationComplete(false)
    setCurrentStroke(0)
    hideStrokeNumbers()
    animateStroke(0)
  }

  const erase = () => {
    if (isAnimating() || currentStroke() === 0) return

    // Clear timeouts
    timeouts.forEach(clearTimeout)
    timeouts = []

    setAnimationComplete(false)
    hideStrokeNumbers()

    // Erase all strokes simultaneously (like original dmak)
    let pointer = currentStroke() - 1
    do {
      eraseStroke(pointer)
      pointer--
    } while (pointer >= 0)

    setCurrentStroke(0)
  }

  const eraseStroke = (strokeIndex: number) => {
    const stroke = strokes()[strokeIndex]
    if (!stroke?.animatedElement) return

    const animPath = stroke.animatedElement

    // Set up reverse dash animation (like original dmak animateStroke with direction = -1)
    animPath.style.stroke = "#BF0000" // Red during erase
    animPath.style.transition = "none"
    animPath.style.webkitTransition = "none"

    // Starting position for erase (currently at 0, will go to stroke.length)
    animPath.style.strokeDasharray = `${stroke.length} ${stroke.length}`
    animPath.style.strokeDashoffset = "0"

    // Trigger layout
    animPath.getBoundingClientRect()

    // Start animation
    animPath.style.transition = `stroke-dashoffset ${stroke.duration}ms ease`
    animPath.style.webkitTransition = `stroke-dashoffset ${stroke.duration}ms ease`
    animPath.style.strokeDashoffset = stroke.length.toString()

    // Remove after animation completes
    const timeout = setTimeout(() => {
      if (animPath.parentNode) {
        animPath.remove()
      }
      stroke.animatedElement = null
    }, stroke.duration)

    timeouts.push(timeout)
  }

  const hideStrokeNumbers = () => {
    if (svgRef) {
      const strokeNumbers = svgRef.querySelector('g[id*="StrokeNumbers"]')
      if (strokeNumbers) {
        ;(strokeNumbers as SVGElement).style.display = "none"
      }
    }
  }

  const loadSvg = async () => {
    if (!props.svgPath) return
    try {
      const response = await fetch(props.svgPath)
      const svgText = await response.text()
      setSvgContent(svgText)
    } catch (error) {
      console.error("Failed to load SVG:", error)
    }
  }

  createEffect(() => {
    const content = svgContent()
    if (content && containerRef) {
      const svg = containerRef.querySelector("svg") as SVGSVGElement
      if (svg) {
        svgRef = svg
        setupSvg()
        // Component is now fully controlled - no autoplay
      }
    }
  })

  // React to shouldShowNumbers prop changes
  createEffect(() => {
    showStrokeNumbers()
  })

  onMount(() => {
    loadSvg()

    // Expose controls to parent component
    if (props.onControlsReady) {
      props.onControlsReady({
        render,
        erase,
        isAnimating,
      })
    }
  })

  onCleanup(() => {
    timeouts.forEach(clearTimeout)
  })

  return (
    <div class={`dmak-kanji ${props.class || ""}`}>
      <div ref={containerRef} innerHTML={svgContent()} />
    </div>
  )
}
