import {
  createFileRoute,
  notFound,
  useRouteContext,
} from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import {
  userSettingsQueryOptions,
  chapterModulesQueryOptions,
  allLearningPathsQueryOptions,
} from "@/query/query-options"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { useQueryClient } from "@tanstack/solid-query"
import { BackgroundLayers } from "@/features/homepage/shared/components/BackgroundLayers"
import Nav from "@/features/homepage/shared/components/Nav2"
import LoginMessage from "@/features/homepage/shared/assets/login-message.svg"
import { LearningPathPage } from "@/features/homepage/pages/learning-path"
import { completedModulesQueryOptions } from "@/query/query-options"
import { applyUserSettingsUpdate } from "@/query/utils/user-settings"

export const Route = createFileRoute("/_home/$learningPathId/$chapterSlug")({
  beforeLoad: async ({ context, params }) => {
    const { user, queryClient } = context
    const { learningPathId, chapterSlug } = params

    // Ensure learning paths are fetched for validation
    const learningPaths = await queryClient.ensureQueryData(
      allLearningPathsQueryOptions(user?.id || null),
    )

    // Check if learningPathId is valid
    const learningPath = learningPaths.find((lp) => lp.id === learningPathId)
    if (!learningPath) {
      console.error("No learning path id matched")
      throw notFound()
    }
    // Check if chapterSlug is valid
    const chapterExists = learningPath.chapters.some(
      (ch) => ch.slug === chapterSlug,
    )
    if (!chapterExists) {
      console.error("No chapter slug matched")
      throw notFound()
    }
  },
  loader: async ({ context, params }) => {
    const { user, queryClient } = context
    const { learningPathId, chapterSlug } = params

    // Sync URL params to settings so settings-based queries see correct values
    await applyUserSettingsUpdate(
      user?.id || null,
      queryClient,
      {
        "active-learning-path": learningPathId,
        "active-chapter": chapterSlug,
      },
      { awaitDb: false },
    )

    // Prefetch queries so they're cached when context queries them
    queryClient.prefetchQuery(allLearningPathsQueryOptions(user?.id || null))
    queryClient.prefetchQuery(
      chapterModulesQueryOptions(learningPathId, chapterSlug),
    )
    queryClient.prefetchQuery(completedModulesQueryOptions(user?.id || null))

    return {
      learningPathId,
      chapterSlug,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })
  const queryClient = useQueryClient()
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  const handleChapterChange = async (chapterSlug: string) => {
    await applyUserSettingsUpdate(
      context().user?.id || null,
      queryClient,
      {
        "active-chapter": chapterSlug,
      },
      { awaitDb: false },
    )
  }

  return (
    <>
      <BackgroundLayers />
      <Nav />
      <LoginMessage class="fixed top-6 right-24 hidden h-auto w-64 text-neutral-500 md:block" />
      <LearningPathPage
        settingsQuery={settingsQuery}
        user={context().user}
        onChapterChange={handleChapterChange}
      />
    </>
  )
}
