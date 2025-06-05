// app/routes/_learn/learn.tsx
import { createFileRoute, Outlet, useNavigate } from "@tanstack/solid-router"
import { onMount, createSignal, createEffect, onCleanup } from "solid-js"
import ContentBox from "@/components/ContentBox"
import {
  createSlideWithFadeInAnimation,
  createSlideWithFadeOutAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import { usePageTransition } from "@/context/TransitionContext"

export const Route = createFileRoute("/_learn/learn")({
  loader: async ({ context }) => {
    const { user } = context
    return { user }
  },
  component: LearnLayout,
})

const SELECTOR = "[data-learn-layout]"
const ENTER_DIRECTION = "down" as const // Slides down from above into view
const EXIT_DIRECTION = "up" as const // Slides up and out of view
const ENTER_DELAY = 0

function LearnLayout() {
  const { user } = Route.useLoaderData()()
  const navigate = useNavigate()
  const { startLearnToDashboard } = usePageTransition()

  const [isExiting, setIsExiting] = createSignal(false)

  onMount(() => {
    // Animate the entire learn layout on mount
    const element = document.querySelector(SELECTOR) as HTMLElement
    if (element) {
      prepareElementForEnter(element, ENTER_DIRECTION)

      setTimeout(() => {
        createSlideWithFadeInAnimation(element, ENTER_DIRECTION)
      }, ENTER_DELAY)
    }

    // Intercept back button clicks from ContentBox
    const handleBackNavigation = async (e: CustomEvent) => {
      e.preventDefault()
      e.stopPropagation()

      // Start exit animation
      setIsExiting(true)
      const element = document.querySelector(SELECTOR) as HTMLElement
      if (element) {
        await createSlideWithFadeOutAnimation(element, EXIT_DIRECTION)
      }

      // Then start dashboard transition and navigate
      startLearnToDashboard()
      navigate({ to: "/dashboard" })
    }

    // Listen for custom event from ContentBox
    document.addEventListener(
      "contentbox-back-click",
      handleBackNavigation as EventListener,
    )

    onCleanup(() => {
      document.removeEventListener(
        "contentbox-back-click",
        handleBackNavigation as EventListener,
      )
    })
  })

  return (
    <div data-learn-layout class={isExiting() ? "pointer-events-none" : ""}>
      <ContentBox user={user}>
        <Outlet />
      </ContentBox>
    </div>
  )
}
