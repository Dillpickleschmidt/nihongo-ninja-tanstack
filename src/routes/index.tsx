import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { createSignal, Switch, Match } from "solid-js"
import Nav from "@/features/homepage/shared/components/Nav2"
import LoginMessage from "@/features/homepage/shared/assets/login-message.svg"
import { BackgroundLayers } from "@/features/homepage/shared/components/BackgroundLayers"
import { LevelSelection } from "@/features/homepage/pages/jlpt/components/LevelSelection"
import { LearningPathPage } from "@/features/homepage/pages/learning-path"
import {
  createSlideWithFadeOutAnimation,
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import { completedModulesQueryOptions } from "@/features/learn-page/query/query-options"

const LEVEL_TO_CHAPTER_MAP: Record<string, string> = {
  N5: "getting_started_n5",
  N4: "getting_started_n4",
  N3: "getting_started_n3",
  N2: "getting_started_n2",
  N1: "getting_started_n1",
}

export const Route = createFileRoute("/")({
  loader: async ({ context }) => {
    const { user, queryClient } = context
    queryClient.prefetchQuery(completedModulesQueryOptions(user?.id || null))
  },
  component: RouteComponent,
})

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })
  const [currentStep, setCurrentStep] = createSignal(1)
  const [selectedChapterId, setSelectedChapterId] = createSignal<string>("getting_started_n5")

  let stepRef: HTMLDivElement | undefined

  const handleStepTransition = async (nextStep: number, level?: string) => {
    if (stepRef) {
      try {
        // Animate out current step
        await createSlideWithFadeOutAnimation(stepRef, "up")

        // Store selected chapter before switching step
        if (level) {
          setSelectedChapterId(LEVEL_TO_CHAPTER_MAP[level] || "getting_started_n5")
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

  const handleChapterChange = async (chapterId: string) => {
    setSelectedChapterId(chapterId)
  }

  return (
    <>
      <BackgroundLayers />
      <Nav />
      <LoginMessage class="fixed top-6 right-24 hidden h-auto w-64 text-neutral-500 md:block" />
      <div ref={stepRef}>
        <Switch>
          <Match when={currentStep() === 1}>
            <LevelSelection onSelect={handleLevelSelect} />
          </Match>
          <Match when={currentStep() === 2}>
            <LearningPathPage
              initialChapterId={selectedChapterId()}
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
