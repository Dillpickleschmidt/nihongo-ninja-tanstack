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
import jwt from "jsonwebtoken"
import type { User } from "@supabase/supabase-js"

export const getUserSSR = serverOnly(async () => {
  const { accessToken, refreshToken, projectRef } = extractTokensFromCookies()

  if (!accessToken) {
    if (refreshToken) {
      console.log("[getUserSSR] No access token, attempting refresh...")
      return await refreshAndSetTokens(refreshToken, projectRef)
    }
    console.log("[getUserSSR] No access token and no refresh token found")
    return { user: null, error: "No access token found" }
  }

  try {
    // Get user by verifying JWT signature and expiration locally (no db call)
    const decoded = jwt.verify(
      accessToken,
      Resource.SUPABASE_JWT_SECRET.value,
    ) as any

    console.log(
      `[getUserSSR] JWT verification successful for user: ${decoded.email}, skipping db call.`,
    )

    // Return user data using only the claims that exist in the JWT
    const user = {
      id: decoded.sub,
      email: decoded.email,
      phone: decoded.phone,
      app_metadata: decoded.app_metadata || {},
      user_metadata: decoded.user_metadata || {},
      role: decoded.role,
      aud: decoded.aud,
      is_anonymous: decoded.is_anonymous,
    } as User

    return { user, error: null }
  } catch (error) {
    // Only attempt refresh for expired tokens, not invalid/forged tokens
    if (error.name === "TokenExpiredError" && refreshToken) {
      // I haven't tested if "TokenExpiredError" is the correct error type
      return await refreshAndSetTokens(refreshToken, projectRef)
    }

    // For any other JWT error (invalid signature, malformed, etc.), reject immediately
    console.log(
      `[getUserSSR] JWT error type: ${error.name} - rejecting without refresh attempt`,
    )
    return { user: null, error: "Authentication failed" }
  }
})

async function refreshAndSetTokens(refreshToken: string, projectRef: string) {
  const supabase = createBackendClient()

  const { data: sessionData, error: refreshError } =
    await supabase.auth.refreshSession({
      refresh_token: refreshToken,
    })

  if (sessionData?.user && sessionData.session) {
    console.log("[getUserSSR] Token refresh successful! Setting new cookies.")

    setAuthenticationCookies(
      projectRef,
      sessionData.session.access_token,
      sessionData.session.refresh_token,
    )

    return { user: sessionData.user, error: null }
  } else {
    console.error("Supabase refresh error:", refreshError?.message)
    return { user: null, error: refreshError?.message || "Refresh failed" }
  }
}

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

  setResponseHeader("Set-Cookie", [authCookie, refreshCookie])
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
