// features/vocab-page/shared/CollapsibleSection.tsx
import { JSX, Show, type Component } from "solid-js"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"

interface CollapsibleSectionProps {
  title: string
  icon?: Component<{ class: string }>
  isExpanded: boolean
  onToggle: () => void
  children: JSX.Element
}

export function CollapsibleSection(props: CollapsibleSectionProps) {
  const IconComponent = props.icon
  return (
    <div class="mb-3">
      <Collapsible
        open={props.isExpanded}
        onOpenChange={() => props.onToggle()}
      >
        <CollapsibleTrigger class="h-auto w-full justify-start p-2 text-sm font-normal">
          <Show when={props.icon}>
            {IconComponent && <IconComponent class="mr-2 h-4 w-4" />}
          </Show>
          <span class="truncate">{props.title}</span>
        </CollapsibleTrigger>

        <CollapsibleContent class="mt-2 ml-5 space-y-2">
          {props.children}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
