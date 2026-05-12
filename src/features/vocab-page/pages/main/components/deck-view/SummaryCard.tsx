import { For, Show } from "solid-js"
import { LoaderCircle } from "lucide-solid"

type SummaryCardProps = {
  label: string
  count?: number
  dueRows?: Array<{
    label: "Meanings" | "Spellings"
    hasHistory: boolean
    dueCount: number
  }>
  dueLoading?: boolean
  onClick?: () => void
}

export function SummaryCard(props: SummaryCardProps) {
  const visibleDueRows = () => (props.dueRows || []).filter((row) => row.hasHistory)

  return (
    <button
      type="button"
      onClick={props.onClick}
      class="bg-card/60 border-border/60 hover:bg-accent/40 flex h-full cursor-pointer flex-col items-start justify-start rounded-xl border p-3 text-left backdrop-blur-sm transition dark:bg-card/40 dark:border-card-foreground/70"
      title={`View ${props.label}`}
    >
      <div class="text-muted-foreground text-xs">{props.label}</div>
      <div class="mt-1 flex w-full flex-col items-start gap-1.5 sm:flex-row sm:items-end sm:justify-between">
        <Show
          when={props.count !== undefined}
          fallback={
            <LoaderCircle class="text-muted-foreground/50 mt-1 h-8 w-8 animate-spin" />
          }
        >
          <div class="text-primary text-2xl leading-none font-bold">{props.count}</div>
        </Show>

        <Show when={props.dueLoading}>
          <div class="text-muted-foreground/70 text-xs">Loading due counts...</div>
        </Show>

        <Show when={!props.dueLoading && visibleDueRows().length > 0}>
          <div class="space-y-0.5 text-xs sm:text-right">
            <For each={visibleDueRows()}>
              {(row) => (
                <div class="text-muted-foreground">
                  {row.label}: {row.dueCount} due
                </div>
              )}
            </For>
          </div>
        </Show>
      </div>
    </button>
  )
}
