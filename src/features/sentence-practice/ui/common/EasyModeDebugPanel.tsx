import { For, Show } from "solid-js"
import type { PracticeQuestion } from "../../core/answer-processing/types"
import type { ConjugatableSegment } from "../../core/conjugation/types"
import { TextProcessor } from "../../core/text/TextProcessor"

const textProcessor = new TextProcessor()

const SPACE_REGEX = /\s+/g

interface EasyModeDebugPanelProps {
  question: PracticeQuestion
  rawSegments: ConjugatableSegment[]
}

type BlankVariation = {
  blankIndex: number
  word: string
  variations: string[]
}

export function EasyModeDebugPanel(props: EasyModeDebugPanelProps) {
  const blankVariations = () => {
    const variations: BlankVariation[] = []

    // Find which segments are blanks
    const blankIndices: number[] = []
    props.rawSegments.forEach((segment, index) => {
      if (typeof segment === "object" && "blank" in segment && segment.blank) {
        blankIndices.push(index)
      }
    })

    // For each blank, collect all possible values from answer variations
    blankIndices.forEach((blankIndex) => {
      const variationSet = new Set<string>()

      props.question.answers.forEach((answer) => {
        // Skip kana variations (only show kanji versions)
        if (answer.isKanaVariation) return

        if (answer.segments[blankIndex]) {
          const segment = answer.segments[blankIndex]
          variationSet.add(
            textProcessor.removeFurigana(segment).replace(SPACE_REGEX, ""),
          )
        }
      })

      variations.push({
        blankIndex,
        word: textProcessor
          .removeFurigana(props.question.answers[0].segments[blankIndex])
          .replace(SPACE_REGEX, ""),
        variations: Array.from(variationSet).sort(),
      })
    })

    return variations
  }

  return (
    <div class="border-border bg-card mt-4 rounded-lg border p-4">
      <div class="grid grid-cols-3">
        <div />
        <h3 class="text-muted-foreground mb-3 text-center font-bold">
          Possible Answers
        </h3>
        <p class="text-right text-xs text-neutral-500 italic">
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
