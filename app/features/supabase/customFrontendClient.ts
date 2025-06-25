// customFrontendClient.ts
import { createClient } from "@supabase/supabase-js"
import type { SupabaseClient } from "@supabase/supabase-js"

export function createCustomFrontendClient(): SupabaseClient<Database> {
  // Use regular client instead of browser client (from SSR package) to avoid cookie management entirely
  return createClient<Database>(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
  )
}
