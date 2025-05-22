// app/routes/api/auth/logout.ts
import { createAPIFileRoute } from "@tanstack/solid-start/api"
import { serializeCookieHeader } from "@supabase/ssr"
import { Resource } from "sst"

function getProjectRef(supabaseUrl: string) {
  const match = supabaseUrl.match(/^https:\/\/([^.]+)\.supabase\.co/)
  return match ? match[1] : ""
}

export const APIRoute = createAPIFileRoute("/api/auth/logout")({
  POST: async () => {
    const supabaseUrl = Resource.SUPABASE_URL.value
    const projectRef = getProjectRef(supabaseUrl)

    const cookieHeaders = [
      serializeCookieHeader(`sb-${projectRef}-auth-token`, "", {
        path: "/",
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 0,
      }),
      serializeCookieHeader(`sb-${projectRef}-refresh-token`, "", {
        path: "/",
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 0,
      }),
    ]

    return new Response(null, {
      status: 302,
      headers: {
        "Set-Cookie": cookieHeaders.join(", "),
        Location: "/auth",
      },
    })
  },
})
