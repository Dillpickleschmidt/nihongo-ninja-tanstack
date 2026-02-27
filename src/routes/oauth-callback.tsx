import { createFileRoute } from "@tanstack/solid-router"
import { createEffect, Show } from "solid-js"
import { z } from "zod"

const searchSchema = z.object({
  code: z.string().optional(),
  state: z.string().optional(),
})

export const Route = createFileRoute("/oauth-callback")({
  validateSearch: (search) => searchSchema.parse(search),
  component: OAuthCallback,
})

function OAuthCallback() {
  const { code, state } = Route.useSearch()()

  createEffect(() => {
    if (code && window.opener) {
      window.opener.postMessage(
        { type: "oauth_callback", code, state },
        window.location.origin,
      )
      setTimeout(() => window.close(), 100)
    }
  })

  return (
    <div class="bg-background flex h-screen w-full items-center justify-center">
      <Show
        when={code}
        fallback={
          <div class="text-center">
            <div class="text-foreground text-lg font-semibold">
              Authentication Error
            </div>
            <div class="text-muted-foreground mt-2">
              No authorization code received. Please try again.
            </div>
          </div>
        }
      >
        <div class="text-center">
          <div class="text-foreground text-lg font-semibold">
            Completing authentication...
          </div>
          <div class="text-muted-foreground mt-2">
            This window will close automatically.
          </div>
        </div>
      </Show>
    </div>
  )
}
