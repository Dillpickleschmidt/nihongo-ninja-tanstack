import { createFileRoute } from "@tanstack/solid-router"
import { zodValidator } from "@tanstack/zod-adapter"
import { z } from "zod"
import { createEffect, Show } from "solid-js"

/**
 * OAuth Callback Landing Page
 * Receives authorization code from OAuth provider redirect
 * Sends code back to parent window via postMessage
 * Then closes itself
 */

const searchSchema = z.object({
  code: z.string().optional(),
  state: z.string().optional(),
})

export const Route = createFileRoute("/oauth-callback")({
  validateSearch: zodValidator(searchSchema),
  component: OAuthCallback,
})

function OAuthCallback() {
  const { code, state } = Route.useSearch()()

  createEffect(() => {
    if (code) {
      // Send code back to parent window
      if (window.opener) {
        window.opener.postMessage(
          {
            type: "oauth_callback",
            code,
            state,
          },
          window.location.origin,
        )
      }

      // Give parent time to receive message before closing
      setTimeout(() => {
        window.close()
      }, 100)
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
