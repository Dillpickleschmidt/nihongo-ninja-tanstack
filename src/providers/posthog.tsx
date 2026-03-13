import { createSignal, createEffect } from "solid-js"
import { isServer } from "solid-js/web"
import { useLocation } from "@tanstack/solid-router"
import { getUser } from "@/lib/auth"
import type { PostHog } from "posthog-js"

const [posthog, setPosthog] = createSignal<PostHog | null>(null)

if (!isServer) {
  const key = import.meta.env.VITE_POSTHOG_KEY
  if (key) {
    import("posthog-js").then(({ default: ph }) => {
      ph.init(key, {
        api_host: "https://us.posthog.com",
        capture_pageview: false,
        capture_pageleave: true,
      })
      setPosthog(ph)
    })
  }
}

export function PostHogPageView() {
  const location = useLocation()

  createEffect(() => {
    const loc = location()
    const ph = posthog()
    if (loc.pathname && ph) {
      ph.capture("$pageview", {
        $current_url: window.origin + loc.pathname,
        $pathname: loc.pathname,
      })
    }
  })

  return null
}

export function PostHogIdentify() {
  const user = getUser()

  createEffect(() => {
    const u = user()
    const ph = posthog()
    if (u && ph) {
      ph.identify(u.id, { email: u.email, name: u.name })
    }
  })

  return null
}
