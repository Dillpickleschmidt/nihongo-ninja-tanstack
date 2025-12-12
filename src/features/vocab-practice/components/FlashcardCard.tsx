import { createSignal, createEffect, on, Show } from 'solid-js'
import { Rating, type Grade } from 'ts-fsrs'
import type { PracticeCard } from '../types'

type Props = {
  card: PracticeCard
  onAnswer: (rating: Grade) => Promise<void>
}

export function FlashcardCard(props: Props) {
  const [isRevealed, setIsRevealed] = createSignal(false)

  // Reset state when card changes
  createEffect(
    on(
      () => props.card,
      () => {
        setIsRevealed(false)
      },
      { defer: true },
    ),
  )

  return (
    <div>
      <div>{props.card.prompt}</div>

      <Show when={!isRevealed()}>
        <button onClick={() => setIsRevealed(true)}>Show Answer</button>
      </Show>

      <Show when={isRevealed()}>
        <div>Answer: {props.card.validAnswers.join(', ')}</div>

        <div>
          <button onClick={() => props.onAnswer(Rating.Again)}>Again</button>
          <button onClick={() => props.onAnswer(Rating.Hard)}>Hard</button>
          <button onClick={() => props.onAnswer(Rating.Good)}>Good</button>
          <button onClick={() => props.onAnswer(Rating.Easy)}>Easy</button>
        </div>
      </Show>
    </div>
  )
}
