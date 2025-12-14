// ui/practice/DebugPanel.tsx
import { For, Show, createMemo } from "solid-js"
import type { RichAnswer } from "../../core/types"
import { removeFurigana } from "../../core/textProcessor"

interface DebugPanelProps {
  allAnswers: RichAnswer[] // All validAnswers from ProcessedQuestion
}

type HierarchicalGroup = {
  sourceAnswerIndex: number
  polite: {
    pronounGroups: Map<
      string,
      {
        honorificGroups: Map<
          string,
          {
            kanji: RichAnswer[]
            kana: RichAnswer[]
          }
        >
      }
    >
  }
  casual: {
    pronounGroups: Map<
      string,
      {
        honorificGroups: Map<
          string,
          {
            kanji: RichAnswer[]
            kana: RichAnswer[]
          }
        >
      }
    >
  }
}

const SPACE_REGEX = /\s+/g

export default function DebugPanel(props: DebugPanelProps) {
  const hierarchicalAnswers = createMemo(() => {
    const groups = new Map<number, HierarchicalGroup>()

    props.allAnswers.forEach((answer) => {
      const sourceIndex = answer.sourceAnswerIndex ?? 0
      const politeForm = answer.originalPoliteForm ? "polite" : "casual"
      const pronounType = answer.pronounType ?? "none"
      const honorificType = answer.honorificType ?? "none"
      const isKana = answer.isKanaVariation ?? false

      if (!groups.has(sourceIndex)) {
        groups.set(sourceIndex, {
          sourceAnswerIndex: sourceIndex,
          polite: { pronounGroups: new Map() },
          casual: { pronounGroups: new Map() },
        })
      }

      const group = groups.get(sourceIndex)!
      const formGroup = politeForm === "polite" ? group.polite : group.casual

      if (!formGroup.pronounGroups.has(pronounType)) {
        formGroup.pronounGroups.set(pronounType, {
          honorificGroups: new Map(),
        })
      }

      const pronounGroup = formGroup.pronounGroups.get(pronounType)!

      if (!pronounGroup.honorificGroups.has(honorificType)) {
        pronounGroup.honorificGroups.set(honorificType, {
          kanji: [],
          kana: [],
        })
      }

      const honorificGroup = pronounGroup.honorificGroups.get(honorificType)!

      if (isKana) {
        honorificGroup.kana.push(answer)
      } else {
        honorificGroup.kanji.push(answer)
      }
    })

    return Array.from(groups.values()).sort(
      (a, b) => a.sourceAnswerIndex - b.sourceAnswerIndex,
    )
  })

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
