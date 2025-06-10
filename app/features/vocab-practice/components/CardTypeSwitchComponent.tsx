// vocab-practice/components/CardTypeSwitchComponent.tsx
import { Switch, Match, Show, createMemo } from "solid-js"
import MultipleChoiceComponent from "./multiple-choice/MultipleChoiceComponent"
import WriteModeComponent from "./write/WriteModeComponent"
import { useVocabPracticeContext } from "../context/VocabPracticeContext"

export default function CardTypeSwitchComponent() {
  const { state } = useVocabPracticeContext()

  // Create a reactive memo that depends on the activeQueue from the store.
  // When `state.activeQueue` changes, this memo will automatically re-run.
  const currentCard = createMemo(() => {
    // Guard against the manager not being initialized or the queue being empty
    if (!state.manager || state.activeQueue.length === 0) {
      return null
    }
    // Use the manager only as a data source to look up the key.
    return state.manager.getCardFromMap(state.activeQueue[0])
  })

  // This memo also becomes reactive, depending on currentCard()
  const hasMnemonic = createMemo(
    () => (currentCard()?.vocab.mnemonics?.length ?? 0) > 0,
  )

  return (
    // Use a Show component to handle the case where there is no current card
    <Show when={currentCard()} fallback={<div>Loading card...</div>}>
      {(card) => (
        <div class="w-full">
          <h2 class="font-japanese flex h-48 flex-col justify-center text-center text-5xl lg:text-6xl">
            {card().prompt}
          </h2>
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
