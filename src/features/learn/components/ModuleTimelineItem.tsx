import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import { TimelineItem } from "@/components/TimelineList"
import type { LearningPathModule } from "convex/model/learning_paths"
import type { JSX } from "solid-js"

interface ModuleTimelineItemProps {
  module: LearningPathModule
  onSelect?: () => void
  class?: string
  style?: JSX.CSSProperties
  dotClass?: string
  hideDescription?: boolean
  hideDot?: boolean
}

export function ModuleTimelineItem(props: ModuleTimelineItemProps) {
  return (
    <TimelineItem
      title={props.module.module.title}
      description={
        props.hideDescription
          ? undefined
          : props.module.module.description || "Description coming soon"
      }
      linkTo={props.module.linkTo}
      icon={getModuleIcon(props.module.module.module_type)}
      iconClass={getModuleIconClasses(props.module.module.module_type)}
      disabled={props.module.disabled}
      onSelect={props.onSelect}
      class={props.class}
      style={props.style}
      dotClass={props.dotClass}
      hideDot={props.hideDot}
    />
  )
}
