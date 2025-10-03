// features/learn-page/context/LearnPageContext.tsx
import {
  createContext,
  useContext,
  createSignal,
  createEffect,
  Show,
  on,
} from "solid-js"
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
  shouldPromptPositionUpdateQueryOptions,
  userTextbookProgressQueryOptions,
  upcomingModulesQueryOptions,
  type ModuleWithCurrent,
} from "@/features/learn-page/query/query-options"
import {
  userSettingsQueryOptions,
  updateUserSettingsMutation,
} from "@/queries/user-settings"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import { updateUserTextbookProgress } from "@/features/supabase/db/user-textbook-progress"
import type { VocabularyItem } from "@/data/types"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import {
  shouldUpdatePosition,
  getModuleDistance,
  getUpcomingModules,
} from "@/features/learn-page/utils/learning-position-detector"
import { PositionUpdateModal } from "@/features/learn-page/components/shared/PositionUpdateModal"

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
  promptQuery: UseQueryResult<
    {
      shouldPrompt: boolean
      suggestedPosition: string | null
    },
    DefaultError
  >
  dueCardsCountQuery: UseQueryResult<number, DefaultError>
}

const LearnPageContext = createContext<LearnPageContextValue>()

export const LearnPageProvider: ParentComponent = (props) => {
  const { textbookId, deck } = Route.useLoaderData()()
  const userId = Route.useRouteContext()().user?.id || null
  const queryClient = useQueryClient()

  const [showPositionModal, setShowPositionModal] = createSignal(false)
  const [handledSuggestions, setHandledSuggestions] = createSignal<Set<string>>(
    new Set(),
  )

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
    const currentModule = deck.learning_path_items.find(
      (item) => item.id === newPosition,
    )
    const upcoming = getUpcomingModules(
      newPosition,
      deck.learning_path_items,
      5,
    )
    const withCurrent = currentModule ? [currentModule, ...upcoming] : upcoming
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
      queryKey: ["should-prompt-position-update", userId, textbookId],
    })
    queryClient.invalidateQueries({
      queryKey: ["upcoming-modules", userId, textbookId],
    })
  }

  // Auto-update position mutation
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

      const shouldUpdate = shouldUpdatePosition(
        mostRecent.module_path,
        currentPosition,
        deck.learning_path_items,
      )

      if (shouldUpdate) {
        await updateUserTextbookProgress(
          userId,
          textbookId,
          mostRecent.module_path,
        )
        return mostRecent.module_path
      }

      return null
    },
    onSuccess: (updatedPosition) => {
      if (updatedPosition) {
        updateUpcomingModulesCookie(updatedPosition)
        invalidatePositionQueries()
      }
    },
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

  // Check if we should prompt for position update
  const dismissedPromptId = () =>
    settingsQuery.data?.["dismissed-position-prompts"]?.[textbookId]

  const currentPosition = () => progressQuery.data?.current_module_id || null

  const promptQuery = useCustomQuery(() =>
    shouldPromptPositionUpdateQueryOptions(
      userId,
      textbookId,
      deck.learning_path_items,
      completionsQuery.data || [],
      dismissedPromptId(),
      currentPosition(),
    ),
  )

  // Auto-update position when most recent completion changes
  createEffect(
    on(
      () => completionsQuery.data?.[0]?.module_path,
      (mostRecentId) => {
        if (!mostRecentId) return

        // Early exit: only run mutation if completion is relevant
        const currentPos = currentPosition()
        const distance = currentPos
          ? getModuleDistance(
              mostRecentId,
              currentPos,
              deck.learning_path_items,
            )
          : -1

        // Only auto-update if: no position exists, or within ±2 modules
        if (currentPos && distance > 2) {
          return
        }

        autoUpdatePositionMutation.mutate()
      },
      { defer: true },
    ),
  )

  // Show modal when prompt is needed (but not if already handled)
  createEffect(() => {
    const suggestion = promptQuery.data?.suggestedPosition
    if (
      promptQuery.data?.shouldPrompt &&
      suggestion &&
      !handledSuggestions().has(suggestion)
    ) {
      setShowPositionModal(true)
    }
  })

  const handlePositionConfirm = async () => {
    const suggestedPosition = promptQuery.data?.suggestedPosition

    if (userId && suggestedPosition) {
      setHandledSuggestions((prev) => new Set(prev).add(suggestedPosition))
      setShowPositionModal(false)

      await updateUserTextbookProgress(userId, textbookId, suggestedPosition)

      updateUpcomingModulesCookie(suggestedPosition)
      invalidatePositionQueries()
    }
  }

  const handlePositionDismiss = () => {
    const suggestedPosition = promptQuery.data?.suggestedPosition
    if (suggestedPosition) {
      // Mark this suggestion as handled to prevent re-showing
      setHandledSuggestions((prev) => new Set(prev).add(suggestedPosition))

      // Save dismissed prompt to settings
      updateMutation.mutate({
        "dismissed-position-prompts": {
          ...settingsQuery.data?.["dismissed-position-prompts"],
          [textbookId]: suggestedPosition,
        },
      })
    }
    setShowPositionModal(false)
  }

  return (
    <LearnPageContext.Provider
      value={{
        upcomingModulesQuery,
        completionsQuery,
        settingsQuery,
        vocabHierarchyQuery,
        fsrsProgressQuery,
        promptQuery,
        dueCardsCountQuery,
      }}
    >
      {props.children}
      <Show when={promptQuery.data?.suggestedPosition}>
        <PositionUpdateModal
          open={showPositionModal()}
          onOpenChange={(open) => {
            if (!open) handlePositionDismiss()
            setShowPositionModal(open)
          }}
          onConfirm={handlePositionConfirm}
        />
      </Show>
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
