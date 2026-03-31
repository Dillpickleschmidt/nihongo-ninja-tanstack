import { Show } from "solid-js"
import { usePractice } from "../../store/PracticeContext"
import FuriganaText from "../common/FuriganaText"
import AlternativeAnswers from "./AlternativeAnswers"

export default function ResultDisplay() {
  const { store, computed } = usePractice()

  const currentQuestion = () => computed.getCurrentQuestion()

  const bestAnswer = () => {
    const question = currentQuestion()
    if (!question || !store.checkResult) return null
    return store.checkResult.bestMatch
  }

  return (
    <Show when={store.showResult && store.checkResult}>
      <div class="space-y-4">
        {/* User's Answer Section (hard mode only) */}
        <Show when={store.effectiveDifficulty === "hard"}>
          <div class="space-y-1">
            <div class="text-sm font-medium text-white/50">Your answer:</div>
            <div class="flex w-full items-center">
              <div
                class={`w-full rounded-xl border bg-white/5 p-2 text-xl ${
                  store.checkResult!.isCorrect
                    ? "border-emerald-500/50 bg-emerald-500/10"
                    : "border-white/10"
                }`}
              >
                <FuriganaText
                  text={store.singleInput}
                  errors={store.checkResult!.errorRanges}
                  highlightClass="rounded-md border-2 border-black bg-rose-500 text-black font-medium"
                />
              </div>
              <Show
                when={store.checkResult!.isCorrect}
                fallback={
                  <div class="w-12 text-center text-4xl font-bold text-rose-400">
                    ×
                  </div>
                }
              >
                <div class="w-12 text-center text-3xl font-bold text-emerald-400">
                  ✓
                </div>
              </Show>
            </div>
          </div>
        </Show>

        {/* Correct Answer Section (when wrong) */}
        <Show when={!store.checkResult!.isCorrect}>
          <div class="space-y-1">
            <div class="text-sm font-medium text-white/50">Correct answer:</div>
            <div
              class={`rounded-xl border border-white/10 bg-white/5 text-xl ${
                store.showFurigana ? "px-2 pt-3 pb-1" : "p-2"
              }`}
            >
              <FuriganaText
                text={bestAnswer() || ""}
                showFurigana={store.showFurigana}
                errors={store.checkResult!.bestMatchErrors}
                highlightClass="rounded-md border-2 border-black bg-emerald-500 text-black font-medium"
              />
            </div>
          </div>
        </Show>

        {/* Similarity indicator (when wrong) */}
        <Show
          when={
            !store.checkResult!.isCorrect && store.checkResult!.similarity > 0
          }
        >
          <div class="text-sm text-white/30">
            Similarity: {Math.round(store.checkResult!.similarity * 100)}%
          </div>
        </Show>

        {/* Alternative Answers */}
        <Show when={store.checkResult}>
          <AlternativeAnswers
            allMatches={store.checkResult!.allMatches}
            bestMatchIndex={store.checkResult!.bestMatchIndex}
            showFurigana={store.showFurigana}
          />
        </Show>
      </div>
    </Show>
  )
}
