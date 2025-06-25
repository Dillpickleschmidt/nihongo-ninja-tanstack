// features/supabase/getUser.ts
import { isServer } from "solid-js/web"
import { getUserSSR } from "./getUserSSR"
import { getProjectRef } from "./getProjectRef"
import { getCookie } from "@/utils/cookie-utils"
import { parseJWTPayload } from "@/utils/jwt-utils"

function getSupabaseAccessTokenFromCookie(): string | null {
  if (typeof document === "undefined") return null
  const projectRef = getProjectRef(import.meta.env.VITE_SUPABASE_URL)
  return getCookie(`sb-${projectRef}-auth-token`)
}

function parseSupabaseUserFromJWT(token: string) {
  const payload = parseJWTPayload(token)
  if (!payload) return null

  const now = Math.floor(Date.now() / 1000)
  if (payload.exp && payload.exp < now) return null

  return {
    id: payload.sub,
    email: payload.email,
    phone: payload.phone,
    app_metadata: payload.app_metadata || {},
    user_metadata: payload.user_metadata || {},
    role: payload.role,
    aud: payload.aud,
    created_at: "",
    is_anonymous: payload.is_anonymous,
  }
}

export async function getUser() {
  if (isServer) {
    const { user, error } = await getUserSSR()
    return { user, error }
  }

  // Fast path: parse JWT locally (no network call)
  const token = getSupabaseAccessTokenFromCookie()
  if (token) {
    const localUser = parseSupabaseUserFromJWT(token)
    if (localUser) {
      console.log("User found locally, navigating instantly.")
      return { user: localUser, error: null }
    }
  }

  // Fallback: server call when client-side token missing/invalid
  console.log("No local user found, checking server for session.")
  const serverResult = await getUserSSR()

  return {
    user: serverResult?.user || null,
    error: serverResult?.error || "User not found",
  }
}
