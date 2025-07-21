// src/routes/learn/_lessons.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { onMount } from "solid-js"
import ContentBox from "@/components/ContentBox"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import { usePageTransition } from "@/context/TransitionContext"

export const Route = createFileRoute("/learn/_lessons")({
  loader: async ({ context }) => {
    const { user } = context
    return { user }
  },
  component: LearnLayout,
})

const SELECTOR = "[data-learn-layout]"
const ENTER_DIRECTION = "up" as const
const ENTER_DELAY = 100

function LearnLayout() {
  const { user } = Route.useLoaderData()()
  const { shouldAnimate } = usePageTransition()

  onMount(() => {
    console.log("[LearnLayout] onMount called")
    console.log("[LearnLayout] shouldAnimate():", shouldAnimate())
    
    // Only animate if we arrived here via navigation (not initial load or refresh)
    if (shouldAnimate()) {
      console.log("[LearnLayout] Animation should run - looking for element:", SELECTOR)
      const element = document.querySelector(SELECTOR) as HTMLElement
      if (element) {
        console.log("[LearnLayout] Element found, preparing animation")
        prepareElementForEnter(element, ENTER_DIRECTION)

        setTimeout(() => {
          console.log("[LearnLayout] Running slide animation")
          createSlideWithFadeInAnimation(element, ENTER_DIRECTION)
        }, ENTER_DELAY)
      } else {
        console.log("[LearnLayout] Element NOT found with selector:", SELECTOR)
      }
    } else {
      console.log("[LearnLayout] Animation should NOT run")
    }
  })

  return (
    <div data-learn-layout>
      <ContentBox user={user}>
        <Outlet />
      </ContentBox>
    </div>
  )
}
