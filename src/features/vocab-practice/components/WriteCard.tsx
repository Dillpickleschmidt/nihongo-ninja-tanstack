import { createSignal, createEffect, on, Show } from 'solid-js'
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
  currentIndex: number
  totalItems: number
  onAnswer: (rating: Grade) => Promise<void>
}

export function WriteCard(props: Props) {
  const [userAnswer, setUserAnswer] = createSignal('')
  const [answeredCardId, setAnsweredCardId] = createSignal<string | null>(null)

  const isAnswered = () => answeredCardId() === props.card.key

  // Clear input when card changes (deferred is fine - no visual flash for empty input)
  createEffect(
    on(
      () => props.card,
      () => setUserAnswer(''),
      { defer: true },
    ),
  )

  const isCorrect = () =>
    props.card.validAnswers.some(
      (ans) => ans.toLowerCase() === userAnswer().toLowerCase().trim(),
    )

  const handleSubmit = () => {
    if (!isAnswered() && userAnswer().trim()) {
      setAnsweredCardId(props.card.key)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !isAnswered() && userAnswer().trim()) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleNext = () => {
    props.onAnswer(isCorrect() ? Rating.Good : Rating.Again)
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

          {/* Write input area */}
          <div class="mt-8 space-y-4">
            <input
              type="text"
              value={userAnswer()}
              onInput={(e) => setUserAnswer(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
              disabled={isAnswered()}
              placeholder="Type your answer..."
              class={cn(
                'w-full rounded-xl border-2 bg-card/70 px-4 py-4 text-center text-lg font-medium outline-none transition-all',
                'placeholder:text-muted-foreground/50',
                !isAnswered() &&
                'border-card-foreground/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20',
                isAnswered() &&
                isCorrect() &&
                'border-emerald-500 bg-emerald-500/10 text-emerald-600',
                isAnswered() &&
                !isCorrect() &&
                'border-rose-500 bg-rose-500/10 text-rose-600',
              )}
            />

            {/* Submit button (only show before answering) */}
            <Show when={!isAnswered()}>
              <Button
                type="button"
                size="lg"
                onClick={handleSubmit}
                disabled={!userAnswer().trim()}
                class={cn(
                  'w-full h-14 rounded-xl text-lg font-semibold',
                  userAnswer().trim()
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:from-cyan-600 hover:to-blue-600'
                    : 'bg-muted text-muted-foreground cursor-not-allowed hover:bg-muted',
                )}
              >
                Check Answer
              </Button>
            </Show>

            {/* Result feedback */}
            <Show when={isAnswered()}>
              <div
                class={cn(
                  'rounded-lg p-3 text-center text-sm font-medium',
                  isCorrect()
                    ? 'bg-emerald-500/10 text-emerald-600'
                    : 'bg-rose-500/10 text-rose-600',
                )}
              >
                <Show
                  when={isCorrect()}
                  fallback={
                    <>
                      <p>Not quite! The correct answer is:</p>
                      <p class="mt-1 font-japanese text-lg font-bold">
                        {props.card.validAnswers.join(', ')}
                      </p>
                    </>
                  }
                >
                  <p>Correct! 🎉</p>
                </Show>
              </div>
            </Show>
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
