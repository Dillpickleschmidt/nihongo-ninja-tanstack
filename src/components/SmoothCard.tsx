// features/learn-page/components/shared/SmoothCard.tsx
import { getSvgPath } from "figma-squircle"
import { createMediaQuery } from "@solid-primitives/media"
import { JSX, createSignal, Accessor, splitProps } from "solid-js"
import { createLink, LinkComponent } from "@tanstack/solid-router"
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
  class?: string
  style?: JSX.CSSProperties
  children: any
}

interface SmoothCardLinkProps extends SmoothCardProps {
  focusRing?: boolean
  focusRingClass?: string
  focusStrokeWidth?: number
}

const breakpointMap = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

interface ComputedInternals {
  scaledWidth: number
  scaledHeight: number
  combinedStyle: any
  svgPath: string
  showOutline: Accessor<boolean>
  activeOutlineClass: Accessor<string | undefined>
  outlineStrokeWidth: Accessor<number>
}

type FocusConfig = Pick<
  SmoothCardLinkProps,
  "focusRing" | "focusRingClass" | "focusStrokeWidth"
>

function useSmoothCardInternals(
  props: SmoothCardProps,
  isFocused: Accessor<boolean>,
  focusConfig?: FocusConfig,
): ComputedInternals {
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

  // Determine if outline should be visible
  const showOutline = () =>
    !!(props.border || (focusConfig?.focusRing && isFocused()))

  // Determine which outline class to use
  const activeOutlineClass = () => {
    if (focusConfig?.focusRing && isFocused()) return focusConfig.focusRingClass
    if (props.border) return props.borderClass
    return undefined
  }

  // Determine stroke width for outline
  const outlineStrokeWidth = () => {
    if (focusConfig?.focusRing && isFocused())
      return focusConfig.focusStrokeWidth || 2
    return 1
  }

  return {
    scaledWidth,
    scaledHeight,
    combinedStyle,
    svgPath,
    showOutline,
    activeOutlineClass,
    outlineStrokeWidth,
  }
}

interface SmoothCardContentProps {
  internals: ComputedInternals
  class?: string
  children: any
}

function SmoothCardContent(props: SmoothCardContentProps) {
  return (
    <>
      <div
        style={props.internals.combinedStyle}
        class={cn(
          "bg-card",
          "shadow-sm shadow-black/5 dark:shadow-black/20",
          props.class,
        )}
      >
        {props.children}
      </div>

      <svg
        class={cn(
          "absolute inset-0 overflow-visible",
          props.internals.showOutline() ? "opacity-100" : "opacity-0",
          props.internals.activeOutlineClass(),
        )}
        style={{
          width: `${props.internals.scaledWidth}px`,
          height: `${props.internals.scaledHeight}px`,
        }}
        viewBox={`0 0 ${props.internals.scaledWidth} ${props.internals.scaledHeight}`}
        preserveAspectRatio="none"
      >
        <path
          d={props.internals.svgPath}
          fill="none"
          shape-rendering="geometricPrecision"
          stroke-width={props.internals.outlineStrokeWidth()}
        />
      </svg>
    </>
  )
}

export function SmoothCard(props: SmoothCardProps) {
  const internals = useSmoothCardInternals(props, () => false)

  return (
    <div
      style={{
        position: "relative",
        width: `${internals.scaledWidth}px`,
        height: `${internals.scaledHeight}px`,
      }}
    >
      <SmoothCardContent internals={internals} class={props.class}>
        {props.children}
      </SmoothCardContent>
    </div>
  )
}

// Base link component for createLink
type SmoothCardLinkBaseProps = JSX.IntrinsicElements["a"] &
  Omit<SmoothCardLinkProps, "children"> & {
    children: any
  }

const SmoothCardLinkBase = (props: SmoothCardLinkBaseProps) => {
  const [isFocused, setIsFocused] = createSignal(false)

  // Separate smooth card props from anchor/router props
  const [smoothCardProps, restProps] = splitProps(props, [
    "width",
    "height",
    "cornerRadius",
    "cornerSmoothing",
    "scales",
    "border",
    "borderClass",
    "focusRing",
    "focusRingClass",
    "focusStrokeWidth",
    "class",
    "style",
    "children",
  ])

  const internals = useSmoothCardInternals(smoothCardProps, isFocused, {
    focusRing: smoothCardProps.focusRing,
    focusRingClass: smoothCardProps.focusRingClass,
    focusStrokeWidth: smoothCardProps.focusStrokeWidth,
  })

  return (
    <a
      {...restProps}
      style={{
        position: "relative",
        width: `${internals.scaledWidth}px`,
        height: `${internals.scaledHeight}px`,
        display: "block",
        "text-decoration": "none",
        ...(smoothCardProps.style || {}),
      }}
      onFocus={() => {
        smoothCardProps.focusRing && setIsFocused(true)
      }}
      onBlur={() => {
        setIsFocused(false)
      }}
      class="outline-none"
    >
      <SmoothCardContent internals={internals} class={smoothCardProps.class}>
        {smoothCardProps.children}
      </SmoothCardContent>
    </a>
  )
}

export const SmoothCardLink: LinkComponent<typeof SmoothCardLinkBase> = (
  props,
) => {
  const CreatedLink = createLink(SmoothCardLinkBase)
  return <CreatedLink {...props} />
}
