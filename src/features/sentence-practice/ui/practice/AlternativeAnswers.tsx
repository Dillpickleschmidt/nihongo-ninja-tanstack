// ui/practice/AlternativeAnswers.tsx
import { For, Show, createMemo } from "solid-js"
import FuriganaText from "../common/FuriganaText"
import type { AnswerMatch } from "../../core/types"

interface AlternativeAnswersProps {
  allMatches: AnswerMatch[]
  bestMatchIndex: number
  showFurigana: boolean
}

export default function AlternativeAnswers(props: AlternativeAnswersProps) {
  // Derive bestMatchPoliteForm from the best match
  const bestMatchPoliteForm = createMemo(
    () => props.allMatches[props.bestMatchIndex]?.answer.originalPoliteForm ?? true,
  )

  // Filter logic (same as original):
  const filteredMatches = createMemo(() =>
    props.allMatches.filter((match, index) => {
      // Skip the current best match
      if (index === props.bestMatchIndex) return false

      // Skip variations (e.g., alternative kanji)
      if (match.answer.isVariation) return false

      // Skip kana-only variations
      if (match.answer.isKanaVariation) return false

      // Only show answers matching the same politeness form
      return match.answer.originalPoliteForm === bestMatchPoliteForm()
    }),
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
        <h3 class="font-bold text-neutral-500">
          Alternative Answers ({bestMatchPoliteForm() ? "Polite" : "Casual"} Form):
        </h3>
        <div class="max-h-96 space-y-3 overflow-y-auto">
          <For each={filteredMatches()}>
            {(match) => (
              <div class="bg-card border-card-foreground/30 rounded-md border p-2">
                <div class="mb-1 text-sm text-neutral-600">
                  Similarity: {(match.similarity * 100).toFixed(1)}%
                </div>
                <FuriganaText
                  text={
                    props.showFurigana ? match.answer.original : match.answer.plain
                  }
                  showFurigana={props.showFurigana}
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
    </Show>
  )
}
