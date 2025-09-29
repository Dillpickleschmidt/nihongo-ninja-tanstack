import {
  createContext,
  useContext,
  type ParentProps,
  createEffect,
} from "solid-js"
import type { PostHog } from "posthog-js"
import { useLocation } from "@tanstack/solid-router"
import { isServer } from "solid-js/web"

const PostHogContext = createContext<PostHog | null>(null)

export const usePostHog = () => useContext(PostHogContext)

function PostHogPageView() {
  const location = useLocation()
  const posthog = usePostHog()

  createEffect(() => {
    const loc = location()
    if (loc.pathname && posthog) {
      posthog.capture("$pageview", {
        $current_url: window.origin + loc.pathname,
        $pathname: loc.pathname,
      })
    }
  })

  return null
}

let posthogInstance: PostHog | null = null

if (!isServer) {
  const { VITE_POSTHOG_KEY: key, VITE_APP_STAGE: stage } = import.meta.env

  if (key && stage === "production") {
    // console.log("Initializing PostHog")
    import("posthog-js").then(({ default: posthog }) => {
      posthog.init(key, {
        api_host: "/api/relay-tefh",
        ui_host: "https://us.posthog.com",
        capture_pageview: false, // skipped since we're doing it manually
        capture_pageleave: true,
      })
      posthogInstance = posthog
    })
  } else {
    // console.log("PostHog skipped - not in production")
  }
}

export function PostHogProvider(props: ParentProps) {
  return (
    <PostHogContext.Provider value={posthogInstance}>
      {props.children}
      <PostHogPageView />
    </PostHogContext.Provider>
  )
}
