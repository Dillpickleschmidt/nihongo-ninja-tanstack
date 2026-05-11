// ui/practice/DebugPanel.tsx
import { For, Show, createMemo } from "solid-js"
import type { RichAnswer } from "../../core/types"
import { removeFurigana } from "../../core/textProcessor"
import { groupDebugAnswers } from "./selectors/debugAnswers"

interface DebugPanelProps {
  allAnswers: RichAnswer[] // All acceptedAnswers from ProcessedQuestion
}

const SPACE_REGEX = /\s+/g

export default function DebugPanel(props: DebugPanelProps) {
  const hierarchicalAnswers = createMemo(() => groupDebugAnswers(props.allAnswers))

  const formatAnswer = (answer: RichAnswer) => {
    return removeFurigana(answer.plain)
      .replace(/\x1F/g, "") // Remove segment separator
      .replace(SPACE_REGEX, "")
  }

  return (
    <div class="border-border bg-card mt-4 rounded-lg border p-4">
      <div class="grid grid-cols-3">
        <div />
        <h3 class="text-muted-foreground mb-3 text-center font-bold">
          All Possible Answers
        </h3>
        <p class="text-right text-xs italic text-neutral-500">
          We may be missing some.
          <br />
          Let us know on Discord!
        </p>
      </div>
      <div class="space-y-6 text-sm">
        <For each={hierarchicalAnswers()}>
          {(sourceGroup) => {
            // Get first answer to show as example
            const firstAnswer =
              props.allAnswers.find(
                (a) => a.sourceAnswerIndex === sourceGroup.sourceAnswerIndex,
              ) ?? props.allAnswers[sourceGroup.sourceAnswerIndex]

            return (
              <div class="space-y-3">
                <div class="text-muted-foreground font-bold">
                  Original Answer {sourceGroup.sourceAnswerIndex + 1}:{" "}
                  {formatAnswer(firstAnswer)}
                </div>

                <For each={["polite", "casual"] as const}>
                  {(formType) => {
                    const formGroup =
                      formType === "polite"
                        ? sourceGroup.polite
                        : sourceGroup.casual

                    return (
                      <Show when={formGroup.pronounGroups.size > 0}>
                        <div class="ml-4 space-y-2">
                          <div class="text-muted-foreground font-semibold">
                            {formType === "polite" ? "Polite" : "Casual"} Form:
                          </div>

                          <For
                            each={Array.from(formGroup.pronounGroups.entries())}
                          >
                            {([pronounType, pronounGroup]) => (
                              <div class="ml-4 space-y-1">
                                <div class="text-muted-foreground/80 text-xs">
                                  {pronounType === "none"
                                    ? "No pronoun"
                                    : removeFurigana(pronounType)}
                                  :
                                </div>

                                <For
                                  each={Array.from(
                                    pronounGroup.honorificGroups.entries(),
                                  )}
                                >
                                  {([honorificType, honorificGroup]) => (
                                    <div class="ml-4 space-y-1">
                                      <Show when={honorificType !== "none"}>
                                        <div class="text-muted-foreground/60 text-xs">
                                          {removeFurigana(honorificType)}:
                                        </div>
                                      </Show>

                                      <div class="ml-2 space-y-0.5">
                                        <For each={honorificGroup.kanji}>
                                          {(answer) => (
                                            <div class="text-muted-foreground/90">
                                              {formatAnswer(answer)}
                                            </div>
                                          )}
                                        </For>
                                        <For each={honorificGroup.kana}>
                                          {(answer) => (
                                            <div class="text-muted-foreground/70 text-xs">
                                              {formatAnswer(answer)} (kana)
                                            </div>
                                          )}
                                        </For>
                                      </div>
                                    </div>
                                  )}
                                </For>
                              </div>
                            )}
                          </For>
                        </div>
                      </Show>
                    )
                  }}
                </For>
              </div>
            )
          }}
        </For>
      </div>
    </div>
  )
}
