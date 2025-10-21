import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { createSignal, Show, createEffect, on } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { useQueryClient } from "@tanstack/solid-query"
import {
  userSettingsQueryOptions,
  applyUserSettingsUpdate,
} from "@/features/main-cookies/query/query-options"
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
import { completedModulesQueryOptions } from "@/features/learn-page/query/query-options"

// Map JLPT levels to chapter slugs
const LEVEL_TO_CHAPTER_MAP: Record<string, string> = {
  N5: "n5-introduction",
  N4: "n4-introduction",
  N3: "n3-introduction",
  N2: "n2-introduction",
  N1: "n1-introduction",
}

export const Route = createFileRoute("/")({
  loader: async ({ context }) => {
    const { user, queryClient } = context

    // Get user settings
    await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    queryClient.prefetchQuery(completedModulesQueryOptions(user?.id || null))
  },
  component: RouteComponent,
})

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })
  const queryClient = useQueryClient()
  const [selectedChapterSlug, setSelectedChapterSlug] =
    createSignal<string>("n5-introduction")
  const [showLearningPath, setShowLearningPath] = createSignal(false)

  let stepRef: HTMLDivElement | undefined
  let learningPathRef: HTMLDivElement | undefined

  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  // Sync selected chapter slug with active deck from settings (for getting_started only)
  createEffect(
    on(
      () => [
        settingsQuery.data?.["active-deck"],
        settingsQuery.data?.["active-textbook"],
      ],
      ([activeDeck, textbook]) => {
        if (activeDeck && textbook === "getting_started") {
          setSelectedChapterSlug(activeDeck)
        }
      },
    ),
  )

  const handleLevelSelect = async (level: string) => {
    const newChapterSlug = LEVEL_TO_CHAPTER_MAP[level] || "n5-introduction"
    setSelectedChapterSlug(newChapterSlug)

    if (stepRef) {
      try {
        await createSlideWithFadeOutAnimation(stepRef, "up")

        await applyUserSettingsUpdate(
          context().user?.id || null,
          queryClient,
          {
            "active-textbook": "getting_started",
            "active-deck": newChapterSlug,
            "has-completed-onboarding": true,
          },
          { awaitDb: false },
        )

        setShowLearningPath(true)
        await new Promise((resolve) => requestAnimationFrame(resolve))
        prepareElementForEnter(stepRef, "up", true)
        await createSlideWithFadeInAnimation(stepRef, "up")
      } catch (error) {
        console.error("Animation error:", error)
        setShowLearningPath(true)
      }
    }
  }

  const handleChapterChange = async (chapterSlug: string) => {
    setSelectedChapterSlug(chapterSlug)

    await applyUserSettingsUpdate(
      context().user?.id || null,
      queryClient,
      {
        "active-deck": chapterSlug,
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

        setShowLearningPath(false)
        await new Promise((resolve) => requestAnimationFrame(resolve))
        prepareElementForEnter(stepRef, "down", true)
        await createSlideWithFadeInAnimation(stepRef, "down")
      } catch (error) {
        console.error("Animation error:", error)
        setShowLearningPath(false)
      }
    }
  }

  return (
    <>
      <BackgroundLayers />
      <Nav />
      <LoginMessage class="fixed top-6 right-24 hidden h-auto w-64 text-neutral-500 md:block" />
      <Show
        when={!settingsQuery.data?.["has-completed-onboarding"]}
        fallback={
          <div ref={learningPathRef}>
            <LearningPathPage
              settingsQuery={settingsQuery}
              onChapterChange={handleChapterChange}
              onBack={
                settingsQuery.data?.["active-textbook"] === "getting_started"
                  ? handleBack
                  : undefined
              }
              user={context().user}
            />
          </div>
        }
      >
        <div ref={stepRef}>
          <Show
            when={showLearningPath()}
            fallback={<JlptPage onLevelSelect={handleLevelSelect} />}
          >
            <div ref={learningPathRef}>
              <LearningPathPage
                settingsQuery={settingsQuery}
                onChapterChange={handleChapterChange}
                onBack={handleBack}
                user={context().user}
              />
            </div>
          </Show>
        </div>
      </Show>
    </>
  )
}
