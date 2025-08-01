// createSupabaseClient.ts
import { isServer } from "solid-js/web"
import { createBrowserClient } from "@supabase/ssr"
import { createBackendClient } from "./backendClient"

export const createSupabaseClient = () => {
  if (isServer) {
    return createBackendClient()
  } else {
    return createBrowserClient<Database>(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_PUBLISHABLE_OR_ANON_KEY,
    )
  }
}
