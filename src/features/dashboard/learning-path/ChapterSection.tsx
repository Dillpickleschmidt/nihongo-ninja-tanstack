import { Show, For } from "solid-js"
import { ModuleListView } from "./ModuleListView"
import { ModuleCategorizedView } from "./ModuleCategorizedView"
import { ModuleTimelineView } from "./ModuleTimelineView"
import { ExternalResourcesSection } from "./ExternalResourcesSection"
import { cn } from "@/utils"

import type { LearningPathChapter, LearningPathModule } from "convex/model/learning_paths"

interface ChapterSectionProps {
  chapter: LearningPathChapter
  viewMode: string
  isCompleted: (moduleId: string) => boolean
  openInDialog?: boolean
  onModuleSelect?: (module: LearningPathModule) => void
}

export function ChapterSection(props: ChapterSectionProps) {
  const regularModules = () => props.chapter.modules
  const externalResourceIds = () => props.chapter.externalResourceIds
  const hasExternalResources = () => externalResourceIds().length > 0

  return (
    <div>
      <div
        class={cn(
          "mb-6",
          hasExternalResources() &&
            "flex flex-col gap-6 lg:flex-row lg:items-start",
        )}
      >
        <div class={cn(hasExternalResources() && "min-w-0 flex-1")}>
          <Show when={props.chapter.description}>
            <p class="text-neutral-300 max-w-3xl mb-4">
              {props.chapter.description}
            </p>
          </Show>

          <Show
            when={props.chapter.features && props.chapter.features.length > 0}
          >
            <ul class="space-y-1">
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
        </div>

        <Show when={hasExternalResources()}>
          <div class="lg:w-1/2 lg:shrink-0">
            <ExternalResourcesSection
              externalResourceIds={externalResourceIds()}
            />
          </div>
        </Show>
      </div>

      {/* Grid View - Timeline on mobile, Grid on desktop */}
      <Show when={props.viewMode === "grid"}>
        <div class="md:hidden">
          <ModuleTimelineView
            modules={regularModules()}
            isCompleted={props.isCompleted}
            openInDialog={props.openInDialog}
            onModuleSelect={props.onModuleSelect}
          />
        </div>
        <div class="hidden md:block">
          <ModuleListView
            modules={regularModules()}
            isCompleted={props.isCompleted}
            openInDialog={props.openInDialog}
            onModuleSelect={props.onModuleSelect}
          />
        </div>
      </Show>

      {/* Categorized View */}
      <Show when={props.viewMode === "compact"}>
        <ModuleCategorizedView
          modules={regularModules()}
          isCompleted={props.isCompleted}
          openInDialog={props.openInDialog}
          onModuleSelect={props.onModuleSelect}
        />
      </Show>
    </div>
  )
}
