// src/routes/lessons.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { createSignal, onMount } from "solid-js"
import ContentBox from "@/components/ContentBox"
import { useAnimationManager } from "@/hooks/useAnimations"
import { BackgroundImage } from "@/components/BackgroundImage"
import { Background } from "@/features/learn-page/components/shared/Background"

export const Route = createFileRoute("/lessons")({
  loader: async ({ context }) => {
    const { user } = context
    return { user }
  },
  component: LessonsLayout,
})

function LessonsLayout() {
  const { user } = Route.useLoaderData()()
  const { animateOnDataChange } = useAnimationManager()
  const [shouldAnimate, setShouldAnimate] = createSignal(false)

  onMount(() => {
    // Check if we should animate (set by button press)
    const shouldAnimateFlag = sessionStorage.getItem("animate-lessons")
    const isNavigation = !!shouldAnimateFlag

    // Clear the flag immediately
    sessionStorage.removeItem("animate-lessons")

    console.log("[LessonsLayout] Manual flag check:", {
      shouldAnimateFlag,
      isNavigation,
    })

    setShouldAnimate(isNavigation)
  })

  // Trigger slide up animation when user data loads (only when shouldAnimate is true)
  animateOnDataChange(["[data-lessons-layout]"], () =>
    shouldAnimate() ? user : null,
  )

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

      <div data-lessons-layout>
        <ContentBox user={user}>
          <Outlet />
        </ContentBox>
      </div>
    </div>
  )
}
