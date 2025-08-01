// src/routes/api/auth/logout.ts
import { createServerFileRoute } from "@tanstack/solid-start/server"
import { createBackendClient } from "@/features/supabase/backendClient"

export const ServerRoute = createServerFileRoute("/api/auth/logout").methods({
  POST: async () => {
    const supabase = createBackendClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: [["Content-Type", "application/json"]],
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: [["Content-Type", "application/json"]],
    })
  },
})
