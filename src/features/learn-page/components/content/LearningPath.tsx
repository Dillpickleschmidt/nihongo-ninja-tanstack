// features/learn-page/components/content/LearningPath.tsx
import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import {
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
import { cn } from "@/utils"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { usePageTransition } from "@/context/TransitionContext"
import { createSlideWithFadeInAnimation } from "@/utils/animations"
import type { EnrichedLearningPathModule } from "@/features/dashboard/utils/loader-helpers"
import { useLearnPageData } from "@/features/learn-page/context/LearnPageDataContext"

const DIRECTION = "right" as const

export function LearningPath() {
  return (
    <>
      {/* Mobile Layout - Empty Placeholder */}
      <SSRMediaQuery hideFrom="xl">
        <div />
      </SSRMediaQuery>
      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        <DesktopLearningPath />
      </SSRMediaQuery>
    </>
  )
}

// ============================================================================
// Desktop Implementation
// ============================================================================

function DesktopLearningPath() {
  const { shouldAnimate } = usePageTransition()
  return (
    <Transition
      onEnter={(element, done) => {
        if (!shouldAnimate()) {
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
        class="grid grid-cols-2 gap-x-4 gap-y-4"
      >
        <LessonsList />
      </div>
    </Transition>
  )
}

function LessonsList() {
  const data = useLearnPageData()
  const lessons = data.lessons
  const midpoint = Math.ceil(lessons.length / 2)
  const leftColumn = lessons.slice(0, midpoint)
  const rightColumn = lessons.slice(midpoint)

  return (
    <>
      {/* Left Column */}
      <div class="space-y-4">
        <For each={leftColumn}>
          {(lesson, index) => (
            <LessonItem lesson={lesson} number={index() + 1} />
          )}
        </For>
      </div>

      {/* Right Column */}
      <div class="space-y-4">
        <For each={rightColumn}>
          {(lesson, index) => (
            <LessonItem
              lesson={lesson}
              number={leftColumn.length + index() + 1}
            />
          )}
        </For>
      </div>
    </>
  )
}

// ============================================================================
// Module Icon Mapping
// ============================================================================

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

// ============================================================================
// Lesson Item Component
// ============================================================================

function LessonItem(props: {
  lesson: EnrichedLearningPathModule
  number: number
}) {
  const { moduleType, displayTitle, linkTo, iconClasses } = props.lesson
  const ModuleIcon = getModuleIcon(moduleType)

  return (
    <Link to={linkTo} class="group block">
      <div class="flex items-center gap-2 py-2">
        <span class="text-muted-foreground w-3 flex-shrink-0 text-xs font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {props.number}.
        </span>
        <ModuleIcon class={cn("h-4 w-4 flex-shrink-0", iconClasses)} />
        <span class="flex-1 text-sm">{displayTitle}</span>
      </div>
    </Link>
  )
}
