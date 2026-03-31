import { For, Show } from "solid-js"
import { cn } from "@/utils"
import type { PracticeCard } from "../types"
import { getPromptDisplay } from "../utils/card-display"
import { PracticeActionBar } from "./PracticeActionBar"
import { PRACTICE_LAYOUT } from "../VocabPractice"

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
    <div class={`${PRACTICE_LAYOUT} pt-8`}>
      <div class="w-full max-w-3xl">
        {/* Header */}
        <div class="mb-8 text-center">
          <h1 class="mb-2 text-2xl font-bold text-white/90">
            Review
          </h1>
          <div class="flex items-center justify-center gap-4 text-sm text-white/40">
            <span>
              <span class="font-semibold text-emerald-400">
                {correctCount()}
              </span>{" "}
              correct
            </span>
            <span class="text-white/20">·</span>
            <span>
              <span class="font-semibold text-rose-400">
                {totalCount() - correctCount()}
              </span>{" "}
              incorrect
            </span>
            <span class="text-white/20">·</span>
            <span>
              <span class="font-semibold text-white/70">{accuracy()}%</span>
            </span>
          </div>
        </div>

        {/* Grid of cards */}
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <For each={props.results}>
            {(result) => {
              const promptDisplay = getCardPrompt(result.card)
              return (
                <div class="flex flex-col items-center gap-2 rounded-xl bg-white/5 p-4 text-center">
                  <Show
                    when={promptDisplay.isHtml}
                    fallback={
                      <div class="font-japanese text-3xl font-bold text-white/80">
                        {promptDisplay.text}
                      </div>
                    }
                  >
                    <div
                      class="font-japanese text-3xl font-bold text-white/80"
                      innerHTML={promptDisplay.html}
                    />
                  </Show>

                  <div class="line-clamp-2 text-sm text-white/40">
                    {result.card.validAnswers.join(", ")}
                  </div>

                  <Show when={result.card.vocab.particles?.length}>
                    <div class="text-xs text-white/30">
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

                  <div
                    class={cn(
                      "rounded-full px-2 py-0.5 text-xs font-bold uppercase",
                      result.correct
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-rose-500/10 text-rose-400",
                    )}
                  >
                    {result.correct ? "Correct" : "Incorrect"}
                  </div>
                </div>
              )
            }}
          </For>
        </div>
      </div>

      <PracticeActionBar
        state="idle"
        label="Continue"
        color="rgb(139,92,246)"
        onAction={props.onContinue}
      />
    </div>
  )
}
