import { For } from "solid-js"
import { cn } from "@/utils"
import type { LearningPathModule } from "convex/model/learning_paths"
import { ModuleTimelineItem } from "./ModuleTimelineItem"

interface ModuleTimelineViewProps {
  modules: LearningPathModule[]
  isCompleted: (moduleId: string) => boolean
  openInDialog?: boolean
  onModuleSelect?: (module: LearningPathModule) => void
}

export function ModuleTimelineView(props: ModuleTimelineViewProps) {
  return (
    <ul class="relative ml-[7px] border-l-2 border-card-foreground/10">
      <For each={props.modules}>
        {(enrichedModule, index) => {
          const isCompleted = props.isCompleted(enrichedModule.moduleId)

          return (
            <li
              class={cn(
                "relative",
                index() !== props.modules.length - 1 && "pb-1",
              )}
            >
              <ModuleTimelineItem
                module={enrichedModule}
                asButton={props.openInDialog}
                onSelect={() => props.onModuleSelect?.(enrichedModule)}
                dotClass={
                  isCompleted
                    ? "border-green-500 bg-green-500"
                    : undefined
                }
                titleClass={isCompleted ? "text-green-500" : undefined}
              />
            </li>
          )
        }}
      </For>
    </ul>
  )
}
