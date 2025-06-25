// app/routes/api/auth/logout.ts
import { createAPIFileRoute } from "@tanstack/solid-start/api"
import { createBackendClient } from "@/features/supabase/backendClient"
import { serializeCookieHeader } from "@supabase/ssr"
import { Resource } from "sst"
import { getProjectRef } from "@/features/supabase/getProjectRef"

export const APIRoute = createAPIFileRoute("/api/auth/logout")({
  POST: async () => {
    const supabaseUrl = Resource.SUPABASE_URL.value
    const projectRef = getProjectRef(supabaseUrl)

    // Invalidate the refresh token server-side
    try {
      const supabase = createBackendClient()
      await supabase.auth.signOut()
      console.log("[logout] Successfully invalidated refresh token server-side")
    } catch (error) {
      console.error("[logout] Error invalidating refresh token:", error)
      // Continue with cookie clearing even if server-side signout fails
    }

    // Clear cookies client-side
    const cookieHeaders = [
      serializeCookieHeader(`sb-${projectRef}-auth-token`, "", {
        path: "/",
        httpOnly: false,
        sameSite: "none",
        secure: true,
        maxAge: 0, // Delete the cookie
      }),
      serializeCookieHeader(`sb-${projectRef}-refresh-token`, "", {
        path: "/",
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 0, // Delete the cookie
      }),
    ]

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: [
        ["Content-Type", "application/json"],
        ["Set-Cookie", cookieHeaders[0]],
        ["Set-Cookie", cookieHeaders[1]],
      ],
    })
  },
})
