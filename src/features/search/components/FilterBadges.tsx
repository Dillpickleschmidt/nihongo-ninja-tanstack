import { For, Show } from "solid-js"
import { X } from "lucide-solid"

interface FilterBadgesProps {
  badges: () => (string | number)[]
  onRemove: (label: string) => void
}

export function FilterBadges(props: FilterBadgesProps) {
  return (
    <Show when={props.badges().length > 0}>
      <div class="flex flex-wrap gap-2">
        <For each={props.badges()}>
          {(item) => (
            <button
              class="border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors"
              onClick={() => props.onRemove(item as string)}
            >
              {item}
              <X class="size-3 opacity-70" />
            </button>
          )}
        </For>
      </div>
    </Show>
  )
}
