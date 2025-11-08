// features/learn-page/components/content/LearningPathList.tsx
import { For, createMemo, Show, createSignal } from "solid-js"
import { Link } from "@tanstack/solid-router"
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
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Check } from "lucide-solid"
import type { Module } from "@/data/types"
import { getVocabSets } from "@/data/utils/vocab"

// Helper functions
function getEstimatedTime(module: Module): string {
  // For dynamic modules
  if (module.source_type === "vocab-list") return "2 min"
  if (module.source_type === "vocab-test") return "15 min"
  if (module.source_type === "vocab-practice") {
    // Rough estimate: 15 seconds per vocab item
    return "~10 min"
  }
  if (module.source_type === "sentence-practice") {
    // 1 minute per answer
    return "~15 min"
  }

  // For static modules
  if ("daily_prog_amount" in module && module.daily_prog_amount) {
    return `${module.daily_prog_amount} min`
  }

  return "10 min" // default
}

function getItemCount(module: Module): string {
  if ("vocab_set_ids" in module && module.vocab_set_ids) {
    // For vocab-based modules, we'd need to fetch the vocab sets
    // For now, we'll just return a placeholder
    return "—"
  }
  return "—"
}

function formatModuleType(moduleType: string): string {
  return moduleType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function LearningPathList() {
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
    <div class="border-card-foreground/70 overflow-y-auto rounded-l-xl border-x border-t bg-neutral-500/5 pb-12 xl:max-h-[calc(100vh-403px)] [&>div]:overflow-visible">
      <Table>
        <TableHeader class="relative z-10">
          <TableRow class="sticky top-0 bg-neutral-500/10 backdrop-blur-lg hover:bg-neutral-500/10">
            <TableHead class="w-8 py-3 pl-5">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead class="w-32">Type</TableHead>
            <TableHead class="w-24">Duration</TableHead>
            <TableHead class="w-16">Items</TableHead>
            <TableHead class="w-0 pr-3 !pl-0">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody class="backdrop-blur-xs">
          <Show
            when={!modulesQuery.isPending}
            fallback={
              // Skeleton loading state - show 6 placeholder rows
              <>
                {[1, 2, 3, 4, 5, 6].map(() => (
                  <TableRow class="bg-neutral-500/5 hover:bg-neutral-500/5">
                    <TableCell class="p-0">
                      <div class="h-12 w-8 animate-pulse" />
                    </TableCell>
                    <TableCell class="p-0">
                      <div class="m-2 h-4 w-40 animate-pulse rounded bg-neutral-700" />
                    </TableCell>
                    <TableCell class="p-0">
                      <div class="m-2 h-4 w-24 animate-pulse rounded bg-neutral-700" />
                    </TableCell>
                    <TableCell class="p-0">
                      <div class="m-2 h-4 w-16 animate-pulse rounded bg-neutral-700" />
                    </TableCell>
                    <TableCell class="p-0">
                      <div class="m-2 h-4 w-8 animate-pulse rounded bg-neutral-700" />
                    </TableCell>
                    <TableCell class="p-0">
                      <div class="m-2 h-4 w-4 animate-pulse rounded bg-neutral-700" />
                    </TableCell>
                  </TableRow>
                ))}
              </>
            }
          >
            <For each={lessons()}>
              {(module, index) => (
                <LessonItem
                  module={module}
                  number={index() + 1}
                  completedModulesSet={completedModulesSet}
                />
              )}
            </For>
          </Show>
        </TableBody>
      </Table>
    </div>
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
  const { moduleId, source_type, title, linkTo, iconClasses, disabled } =
    props.module
  const ModuleIcon = getModuleIcon(source_type)

  const isCompleted = () => props.completedModulesSet().has(moduleId)
  const estimatedTime = getEstimatedTime(props.module as any)
  const itemCount = getItemCount(props.module as any)
  const formattedType = formatModuleType(source_type)

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
      <ContextMenuTrigger class="contents" disabled={disabled}>
        <TableRow
          class={cn(
            disabled && "cursor-not-allowed opacity-50",
            !disabled && "cursor-pointer",
            // Completed rows get uniform green background with subtle varying bottom borders
            isCompleted() && "bg-green-500/10 hover:bg-green-500/15",
          )}
        >
          <TableCell class="p-0">
            <Link
              to={disabled ? "#" : linkTo}
              onClick={handleClick}
              class="flex h-12 items-center px-2 pl-6"
            >
              <div
                class={cn(
                  "text-xs font-medium",
                  isCompleted()
                    ? "text-green-500/80 brightness-110"
                    : "text-muted-foreground",
                )}
              >
                {props.number}
              </div>
            </Link>
          </TableCell>

          <TableCell class="p-0">
            <Link
              to={disabled ? "#" : linkTo}
              onClick={handleClick}
              class="flex h-12 items-center gap-2 px-2"
            >
              <ModuleIcon class={cn("h-4 w-4", iconClasses)} />
              <span class={cn("text-sm", isCompleted() && "font-medium")}>
                {disabled ? `${title} (Coming Soon)` : title}
              </span>
            </Link>
          </TableCell>

          <TableCell class="p-0">
            <Link
              to={disabled ? "#" : linkTo}
              onClick={handleClick}
              class="flex h-12 items-center px-2"
            >
              <span
                class={cn(
                  "inline-flex rounded-full py-0.5 text-xs font-medium",
                  iconClasses.replace("text-", "bg-").replace("dark:", ""),
                  "bg-opacity-20 dark:bg-opacity-30",
                )}
              >
                {formattedType}
              </span>
            </Link>
          </TableCell>

          <TableCell class="p-0">
            <Link
              to={disabled ? "#" : linkTo}
              onClick={handleClick}
              class="flex h-12 items-center px-2"
            >
              <span class="text-muted-foreground text-xs">{estimatedTime}</span>
            </Link>
          </TableCell>

          <TableCell class="p-0">
            <Link
              to={disabled ? "#" : linkTo}
              onClick={handleClick}
              class="flex h-12 items-center px-2"
            >
              <span
                class={`text-muted-foreground text-xs ${itemCount === "—" ? "pl-3.25" : ""}`}
              >
                {itemCount}
              </span>
            </Link>
          </TableCell>

          <TableCell class="!p-0">
            <Link
              to={disabled ? "#" : linkTo}
              onClick={handleClick}
              class="flex h-12 items-center pl-3"
            >
              <Show when={isCompleted()}>
                <Check class="h-4 w-4 text-green-500" />
              </Show>
            </Link>
          </TableCell>
        </TableRow>
      </ContextMenuTrigger>
      <ContextMenuPortal>
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
      </ContextMenuPortal>
    </ContextMenu>
  )
}
