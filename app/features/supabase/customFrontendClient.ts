// customFrontendClient.ts
import { createBrowserClient } from "@supabase/ssr"
import { getProjectRef } from "./getProjectRef"
import type { SupabaseClient } from "@supabase/supabase-js"

function getAccessTokenFromCookie(): string | null {
  if (typeof document === "undefined") return null
  const projectRef = getProjectRef(import.meta.env.VITE_SUPABASE_URL)
  const cookies = document.cookie.split(";")
  const tokenCookie = cookies.find((cookie) =>
    cookie.trim().startsWith(`sb-${projectRef}-auth-token=`),
  )
  return tokenCookie ? tokenCookie.split("=")[1] : null
}

function parseJWTPayload(token: string) {
  try {
    const payload = token.split(".")[1]
    const decoded = JSON.parse(atob(payload))
    const now = Math.floor(Date.now() / 1000)
    if (decoded.exp && decoded.exp < now) return null

    return {
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
  } catch {
    return null
  }
}

export function createCustomFrontendClient(): SupabaseClient<Database> {
  const supabase = createBrowserClient<Database>(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
  )

  // Store original getUser method
  const originalGetUser = supabase.auth.getUser.bind(supabase.auth)

  // Override just the getUser method
  supabase.auth.getUser = async () => {
    // Fast path: check JWT token directly
    const token = getAccessTokenFromCookie()
    if (token) {
      const user = parseJWTPayload(token)
      if (user) {
        return { data: { user }, error: null }
      }
    }

    // Fallback to original Supabase method
    return originalGetUser()
  }

  return supabase
}
