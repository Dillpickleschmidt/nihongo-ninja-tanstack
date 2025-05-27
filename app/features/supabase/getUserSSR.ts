// getUserSSR.ts
import { serverOnly } from "@tanstack/solid-start"
import { createBackendClient } from "./backendClient"
import { parseCookieHeader, serializeCookieHeader } from "@supabase/ssr"
import {
  getRequestHeader,
  setResponseHeader,
} from "@tanstack/solid-start/server"
import { Resource } from "sst"
import { getProjectRef } from "./getProjectRef"

export const getUserSSR = serverOnly(async () => {
  const { accessToken, refreshToken, projectRef } = extractTokensFromCookies()

  // Uncomment to enable token expiry logging
  // if (accessToken) {
  //   logTokenExpiry(accessToken)
  // }

  const supabase = createBackendClient()

  // Try to get the user with the access token
  let {
    data: { user },
    error,
  } = await supabase.auth.getUser(accessToken)

  console.log(
    `[getUserSSR] Initial auth result: user=${!!user}, error=${error?.message}`,
  )

  // If the access token is expired or invalid, try to refresh
  if ((!user || error) && refreshToken) {
    console.log("[getUserSSR] Attempting token refresh...")

    const { data: sessionData, error: refreshError } =
      await supabase.auth.refreshSession({
        refresh_token: refreshToken,
      })

    if (sessionData?.user && sessionData.session) {
      console.log("[getUserSSR] Token refresh successful! Setting new cookies.")
      user = sessionData.user

      setAuthenticationCookies(
        projectRef,
        sessionData.session.access_token,
        sessionData.session.refresh_token,
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

function setAuthenticationCookies(
  projectRef: string,
  accessToken: string,
  refreshToken: string,
) {
  const authCookie = serializeCookieHeader(
    `sb-${projectRef}-auth-token`,
    accessToken,
    {
      path: "/",
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 60 * 60, // 1 hour
    },
  )

  const refreshCookie = serializeCookieHeader(
    `sb-${projectRef}-refresh-token`,
    refreshToken,
    {
      path: "/",
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
    },
  )

  // Set multiple cookies properly - pass as array
  setResponseHeader("Set-Cookie", [authCookie, refreshCookie])

  console.log(`[getUserSSR] Set auth cookie (${accessToken.length} chars)`)
  console.log(`[getUserSSR] Set refresh cookie (${refreshToken.length} chars)`)
}

function extractTokensFromCookies() {
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

  return { accessToken, refreshToken, projectRef }
}

function logTokenExpiry(accessToken: string) {
  try {
    const payload = JSON.parse(atob(accessToken.split(".")[1]))
    const expiry = new Date(payload.exp * 1000)
    const now = new Date()
    console.log(`[getUserSSR] Token expires: ${expiry.toISOString()}`)
    console.log(`[getUserSSR] Current time: ${now.toISOString()}`)
    console.log(`[getUserSSR] Token expired: ${now > expiry}`)
  } catch (e) {
    console.log("[getUserSSR] Could not parse token")
  }
}
