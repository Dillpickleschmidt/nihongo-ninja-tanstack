import { createSignal, Show } from "solid-js"
import { BookOpen, Languages } from "lucide-solid"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"
import { LearnPreview } from "./learn-preview"

interface LearnDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
}

export function LearnDialog(props: LearnDialogProps) {
  const [mode, setMode] = createSignal<"full" | "vocab" | null>(null)

  function handleOpenChange(open: boolean) {
    if (!open) setMode(null)
    props.onOpenChange(open)
  }

  return (
    <Dialog open={props.open} onOpenChange={handleOpenChange}>
      <DialogContent class="max-h-[85vh] w-[95vw] max-w-md overflow-y-auto border-white/10 bg-neutral-950/95 backdrop-blur-xl sm:w-full">
        <DialogHeader>
          <DialogTitle class="text-white/80">Learn — {props.title}</DialogTitle>
        </DialogHeader>

        <Show
          when={mode()}
          fallback={
            <div class="flex flex-col gap-3 pt-2">
              {/* Full Learning Path */}
              <button
                type="button"
                onClick={() => setMode("full")}
                class="group flex cursor-pointer items-start gap-3 rounded-xl border border-white/8 bg-white/2 p-4 text-left transition-all hover:border-dynamic-accent/20 hover:bg-white/4"
              >
                <div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-dynamic-accent/10 text-dynamic-accent transition-colors group-hover:bg-dynamic-accent/15">
                  <BookOpen class="size-4" />
                </div>
                <div>
                  <div class="text-sm font-semibold text-white/80">
                    Full Learning Path
                  </div>
                  <div class="mt-0.5 text-[0.7rem] leading-relaxed text-white/30">
                    Grammar patterns, vocabulary, and contextual examples from
                    this show's dialogue.
                  </div>
                </div>
              </button>

              {/* Vocab Only */}
              <button
                type="button"
                onClick={() => setMode("vocab")}
                class="group flex cursor-pointer items-start gap-3 rounded-xl border border-white/8 bg-white/2 p-4 text-left transition-all hover:border-dynamic-accent/20 hover:bg-white/4"
              >
                <div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/6 text-white/50 transition-colors group-hover:bg-white/8">
                  <Languages class="size-4" />
                </div>
                <div>
                  <div class="text-sm font-semibold text-white/80">
                    Vocab Only
                  </div>
                  <div class="mt-0.5 text-[0.7rem] leading-relaxed text-white/30">
                    Focus on vocabulary words without grammar — good for quick
                    review sessions.
                  </div>
                </div>
              </button>
            </div>
          }
        >
          {(m) => (
            <div class="pt-2">
              <button
                type="button"
                onClick={() => setMode(null)}
                class="mb-3 cursor-pointer text-xs text-white/30 transition-colors hover:text-white/50"
              >
                &larr; Back to options
              </button>
              <LearnPreview mode={m()} />
            </div>
          )}
        </Show>
      </DialogContent>
    </Dialog>
  )
}
