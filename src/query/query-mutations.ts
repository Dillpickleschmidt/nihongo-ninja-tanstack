import { type MutationOptions, type QueryClient } from "@tanstack/solid-query"
import { getUser } from "@/features/supabase/getUser"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import {
  createSession,
  markModuleCompleted,
  getUserModuleProgress,
} from "@/features/supabase/db/module-progress"
import { isModuleCompleted } from "@/query/utils/completion-manager"
import { applyUserSettingsUpdate } from "@/query/utils/user-settings"
import { queryKeys } from "@/query/utils/query-keys"

// ============================================================================
// Types
// ============================================================================

type ModuleProgress = Awaited<ReturnType<typeof getUserModuleProgress>>[number]
type ModuleProgressWithLocal =
  | ModuleProgress
  | {
      module_path: string
      user_id: string | null
      completed_at: null
    }

type CompletionResult =
  | { type: "completed"; data: ModuleProgress }
  | { type: "already-completed" }
  | { type: "local-only" }

// ============================================================================
// User Settings Mutation
// ============================================================================

/**
 * Mutation for updating user settings
 * - Optimistically updates cache
 * - Updates cookie and syncs to DB
 * - Rolls back on error
 */
export const updateUserSettingsMutation = (
  userId: string | null,
  queryClient: QueryClient,
): MutationOptions<
  UserSettings,
  Error,
  Partial<UserSettings>,
  { previousSettings: UserSettings | undefined }
> => ({
  mutationFn: async (settings: Partial<UserSettings>) => {
    const { user } = await getUser()
    return await applyUserSettingsUpdate(
      user?.id || null,
      queryClient,
      settings,
      { awaitDb: true }, // Mutation awaits DB
    )
  },
  onMutate: async (newSettings) => {
    await queryClient.cancelQueries({
      queryKey: queryKeys.userSettings(userId),
    })

    const previousSettings = queryClient.getQueryData<UserSettings>(
      queryKeys.userSettings(userId),
    )

    queryClient.setQueryData<UserSettings>(
      queryKeys.userSettings(userId),
      (old) => ({
        ...old!,
        ...newSettings,
      }),
    )

    return { previousSettings }
  },
  onError: (_err, _vars, context) => {
    if (context?.previousSettings) {
      queryClient.setQueryData(
        queryKeys.userSettings(userId),
        context.previousSettings,
      )
    }
  },
})

// ============================================================================
// Module Completion Mutation
// ============================================================================

export const markModuleCompletedMutation = (
  queryClient: QueryClient,
): MutationOptions<
  CompletionResult,
  Error,
  {
    userId: string | null
    moduleId: string
    durationSeconds: number
  }
> => ({
  mutationFn: async ({ userId, moduleId, durationSeconds }) => {
    // Check cache to see if already completed
    const completedModules = queryClient.getQueryData<
      ModuleProgressWithLocal[]
    >(queryKeys.completedModules(userId))

    if (completedModules && isModuleCompleted(moduleId, completedModules)) {
      return { type: "already-completed" }
    }

    // Not completed yet - proceed with marking complete
    await createSession(userId, moduleId, { durationSeconds })
    const result = await markModuleCompleted(userId, moduleId)

    return result ? { type: "completed", data: result } : { type: "local-only" }
  },
  onSuccess: (result, variables) => {
    // Skip cache updates if already completed
    if (result.type === "already-completed") {
      return
    }

    // Local-only completion - invalidate to refresh
    if (result.type === "local-only") {
      queryClient.invalidateQueries({
        queryKey: queryKeys.completedModules(null),
      })
      return
    }

    // DB completion - update cache and invalidate daily time
    queryClient.setQueryData(
      queryKeys.completedModules(variables.userId),
      (old: ModuleProgressWithLocal[] | undefined) => {
        const modulePath = result.data.module_path
        // If module already in list, return as-is
        if (old?.some((c) => c.module_path === modulePath)) return old
        // prepend - most recent first, matching DB sort order
        return [result.data, ...(old || [])]
      },
    )

    // Invalidate daily time query to refresh BottomNav
    queryClient.invalidateQueries({
      queryKey: queryKeys.userDailyTime(variables.userId, new Date()),
    })
  },
})
