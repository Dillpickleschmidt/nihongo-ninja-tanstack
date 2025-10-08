// ui/practice/ResultDisplay.tsx
import { For, Show } from "solid-js"
import { usePracticeStore } from "../../store/PracticeContext"
import FuriganaText from "../common/FuriganaText"
import type { CheckResult } from "../../core/answer-processing/types"
import AlternativeAnswers from "./AlternativeAnswers"

export default function ResultDisplay() {
  const { store } = usePracticeStore()

  return (
    <Show when={store.checkResult} keyed>
      {(checkResult: CheckResult) => (
        <div class="space-y-4">
          <style>
            {`
              .highlight rt {
                color: var(--color-primary);
              }
            `}
          </style>
          {/* User's Answer Section */}
          <Show when={store.effectiveDifficulty !== "easy"}>
            <div class="space-y-1">
              <div class="font-bold">Your answer:</div>
              <div class="flex w-full items-center">
                <div
                  class={`border-card-foreground/70 w-full rounded border-2 p-2 text-xl ${
                    checkResult.isCorrect
                      ? "border-green-500/75 bg-green-500/15"
                      : ""
                  }`}
                >
                  <For each={checkResult.inputs}>
                    {(input) => (
                      <FuriganaText
                        text={input.value}
                        errors={input.errors}
                        highlightClass="rounded-md border-2 border-black bg-red-400 dark:bg-red-500 text-black font-medium highlight"
                      />
                    )}
                  </For>
                </div>
                <Show
                  when={checkResult.isCorrect}
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

          {/* Correct Answer Section */}
          <Show when={!checkResult.isCorrect}>
            <div class="space-y-1">
              <div class="font-bold">Correct answer:</div>
              <div
                class={`border-card-foreground/70 rounded border text-xl ${
                  store.showFurigana ? "px-2 pt-3 pb-1" : "p-2"
                }`}
              >
                <For each={checkResult.answers}>
                  {(answer) => (
                    <FuriganaText
                      text={answer.segments.join(store.showFurigana ? " " : "")}
                      errors={answer.errors}
                      highlightClass="rounded-md border-2 border-black bg-green-500 text-black font-medium highlight"
                    />
                  )}
                </For>
              </div>
            </div>
          </Show>

          {/* Alternative Answers Section */}
          <Show
            when={
              store.effectiveDifficulty !== "easy" &&
              checkResult.allMatches?.length > 1
            }
          >
            <AlternativeAnswers
              allMatches={checkResult.allMatches}
              currentAnswerIndex={0}
              showFurigana={store.showFurigana}
              bestMatchPoliteForm={
                checkResult.allMatches[0]?.answer.originalPoliteForm ?? false
              }
            />
          </Show>
        </div>
      )}
    </Show>
  )
}
