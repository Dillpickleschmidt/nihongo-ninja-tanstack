import { createSignal, Show, For, createMemo } from 'solid-js'
import { Rating, type Grade } from 'ts-fsrs'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils'
import type { PracticeCard } from '../types'
import {
  TYPE_BADGE_CLASSES,
  getPromptDisplay,
  getMnemonic,
  formatMnemonic,
} from '../utils/card-display'

type Props = {
  card: PracticeCard
  allCards: PracticeCard[]
  currentIndex: number
  totalItems: number
  onAnswer: (rating: Grade) => Promise<void>
}

export function MultipleChoiceCard(props: Props) {
  const [answeredCardId, setAnsweredCardId] = createSignal<string | null>(null)
  const [selectedAnswer, setSelectedAnswer] = createSignal<string | null>(null)

  const isAnswered = () => answeredCardId() === props.card.key

  // Generate options with distractors
  const options = createMemo(() => {
    const correctAnswer = props.card.validAnswers[0]
    const distractors = generateDistractors(props.card, props.allCards, 3)
    return shuffleArray([correctAnswer, ...distractors])
  })

  const handleSelect = (answer: string) => {
    if (isAnswered()) return
    setSelectedAnswer(answer)
    setAnsweredCardId(props.card.key)
  }

  const isCorrect = () =>
    props.card.validAnswers.some(
      (ans) => ans.toLowerCase() === selectedAnswer()?.toLowerCase(),
    )

  const handleNext = () => {
    props.onAnswer(isCorrect() ? Rating.Good : Rating.Again)
  }

  const getButtonState = (option: string) => {
    if (!isAnswered()) return 'default'
    const isCorrectOption = props.card.validAnswers.some(
      (ans) => ans.toLowerCase() === option.toLowerCase(),
    )
    if (isCorrectOption) return 'correct'
    if (option === selectedAnswer() && !isCorrectOption) return 'incorrect'
    return 'faded'
  }

  const stateClasses = {
    default:
      'bg-card/70 border-card-foreground/30 hover:bg-card/90 hover:border-card-foreground/50 cursor-pointer',
    correct: 'bg-emerald-500/20 border-emerald-500 text-emerald-600',
    incorrect: 'bg-rose-500/20 border-rose-500 text-rose-600',
    faded: 'bg-card/30 border-card-foreground/10 opacity-50',
  }

  const promptDisplay = () => getPromptDisplay(props.card)
  const mnemonic = () => getMnemonic(props.card)
  const progress = () => ((props.currentIndex + 1) / props.totalItems) * 100

  return (
    <div class="flex flex-col items-center p-4">
      {/* Progress indicator */}
      <div class="mb-8 text-center">
        <span class="text-sm font-medium text-muted-foreground">
          Practice {props.currentIndex + 1} of {props.totalItems}
        </span>
        <div class="mx-auto mt-2 h-1 w-48 overflow-hidden rounded-full bg-muted">
          <div
            class="h-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300"
            style={{ width: `${progress()}%` }}
          />
        </div>
      </div>

      {/* Main practice card */}
      <div class="w-full max-w-lg">
        <div class="rounded-2xl border border-card-foreground/20 bg-card/60 p-8 shadow-xl backdrop-blur-md">
          {/* Prompt section */}
          <div class="text-center">
            {/* Type badge */}
            <div class="mb-2 flex justify-center">
              <span
                class={cn(
                  'rounded-full px-3 py-1 text-xs font-medium',
                  TYPE_BADGE_CLASSES[props.card.practiceItemType],
                )}
              >
                {props.card.practiceItemType}
              </span>
            </div>

            {/* Question text */}
            <div class="mb-2 text-lg text-muted-foreground">
              {props.card.practiceItemType === 'radical' ? 'What is this radical called?' : 'What does this mean?'}
            </div>

            {/* Japanese prompt */}
            <Show
              when={promptDisplay().isHtml}
              fallback={
                <div class={cn(
                  'font-japanese font-bold',
                  props.card.practiceItemType === 'vocabulary' ? 'text-4xl' : 'text-6xl'
                )}>
                  {promptDisplay().text}
                </div>
              }
            >
              <div
                class="font-japanese text-4xl font-bold"
                innerHTML={promptDisplay().html}
              />
            </Show>
          </div>

          {/* Multiple choice options (2x2 grid) */}
          <div class="mt-8 grid grid-cols-2 gap-3">
            <For each={options()}>
              {(option) => {
                const state = () => getButtonState(option)
                const isCorrectOption = () =>
                  props.card.validAnswers.some(
                    (ans) => ans.toLowerCase() === option.toLowerCase(),
                  )

                return (
                  <button
                    type="button"
                    onClick={() => handleSelect(option)}
                    disabled={isAnswered()}
                    class={cn(
                      'rounded-xl border-2 p-4 text-center transition-all duration-200',
                      'font-medium',
                      stateClasses[state()],
                      isAnswered() && 'cursor-default',
                    )}
                  >
                    <span class="text-sm md:text-base">{option}</span>
                    <Show when={isAnswered() && isCorrectOption()}>
                      <span class="ml-2 text-emerald-500">✓</span>
                    </Show>
                    <Show when={isAnswered() && option === selectedAnswer() && !isCorrectOption()}>
                      <span class="ml-2 text-rose-500">✗</span>
                    </Show>
                  </button>
                )
              }}
            </For>
          </div>

          {/* Mnemonic section (shown after answering) */}
          <Show when={isAnswered() && mnemonic()}>
            <div class="mt-6 rounded-lg bg-muted/50 p-4">
              <h4 class="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Mnemonic
              </h4>
              <p
                class="text-sm leading-relaxed text-foreground/80"
                innerHTML={formatMnemonic(mnemonic()!)}
              />
            </div>
          </Show>
        </div>
      </div>

      {/* Next button */}
      <Show when={isAnswered()}>
        <div class="fixed bottom-8 left-1/2 -translate-x-1/2">
          <Button
            size="lg"
            class={cn(
              'h-14 rounded-xl px-12 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl',
              isCorrect()
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
                : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600',
            )}
            onClick={handleNext}
          >
            Next Question →
          </Button>
        </div>
      </Show>
    </div>
  )
}

// Helper functions

function generateDistractors(
  currentCard: PracticeCard,
  allCards: PracticeCard[],
  count: number,
): string[] {
  const correctAnswers = currentCard.validAnswers.map((a) => a.toLowerCase())

  // Get all possible answers of the same type
  const sameTypeCards = allCards.filter(
    (card) => card.practiceItemType === currentCard.practiceItemType,
  )
  const otherAnswers = sameTypeCards
    .flatMap((card) => card.validAnswers)
    .filter((answer) => !correctAnswers.includes(answer.toLowerCase()))

  // If not enough same-type distractors, add from other types
  const allOtherAnswers = allCards
    .flatMap((card) => card.validAnswers)
    .filter((answer) => !correctAnswers.includes(answer.toLowerCase()))

  const distractorPool = otherAnswers.length >= count ? otherAnswers : allOtherAnswers

  // Shuffle and take required count (deduplicated)
  const uniqueDistractors = [...new Set(distractorPool)]
  const shuffled = shuffleArray(uniqueDistractors)
  return shuffled.slice(0, count)
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
