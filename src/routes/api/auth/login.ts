// src/routes/api/auth/login.ts
import { createServerFileRoute } from "@tanstack/solid-start/server"
import { createBackendClient } from "@/features/supabase/backendClient"

export const ServerRoute = createServerFileRoute("/api/auth/login").methods({
  POST: async ({ request }) => {
    let credential: string | undefined
    const contentType = request.headers.get("content-type") || ""
    if (contentType.includes("application/json")) {
      const body = await request.json()
      credential = body.credential
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const form = await request.formData()
      credential = form.get("credential")?.toString()
    }

    if (!credential) {
      return new Response("Missing credential", { status: 400 })
    }

    const supabase = createBackendClient()
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: credential,
    })

    if (error) {
      return new Response(error.message, { status: 401 })
    }

    if (!data?.session) {
      return new Response("No session returned from Supabase.", { status: 500 })
    }

    // Cookies are automatically set by the Supabase backend client via setAll()
    return new Response(null, {
      status: 302,
      headers: [["Location", "/dashboard"]],
    })
  },
})
