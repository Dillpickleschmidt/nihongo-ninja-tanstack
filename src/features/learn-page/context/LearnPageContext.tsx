// features/learn-page/context/LearnPageContext.tsx
import {
  createContext,
  useContext,
  createEffect,
  on,
  createSignal,
} from "solid-js"
import type { ParentComponent, Accessor, Setter } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  useMutation,
  useQueryClient,
  type UseQueryResult,
} from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"
import { Route as ParentRoute } from "@/routes/_home/learn/$textbookId"
import {
  dueFSRSCardsCountQueryOptions,
  completedModulesQueryOptions,
  upcomingModulesQueryOptions,
  moduleProgressQueryOptions,
  type ModuleWithCurrent,
  type ModuleProgress,
} from "@/features/learn-page/query/query-options"
import {
  userSettingsQueryOptions,
  updateUserSettingsMutation,
} from "@/features/main-cookies/query/query-options"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import {
  shouldUpdatePosition,
  detectSequentialJump,
} from "@/features/learn-page/utils/learning-position-detector"
import { markModuleCompleted } from "@/features/supabase/db/module-progress"
import { getTextbookLearningPath } from "@/data/utils/core"

export type MobileContentView =
  | "learning-path"
  | "featured-content"
  | "your-progress"
  | "your-struggles"
  | "your-history"

interface LearnPageContextValue {
  upcomingModulesQuery: UseQueryResult<ModuleWithCurrent[], DefaultError>
  completionsQuery: UseQueryResult<ModuleProgress[], DefaultError>
  settingsQuery: UseQueryResult<UserSettings, DefaultError>
  dueCardsCountQuery: UseQueryResult<number, DefaultError>
  moduleProgressQuery: UseQueryResult<
    Record<string, ModuleProgress>,
    DefaultError
  >
  mobileContentView: Accessor<MobileContentView>
  setMobileContentView: Setter<MobileContentView>
  setCurrentPosition: (moduleId: string) => void
}

const LearnPageContext = createContext<LearnPageContextValue>()

export const LearnPageProvider: ParentComponent = (props) => {
  const parentData = ParentRoute.useLoaderData()
  const userId = ParentRoute.useRouteContext()().user?.id || null
  const queryClient = useQueryClient()

  // Get textbook-wide learning path for position tracking (reactive)
  const textbookLearningPath = () =>
    getTextbookLearningPath(parentData().textbookId)

  const [mobileContentView, setMobileContentView] =
    createSignal<MobileContentView>("learning-path")

  const settingsQuery = useCustomQuery(() => userSettingsQueryOptions(userId))
  const completionsQuery = useCustomQuery(() =>
    completedModulesQueryOptions(userId),
  )
  const dueCardsCountQuery = useCustomQuery(() =>
    dueFSRSCardsCountQueryOptions(userId),
  )
  const upcomingModulesQuery = useCustomQuery(() =>
    upcomingModulesQueryOptions(
      userId,
      parentData().textbookId,
      settingsQuery.data?.["textbook-positions"]?.[parentData().textbookId] ||
        null,
    ),
  )

  const moduleProgressQuery = useCustomQuery(() =>
    moduleProgressQueryOptions(userId, upcomingModulesQuery.data || []),
  )

  const updateMutation = useMutation(() =>
    updateUserSettingsMutation(userId, queryClient),
  )

  // Shared update function for position changes
  const updatePosition = async (moduleId: string) => {
    if (!userId) return null

    const currentTextbookId = parentData().textbookId

    updateMutation.mutate({
      "textbook-positions": {
        ...settingsQuery.data?.["textbook-positions"],
        [currentTextbookId]: moduleId,
      },
    })

    return moduleId
  }

  // Shared onSuccess handler for position updates
  const handlePositionUpdate = (moduleId: string | null) => {
    if (moduleId) {
      queryClient.invalidateQueries({
        queryKey: ["upcoming-modules", userId, parentData().textbookId],
      })
    }
  }

  // Manual position update mutation (for user-initiated changes)
  const manualUpdatePositionMutation = useMutation(() => ({
    mutationFn: updatePosition,
    onSuccess: handlePositionUpdate,
  }))

  // Auto-update position mutation (for completion-based changes)
  const autoUpdatePositionMutation = useMutation(() => ({
    mutationFn: async () => {
      if (
        !userId ||
        !completionsQuery.data ||
        completionsQuery.data.length === 0
      )
        return null

      const currentTextbookId = parentData().textbookId
      const currentLearningPath = textbookLearningPath()
      const mostRecent = completionsQuery.data[0]
      const currentPosition =
        settingsQuery.data?.["textbook-positions"]?.[currentTextbookId] || null

      // Check if should update due to nearby completion (±2 modules)
      const shouldUpdateNearby = shouldUpdatePosition(
        mostRecent.module_path,
        currentPosition,
        currentLearningPath,
      )

      if (shouldUpdateNearby) {
        return await updatePosition(mostRecent.module_path)
      }

      // Check if should update due to sequential jump (>2 modules away)
      const jumpDetection = detectSequentialJump(
        completionsQuery.data.slice(0, 2),
        currentPosition,
        currentLearningPath,
      )

      if (jumpDetection.shouldPrompt && jumpDetection.suggestedModuleId) {
        return await updatePosition(jumpDetection.suggestedModuleId)
      }

      return null
    },
    onSuccess: handlePositionUpdate,
  }))

  // Auto-complete vocab-practice modules at >=95% progress
  const autoCompleteMutation = useMutation(() => ({
    mutationFn: ({ userId, moduleId }: { userId: string; moduleId: string }) =>
      markModuleCompleted(userId, moduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["module-progress", userId],
      })
    },
  }))

  // Auto-update position when most recent completion changes
  createEffect(
    on(
      () => completionsQuery.data?.[0]?.module_path,
      (mostRecentId) => {
        if (!mostRecentId) return
        autoUpdatePositionMutation.mutate()
      },
      { defer: true },
    ),
  )

  // Auto-complete modules at >=95% progress
  createEffect(() => {
    if (!userId) return

    const progressData = moduleProgressQuery.data
    if (!progressData || Object.keys(progressData).length === 0) return

    const completedModulePaths = new Set(
      completionsQuery.data?.map((c) => c.module_path) || [],
    )

    Object.entries(progressData).forEach(([moduleId, progress]) => {
      if (progress.percentage >= 95 && !completedModulePaths.has(moduleId)) {
        autoCompleteMutation.mutate({ userId, moduleId })
      }
    })
  })

  return (
    <LearnPageContext.Provider
      value={{
        upcomingModulesQuery,
        completionsQuery,
        settingsQuery,
        dueCardsCountQuery,
        moduleProgressQuery,
        mobileContentView,
        setMobileContentView,
        setCurrentPosition: manualUpdatePositionMutation.mutate,
      }}
    >
      {props.children}
    </LearnPageContext.Provider>
  )
}

export const useLearnPageContext = () => {
  const context = useContext(LearnPageContext)
  if (!context) {
    throw new Error("useLearnPageContext must be used within LearnPageProvider")
  }
  return context
}
