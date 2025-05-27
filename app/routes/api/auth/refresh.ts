// app/routes/api/auth/refresh.ts
import { createAPIFileRoute } from "@tanstack/solid-start/api"
import { createBackendClient } from "@/features/supabase/backendClient"
import { parseCookieHeader, serializeCookieHeader } from "@supabase/ssr"
import {
  getRequestHeader,
  setResponseHeader,
} from "@tanstack/solid-start/server"
import { Resource } from "sst"
import { getProjectRef } from "@/features/supabase/getProjectRef"

export const APIRoute = createAPIFileRoute("/api/auth/refresh")({
  POST: async () => {
    const cookieHeader = getRequestHeader("Cookie") ?? ""
    const cookies = parseCookieHeader(cookieHeader)

    const supabaseUrl = Resource.SUPABASE_URL.value
    const projectRef = getProjectRef(supabaseUrl)

    const accessToken = cookies.find(
      (cookie) => cookie.name === `sb-${projectRef}-auth-token`,
    )?.value
    const refreshToken = cookies.find(
      (cookie) => cookie.name === `sb-${projectRef}-refresh-token`,
    )?.value

    const supabase = createBackendClient()

    let {
      data: { user },
      error,
    } = await supabase.auth.getUser(accessToken)

    if ((!user || error) && refreshToken) {
      const { data: sessionData, error: refreshError } =
        await supabase.auth.setSession({
          access_token: accessToken ?? "",
          refresh_token: refreshToken,
        })

      if (sessionData?.user && sessionData.session) {
        user = sessionData.user
        // Set new cookies with the refreshed tokens
        setResponseHeader(
          "Set-Cookie",
          serializeCookieHeader(
            `sb-${projectRef}-auth-token`,
            sessionData.session.access_token,
            {
              path: "/",
              httpOnly: true,
              sameSite: "none",
              secure: true,
              maxAge: 60 * 60, // 1 hour
            },
          ),
        )
        setResponseHeader(
          "Set-Cookie",
          serializeCookieHeader(
            `sb-${projectRef}-refresh-token`,
            sessionData.session.refresh_token,
            {
              path: "/",
              httpOnly: true,
              sameSite: "none",
              secure: true,
              maxAge: 60 * 60 * 24 * 30, // 30 days
            },
          ),
        )
      } else {
        return new Response(
          JSON.stringify({
            user: null,
            error: refreshError?.message || error?.message,
          }),
          {
            status: 401,
            headers: { "Content-Type": "application/json" },
          },
        )
      }
    }

    return new Response(JSON.stringify({ user, error: null }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  },
})
