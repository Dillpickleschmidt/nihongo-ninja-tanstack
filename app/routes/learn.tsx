// app/routes/_learn/learn.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { onMount } from "solid-js"
import ContentBox from "@/components/ContentBox"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import { usePageTransition } from "@/context/TransitionContext"
import { BackgroundImage } from "@/components/BackgroundImage"
import { Background } from "@/features/dashboard/components/Background"

export const Route = createFileRoute("/learn")({
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
    <div class="relative min-h-screen w-full overflow-y-auto">
      <Background position="fixed" opacity={0.04} />
      <BackgroundImage
        class="!fixed z-[-1]"
        backgroundImage="/img/dots.svg"
        backgroundImageSize="400px"
        backgroundImageOpacity={2.5}
      />
      <BackgroundImage
        class="z-[-1] !-mt-[4.1rem] min-h-screen"
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={4}
      />

      <div data-learn-layout>
        <ContentBox user={user}>
          <Outlet />
        </ContentBox>
      </div>
    </div>
  )
}
