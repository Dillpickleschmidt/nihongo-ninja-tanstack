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
import { getExampleSentenceParts } from "@/data/utils/vocab"

export default function WriteModeComponent() {
  const { state, setState } = useVocabPracticeContext()

  const currentCard = createMemo(() => {
    if (!state.manager || state.activeQueue.length === 0) {
      return null
    }
    return state.manager.getCardFromMap(state.activeQueue[0])
  })

  const [userAnswer, setUserAnswer] = createSignal("")
  const [wasCorrect, setWasCorrect] = createSignal(false)

  const sentenceParts = createMemo(() => {
    const card = currentCard()
    if (!card) return []
    const exampleSentences = card.vocab.example_sentences
    if (!exampleSentences || exampleSentences.length === 0) return []

    const partOfSpeech = card.vocab.part_of_speech
    let shouldShowExampleSentence = false
    if (state.settings.practiceMode === "kana") {
      shouldShowExampleSentence = !partOfSpeech
    } else if (state.settings.practiceMode === "readings") {
      shouldShowExampleSentence =
        !partOfSpeech ||
        partOfSpeech === "I-adjective" ||
        partOfSpeech === "Na-adjective"
    }

    if (shouldShowExampleSentence) {
      return getExampleSentenceParts(
        exampleSentences[0],
        state.settings.practiceMode,
      )
    }
    return []
  })

  let inputRef: HTMLInputElement | undefined

  const answerToDisplay = createMemo(() => {
    const card = currentCard()
    if (!card) return ""

    if (state.settings.practiceMode === "kana") {
      return card.vocab.hiragana.join(", ")
    }
    return card.validAnswers.join(", ")
  })

  createEffect(() => {
    if (currentCard()) {
      setUserAnswer("")
      setWasCorrect(false)
      setTimeout(() => {
        if (inputRef) {
          inputRef.focus()
          inputRef.select()
        }
      }, 0)
    }
  })

  function handleSubmit() {
    const card = currentCard()
    if (state.isAnswered || !card) return

    const isCorrect = card.validAnswers.some(
      (ans) => ans.trim().toLowerCase() === userAnswer().trim().toLowerCase(),
    )
    setWasCorrect(isCorrect)
    const rating = isCorrect ? Rating.Easy : Rating.Again

    // Set the global state to show the "Next" button and store the rating
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
              enabled={state.settings.practiceMode === "kana"}
              watch={card().key}
            >
              <Show
                when={sentenceParts().length > 0}
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
                        ref={inputRef}
                        type="text"
                        value={userAnswer()}
                        onInput={(e) => setUserAnswer(e.currentTarget.value)}
                        onKeyDown={handleKeyDown}
                        autofocus
                        autocomplete="off"
                        autocapitalize="none"
                        autocorrect="off"
                        disabled={state.isAnswered}
                        class={`${
                          state.isAnswered
                            ? wasCorrect()
                              ? "text-green-500"
                              : "text-red-500"
                            : ""
                        } border-card-foreground text-xl font-bold opacity-100`}
                      />
                    </TextField>
                  </div>
                }
              >
                <div class="max-w-2xl text-center text-2xl leading-relaxed">
                  <For each={sentenceParts()}>
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
                            ref={inputRef}
                            type="text"
                            value={userAnswer()}
                            onInput={(e) =>
                              setUserAnswer(e.currentTarget.value)
                            }
                            onKeyDown={handleKeyDown}
                            disabled={state.isAnswered}
                            autofocus
                            class={`inline-block min-w-[4rem] border-b-2 border-gray-400 bg-transparent text-center font-bold outline-none focus:border-blue-500 ${
                              state.isAnswered
                                ? wasCorrect()
                                  ? "border-green-500 text-green-500"
                                  : "border-red-500 text-red-500"
                                : ""
                            }`}
                            style={{
                              width: `${Math.max(
                                4,
                                userAnswer().length * 1.8 + 1,
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
