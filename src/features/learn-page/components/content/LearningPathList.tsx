// features/learn-page/components/content/LearningPathList.tsx
import { For } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
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
  const { moduleType, displayTitle, linkTo, iconClasses, disabled } = props.lesson
  const ModuleIcon = getModuleIcon(moduleType)
  const navigate = useNavigate()

  const handleClick = () => {
    if (disabled) return

    // Set animation flag if navigating to lessons
    if (linkTo.startsWith("/lessons")) {
      sessionStorage.setItem("animate-lessons", "true")
    }
    navigate({ to: linkTo })
  }

  return (
    <div 
      onClick={handleClick}
      class={cn(
        "group block",
        disabled 
          ? "cursor-not-allowed opacity-50" 
          : "cursor-pointer hover:bg-accent/50 rounded px-2 -mx-2"
      )}
    >
      <div class="flex items-center gap-2 py-2">
        <span class="text-muted-foreground w-3 flex-shrink-0 text-xs font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {props.number}.
        </span>
        <ModuleIcon class={cn("h-4 w-4 flex-shrink-0", iconClasses)} />
        <span class="flex-1 text-sm">
          {disabled ? `${displayTitle} (Coming Soon)` : displayTitle}
        </span>
      </div>
    </div>
  )
}
