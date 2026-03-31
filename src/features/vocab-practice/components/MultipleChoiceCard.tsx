import { createSignal, Show, For, createMemo, onMount, onCleanup } from "solid-js"
import { Rating, type Grade } from "ts-fsrs"
import { Button3D } from "@/components/Button3D"
import { cn } from "@/utils"
import type { PracticeCard } from "../types"
import { playCorrectSound, playErrorSound } from "../utils/select-sound"
import { getMnemonic } from "../utils/card-display"
import {
  generateDistractors,
  shuffleArray,
  type ChoiceOption,
} from "../utils/distractor-generation"
import { QuestionDisplay } from "./QuestionDisplay"
import { MnemonicDisplay } from "./MnemonicDisplay"
import { PracticeActionBar } from "./PracticeActionBar"
import { PRACTICE_LAYOUT } from "../VocabPractice"

const STATE_COLORS: Record<string, string> = {
  default: "var(--dynamic-accent)",
  correct: "rgb(16,185,129)",
  incorrect: "rgb(244,63,94)",
  faded: "rgb(60,60,60)",
}

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

  const mnemonic = () => getMnemonic(props.card)

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
    <div class={PRACTICE_LAYOUT}>
      <QuestionDisplay card={props.card} />

      {/* Multiple choice options (2x2 grid) */}
      <div class="w-full max-w-lg grid grid-cols-2 gap-3">
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
                color={STATE_COLORS[state()]}
                disabled={isAnswered() && state() === "faded"}
                class={cn(
                  option.particles?.length ? "text-left" : "text-center",
                  isAnswered() && "pointer-events-none",
                )}
                onClick={() => handleSelect(option.answer)}
              >
                <div class={cn("flex flex-col w-full", option.particles?.length ? "items-start" : "items-center")}>
                  <div class="flex items-center">
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
                    <div class="text-sm font-light opacity-60">
                      <For each={option.particles}>
                        {(p) => (
                          <div class="font-japanese leading-tight">
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

      <Show when={isAnswered()}>
        <MnemonicDisplay mnemonic={mnemonic()} />
      </Show>

      {/* Bottom bar */}
      <Show when={isAnswered()}>
        <PracticeActionBar
          state={isCorrect() ? "correct" : "wrong"}
          onAction={handleNext}
          feedbackText={props.card.validAnswers[0]}
        />
      </Show>
    </div>
  )
}
