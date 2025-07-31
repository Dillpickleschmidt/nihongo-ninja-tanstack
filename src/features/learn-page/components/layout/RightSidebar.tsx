// features/learn-page/components/layout/RightSidebar.tsx
import { createEffect } from "solid-js"
import { useLocation } from "@tanstack/solid-router"
import { usePageTransition } from "@/context/TransitionContext"
import { HistoryContent } from "../content/HistoryContent"
import { StrugglesContent } from "../content/StrugglesContent"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"

interface RightSidebarProps {
  variant: "mobile" | "desktop"
}

export function RightSidebar(props: RightSidebarProps) {
  const location = useLocation()
  const { shouldAnimate, animationTrigger } = usePageTransition()

  // Animate individual right sidebar sections with staggered timing
  createEffect(() => {
    animationTrigger()
    if (
      props.variant === "desktop" &&
      location().pathname.includes("/learn") &&
      shouldAnimate()
    ) {
      requestAnimationFrame(() => {
        const strugglesElement = document.querySelector(
          "[data-right-sidebar-struggles]",
        ) as HTMLElement
        // const studyTimeElement = document.querySelector(
        //   "[data-right-sidebar-study-time]",
        // ) as HTMLElement

        // Recent Activities - 100ms delay
        const activitiesElements = document.querySelectorAll(
          "[data-right-sidebar-activities]",
        ) as NodeListOf<HTMLElement>
        activitiesElements.forEach((element) => {
          prepareElementForEnter(element, "left", true)
          setTimeout(() => {
            createSlideWithFadeInAnimation(element, "left", {
              withOpacity: true,
            })
          }, 100)
        })

        // Struggles - 200ms delay
        if (strugglesElement) {
          prepareElementForEnter(strugglesElement, "left", true)
          setTimeout(() => {
            createSlideWithFadeInAnimation(strugglesElement, "left", {
              withOpacity: true,
            })
          }, 200)
        }

        // Study Time - 300ms delay
        // if (studyTimeElement) {
        //   prepareElementForEnter(studyTimeElement, "left", true)
        //   setTimeout(() => {
        //     createSlideWithFadeInAnimation(studyTimeElement, "left", {
        //       withOpacity: true,
        //     })
        //   }, 300)
        // }
      })
    }
  })

  if (props.variant === "mobile") {
    return <HistoryContent variant="mobile" />
  }

  // Desktop variant
  return (
    <div data-right-sidebar class="space-y-4 pb-3">
      {/* Recent Activity Section */}
      <HistoryContent variant="desktop" maxItems={4} />

      {/* Struggle Areas */}
      <StrugglesContent variant="desktop" maxItems={5} />
    </div>
  )
}
