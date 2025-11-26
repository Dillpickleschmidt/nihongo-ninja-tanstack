// features/vocab-page/shared/CollapsibleSection.tsx
import { JSX, Show, type Component } from "solid-js"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import { FolderContextMenu } from "./components/FolderContextMenu"

interface CollapsibleSectionProps {
  title: string
  icon?: Component<{ class: string }>
  isExpanded: boolean
  onToggle: () => void
  children: JSX.Element
  // Optional folder editing
  folderData?: DeckFolder
}

export function CollapsibleSection(props: CollapsibleSectionProps) {
  const IconComponent = props.icon
  const hasFolderData = () => !!props.folderData

  const Trigger = () => (
    <CollapsibleTrigger class="h-auto w-full justify-start p-2 text-sm font-normal">
      <Show when={props.icon}>
        {IconComponent && <IconComponent class="mr-2 h-4 w-4" />}
      </Show>
      <span class="truncate">{props.title}</span>
    </CollapsibleTrigger>
  )

  return (
    <div class="mb-3">
      <Collapsible
        open={props.isExpanded}
        onOpenChange={() => props.onToggle()}
      >
        <Show
          when={hasFolderData()}
          fallback={<Trigger />}
        >
          <FolderContextMenu folderData={props.folderData!}>
            {() => <Trigger />}
          </FolderContextMenu>
        </Show>

        <CollapsibleContent class="mt-2 ml-5 space-y-2">
          {props.children}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
