// features/learn-page-v2/components/content/UpcomingModulesList.tsx
import { Show, For, createEffect, createSignal } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { Loader2, ChevronDown } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { external_resources } from "@/data/external_resources"
import { cn } from "@/utils"
import {
  getModuleCircleClasses,
  getLinkTo,
} from "@/features/learn-page/utils/loader-helpers"
import type { UseQueryResult, DefaultError } from "@tanstack/solid-query"
import type { ModuleWithCurrent } from "@/features/learn-page/query/query-options"

const modules = { ...static_modules, ...dynamic_modules, ...external_resources }

// Constants
const FADE_ZONE_PX = 33
const SCROLL_LOAD_THRESHOLD_PX = 15
const LOAD_BATCH_SIZE = 5
const MODULE_ITEM_HEIGHT_PX = 20
const ABSOLUTE_SCROLL_OFFSET_PX = 0

// Helper to get module info
function getModuleInfo(moduleId: string) {
  const module = modules[moduleId]
  if (module) {
    const type =
      "session_type" in module ? module.session_type : module.lesson_type
    const linkTo = getLinkTo(module, moduleId)
    return { title: module.title, type, linkTo }
  }
  return { title: moduleId, type: "misc" as const, linkTo: "#" }
}

// Reusable module item component
function ModuleItem(props: {
  moduleId: string
  isCompleted?: boolean
  isCurrent?: boolean
}) {
  const moduleInfo = getModuleInfo(props.moduleId)
  const circleClasses = getModuleCircleClasses(moduleInfo.type)

  return (
    <div
      class={cn("ml-1 rounded px-2", props.isCompleted && "opacity-50")}
      data-module-item
      data-completed-item={props.isCompleted || undefined}
    >
      <Link to={moduleInfo.linkTo}>
        <div class="flex items-center gap-2 py-2">
          <div
            class={cn("h-2 w-2 flex-shrink-0 rounded-full", circleClasses)}
          />
          <span
            class={cn(
              "hover:text-muted-foreground ml-1 flex-1 cursor-pointer text-xs",
              props.isCompleted &&
                "text-muted-foreground hover:text-muted-foreground/70 font-light",
              props.isCurrent && "mb-1 text-base leading-2.5 font-medium",
            )}
          >
            {moduleInfo.title}
            {props.isCompleted && (
              <span class="ml-2 text-sm font-bold text-neutral-400">✓</span>
            )}
          </span>
        </div>
      </Link>
    </div>
  )
}

interface UpcomingModulesListProps {
  upcomingModulesQuery: UseQueryResult<ModuleWithCurrent[], DefaultError>
  completionsQuery: UseQueryResult<ModuleProgress[], DefaultError>
  class?: string
}

