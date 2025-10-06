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
  upcomingModules: () => ModuleWithCurrent[]
  moduleProgress?: () => Record<string, ModuleProgress>
  onLoadMore?: () => void
}

export function UpcomingModulesList(props: UpcomingModulesListProps) {
  const isSm = props.variant === "sm"
  const moduleProgress = () => props.moduleProgress?.() || {}
  const visibleCompleted = () => props.completedModules || []

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

  const isCompleted = (moduleId: string) =>
    props.completedModules?.some((c) => c.module_path === moduleId) || false

  const isVocabPractice = (moduleId: string) => {
    const module = modules[moduleId]
    return (
      module &&
      "session_type" in module &&
      module.session_type === "vocab-practice"
    )
  }

  const firstIncompleteIndex = () =>
    props.upcomingModules().findIndex((item) => !isCompleted(item.id))

  /* ---------------- Sidebar (sm) - unchanged ---------------- */
  if (isSm) {
    const completedToShow = 1
    return (
      <div class="space-y-3">
        <h3 class="text-lg font-semibold">Upcoming Lessons</h3>
        <Show
          when={props.upcomingModules().length}
          fallback={
            <p class="text-muted-foreground text-sm">
              Complete a lesson to see upcoming modules
            </p>
          }
        >
          <div class="space-y-1">
            <For
              each={[...visibleCompleted()].slice(0, completedToShow).reverse()}
            >
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
                        <span class="text-muted-foreground hover:text-muted-foreground/70 ml-1 flex-1 cursor-pointer text-xs font-light">
                          {moduleInfo.title}
                          <span class="ml-2 text-sm font-bold text-neutral-400">
                            ✓
                          </span>
                        </span>
                      </div>
                    </Link>
                  </div>
                )
              }}
            </For>
            <For each={props.upcomingModules()}>
              {(item, index) => {
                const moduleInfo = getModuleInfo(item.id)
                const circleClasses = getModuleCircleClasses(moduleInfo.type)
                const isFirst = index() === firstIncompleteIndex()
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
                            "hover:text-muted-foreground ml-1 flex-1 cursor-pointer text-xs",
                            isFirst && "mb-1 text-base leading-2.5 font-medium",
                          )}
                        >
                          {moduleInfo.title}
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

  /* ---------------- Large variant (timeline layout) ---------------- */
  let containerRef: HTMLDivElement | undefined
  let firstUpcomingRef: HTMLDivElement | undefined

  onMount(() => {
    if (!containerRef || !firstUpcomingRef) return
    const container = containerRef
    const target = firstUpcomingRef
    const containerHeight = container.clientHeight
    container.scrollTo({ top: target.offsetTop - containerHeight * 0.25 })
  })

  createEffect(() => {
    if (!containerRef || !props.onLoadMore) return
    const handleScroll = () => {
      if (containerRef.scrollTop < 100) props.onLoadMore?.()
    }
    containerRef.addEventListener("scroll", handleScroll)
    return () => containerRef.removeEventListener("scroll", handleScroll)
  })

  const completedToPreview = () => [...visibleCompleted()].slice(-3).reverse()

  return (
    <div
      ref={containerRef}
      class="mx-auto max-w-2xl space-y-4 overflow-y-auto px-6"
      style={{ height: "calc(100vh - 200px)" }}
    >
      <h2 class="mb-6 text-center text-2xl font-semibold">
        Your Learning Path
      </h2>

      {/* Completed previews */}
      <div class="mb-8 flex flex-col items-center space-y-2">
        <For each={completedToPreview()}>
          {(completion, i) => {
            const moduleInfo = getModuleInfo(completion.module_path)
            const scale = 1 - (completedToPreview().length - 1 - i()) * 0.08
            const opacity = 1 - (completedToPreview().length - 1 - i()) * 0.25
            return (
              <div
                class="w-[90%] rounded-md border border-neutral-500/40 bg-neutral-500/5 px-3 py-2 text-center text-sm font-light text-neutral-400"
                style={{ transform: `scale(${scale})`, opacity }}
              >
                {moduleInfo.title}
              </div>
            )
          }}
        </For>
      </div>

      <div class="relative pl-8">
        {/* Timeline line */}
        <div class="absolute top-0 bottom-0 left-[0.95rem] w-px bg-neutral-600/30" />

        <For each={props.upcomingModules()}>
          {(module, idx) => {
            const moduleInfo = getModuleInfo(module.id)
            const ModuleIcon = getModuleIcon(moduleInfo.type)
            const iconClasses = getModuleIconClasses(moduleInfo.type)
            const progress = () => moduleProgress()[module.id]
            const completed = isCompleted(module.id)
            const current = idx() === firstIncompleteIndex()

            return (
              <div
                ref={current ? firstUpcomingRef : undefined}
                class="relative mb-6 last:mb-0"
              >
                {/* Timeline dot */}
                <div
                  class={cn(
                    "absolute top-4 -left-[1.46rem] h-3.5 w-3.5 rounded-full border-2",
                    completed
                      ? "border-neutral-500 bg-neutral-500"
                      : current
                        ? "border-neutral-500 bg-neutral-600"
                        : "border-neutral-700 bg-neutral-800",
                  )}
                />

                <Link to={moduleInfo.linkTo}>
                  <div
                    class={cn(
                      "rounded-lg border px-4 py-3 backdrop-blur-sm transition-all hover:shadow-md",
                      completed
                        ? "border-neutral-600/40 bg-neutral-500/5 opacity-70"
                        : current
                          ? "bg-primary/14 border-neutral-700/40"
                          : "bg-primary/7 border-neutral-700/40",
                    )}
                  >
                    <div class="flex items-center gap-3">
                      {/* keep original icon color */}
                      <ModuleIcon
                        class={cn(current ? "h-6 w-6" : "h-5 w-5", iconClasses)}
                      />

                      <span
                        class={cn(
                          "flex-1",
                          current
                            ? "text-base font-medium text-neutral-200"
                            : "text-sm text-neutral-400",
                        )}
                      >
                        {moduleInfo.title}
                      </span>

                      <Show when={isVocabPractice(module.id) && progress()}>
                        <VocabProgressBadges progress={progress()!} />
                      </Show>

                      <Show when={completed}>
                        <span class="font-bold text-neutral-400">✓</span>
                      </Show>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }}
        </For>
      </div>
    </div>
  )
}

/* ------------ Vocab progress badges ------------- */
function VocabProgressBadges(props: { progress: ModuleProgress }) {
  const getTotalColor = (percentage: number) => {
    if (percentage <= 30) return "text-red-500"
    if (percentage <= 60) return "text-orange-500"
    if (percentage <= 90) return "text-yellow-500"
    return "text-green-500"
  }

  return (
    <div class="flex items-center gap-1 text-[11px] font-light text-neutral-400">
      <div
        title={`${props.progress.meanings.completed} / ${props.progress.meanings.total} meanings`}
      >
        M: {props.progress.meanings.percentage}%
      </div>
      <div
        title={`${props.progress.spellings.completed} / ${props.progress.spellings.total} spellings`}
      >
        S: {props.progress.spellings.percentage}%
      </div>
      <div
        class={cn(
          "text-xs font-medium",
          getTotalColor(props.progress.percentage),
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
