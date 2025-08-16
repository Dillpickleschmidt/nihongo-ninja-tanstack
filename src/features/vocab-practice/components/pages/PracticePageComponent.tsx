// vocab-practice/components/pages/PracticePageComponent.tsx
import { createEffect, Show } from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import CardTypeSwitchComponent from "../CardTypeSwitchComponent"
import ProgressHeader from "../ProgressHeader"
import { Button } from "@/components/ui/button"

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

      {/* Main content */}
      <div class="pt-28 pb-28">
        <div class="mx-auto max-w-3xl px-4">
          <div class="bg-card border-card-foreground rounded-2xl border p-8 shadow-md lg:p-10">
            <CardTypeSwitchComponent />
          </div>
        </div>
      </div>

      {/* "Next Question" button is now rendered here */}
      <Show when={uiState.isAnswered}>
        <div class="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform">
          <Button
            ref={nextButtonRef}
            size="lg"
            onClick={handleNextQuestion}
            class="h-14 rounded-xl bg-orange-500 px-8 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600 focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            <span class="flex items-center gap-2">
              Next Question
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
        </div>
      </Show>
    </div>
  )
}
