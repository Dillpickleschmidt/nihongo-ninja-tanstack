import { TimelineList } from "@/components/TimelineList"
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
    <TimelineList each={props.modules}>
      {(enrichedModule) => {
        const isCompleted = props.isCompleted(enrichedModule.moduleId)

        return (
          <ModuleTimelineItem
            module={enrichedModule}
            onSelect={
              props.openInDialog
                ? () => props.onModuleSelect?.(enrichedModule)
                : undefined
            }
            class={isCompleted ? "text-green-500" : undefined}
            dotClass={isCompleted ? "border-green-500 bg-green-500" : undefined}
          />
        )
      }}
    </TimelineList>
  )
}
