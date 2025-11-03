// features/learn-page-v2/context/LearnPageContext.tsx
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
import {
  dueCardsCountQueryOptions,
  completedModulesQueryOptions,
  upcomingModulesQueryOptions,
  moduleProgressQueryOptions,
  userDailyTimeQueryOptions,
  userSessionsQueryOptions,
  userWeekTimeDataQueryOptions,
  seenCardsStatsQueryOptions,
  type ModuleWithCurrent,
  type VocabModuleProgress,
} from "@/features/learn-page/query/query-options"
import type {
  DueCountResult,
  SeenCardsStatsResult,
} from "@/features/srs-services/types"
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
import type { TextbookIDEnum } from "@/data/types"
import {
  calculateStreak,
  calculatePersonalBestStreak,
  normalizeWeekData,
  calculatePercentChange,
  calculateAverageDailyTime,
} from "@/features/learn-page/utils/stats-calculator"

export type MobileContentView =
  | "learning-path"
  | "featured-content"
  | "your-progress"
  | "your-struggles"
  | "your-history"

export type ComputedStat<T> = {
  data: T | undefined
  isPending: boolean
  isError: boolean
}

interface LearnPageContextValue {
  // Learn Page Queries
  upcomingModulesQuery: UseQueryResult<ModuleWithCurrent[], DefaultError>
  completionsQuery: UseQueryResult<ModuleProgress[], DefaultError>
  settingsQuery: UseQueryResult<UserSettings, DefaultError>
  dueCardsCountQuery: UseQueryResult<DueCountResult, DefaultError>
  moduleProgressQuery: UseQueryResult<
    Record<string, VocabModuleProgress>,
    DefaultError
  >

  // Progress Page Queries
  todayTimeQuery: UseQueryResult<number, DefaultError>
  yesterdayTimeQuery: UseQueryResult<number, DefaultError>
  sessionsQuery: UseQueryResult<PracticeSession[], DefaultError>
  weekTimeQuery: UseQueryResult<number[], DefaultError>
  seenCardsStatsQuery: UseQueryResult<SeenCardsStatsResult, DefaultError>

  // Computed Stats (as signals)
  minutesToday: Accessor<ComputedStat<number>>
  streak: Accessor<ComputedStat<number>>
  personalBest: Accessor<ComputedStat<number>>
  weekData: Accessor<number[]>
  percentChange: Accessor<ComputedStat<number>>
  avgDay: Accessor<ComputedStat<number>>
  totalHours: Accessor<ComputedStat<number>>
  dailyGoal: number

  // UI State
  mobileContentView: Accessor<MobileContentView>
  setMobileContentView: Setter<MobileContentView>

  // Actions
  setCurrentPosition: (moduleId: string) => void
}

const LearnPageContext = createContext<LearnPageContextValue>()

interface LearnPageProviderProps {
  userId: string | null
  textbookId: TextbookIDEnum
}

