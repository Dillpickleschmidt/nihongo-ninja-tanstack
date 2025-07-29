// src/routes/lessons.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { onMount } from "solid-js"
import ContentBox from "@/components/ContentBox"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import { usePageTransition } from "@/context/TransitionContext"
import { BackgroundImage } from "@/components/BackgroundImage"
import { Background } from "@/features/dashboard/components/shared/Background"

export const Route = createFileRoute("/lessons")({
  loader: async ({ context }) => {
    const { user } = context
    return { user }
  },
  component: LessonsLayout,
})

const SELECTOR = "[data-lessons-layout]"
const ENTER_DIRECTION = "up" as const
const ENTER_DELAY = 100

function LessonsLayout() {
  const { user } = Route.useLoaderData()()
  const { shouldAnimate } = usePageTransition()

  onMount(() => {
    console.log("[LessonsLayout] onMount called")
    console.log("[LessonsLayout] shouldAnimate():", shouldAnimate())

    // Only animate if we arrived here via navigation (not initial load or refresh)
    if (shouldAnimate()) {
      console.log(
        "[LessonsLayout] Animation should run - looking for element:",
        SELECTOR,
      )
      const element = document.querySelector(SELECTOR) as HTMLElement
      if (element) {
        console.log("[LessonsLayout] Element found, preparing animation")
        prepareElementForEnter(element, ENTER_DIRECTION)

        setTimeout(() => {
          console.log("[LessonsLayout] Running slide animation")
          createSlideWithFadeInAnimation(element, ENTER_DIRECTION)
        }, ENTER_DELAY)
      } else {
        console.log(
          "[LessonsLayout] Element NOT found with selector:",
          SELECTOR,
        )
      }
    } else {
      console.log("[LessonsLayout] Animation should NOT run")
    }
  })

  return (
    <div class="relative min-h-screen w-full overflow-y-auto">
      <Background
        backgroundItem={{
          source_type: "img",
          src: "/img/backgrounds/tranquil_village_by_k_jackson_katss_djqxpcz.png",
          position: "fixed",
          layout: "vertical",
          opacity: 0.04,
          y_offset_desktop: "-82px",
        }}
      />
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

      <div data-lesson-layout>
        <ContentBox user={user}>
          <Outlet />
        </ContentBox>
      </div>
    </div>
  )
}
