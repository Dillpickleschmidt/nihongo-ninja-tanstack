// features/supabase/getUser.ts
import { isServer } from "solid-js/web"
import { getUserSSR } from "./getUserSSR"

export async function getUser() {
  if (isServer) {
    return await getUserSSR()
  } else {
    console.warn("Error: Use AuthContext on client-side")
    return { user: null, error: "Use AuthContext on client-side" }
  }
}
