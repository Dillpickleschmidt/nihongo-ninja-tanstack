// vocab-practice/components/pages/PracticePageComponent.tsx
import { createMemo, createEffect, Show } from "solid-js"
import {
  useVocabPracticeContext,
  CARDS_UNTIL_REVIEW,
} from "../../context/VocabPracticeContext"
import CardTypeSwitchComponent from "../CardTypeSwitchComponent"
import { Button } from "@/components/ui/button"
import { Rating } from "ts-fsrs"

export default function PracticePageComponent() {
  const { state, setState } = useVocabPracticeContext()
  const manager = () => state.manager!
  let nextButtonRef: HTMLButtonElement | undefined

  // Calculate the initial count ONCE when the component is created.
  const initialModuleCount = Array.from(manager().getCardMap().values()).filter(
    (card) => card.sessionStyle !== "flashcard",
  ).length

  // This memo correctly calculates the CURRENT number of remaining module cards
  const remainingModuleCards = createMemo(() => {
    const mgr = manager()
    if (!mgr) return 0
    // By accessing `state.activeQueue`, we make this memo reactive to answer events.
    const activeQueueKeys = state.activeQueue
    const activeQueueCards = activeQueueKeys.map(
      (key) => mgr.getCardFromMap(key)!,
    )
    const activeModuleCardsCount = activeQueueCards.filter(
      (c) => c.sessionStyle !== "flashcard",
    ).length
    return mgr.getSourceQueueSizes().module + activeModuleCardsCount
  })

  // Progress for the current review batch
  const reviewProgress = createMemo(() => {
    const currentProgress = state.recentReviewHistory.length
    return (currentProgress / CARDS_UNTIL_REVIEW) * 100
  })

  // This calculation now works correctly because `initialModuleCount` is a stable number
  const overallProgress = createMemo(() => {
    const total = initialModuleCount
    if (total === 0) return 0
    const done = total - remainingModuleCards()
    return (done / total) * 100
  })

  const overallProgressText = createMemo(() => {
    const total = initialModuleCount
    const done = total - remainingModuleCards()
    return `${done}/${total} terms`
  })

  // This is the new handler for the "Next Question" button
  async function handleNextQuestion() {
    if (!state.lastRating) return

    const card = manager().getCurrentCard()
    const rating = state.lastRating
    const isCorrect = rating !== Rating.Again

    // Await the manager to ensure all its work (including DB save) is done.
    await manager().processAnswer(rating)

    // Now that the manager is fully updated, sync the UI state.
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
        isAnswered: false, // Reset for the next card
        lastRating: null,
      }
    })
  }

  // Focus the button when it appears
  createEffect(() => {
    if (state.isAnswered && nextButtonRef) {
      nextButtonRef.focus()
    }
  })

  return (
    <div class="min-h-screen">
      {/* Progress header */}
      <div class="bg-background/90 border-card-foreground fixed top-0 right-0 left-0 z-40 border-b backdrop-blur-sm">
        <div class="px-4 pt-2 pb-2.5">
          <div class="mx-auto max-w-3xl">
            <div class="mb-2 flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1.5">
                  <div class="h-2 w-2 rounded-full bg-blue-500" />
                  <span class="text-muted-foreground/80 text-xs font-medium">
                    Session Progress
                  </span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="h-2 w-2 rounded-full bg-orange-500" />
                  <span class="text-muted-foreground/80 text-xs font-medium">
                    Review Batch
                  </span>
                </div>
              </div>
              <span class="text-xs font-medium text-blue-400">
                {overallProgressText()}
              </span>
            </div>
            <div class="relative">
              <div class="bg-muted h-2 overflow-hidden rounded-full">
                <div
                  class="h-full rounded-r-full bg-orange-500 transition-all duration-500 ease-out"
                  style={`width: ${reviewProgress()}%`}
                />
              </div>
              <div class="absolute top-0 right-0 left-0 h-2 overflow-hidden rounded-full">
                <div
                  class="h-full rounded-r-full bg-blue-500/80 transition-all duration-500 ease-out"
                  style={`width: ${overallProgress()}%`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div class="pt-28 pb-28">
        <div class="mx-auto max-w-3xl px-4">
          <div class="bg-card border-card-foreground rounded-2xl border p-8 shadow-md lg:p-10">
            <CardTypeSwitchComponent />
          </div>
        </div>
      </div>

      {/* "Next Question" button is now rendered here */}
      <Show when={state.isAnswered}>
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
