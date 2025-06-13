// vocab-practice/components/CardTypeSwitchComponent.tsx
import { Switch, Match, Show, createMemo } from "solid-js"
import MultipleChoiceComponent from "./multiple-choice/MultipleChoiceComponent"
import WriteModeComponent from "./write/WriteModeComponent"
import { useVocabPracticeContext } from "../context/VocabPracticeContext"

export default function CardTypeSwitchComponent() {
  const { state } = useVocabPracticeContext()

  // Automatically updates when state.activeQueue changes
  const currentCard = createMemo(() => {
    if (!state.manager || state.activeQueue.length === 0) {
      return null
    }
    return state.manager.getCardFromMap(state.activeQueue[0])
  })

  const hasMnemonic = createMemo(
    () => (currentCard()?.vocab.mnemonics?.length ?? 0) > 0,
  )

  const promptClasses = createMemo(() => {
    const baseClasses =
      "font-japanese flex h-48 flex-col justify-center text-center"

    if (state.settings.practiceMode === "kana") {
      return `${baseClasses} text-4xl lg:text-5xl`
    }
    return `${baseClasses} text-5xl lg:text-6xl`
  })

  return (
    // Use a Show component to handle the case where there is no current card
    <Show when={currentCard()} fallback={<div>Loading card...</div>}>
      {(card) => (
        <div class="w-full">
          <h2 class={promptClasses()}>{card().prompt}</h2>
          <Show when={hasMnemonic()}>
            <div class="mb-4 max-h-32 overflow-y-auto px-3 pt-3">
              <h3 class="">
                <span
                  class={`font-bold ${state.settings.practiceMode === "readings" ? "text-sky-400" : "text-orange-400"}`}
                >
                  Mnemonic:{" "}
                </span>
                {card().vocab.mnemonics?.[0]}
              </h3>
            </div>
          </Show>
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
