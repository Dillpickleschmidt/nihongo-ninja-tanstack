import {
  createFileRoute,
  useRouteContext,
  redirect,
} from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { createSignal, Switch, Match, createEffect } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
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
import { applyUserSettingsUpdate } from "@/features/main-cookies/query/query-options"
import { useQueryClient } from "@tanstack/solid-query"

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
    const settings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    // If active textbook is NOT getting_started, redirect to that textbook's route
    if (
      settings["active-textbook"] &&
      settings["active-textbook"] !== "getting_started" &&
      settings["active-deck"]
    ) {
      throw redirect({
        to: "/$textbookId/$chapterSlug",
        params: {
          textbookId: settings["active-textbook"],
          chapterSlug: settings["active-deck"],
        },
      })
    }

    queryClient.prefetchQuery(completedModulesQueryOptions(user?.id || null))
  },
  component: RouteComponent,
})

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })
  const queryClient = useQueryClient()
  const [selectedChapterSlug, setSelectedChapterSlug] =
    createSignal<string>("n5-introduction")

  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  // Initialize step based on active textbook: show step 1 for getting_started, otherwise step 2
  const initialStep =
    settingsQuery.data?.["active-textbook"] === "getting_started" ? 1 : 2
  const [currentStep, setCurrentStep] = createSignal(initialStep)

  let stepRef: HTMLDivElement | undefined

  // React to active-deck changes from user settings (e.g., from Nav2 deck selector)
  createEffect(() => {
    const activeDeck = settingsQuery.data?.["active-deck"]
    const activeTextbook = settingsQuery.data?.["active-textbook"]

    if (activeDeck && activeTextbook === "getting_started") {
      setSelectedChapterSlug(activeDeck)
      // Ensure we're on step 2 for getting_started
      if (currentStep() !== 2) {
        handleStepTransition(2)
      }
    }

    // If active textbook changes to non-getting_started, advance to step 2
    if (
      activeTextbook &&
      activeTextbook !== "getting_started" &&
      currentStep() === 1
    ) {
      handleStepTransition(2)
    }
  })

  const handleStepTransition = async (nextStep: number, level?: string) => {
    if (stepRef) {
      try {
        // Animate out current step
        await createSlideWithFadeOutAnimation(stepRef, "up")

        // Store selected chapter before switching step
        if (level) {
          const newChapterSlug =
            LEVEL_TO_CHAPTER_MAP[level] || "n5-introduction"
          setSelectedChapterSlug(newChapterSlug)

          await applyUserSettingsUpdate(
            context().user?.id || null,
            queryClient,
            {
              "active-textbook": "getting_started",
              "active-deck": newChapterSlug,
            },
            { awaitDb: false },
          )
        }

        // Switch to next step
        setCurrentStep(nextStep)

        // Wait for next step to mount
        await new Promise((resolve) => setTimeout(resolve, 50))

        if (stepRef) {
          // Animate in next step
          prepareElementForEnter(stepRef, "up", true)
          await createSlideWithFadeInAnimation(stepRef, "up")
        }
      } catch (error) {
        console.error("Animation error:", error)
        setCurrentStep(nextStep)
      }
    }
  }

  const handleLevelSelect = (level: string) => {
    handleStepTransition(2, level)
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

  return (
    <>
      <BackgroundLayers />
      <Nav />
      <LoginMessage class="fixed top-6 right-24 hidden h-auto w-64 text-neutral-500 md:block" />
      <div ref={stepRef}>
        <Switch>
          <Match when={currentStep() === 1}>
            <JlptPage onLevelSelect={handleLevelSelect} />
          </Match>
          <Match when={currentStep() === 2}>
            <LearningPathPage
              chapterSlug={selectedChapterSlug()}
              textbookId="getting_started"
              onChapterChange={handleChapterChange}
              user={context().user}
            />
          </Match>
        </Switch>
      </div>
    </>
  )
}
