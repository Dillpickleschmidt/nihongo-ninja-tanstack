// vocab-practice/components/write/WriteModeComponent.tsx
import { createEffect, createSignal, Show, createMemo } from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldDescription,
} from "@/components/ui/text-field"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import { Rating } from "ts-fsrs"

export default function WriteModeComponent() {
  const { state, setState } = useVocabPracticeContext()
  const manager = () => state.manager!

  const currentCard = createMemo(() => {
    if (!state.manager || state.activeQueue.length === 0) {
      return null
    }
    return state.manager.getCardFromMap(state.activeQueue[0])
  })

  const [userAnswer, setUserAnswer] = createSignal("")
  const [wasCorrect, setWasCorrect] = createSignal(false)
  let inputRef: HTMLInputElement | undefined

  // Reset local UI state whenever the card changes
  createEffect(() => {
    if (currentCard()) {
      setUserAnswer("")
      setWasCorrect(false)
      // The global isAnswered flag will be reset by the "Next" button handler
      inputRef?.focus()
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

  const mainTextField = (
    <TextField class="w-full max-w-xs">
      <div class="h-6">
        <Show when={!state.isAnswered}>
          <TextFieldDescription>Type your answer.</TextFieldDescription>
        </Show>
      </div>
      <TextFieldInput
        type="text"
        ref={inputRef}
        value={userAnswer()}
        onInput={(e) => setUserAnswer(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        autofocus
        autocomplete="off"
        autocapitalize="none"
        autocorrect={state.settings.practiceMode === "kana" ? "off" : "on"}
        disabled={state.isAnswered}
        class={`${
          state.isAnswered
            ? wasCorrect()
              ? "text-green-500"
              : "text-red-500"
            : ""
        } border-card-foreground font-bold opacity-100 xl:!text-lg`}
      />
    </TextField>
  )

  return (
    <Show when={currentCard()}>
      {(card) => (
        <div class="space-y-6">
          <div class="flex min-h-16 w-full items-end justify-center text-center">
            <Show when={state.isAnswered}>
              <p class="text-primary text-xl font-bold">
                {card().validAnswers.join(", ")}
              </p>
            </Show>
          </div>
          <div class="flex flex-col items-center space-y-4">
            {state.settings.practiceMode === "kana" ? (
              <WanakanaWrapper>{mainTextField}</WanakanaWrapper>
            ) : (
              mainTextField
            )}
            <Show when={!state.isAnswered}>
              <Button
                onClick={handleSubmit}
                class="rounded-xl bg-orange-500 px-8 py-2 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600"
              >
                Submit
              </Button>
            </Show>
          </div>
        </div>
      )}
    </Show>
  )
}
