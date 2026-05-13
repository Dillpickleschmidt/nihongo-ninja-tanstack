import { Show } from "solid-js"
import type { JSX } from "solid-js"
import { ChevronRight } from "lucide-solid"

import { Button } from "@/components/ui/button"

export function ReviewPanel(props: {
  meanings: number | undefined
  spellings: number | undefined
  total: number | undefined
  onStart: () => void
}) {
  const disabled = () => props.total === undefined || props.total === 0

  return (
    <div class="rounded-2xl border border-border/50 bg-card/30 px-6 py-6 dark:border-white/[0.06] dark:bg-white/[0.02]">
      <div class="flex items-baseline justify-between">
        <SubLabel>Due for review</SubLabel>
        <span
          class="text-2xl font-bold tabular-nums"
          style={{ color: "var(--dynamic-accent)" }}
        >
          <Show when={props.total !== undefined} fallback="–">
            {props.total}
          </Show>
        </span>
      </div>

      <div class="mt-4 space-y-2">
        <ReviewRow
          symbol="文"
          symbolClass="text-purple-400 dark:text-purple-300"
          label="Sentences"
          value={undefined}
        />
        <ReviewRow
          symbol="読"
          symbolClass="text-sky-500 dark:text-sky-300"
          label="Meanings"
          value={props.meanings}
        />
        <ReviewRow
          symbol="あ"
          symbolClass="text-orange-500 dark:text-orange-300"
          label="Spellings"
          value={props.spellings}
        />
      </div>

      <Button
        type="button"
        disabled={disabled()}
        onClick={props.onStart}
        class="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-dynamic-accent/80 px-4 py-2.5 text-sm font-medium text-white transition-[background-color,transform] hover:bg-dynamic-accent hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
        style={{
          "box-shadow":
            "0 8px 16px -8px color-mix(in srgb, var(--dynamic-accent) 35%, transparent)",
        }}
      >
        Start review
        <ChevronRight class="size-4" />
      </Button>
    </div>
  )
}

function ReviewRow(props: {
  symbol: string
  symbolClass: string
  label: string
  value: number | undefined
}) {
  return (
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <span class={`font-japanese text-base ${props.symbolClass}`}>
          {props.symbol}
        </span>
        <span class="text-sm text-muted-foreground dark:text-white/55">
          {props.label}
        </span>
      </div>
      <span class="text-base font-semibold tabular-nums text-foreground/80 dark:text-white/80">
        <Show when={props.value !== undefined} fallback="–">
          {props.value}
        </Show>
      </span>
    </div>
  )
}

function SubLabel(props: { children: JSX.Element }) {
  return (
    <div class="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-muted-foreground/70 dark:text-white/30">
      {props.children}
    </div>
  )
}
