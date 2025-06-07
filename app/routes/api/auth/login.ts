// app/routes/api/auth/login.ts
import { createAPIFileRoute } from "@tanstack/solid-start/api"
import { createBackendClient } from "@/features/supabase/backendClient"
import { serializeCookieHeader } from "@supabase/ssr"
import { Resource } from "sst"
import { getProjectRef } from "@/features/supabase/getProjectRef"

export const APIRoute = createAPIFileRoute("/api/auth/login")({
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

    const supabaseUrl = Resource.SUPABASE_URL.value
    const projectRef = getProjectRef(supabaseUrl)

    // Set both access and refresh tokens as cookies
    const cookieHeaders = [
      serializeCookieHeader(
        `sb-${projectRef}-auth-token`,
        data.session.access_token,
        {
          path: "/",
          httpOnly: true,
          sameSite: "none",
          secure: true,
          maxAge: 60 * 60, // 1 hour
        },
      ),
      serializeCookieHeader(
        `sb-${projectRef}-refresh-token`,
        data.session.refresh_token,
        {
          path: "/",
          httpOnly: true,
          sameSite: "none",
          secure: true,
          maxAge: 60 * 60 * 24 * 30, // 30 days
        },
      ),
    ]

    return new Response(null, {
      status: 302,
      headers: [
        ["Set-Cookie", cookieHeaders[0]],
        ["Set-Cookie", cookieHeaders[1]],
        ["Location", "/dashboard"],
      ],
    })
  },
})
