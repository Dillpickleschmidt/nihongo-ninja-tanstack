import { Show, For } from "solid-js"
import { ExternalResourceCard } from "./ExternalResourceCard"
import { external_resources } from "@/data/external_resources"
import { cn } from "@/utils"

interface ExternalResourcesSectionProps {
  externalResourceIds: string[]
}

export function ExternalResourcesSection(
  props: ExternalResourcesSectionProps,
) {
  const count = () => props.externalResourceIds.length

  return (
    <Show when={count() > 0}>
      <div>
        <div
          class={cn(
            "flex gap-4 overflow-x-auto pb-2",
            count() < 3 && "justify-end",
            count() === 3 && "md:justify-end",
          )}
        >
          <For each={props.externalResourceIds}>
            {(id) => {
              const resource = external_resources[id]
              if (!resource) return null
              return <ExternalResourceCard resource={resource} />
            }}
          </For>
        </div>
      </div>
    </Show>
  )
}
