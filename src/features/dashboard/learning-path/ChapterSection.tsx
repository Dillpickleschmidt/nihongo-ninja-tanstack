import { Show, For, onMount, onCleanup } from "solid-js"
import { getModulesFromChapter } from "@/data/utils/modules"
import type { LearningPathChapter } from "@/data/chapters"
import {
  getInitialAnimationStyles,
  observeElementForAnimation,
} from "@/utils/animations"
import { ModuleListView } from "./ModuleListView"
import { ModuleCategorizedView } from "./ModuleCategorizedView"
import { ModuleTimelineView } from "./ModuleTimelineView"

interface ChapterSectionProps {
  chapter: LearningPathChapter
  viewMode: string
}

export function ChapterSection(props: ChapterSectionProps) {
  let ref: HTMLDivElement | undefined

  const modules = () => getModulesFromChapter(props.chapter)

  onMount(() => {
    if (ref) {
      const cleanup = observeElementForAnimation(ref, {
        initialPosition: "down",
        noExit: true,
        screenBottomOffset: 15,
        screenTopOffset: 15,
      })
      onCleanup(cleanup)
    }
  })

  return (
    <div
      ref={ref}
      class="mb-12"
      style={getInitialAnimationStyles("down")}
    >
      {/* Chapter Header */}
      <div class="mb-6">
        <h2 class="text-2xl font-bold mb-2">
          {props.chapter.title}
        </h2>
        <Show when={props.chapter.description}>
          <p class="text-neutral-300 max-w-3xl">
            {props.chapter.description}
          </p>
        </Show>
      </div>

      <Show when={props.chapter.features && props.chapter.features.length > 0}>
        <ul class="mb-6 space-y-1">
          <For each={props.chapter.features}>
            {(feature) => (
              <li class="flex items-center gap-2 text-sm text-neutral-400">
                <span class="h-1.5 w-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            )}
          </For>
        </ul>
      </Show>

      {/* Grid View - Timeline on mobile, Grid on desktop */}
      <Show when={props.viewMode === "grid"}>
        <div class="md:hidden">
          <ModuleTimelineView modules={modules()} />
        </div>
        <div class="hidden md:block">
          <ModuleListView modules={modules()} />
        </div>
      </Show>

      {/* Categorized View */}
      <Show when={props.viewMode === "compact"}>
        <ModuleCategorizedView modules={modules()} />
      </Show>
    </div>
  )
}
