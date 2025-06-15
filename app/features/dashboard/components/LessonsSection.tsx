// features/dashboard/components/LessonsSection.tsx
import { For, onMount, createEffect } from "solid-js"
import { ArrowRight } from "lucide-solid"
import { useLocation } from "@tanstack/solid-router"
import { Transition } from "solid-transition-group"
import { LessonCard } from "./LessonCard"
import { usePageTransition } from "@/context/TransitionContext"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import type { StaticModule, DynamicModule } from "@/data/types"

interface LessonsSectionProps {
  lessons: (StaticModule | DynamicModule)[]
  progressPercentage: number
}

const SELECTOR = "[data-lessons-section]"
const DIRECTION = "left" as const
const ENTER_DELAY = 180

export function LessonsSection(props: LessonsSectionProps) {
  const location = useLocation()
  const { hasUserNavigated, animationTrigger } = usePageTransition()

  const runAnimation = () => {
    if (location().pathname === "/dashboard" && hasUserNavigated()) {
      const element = document.querySelector(SELECTOR) as HTMLElement
      if (element) {
        prepareElementForEnter(element, DIRECTION)
        setTimeout(() => {
          createSlideWithFadeInAnimation(element, DIRECTION)
        }, ENTER_DELAY)
      }
    }
  }

  onMount(() => {
    runAnimation()
  })

  createEffect(() => {
    animationTrigger()
    runAnimation()
  })

  return (
    <div class="mb-3 xl:mb-0">
      <div class="flex items-center justify-between">
        <div>
          <div class="mb-4 flex items-center justify-between pl-8 xl:pl-0">
            <h2 class="text-xl xl:text-2xl">Lessons</h2>
          </div>
          <div class="mb-6 pl-8 xl:pl-0">
            <div class="bg-card-foreground h-[0.33rem] w-48 rounded-full xl:h-[0.4rem] xl:w-52">
              <div
                class="dark:bg-primary bg-primary/50 h-[0.33rem] rounded-full xl:h-[0.4rem]"
                style={`width: ${props.progressPercentage}%`}
              />
            </div>
          </div>
        </div>
        <ArrowRight class="mr-5 h-5 w-5 -translate-y-2 xl:mr-0" />
      </div>

      <Transition
        onEnter={(element, done) => {
          if (!hasUserNavigated()) {
            done()
            return
          }
          createSlideWithFadeInAnimation(
            element as HTMLElement,
            DIRECTION,
          ).then(() => done())
        }}
      >
        {true && (
          <div
            data-lessons-section
            data-transition-content
            class="scrollbar-hide flex gap-3.5 overflow-x-auto pr-4 pb-2 pl-8 xl:grid xl:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] xl:gap-4 xl:overflow-x-visible xl:p-0"
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
