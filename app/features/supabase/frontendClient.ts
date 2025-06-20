// frontendClient.ts
import { createBrowserClient } from "@supabase/ssr"

export function createFrontendClient() {
  return createBrowserClient<Database>(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
  )
}
