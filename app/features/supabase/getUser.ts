// features/supabase/getUser.ts (Performant Version)
import { isServer } from "solid-js/web"
import { getUserSSR } from "./getUserSSR"
import { createFrontendClient } from "./frontendClient"

export async function getUser() {
  if (isServer) {
    const { user, error } = await getUserSSR()
    return { user, error }
  }

  const supabase = createFrontendClient()
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

  if (serverResult && "session" in serverResult && serverResult.session) {
    console.log("Client state was empty, syncing session from server.")
    await supabase.auth.setSession({
      access_token: serverResult.session.access_token,
      refresh_token: serverResult.session.refresh_token,
    })

    const {
      data: { user: finalUser },
    } = await supabase.auth.getUser()
    return { user: finalUser, error: null }
  }

  // 3. If the server also confirms there's no user, then we are truly logged out.
  return { user: null, error: serverResult?.error || "User not found" }
}
