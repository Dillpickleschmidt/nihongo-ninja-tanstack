import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { Show } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { useQueryClient } from "@tanstack/solid-query"
import {
  userSettingsQueryOptions,
  completedModulesQueryOptions,
  allLearningPathsQueryOptions,
  chapterModulesQueryOptions,
} from "@/query/query-options"
import { applyUserSettingsUpdate } from "@/query/utils/user-settings"
import { BackgroundLayers } from "@/features/homepage/shared/components/BackgroundLayers"
import Nav from "@/features/homepage/shared/components/Nav2"
import LoginMessage from "@/features/homepage/shared/assets/login-message.svg"
import { JlptPage } from "@/features/homepage/pages/jlpt"
import { LearningPathPage } from "@/features/homepage/pages/learning-path"
import {
  createSlideWithFadeOutAnimation,
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"

// Map JLPT levels to chapter slugs
const LEVEL_TO_CHAPTER_MAP: Record<string, string> = {
  N5: "n5-introduction",
  N4: "n4-introduction",
  N3: "n3-introduction",
  N2: "n2-introduction",
  N1: "n1-introduction",
}

export const Route = createFileRoute("/_home/")({
  loader: ({ context }) => {
    const { user, queryClient } = context

    // User settings already loaded by __root.tsx, guaranteed to be cached
    const settings = queryClient.getQueryData(
      userSettingsQueryOptions(user?.id || null).queryKey,
    )!

    const learningPathId = settings["active-learning-path"] || "getting_started"
    const chapterSlug = settings["active-chapter"] || "n5-introduction"

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
  const loaderData = Route.useLoaderData()

  let stepRef: HTMLDivElement | undefined
  let learningPathRef: HTMLDivElement | undefined

  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  const handleLevelSelect = async (level: string) => {
    const newChapterSlug = LEVEL_TO_CHAPTER_MAP[level] || "n5-introduction"

    if (stepRef) {
      try {
        await createSlideWithFadeOutAnimation(stepRef, "up")

        await applyUserSettingsUpdate(
          context().user?.id || null,
          queryClient,
          {
            "active-learning-path": "getting_started",
            "active-chapter": newChapterSlug,
            "has-completed-onboarding": true,
          },
          { awaitDb: false },
        )
      } catch (error) {
        console.error("Animation error:", error)
      }
    }
  }

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

  const handleBack = async () => {
    if (learningPathRef) {
      try {
        await createSlideWithFadeOutAnimation(learningPathRef, "down")

        await applyUserSettingsUpdate(
          context().user?.id || null,
          queryClient,
          {
            "has-completed-onboarding": false,
          },
          { awaitDb: false },
        )
      } catch (error) {
        console.error("Animation error:", error)
      }
    }
  }

  return (
    <>
      <BackgroundLayers />
      <Nav />
      <Show when={!context().user}>
        <LoginMessage class="fixed top-6 right-24 hidden h-auto w-64 text-neutral-500 md:block" />
      </Show>
      <Show
        when={!settingsQuery.data?.["has-completed-onboarding"]}
        fallback={
          <div ref={learningPathRef}>
            <LearningPathPage
              settingsQuery={settingsQuery}
              onChapterChange={handleChapterChange}
              onBack={
                settingsQuery.data?.["active-learning-path"] ===
                "getting_started"
                  ? handleBack
                  : undefined
              }
              user={context().user}
            />
          </div>
        }
      >
        <div ref={stepRef}>
          <JlptPage onLevelSelect={handleLevelSelect} />
        </div>
      </Show>
    </>
  )
}
