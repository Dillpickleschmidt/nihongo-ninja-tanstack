import { For, createSignal, createEffect, createMemo } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { useLearningPath } from "../LearningPathContext"
import { getModuleIcon } from "@/features/learn-page/utils/loader-helpers"
import { getChapterStyles } from "@/data/chapter_colors"

interface LearningPathCompactProps {
  lessonRefs?: (el: HTMLElement, index: number) => void
  blinkingLessonIndex?: number | null
}

interface ModulePosition {
  x: number
  y: number
}

interface SvgPathInfo {
  path: string
  isCompleted: boolean
}

interface LessonWithIndex {
  lesson: any
  index: number
}

type ColumnCount = 1 | 2 | 3

/**
 * Compact snaking grid view for learning path with SVG connection lines
 */
export function LearningPathCompact(props: LearningPathCompactProps) {
  const context = useLearningPath()
  const [moduleRefs, setModuleRefs] = createSignal<(HTMLElement | undefined)[]>(
    [],
  )
  const [columnCount, setColumnCount] = createSignal<ColumnCount>(1)
  const [svgPaths, setSvgPaths] = createSignal<SvgPathInfo[]>([])
  const [svgSize, setSvgSize] = createSignal({ width: 0, height: 0 })
  let containerRef: HTMLDivElement | undefined
  let svgRef: SVGSVGElement | undefined

  // Detect responsive column count
  const detectColumnCount = () => {
    if (!containerRef) return
    const width = containerRef.clientWidth

    if (width < 640) setColumnCount(1)
    else if (width < 1024) setColumnCount(2)
    else setColumnCount(3)
  }

  // Store module ref
  const handleModuleRef = (el: HTMLElement | undefined, index: number) => {
    const refs = [...moduleRefs()]
    refs[index] = el
    setModuleRefs(refs)
    props.lessonRefs?.(el!, index)
  }

  // Calculate module position for edge connections
  const getModulePosition = (
    element: HTMLElement | undefined,
    side: "right" | "left" | "center" = "center",
  ): ModulePosition => {
    if (!element || !containerRef) return { x: 0, y: 0 }

    const elementRect = element.getBoundingClientRect()
    const containerRect = containerRef.getBoundingClientRect()
    const relativeLeft = elementRect.left - containerRect.left

    let x = relativeLeft
    if (side === "right") {
      x = relativeLeft + elementRect.width
    } else if (side === "center") {
      x = relativeLeft + elementRect.width / 2
    }

    return {
      x,
      y: elementRect.top - containerRect.top + elementRect.height / 2,
    }
  }

  // Generate SVG paths for snaking connection (edge-to-edge)
  const generatePaths = () => {
    const refs = moduleRefs()
    const colCount = columnCount()
    const lessons = context.lessons()
    const paths: SvgPathInfo[] = []

    if (refs.length < 2) return paths

    for (let i = 0; i < refs.length - 1; i++) {
      const fromEl = refs[i]
      const toEl = refs[i + 1]
      if (!fromEl || !toEl) continue

      const fromLesson = lessons[i]
      const isSourceCompleted = context.isLessonCompleted(fromLesson.href)

      const fromRow = Math.floor(i / colCount)
      const toRow = Math.floor((i + 1) / colCount)
      const isFromRowReversed = fromRow % 2 === 1

      if (fromRow === toRow) {
        // Same row: horizontal line (direction depends on row direction)
        let fromPos: ModulePosition
        let toPos: ModulePosition

        if (!isFromRowReversed) {
          // Normal row: right edge to left edge
          fromPos = getModulePosition(fromEl, "right")
          toPos = getModulePosition(toEl, "left")
        } else {
          // Reversed row: left edge to right edge
          fromPos = getModulePosition(fromEl, "left")
          toPos = getModulePosition(toEl, "right")
        }

        const path = `M ${fromPos.x} ${fromPos.y} L ${toPos.x} ${toPos.y}`
        paths.push({ path, isCompleted: isSourceCompleted })
      } else {
        // Different rows: vertical connection from appropriate edge
        const fromBottom =
          fromEl.getBoundingClientRect().bottom -
          containerRef!.getBoundingClientRect().top
        const toTop =
          toEl.getBoundingClientRect().top -
          containerRef!.getBoundingClientRect().top

        // Vertical drops from the edge that the row ends on
        const edgeSide = isFromRowReversed ? "left" : "right"
        const fromPos = getModulePosition(fromEl, edgeSide)

        const path = `M ${fromPos.x} ${fromBottom} L ${fromPos.x} ${toTop}`
        paths.push({ path, isCompleted: isSourceCompleted })
      }
    }

    return paths
  }

  // Update on module refs or column count change
  createEffect(() => {
    moduleRefs() // dependency
    columnCount() // dependency
    setSvgPaths(generatePaths())
  })

  // Update SVG size on resize
  createEffect(() => {
    const updateSize = () => {
      if (containerRef && svgRef) {
        setSvgSize({
          width: containerRef.clientWidth,
          height: containerRef.clientHeight,
        })
        detectColumnCount()
      }
    }

    updateSize()
    const resizeObserver = new ResizeObserver(updateSize)
    if (containerRef) resizeObserver.observe(containerRef)

    return () => resizeObserver.disconnect()
  })

  // Group lessons into rows for snaking layout
  const rows = createMemo(() => {
    const lessons = context.lessons()
    const colCount = columnCount()
    const result: LessonWithIndex[][] = []

    for (let i = 0; i < lessons.length; i += colCount) {
      const rowLessons = lessons
        .slice(i, i + colCount)
        .map((lesson, rowPos) => ({
          lesson,
          index: i + rowPos,
        }))
      result.push(rowLessons)
    }

    return result
  })

  return (
    <div ref={containerRef} class="relative px-4 pt-2 pb-4 md:px-6 md:pb-6">
      {/* SVG Overlay for connection lines with arrows */}
      <svg
        ref={svgRef}
        class="pointer-events-none absolute inset-0 overflow-visible"
        width={svgSize().width}
        height={svgSize().height}
      >
        <defs>
          {/* Arrow marker that inherits stroke color from path */}
          <marker
            id="arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="2"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,4 L5,2 z" fill="context-stroke" />
          </marker>
        </defs>

        <For each={svgPaths()}>
          {(pathInfo) => {
            const strokeClass = pathInfo.isCompleted
              ? getChapterStyles(context.activeChapter())
                  .ringClass.split("[")[0]
                  .trim()
              : "stroke-muted-foreground/40"
            return (
              <path
                d={pathInfo.path}
                class={`${strokeClass} stroke-linecap-round stroke-linejoin-round fill-none stroke-2`}
                marker-end="url(#arrow)"
              />
            )
          }}
        </For>
      </svg>

      {/* Flex rows with snaking direction */}
      <div class="flex flex-col gap-8">
        <For each={rows()}>
          {(rowItems, rowIndex) => (
            <div
              class={`flex gap-8 ${rowIndex() % 2 === 1 ? "flex-row-reverse" : ""}`}
            >
              <For each={rowItems}>
                {(item) => (
                  <Link
                    to={item.lesson.href}
                    ref={(el) => handleModuleRef(el, item.index)}
                    class="flex-1"
                  >
                    <CompactModuleItem
                      lesson={item.lesson}
                      isCompleted={context.isLessonCompleted(item.lesson.href)}
                      shouldBlink={props.blinkingLessonIndex === item.index}
                    />
                  </Link>
                )}
              </For>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

interface CompactModuleItemProps {
  lesson: {
    title: string
    description?: string
    moduleType: string
    iconClasses: string
  }
  isCompleted: boolean
  shouldBlink?: boolean
}

/**
 * Flat module item for compact view - minimal styling
 */
function CompactModuleItem(props: CompactModuleItemProps) {
  const ModuleIcon = getModuleIcon(props.lesson.moduleType)
  const context = useLearningPath()
  const styles = () => getChapterStyles(context.activeChapter())

  return (
    <div class="relative">
      {/* Icon + Title */}
      <div class="mb-1 flex items-center gap-2">
        <ModuleIcon
          size="18px"
          class={`flex-shrink-0 ${props.lesson.iconClasses}`}
        />
        <h3 class="line-clamp-1 text-sm font-medium text-white">
          {props.lesson.title}
        </h3>
      </div>

      {/* Placeholder description text */}
      <p class="text-muted-foreground/60 line-clamp-1 text-xs">
        Description coming soon
      </p>

      {/* Blink ring */}
      {props.shouldBlink && (
        <div
          class={`absolute -inset-1 rounded ring-2 ${styles().ringColorBright} animate-ring-blink pointer-events-none`}
        />
      )}
    </div>
  )
}
