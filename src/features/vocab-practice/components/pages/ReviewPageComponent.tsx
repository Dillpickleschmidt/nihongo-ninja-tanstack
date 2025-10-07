// vocab-practice/components/pages/ReviewPageComponent.tsx
import { For, Show, createMemo, onMount } from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import type { PracticeCard } from "../../types"
import { PracticeCardContainer } from "../shared/PracticeCardContainer"
import { ActionButton } from "../shared/ActionButton"

// Define the shape of the data needed for the summary component
type ReviewSummaryData = {
  card: PracticeCard
  wasCorrect: boolean
}

export default function ReviewPageComponent() {
  const {
    uiState,
    setUIState,
    currentCard,
    getCardFromMap,
    addTimeAndQuestions,
  } = useVocabPracticeContext()

  let continueButtonRef: HTMLButtonElement | undefined

  // Focus "Continue" button on mount
  onMount(() => {
    setTimeout(() => {
      continueButtonRef?.focus()
    }, 0)
  })

  // Create the list of cards for review from the recentReviewHistory
  const reviewedItems = createMemo(() => {
    const uniqueLastReviews = new Map<string, boolean>()
    for (const review of uiState.recentReviewHistory) {
      uniqueLastReviews.set(review.key, review.wasCorrect)
    }

    const summaryData: ReviewSummaryData[] = []
    uniqueLastReviews.forEach((wasCorrect, key) => {
      const card = getCardFromMap(key)
      if (card) {
        summaryData.push({ card, wasCorrect })
      }
    })
    return summaryData
  })

  function handleContinue() {
    // Track time (no questions)
    addTimeAndQuestions(5, false)

    // Clear the batch history
    setUIState("recentReviewHistory", [])

    // Determine the next page to go to
    const nextStyle = currentCard()?.sessionStyle
    const nextPage = nextStyle === "flashcard" ? "fsrs-flashcard" : "practice"
    setUIState("currentPage", nextPage)
  }

  return (
    <div class="min-h-screen">
      <div class="px-4 pt-14 pb-10 lg:pt-18 lg:pb-12">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-2xl font-bold sm:text-3xl lg:text-5xl">
            See the terms you practiced!
          </h1>
        </div>
      </div>
      <div class="mx-auto max-w-3xl px-4 pb-28">
        <div class="grid gap-3 sm:gap-4 lg:gap-5">
          <For each={reviewedItems()}>
            {(item) => (
              <PracticeCardContainer>
                <ReviewCardSummary
                  card={item.card}
                  wasCorrect={item.wasCorrect}
                />
              </PracticeCardContainer>
            )}
          </For>
        </div>
      </div>
      <div class="fixed bottom-6 left-1/2 w-full max-w-md -translate-x-1/2 px-4">
        <ActionButton
          ref={continueButtonRef}
          onClick={handleContinue}
          variant="primary"
        >
          Continue →
        </ActionButton>
      </div>
    </div>
  )
}

function ReviewCardSummary(props: { card: PracticeCard; wasCorrect: boolean }) {
  const wasAnsweredIncorrectly = () => !props.wasCorrect

  const answerToDisplay = () => {
    if (props.card.practiceMode === "spellings") {
      return props.card.vocab.hiragana.join(", ")
    }
    return props.card.validAnswers.join(", ")
  }

  return (
    <div>
      <p
        class={`mb-2 font-bold sm:mb-3 ${
          wasAnsweredIncorrectly()
            ? "text-red-500"
            : "text-orange-400 saturate-[125%]"
        } text-lg sm:text-xl lg:text-2xl`}
      >
        {props.card.prompt}
      </p>
      <div class="space-y-1.5">
        <p class="text-muted-foreground text-xs font-medium tracking-wider uppercase sm:text-sm">
          Answer:
        </p>
        <p class="text-primary ml-3 text-base font-semibold sm:ml-4 sm:text-lg lg:text-xl">
          {answerToDisplay()}
        </p>
      </div>
      <Show when={props.card.sessionScope === "review"}>
        <p class="text-muted-foreground absolute right-6 bottom-3 text-xs font-medium">
          External Review
        </p>
      </Show>
    </div>
  )
}
