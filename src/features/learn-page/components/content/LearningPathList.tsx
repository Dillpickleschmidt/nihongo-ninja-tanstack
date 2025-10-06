// features/learn-page/components/content/LearningPathList.tsx
import { For, createMemo } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { cn } from "@/utils"
import {
  getModuleIcon,
  enrichLessons,
  type EnrichedLearningPathModule,
} from "@/features/learn-page/utils/loader-helpers"
import { Route } from "@/routes/_home/learn/$textbookId/$chapterSlug"
import { getModules } from "@/data/utils/core"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu"

export function LearningPathList() {
  return (
    <div
      // data-lessons-section
      class="grid grid-cols-1 gap-x-4 gap-y-4 pb-8 lg:grid-cols-2 xl:max-h-[calc(100vh-471px)]"
    >
      <LessonsList />
    </div>
  )
}

function LessonsList() {
  const { completionsQuery } = useLearnPageContext()
  const completedModulesSet = () =>
    new Set(completionsQuery.data?.map((c) => c.module_path))
  const loaderData = Route.useLoaderData()

  const lessons = createMemo(() => {
    const deck = loaderData().deck
    if (!deck) return []
    const rawModules = getModules(deck)
    return enrichLessons(rawModules)
  })

  const midpoint = () => Math.ceil(lessons().length / 2)
  const leftColumn = () => lessons().slice(0, midpoint())
  const rightColumn = () => lessons().slice(midpoint())

  return (
    <>
      {/* Left Column */}
      <div class="space-y-4">
        <For each={leftColumn()}>
          {(module, index) => (
            <LessonItem
              module={module}
              number={index() + 1}
              completedModulesSet={completedModulesSet}
            />
          )}
        </For>
      </div>

      {/* Right Column */}
      <div class="space-y-4">
        <For each={rightColumn()}>
          {(module, index) => (
            <LessonItem
              module={module}
              number={leftColumn().length + index() + 1}
              completedModulesSet={completedModulesSet}
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
  module: EnrichedLearningPathModule
  number: number
  completedModulesSet: () => Set<string>
}) {
  const { setCurrentPosition } = useLearnPageContext()
  const { moduleId, moduleType, displayTitle, linkTo, iconClasses, disabled } =
    props.module
  const ModuleIcon = getModuleIcon(moduleType)

  const isCompleted = () => props.completedModulesSet().has(moduleId)

  const handleClick = () => {
    if (disabled) return

    // Set animation flag if navigating to lessons
    if (linkTo.startsWith("/lessons")) {
      sessionStorage.setItem("animate-lessons", "true")
    }
  }

  const handleStartFromHere = () => {
    if (!disabled && moduleId) {
      setCurrentPosition(moduleId)
    }
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger disabled={disabled}>
        <Link to={disabled ? "#" : linkTo} onClick={handleClick}>
          <div
            onClick={handleClick}
            class={cn(
              "group block",
              disabled
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-accent/50 -mx-2 cursor-pointer rounded px-2",
            )}
          >
            <div class="flex items-center gap-2 py-2">
              <span class="text-muted-foreground w-3 flex-shrink-0 text-xs font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {props.number}.
              </span>
              <ModuleIcon class={cn("h-4 w-4 flex-shrink-0", iconClasses)} />
              <span
                class={cn(
                  "flex-1 text-sm",
                  isCompleted() && "font-semibold text-green-500",
                )}
              >
                {disabled ? `${displayTitle} (Coming Soon)` : displayTitle}
              </span>
            </div>
          </div>
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onSelect={handleStartFromHere}>
          <div class="flex flex-col">
            <span>Start from here</span>
            <span class="text-muted-foreground text-xs">
              Set this as your current learning position
            </span>
          </div>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
