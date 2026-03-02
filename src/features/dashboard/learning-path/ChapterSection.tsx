import { Show, For } from "solid-js"
import { ModuleListView } from "./ModuleListView"
import { ModuleCategorizedView } from "./ModuleCategorizedView"
import { ModuleTimelineView } from "./ModuleTimelineView"
import { SpecialModulesSection } from "./SpecialModulesSection"
import { cn } from "@/utils"
import type { LearningPathChapter, LearningPathModule } from "./types"

interface ChapterSectionProps {
  chapter: LearningPathChapter
  viewMode: string
  isCompleted: (moduleId: string) => boolean
  openInDialog?: boolean
  onModuleSelect?: (module: LearningPathModule) => void
}

export function ChapterSection(props: ChapterSectionProps) {
  const specialModules = () => props.chapter.specialModules
  const regularModules = () => props.chapter.modules
  const numberOffset = () => specialModules().length
  const hasSpecialModules = () => specialModules().length > 0

  return (
    <div class="mb-12 animate-fade-up opacity-0">
      <div
        class={cn(
          "mb-6",
          hasSpecialModules() && "flex flex-col gap-6 lg:flex-row lg:items-start",
        )}
      >
        <div class={cn(hasSpecialModules() && "min-w-0 flex-1")}>
          {/* Chapter Header */}
          <div class="mb-6">
            <h2 class="text-2xl font-bold mb-2">{props.chapter.title}</h2>
            <Show when={props.chapter.description}>
              <p class="text-neutral-300 max-w-3xl">{props.chapter.description}</p>
            </Show>
          </div>

          <Show when={props.chapter.features && props.chapter.features.length > 0}>
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

        <Show when={hasSpecialModules()}>
          <div class="lg:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-3rem)/3)] lg:shrink-0">
            <SpecialModulesSection
              specialModules={specialModules()}
              isCompleted={props.isCompleted}
              openInDialog={props.openInDialog}
              onModuleSelect={props.onModuleSelect}
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
            numberOffset={numberOffset()}
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
          numberOffset={numberOffset()}
          isCompleted={props.isCompleted}
          openInDialog={props.openInDialog}
          onModuleSelect={props.onModuleSelect}
        />
      </Show>
    </div>
  )
}
