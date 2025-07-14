// features/dashboard/components/content/textbook/CourseDashboard.tsx
import { For, onMount, createEffect } from "solid-js"
import { Link, useLocation } from "@tanstack/solid-router"
import {
  Clock,
  CheckCircle,
  Circle,
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
import type { StaticModule, DynamicModule } from "@/data/types"
import { cn } from "@/utils"
import { usePageTransition } from "@/context/TransitionContext"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import { SmoothCard } from "../../shared/SmoothCard"

interface CourseDashboardProps {
  lessons: (StaticModule | DynamicModule)[]
  progressPercentage: number
  variant: "mobile" | "desktop"
}

const SELECTOR = "[data-lessons-section]"
const DIRECTION = "left" as const
const ENTER_DELAY = 180

// Shared utility functions
function getModuleType(module: StaticModule | DynamicModule) {
  return "lesson_type" in module ? module.lesson_type : module.session_type
}

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

function getModuleIconClasses(moduleType: string) {
  const iconClasses = {
    lesson: "text-green-600 dark:text-green-500",
    worksheet: "text-teal-500 dark:text-teal-400",
    "practice-sentence": "text-yellow-600 dark:text-yellow-500 saturate-[75%]",
    "culture-note": "text-pink-500 dark:text-pink-400 saturate-[75%]",
    vocab: "text-sky-500 dark:text-sky-400 saturate-[75%]",
    "vocab-practice": "text-orange-600 dark:text-orange-500",
    "conjugation-practice": "text-teal-500 dark:text-teal-400",
    "counter-practice": "text-green-600 dark:text-green-500",
    game: "text-red-600 dark:text-red-500",
    video: "text-purple-500 dark:text-purple-400",
    audio: "text-purple-500 dark:text-purple-400",
    "grammar-notes": "text-red-600 dark:text-red-500 opacity-80",
    reading: "text-teal-500 dark:text-teal-400",
    "vocab-list": "text-sky-500 dark:text-sky-400 saturate-[75%]",
    "vocab-test": "text-yellow-600 dark:text-yellow-500 saturate-[75%]",
  }

  return iconClasses[moduleType] || "text-gray-600 dark:text-gray-500"
}

function getModuleGradient(moduleType: string) {
  const gradientClasses = {
    lesson: "bg-gradient-to-br from-green-500/10 via-card to-green-600/5",
    worksheet: "bg-gradient-to-br from-teal-400/10 via-card to-teal-500/5",
    "practice-sentence":
      "bg-gradient-to-br from-yellow-500/10 via-card to-yellow-600/5",
    "culture-note": "bg-gradient-to-br from-pink-400/10 via-card to-pink-500/5",
    vocab: "bg-gradient-to-br from-sky-400/10 via-card to-sky-500/5",
    "vocab-practice":
      "bg-gradient-to-br from-orange-500/10 via-card to-orange-600/5",
    "conjugation-practice":
      "bg-gradient-to-br from-teal-400/10 via-card to-teal-500/5",
    "counter-practice":
      "bg-gradient-to-br from-green-500/10 via-card to-green-600/5",
    game: "bg-gradient-to-br from-red-500/10 via-card to-red-600/5",
    video: "bg-gradient-to-br from-purple-400/10 via-card to-purple-500/5",
    audio: "bg-gradient-to-br from-purple-400/10 via-card to-purple-500/5",
    "grammar-notes": "bg-gradient-to-br from-red-500/10 via-card to-red-600/5",
    reading: "bg-gradient-to-br from-teal-400/10 via-card to-teal-500/5",
    "vocab-list": "bg-gradient-to-br from-sky-400/10 via-card to-sky-500/5",
    "vocab-test":
      "bg-gradient-to-br from-yellow-500/10 via-card to-yellow-600/5",
  }

  return gradientClasses[moduleType] || "bg-card"
}

function getModuleLightBackground(moduleType: string) {
  const lightBackgrounds = {
    lesson: "bg-green-50/70",
    worksheet: "bg-teal-50/70",
    "practice-sentence": "bg-yellow-50/70",
    "culture-note": "bg-pink-50/70",
    vocab: "bg-sky-50/70",
    "vocab-practice": "bg-orange-50/70",
    "conjugation-practice": "bg-teal-50/70",
    "counter-practice": "bg-green-50/70",
    game: "bg-red-50/70",
    video: "bg-purple-50/70",
    audio: "bg-purple-50/70",
    "grammar-notes": "bg-red-50/70",
    reading: "bg-teal-50/70",
    "vocab-list": "bg-sky-50/70",
    "vocab-test": "bg-yellow-50/70",
  }

  return lightBackgrounds[moduleType] || "bg-card"
}

function truncateText(text: string, maxLength: number) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
}

