// features/supabase/auth.ts
import { serverOnly } from "@tanstack/solid-start"
import { createBackendClient } from "./backendClient"
import { parseCookieHeader, serializeCookieHeader } from "@supabase/ssr"
import {
  getRequestHeader,
  setResponseHeader,
} from "@tanstack/solid-start/server"
import { Resource } from "sst"

function getProjectRef(supabaseUrl: string) {
  const match = supabaseUrl.match(/^https:\/\/([^.]+)\.supabase\.co/)
  return match ? match[1] : ""
}

export const getUser = serverOnly(async () => {
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

  // Try to get the user with the access token
  let {
    data: { user },
    error,
  } = await supabase.auth.getUser(accessToken)

  // If the access token is expired or invalid, try to refresh
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
      console.error("Supabase refresh error:", refreshError?.message)
      return { user: null, error: refreshError?.message || error?.message }
    }
  }

  if (!user) {
    return { user: null, error: error?.message || "No user" }
  }

  return { user, error: null }
})
