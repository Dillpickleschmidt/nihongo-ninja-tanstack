// vocab-practice/components/CardTypeSwitchComponent.tsx
import { Switch, Match, Show } from "solid-js"
import MultipleChoiceComponent from "./multiple-choice/MultipleChoiceComponent"
import WriteModeComponent from "./write/WriteModeComponent"
import { useVocabPracticeContext } from "../context/VocabPracticeContext"
import { MnemonicSection } from "./shared/MnemonicSection"

export default function CardTypeSwitchComponent() {
  const { currentCard, uiState } = useVocabPracticeContext()

  const promptClasses = () => {
    const baseClasses = "font-japanese flex justify-center pt-6 sm:pt-8"
    if (currentCard()?.practiceMode === "spellings") {
      return `${baseClasses} text-3xl sm:text-4xl lg:text-5xl`
    }
    return `${baseClasses} text-4xl sm:text-5xl lg:text-6xl`
  }

  return (
    <Show when={currentCard()} fallback={<div>Loading card...</div>}>
      {(card) => (
        <div class="relative w-full">
          {/* Prompt */}
          <h2 class={promptClasses()}>{card().prompt}</h2>

          {/* Mnemonics Section */}
          <div class="mb-3 flex min-h-20 items-end overflow-y-auto px-2 pt-2 sm:mb-4 sm:min-h-28 sm:pt-3">
            <MnemonicSection
              visible={() => uiState.isAnswered}
            />
          </div>

          {/* Card Type Switch */}
          <Switch>
            <Match when={card().sessionStyle === "multiple-choice"}>
              <MultipleChoiceComponent />
            </Match>
            <Match when={card().sessionStyle === "write"}>
              <WriteModeComponent />
            </Match>
          </Switch>
        </div>
      )}
    </Show>
  )
}
