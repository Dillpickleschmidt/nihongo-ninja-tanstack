// vocab-practice/components/write/WriteModeComponent.tsx
import { createEffect, createSignal, Show, createMemo, For } from "solid-js"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import WanaKanaWrapper from "@/features/wanakana/WanaKana"
import { Rating } from "ts-fsrs"
import {
  getExampleSentenceParts,
  type ProcessedSentenceResult,
} from "@/data/utils/sentence-processing"
import { cn } from "@/utils"
import { ActionButton } from "../shared/ActionButton"

export default function WriteModeComponent() {
  const { uiState, setUIState, currentCard, addTimeAndQuestions } =
    useVocabPracticeContext()

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

    if (card.practiceMode === "spellings") {
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

    if (card.practiceMode === "spellings") {
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
    if (!uiState.isAnswered && card) {
      setTimeout(() => {
        if (displaySentenceParts().length === 0) {
          singleInputRef?.focus()
          singleInputRef?.select()
        } else {
          multiInputRefs[0]?.focus()
          multiInputRefs[0]?.select()
        }
      }, 0)
    }
  })

  function handleSubmit() {
    const card = currentCard()
    if (uiState.isAnswered || !card) return

    // Track time and questions
    addTimeAndQuestions(10, true)

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
    setUIState({ isAnswered: true, lastRating: rating })
  }

  function handleIWasCorrect() {
    if (!uiState.isAnswered) return
    setWasCorrect(true)
    setUIState({ lastRating: Rating.Good })
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" && !uiState.isAnswered) {
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
        <>
          <div class="space-y-4 sm:space-y-6">
            {/* Show correct answer after submission */}
            <div class="flex min-h-12 w-full items-end justify-center text-center sm:min-h-16">
              <Show when={uiState.isAnswered}>
                <p class="text-primary text-lg font-bold sm:text-xl">
                  {answerToDisplay()}
                </p>
              </Show>
            </div>

            {/* Input(s) */}
            <div class="flex flex-col items-center space-y-3 sm:space-y-5">
              <WanaKanaWrapper
                enabled={card().practiceMode === "spellings"}
                watch={card().key}
              >
                <Show
                  when={displaySentenceParts().length > 0}
                  fallback={
                    <input
                      ref={singleInputRef}
                      type="text"
                      value={userAnswers()[0] || ""}
                      onInput={(e) =>
                        handleSingleInputChange(e.currentTarget.value)
                      }
                      onKeyDown={handleKeyDown}
                      disabled={uiState.isAnswered}
                      class={cn(
                        "border-b-2 border-gray-400 bg-transparent text-center text-xl font-bold outline-none focus:border-blue-500 sm:text-2xl",
                        uiState.isAnswered &&
                        (wasCorrect() ? "text-green-500" : "text-red-500"),
                      )}
                    />
                  }
                >
                  <div
                    class={cn(
                      "max-w-2xl text-center leading-relaxed",
                      card().practiceMode === "spellings"
                        ? "text-2xl"
                        : "text-xl",
                    )}
                  >
                    <For each={displaySentenceParts()}>
                      {(part) =>
                        part.type === "html" ? (
                          <span
                            class="font-japanese"
                            innerHTML={part.content}
                          />
                        ) : (
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
                              disabled={uiState.isAnswered}
                              class={cn(
                                "inline-block min-w-[4rem] border-b-2 border-gray-400 bg-transparent text-center font-bold outline-none focus:border-blue-500",
                                uiState.isAnswered &&
                                (inputCorrectness()[part.index]
                                  ? "border-green-500 text-green-500"
                                  : "border-red-500 text-red-500"),
                              )}
                              style={{
                                width: `${Math.max(
                                  4,
                                  card().practiceMode === "spellings"
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
                      }
                    </For>
                  </div>
                </Show>
              </WanaKanaWrapper>
            </div>
          </div>

          {/* Fixed bottom buttons */}
          <Show when={!uiState.isAnswered}>
            <div class="fixed bottom-6 left-1/2 w-full max-w-md -translate-x-1/2 px-4">
              <ActionButton onClick={handleSubmit} variant="primary">
                Submit
              </ActionButton>
            </div>
          </Show>

          <Show when={uiState.isAnswered && !wasCorrect()}>
            <div class="fixed bottom-6 left-1/2 w-full max-w-md -translate-x-1/2 px-4">
              <ActionButton
                onClick={handleIWasCorrect}
                variant="success"
                class="w-auto px-6"
              >
                ✓ I was correct
              </ActionButton>
            </div>
          </Show>
        </>
      )}
    </Show>
  )
}
