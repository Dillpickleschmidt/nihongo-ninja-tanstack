import { createSignal, createEffect, on, Show, For } from 'solid-js'
import { Rating, type Grade } from 'ts-fsrs'
import type { PracticeCard } from '../types'

type Props = {
  card: PracticeCard
  onAnswer: (rating: Grade) => Promise<void>
}

export function MultipleChoiceCard(props: Props) {
  const [isAnswered, setIsAnswered] = createSignal(false)
  const [selectedAnswer, setSelectedAnswer] = createSignal<string | null>(null)

  // Reset state when card changes
  createEffect(
    on(
      () => props.card,
      () => {
        setIsAnswered(false)
        setSelectedAnswer(null)
      },
      { defer: true },
    ),
  )

  // For now, just show the valid answers as "options"
  // TODO: Generate proper distractors
  const options = () => props.card.validAnswers.slice(0, 4)

  const handleSelect = (answer: string) => {
    if (isAnswered()) return
    setSelectedAnswer(answer)
    setIsAnswered(true)
  }

  const isCorrect = () =>
    props.card.validAnswers.includes(selectedAnswer() || '')

  const handleNext = () => {
    props.onAnswer(isCorrect() ? Rating.Good : Rating.Again)
  }

  return (
    <div>
      <div>{props.card.prompt}</div>

      <div>
        <For each={options()}>
          {(option) => (
            <button
              onClick={() => handleSelect(option)}
              disabled={isAnswered()}
            >
              {option}
            </button>
          )}
        </For>
      </div>

      <Show when={isAnswered()}>
        <p>{isCorrect() ? 'Correct!' : 'Incorrect'}</p>
        <button onClick={handleNext}>Next</button>
      </Show>
    </div>
  )
}
