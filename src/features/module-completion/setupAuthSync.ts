import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { syncLocalCompletionsOnLogin } from "./sync"
import { queryKeys } from "@/query/utils/query-keys"
import type { QueryClient } from "@tanstack/solid-query"

/**
 * Initialize Supabase auth listener to:
 * - Sync local completions on login
 * - Invalidate user-specific queries on login/logout
 * Returns unsubscribe function for cleanup.
 */
export function setupAuthSync(queryClient: QueryClient) {
  const supabase = createSupabaseClient()

  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session?.user?.id) {
      // Sync local completions and invalidate user settings to fetch from DB
      syncLocalCompletionsOnLogin(session.user.id, queryClient)
      queryClient.invalidateQueries({
        queryKey: queryKeys.userSettings(session.user.id),
      })
    } else if (event === "SIGNED_OUT") {
      // Clear all user-specific queries when signing out
      queryClient.invalidateQueries({
        queryKey: queryKeys.userSettings(null),
      })
      queryClient.invalidateQueries({
        queryKey: queryKeys.completedModules(null),
      })
      queryClient.invalidateQueries({
        queryKey: queryKeys.dueCardsCount(null, {} as any),
      })
      queryClient.invalidateQueries({
        queryKey: queryKeys.seenCardsStats(null, {} as any),
      })
    }
  })

  return data.subscription.unsubscribe
}
