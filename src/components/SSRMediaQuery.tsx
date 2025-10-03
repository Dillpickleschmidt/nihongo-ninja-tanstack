// src/components/SSRMediaQuery.tsx
import { createMediaQuery } from "@solid-primitives/media"
import { Show, type ParentProps } from "solid-js"
import { isServer } from "solid-js/web"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"

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
  const context = useRouteContext({ from: RootRoute.id })
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

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

  // For SSR, use device settings from query
  if (isServer) {
    const cookieDeviceType = settingsQuery.data["device-type"]

    // Determine screen width based on cookie (or default to mobile for first visit)
    const isMobile = cookieDeviceType === "mobile" || cookieDeviceType === null

    const shouldShow = () => {
      // If showFrom is specified, only show if we're at or above that breakpoint
      if (props.showFrom) {
        const breakpoint = breakpointMap[props.showFrom]
        const screenWidth = isMobile ? 768 : 1280 // Assume mobile=768px, desktop=1280px
        return screenWidth >= breakpoint
      }

      // If hideFrom is specified, only show if we're below that breakpoint
      if (props.hideFrom) {
        const breakpoint = breakpointMap[props.hideFrom]
        const screenWidth = isMobile ? 768 : 1280
        return screenWidth < breakpoint
      }

      // Default: show
      return true
    }

    if (shouldShow()) {
      return <div>{props.children}</div>
    } else {
      return <div style="display: none;">{props.children}</div>
    }
  }

  // Client-side: use proper media queries
  return <ClientSideRender />
}
