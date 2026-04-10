import { For, Show, createMemo } from "solid-js"
import FuriganaText from "../common/FuriganaText"
import type { AnswerMatch } from "../../core/types"
import { getAlternativeAnswers } from "./selectors/alternativeAnswers"

interface AlternativeAnswersProps {
  allMatches: AnswerMatch[]
  bestMatchIndex: number
  showFurigana: boolean
}

export default function AlternativeAnswers(props: AlternativeAnswersProps) {
  const bestMatchPoliteForm = createMemo(
    () =>
      props.allMatches[props.bestMatchIndex]?.answer.originalPoliteForm ?? true,
  )

  const filteredMatches = createMemo(() =>
    getAlternativeAnswers(props.allMatches, props.bestMatchIndex),
  )

  return (
    <Show when={filteredMatches().length > 0}>
      <div class="space-y-2">
        <style>
          {`
          .highlight rt {
            color: var(--color-primary);
          }
        `}
        </style>
        <h3 class="font-medium text-white/40">
          Alternative Answers ({bestMatchPoliteForm() ? "Polite" : "Casual"}{" "}
          Form):
        </h3>
        <div class="max-h-96 space-y-3 overflow-y-auto">
          <For each={filteredMatches()}>
            {(match) => (
              <div class="rounded-xl border border-white/10 bg-white/5 p-2">
                <div class="mb-1 text-sm text-white/30">
                  Similarity: {(match.similarity * 100).toFixed(1)}%
                </div>
                <FuriganaText
                  text={props.showFurigana ? match.answer.original : match.displayText}
                  showFurigana={props.showFurigana}
                  errors={match.answerErrors}
                  highlightClass="rounded-md border-2 border-black bg-amber-500 text-black font-medium highlight"
                />
                <Show when={match.answer.notes}>
                  <div class="mt-1 text-sm text-white/30">
                    Note: {match.answer.notes}
                  </div>
                </Show>
              </div>
            )}
          </For>
        </div>
        <p class="text-right text-xs text-white/20">
          Other forms are hidden for brevity.*
        </p>
      </div>
    </Show>
  )
}
