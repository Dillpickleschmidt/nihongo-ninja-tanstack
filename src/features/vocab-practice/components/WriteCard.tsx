import { createSignal, createEffect, on, Show } from 'solid-js'
import { Rating, type Grade } from 'ts-fsrs'
import type { PracticeCard } from '../types'

type Props = {
  card: PracticeCard
  onAnswer: (rating: Grade) => Promise<void>
}

export function WriteCard(props: Props) {
  const [userAnswer, setUserAnswer] = createSignal('')
  const [isAnswered, setIsAnswered] = createSignal(false)

  // Reset state when card changes
  createEffect(
    on(
      () => props.card,
      () => {
        setUserAnswer('')
        setIsAnswered(false)
      },
      { defer: true },
    ),
  )

  const isCorrect = () =>
    props.card.validAnswers.some(
      (ans) => ans.toLowerCase() === userAnswer().toLowerCase().trim(),
    )

  const handleSubmit = () => {
    if (!isAnswered()) {
      setIsAnswered(true)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !isAnswered()) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleNext = () => {
    props.onAnswer(isCorrect() ? Rating.Good : Rating.Again)
  }

  return (
    <div>
      <div>{props.card.prompt}</div>

      <div>
        <input
          type="text"
          value={userAnswer()}
          onInput={(e) => setUserAnswer(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          disabled={isAnswered()}
          placeholder="Type your answer..."
        />
      </div>

      <Show when={!isAnswered()}>
        <button onClick={handleSubmit}>Submit</button>
      </Show>

      <Show when={isAnswered()}>
        <p>{isCorrect() ? 'Correct!' : 'Incorrect'}</p>
        <p>Answer: {props.card.validAnswers.join(', ')}</p>
        <button onClick={handleNext}>Next</button>
      </Show>
    </div>
  )
}
