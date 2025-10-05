import { Show, For, createEffect, onMount } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { external_resources } from "@/data/external_resources"
import { cn } from "@/utils"
import {
  getModuleIcon,
  getModuleIconClasses,
  getModuleCircleClasses,
  getLinkTo,
} from "@/features/learn-page/utils/loader-helpers"
import type {
  ModuleProgress,
  ModuleWithCurrent,
} from "@/features/learn-page/query/query-options"

const modules = { ...static_modules, ...dynamic_modules, ...external_resources }

interface UpcomingModulesListProps {
  variant: "sm" | "lg"
  completedModules?: ModuleCompletion[]
  upcomingModules: ModuleWithCurrent[]
  moduleProgress?: Record<string, ModuleProgress>
  onLoadMore?: () => void
}

export function UpcomingModulesList(props: UpcomingModulesListProps) {
  const isSm = props.variant === "sm"
  const completedToShow = isSm ? 1 : 3
  const visibleCompleted = () => {
    if (!props.completedModules) return []
    return props.completedModules.slice(0, completedToShow)
  }

  let containerRef: HTMLDivElement | undefined
  let firstUpcomingRef: HTMLDivElement | undefined

  const getModuleInfo = (moduleId: string) => {
    const module = modules[moduleId]
    if (module) {
      const type =
        "session_type" in module ? module.session_type : module.lesson_type
      const linkTo = getLinkTo(module, moduleId)
      return { title: module.title, type, linkTo }
    }
    return { title: moduleId, type: "misc", linkTo: "#" }
  }

  const isVocabPractice = (moduleId: string) => {
    const module = modules[moduleId]
    return (
      module &&
      "session_type" in module &&
      module.session_type === "vocab-practice"
    )
  }

  const firstIncompleteIndex = () => {
    return props.upcomingModules.findIndex((item) => !isCompleted(item.id))
  }

  const isCompleted = (moduleId: string) =>
    props.completedModules?.some((c) => c.module_path === moduleId) || false

  // Scroll to first upcoming module on mount (lg only)
  onMount(() => {
    if (!isSm && firstUpcomingRef && containerRef) {
      const container = containerRef
      const target = firstUpcomingRef
      const containerHeight = container.clientHeight
      const targetTop = target.offsetTop
      const scrollPosition = targetTop - containerHeight * 0.25

      container.scrollTo({ top: scrollPosition, behavior: "smooth" })
    }
  })

  // Infinite scroll - load more when scrolled to top (lg only)
  createEffect(() => {
    if (isSm || !containerRef || !props.onLoadMore) return

    const handleScroll = () => {
      if (containerRef && containerRef.scrollTop < 100) {
        props.onLoadMore?.()
      }
    }

    containerRef.addEventListener("scroll", handleScroll)
    return () => containerRef?.removeEventListener("scroll", handleScroll)
  })

  // Small variant (sidebar)
  if (isSm) {
    return (
      <div class="space-y-3">
        <h3 class="text-lg font-semibold">Upcoming Lessons</h3>

        <Show
          when={props.upcomingModules.length}
          fallback={
            <p class="text-muted-foreground text-sm">
              Complete a lesson to see upcoming modules
            </p>
          }
        >
          <div class="space-y-1">
            {/* Latest completed module */}
            <For each={[...visibleCompleted()].reverse()}>
              {(completion) => {
                const moduleInfo = getModuleInfo(completion.module_path)
                const circleClasses = getModuleCircleClasses(moduleInfo.type)

                return (
                  <div class="ml-1 rounded px-2 opacity-50">
                    <Link to={moduleInfo.linkTo}>
                      <div class="flex items-center gap-2 py-2">
                        <div
                          class={cn(
                            "h-2 w-2 flex-shrink-0 rounded-full",
                            circleClasses,
                          )}
                        />
                        <span class="ease-instant-hover-100 text-muted-foreground hover:text-muted-foreground/70 ml-1 flex-1 cursor-pointer text-xs font-light">
                          <span class="whitespace-nowrap">
                            {moduleInfo.title}
                          </span>
                          <span class="ml-2 text-sm font-bold text-green-500">
                            ✓
                          </span>
                        </span>
                      </div>
                    </Link>
                  </div>
                )
              }}
            </For>

            {/* Upcoming modules */}
            <For each={props.upcomingModules}>
              {(item, index) => {
                const moduleInfo = getModuleInfo(item.id)
                const circleClasses = getModuleCircleClasses(moduleInfo.type)
                const isFirstIncomplete = index() === firstIncompleteIndex()

                return (
                  <div class="ml-1 rounded px-2">
                    <Link to={moduleInfo.linkTo}>
                      <div class="flex items-center gap-2 py-2">
                        <div
                          class={cn(
                            "h-2 w-2 flex-shrink-0 rounded-full",
                            circleClasses,
                          )}
                        />
                        <span
                          class={cn(
                            "ease-instant-hover-100 hover:text-muted-foreground ml-1 flex-1 cursor-pointer text-xs",
                            isFirstIncomplete && "text-sm font-medium",
                          )}
                        >
                          <span class="whitespace-nowrap">
                            {moduleInfo.title}
                          </span>
                        </span>
                      </div>
                    </Link>
                  </div>
                )
              }}
            </For>
          </div>
        </Show>
      </div>
    )
  }

  // Large variant (progress page)
  return (
    <div
      ref={containerRef}
      class="mx-auto max-w-2xl space-y-1 overflow-y-auto px-4"
      style={{ height: "calc(100vh - 200px)" }}
    >
      {/* Completed Modules (oldest at top) */}
      <For each={[...visibleCompleted()].reverse()}>
        {(completion) => {
          const moduleInfo = getModuleInfo(completion.module_path)
          const ModuleIcon = getModuleIcon(moduleInfo.type)
          const iconClasses = getModuleIconClasses(moduleInfo.type)
          const progress = props.moduleProgress?.[completion.module_path]

          return (
            <div class="rounded px-2 opacity-50">
              <Link to={moduleInfo.linkTo}>
                <div class="flex items-center gap-3 py-2">
                  <ModuleIcon
                    class={cn("h-4 w-4 flex-shrink-0", iconClasses)}
                  />
                  <span class="ease-instant-hover-100 text-muted-foreground hover:text-muted-foreground/70 flex-1 cursor-pointer text-sm">
                    <span class="whitespace-nowrap">{moduleInfo.title}</span>
                  </span>
                  <Show
                    when={isVocabPractice(completion.module_path) && progress}
                  >
                    <VocabProgressBadges progress={progress!} />
                  </Show>
                  <span class="text-sm font-bold text-green-500">✓</span>
                </div>
              </Link>
            </div>
          )
        }}
      </For>

      {/* Upcoming Modules */}
      <For each={props.upcomingModules}>
        {(module, index) => {
          const moduleInfo = getModuleInfo(module.id)
          const ModuleIcon = getModuleIcon(moduleInfo.type)
          const iconClasses = getModuleIconClasses(moduleInfo.type)
          const isFirst = index() === 0
          const isFirstIncomplete = index() === firstIncompleteIndex()
          const progress = props.moduleProgress?.[module.id]

          return (
            <div
              ref={isFirst ? firstUpcomingRef : undefined}
              class="rounded px-2"
            >
              <Link to={moduleInfo.linkTo}>
                <div class="flex items-center gap-3 py-2">
                  <ModuleIcon
                    class={cn(
                      "flex-shrink-0",
                      isFirstIncomplete ? "h-5 w-5" : "h-4 w-4",
                      iconClasses,
                    )}
                  />
                  <span
                    class={cn(
                      "ease-instant-hover-100 hover:text-muted-foreground flex-1 cursor-pointer",
                      isFirstIncomplete ? "text-base font-medium" : "text-sm",
                    )}
                  >
                    <span class="whitespace-nowrap">{moduleInfo.title}</span>
                  </span>
                  <Show when={isVocabPractice(module.id) && progress}>
                    <VocabProgressBadges progress={progress!} />
                  </Show>
                </div>
              </Link>
            </div>
          )
        }}
      </For>
    </div>
  )
}

function VocabProgressBadges(props: { progress: ModuleProgress }) {
  const getProgressColor = (percentage: number) => {
    if (percentage <= 30) return "text-red-600 dark:text-red-400"
    if (percentage <= 60) return "text-orange-600 dark:text-orange-400"
    if (percentage <= 90) return "text-yellow-600 dark:text-yellow-400"
    return "text-green-600 dark:text-green-400"
  }

  return (
    <div class="flex items-center gap-1">
      <div
        class="text-[10px] font-light"
        title={`${props.progress.meanings.completed} / ${props.progress.meanings.total} meanings`}
      >
        M: {props.progress.meanings.percentage}%
      </div>

      <div
        class="text-muted-foreground text-[10px] font-light"
        title={`${props.progress.spellings.completed} / ${props.progress.spellings.total} spellings`}
      >
        S: {props.progress.spellings.percentage}%
      </div>

      <div
        class={cn(
          "text-xs font-medium",
          getProgressColor(props.progress.percentage),
        )}
        title={`${props.progress.completed} / ${props.progress.total} completed`}
      >
        <Show
          when={props.progress.percentage === 100}
          fallback={`${props.progress.percentage}%`}
        >
          ✓
        </Show>
      </div>
    </div>
  )
}
