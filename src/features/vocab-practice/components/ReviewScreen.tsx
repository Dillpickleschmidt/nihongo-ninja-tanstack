import { For, Show } from "solid-js"
import { Button3D } from "@/components/Button3D"
import { cn } from "@/utils"
import type { PracticeCard } from "../types"
import { playClickSound } from "../utils/select-sound"
import { TYPE_TEXT_COLORS, getPromptDisplay } from "../utils/card-display"

type ReviewResult = {
  card: PracticeCard
  correct: boolean
}

type Props = {
  results: ReviewResult[]
  onContinue: () => void
}

export function ReviewScreen(props: Props) {
  const correctCount = () => props.results.filter((r) => r.correct).length
  const totalCount = () => props.results.length
  const accuracy = () =>
    totalCount() > 0 ? Math.round((correctCount() / totalCount()) * 100) : 0

  const getCardPrompt = (card: PracticeCard) =>
    getPromptDisplay(card, "0.75rem")

  return (
    <div class="flex min-h-[calc(100vh-12rem)] flex-col items-center px-4 pb-32 pt-8">
      <div class="mx-auto w-full max-w-3xl">
        {/* Header with stats (from hmr) */}
        <div class="mb-8 text-center">
          <h1 class="mb-2 text-2xl font-bold">See the terms you practiced!</h1>
          <div class="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>
              <span class="font-semibold text-emerald-500">
                {correctCount()}
              </span>{" "}
              correct
            </span>
            <span class="text-card-foreground/30">•</span>
            <span>
              <span class="font-semibold text-rose-500">
                {totalCount() - correctCount()}
              </span>{" "}
              incorrect
            </span>
            <span class="text-card-foreground/30">•</span>
            <span>
              <span class="font-semibold text-foreground">{accuracy()}%</span>{" "}
              accuracy
            </span>
          </div>
        </div>

        {/* Grid of cards */}
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <For each={props.results}>
            {(result) => {
              const promptDisplay = getCardPrompt(result.card)
              return (
                <div class="flex flex-col items-center gap-2 rounded-lg p-4 text-center bg-dynamic-accent/25 backdrop-blur-sm">
                  {/* Japanese prompt */}
                  <Show
                    when={promptDisplay.isHtml}
                    fallback={
                      <div class="font-japanese text-3xl font-bold text-dynamic-accent">
                        {promptDisplay.text}
                      </div>
                    }
                  >
                    <div
                      class="font-japanese text-3xl font-bold text-dynamic-accent"
                      innerHTML={promptDisplay.html}
                    />
                  </Show>

                  {/* English meaning */}
                  <div class="line-clamp-2 text-sm text-muted-foreground">
                    {result.card.validAnswers.join(", ")}
                  </div>

                  {/* Particles */}
                  <Show when={result.card.vocab.particles?.length}>
                    <div class="text-xs text-muted-foreground">
                      <For each={result.card.vocab.particles}>
                        {(p) => (
                          <span class="font-japanese">
                            {p.label
                              ? `${p.label} - ${p.particle}`
                              : `particle: ${p.particle}`}
                          </span>
                        )}
                      </For>
                    </div>
                  </Show>

                  {/* Result badge */}
                  <div
                    class={cn(
                      "rounded-full px-2 py-0.5 text-xs font-bold uppercase",
                      result.correct
                        ? "bg-green-500/10 text-green-600"
                        : "bg-red-500/10 text-red-600",
                    )}
                  >
                    {result.correct ? "Correct" : "Skipped"}
                  </div>
                </div>
              )
            }}
          </For>
        </div>

        {/* Fixed bottom continue button */}
        <div class="fixed bottom-20 left-1/2 -translate-x-1/2 w-48">
          <Button3D
            color="rgb(139,92,246)"
            onClick={() => { playClickSound(); props.onContinue() }}
          >
            Continue →
          </Button3D>
        </div>
      </div>
    </div>
  )
}
