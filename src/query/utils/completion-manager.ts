import { getUserModuleCompletions } from "@/features/supabase/db/module-progress"
import { getLocalCompletions } from "@/features/module-completion/localStorage"
import type { ModuleProgressWithLocal } from "@/query/query-options"

/**
 * Get all completed modules for a user
 * Combines database records with local storage completions (for pending sync items)
 * Returns combined list with DB items first, then local-only pending items
 */
export async function getCompletedModules(
  userId: string | null,
): Promise<ModuleProgressWithLocal[]> {
  const localCompletions = getLocalCompletions()

  if (!userId) {
    // Not logged in - return only local completions
    return localCompletions.map((modulePath) => ({
      module_path: modulePath,
      user_id: null,
      completed_at: null,
    }))
  }

  // Logged in - fetch from DB and merge with local (for pending sync items)
  const dbCompletions = await getUserModuleCompletions(userId, {
    orderBy: "completed_at",
    ascending: false,
  })

  // Get unique module paths from both sources
  const dbPaths = new Set(dbCompletions.map((c) => c.module_path))

  // Add any local-only items (not yet synced)
  const localOnly = localCompletions
    .filter((path) => !dbPaths.has(path))
    .map(
      (modulePath) =>
        ({
          module_path: modulePath,
          user_id: userId,
          completed_at: null, // pending sync
        }) as ModuleProgressWithLocal,
    )

  return [...dbCompletions, ...localOnly]
}

/**
 * Check if a module is completed in the completion list
 */
export function isModuleCompleted(
  moduleId: string,
  completions: ModuleProgressWithLocal[],
): boolean {
  return completions.some((c) => c.module_path === moduleId)
}
