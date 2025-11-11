import { useNavigate } from "@tanstack/solid-router"
import { createMemo } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import {
  userSettingsQueryOptions,
  allLearningPathsQueryOptions,
  upcomingModulesQueryOptions,
  completedModulesQueryOptions,
  recentlyStudiedDecksQueryOptions,
} from "@/query/query-options"
import { useVocabPageContext } from "@/features/vocab-page/layout/VocabPageProvider"
import type { TextbookIDEnum } from "@/data/types"

export interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

/**
 * Main hook consolidating all vocab dashboard business logic
 * Handles:
 * - Data querying (recent decks, coming up modules, folders, etc.)
 * - Navigation actions
 */
export function useVocabDashboard() {
  const context = useRouteContext({ from: RootRoute.id })
  const navigate = useNavigate()

  // Vocab page context with folders and decks
  const vocabState = useVocabPageContext()

  // User settings
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  // Learning paths data
  const learningPathsQuery = useCustomQuery(() =>
    allLearningPathsQueryOptions(context().user?.id || null),
  )

  // Recently studied decks
  const recentlyStudiedQuery = useCustomQuery(() =>
    recentlyStudiedDecksQueryOptions(
      context().user?.id || null,
      vocabState.userDecks(),
    ),
  )

  // Upcoming modules from active learning path and chapter
  const upcomingModulesQuery = useCustomQuery(() => {
    const activePath = settingsQuery.data![
      "active-learning-path"
    ] as TextbookIDEnum
    const activeChapter = settingsQuery.data!["active-chapter"] as string
    return upcomingModulesQueryOptions(
      context().user?.id || null,
      activePath,
      activeChapter,
    )
  })

  // Completed modules (to filter upcoming)
  const completedModulesQuery = useCustomQuery(() =>
    completedModulesQueryOptions(context().user?.id || null),
  )

  // Navigation actions
  const navigateToPath = (path: string) => {
    navigate({ to: path })
  }

  const navigateToDashboard = () => {
    navigate({ to: "/vocab" })
  }

  // Computed values for loading states
  const isLoadingRecent = createMemo(
    () => recentlyStudiedQuery.isPending || recentlyStudiedQuery.isError,
  )

  const isLoadingComingUp = createMemo(
    () =>
      upcomingModulesQuery.isPending ||
      upcomingModulesQuery.isError ||
      completedModulesQuery.isPending ||
      completedModulesQuery.isError,
  )

  const isLoading = createMemo(
    () =>
      settingsQuery.isPending ||
      learningPathsQuery.isPending ||
      isLoadingRecent() ||
      isLoadingComingUp(),
  )

  return {
    // Queries (full UseQueryResult objects)
    recentlyStudiedQuery,
    upcomingModulesQuery,
    completedModulesQuery,

    // Data
    folders: () => vocabState.folders(),
    userDecks: () => vocabState.userDecks(),
    learningPaths: () => {
      if (learningPathsQuery.isPending || learningPathsQuery.isError) {
        return []
      }
      return learningPathsQuery.data || []
    },

    // Actions
    navigateToPath,
    navigateToDashboard,

    // Loading states
    isLoadingRecent,
    isLoadingComingUp,
    isLoading,
    isLoadingSettings: () => settingsQuery.isPending,
  }
}
