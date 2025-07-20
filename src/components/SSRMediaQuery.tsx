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

  // 2. Use isServer to conditionally render
  return (
    <Show
      when={!isServer}
      // On the server, render a simple div with Tailwind classes for visibility.
      fallback={<div class={getSSRClasses()}>{props.children}</div>}
    >
      {/* On the client, render the fully reactive component. */}
      <ClientSideRender />
    </Show>
  )
}
