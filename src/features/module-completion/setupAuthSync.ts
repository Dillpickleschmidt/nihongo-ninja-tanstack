import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { syncLocalCompletionsOnLogin } from "./sync"
import type { QueryClient } from "@tanstack/solid-query"

/**
 * Initialize Supabase auth listener to sync local completions on login.
 * Returns unsubscribe function for cleanup.
 */
export function setupAuthSync(queryClient: QueryClient) {
  const supabase = createSupabaseClient()

  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session?.user?.id) {
      // Fire and forget - don't await to avoid deadlocks
      syncLocalCompletionsOnLogin(session.user.id, queryClient)
    }
  })

  return data.subscription.unsubscribe
}
