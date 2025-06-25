// features/supabase/getUser.ts
import { isServer } from "solid-js/web"
import { getUserSSR } from "./getUserSSR"
import { createSupabaseClient } from "./createSupabaseClient"

export async function getUser() {
  if (isServer) {
    const { user, error } = await getUserSSR()
    return { user, error }
  }

  const supabase = createSupabaseClient()
  const {
    data: { user: localUser },
  } = await supabase.auth.getUser()

  // 1. If we have a user locally, we are done. Instant navigation.
  if (localUser) {
    console.log("User found locally, navigating instantly.")
    return { user: localUser, error: null }
  }

  // 2. If no local user, RPC call to sync with the server.
  console.log("No local user found, checking server for session.")
  const serverResult = await getUserSSR()

  // 3. If the server also confirms there's no user, then we are truly logged out.
  return {
    user: serverResult?.user || null,
    error: serverResult?.error || "User not found",
  }
}
