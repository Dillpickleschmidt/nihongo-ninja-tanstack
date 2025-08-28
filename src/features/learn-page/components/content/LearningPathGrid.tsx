// features/learn-page/components/content/LearningPathGrid.tsx
import { For } from "solid-js"
import { Link, useNavigate } from "@tanstack/solid-router"
import { CircleCheckBig } from "lucide-solid"
import { cn } from "@/utils"
import {
  getModuleIcon,
  type EnrichedLearningPathModule,
} from "@/features/learn-page/utils/loader-helpers"
import { useLearnPageData } from "@/features/learn-page/context/LearnPageDataContext"

export function LearningPathGrid() {
  return (
    <div
      id="tour-lesson-cards"
      data-lessons-section
      data-transition-content
      class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
    >
      <GridLessonsList />
    </div>
  )
}

function GridLessonsList() {
  const data = useLearnPageData()
  return (
    <For each={data.lessons}>
      {(lesson, index) => (
        <GridLessonItem lesson={lesson} number={index() + 1} />
      )}
    </For>
  )
}

// ============================================================================
// Grid Lesson Item Component
// ============================================================================

function GridLessonItem(props: {
  lesson: EnrichedLearningPathModule
  number: number
}) {
  const { moduleType, displayTitle, linkTo, iconClasses, disabled } = props.lesson
  const ModuleIcon = getModuleIcon(moduleType)
  const navigate = useNavigate()

  // TODO: Add completion logic when available
  const isCompleted = false

  const handleClick = () => {
    if (disabled) return
    
    // Set animation flag if navigating to lessons
    if (linkTo.startsWith("/lessons")) {
      sessionStorage.setItem("animate-lessons", "true")
    }
    navigate({ to: linkTo })
  }

  return (
    <div class="duration-75 ease-in-out hover:scale-[98.5%]">
      <div
        onClick={handleClick}
        class={cn(
          "group bg-card font-inter relative block h-12 w-full rounded-md text-sm whitespace-nowrap",
          "border-card-foreground/70 border backdrop-blur-sm",
          "bg-gradient-to-br dark:from-neutral-600/10 dark:to-gray-600/5",
          "transition-all duration-200",
          isCompleted && "border-green-500/50 font-semibold text-green-500",
          disabled 
            ? "opacity-50 cursor-not-allowed" 
            : "cursor-pointer hover:bg-accent",
        )}
      >
        <div
          class={cn(
            "scrollbar-hide absolute inset-0 flex items-center justify-between overflow-x-scroll overflow-y-hidden px-5",
            isCompleted && "bg-green-500/10",
          )}
        >
          <div class="flex items-center gap-3">
            <span
              class={cn(
                "text-primary",
                isCompleted && "font-bold text-green-500",
              )}
            >
              {props.number}.
            </span>
            <span
              class={cn(
                "text-primary dark:text-muted-foreground",
                isCompleted && "font-bold text-green-500",
              )}
            >
              {isCompleted && (
                <CircleCheckBig class="mr-2 inline-flex h-4 w-4 origin-center" />
              )}
              {disabled ? `${displayTitle} (Coming Soon)` : displayTitle}
            </span>
          </div>

          <div class="sticky right-0 flex flex-shrink-0">
            <ModuleIcon size="20px" class={iconClasses} />
          </div>
        </div>
      </div>
    </div>
  )
}
