// routes/_home/learn/$textbookId.$chapterSlug.tsx
import { createFileRoute, redirect } from "@tanstack/solid-router"
import { getDeckBySlug, getExternalResources } from "@/data/utils/core"
import { LearnPageContent } from "@/features/learn-page/components/layout/LearnPageContent"
import {
  dueFSRSCardsCountQueryOptions,
  vocabHierarchyQueryOptions,
  completedModulesQueryOptions,
  fsrsProgressQueryOptions,
  resourceThumbnailQueryOptions,
  shouldPromptPositionUpdateQueryOptions,
  userTextbookProgressQueryOptions,
  upcomingModulesQueryOptions,
} from "@/queries/learn-page-queries"
import { enrichExternalResources } from "@/features/learn-page/utils/loader-helpers"
import {
  userSettingsQueryOptions,
  updateUserSettingsMutation,
} from "@/queries/user-settings"
import type { TextbookIDEnum } from "@/data/types"
import { useMutation, useQueryClient } from "@tanstack/solid-query"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { createEffect, createSignal, Show, on } from "solid-js"
import { PositionUpdateModal } from "@/features/learn-page/components/shared/PositionUpdateModal"
import { updateUserTextbookProgress } from "@/features/supabase/db/user-textbook-progress"
import {
  shouldUpdatePosition,
  getModuleDistance,
  getUpcomingModules,
} from "@/features/learn-page/utils/learning-position-detector"

export const Route = createFileRoute("/_home/learn/$textbookId/$chapterSlug")({
  loader: async ({ context, params }) => {
    const { user, queryClient } = context
    const { textbookId, chapterSlug } = params

    // Validate deck exists (synchronous)
    const deck = getDeckBySlug(textbookId as TextbookIDEnum, chapterSlug)

    if (!deck) {
      throw redirect({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }

    // Get user settings for vocab hierarchy
    const userSettings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    // Prefetch queries without awaiting (for streaming SSR)
    queryClient.prefetchQuery(completedModulesQueryOptions(user?.id || null))
    queryClient.prefetchQuery(dueFSRSCardsCountQueryOptions(user?.id || null))
    queryClient.prefetchQuery(
      upcomingModulesQueryOptions(
        user?.id || null,
        textbookId as TextbookIDEnum,
        deck.learning_path_items,
        null,
        userSettings["upcoming-modules"]?.[textbookId as TextbookIDEnum],
      ),
    )

    const vocabHierarchyData = await queryClient.ensureQueryData(
      vocabHierarchyQueryOptions(
        textbookId,
        deck,
        userSettings["override-settings"],
      ),
    )
    // Now prefetch fsrsProgress with the slugs from vocabHierarchy
    queryClient.prefetchQuery(
      fsrsProgressQueryOptions(
        user?.id || null,
        textbookId,
        deck.slug,
        vocabHierarchyData.slugs,
      ),
    )

    // Pre-fetch all resource thumbnails in parallel (non-blocking, for streaming)
    const rawResources = getExternalResources(deck)
    const externalResources = enrichExternalResources(rawResources)
    const resourcesArray = Object.values(externalResources)
    resourcesArray.forEach((resource) =>
      queryClient.prefetchQuery(
        resourceThumbnailQueryOptions(
          resource.id,
          resource.external_url,
          resource.creator_id,
        ),
      ),
    )

    // TODO: Replace with real data from backend
    const mockStruggles = ["食べる", "飲む", "見る", "聞く", "話す"]
    const mockHistoryItems = [
      {
        name: "Vocabulary Practice",
        icon: "📚",
        amount: 50,
        color: "bg-blue-500",
      },
      { name: "Grammar Lesson", icon: "✏️", amount: 30, color: "bg-green-500" },
      { name: "Kanji Review", icon: "🔠", amount: -20, color: "bg-red-500" },
      {
        name: "Reading Practice",
        icon: "📖",
        amount: 40,
        color: "bg-purple-500",
      },
    ]

    return {
      user,
      textbookId: textbookId as TextbookIDEnum,
      chapterSlug,
      deck,
      struggles: mockStruggles,
      historyItems: mockHistoryItems,
      externalResources,
      userSettings,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
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
  const upcomingModulesQuery = useCustomQuery(() =>
    upcomingModulesQueryOptions(
      userId,
      textbookId,
      deck.learning_path_items,
      progressQuery.data?.current_module_id || null,
      settingsQuery.data?.["upcoming-modules"]?.[textbookId],
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
    const upcoming = getUpcomingModules(newPosition, deck.learning_path_items, 5)
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
    <>
      <LearnPageContent upcomingModulesQuery={upcomingModulesQuery} />
      <Show when={promptQuery.data?.suggestedPosition}>
        <PositionUpdateModal
          open={showPositionModal()}
          onOpenChange={(open) => {
            if (!open) handlePositionDismiss()
            setShowPositionModal(open)
          }}
          onConfirm={handlePositionConfirm}
          suggestedModuleId={promptQuery.data!.suggestedPosition!}
          textbookId={textbookId}
        />
      </Show>
    </>
  )
}
