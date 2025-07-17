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
  const { hasUserNavigated } = usePageTransition()

  onMount(() => {
    // Only animate if we arrived here via navigation (not initial load)
    if (hasUserNavigated()) {
      const element = document.querySelector(SELECTOR) as HTMLElement
      if (element) {
        prepareElementForEnter(element, ENTER_DIRECTION)

        setTimeout(() => {
          createSlideWithFadeInAnimation(element, ENTER_DIRECTION)
        }, ENTER_DELAY)
      }
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
