import { Match, Switch, Show } from 'solid-js'
import type { PracticeManagerHook } from './logic/usePracticeManager'
import type { Grade } from 'ts-fsrs'
import { IntroductionCard } from './components/IntroductionCard'
import { MultipleChoiceCard } from './components/MultipleChoiceCard'
import { WriteCard } from './components/WriteCard'
import { FlashcardCard } from './components/FlashcardCard'
import { FinishScreen } from './components/FinishScreen'
import { ProgressHeader } from './components/ProgressHeader'

type Props = {
  practiceManager: PracticeManagerHook
  deckName: string
  mode: 'meanings' | 'spellings'
  onAnswer: (rating: Grade) => Promise<void>
  onIntroductionComplete: () => void
}

export function VocabPractice(props: Props) {
  const card = () => props.practiceManager.currentCard()
  const isFinished = () => props.practiceManager.isFinished()
  const progress = () => props.practiceManager.moduleProgress()

  return (
    <div>
      <ProgressHeader
        completed={progress().completed}
        total={progress().total}
        deckName={props.deckName}
      />

      <Show when={isFinished()}>
        <FinishScreen />
      </Show>

      <Show when={!isFinished() && card()}>
        {(currentCard) => (
          <Switch>
            <Match when={currentCard().sessionStyle === 'introduction'}>
              <IntroductionCard
                card={currentCard()}
                onContinue={props.onIntroductionComplete}
              />
            </Match>
            <Match when={currentCard().sessionStyle === 'multiple-choice'}>
              <MultipleChoiceCard
                card={currentCard()}
                onAnswer={props.onAnswer}
              />
            </Match>
            <Match when={currentCard().sessionStyle === 'write'}>
              <WriteCard card={currentCard()} onAnswer={props.onAnswer} />
            </Match>
            <Match when={currentCard().sessionStyle === 'flashcard'}>
              <FlashcardCard
                card={currentCard()}
                onAnswer={props.onAnswer}
              />
            </Match>
          </Switch>
        )}
      </Show>
    </div>
  )
}
