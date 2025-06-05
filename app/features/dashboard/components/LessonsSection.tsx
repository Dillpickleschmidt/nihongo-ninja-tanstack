// features/dashboard/components/LessonsSection.tsx
import { For, createSignal, onMount } from "solid-js"
import { ArrowRight } from "lucide-solid"
import { useLocation } from "@tanstack/solid-router"
import { Transition } from "solid-transition-group"
import { LessonCard } from "./LessonCard"
import { usePageTransition } from "@/context/TransitionContext"
import type { StaticModule, DynamicModule } from "@/data/types"

interface LessonsSectionProps {
  lessons: (StaticModule | DynamicModule)[]
  progressPercentage: number
}

export function LessonsSection(props: LessonsSectionProps) {
  const location = useLocation()
  const { isInitialLoad } = usePageTransition()

  onMount(() => {
    const currentPath = location().pathname
    if (currentPath === "/dashboard" && !isInitialLoad()) {
      // Navigation back - hide then animate in quickly
      const element = document.querySelector(
        "[data-lessons-section]",
      ) as HTMLElement
      if (element) {
        element.style.transform = "translateX(30px)"
        element.style.opacity = "0"

        // Start enter animation after short delay (staggered)
        setTimeout(() => {
          // Transform animation
          element.animate(
            [
              { transform: "translateX(30px)" },
              { transform: "translateX(0px)" },
            ],
            {
              duration: 300,
              easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              fill: "forwards",
            },
          )

          // Opacity animation with snappy curve
          element.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 300,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)", // Snappy ease-out
            fill: "forwards",
          })
        }, 180) // Slightly longer for stagger
      }
    }
  })

  return (
    <div class="mb-3 xl:mb-4">
      <div class="flex items-center justify-between">
        <div>
          <div class="mb-4 flex items-center justify-between pl-8 xl:mb-5 xl:pl-10">
            <h2 class="text-xl xl:text-2xl">Lessons</h2>
          </div>
          <div class="mb-6 pl-8 xl:mb-7 xl:pl-10">
            <div class="bg-card-foreground h-[0.33rem] w-48 rounded-full xl:h-[0.4rem] xl:w-52">
              <div
                class="dark:bg-primary bg-primary/50 h-[0.33rem] rounded-full xl:h-[0.4rem]"
                style={`width: ${props.progressPercentage}%`}
              />
            </div>
          </div>
        </div>
        <ArrowRight class="mr-5 h-5 w-5 -translate-y-2 xl:mr-6 xl:h-6 xl:w-6" />
      </div>

      <Transition
        onEnter={(element, done) => {
          if (isInitialLoad()) {
            done()
            return
          }

          // Transform animation
          const transformAnimation = element.animate(
            [
              { transform: "translateX(30px)" },
              { transform: "translateX(0px)" },
            ],
            {
              duration: 300,
              easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            },
          )

          // Opacity animation with snappy curve (fast start, slow end)
          const opacityAnimation = element.animate(
            [{ opacity: 0 }, { opacity: 1 }],
            {
              duration: 300,
              easing: "cubic-bezier(0.25, 1, 0.5, 1)", // Snappy ease-out
            },
          )

          Promise.all([
            transformAnimation.finished,
            opacityAnimation.finished,
          ]).then(() => done())
        }}
      >
        {true && (
          <div
            data-lessons-section
            data-transition-content
            class="scrollbar-hide flex gap-3.5 overflow-x-auto pr-4 pb-2 pl-8 xl:gap-4 xl:pr-5 xl:pl-10"
          >
            <For each={props.lessons}>
              {(lesson) => <LessonCard lesson={lesson} />}
            </For>
          </div>
        )}
      </Transition>
    </div>
  )
}
