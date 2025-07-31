// src/components/SSRMediaQuery.tsx
import { createMediaQuery } from "@solid-primitives/media"
import { Show, type ParentProps } from "solid-js"
import { isServer } from "solid-js/web" // 1. Import isServer

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
  const getSSRClasses = () => {
    const classes: string[] = []
    if (props.showFrom) {
      classes.push(`hidden ${props.showFrom}:block`)
    } else {
      classes.push("block")
    }
    if (props.hideFrom) {
      classes.push(`${props.hideFrom}:hidden`)
    }
    return classes.join(" ")
  }

  // Client-side only logic
  const ClientSideRender = () => {
    const showFromValue = props.showFrom ? breakpointMap[props.showFrom] : null
    const hideFromValue = props.hideFrom ? breakpointMap[props.hideFrom] : null

    const mediaQueryParts: string[] = []
    if (showFromValue !== null)
      mediaQueryParts.push(`(min-width: ${showFromValue}px)`)
    if (hideFromValue !== null)
      mediaQueryParts.push(`(max-width: ${hideFromValue - 1}px)`)

    const mediaQueryString =
      mediaQueryParts.length > 0
        ? mediaQueryParts.join(" and ")
        : "(min-width: 0px)"

    // This reactive primitive is now only created on the client
    const mediaQuery = createMediaQuery(mediaQueryString)

    return <Show when={mediaQuery()}>{props.children}</Show>
  }

  // For SSR, use mobile-first approach (assume smallest screen)
  if (isServer) {
    const shouldShowOnMobile = () => {
      // If showFrom is specified, hide on mobile (show only from that breakpoint up)
      if (props.showFrom) return false

      // If hideFrom is specified, show on mobile (hide only from that breakpoint up)
      if (props.hideFrom) return true

      // Default: show
      return true
    }

    if (shouldShowOnMobile()) {
      return <div>{props.children}</div> // mobile variant - show children
    } else {
      return <div style="display: none;">{props.children}</div>
    }
  }

  // Client-side: use proper media queries
  return <ClientSideRender />
}
