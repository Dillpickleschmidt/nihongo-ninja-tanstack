import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { createSignal, Switch, Match } from "solid-js"
import Nav from "@/features/homepage/shared/components/Nav2"
import LoginMessage from "@/features/homepage/shared/assets/login-message.svg"
import { BackgroundLayers } from "@/features/homepage/shared/components/BackgroundLayers"
import { LevelSelection } from "@/features/homepage/pages/jlpt/components/LevelSelection"
import PreviewGrid from "@/features/homepage/pages/learning-path/components/PreviewGrid"
import {
  createSlideWithFadeOutAnimation,
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import { completedModulesQueryOptions } from "@/features/learn-page/query/query-options"

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
  const [selectedLevel, setSelectedLevel] = createSignal<string | null>(null)

  let stepRef: HTMLDivElement | undefined

  const handleStepTransition = async (nextStep: number, level?: string) => {
    if (stepRef) {
      try {
        // Animate out current step
        await createSlideWithFadeOutAnimation(stepRef, "up")

        // Store selected level before switching step so PreviewGrid gets the correct prop
        if (level) {
          setSelectedLevel(level)
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

  const handleLevelChange = async (level: string) => {
    setSelectedLevel(level)
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
            <PreviewGrid
              level={selectedLevel()}
              onLevelChange={handleLevelChange}
              user={context().user}
            />
          </Match>
        </Switch>
      </div>
    </>
  )
}