export const LearnPageProvider: ParentComponent<LearnPageProviderProps> = (
  props,
) => {
  const queryClient = useQueryClient()

  // Get textbook-wide learning path for position tracking (reactive)
  const textbookLearningPath = () => getTextbookLearningPath(props.textbookId)

  const [mobileContentView, setMobileContentView] =
    createSignal<MobileContentView>("learning-path")

  // ============================================================================
  // Learn Page Queries
  // ============================================================================

  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(props.userId),
  )
  const completionsQuery = useCustomQuery(() =>
    completedModulesQueryOptions(props.userId),
  )
  const dueCardsCountQuery = useCustomQuery(() =>
    dueCardsCountQueryOptions(
      props.userId,
      settingsQuery.data!["service-preferences"],
    ),
  )
  const upcomingModulesQuery = useCustomQuery(() =>
    upcomingModulesQueryOptions(
      props.userId,
      props.textbookId,
      settingsQuery.data!["learning-path-positions"]?.[props.textbookId] || null,
    ),
  )

  const moduleProgressQuery = useCustomQuery(() =>
    moduleProgressQueryOptions(props.userId, upcomingModulesQuery),
  )

  const todayTimeQuery = useCustomQuery(() =>
    userDailyTimeQueryOptions(props.userId, new Date()),
  )
  const yesterdayTimeQuery = useCustomQuery(() => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    return userDailyTimeQueryOptions(props.userId, yesterday)
  })
  const sessionsQuery = useCustomQuery(() =>
    userSessionsQueryOptions(props.userId),
  )
  const weekTimeQuery = useCustomQuery(() =>
    userWeekTimeDataQueryOptions(props.userId),
  )
  const seenCardsStatsQuery = useCustomQuery(() =>
    seenCardsStatsQueryOptions(
      props.userId,
      settingsQuery.data!["service-preferences"],
    ),
  )

  // ============================================================================
  // Computed Stats
  // ============================================================================

  const minutesToday = () => ({
    data:
      todayTimeQuery.isPending || todayTimeQuery.isError
        ? undefined
        : Math.round((todayTimeQuery.data ?? 0) / 60),
    isPending: todayTimeQuery.isPending,
    isError: todayTimeQuery.isError,
  })

  const streak = () => ({
    data:
      sessionsQuery.isPending || sessionsQuery.isError
        ? undefined
        : calculateStreak(sessionsQuery.data),
    isPending: sessionsQuery.isPending,
    isError: sessionsQuery.isError,
  })

  const personalBest = () => ({
    data:
      sessionsQuery.isPending || sessionsQuery.isError
        ? undefined
        : calculatePersonalBestStreak(sessionsQuery.data),
    isPending: sessionsQuery.isPending,
    isError: sessionsQuery.isError,
  })

  const weekData = () => {
    if (weekTimeQuery.isPending || weekTimeQuery.isError)
      return [0, 0, 0, 0, 0, 0, 0]
    return normalizeWeekData(weekTimeQuery.data)
  }

  const percentChange = () => ({
    data:
      todayTimeQuery.isPending ||
      todayTimeQuery.isError ||
      yesterdayTimeQuery.isPending ||
      yesterdayTimeQuery.isError
        ? undefined
        : calculatePercentChange(
            todayTimeQuery.data ?? 0,
            yesterdayTimeQuery.data ?? 0,
          ),
    isPending: todayTimeQuery.isPending || yesterdayTimeQuery.isPending,
    isError: todayTimeQuery.isError || yesterdayTimeQuery.isError,
  })

  const avgDay = () => ({
    data:
      sessionsQuery.isPending || sessionsQuery.isError
        ? undefined
        : calculateAverageDailyTime(sessionsQuery.data, 30),
    isPending: sessionsQuery.isPending,
    isError: sessionsQuery.isError,
  })

  const totalHours = () => ({
    data:
      sessionsQuery.isPending || sessionsQuery.isError
        ? undefined
        : Math.floor(
            sessionsQuery.data.reduce((sum, s) => sum + s.duration_seconds, 0) /
              3600,
          ),
    isPending: sessionsQuery.isPending,
    isError: sessionsQuery.isError,
  })

  const dailyGoal = 30 // TODO: make this configurable from settings

  // ============================================================================
  // Mutations
  // ============================================================================

  const updateMutation = useMutation(() =>
    updateUserSettingsMutation(props.userId, queryClient),
  )

  // Shared update function for position changes
  const updatePosition = async (moduleId: string) => {
    if (!props.userId) return null

    updateMutation.mutate({
      "learning-path-positions": {
        ...settingsQuery.data!["learning-path-positions"],
        [props.textbookId]: moduleId,
      },
    })

    return moduleId
  }

  // Shared onSuccess handler for position updates
  const handlePositionUpdate = (moduleId: string | null) => {
    if (moduleId) {
      queryClient.invalidateQueries({
        queryKey: ["upcoming-modules", props.userId, props.textbookId],
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
        !props.userId ||
        completionsQuery.isPending ||
        completionsQuery.isError
      )
        return null
      if (completionsQuery.data.length === 0) return null

      const currentLearningPath = textbookLearningPath()
      const mostRecent = completionsQuery.data[0]
      const currentPosition =
        settingsQuery.data!["learning-path-positions"]?.[props.textbookId] || null

      // Check if should update due to nearby completion (�2 modules)
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
        queryKey: ["module-progress", props.userId],
      })
    },
  }))

  // ============================================================================
  // Effects
  // ============================================================================

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
    if (!props.userId || completionsQuery.isPending || completionsQuery.isError)
      return

    const progressData = moduleProgressQuery.data
    if (!progressData || Object.keys(progressData).length === 0) return

    const completedModulePaths = new Set(
      completionsQuery.data.map((c) => c.module_path),
    )

    Object.entries(progressData).forEach(([moduleId, progress]) => {
      if (progress.percentage >= 95 && !completedModulePaths.has(moduleId)) {
        autoCompleteMutation.mutate({ userId: props.userId!, moduleId })
      }
    })
  })

  return (
    <LearnPageContext.Provider
      value={{
        // Learn Page Queries
        upcomingModulesQuery,
        completionsQuery,
        settingsQuery,
        dueCardsCountQuery,
        moduleProgressQuery,

        // Progress Page Queries
        todayTimeQuery,
        yesterdayTimeQuery,
        sessionsQuery,
        weekTimeQuery,
        seenCardsStatsQuery,

        // Computed Stats
        minutesToday,
        streak,
        personalBest,
        weekData,
        percentChange,
        avgDay,
        totalHours,
        dailyGoal,

        // UI State
        mobileContentView,
        setMobileContentView,

        // Actions
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
