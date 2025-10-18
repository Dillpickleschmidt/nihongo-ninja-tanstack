// features/dashboard/components/shared/SmoothCard.tsx
import { getSvgPath } from "figma-squircle"
import { createMediaQuery } from "@solid-primitives/media"
import { JSX } from "solid-js"
import { cn } from "@/utils"

interface SmoothCardProps {
  width: number
  height: number
  cornerRadius?: number
  cornerSmoothing?: number
  scales?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
    "2xl"?: number
  }
  border?: boolean
  borderClass?: string
  ring?: boolean
  ringClass?: string
  class?: string
  style?: JSX.CSSProperties
  children: any
}

const breakpointMap = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export function SmoothCard(props: SmoothCardProps) {
  // Create media queries for each breakpoint
  const isXl = createMediaQuery(`(min-width: ${breakpointMap.xl}px)`)
  const is2xl = createMediaQuery(`(min-width: ${breakpointMap["2xl"]}px)`)
  const isLg = createMediaQuery(
    `(min-width: ${breakpointMap.lg}px) and (max-width: ${breakpointMap.xl - 1}px)`,
  )
  const isMd = createMediaQuery(
    `(min-width: ${breakpointMap.md}px) and (max-width: ${breakpointMap.lg - 1}px)`,
  )
  const isSm = createMediaQuery(
    `(min-width: ${breakpointMap.sm}px) and (max-width: ${breakpointMap.md - 1}px)`,
  )

  // Determine current scale
  const getCurrentScale = () => {
    if (!props.scales) return 1.0

    if (is2xl() && props.scales["2xl"]) return props.scales["2xl"]
    if (isXl() && props.scales.xl) return props.scales.xl
    if (isLg() && props.scales.lg) return props.scales.lg
    if (isMd() && props.scales.md) return props.scales.md
    if (isSm() && props.scales.sm) return props.scales.sm

    return 1.0
  }

  const currentScale = getCurrentScale()
  const scaledWidth = props.width * currentScale
  const scaledHeight = props.height * currentScale
  const scaledCornerRadius = (props.cornerRadius || 20) * currentScale

  const svgPath = getSvgPath({
    width: scaledWidth,
    height: scaledHeight,
    cornerRadius: scaledCornerRadius,
    cornerSmoothing: props.cornerSmoothing || 1,
    preserveSmoothing: true,
  })

  const combinedStyle = {
    width: `${scaledWidth}px`,
    height: `${scaledHeight}px`,
    "clip-path": `path('${svgPath}')`,
    ...props.style,
  }

  return (
    <div
      style={{
        position: "relative",
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
      }}
    >
      <div
        style={combinedStyle}
        class={cn(
          "bg-card",
          "shadow-sm shadow-black/5 dark:shadow-black/20",
          props.class,
        )}
      >
        {props.children}
      </div>

      {props.border && (
        <svg
          class={cn("absolute inset-0 overflow-visible", props.borderClass)}
          style={{
            width: `${scaledWidth}px`,
            height: `${scaledHeight}px`,
          }}
          viewBox={`0 0 ${scaledWidth} ${scaledHeight}`}
          preserveAspectRatio="none"
        >
          <path d={svgPath} fill="none" shape-rendering="geometricPrecision" />
        </svg>
      )}

      <svg
        class={cn(
          "absolute inset-0 overflow-visible",
          props.ring ? "opacity-100" : "opacity-0",
          props.ringClass,
        )}
        style={{
          width: `${scaledWidth}px`,
          height: `${scaledHeight}px`,
        }}
        viewBox={`0 0 ${scaledWidth} ${scaledHeight}`}
        preserveAspectRatio="none"
      >
        <path d={svgPath} fill="none" shape-rendering="geometricPrecision" />
      </svg>
    </div>
  )
}
