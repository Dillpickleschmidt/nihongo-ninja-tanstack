import { For } from "solid-js"

interface FeatureListProps {
  features: string[] | undefined
}

export function FeatureList(props: FeatureListProps) {
  return (
    <ul class="text-muted-foreground mt-4 space-y-2 text-sm">
      <For each={props.features || []}>
        {(feature) => (
          <li class="flex items-center gap-2">
            <span class="bg-primary h-1.5 w-1.5 rounded-full" />
            {feature}
          </li>
        )}
      </For>
    </ul>
  )
}
