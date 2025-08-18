// vocab-practice/components/pages/PracticePageComponent.tsx
import { createEffect, Show } from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import CardTypeSwitchComponent from "../CardTypeSwitchComponent"
import ProgressHeader from "../ProgressHeader"
import { PracticeCardContainer } from "../shared/PracticeCardContainer"
import { ActionButton } from "../shared/ActionButton"

export default function PracticePageComponent() {
  const { uiState, answerCardWithUIUpdate } = useVocabPracticeContext()
  let nextButtonRef: HTMLButtonElement | undefined

  // Handler for the "Next Question" button
  async function handleNextQuestion() {
    if (!uiState.lastRating) return
    await answerCardWithUIUpdate(uiState.lastRating)
  }

  // Focus the button when it appears
  createEffect(() => {
    if (uiState.isAnswered && nextButtonRef) {
      nextButtonRef.focus()
    }
  })

  return (
    <div class="min-h-screen">
      <ProgressHeader />
      <div class="mx-auto max-w-3xl px-4 pt-20 sm:pt-28">
        <PracticeCardContainer>
          <CardTypeSwitchComponent />
        </PracticeCardContainer>
      </div>

      {/* "Next Question" button */}
      <Show when={uiState.isAnswered}>
        <div class="fixed bottom-6 left-1/2 w-full max-w-md -translate-x-1/2 px-4">
          <ActionButton
            ref={nextButtonRef}
            onClick={handleNextQuestion}
            variant="primary"
          >
            Next Question →
          </ActionButton>
        </div>
      </Show>
    </div>
  )
}
