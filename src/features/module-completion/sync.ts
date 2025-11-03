import { QueryClient } from "@tanstack/solid-query"
import { markModuleCompleted } from "@/features/supabase/db/module-progress"
import {
  getLocalCompletions,
  clearLocalCompletions,
} from "./localStorage"
import { queryKeys } from "@/query/utils/query-keys"

/**
 * Sync local module completions to the database.
 * Idempotent - safe to call multiple times.
 * Only clears localStorage if ALL syncs succeed.
 */
export async function syncLocalCompletionsOnLogin(
  userId: string,
  queryClient: QueryClient,
): Promise<void> {
  const localCompletions = getLocalCompletions()

  // Early return if nothing to sync (idempotent)
  if (localCompletions.length === 0) {
    return
  }

  try {
    // Sync each completion to the database
    // Use allSettled so partial failures don't block everything
    const results = await Promise.allSettled(
      localCompletions.map((modulePath) =>
        markModuleCompleted(userId, modulePath),
      ),
    )

    // Count successes and failures
    const successes = results.filter((r) => r.status === "fulfilled")
    const failures = results.filter((r) => r.status === "rejected")

    if (failures.length > 0) {
      console.warn(
        `Failed to sync ${failures.length} of ${localCompletions.length} completions`,
      )
      // Keep in localStorage for retry - don't clear
      return
    }

    // All succeeded - clear local storage
    clearLocalCompletions()

    // Refresh the completions query to show synced data
    queryClient.invalidateQueries({
      queryKey: queryKeys.completedModules(userId),
    })
  } catch (error) {
    console.error("Error syncing local completions:", error)
    // Keep in localStorage for retry - don't clear
  }
}
