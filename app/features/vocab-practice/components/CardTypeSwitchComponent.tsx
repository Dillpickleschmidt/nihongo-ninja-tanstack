// vocab-practice/components/CardTypeSwitchComponent.tsx
import { Switch, Match, Show } from "solid-js"
import MultipleChoiceComponent from "./multiple-choice/MultipleChoiceComponent"
import WriteModeComponent from "./write/WriteModeComponent"
import { useVocabPracticeContext } from "../context/VocabPracticeContext"

export default function CardTypeSwitchComponent() {
  const context = useVocabPracticeContext()

  const currentCard = () =>
    context.deckState.activeDeck[context.gameState.currentCardIndex]
  const hasUserAnswered = () => context.gameState.hasUserAnswered
  const isUserAnswerCorrect = () => context.gameState.isAnswerCorrect
  const hasMnemonic = () => {
    const card = currentCard()
    return card && card.mnemonics && card.mnemonics.length > 0
  }

  return (
    <div class="w-full">
      <Show
        fallback={
          <h2 class="font-japanese mx-12 flex h-48 flex-col justify-center text-center text-5xl lg:text-6xl">
            {currentCard()?.key}
          </h2>
        }
        when={hasUserAnswered() && !isUserAnswerCorrect() && hasMnemonic()}
      >
        <div class="flex h-48 flex-col justify-center">
          <h2 class="font-japanese mx-12 text-center text-5xl lg:text-6xl">
            {currentCard()?.key}
          </h2>
          <div class="mb-4 max-h-32 overflow-y-auto px-3 pt-3">
            <h3 class="">
              <span
                class={`font-bold ${context.settings.practiceMode === "readings" ? "text-sky-400" : "text-orange-400"}`}
              >
                Mnemonic:{" "}
              </span>
              {currentCard()?.mnemonics?.[0]}
            </h3>
          </div>
        </div>
      </Show>
      <Switch
        fallback={
          <div>
            <h2>No questions</h2>
          </div>
        }
      >
        <Match when={currentCard()?.cardStyle === "multiple-choice"}>
          <MultipleChoiceComponent />
        </Match>
        <Match when={currentCard()?.cardStyle === "write"}>
          <WriteModeComponent />
        </Match>
      </Switch>
    </div>
  )
}
