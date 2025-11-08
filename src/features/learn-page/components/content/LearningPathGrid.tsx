// features/learn-page/components/content/LearningPathGrid.tsx
import { For, createMemo, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { CircleCheckBig } from "lucide-solid"
import { cn } from "@/utils"
import {
  getModuleIcon,
  enrichLessons,
  type EnrichedLearningPathModule,
} from "@/features/learn-page/utils/loader-helpers"
import { Route } from "@/routes/_home/learn/$learningPathId/$chapterSlug"
import { chapterModulesQueryOptions } from "@/query/query-options"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import { useCustomQuery } from "@/hooks/useCustomQuery"
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
      class="-mr-4 grid grid-cols-1 gap-6 overflow-x-hidden overflow-y-auto pr-2.5 pb-8 lg:grid-cols-2 xl:max-h-[calc(100vh-403px)] xl:grid-cols-3 xl:overflow-y-auto"
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

  // Fetch chapter modules with TQ (prefetched by route loader)
  const modulesQuery = useCustomQuery(() =>
    chapterModulesQueryOptions(
      loaderData().learningPathId,
      loaderData().chapterSlug,
    ),
  )

  const lessons = createMemo(() => {
    if (!modulesQuery.data) return []
    return enrichLessons(modulesQuery.data)
  })

  return (
    <Show
      when={!modulesQuery.isPending}
      fallback={
        // Skeleton loading state - show 6 placeholder cards
        <div class="-mr-4 grid grid-cols-1 gap-6 overflow-x-hidden overflow-y-auto pr-2.5 pb-8 lg:grid-cols-2 xl:max-h-[calc(100vh-403px)] xl:grid-cols-3 xl:overflow-y-auto">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <div class="border-card-foreground/40 bg-card/60 h-12 animate-pulse rounded-md border" />
          ))}
        </div>
      }
    >
      <For each={lessons()}>
        {(module, index) => (
          <GridLessonItem
            module={module}
            number={index() + 1}
            completedModulesSet={completedModulesSet}
          />
        )}
      </For>
    </Show>
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
  const { moduleId, source_type, title, linkTo, iconClasses, disabled } =
    props.module
  const ModuleIcon = getModuleIcon(source_type)

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
          <Link
            to={disabled ? "#" : linkTo}
            onClick={handleClick}
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
                  {disabled ? `${title} (Coming Soon)` : title}
                </span>
              </div>

              <div class="sticky right-0 flex flex-shrink-0">
                <ModuleIcon size="20px" class={iconClasses} />
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
