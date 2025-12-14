import { Show, For, createMemo, createSignal, onMount, onCleanup } from "solid-js"
import { Rows3, List, GitBranch } from "lucide-solid"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { getModulesFromChapter } from "@/data/utils/modules"
import type { LearningPathChapter } from "@/data/chapters"
import {
  getInitialAnimationStyles,
  observeElementForAnimation,
} from "@/utils/animations"
import { cn } from "@/utils"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import { ModuleListView } from "./ModuleListView"
import { ModuleCategorizedView } from "./ModuleCategorizedView"
import { ModuleTimelineView } from "./ModuleTimelineView"

interface ChapterSectionProps {
  chapter: LearningPathChapter
}

export function ChapterSection(props: ChapterSectionProps) {
  let ref: HTMLDivElement | undefined

  const modules = () => getModulesFromChapter(props.chapter)
  const [selectedView, setSelectedView] = createSignal<string>("timeline")
  const chapterNumber = () => getChapterDisplayNumber(props.chapter.slug)

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
      <Tabs value={selectedView()} onChange={setSelectedView} class="w-full">
        {/* Chapter Header with View Tabs */}
        <Show
          when={selectedView() === "timeline"}
          fallback={
            <div class="mb-6 flex items-start justify-between">
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-white mb-2">
                  {props.chapter.title}
                </h2>
                <Show when={props.chapter.description}>
                  <p class="text-neutral-300 max-w-3xl">
                    {props.chapter.description}
                  </p>
                </Show>
              </div>

              {/* View Mode Tabs */}
              <TabsList class="h-8 bg-transparent">
                <TabsTrigger
                  value="list"
                  class="data-selected:dark:bg-card-foreground/70 h-6 px-2"
                >
                  <Rows3 class="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger
                  value="timeline"
                  class="data-selected:dark:bg-card-foreground/70 h-6 px-2"
                >
                  <GitBranch class="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger
                  value="compact"
                  class="data-selected:dark:bg-card-foreground/70 h-6 px-2"
                >
                  <List class="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
            </div>
          }
        >
          {/* Timeline Header */}
          <div class="mb-6 max-w-5xl mx-auto">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                {/* Chapter number box */}
                <div class="flex size-8 items-center justify-center rounded-md bg-gradient-to-br from-white/10 to-white/5 text-sm font-bold text-white">
                  {chapterNumber()}
                </div>
                {/* Chapter title */}
                <h2 class="text-2xl font-bold text-white">
                  {props.chapter.title}
                </h2>
                {/* Module count */}
                <span class="text-muted-foreground/60 text-xs">
                  · {modules().length} {modules().length === 1 ? "module" : "modules"}
                </span>
              </div>

              {/* View Mode Tabs */}
              <TabsList class="h-8 bg-transparent">
                <TabsTrigger
                  value="list"
                  class="data-selected:dark:bg-card-foreground/70 h-6 px-2"
                >
                  <Rows3 class="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger
                  value="timeline"
                  class="data-selected:dark:bg-card-foreground/70 h-6 px-2"
                >
                  <GitBranch class="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger
                  value="compact"
                  class="data-selected:dark:bg-card-foreground/70 h-6 px-2"
                >
                  <List class="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </Show>

        <Show when={props.chapter.features && props.chapter.features.length > 0}>
          <ul class={cn(
            "mb-6 space-y-1",
            selectedView() === "timeline" && "max-w-5xl mx-auto"
          )}>
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

        {/* List View */}
        <TabsContent value="list" class="mt-0">
          <ModuleListView modules={modules()} />
        </TabsContent>

        {/* Categorized View */}
        <TabsContent value="compact" class="mt-0">
          <ModuleCategorizedView modules={modules()} />
        </TabsContent>

        {/* Timeline View */}
        <TabsContent value="timeline" class="mt-0 max-w-5xl mx-auto">
          <ModuleTimelineView modules={modules()} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
