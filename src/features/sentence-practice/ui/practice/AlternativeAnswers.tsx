// ui/practice/AlternativeAnswers.tsx
import { For, Show } from "solid-js"
import FuriganaText from "../common/FuriganaText"
import type { AnswerMatch } from "../../core/answer-processing/types"
import { TextProcessor } from "../../core/text/TextProcessor"

const textProcessor = new TextProcessor()

interface AlternativeAnswersProps {
  allMatches: AnswerMatch[] //              All possible matches for the answer
  currentAnswerIndex: number //             Index of the currently displayed best match
  showFurigana: boolean //                  Whether to show furigana readings
  bestMatchPoliteForm: boolean //           Whether to show polite or casual form alternatives
}

export default function AlternativeAnswers(props: AlternativeAnswersProps) {
  return (
    <div class="space-y-2">
      <style>
        {`
          .highlight rt {
            color: var(--color-primary);
          }
        `}
      </style>
      <h3 class="font-bold text-neutral-500">
        Alternative Answers ({props.bestMatchPoliteForm ? "Polite" : "Casual"}{" "}
        Form):
      </h3>
      <div class="max-h-96 space-y-3 overflow-y-auto">
        <For
          each={props.allMatches.filter((match, index) => {
            // Skip the current best match as it's already displayed above
            if (index === props.currentAnswerIndex) return false

            // Skip variations (e.g., alternative kanji) as they're too similar
            if (match.answer.isVariation) return false

            // Only show answers matching the same politeness form
            // (don't mix polite and casual forms)
            return match.answer.originalPoliteForm === props.bestMatchPoliteForm
          })}
        >
          {(match) => (
            <div class="bg-card border-card-foreground/30 rounded-md border p-2">
              <div class="mb-1 text-sm text-neutral-600">
                Similarity: {(match.similarity * 100).toFixed(1)}%
              </div>
              <FuriganaText
                text={
                  props.showFurigana
                    ? match.answer.segments.join(" ")
                    : textProcessor.extractPlainText(match.answer.segments)
                }
                errors={match.answerErrors}
                highlightClass="rounded-md border-2 border-black dark:bg-amber-500 bg-amber-400 text-black font-medium dark:saturate-[85%] highlight"
              />
              <Show when={match.answer.notes}>
                <div class="mt-1 text-sm text-neutral-500">
                  Note: {match.answer.notes}
                </div>
              </Show>
            </div>
          )}
        </For>
      </div>
      <p class="text-muted-foreground/50 text-right text-xs">
        Other forms are hidden for brevity.*
      </p>
    </div>
  )
}
