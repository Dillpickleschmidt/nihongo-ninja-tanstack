// vocab-practice/components/pages/ReviewPageComponent.tsx
import { For, Show, createMemo } from "solid-js"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import type { PracticeCard } from "../../types"

// Define the shape of the data needed for the summary component
type ReviewSummaryData = {
  card: PracticeCard
  wasCorrect: boolean
}

export default function ReviewPageComponent() {
  const { state, setState } = useVocabPracticeContext()
  const manager = () => state.manager!

  // Create the list of cards for review from the recentReviewHistory
  const reviewedItems = createMemo(() => {
    // Use a Map to get the last result for each unique key, preserving order
    const uniqueLastReviews = new Map<string, boolean>()
    for (const review of state.recentReviewHistory) {
      uniqueLastReviews.set(review.key, review.wasCorrect)
    }

    const summaryData: ReviewSummaryData[] = []
    uniqueLastReviews.forEach((wasCorrect, key) => {
      const card = manager().getCardFromMap(key)
      if (card) {
        summaryData.push({ card, wasCorrect })
      }
    })
    return summaryData
  })

  function handleContinue() {
    // Clear the batch history
    setState("recentReviewHistory", [])

    // Determine the next page to go to
    const nextStyle = manager().getCurrentCard().sessionStyle
    const nextPage = nextStyle === "flashcard" ? "fsrs-flashcard" : "practice"
    setState("currentPage", nextPage)
  }

  return (
    <div class="min-h-screen">
      <div class="px-4 pt-14 pb-10 lg:pt-18 lg:pb-12">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-3xl font-bold lg:text-5xl">
            See the terms you practiced!
          </h1>
        </div>
      </div>
      <div class="px-4 pb-28">
        <div class="mx-auto max-w-3xl">
          <div class="grid gap-4 lg:gap-5">
            <For each={reviewedItems()}>
              {(item) => (
                <ReviewCardSummary
                  card={item.card}
                  wasCorrect={item.wasCorrect}
                />
              )}
            </For>
          </div>
        </div>
      </div>
      <div class="fixed right-0 bottom-0 left-0 z-50 p-4">
        <div class="mx-auto max-w-md">
          <Button
            size="lg"
            onClick={handleContinue}
            class="h-14 w-full rounded-xl bg-orange-500 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600"
          >
            <span class="flex items-center justify-center gap-2">
              Continue
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
      </div>
    </div>
  )
}

function ReviewCardSummary(props: { card: PracticeCard; wasCorrect: boolean }) {
  const { state } = useVocabPracticeContext()
  const wasAnsweredIncorrectly = () => !props.wasCorrect

  const answerToDisplay = createMemo(() => {
    if (state.settings.practiceMode === "kana") {
      return props.card.vocab.hiragana.join(", ")
    }
    return props.card.validAnswers.join(", ")
  })

  const promptClasses = createMemo(() => {
    const baseColor = wasAnsweredIncorrectly()
      ? "text-red-500"
      : "text-orange-400 saturate-[125%]"
    const baseLayout = "mb-3 font-bold"
    const fontSize =
      state.settings.practiceMode === "kana"
        ? "text-lg lg:text-xl" // Smaller for English prompt
        : "text-xl lg:text-2xl" // Larger for Japanese prompt
    return `${baseColor} ${baseLayout} ${fontSize}`
  })

  const answerClasses = createMemo(() => {
    const baseLayout = "text-primary ml-4 font-semibold"
    const fontSize =
      state.settings.practiceMode === "kana"
        ? "text-lg lg:text-xl" // Larger for Japanese answer
        : "text-base lg:text-lg" // Smaller for English answer
    return `${baseLayout} ${fontSize}`
  })

  return (
    <div class="bg-card relative overflow-hidden rounded-xl p-5 shadow-md">
      <p class={promptClasses()}>
        <span class="mr-2">{props.card.prompt}</span>
      </p>
      <div class="space-y-1.5">
        <p class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
          Answer:
        </p>
        <p class={answerClasses()}>{answerToDisplay()}</p>
      </div>
      <div
        class={`absolute top-0 right-0 h-full ${wasAnsweredIncorrectly() ? "w-4 bg-red-500" : "w-2 bg-emerald-500/50"}`}
      />
    </div>
  )
}
