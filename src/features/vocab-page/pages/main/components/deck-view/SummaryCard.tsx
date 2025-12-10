import { Show } from 'solid-js'
import { LoaderCircle } from 'lucide-solid'

type SummaryCardProps = {
  label: string
  count?: number
  dueCount?: number
  onClick?: () => void
}

export function SummaryCard(props: SummaryCardProps) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      class="bg-card/40 border-card-foreground/70 hover:bg-accent/40 cursor-pointer rounded-xl border p-3 text-left backdrop-blur-sm transition"
      title={`View ${props.label}`}
    >
      <div class="text-muted-foreground text-xs">{props.label}</div>
      <div class="flex items-baseline gap-2">
        <Show
          when={props.count !== undefined}
          fallback={
            <LoaderCircle class="text-muted-foreground/50 mt-1 h-8 w-8 animate-spin" />
          }
        >
          <div class="text-primary mt-1 text-2xl font-bold">{props.count}</div>
        </Show>
        <Show when={props.dueCount === undefined}>
          <LoaderCircle class="h-4 w-4 animate-spin text-indigo-400/50" />
        </Show>
        <Show when={props.dueCount !== undefined && props.dueCount > 0}>
          <span class="text-sm font-semibold text-indigo-300">
            ({props.dueCount} due)
          </span>
        </Show>
      </div>
    </button>
  )
}
