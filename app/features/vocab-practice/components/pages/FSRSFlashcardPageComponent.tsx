// vocab-practice/components/pages/FSRSFlashcardPageComponent.tsx
import { createSignal, Show, createMemo } from "solid-js"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Rating } from "ts-fsrs"

export default function FSRSFlashcardPageComponent() {
  const { state, setState } = useVocabPracticeContext()
  const manager = () => state.manager!

  // Create a reactive memo that depends on the activeQueue from the store.
  const currentCard = createMemo(() => {
    if (!state.manager || state.activeQueue.length === 0) {
      return null
    }
    return state.manager.getCardFromMap(state.activeQueue[0])
  })

  const [showAnswer, setShowAnswer] = createSignal(false)

  const handleAnswer = async (rating: Rating) => {
    const card = currentCard()
    if (!card) return

    const isCorrect = rating !== Rating.Again

    // 1. Call the manager to update its internal state
    await manager().processAnswer(rating)

    // Sync the UI state
    setState((prevState) => {
      const newHistory = [
        ...prevState.recentReviewHistory,
        { key: card.key, wasCorrect: isCorrect },
      ]

      const newIncorrectMap = new Map(prevState.incorrectAnswerMap)
      if (!isCorrect) {
        const currentCount = newIncorrectMap.get(card.key) ?? 0
        newIncorrectMap.set(card.key, currentCount + 1)
      }

      const newActiveQueue = manager().getActiveQueue()

      return {
        ...prevState,
        recentReviewHistory: newHistory,
        incorrectAnswerMap: newIncorrectMap,
        activeQueue: newActiveQueue,
      }
    })

    setShowAnswer(false) // Hide answer for the next card
  }

  return (
    <Show when={currentCard()} fallback={<div>Loading...</div>}>
      {(card) => (
        <div class="flex min-h-screen flex-col items-center justify-center p-4">
          <div class="bg-card border-card-foreground w-full max-w-3xl rounded-2xl border p-8 shadow-md lg:p-10">
            <div class="flex min-h-48 flex-col items-center justify-center text-center">
              <h1 class="font-japanese text-5xl lg:text-6xl">
                {card().prompt}
              </h1>
              <Show
                when={showAnswer()}
                fallback={
                  <Button
                    onClick={() => setShowAnswer(true)}
                    class="mt-8"
                    variant="outline"
                  >
                    Show Answer
                  </Button>
                }
              >
                <p class="mt-6 text-2xl font-semibold text-orange-400">
                  {card().validAnswers.join(", ")}
                </p>
              </Show>
            </div>
          </div>
          <Show when={showAnswer()}>
            <div class="mt-8 grid w-full max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
              <Button
                onClick={() => handleAnswer(Rating.Again)}
                class="h-14 bg-red-600 text-base font-semibold text-white hover:bg-red-700"
              >
                Again
              </Button>
              <Button
                onClick={() => handleAnswer(Rating.Hard)}
                class="h-14 bg-yellow-500 text-base font-semibold text-white hover:bg-yellow-600"
              >
                Hard
              </Button>
              <Button
                onClick={() => handleAnswer(Rating.Good)}
                class="h-14 bg-green-600 text-base font-semibold text-white hover:bg-green-700"
              >
                Good
              </Button>
              <Button
                onClick={() => handleAnswer(Rating.Easy)}
                class="h-14 bg-blue-600 text-base font-semibold text-white hover:bg-blue-700"
              >
                Easy
              </Button>
            </div>
          </Show>
        </div>
      )}
    </Show>
  )
}
