import { createFileRoute } from "@tanstack/solid-router"
import { handler } from "@/lib/auth-server"

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: ({ request }) => {
        return handler(request)
      },
      POST: ({ request }) => {
        return handler(request)
      },
    },
  },
})
