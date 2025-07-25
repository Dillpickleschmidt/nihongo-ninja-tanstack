import { For } from "solid-js"
import { ResourceItem } from "./ResourceItem"
import type { ResourceItem as ResourceItemType } from "../types"

interface CategorySectionProps {
  title: string
  resources: ResourceItemType[]
}

export function CategorySection(props: CategorySectionProps) {
  return (
    <div class="mb-8">
      <h3 class="text-foreground border-border mb-4 border-b pb-2 text-xl font-bold">
        {props.title}
      </h3>
      <div class="space-y-3">
        <For each={props.resources}>
          {(resource, index) => (
            <ResourceItem resource={resource} index={index} />
          )}
        </For>
      </div>
    </div>
  )
}
