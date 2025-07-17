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
    if (currentCard()?.practiceMode === "kana") {
      return `${baseClasses} text-4xl lg:text-5xl`
    }
    return `${baseClasses} text-5xl lg:text-6xl`
  })

  return (
    <Show when={currentCard()} fallback={<div>Loading card...</div>}>
      {(card) => (
        <div class="relative w-full">
          <div class="absolute -top-4 -right-4 z-10 flex gap-2">
            {/* --- Vocabulary Badge --- */}
            <Show when={card().practiceItemType === "vocabulary"}>
              <span class="inline-flex items-center rounded-full bg-orange-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-orange-400 uppercase">
                Vocabulary
              </span>
            </Show>
            <Show when={card().practiceItemType === "kanji"}>
              <span class="inline-flex items-center rounded-full bg-pink-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-pink-400 uppercase">
                Kanji
              </span>
            </Show>
            <Show when={card().practiceItemType === "radical"}>
              <span class="inline-flex items-center rounded-full bg-blue-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-400 uppercase">
                Radical
              </span>
            </Show>
          </div>

          <h2 class={promptClasses()}>{card().prompt}</h2>

          <Show when={hasMnemonic()}>
            <div class="mb-4 max-h-32 overflow-y-auto px-3 pt-3">
              <h3 class="">
                <span
                  class={`font-bold ${
                    card().practiceMode === "readings"
                      ? "text-sky-400"
                      : "text-orange-400"
                  }`}
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
