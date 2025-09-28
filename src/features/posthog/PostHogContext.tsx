// PostHogContext.tsx
import {
  createContext,
  useContext,
  type ParentProps,
  createEffect,
} from "solid-js"
import type { PostHog } from "posthog-js"
import posthog from "posthog-js"
import { useLocation } from "@tanstack/solid-router"
import { isServer } from "solid-js/web"

const PostHogContext = createContext<PostHog>()

export const usePostHog = () => {
  const context = useContext(PostHogContext)
  if (!context) {
    throw new Error("usePostHog must be used within a PostHogProvider")
  }
  return context
}

// Track page views component
function PostHogPageView() {
  const location = useLocation()
  const posthog = usePostHog()

  createEffect(() => {
    const loc = location()
    if (loc.pathname) {
      const url = window.origin + loc.pathname
      console.log("Capturing pageview:", url)
      posthog.capture("$pageview", {
        $current_url: url,
        $pathname: loc.pathname,
      })
      console.log("Pageview captured for:", loc.pathname)
    }
  })

  return null
}

// Initialize PostHog once on the client side
if (!isServer) {
  const posthogKey = import.meta.env.VITE_POSTHOG_KEY
  console.log("PostHog key available:", !!posthogKey)
  if (posthogKey) {
    console.log("Initializing PostHog with proxy:", "/api/relay-tefh")
    posthog.init(posthogKey!, {
      api_host: "/api/relay-tefh",
      ui_host: "https://us.posthog.com",
      capture_pageview: false, // Disable automatic pageview capture since we're doing it manually
      capture_pageleave: true, // Enable page leave tracking for bounce rate calculation
      debug: true, // Enable PostHog debug logging
      loaded: (posthog) => {
        console.log("PostHog loaded successfully")
        console.log("PostHog config:", posthog.config)
      },
    })
  } else {
    console.warn("PostHog key not found in environment variables")
  }
}

export function PostHogProvider(props: ParentProps) {
  return (
    <PostHogContext.Provider value={posthog}>
      {props.children}
      <PostHogPageView />
    </PostHogContext.Provider>
  )
}
