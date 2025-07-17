// vocab-practice/components/write/WriteModeComponent.tsx
import { createEffect, createSignal, Show, createMemo, For } from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldDescription,
} from "@/components/ui/text-field"
import WanaKanaWrapper from "@/features/wanakana/WanaKana"
import { Rating } from "ts-fsrs"
import {
  getExampleSentenceParts,
  type ProcessedSentenceResult,
} from "@/data/utils/vocab"
import { cn } from "@/utils/util"

export default function WriteModeComponent() {
  const { state, setState } = useVocabPracticeContext()

  const currentCard = createMemo(() => state.currentCard)

  const [userAnswers, setUserAnswers] = createSignal<string[]>([])
  const [inputCorrectness, setInputCorrectness] = createSignal<boolean[]>([])
  const [wasCorrect, setWasCorrect] = createSignal(false)

  let singleInputRef: HTMLInputElement | undefined
  const multiInputRefs: (HTMLInputElement | undefined)[] = []

  const sentenceData = createMemo<ProcessedSentenceResult>(() => {
    const card = currentCard()
    if (!card) return { displayParts: [], inputValidationTargets: [] }
    const exampleSentences = card.vocab.example_sentences
    if (!exampleSentences || exampleSentences.length === 0) {
      return { displayParts: [], inputValidationTargets: [] }
    }

    const partOfSpeech = card.vocab.part_of_speech

    if (card.practiceMode === "kana") {
      const shouldShowExampleSentence =
        !partOfSpeech ||
        partOfSpeech === "I-adjective" ||
        partOfSpeech === "Na-adjective"

      if (shouldShowExampleSentence) {
        return getExampleSentenceParts(exampleSentences[0], card.practiceMode)
      }
    }
    return { displayParts: [], inputValidationTargets: [] }
  })

  const displaySentenceParts = createMemo(() => sentenceData().displayParts)

  const answerToDisplay = createMemo(() => {
    const card = currentCard()
    if (!card) return ""

    if (card.practiceMode === "kana") {
      return card.vocab.hiragana.join(", ")
    }
    return card.validAnswers.join(", ")
  })

  createEffect(() => {
    if (currentCard()) {
      setUserAnswers([])
      setInputCorrectness([])
      setWasCorrect(false)
    }
  })

  // Runs when component mounts and when currentCard changes
  createEffect(() => {
    const card = currentCard()
    if (!state.isAnswered && card) {
      setTimeout(() => {
        if (displaySentenceParts().length === 0) {
          // Single input mode
          if (singleInputRef) {
            singleInputRef.focus()
            singleInputRef.select()
          }
        } else {
          // Multiple input mode
          if (multiInputRefs[0]) {
            multiInputRefs[0].focus()
            multiInputRefs[0].select()
          }
        }
      }, 0)
    }
  })

  function handleSubmit() {
    const card = currentCard()
    if (state.isAnswered || !card) return

    const targets = sentenceData().inputValidationTargets
    const answers = userAnswers()
    let allBlanksCorrect = true
    const newCorrectness: boolean[] = []

    if (targets.length > 0) {
      for (let i = 0; i < targets.length; i++) {
        const userTypedAnswer = (answers[i] || "").trim().toLowerCase()
        const specificTargetAnswers = targets[i]
        const combinedValidAnswers = [
          ...card.validAnswers,
          ...specificTargetAnswers,
        ]

        const isThisBlankCorrect = combinedValidAnswers.some(
          (ans) => ans.trim().toLowerCase() === userTypedAnswer,
        )

        newCorrectness[i] = isThisBlankCorrect
        if (!isThisBlankCorrect) {
          allBlanksCorrect = false
        }
      }
      setInputCorrectness(newCorrectness)
      setWasCorrect(allBlanksCorrect)
    } else {
      const isSingleAnswerCorrect = card.validAnswers.some(
        (ans) =>
          ans.trim().toLowerCase() === (answers[0] || "").trim().toLowerCase(),
      )
      setWasCorrect(isSingleAnswerCorrect)
    }

    const rating = wasCorrect() ? Rating.Good : Rating.Again

    setState({
      isAnswered: true,
      lastRating: rating,
    })
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" && !state.isAnswered) {
      e.preventDefault()
      handleSubmit()
    }
  }

  function handleSingleInputChange(value: string) {
    setUserAnswers([value])
  }

  function handleMultiInputChange(index: number, value: string) {
    setUserAnswers((prev) => {
      const newArr = [...prev]
      newArr[index] = value
      return newArr
    })
  }

  return (
    <Show when={currentCard()}>
      {(card) => (
        <div class="space-y-6">
          <div class="flex min-h-16 w-full items-end justify-center text-center">
            <Show when={state.isAnswered}>
              <p class="text-primary text-xl font-bold">{answerToDisplay()}</p>
            </Show>
          </div>

          <div class="flex flex-col items-center space-y-6">
            <WanaKanaWrapper
              enabled={card().practiceMode === "kana"}
              watch={card().key}
            >
              <Show
                when={displaySentenceParts().length > 0}
                fallback={
                  <div class="space-y-4">
                    <TextField class="w-full max-w-xs">
                      <div class="h-6">
                        <Show when={!state.isAnswered}>
                          <TextFieldDescription>
                            Type your answer.
                          </TextFieldDescription>
                        </Show>
                      </div>
                      <TextFieldInput
                        ref={singleInputRef}
                        type="text"
                        value={userAnswers()[0] || ""}
                        onInput={(e) =>
                          handleSingleInputChange(e.currentTarget.value)
                        }
                        onKeyDown={handleKeyDown}
                        autocomplete="off"
                        autocapitalize="none"
                        autocorrect="off"
                        disabled={state.isAnswered}
                        class={cn(
                          "border-card-foreground text-xl font-bold opacity-100",
                          state.isAnswered &&
                            (wasCorrect() ? "text-green-500" : "text-red-500"),
                        )}
                      />
                    </TextField>
                  </div>
                }
              >
                <div
                  class={cn(
                    "max-w-2xl text-center leading-relaxed",
                    card().practiceMode === "kana" ? "text-2xl" : "text-xl",
                  )}
                >
                  <For each={displaySentenceParts()}>
                    {(part) => {
                      if (part.type === "html") {
                        return (
                          <span
                            class="font-japanese"
                            innerHTML={part.content}
                          />
                        )
                      }
                      return (
                        <span class="mx-1 inline-block">
                          <input
                            ref={(el) =>
                              (multiInputRefs[part.index] = el || undefined)
                            }
                            type="text"
                            value={userAnswers()[part.index] || ""}
                            onInput={(e) =>
                              handleMultiInputChange(
                                part.index,
                                e.currentTarget.value,
                              )
                            }
                            onKeyDown={handleKeyDown}
                            disabled={state.isAnswered}
                            // REMOVED: autofocus={part.index === 0} attribute
                            class={cn(
                              "inline-block min-w-[4rem] border-b-2 border-gray-400 bg-transparent text-center font-bold outline-none focus:border-blue-500",
                              state.isAnswered &&
                                (inputCorrectness()[part.index]
                                  ? "border-green-500 text-green-500"
                                  : "border-red-500 text-red-500"),
                            )}
                            style={{
                              width: `${Math.max(
                                4,
                                card().practiceMode === "kana"
                                  ? (userAnswers()[part.index] || "").length *
                                      1.5 +
                                      1
                                  : (userAnswers()[part.index] || "").length,
                              )}ch`,
                            }}
                            autocomplete="off"
                            autocapitalize="none"
                            autocorrect="off"
                          />
                        </span>
                      )
                    }}
                  </For>
                </div>
              </Show>
            </WanaKanaWrapper>

            <Show when={!state.isAnswered}>
              <Button
                onClick={handleSubmit}
                size="lg"
                class="h-14 rounded-xl bg-orange-500 px-8 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600 focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                <span class="flex items-center justify-center gap-2">
                  Submit
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>
            </Show>
          </div>
        </div>
      )}
    </Show>
  )
}
