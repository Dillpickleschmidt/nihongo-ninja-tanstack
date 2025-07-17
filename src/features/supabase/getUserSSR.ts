// features/supabase/getUserSSR.ts
import { createServerFn } from "@tanstack/solid-start"
import { createBackendClient } from "./backendClient"
import { serializeCookieHeader } from "@supabase/ssr"
import { setResponseHeader } from "@tanstack/solid-start/server"
import { Resource } from "sst"
import { getProjectRef } from "./getProjectRef"
import jwt from "jsonwebtoken"
import type { Session, User } from "@supabase/supabase-js"
import { getCookie } from "@/utils/cookie-utils"

// 1. Define a serializable User type by omitting 'factors'.
type SerializableUser = Omit<User, "factors">

// 2. Define a serializable Session type that uses the SerializableUser.
type SerializableSession = Omit<Session, "user"> & {
  user: SerializableUser
}

export const getUserSSR = createServerFn().handler(async () => {
  const { accessToken, refreshToken, projectRef } =
    extractSupabaseTokensFromCookies()

  if (!accessToken) {
    if (refreshToken) {
      return await refreshAndSetTokens(refreshToken, projectRef)
    }
    return { user: null, session: null, error: "No access token found" }
  }

  try {
    if (!refreshToken) {
      return { user: null, session: null, error: "Refresh token missing" }
    }

    const decoded = jwt.verify(
      accessToken,
      Resource.SUPABASE_JWT_SECRET.value,
    ) as any

    const user: SerializableUser = {
      id: decoded.sub,
      email: decoded.email,
      phone: decoded.phone,
      app_metadata: decoded.app_metadata || {},
      user_metadata: decoded.user_metadata || {},
      role: decoded.role,
      aud: decoded.aud,
      created_at: "",
      is_anonymous: decoded.is_anonymous,
    }

    const expires_at = decoded.exp
    // 3. Create the session object and assert its type as our new SerializableSession.
    const session: SerializableSession = {
      access_token: accessToken,
      refresh_token: refreshToken,
      user: user, // This now correctly uses the SerializableUser
      token_type: "bearer",
      expires_in: expires_at - Math.floor(Date.now() / 1000),
      expires_at: expires_at,
    }

    return { user, session, error: null }
  } catch (error) {
    if (error.name === "TokenExpiredError" && refreshToken) {
      return await refreshAndSetTokens(refreshToken, projectRef)
    }
    return { user: null, session: null, error: "Authentication failed" }
  }
})

async function refreshAndSetTokens(refreshToken: string, projectRef: string) {
  const supabase = createBackendClient()

  const { data: sessionData, error: refreshError } =
    await supabase.auth.refreshSession({
      refresh_token: refreshToken,
    })

  if (sessionData?.user && sessionData.session) {
    setSupabaseCookies(
      projectRef,
      sessionData.session.access_token,
      sessionData.session.refresh_token,
    )

    // 4. Sanitize both the user and the session object from the refresh response.
    const { factors, ...serializableUser } = sessionData.user
    const serializableSession = {
      ...sessionData.session,
      user: serializableUser, // Overwrite the user property with the sanitized version
    }

    return {
      user: serializableUser as SerializableUser,
      session: serializableSession as SerializableSession,
      error: null,
    }
  } else {
    return {
      user: null,
      session: null,
      error: refreshError?.message || "Refresh failed",
    }
  }
}

function setSupabaseCookies(
  projectRef: string,
  accessToken: string,
  refreshToken: string,
) {
  const authCookie = serializeCookieHeader(
    `sb-${projectRef}-auth-token`,
    accessToken,
    {
      path: "/",
      httpOnly: false,
      sameSite: "none",
      secure: true,
      maxAge: 60 * 60,
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
      maxAge: 60 * 60 * 24 * 30,
    },
  )

  setResponseHeader("Set-Cookie", [authCookie, refreshCookie])
}

function extractSupabaseTokensFromCookies() {
  const supabaseUrl = Resource.SUPABASE_URL.value
  const projectRef = getProjectRef(supabaseUrl)

  const accessToken = getCookie(`sb-${projectRef}-auth-token`)
  const refreshToken = getCookie(`sb-${projectRef}-refresh-token`)

  return { accessToken, refreshToken, projectRef }
}