function getDisplayTitle(title: string) {
  return title.startsWith("Practice ") ? title.substring(9) : title
}

function getLinkTo(lesson: StaticModule | DynamicModule) {
  return "link" in lesson && lesson.link
    ? lesson.link
    : `/practice/${lesson.id}`
}

export function CourseDashboard(props: CourseDashboardProps) {
  const location = useLocation()
  const { hasUserNavigated, animationTrigger } = usePageTransition()

  const runAnimation = () => {
    if (location().pathname.includes("/dashboard") && hasUserNavigated()) {
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
          {true && (
            <div
              data-lessons-section
              data-transition-content
              class="scrollbar-hide flex gap-3.5 overflow-x-auto pr-4 pb-2 pl-8"
            >
              <For each={props.lessons}>
                {(lesson) => <MobileLessonCard lesson={lesson} />}
              </For>
            </div>
          )}
        </Transition>
      </div>
    )
  }

  // Desktop variant - just the lesson list without header
  return (
    <div class="grid grid-cols-1 gap-3">
      <For each={props.lessons}>
        {(lesson, index) => (
          <LessonRow
            lesson={lesson}
            isCompleted={index() < 2}
            gradient="from-green-600/20 to-emerald-600/10"
          />
        )}
      </For>
    </div>
  )
}

function LessonRow(props: {
  lesson: StaticModule | DynamicModule
  isCompleted: boolean
  gradient: string
}) {
  const moduleType = getModuleType(props.lesson)
  const displayTitle = getDisplayTitle(props.lesson.title)
  const linkTo = getLinkTo(props.lesson)

  const ModuleIcon = getModuleIcon(moduleType)
  const iconClasses = getModuleIconClasses(moduleType)

  return (
    <Link to={linkTo} class="group block">
      <div
        class={cn(
          "flex items-center gap-4 rounded-xl border border-white/5 p-4 transition-all duration-200",
          "hover:scale-[1.01] hover:border-white/10 hover:shadow-lg",
          "bg-gradient-to-r backdrop-blur-sm",
          props.isCompleted ? "bg-green-600/5" : "bg-white/2",
        )}
        style={`background-image: linear-gradient(to right, ${props.gradient})`}
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

// Simplified mobile lesson card component
function MobileLessonCard(props: { lesson: StaticModule | DynamicModule }) {
  const { setUserHasNavigated } = usePageTransition()

  const moduleType = getModuleType(props.lesson)
  const displayTitle = getDisplayTitle(props.lesson.title)
  const linkTo = getLinkTo(props.lesson)

  const ModuleIcon = getModuleIcon(moduleType)
  const iconClasses = getModuleIconClasses(moduleType)
  const lightBackground = getModuleLightBackground(moduleType)
  const gradientClasses = getModuleGradient(moduleType)

  const handleClick = () => {
    setUserHasNavigated(true)
  }

  return (
    <Link
      to={linkTo}
      onClick={handleClick}
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
          {truncateText(displayTitle, 25)}
        </h3>

        <div class="bg-muted mb-1 rounded-full p-2">
          <ChevronRight class="h-4 w-4" />
        </div>
      </SmoothCard>
    </Link>
  )
}
