import { Show } from "solid-js"
import { Loader2 } from "lucide-solid"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"

type SummaryCardProps = {
  label: string
  query: UseQueryResult<any, DefaultError>
  getValue: () => number
  dueCountQuery?: UseQueryResult<any, DefaultError>
  getDueCount?: () => number | undefined
  onClick?: () => void
}

export function SummaryCard(props: SummaryCardProps) {
  const { activeService } = useVocabPracticeContext()

  return (
    <button
      type="button"
      onClick={props.onClick}
      class="bg-card/40 border-card-foreground/70 hover:bg-accent/40 rounded-xl border p-3 text-left transition"
      title={`View ${props.label}`}
    >
      <div class="text-muted-foreground text-xs">{props.label}</div>
      <div class="flex items-baseline gap-2">
        <Show
          when={!props.query.isPending}
          fallback={
            <Loader2 class="text-muted-foreground/50 mt-1 h-8 w-8 animate-spin" />
          }
        >
          <div class="text-primary mt-1 text-2xl font-bold">
            {props.getValue()}
          </div>
        </Show>
        <Show
          when={props.dueCountQuery?.isPending && activeService() === "local"}
        >
          <Loader2 class="h-4 w-4 animate-spin text-indigo-400/50" />
        </Show>
        <Show
          when={
            !props.dueCountQuery?.isPending &&
            props.getDueCount &&
            props.getDueCount() > 0 &&
            activeService() === "local"
          }
        >
          <span class="text-sm font-semibold text-indigo-300">
            ({props.getDueCount!()} due)
          </span>
        </Show>
      </div>
    </button>
  )
}
