import { For, createMemo } from "solid-js"
import { cn } from "@/utils"
import { Button3D } from "@/components/Button3D"
import type { Question } from "../types"

type SummaryPageProps = {
  questions: Question[]
  correct: number
  onRestart: () => void
  onReturnToSettings: () => void
}

export function SummaryPage(props: SummaryPageProps) {
  const stats = createMemo(() => {
    const total = props.questions.length
    const accuracy = total > 0 ? Math.round((props.correct / total) * 100) : 0
    return { total, accuracy }
  })

  const theme = createMemo(() => {
    const acc = stats().accuracy
    if (acc >= 90) return { emoji: "🎉", title: "Outstanding!" }
    if (acc >= 70) return { emoji: "🌟", title: "Great Work!" }
    if (acc >= 50) return { emoji: "💪", title: "Keep Going!" }
    return { emoji: "📚", title: "Practice Makes Perfect" }
  })

  return (
    <div class="pt-12">
        {/* Celebration header */}
        <div class="mb-8 text-center">
          <div class="mb-4 text-6xl">{theme().emoji}</div>
          <h1 class="mb-2 text-3xl font-bold text-foreground dark:text-white/90">
            {theme().title}
          </h1>
          <p class="text-lg text-muted-foreground dark:text-white/40">Counter Practice Complete</p>
        </div>

        {/* Stat boxes */}
        <div class="mb-8 grid grid-cols-3 gap-3">
          <div class="rounded-xl border border-violet-500/20 bg-card/60 p-4 text-center text-violet-600 dark:bg-white/5 dark:text-violet-300">
            <div class="text-2xl font-bold">{props.correct}</div>
            <div class="text-xs text-muted-foreground dark:text-white/40">Correct</div>
          </div>
          <div class="rounded-xl border border-blue-500/20 bg-card/60 p-4 text-center text-blue-500 dark:bg-white/5 dark:text-blue-400">
            <div class="text-2xl font-bold">{stats().total}</div>
            <div class="text-xs text-muted-foreground dark:text-white/40">Total</div>
          </div>
          <div class="rounded-xl border border-purple-500/20 bg-card/60 p-4 text-center text-purple-500 dark:bg-white/5 dark:text-purple-400">
            <div class="text-2xl font-bold">{stats().accuracy}%</div>
            <div class="text-xs text-muted-foreground dark:text-white/40">Accuracy</div>
          </div>
        </div>

        {/* Results */}
        <div class="space-y-2">
          <For each={props.questions}>
            {(question) => (
              <div class="flex items-center gap-4 rounded-xl bg-card/60 p-4 dark:bg-white/5">
                <div class="min-w-0 flex-1">
                  <div class="flex items-baseline gap-3">
                    <span class="text-lg font-bold text-foreground/80 dark:text-white/80">
                      {question.word}
                    </span>
                    <span class="font-japanese text-sm text-muted-foreground dark:text-white/40">
                      {question.counter}
                    </span>
                  </div>
                  <div class="mt-1 flex items-center gap-3 text-sm">
                    <span class="text-muted-foreground/70 dark:text-white/30">
                      Your answer:{" "}
                      <span class="font-japanese text-foreground/70 dark:text-white/50">
                        {question.givenAnswer}
                      </span>
                    </span>
                    <span class="text-muted-foreground/50 dark:text-white/20">·</span>
                    <span class="text-muted-foreground/70 dark:text-white/30">
                      Correct:{" "}
                      <span class="font-japanese text-foreground/70 dark:text-white/50">
                        {question.correctReading}
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  class={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full text-xs",
                    question.correct
                      ? "bg-violet-500/20 text-violet-300"
                      : "bg-rose-500/20 text-rose-400",
                  )}
                >
                  {question.correct ? "✓" : "✗"}
                </div>
              </div>
            )}
          </For>
        </div>

      {/* Bottom buttons */}
      <div class="fixed bottom-20 left-0 right-0 z-30 flex justify-center gap-3 px-4">
        <div class="w-full max-w-xs">
          <Button3D color="rgb(139,92,246)" onClick={props.onRestart}>
            Practice Again
          </Button3D>
        </div>
        <div class="w-full max-w-xs">
          <Button3D color="rgb(139,92,246)" onClick={props.onReturnToSettings}>
            Settings
          </Button3D>
        </div>
      </div>
    </div>
  )
}
