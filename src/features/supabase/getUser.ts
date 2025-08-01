// features/supabase/getUser.ts
import { createSupabaseClient } from "./createSupabaseClient"

export async function getUser() {
  const supabase = createSupabaseClient()

  try {
    // Works on both client and server with local verification
    const { data, error: claimsError } = await supabase.auth.getClaims()

    if (claimsError || !data) {
      return {
        user: null,
        error: claimsError?.message || "Authentication failed",
      }
    }

    const { claims } = data
    const user = {
      id: claims.sub,
      email: claims.email,
      phone: claims.phone,
      app_metadata: claims.app_metadata || {},
      user_metadata: claims.user_metadata || {},
      role: claims.role,
      aud: claims.aud,
      created_at: "",
      is_anonymous: claims.is_anonymous || false,
    }

    return { user, error: null }
  } catch (error) {
    return { user: null, error: "Authentication failed" }
  }
}
