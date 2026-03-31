import { createSignal, Show, For, createMemo, onMount, onCleanup } from "solid-js"
import { Rating, type Grade } from "ts-fsrs"
import { Button3D } from "@/components/Button3D"
import { cn } from "@/utils"
import type { PracticeCard } from "../types"
import {
  TYPE_BADGE_CLASSES,
  getPromptDisplay,
  getMnemonic,
  formatMnemonic,
} from "../utils/card-display"
import {
  generateDistractors,
  shuffleArray,
  type ChoiceOption,
} from "../utils/distractor-generation"
import { playClickSound, playCorrectSound, playErrorSound } from "../utils/select-sound"

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
    const correctOption: ChoiceOption = {
      answer: props.card.validAnswers[0],
      particles: props.card.vocab.particles,
    }
    const distractors = generateDistractors(props.card, props.allCards, 3)
    return shuffleArray([correctOption, ...distractors])
  })

  const handleSelect = (answer: string) => {
    if (isAnswered()) return
    setSelectedAnswer(answer)
    setAnsweredCardId(props.card.key)
    const correct = props.card.validAnswers.some(
      (ans) => ans.toLowerCase() === answer.toLowerCase(),
    )
    correct ? playCorrectSound() : playErrorSound()
  }

  const isCorrect = () =>
    props.card.validAnswers.some(
      (ans) => ans.toLowerCase() === selectedAnswer()?.toLowerCase(),
    )

  const handleNext = () => {
    props.onAnswer(isCorrect() ? Rating.Good : Rating.Again)
  }

  const getButtonState = (answer: string) => {
    if (!isAnswered()) return "default"
    const isCorrectOption = props.card.validAnswers.some(
      (ans) => ans.toLowerCase() === answer.toLowerCase(),
    )
    if (isCorrectOption) return "correct"
    if (answer === selectedAnswer() && !isCorrectOption) return "incorrect"
    return "faded"
  }

  const stateColors: Record<string, string> = {
    default: "rgb(130,130,130)",
    correct: "rgb(16,185,129)",
    incorrect: "rgb(244,63,94)",
    faded: "rgb(60,60,60)",
  }

  const promptDisplay = () => getPromptDisplay(props.card)
  const mnemonic = () => getMnemonic(props.card)
  const progress = () => ((props.currentIndex + 1) / props.totalItems) * 100

  // Keyboard shortcuts: 1-4 to select options
  onMount(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key >= "1" && e.key <= "4") {
        const idx = parseInt(e.key) - 1
        const opts = options()
        if (idx < opts.length) handleSelect(opts[idx].answer)
      }
    }
    document.addEventListener("keydown", handleKeydown)
    onCleanup(() => document.removeEventListener("keydown", handleKeydown))
  })

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
                  "rounded-full px-3 py-1 text-xs font-medium",
                  TYPE_BADGE_CLASSES[props.card.practiceItemType],
                )}
              >
                {props.card.practiceItemType}
              </span>
            </div>

            {/* Question text */}
            <div class="mb-2 text-lg text-muted-foreground">
              {props.card.practiceItemType === "radical"
                ? "What is this radical called?"
                : "What does this mean?"}
            </div>

            {/* Japanese prompt */}
            <Show
              when={promptDisplay().isHtml}
              fallback={
                <div
                  class={cn(
                    "font-japanese font-bold",
                    props.card.practiceItemType === "vocabulary"
                      ? "text-4xl"
                      : "text-6xl",
                  )}
                >
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
              {(option, i) => {
                const state = () => getButtonState(option.answer)
                const isCorrectOption = () =>
                  props.card.validAnswers.some(
                    (ans) =>
                      ans.toLowerCase() === option.answer.toLowerCase(),
                  )

                return (
                  <Button3D
                    color={stateColors[state()]}
                    disabled={isAnswered() && state() === "faded"}
                    class={cn(
                      option.particles?.length ? "text-left" : "text-center",
                      isAnswered() && "pointer-events-none",
                    )}
                    onClick={() => handleSelect(option.answer)}
                  >
                    <div class="flex flex-col items-start w-full">
                      <div class="flex items-center w-full">
                        <span class="text-base md:text-lg">{option.answer}</span>
                        <Show when={isAnswered() && isCorrectOption()}>
                          <span class="ml-2 text-emerald-600">✓</span>
                        </Show>
                        <Show
                          when={
                            isAnswered() &&
                            option.answer === selectedAnswer() &&
                            !isCorrectOption()
                          }
                        >
                          <span class="ml-2 text-rose-600">✗</span>
                        </Show>
                      </div>
                      <Show when={option.particles?.length}>
                        <div class="mt-1 space-y-0.5 text-sm font-light opacity-60">
                          <For each={option.particles}>
                            {(p) => (
                              <div class="font-japanese">
                                {p.label
                                  ? `${p.label} - ${p.particle}`
                                  : `particle: ${p.particle}`}
                              </div>
                            )}
                          </For>
                        </div>
                      </Show>
                    </div>
                  </Button3D>
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
        <div class="fixed bottom-20 left-1/2 -translate-x-1/2 w-48">
          <Button3D
            color={isCorrect() ? "rgb(16,185,129)" : "rgb(244,63,94)"}
            onClick={() => { playClickSound(); handleNext() }}
          >
            Next →
          </Button3D>
        </div>
      </Show>
    </div>
  )
}
