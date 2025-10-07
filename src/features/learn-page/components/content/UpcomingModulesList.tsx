// features/learn-page/components/content/UpcomingModulesList.tsx
import { Show, For, createEffect, createSignal } from "solid-js"
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
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import type {
  ModuleProgress,
  ModuleWithCurrent,
} from "@/features/learn-page/query/query-options"

const modules = { ...static_modules, ...dynamic_modules, ...external_resources }

interface UpcomingModulesListProps {
  variant: "sm" | "lg"
  upcomingModules: () => ModuleWithCurrent[]
}

export function UpcomingModulesList(props: UpcomingModulesListProps) {
  const isSm = props.variant === "sm"
  const { completionsQuery, moduleProgressQuery } = useLearnPageContext()

  const [visibleCompletedCount, setVisibleCompletedCount] = createSignal(2)

  const allCompletedModules = () => completionsQuery.data || []
  const visibleCompleted = () =>
    allCompletedModules().slice(0, visibleCompletedCount())
  const moduleProgress = () => moduleProgressQuery.data || {}

  // Scroll-based gradient animations (33px transition zone from top edge)
  const applyScrollAnimations = (container: HTMLElement) => {
    const containerRect = container.getBoundingClientRect()
    const containerTop = containerRect.top
    const items = container.querySelectorAll("[data-module-item]")

    items.forEach((item) => {
      const rect = item.getBoundingClientRect()
      const itemTop = rect.top

      // Calculate distance from top edge only
      const distanceFromTop = itemTop - containerTop

      // Linear interpolation within 33px zone from top
      let progress = 1
      if (distanceFromTop < 33) {
        progress = Math.max(0, distanceFromTop / 33) // 0 at edge, 1 at 33px inside
      }

      // Calculate opacity and scale
      const opacity = 0.3 + 0.7 * progress // 0.3 → 1.0
      const scale = 0.95 + 0.05 * progress // 0.95 → 1.0

      // Apply inline styles
      ;(item as HTMLElement).style.opacity = opacity.toString()
      ;(item as HTMLElement).style.transform = `scale(${scale})`
    })
  }

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

  /* ---------------- Sidebar (sm) ---------------- */
  if (isSm) {
    let containerRef: HTMLDivElement | undefined

    createEffect(() => {
      if (!containerRef) return
      let rafId: number | null = null

      const handleScroll = () => {
        // Load more completed modules when near top
        if (
          containerRef!.scrollTop < 15 &&
          visibleCompletedCount() < allCompletedModules().length
        ) {
          // Capture scroll state before adding items
          const oldScrollHeight = containerRef!.scrollHeight
          const oldScrollTop = containerRef!.scrollTop

          setVisibleCompletedCount((prev) =>
            Math.min(prev + 5, allCompletedModules().length),
          )

          // Restore visual position after DOM updates
          requestAnimationFrame(() => {
            const newScrollHeight = containerRef!.scrollHeight
            const heightDiff = newScrollHeight - oldScrollHeight
            containerRef!.scrollTop = oldScrollTop + heightDiff
          })
        }

        // Apply scroll animations with RAF
        if (rafId) cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          applyScrollAnimations(containerRef!)
        })
      }

      containerRef.addEventListener("scroll", handleScroll)
      return () => {
        containerRef.removeEventListener("scroll", handleScroll)
        if (rafId) cancelAnimationFrame(rafId)
      }
    })

    // Scroll to show boundary between completed and upcoming once when data loads
    let hasScrolledToPosition = false
    createEffect(() => {
      if (hasScrolledToPosition || !containerRef) return

      const visible = visibleCompleted()
      if (visible.length === 0) return

      requestAnimationFrame(() => {
        if (!containerRef) return
        // Find the first upcoming module element
        const firstUpcomingEl = containerRef.querySelector(
          "[data-module-item]:not([data-completed-item])",
        )
        if (firstUpcomingEl) {
          // Scroll so the first upcoming module is visible with some completed modules above
          const upcomingOffset = (firstUpcomingEl as HTMLElement).offsetTop
          containerRef.scrollTop = Math.max(0, upcomingOffset - 175)
          hasScrolledToPosition = true
          applyScrollAnimations(containerRef)
        }
      })
    })

    // Re-apply animations when visible count changes
    createEffect(() => {
      visibleCompletedCount()
      if (!containerRef) return
      requestAnimationFrame(() => applyScrollAnimations(containerRef!))
    })

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
          <div
            ref={containerRef}
            class="max-h-[300px] space-y-1 overflow-y-auto"
          >
            <style>{`
              [data-module-item] {
                transition: opacity 100ms ease-out, transform 100ms ease-out;
              }
            `}</style>
            <For each={[...visibleCompleted()].reverse()}>
              {(completion) => {
                const moduleInfo = getModuleInfo(completion.module_path)
                const circleClasses = getModuleCircleClasses(moduleInfo.type)
                return (
                  <div
                    class="ml-1 rounded px-2 opacity-50"
                    data-completed-item
                    data-module-item
                  >
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
                const isCurrent = index() === 0
                return (
                  <div class="ml-1 rounded px-2" data-module-item>
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
                            isCurrent &&
                              "mb-1 text-base leading-2.5 font-medium",
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

  createEffect(() => {
    if (!containerRef) return
    let rafId: number | null = null

    const handleScroll = () => {
      // Load more completed modules when near top
      if (
        containerRef!.scrollTop < 15 &&
        visibleCompletedCount() < allCompletedModules().length
      ) {
        // Capture scroll state before adding items
        const oldScrollHeight = containerRef!.scrollHeight
        const oldScrollTop = containerRef!.scrollTop

        setVisibleCompletedCount((prev) =>
          Math.min(prev + 5, allCompletedModules().length),
        )

        // Restore visual position after DOM updates
        requestAnimationFrame(() => {
          const newScrollHeight = containerRef!.scrollHeight
          const heightDiff = newScrollHeight - oldScrollHeight
          containerRef!.scrollTop = oldScrollTop + heightDiff
        })
      }

      // Apply scroll animations with RAF
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        applyScrollAnimations(containerRef!)
      })
    }

    containerRef.addEventListener("scroll", handleScroll)
    return () => {
      containerRef.removeEventListener("scroll", handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  })

  // Scroll to show boundary between completed and upcoming once when data loads
  let hasScrolledToPosition = false
  createEffect(() => {
    if (hasScrolledToPosition || !containerRef) return

    const visible = visibleCompleted()
    if (visible.length === 0) return

    requestAnimationFrame(() => {
      if (!containerRef) return
      // Find the first upcoming module element
      const firstUpcomingEl = containerRef.querySelector(
        "[data-module-item]:not([data-completed-item])",
      )
      if (firstUpcomingEl) {
        // Scroll so the first upcoming module is visible with some completed modules above
        const upcomingOffset = (firstUpcomingEl as HTMLElement).offsetTop
        containerRef.scrollTop = Math.max(0, upcomingOffset - 50)
        hasScrolledToPosition = true
        applyScrollAnimations(containerRef)
      }
    })
  })

  // Re-apply animations when visible count changes (lg variant)
  createEffect(() => {
    visibleCompletedCount()
    if (!containerRef) return
    requestAnimationFrame(() => applyScrollAnimations(containerRef!))
  })

  return (
    <div
      ref={containerRef}
      class="mx-auto h-[calc(100vh-141px)] max-w-2xl space-y-4 overflow-y-auto px-6 pt-9 pb-6 xl:h-[calc(100vh-171px)]"
    >
      <style>{`
        [data-module-item] {
          transition: opacity 100ms ease-out, transform 100ms ease-out;
        }
      `}</style>

      <div class="relative pl-8">
        {/* Timeline line */}
        <div class="absolute top-0 bottom-0 left-[0.95rem] w-px bg-neutral-600/30" />

        {/* Completed modules */}
        <For each={[...visibleCompleted()].reverse()}>
          {(completion) => {
            const moduleInfo = getModuleInfo(completion.module_path)
            const ModuleIcon = getModuleIcon(moduleInfo.type)
            const iconClasses = getModuleIconClasses(moduleInfo.type)

            return (
              <div
                class="relative mb-6 last:mb-0"
                data-module-item
                data-completed-item
              >
                {/* Timeline dot */}
                <div class="absolute top-3.5 -left-[1.46rem] h-3.5 w-3.5 rounded-full border-2 border-neutral-500 bg-neutral-500" />

                <Link to={moduleInfo.linkTo}>
                  <div class="rounded-lg border border-neutral-600/40 bg-transparent px-3.5 py-2 transition-all hover:shadow-md">
                    <div class="flex items-center gap-3">
                      <ModuleIcon class={cn("h-4.5 w-4.5", iconClasses)} />

                      <span class="flex-1 text-xs text-neutral-400">
                        {moduleInfo.title}
                      </span>

                      <span class="font-bold text-neutral-400">✓</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }}
        </For>

        {/* Upcoming modules */}
        <For each={props.upcomingModules()}>
          {(module, idx) => {
            const moduleInfo = getModuleInfo(module.id)
            const ModuleIcon = getModuleIcon(moduleInfo.type)
            const iconClasses = getModuleIconClasses(moduleInfo.type)
            const progress = () => moduleProgress()[module.id]
            const isCurrent = idx() === 0

            return (
              <div class="relative mb-6 last:mb-0" data-module-item>
                {/* Timeline dot */}
                <div
                  class={cn(
                    "absolute top-4 -left-[1.46rem] h-3.5 w-3.5 rounded-full border-2",
                    "border-neutral-700 bg-neutral-800",
                  )}
                />

                <Link to={moduleInfo.linkTo}>
                  <div
                    class={cn(
                      "rounded-lg px-4 py-3 backdrop-blur-sm transition-all hover:shadow-md",
                      isCurrent
                        ? "bg-primary/9 border-2 border-neutral-600"
                        : "bg-primary/3 border border-neutral-700/40",
                    )}
                  >
                    <div class="flex items-center gap-3">
                      <ModuleIcon
                        class={cn(
                          isCurrent ? "h-6 w-6" : "h-5 w-5",
                          iconClasses,
                        )}
                      />

                      <span
                        class={cn(
                          "flex-1",
                          isCurrent
                            ? "text-base font-medium text-neutral-200"
                            : "text-sm text-neutral-400",
                        )}
                      >
                        {moduleInfo.title}
                      </span>

                      <Show when={isVocabPractice(module.id) && progress()}>
                        <VocabProgressBadges progress={progress()!} />
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
