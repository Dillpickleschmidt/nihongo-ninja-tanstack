import { Link } from "@tanstack/solid-router"
import { Show } from "solid-js"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function ReviewModeDialog(props: {
  open: boolean
  onOpenChange: (open: boolean) => void
  meaningsCount: number | undefined
  spellingsCount: number | undefined
}) {
  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent class="border-border/70 bg-card sm:max-w-md dark:border-white/10 dark:bg-[#121212]">
        <DialogHeader>
          <DialogTitle class="text-foreground dark:text-white/90">
            Choose review mode
          </DialogTitle>
          <DialogDescription class="text-muted-foreground dark:text-white/45">
            Pick the type of review you want to practice right now.
          </DialogDescription>
        </DialogHeader>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ReviewModeOption
            mode="meanings"
            label="Meanings"
            symbol="読"
            symbolClass="text-sky-500 dark:text-sky-300"
            count={props.meaningsCount}
          />
          <ReviewModeOption
            mode="spellings"
            label="Spellings"
            symbol="あ"
            symbolClass="text-orange-500 dark:text-orange-300"
            count={props.spellingsCount}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

function ReviewModeOption(props: {
  mode: "meanings" | "spellings"
  label: string
  symbol: string
  symbolClass: string
  count: number | undefined
}) {
  const disabled = () => props.count === undefined || props.count === 0

  return (
    <Show
      when={!disabled()}
      fallback={
        <Button
          type="button"
          variant="outline"
          disabled
          class="h-auto min-h-28 flex-col gap-2 border-border/70 bg-card/40 p-4 dark:border-white/10 dark:bg-white/[0.02]"
        >
          <span class={`text-lg font-bold ${props.symbolClass}`}>
            {props.symbol}
          </span>
          <span class="text-sm font-medium">{props.label}</span>
          <span class="text-xs text-muted-foreground dark:text-white/35">
            {props.count ?? "–"} due
          </span>
        </Button>
      }
    >
      <Link
        to="/review/session"
        search={{ mode: props.mode }}
        class="inline-flex h-auto min-h-28 items-center justify-center rounded-md border border-border/70 bg-card/40 p-4 text-foreground transition-colors hover:bg-accent dark:border-white/10 dark:bg-white/[0.02] dark:text-white dark:hover:bg-white/[0.05]"
      >
        <div class="flex flex-col items-center gap-2">
          <span class={`text-lg font-bold ${props.symbolClass}`}>
            {props.symbol}
          </span>
          <span class="text-sm font-medium">{props.label}</span>
          <span class="text-xs text-muted-foreground dark:text-white/45">
            {props.count} due
          </span>
        </div>
      </Link>
    </Show>
  )
}
