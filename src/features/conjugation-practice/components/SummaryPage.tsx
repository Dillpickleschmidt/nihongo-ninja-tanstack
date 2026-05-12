import { For, createMemo } from "solid-js"
import { cn } from "@/utils"
import { Button3D } from "@/components/Button3D"
import type { ReviewSessionState } from "../utils/questionUtils"

type SummaryPageProps = {
  sessionState: ReviewSessionState
  onRestart: () => void
  onReturnToSettings: () => void
}

export function SummaryPage(props: SummaryPageProps) {
  const stats = createMemo(() => {
    const total = props.sessionState.questions.length
    const correct = props.sessionState.score
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
    return { total, correct, accuracy }
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
        <p class="text-lg text-muted-foreground dark:text-white/40">Conjugation Practice Complete</p>
      </div>

      {/* Stat boxes */}
      <div class="mb-8 grid grid-cols-3 gap-3">
        <div class="rounded-xl border border-emerald-500/20 bg-card/60 p-4 text-center text-emerald-500 dark:bg-white/5 dark:text-emerald-400">
          <div class="text-2xl font-bold">{stats().correct}</div>
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
        <For each={props.sessionState.questions}>
          {(question) => (
            <div class="flex items-center gap-4 rounded-xl bg-card/60 p-4 dark:bg-white/5">
              <div class="min-w-0 flex-1">
                <div class="flex items-baseline gap-3">
                  <span class="font-japanese text-lg font-bold text-foreground/80 dark:text-white/80">
                    {question.term.reading}
                    {question.term.word !== question.term.reading &&
                      ` (${question.term.word})`}
                  </span>
                  <span class="truncate text-sm text-muted-foreground dark:text-white/40">
                    {question.type.join(", ")}
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
                      {question.answers.map((a) => a.reading).join(", ")}
                    </span>
                  </span>
                </div>
              </div>
              <div
                class={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full text-xs",
                  question.correct
                    ? "bg-emerald-500/20 text-emerald-400"
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
          <Button3D color="rgb(20,184,166)" onClick={props.onRestart}>
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
