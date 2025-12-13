// ui/ResultDisplay.tsx
import { Show } from "solid-js"
import { usePractice } from "../store/PracticeContext"
import FuriganaText from "./FuriganaText"

export default function ResultDisplay() {
  const { store, computed } = usePractice()

  const currentQuestion = () => computed.getCurrentQuestion()

  // Get the best matching answer for display
  const bestAnswer = () => {
    const question = currentQuestion()
    if (!question || !store.checkResult) return null
    // Find the answer that matches the bestMatch string
    return store.checkResult.bestMatch
  }

  return (
    <Show when={store.showResult && store.checkResult}>
      <div class="space-y-4">
        {/* User's Answer Section (hard mode only) */}
        <Show when={store.effectiveDifficulty === "hard"}>
          <div class="space-y-1">
            <div class="font-bold">Your answer:</div>
            <div class="flex w-full items-center">
              <div
                class={`border-card-foreground/70 w-full rounded border-2 p-2 text-xl ${store.checkResult!.isCorrect
                  ? "border-green-500/75 bg-green-500/15"
                  : ""
                  }`}
              >
                <FuriganaText
                  text={store.singleInput}
                  errors={store.checkResult!.errorRanges}
                  highlightClass="rounded-md border-2 border-black bg-red-400 dark:bg-red-500 text-black font-medium"
                />
              </div>
              <Show
                when={store.checkResult!.isCorrect}
                fallback={
                  <div class="w-12 text-center text-4xl font-bold text-red-500">
                    ×
                  </div>
                }
              >
                <div class="w-12 text-center text-3xl font-bold text-green-500">
                  ✓
                </div>
              </Show>
            </div>
          </div>
        </Show>

        {/* Correct Answer Section (when wrong) */}
        <Show when={!store.checkResult!.isCorrect}>
          <div class="space-y-1">
            <div class="font-bold">Correct answer:</div>
            <div
              class={`border-card-foreground/70 rounded border text-xl ${store.showFurigana ? "px-2 pt-3 pb-1" : "p-2"
                }`}
            >
              <FuriganaText
                text={bestAnswer() || ""}
                showFurigana={store.showFurigana}
                errors={store.checkResult!.bestMatchErrors}
                highlightClass="rounded-md border-2 border-black bg-green-400 dark:bg-green-500 text-black font-medium"
              />
            </div>
          </div>
        </Show>

        {/* Similarity indicator (when wrong) */}
        <Show
          when={
            !store.checkResult!.isCorrect &&
            store.checkResult!.similarity > 0
          }
        >
          <div class="text-muted-foreground text-sm">
            Similarity: {Math.round(store.checkResult!.similarity * 100)}%
          </div>
        </Show>
      </div>
    </Show>
  )
}
