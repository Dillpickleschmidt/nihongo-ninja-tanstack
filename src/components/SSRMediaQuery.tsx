// src/components/SSRMediaQuery.tsx
import { createMediaQuery } from "@solid-primitives/media"
import { createEffect, createSignal, Show, type ParentProps } from "solid-js"

interface SSRMediaQueryProps extends ParentProps {
  showFrom?: "sm" | "md" | "lg" | "xl" | "2xl"
  hideFrom?: "sm" | "md" | "lg" | "xl" | "2xl"
}

const breakpointMap = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export function SSRMediaQuery(props: SSRMediaQueryProps) {
  const [isHydrated, setIsHydrated] = createSignal(false)

  const showFromValue = props.showFrom ? breakpointMap[props.showFrom] : null
  const hideFromValue = props.hideFrom ? breakpointMap[props.hideFrom] : null

  // Build media query string
  const mediaQueryParts: string[] = []
  if (showFromValue !== null)
    mediaQueryParts.push(`(min-width: ${showFromValue}px)`)
  if (hideFromValue !== null)
    mediaQueryParts.push(`(max-width: ${hideFromValue - 1}px)`)

  const mediaQueryString =
    mediaQueryParts.length > 0
      ? mediaQueryParts.join(" and ")
      : "(min-width: 0px)"
  const mediaQuery = createMediaQuery(mediaQueryString)

  createEffect(() => setIsHydrated(true))

  const getSSRClasses = () => {
    const classes: string[] = []

    // Handle showFrom - hide below this breakpoint
    if (props.showFrom) {
      classes.push(`hidden ${props.showFrom}:block`)
    } else {
      classes.push("block")
    }

    // Handle hideFrom - hide at this breakpoint and above
    if (props.hideFrom) {
      classes.push(`${props.hideFrom}:hidden`)
    }

    return classes.join(" ")
  }

  return (
    <Show
      when={isHydrated()}
      fallback={<div class={getSSRClasses()}>{props.children}</div>}
    >
      <Show when={mediaQuery()}>{props.children}</Show>
    </Show>
  )
}
