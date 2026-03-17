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
      <div class="w-0 min-w-full overflow-x-auto">
        <div
          class={cn(
            "flex w-max gap-4 pb-2",
            count() < 3 && "ml-auto",
            count() === 3 && "md:ml-auto",
          )}
        >
          <For each={props.externalResourceIds}>
            {(id) => {
              const resource = external_resources[id]
              if (!resource) return null
              return <ExternalResourceCard resourceId={id} resource={resource} />
            }}
          </For>
        </div>
      </div>
    </Show>
  )
}
