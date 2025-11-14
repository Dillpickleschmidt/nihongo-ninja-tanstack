import { useNavigate } from "@tanstack/solid-router"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { useRouteContext } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { Route as RootRoute } from "@/routes/__root"
import {
  allLearningPathsQueryOptions,
  upcomingModulesQueryOptions,
  completedModulesQueryOptions,
  recentlyStudiedDecksQueryOptions,
} from "@/query/query-options"
import { useVocabPageContext } from "@/features/vocab-page/layout/VocabPageContext"
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
  const queryClient = useQueryClient()

  // Vocab page context with folders and decks (already has settingsQuery)
  const vocabState = useVocabPageContext()

  // Get settings from vocabState (reuses query from useVocabPageState)
  const settingsQuery = vocabState.settingsQuery

  // Learning paths data (prefetched in __root.tsx)
  const learningPathsQuery = useCustomQuery(() =>
    allLearningPathsQueryOptions(context().user?.id || null),
  )

  // Recently studied decks (prefetched in vocab loader)
  const recentlyStudiedQuery = useCustomQuery(() =>
    recentlyStudiedDecksQueryOptions(
      context().user?.id || null,
      vocabState.userDecks(),
      queryClient,
    ),
  )

  // Upcoming modules from active learning path and chapter
  // Settings are guaranteed to be available from __root.tsx loader
  const upcomingModulesQuery = useCustomQuery(() => {
    const activePath = settingsQuery.data![
      "active-learning-path"
    ] as TextbookIDEnum
    const activeChapter = settingsQuery.data!["active-chapter"] as string

    return upcomingModulesQueryOptions(
      context().user?.id || null,
      activePath,
      activeChapter,
      queryClient,
    )
  })

  // Completed modules (prefetched in vocab loader)
  const completedModulesQuery = useCustomQuery(() =>
    completedModulesQueryOptions(context().user?.id || null),
  )

  return {
    // Queries (full UseQueryResult objects)
    recentlyStudiedQuery,
    upcomingModulesQuery,
    completedModulesQuery,
    learningPathsQuery,

    // Data
    folders: () => vocabState.folders(),
    userDecks: () => vocabState.userDecks(),
    learningPaths: () => {
      if (learningPathsQuery.isPending || learningPathsQuery.isError) {
        return []
      }
      return learningPathsQuery.data || []
    },

    // Navigation (inline wrapper removed - return navigate directly)
    navigate,
  }
}
