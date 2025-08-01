// vocab-practice/components/pages/IntroductionPageComponent.tsx
import { createMemo, Show, createEffect } from "solid-js"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"

export default function IntroductionPageComponent() {
  const { state, setState } = useVocabPracticeContext()
  const manager = () => state.manager!

  const currentCard = createMemo(() => state.currentCard)

  const character = createMemo(() => currentCard()?.vocab.word)
  const meanings = createMemo(() => currentCard()?.vocab.english.join(", "))

  const meaningMnemonic = createMemo(() => currentCard()?.mnemonics?.kanji?.[0] || "")
  const readingMnemonic = createMemo(() => currentCard()?.mnemonics?.reading?.[0] || "")

  let gotItButtonRef: HTMLButtonElement | undefined

  createEffect(() => {
    if (currentCard()) {
      setTimeout(() => {
        if (gotItButtonRef) {
          gotItButtonRef.focus()
        }
      }, 0)
    }
  })

  const handleGotIt = () => {
    if (currentCard() && manager()) {
      manager().processIntroductionCompletion()
      setState("currentCard", manager().getCurrentCard())
      setState("activeQueue", manager().getActiveQueue())
    }
  }

  return (
    <Show when={currentCard()} fallback={<div>Loading card...</div>}>
      {(card) => (
        <div class="flex min-h-screen flex-col items-center justify-center p-4">
          <div class="mx-auto w-full max-w-3xl px-0 sm:px-4">
            <div class="bg-card border-card-foreground rounded-2xl border p-8 shadow-md lg:p-10">
              <div class="relative flex min-h-[350px] flex-col items-center justify-center gap-8 py-4 text-center">
                {/* Card type indicators */}
                <div class="absolute top-0 right-0 z-10 flex gap-2">
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

                {/* Character Display */}
                <div>
                  <p class="text-muted-foreground text-sm tracking-wider uppercase">
                    Character
                  </p>
                  <h2 class="text-primary text-6xl font-bold lg:text-7xl">
                    {character()}
                  </h2>
                </div>

                {/* Meanings Display */}
                <div>
                  <p class="text-muted-foreground text-sm tracking-wider uppercase">
                    Meanings
                  </p>
                  <p class="text-3xl font-semibold text-orange-400 lg:text-4xl">
                    {meanings()}
                  </p>
                </div>

                {/* Meaning Mnemonic */}
                <Show when={meaningMnemonic() && meaningMnemonic().length > 0}>
                  <div class="w-full max-w-xl px-2">
                    <p class="text-muted-foreground mb-2 text-sm tracking-wider uppercase">
                      Meaning Mnemonic
                    </p>
                    <p class="text-muted-foreground text-base leading-relaxed italic">
                      {meaningMnemonic()}
                    </p>
                  </div>
                </Show>

                {/* Reading Mnemonic (for Kanji only) */}
                <Show
                  when={
                    card().practiceItemType === "kanji" &&
                    readingMnemonic() &&
                    readingMnemonic().length > 0
                  }
                >
                  <div class="w-full max-w-xl px-2">
                    <p class="text-muted-foreground mb-2 text-sm tracking-wider uppercase">
                      Reading Mnemonic
                    </p>
                    <p class="text-muted-foreground text-base leading-relaxed italic">
                      {readingMnemonic()}
                    </p>
                  </div>
                </Show>

                {/* "Got It!" Button */}
                <div class="mt-4">
                  <Button
                    ref={gotItButtonRef}
                    onClick={handleGotIt}
                    class="h-12 rounded-xl bg-orange-500 px-6 text-base font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600 focus-visible:ring-2 focus-visible:ring-orange-400"
                  >
                    Got It!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Show>
  )
}
