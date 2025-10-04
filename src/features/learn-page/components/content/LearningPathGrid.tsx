// features/learn-page/components/content/LearningPathGrid.tsx
import { For, createMemo } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { CircleCheckBig } from "lucide-solid"
import { cn } from "@/utils"
import {
  getModuleIcon,
  enrichLessons,
  type EnrichedLearningPathModule,
} from "@/features/learn-page/utils/loader-helpers"
import { Route } from "@/routes/_home/learn/$textbookId.$chapterSlug"
import { getDeckBySlug, getLessons } from "@/data/utils/core"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu"

export function LearningPathGrid() {
  return (
    <div
      id="tour-lesson-cards"
      class="-mr-4 grid max-h-[calc(100vh-471px)] grid-cols-1 gap-6 overflow-x-hidden overflow-y-auto pr-2.5 pb-8 lg:grid-cols-2 xl:grid-cols-3"
    >
      <GridLessonsList />
    </div>
  )
}

function GridLessonsList() {
  const { completionsQuery } = useLearnPageContext()
  const completedModulesSet = () =>
    new Set(completionsQuery.data?.map((c) => c.module_path))
  const loaderData = Route.useLoaderData()
  const activeDeck = () =>
    getDeckBySlug(loaderData().textbookId, loaderData().chapterSlug)

  const lessons = createMemo(() => {
    const deck = activeDeck()
    if (!deck) return []
    const rawLessons = getLessons(deck)
    return enrichLessons(rawLessons)
  })

  return (
    <For each={lessons()}>
      {(module, index) => (
        <GridLessonItem
          module={module}
          number={index() + 1}
          completedModulesSet={completedModulesSet}
        />
      )}
    </For>
  )
}

// ============================================================================
// Grid Lesson Item Component
// ============================================================================

function GridLessonItem(props: {
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
        <div class="ease-instant-hover-75 hover:scale-[98.5%]">
          <Link to={disabled ? "#" : linkTo} onClick={handleClick}>
            <div
              data-lessons-section
              class={cn(
                "group bg-card font-inter relative block h-12 w-full rounded-md text-sm whitespace-nowrap",
                "border-card-foreground/70 border backdrop-blur-sm",
                "bg-gradient-to-br dark:from-neutral-600/10 dark:to-gray-600/5",
                "ease-instant-hover-200",
                isCompleted() &&
                  "border-green-500/50 font-semibold text-green-500",
                disabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-accent cursor-pointer",
              )}
            >
              <div
                class={cn(
                  "scrollbar-hide absolute inset-0 flex items-center justify-between overflow-x-scroll overflow-y-hidden px-5",
                  isCompleted() && "bg-green-500/10",
                )}
              >
                <div class="flex items-center gap-3">
                  <span
                    class={cn(
                      "text-primary",
                      isCompleted() && "font-bold text-green-500",
                    )}
                  >
                    {props.number}.
                  </span>
                  <span
                    class={cn(
                      "text-primary dark:text-muted-foreground",
                      isCompleted() && "font-bold text-green-500",
                    )}
                  >
                    {isCompleted() && (
                      <CircleCheckBig class="mr-2 inline-flex h-4 w-4 origin-center dark:text-green-500" />
                    )}
                    {disabled ? `${displayTitle} (Coming Soon)` : displayTitle}
                  </span>
                </div>

                <div class="sticky right-0 flex flex-shrink-0">
                  <ModuleIcon size="20px" class={iconClasses} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent class="border-card-foreground bg-neutral-900/70 backdrop-blur-sm">
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
