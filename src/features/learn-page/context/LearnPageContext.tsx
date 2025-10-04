// features/learn-page/context/LearnPageContext.tsx
import { createContext, useContext, createEffect, on } from "solid-js"
import type { ParentComponent } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  useMutation,
  useQueryClient,
  type UseQueryResult,
} from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"
import { Route } from "@/routes/_home/learn/$textbookId.$chapterSlug"
import {
  dueFSRSCardsCountQueryOptions,
  vocabHierarchyQueryOptions,
  completedModulesQueryOptions,
  fsrsProgressQueryOptions,
  userTextbookProgressQueryOptions,
  upcomingModulesQueryOptions,
  type ModuleWithCurrent,
} from "@/features/learn-page/query/query-options"
import {
  userSettingsQueryOptions,
  updateUserSettingsMutation,
} from "@/features/main-cookies/query/query-options"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import { updateUserTextbookProgress } from "@/features/supabase/db/user-textbook-progress"
import type { VocabularyItem } from "@/data/types"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import {
  shouldUpdatePosition,
  detectSequentialJump,
  getUpcomingModules,
} from "@/features/learn-page/utils/learning-position-detector"

interface LearnPageContextValue {
  upcomingModulesQuery: UseQueryResult<ModuleWithCurrent[], DefaultError>
  completionsQuery: UseQueryResult<ModuleCompletion[], DefaultError>
  settingsQuery: UseQueryResult<UserSettings, DefaultError>
  vocabHierarchyQuery: UseQueryResult<
    {
      chapterVocabulary: VocabularyItem[]
      wordHierarchyData: VocabHierarchy | null
      slugs: string[]
    },
    DefaultError
  >
  fsrsProgressQuery: UseQueryResult<
    Record<string, FSRSCardData> | null,
    DefaultError
  >
  dueCardsCountQuery: UseQueryResult<number, DefaultError>
  setCurrentPosition: (moduleId: string) => void
}

const LearnPageContext = createContext<LearnPageContextValue>()

export const LearnPageProvider: ParentComponent = (props) => {
  const { textbookId, deck } = Route.useLoaderData()()
  const userId = Route.useRouteContext()().user?.id || null
  const queryClient = useQueryClient()

  const settingsQuery = useCustomQuery(() => userSettingsQueryOptions(userId))
  const completionsQuery = useCustomQuery(() =>
    completedModulesQueryOptions(userId),
  )
  const progressQuery = useCustomQuery(() =>
    userTextbookProgressQueryOptions(userId, textbookId),
  )
  const dueCardsCountQuery = useCustomQuery(() =>
    dueFSRSCardsCountQueryOptions(userId),
  )
  const upcomingModulesQuery = useCustomQuery(() =>
    upcomingModulesQueryOptions(
      userId,
      textbookId,
      deck.learning_path_items,
      progressQuery.data?.current_module_id || null,
      settingsQuery.data?.["upcoming-modules"]?.[textbookId],
    ),
  )
  const vocabHierarchyQuery = useCustomQuery(() =>
    vocabHierarchyQueryOptions(
      textbookId,
      deck,
      settingsQuery.data?.["override-settings"],
    ),
  )
  const fsrsProgressQuery = useCustomQuery(() =>
    fsrsProgressQueryOptions(
      userId,
      textbookId,
      deck.slug,
      vocabHierarchyQuery.data?.slugs || [],
    ),
  )

  const updateMutation = useMutation(() =>
    updateUserSettingsMutation(userId, queryClient),
  )

  // Helper to update upcoming modules cookie when position changes
  const updateUpcomingModulesCookie = (newPosition: string) => {
    const currentModuleId = deck.learning_path_items.find(
      (moduleId) => moduleId === newPosition,
    )
    const upcoming = getUpcomingModules(
      newPosition,
      deck.learning_path_items,
      5,
    )
    const withCurrent = currentModuleId
      ? [{ id: currentModuleId }, ...upcoming]
      : upcoming
    const moduleIds = withCurrent.map((item) => item.id)

    updateMutation.mutate({
      "upcoming-modules": {
        ...settingsQuery.data?.["upcoming-modules"],
        [textbookId]: moduleIds,
      },
    })
  }

  // Shared invalidation helper for all position updates
  const invalidatePositionQueries = () => {
    queryClient.invalidateQueries({
      queryKey: ["textbook-progress", userId, textbookId],
    })
    queryClient.invalidateQueries({
      queryKey: ["upcoming-modules", userId, textbookId],
    })
  }

  // Shared update function for position changes
  const updatePosition = async (moduleId: string) => {
    if (!userId) return null
    await updateUserTextbookProgress(userId, textbookId, moduleId)
    return moduleId
  }

  // Shared onSuccess handler for position updates
  const handlePositionUpdate = (moduleId: string | null) => {
    if (moduleId) {
      updateUpcomingModulesCookie(moduleId)
      invalidatePositionQueries()
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

      const mostRecent = completionsQuery.data[0]
      const currentPosition = progressQuery.data?.current_module_id || null

      // Check if should update due to nearby completion (±2 modules)
      const shouldUpdateNearby = shouldUpdatePosition(
        mostRecent.module_path,
        currentPosition,
        deck.learning_path_items,
      )

      if (shouldUpdateNearby) {
        return await updatePosition(mostRecent.module_path)
      }

      // Check if should update due to sequential jump (>2 modules away)
      const jumpDetection = detectSequentialJump(
        completionsQuery.data.slice(0, 2),
        currentPosition,
        deck.learning_path_items,
      )

      if (jumpDetection.shouldPrompt && jumpDetection.suggestedModuleId) {
        return await updatePosition(jumpDetection.suggestedModuleId)
      }

      return null
    },
    onSuccess: handlePositionUpdate,
  }))

  // Update active textbook/deck when route params change
  createEffect(() => {
    const { "active-textbook": activeTextbook, "active-deck": activeDeck } =
      settingsQuery.data || {}

    if (activeTextbook !== textbookId || activeDeck !== deck.slug) {
      updateMutation.mutate({
        "active-textbook": textbookId,
        "active-deck": deck.slug,
      })
    }
  })

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

  return (
    <LearnPageContext.Provider
      value={{
        upcomingModulesQuery,
        completionsQuery,
        settingsQuery,
        vocabHierarchyQuery,
        fsrsProgressQuery,
        dueCardsCountQuery,
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
