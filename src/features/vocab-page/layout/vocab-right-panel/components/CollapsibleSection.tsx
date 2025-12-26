import type { JSX, Component } from "solid-js"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import { cn } from "@/utils"

interface CollapsibleSectionProps {
  id: string
  title: string
  icon?: Component<{ class: string }>
  isExpanded: boolean
  onToggle: () => void
  children: JSX.Element
  class?: string
  depth?: number
}

export function CollapsibleSection(props: CollapsibleSectionProps) {
  const Icon = props.icon

  return (
    <Collapsible
      open={props.isExpanded}
      onOpenChange={props.onToggle}
      class={cn("w-full", props.class)}
    >
      <CollapsibleTrigger
        class={cn("px-2 py-1.5", props.depth && props.depth > 0 && "pl-4")}
      >
        {Icon && <Icon class="h-4 w-4 shrink-0" />}
        <span class="truncate text-xs">{props.title}</span>
      </CollapsibleTrigger>
      <CollapsibleContent class="pl-4">{props.children}</CollapsibleContent>
    </Collapsible>
  )
}
