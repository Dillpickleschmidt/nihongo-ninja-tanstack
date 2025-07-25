// src/routes/api/hello.ts
import { createServerFileRoute } from "@tanstack/solid-start/server"

export const ServerRoute = createServerFileRoute("/api/hello").methods({
  GET: async () => {
    return new Response(
      JSON.stringify({ message: "Hello from TanStack Start API route!" }),
      {
        headers: { "Content-Type": "application/json" },
      },
    )
  },
  POST: async ({ request }) => {
    let data: any
    const contentType = request.headers.get("content-type") || ""
    if (contentType.includes("application/json")) {
      data = await request.json()
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const form = await request.formData()
      data = Object.fromEntries(form.entries())
    } else {
      data = { error: "Unsupported content type" }
    }
    return new Response(JSON.stringify({ received: data }), {
      headers: { "Content-Type": "application/json" },
    })
  },
})
