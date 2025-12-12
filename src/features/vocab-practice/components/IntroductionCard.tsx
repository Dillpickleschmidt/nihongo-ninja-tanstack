import { Show } from 'solid-js'
import type { PracticeCard } from '../types'

type Props = {
  card: PracticeCard
  onContinue: () => void
}

export function IntroductionCard(props: Props) {
  return (
    <div>
      <div>{props.card.practiceItemType}</div>
      <div>{props.card.prompt}</div>
      <div>Meanings: {props.card.validAnswers.join(', ')}</div>

      <Show when={props.card.vocab.mnemonics}>
        <div>
          <p>Mnemonic: {props.card.vocab.mnemonics?.kanji?.[0]}</p>
          <Show when={props.card.vocab.mnemonics?.reading?.[0]}>
            <p>Reading: {props.card.vocab.mnemonics?.reading?.[0]}</p>
          </Show>
        </div>
      </Show>

      <button onClick={props.onContinue}>Continue</button>
    </div>
  )
}