export function UpcomingModulesList(props: UpcomingModulesListProps) {
  const { upcomingModulesQuery, completionsQuery } = props

  // Filter out completed modules from upcoming list
  const filteredUpcomingModules = () => {
    if (
      upcomingModulesQuery.isPending ||
      upcomingModulesQuery.isError ||
      completionsQuery.isPending ||
      completionsQuery.isError
    ) {
      return undefined
    }

    const completedSet = new Set(
      completionsQuery.data.map((c) => c.module_path),
    )
    return upcomingModulesQuery.data.filter(
      (item) => !completedSet.has(item.id),
    )
  }

  const [visibleCompletedCount, setVisibleCompletedCount] =
    createSignal(LOAD_BATCH_SIZE)
  const [isScrolledAboveInitial, setIsScrolledAboveInitial] =
    createSignal(false)
  const [hasScrolledToPosition, setHasScrolledToPosition] = createSignal(false)
  let containerRef: HTMLDivElement | undefined
  let initialScrollPosition = 0

  const visibleCompleted = () => {
    if (completionsQuery.isPending || completionsQuery.isError) return []
    return completionsQuery.data.slice(0, visibleCompletedCount())
  }

  const reversedCompleted = () => [...visibleCompleted()].reverse()

  // Track the first upcoming module ID
  const firstUpcomingId = () => {
    const modules = filteredUpcomingModules()
    return modules?.[0]?.id
  }

  // Reset scroll flag when first upcoming module changes
  createEffect(() => {
    const firstId = firstUpcomingId()
    if (firstId) {
      setHasScrolledToPosition(false)
    }
  })

  // Scroll-based gradient animations
  const applyScrollAnimations = (container: HTMLElement) => {
    const containerRect = container.getBoundingClientRect()
    const containerTop = containerRect.top
    const items = container.querySelectorAll("[data-module-item]")

    items.forEach((item) => {
      const rect = item.getBoundingClientRect()
      const itemTop = rect.top
      const distanceFromTop = itemTop - containerTop

      // Linear interpolation within fade zone from top
      let progress = 1
      if (distanceFromTop < FADE_ZONE_PX) {
        progress = Math.max(0, distanceFromTop / FADE_ZONE_PX)
      }

      // Calculate opacity and scale
      const opacity = 0.3 + 0.7 * progress // 0.3 → 1.0
      const scale = 0.95 + 0.05 * progress // 0.95 → 1.0

      // Apply inline styles
      ;(item as HTMLElement).style.opacity = opacity.toString()
      ;(item as HTMLElement).style.transform = `scale(${scale})`
    })
  }

  // Scroll handling effect
  createEffect(() => {
    if (!containerRef) return
    let rafId: number | null = null

    const handleScroll = () => {
      if (completionsQuery.isPending || completionsQuery.isError) return

      // Track if scrolled above initial position (with 1px buffer)
      setIsScrolledAboveInitial(
        containerRef!.scrollTop < initialScrollPosition - 1,
      )

      // Load more completed modules when near top
      if (
        containerRef!.scrollTop < SCROLL_LOAD_THRESHOLD_PX &&
        visibleCompletedCount() < completionsQuery.data.length
      ) {
        // Capture scroll state before adding items
        const oldScrollHeight = containerRef!.scrollHeight
        const oldScrollTop = containerRef!.scrollTop

        setVisibleCompletedCount((prev) =>
          Math.min(prev + LOAD_BATCH_SIZE, completionsQuery.data.length),
        )

        // Restore visual position after DOM updates
        requestAnimationFrame(() => {
          const newScrollHeight = containerRef!.scrollHeight
          const heightDiff = newScrollHeight - oldScrollHeight
          containerRef!.scrollTop = oldScrollTop + heightDiff

          // Update initial position to account for newly loaded items
          initialScrollPosition = initialScrollPosition + heightDiff
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

  // Scroll to show boundary between completed and upcoming when data loads or first module changes
  createEffect(() => {
    if (hasScrolledToPosition() || !containerRef) return

    // Track filteredUpcomingModules so effect re-runs when data loads
    // Returns undefined when either query is pending/error, so we wait for both
    if (!filteredUpcomingModules()) return

    const visible = visibleCompleted()
    if (visible.length === 0) return

    requestAnimationFrame(() => {
      if (!containerRef) return

      // Get actual filtered upcoming modules
      const upcomingModules = filteredUpcomingModules()
      if (!upcomingModules || upcomingModules.length === 0) return

      // Calculate offset based on actual number of upcoming modules
      const offsetFromBottom = MODULE_ITEM_HEIGHT_PX * upcomingModules.length

      // Scroll from bottom with offset
      const scrollHeight = containerRef.scrollHeight
      const containerHeight = containerRef.clientHeight
      const scrollTop = Math.max(
        0,
        scrollHeight -
          containerHeight -
          offsetFromBottom -
          ABSOLUTE_SCROLL_OFFSET_PX,
      )

      initialScrollPosition = scrollTop
      containerRef.scrollTop = scrollTop
      setHasScrolledToPosition(true)
      applyScrollAnimations(containerRef)
    })
  })

  // Re-apply animations when visible count changes
  createEffect(() => {
    visibleCompletedCount()
    if (!containerRef) return
    requestAnimationFrame(() => applyScrollAnimations(containerRef!))
  })

  return (
    <div>
      <Show
        when={filteredUpcomingModules()}
        fallback={
          <div class="flex items-center justify-center p-8">
            <Loader2 class="h-8 w-8 animate-spin text-neutral-400" />
          </div>
        }
      >
        {(modules) => (
          <div
            ref={containerRef}
            class={cn("max-h-[300px] space-y-1 overflow-y-auto", props.class)}
          >
            <style>{`
            [data-module-item] {
              transition: opacity 100ms ease-out, transform 100ms ease-out;
            }
          `}</style>
            <Show
              when={
                !completionsQuery.isPending &&
                !completionsQuery.isError &&
                visibleCompletedCount() >= completionsQuery.data.length
              }
            >
              <div class="text-muted-foreground text-center text-xs">
                — Beginning of your progress —
              </div>
            </Show>
            <For each={reversedCompleted()}>
              {(completion) => (
                <ModuleItem
                  moduleId={completion.module_path}
                  isCompleted={true}
                />
              )}
            </For>
            <For each={modules()}>
              {(item, index) => (
                <ModuleItem moduleId={item.id} isCurrent={index() === 0} />
              )}
            </For>
          </div>
        )}
      </Show>
      <div
        class="flex justify-center transition-opacity duration-200"
        classList={{
          "opacity-0 pointer-events-none": !isScrolledAboveInitial(),
          "opacity-100": isScrolledAboveInitial(),
        }}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            if (containerRef) {
              containerRef.scrollTop = initialScrollPosition
            }
          }}
          class="text-muted-foreground hover:text-foreground h-auto rounded-full px-2 py-2"
        >
          <ChevronDown class="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
