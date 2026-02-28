import { Show, For } from "solid-js"
import { ModuleListView } from "./ModuleListView"
import { ModuleCategorizedView } from "./ModuleCategorizedView"
import { ModuleTimelineView } from "./ModuleTimelineView"
import type { LearningPathChapter, LearningPathModule } from "./types"

interface ChapterSectionProps {
  chapter: LearningPathChapter
  viewMode: string
  isCompleted: (moduleId: string) => boolean
  openInDialog?: boolean
  onModuleSelect?: (module: LearningPathModule) => void
}

export function ChapterSection(props: ChapterSectionProps) {
  const modules = () => props.chapter.modules

  return (
    <div class="mb-12 animate-fade-up opacity-0">
      {/* Chapter Header */}
      <div class="mb-6">
        <h2 class="text-2xl font-bold mb-2">{props.chapter.title}</h2>
        <Show when={props.chapter.description}>
          <p class="text-neutral-300 max-w-3xl">{props.chapter.description}</p>
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
          <ModuleTimelineView
            modules={modules()}
            isCompleted={props.isCompleted}
            openInDialog={props.openInDialog}
            onModuleSelect={props.onModuleSelect}
          />
        </div>
        <div class="hidden md:block">
          <ModuleListView
            modules={modules()}
            isCompleted={props.isCompleted}
            openInDialog={props.openInDialog}
            onModuleSelect={props.onModuleSelect}
          />
        </div>
      </Show>

      {/* Categorized View */}
      <Show when={props.viewMode === "compact"}>
        <ModuleCategorizedView
          modules={modules()}
          isCompleted={props.isCompleted}
          openInDialog={props.openInDialog}
          onModuleSelect={props.onModuleSelect}
        />
      </Show>
    </div>
  )
}
