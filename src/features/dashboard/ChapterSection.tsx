import { Show, For, createMemo, onMount, onCleanup } from "solid-js"
import { Rows3, List } from "lucide-solid"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { getModulesFromChapter } from "@/data/utils/modules"
import type { LearningPathChapter } from "@/data/chapters"
import {
  getInitialAnimationStyles,
  observeElementForAnimation,
} from "@/utils/animations"
import { ModuleListView } from "./ModuleListView"
import { ModuleCategorizedView } from "./ModuleCategorizedView"

interface ChapterSectionProps {
  chapter: LearningPathChapter
}

export function ChapterSection(props: ChapterSectionProps) {
  let ref: HTMLDivElement | undefined

  const modules = createMemo(() => getModulesFromChapter(props.chapter))


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
      <Tabs defaultValue="list" class="w-full">
        {/* Chapter Header with View Tabs */}
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
              value="compact"
              class="data-selected:dark:bg-card-foreground/70 h-6 px-2"
            >
              <List class="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
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

        {/* List View */}
        <TabsContent value="list" class="mt-0">
          <ModuleListView modules={modules()} />
        </TabsContent>

        {/* Categorized View */}
        <TabsContent value="compact" class="mt-0">
          <ModuleCategorizedView modules={modules()} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
