import { Match, Switch, Show, createSignal, createMemo } from "solid-js"
import type { PracticeManagerHook } from "./logic/usePracticeManager"
import { Rating, type Grade } from "ts-fsrs"
import { IntroductionCard } from "./components/IntroductionCard"
import { MultipleChoiceCard } from "./components/MultipleChoiceCard"
import { WriteCard } from "./components/WriteCard"
import { FlashcardCard } from "./components/FlashcardCard"
import { FinishScreen } from "./components/FinishScreen"
import { ReviewScreen } from "./components/ReviewScreen"
import { PracticeHeader } from "./components/PracticeHeader"
import type { PracticeCard } from "./types"

export const PRACTICE_LAYOUT =
  "flex w-full flex-col items-center gap-4 px-2 sm:w-4/5 sm:gap-8"

const CARDS_UNTIL_REVIEW = 7

type ReviewResult = {
  card: PracticeCard
  correct: boolean
  missCount?: number
}

type Props = {
  practiceManager: PracticeManagerHook
  deckName: string
  mode: "meanings" | "spellings"
  onAnswer: (rating: Grade) => Promise<void>
  onIntroductionComplete: () => void
  onProgressEvent?: (progressUnitsDelta: number, questionsAnsweredDelta: number) => void
  onReturn?: () => void
}

export function VocabPractice(props: Props) {
  const card = () => props.practiceManager.currentCard()
  const isFinished = () => props.practiceManager.isFinished()
  const progress = () => props.practiceManager.moduleProgress()

  // Track results - single array with index for batching
  const [allResults, setAllResults] = createSignal<ReviewResult[]>([])
  const [lastReviewIndex, setLastReviewIndex] = createSignal(0)
  const [showReview, setShowReview] = createSignal(false)

  // Derive recent history from allResults (cards since last review)
  const recentHistory = () => allResults().slice(lastReviewIndex())

  // All cards for distractor generation
  const allCards = createMemo(() =>
    Array.from(props.practiceManager.cardMap().values()),
  )
  const currentIndex = () => progress().completed

  const totalItems = createMemo(() => {
    return (
      progress().total ||
      allCards().filter((c) => c.sessionScope === "module").length
    )
  })

  // Stats counters
  const correctCount = () => allResults().filter((r) => r.correct).length
  const wrongCount = () => allResults().filter((r) => !r.correct).length

  // Handle answer with result tracking
  const handleAnswer = async (rating: Grade) => {
    const currentCard = card()
    if (!currentCard) return

    const isCorrect = rating !== Rating.Again
    setAllResults((prev) => [
      ...prev,
      { card: currentCard, correct: isCorrect },
    ])

    // Show review every 7 cards
    if (allResults().length - lastReviewIndex() >= CARDS_UNTIL_REVIEW) {
      setShowReview(true)
    }

    if (currentCard.sessionStyle === "multiple-choice") {
      props.onProgressEvent?.(5, 1)
    } else if (currentCard.sessionStyle === "write") {
      props.onProgressEvent?.(10, 1)
    } else if (currentCard.sessionStyle === "flashcard") {
      props.onProgressEvent?.(5, 1)
    }

    await props.onAnswer(rating)
  }

  // Continue from review - advance index for next batch
  const handleReviewContinue = () => {
    setShowReview(false)
    setLastReviewIndex(allResults().length)
    props.onProgressEvent?.(5, 0)
  }

  // Return to vocab home
  const handleReturn = () => {
    props.onProgressEvent?.(10, 0)
    if (props.onReturn) {
      props.onReturn()
    } else {
      window.location.href = "/vocab"
    }
  }

  return (
    <div class="flex flex-col items-center gap-2 md:gap-4">
      {/* Top bar — shown during active practice */}
      <Show when={!isFinished() && !showReview()}>
        <PracticeHeader
          currentIndex={currentIndex()}
          totalItems={totalItems()}
          correctCount={correctCount()}
          wrongCount={wrongCount()}
          onQuit={handleReturn}
        />
      </Show>

      {/* Review Screen (shown after practice, before finish) */}
      <Show when={showReview()}>
        <ReviewScreen
          results={recentHistory()}
          onContinue={handleReviewContinue}
        />
      </Show>

      {/* Finish Screen */}
      <Show when={isFinished()}>
        <FinishScreen
          deckName={props.deckName}
          results={allResults()}
          onReturn={handleReturn}
        />
      </Show>

      {/* Active practice cards - keyed Show forces remount on card change */}
      <Show when={!isFinished() && !showReview()}>
        <Show when={card()} keyed>
          {(currentCard) => (
            <Switch>
              <Match when={currentCard.sessionStyle === "introduction"}>
                <IntroductionCard
                  card={currentCard}
                  currentIndex={currentIndex()}
                  totalItems={totalItems()}
                  onContinue={() => {
                    props.onProgressEvent?.(10, 1)
                    props.onIntroductionComplete()
                  }}
                />
              </Match>
              <Match when={currentCard.sessionStyle === "multiple-choice"}>
                <MultipleChoiceCard
                  card={currentCard}
                  allCards={allCards()}
                  currentIndex={currentIndex()}
                  totalItems={totalItems()}
                  onAnswer={handleAnswer}
                />
              </Match>
              <Match when={currentCard.sessionStyle === "write"}>
                <WriteCard
                  card={currentCard}
                  currentIndex={currentIndex()}
                  totalItems={totalItems()}
                  onAnswer={handleAnswer}
                />
              </Match>
              <Match when={currentCard.sessionStyle === "flashcard"}>
                <FlashcardCard
                  card={currentCard}
                  currentIndex={currentIndex()}
                  totalItems={totalItems()}
                  onAnswer={handleAnswer}
                />
              </Match>
            </Switch>
          )}
        </Show>
      </Show>

      {/* Bottom spacer for fixed bottom bar */}
      <div class="h-32" />
    </div>
  )
}
