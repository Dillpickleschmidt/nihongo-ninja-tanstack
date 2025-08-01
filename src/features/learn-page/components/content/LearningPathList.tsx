// features/learn-page/components/content/LearningPathList.tsx
import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { cn } from "@/utils"
import {
  getModuleIcon,
  type EnrichedLearningPathModule,
} from "@/features/learn-page/utils/loader-helpers"
import { useLearnPageData } from "@/features/learn-page/context/LearnPageDataContext"

export function LearningPathList() {
  return (
    <div
      data-lessons-section
      data-transition-content
      class="grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2"
    >
      <LessonsList />
    </div>
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
// Lesson Item Component
// ============================================================================

function LessonItem(props: {
  lesson: EnrichedLearningPathModule
  number: number
}) {
  const { moduleType, displayTitle, linkTo, iconClasses } = props.lesson
  const ModuleIcon = getModuleIcon(moduleType)

  const handleLinkClick = () => {
    // Set animation flag if navigating to lessons
    if (linkTo.startsWith("/lessons")) {
      sessionStorage.setItem("animate-lessons", "true")
    }
  }

  return (
    <Link to={linkTo} onClick={handleLinkClick} class="group block">
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
