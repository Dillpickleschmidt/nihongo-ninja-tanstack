// ui/practice/EasyModeDebugPanel.tsx
import { For, Show, createMemo } from "solid-js"
import type { ProcessedQuestion } from "../../core/types"
import { SEGMENT_SEPARATOR } from "../../core/textProcessor"

interface EasyModeDebugPanelProps {
  currentQuestion: ProcessedQuestion
}

type BlankVariation = {
  blankIndex: number
  word: string
  variations: string[]
}

const SPACE_REGEX = /\s+/g

export default function EasyModeDebugPanel(props: EasyModeDebugPanelProps) {
  const blankVariations = createMemo(() => {
    const variations: BlankVariation[] = []

    // Get first answer segments to identify blanks
    const firstAnswer = props.currentQuestion.answers[0]

    // Find blank indices (where segment.isBlank === true)
    const blankIndices: number[] = []
    firstAnswer.forEach((segment, index) => {
      if (segment.isBlank) {
        blankIndices.push(index)
      }
    })

    // For each blank, collect all possible values
    blankIndices.forEach((blankIndex) => {
      const variationSet = new Set<string>()

      // Extract segments from validAnswers by splitting their text
      props.currentQuestion.validAnswers.forEach((answer) => {
        // Skip kana variations (only show kanji)
        if (answer.isKanaVariation) return

        // Split answer by SEGMENT_SEPARATOR to get individual segments
        const segments = answer.plain.split(SEGMENT_SEPARATOR)
        if (segments[blankIndex]) {
          const segment = segments[blankIndex]
            .trim()
            .replace(/\x1F/g, "") // Remove any remaining separators
            .replace(SPACE_REGEX, "")
          if (segment) {
            // Filter out empty strings
            variationSet.add(segment)
          }
        }
      })

      variations.push({
        blankIndex,
        word: firstAnswer[blankIndex].plain
          .replace(/\x1F/g, "") // Remove segment separator
          .replace(SPACE_REGEX, ""),
        variations: Array.from(variationSet).sort(),
      })
    })

    return variations
  })

  return (
    <div class="border-border bg-card mt-4 rounded-lg border p-4">
      <div class="grid grid-cols-3">
        <div />
        <h3 class="text-muted-foreground mb-3 text-center font-bold">
          Possible Answers
        </h3>
        <p class="text-right text-xs italic text-neutral-500">
          We may be missing some.
          <br />
          Let us know on Discord!
        </p>
      </div>
      <div class="space-y-4 text-sm">
        <For each={blankVariations()}>
          {(blank, index) => (
            <Show
              when={blank.variations.length > 1}
              fallback={
                <div class="text-muted-foreground font-semibold">
                  {blank.variations[0]}
                </div>
              }
            >
              <div>
                <div class="text-muted-foreground mb-1 font-semibold">
                  Blank {index() + 1} ({blank.word}):
                </div>
                <div class="ml-4 space-y-1">
                  <For each={blank.variations}>
                    {(variation) => (
                      <div class="text-muted-foreground/90">{variation}</div>
                    )}
                  </For>
                </div>
              </div>
            </Show>
          )}
        </For>
      </div>
    </div>
  )
}
