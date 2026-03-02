import { Show } from "solid-js"
import { ModuleListView } from "./ModuleListView"
import type { LearningPathModule } from "./types"

interface SpecialModulesSectionProps {
  specialModules: LearningPathModule[]
  isCompleted: (moduleId: string) => boolean
  openInDialog?: boolean
  onModuleSelect?: (module: LearningPathModule) => void
}

export function SpecialModulesSection(props: SpecialModulesSectionProps) {
  return (
    <Show when={props.specialModules.length > 0}>
      <div>
        <ModuleListView
          modules={props.specialModules}
          columns="single"
          isCompleted={props.isCompleted}
          openInDialog={props.openInDialog}
          onModuleSelect={props.onModuleSelect}
        />
      </div>
    </Show>
  )
}
