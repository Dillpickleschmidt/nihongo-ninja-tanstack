import { For, Show, createMemo } from "solid-js"
import type {
  PracticeQuestion,
  Answer,
} from "../../core/answer-processing/types"
import { TextProcessor } from "../../core/text/TextProcessor"

const textProcessor = new TextProcessor()

interface DebugPanelProps {
  question: PracticeQuestion
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
            kanji: Answer[]
            kana: Answer[]
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
            kanji: Answer[]
            kana: Answer[]
          }
        >
      }
    >
  }
}

export function DebugPanel(props: DebugPanelProps) {
  const hierarchicalAnswers = createMemo(() => {
    const groups = new Map<number, HierarchicalGroup>()

    props.question.answers.forEach((answer) => {
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

  const formatAnswer = (answer: Answer) => {
    return answer.segments.map((seg) => textProcessor.removeFurigana(seg)).join("")
  }

  return (
    <div class="border-border bg-card mt-8 rounded-lg border p-4">
      <h3 class="text-muted-foreground mb-3 font-bold">Debug: Valid Answers</h3>
      <div class="space-y-6 text-sm">
        <For each={hierarchicalAnswers()}>
          {(sourceGroup) => {
            // Get first answer to show as example
            const firstAnswer =
              props.question.answers.find(
                (a) => a.sourceAnswerIndex === sourceGroup.sourceAnswerIndex,
              ) ?? props.question.answers[sourceGroup.sourceAnswerIndex]

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
                                    : textProcessor.removeFurigana(pronounType)}
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
                                          {textProcessor.removeFurigana(
                                            honorificType,
                                          )}
                                          :
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
