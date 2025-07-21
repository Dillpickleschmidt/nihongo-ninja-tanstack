// features/dashboard/components/content/textbook/CourseDashboard.tsx
import { For, createEffect } from "solid-js"
import { Link, useLocation, Await } from "@tanstack/solid-router"
import {
  Clock,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  BookOpen,
  PencilLine,
  ScrollText,
  GraduationCap,
  Gamepad,
  Coffee,
  Video,
  Volume2,
  Library,
  BookOpenText,
  BookPlus,
} from "lucide-solid"
import { Transition } from "solid-transition-group"
import type { EnrichedLearningPathModule } from "@/features/dashboard/utils/loader-helpers"
import { cn } from "@/utils"
import { usePageTransition } from "@/context/TransitionContext"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import { SmoothCard } from "../../shared/SmoothCard"
import type { DeferredPromise } from "@tanstack/solid-router"

interface CourseDashboardProps {
  initialLessons: EnrichedLearningPathModule[]
  remainingLessons: DeferredPromise<EnrichedLearningPathModule[]>
  progressPercentage: number
  variant: "mobile" | "desktop"
}

const SELECTOR = "[data-lessons-section]"
const MOBILE_DIRECTION = "left" as const
const DESKTOP_DIRECTION = "up" as const
const ENTER_DELAY = 0

function getModuleIcon(moduleType: string) {
  const iconComponents = {
    lesson: BookOpen,
    worksheet: PencilLine,
    "practice-sentence": PencilLine,
    "culture-note": Coffee,
    vocab: BookPlus,
    "vocab-practice": GraduationCap,
    "conjugation-practice": GraduationCap,
    "counter-practice": GraduationCap,
    game: Gamepad,
    video: Video,
    audio: Volume2,
    "grammar-notes": ScrollText,
    reading: BookOpenText,
    "vocab-list": Library,
    "vocab-test": GraduationCap,
  }

  return iconComponents[moduleType] || BookOpen
}

// Removed Skeleton components as they are no longer needed.

export function CourseDashboard(props: CourseDashboardProps) {
  const { shouldAnimate, animationTrigger } = usePageTransition()

  createEffect(() => {
    animationTrigger()
    if (shouldAnimate()) {
      const element = document.querySelector(SELECTOR) as HTMLElement
      if (element) {
        const direction = props.variant === "desktop" ? DESKTOP_DIRECTION : MOBILE_DIRECTION
        prepareElementForEnter(element, direction)
        setTimeout(() => {
          createSlideWithFadeInAnimation(element, direction)
        }, ENTER_DELAY)
      }
    }
  })

  if (props.variant === "mobile") {
    return (
      <div class="mb-3">
        <div class="flex items-center justify-between">
          <div>
            <div class="mb-4 flex items-center justify-between pl-8">
              <h2 class="text-xl">Lessons</h2>
            </div>
            <div class="mb-6 pl-8">
              <div class="bg-card-foreground h-[0.33rem] w-48 rounded-full">
                <div
                  class="bg-primary/50 dark:bg-primary h-[0.33rem] rounded-full"
                  style={`width: ${props.progressPercentage}%`}
                />
              </div>
            </div>
          </div>
          <ArrowRight class="mr-5 h-5 w-5 -translate-y-2" />
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
          <div
            data-lessons-section
            data-transition-content
            class="scrollbar-hide flex gap-3.5 overflow-x-auto pr-4 pb-2 pl-8"
          >
            <For each={props.initialLessons}>
              {(lesson) => <MobileLessonCard lesson={lesson} />}
            </For>
            <Await promise={props.remainingLessons} fallback={null}>
              {(remaining) => (
                <For each={remaining}>
                  {(lesson) => <MobileLessonCard lesson={lesson} />}
                </For>
              )}
            </Await>
          </div>
        </Transition>
      </div>
    )
  }

  // Desktop variant
  return (
    <Transition
      onEnter={(element, done) => {
        if (!hasUserNavigated()) {
          done()
          return
        }
        createSlideWithFadeInAnimation(element as HTMLElement, DIRECTION).then(
          () => done(),
        )
      }}
    >
      <div
        data-lessons-section
        data-transition-content
        class="grid grid-cols-1 gap-3"
      >
        {/* Render initial lessons immediately */}
        <For each={props.initialLessons}>
          {(lesson, index) => (
            <LessonRow lesson={lesson} isCompleted={index() < 2} />
          )}
        </For>

        {/* Await the rest of the lessons and stream them in */}
        <Await promise={props.remainingLessons} fallback={null}>
          {(remaining) => (
            <For each={remaining}>
              {(lesson, index) => (
                <LessonRow
                  lesson={lesson}
                  isCompleted={index() + props.initialLessons.length < 2}
                />
              )}
            </For>
          )}
        </Await>
      </div>
    </Transition>
  )
}

function LessonRow(props: {
  lesson: EnrichedLearningPathModule
  isCompleted: boolean
}) {
  const { moduleType, displayTitle, linkTo, iconClasses, gradientClasses } =
    props.lesson
  const ModuleIcon = getModuleIcon(moduleType)

  return (
    <Link to={linkTo} class="group block">
      <div
        class={cn(
          "flex items-center gap-4 rounded-xl border border-white/5 p-4 transition-all duration-200",
          "hover:scale-[1.01] hover:border-white/10 hover:shadow-lg",
          "bg-gradient-to-r backdrop-blur-sm",
          props.isCompleted ? "bg-green-600/5" : "bg-white/2",
        )}
        style={`background-image: linear-gradient(to right, ${gradientClasses})`}
      >
        <div class="flex-shrink-0">
          {props.isCompleted ? (
            <CheckCircle class="h-5 w-5 text-green-400" />
          ) : (
            <ModuleIcon class={cn("h-5 w-5", iconClasses)} />
          )}
        </div>
        <div class="min-w-0 flex-1">
          <h4 class="group-hover:text-primary line-clamp-1 font-medium transition-colors">
            {displayTitle}
          </h4>
          <div class="mt-1 flex items-center gap-4">
            <span class="text-muted-foreground text-sm capitalize">
              {moduleType.replace("-", " ")}
            </span>
            <div class="text-muted-foreground flex items-center gap-1 text-xs">
              <Clock class="h-3 w-3" />
              <span>~5 min</span>
            </div>
          </div>
        </div>
        <ArrowRight class="text-muted-foreground h-5 w-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
      </div>
    </Link>
  )
}

function MobileLessonCard(props: { lesson: EnrichedLearningPathModule }) {
  const {
    moduleType,
    linkTo,
    iconClasses,
    lightBackground,
    gradientClasses,
    truncatedTitle,
  } = props.lesson
  const ModuleIcon = getModuleIcon(moduleType)

  return (
    <Link
      to={linkTo}
      class="transition-transform hover:scale-[98%]"
    >
      <SmoothCard
        width={120}
        height={155}
        class={cn(
          "relative flex flex-col items-center justify-between px-2 py-3 text-center dark:bg-transparent",
          "h-40 w-32 rounded-2xl",
          lightBackground,
        )}
      >
        <div
          class={cn(
            "absolute inset-0 -z-1 hidden rounded-2xl dark:block",
            gradientClasses,
          )}
        />
        <div class="mx-auto flex items-center justify-center">
          <ModuleIcon size="20px" class={iconClasses} />
        </div>
        <h3 class="font-inter mb-1 text-sm leading-[1.15rem]">
          {truncatedTitle}
        </h3>
        <div class="bg-muted mb-1 rounded-full p-2">
          <ChevronRight class="h-4 w-4" />
        </div>
      </SmoothCard>
    </Link>
  )
}
