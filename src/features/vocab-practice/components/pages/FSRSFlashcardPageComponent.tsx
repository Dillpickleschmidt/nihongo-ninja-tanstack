// vocab-practice/components/pages/FSRSFlashcardPageComponent.tsx
import {
  createSignal,
  Show,
  createMemo,
  createEffect,
  onMount,
  onCleanup,
  For,
} from "solid-js"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import ProgressHeader from "../ProgressHeader"
import { Rating, Grade } from "ts-fsrs"
import { cn } from "@/utils/util"
import type { PracticeMode } from "../../types"
import { parseMnemonicText } from "@/utils/mnemonic-parser"

// Determines language based on card type and flip settings
function getCardContentLanguage(
  itemType: DBPracticeItemType,
  practiceMode: PracticeMode,
  flipVocabQA: boolean,
  flipKanjiRadicalQA: boolean,
): { isPromptJapanese: boolean; isAnswerJapanese: boolean } {
  let isPromptJapanese = false
  let isAnswerJapanese = false

  if (itemType === "vocabulary") {
    if (practiceMode === "kana") {
      // Q: English (not Japanese) / Kana (Japanese)
      // A: Kana (Japanese) / English (not Japanese)
      isPromptJapanese = flipVocabQA
      isAnswerJapanese = !flipVocabQA
    } else {
      // 'readings' mode
      // Q: Japanese Word (Japanese) / English (not Japanese)
      // A: English (not Japanese) / Japanese Word (Japanese)
      isPromptJapanese = !flipVocabQA
      isAnswerJapanese = flipVocabQA
    }
  } else {
    // Kanji and Radicals
    // Q: Character (Japanese) / Meanings (not Japanese)
    // A: Meanings (not Japanese) / Character (Japanese)
    isPromptJapanese = !flipKanjiRadicalQA
    isAnswerJapanese = flipKanjiRadicalQA
  }

  return { isPromptJapanese, isAnswerJapanese }
}

// Data for rating buttons (to avoid repetition)
const RATING_BUTTONS = [
  { rating: Rating.Again, label: "Again", color: "bg-red-600", key: "1" },
  { rating: Rating.Hard, label: "Hard", color: "bg-yellow-500", key: "2" },
  { rating: Rating.Good, label: "Good", color: "bg-green-600", key: "3" },
  { rating: Rating.Easy, label: "Easy", color: "bg-blue-600", key: "4" },
]

export default function FSRSFlashcardPageComponent() {
  const { state, setState } = useVocabPracticeContext()
  const manager = () => state.manager!

  const currentCard = () => state.currentCard

  const [showAnswer, setShowAnswer] = createSignal(false)

  // Mnemonic helpers
  const meaningMnemonic = () => currentCard()?.mnemonics?.kanji?.[0] || ""
  const readingMnemonic = () => currentCard()?.mnemonics?.reading?.[0] || ""

  let showAnswerButtonRef: HTMLButtonElement | undefined

  // Effect to reset state and focus the "Show Answer" button for new cards
  createEffect(() => {
    if (currentCard()) {
      setShowAnswer(false) // Reset showAnswer for the new card
      setTimeout(() => {
        if (showAnswerButtonRef) {
          showAnswerButtonRef.focus()
        }
      }, 0)
    }
  })

  // Keyboard event handling
  onMount(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Prevent default browser actions for relevant keys
      if (["1", "2", "3", "4", " "].includes(e.key)) {
        e.preventDefault()
      }

      if (!currentCard()) return // No card, no action

      if (!showAnswer()) {
        // If answer is not shown, spacebar reveals it
        if (e.key === " ") {
          setShowAnswer(true)
        }
      } else {
        // If answer is shown, number keys select rating
        switch (e.key) {
          case "1":
            handleAnswer(Rating.Again)
            break
          case "2":
            handleAnswer(Rating.Hard)
            break
          case "3":
            handleAnswer(Rating.Good)
            break
          case "4":
            handleAnswer(Rating.Easy)
            break
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    onCleanup(() => {
      window.removeEventListener("keydown", handleKeyPress)
    })
  })

  const handleAnswer = async (rating: Grade) => {
    const card = currentCard()
    if (!card) return

    const isCorrect = rating !== Rating.Again

    // 1. Call the manager to update its internal state
    await manager().processAnswer(rating)

    // Sync the UI state
    setState((prevState) => {
      const newHistory = [
        ...prevState.recentReviewHistory,
        { key: card.key, wasCorrect: isCorrect },
      ]

      const newIncorrectMap = new Map(prevState.incorrectAnswerMap)
      if (!isCorrect) {
        const currentCount = newIncorrectMap.get(card.key) ?? 0
        newIncorrectMap.set(card.key, currentCount + 1)
      }

      const nextCard = manager().getCurrentCard()
      const newActiveQueue = manager().getActiveQueue()

      return {
        ...prevState,
        recentReviewHistory: newHistory,
        incorrectAnswerMap: newIncorrectMap,
        activeQueue: newActiveQueue,
        currentCard: nextCard,
      }
    })
  }

  return (
    <Show when={currentCard()} fallback={<div>Loading...</div>}>
      {(card) => {
        // Determine content languages
        const { isPromptJapanese, isAnswerJapanese } = getCardContentLanguage(
          card().practiceItemType,
          card().practiceMode,
          state.settings.flipVocabQA,
          state.settings.flipKanjiRadicalQA,
        )

        // Dynamic class for prompt text
        const promptTextClass = () => {
          if (showAnswer()) {
            // After answer is shown, shrink prompt size
            return {
              "font-japanese text-4xl lg:text-5xl": isPromptJapanese,
              "font-inter text-2xl font-semibold": !isPromptJapanese,
            }
          } else {
            // Before answer is shown, original prompt size
            return {
              "font-japanese text-5xl lg:text-6xl": isPromptJapanese,
              "font-inter text-4xl font-semibold": !isPromptJapanese,
            }
          }
        }

        // Dynamic class for answer text
        const answerTextClass = () => ({
          "font-japanese text-6xl lg:text-7xl": isAnswerJapanese,
          "font-inter text-3xl font-semibold": !isAnswerJapanese,
        })

        return (
          <div class="min-h-screen">
            <ProgressHeader />
            <div class="flex min-h-screen flex-col items-center justify-center p-4 pt-28">
              <div class="bg-card border-card-foreground relative w-full max-w-3xl rounded-2xl border p-8 shadow-md lg:p-10">
              <div class="absolute top-4 right-4 z-10 flex gap-2">
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

              <div class="flex min-h-48 flex-col items-center justify-center text-center">
                <h1
                  class="" // Ensure base class is empty if only dynamic classes apply
                  classList={promptTextClass()}
                >
                  {card().prompt}
                </h1>
                <Show
                  when={showAnswer()}
                  fallback={
                    <Button
                      ref={showAnswerButtonRef}
                      onClick={() => setShowAnswer(true)}
                      class="mt-8"
                      variant="outline"
                    >
                      Show Answer
                    </Button>
                  }
                >
                  <p class="mt-6 text-orange-400" classList={answerTextClass()}>
                    {card().validAnswers.join(", ")}
                  </p>

                  {/* Mnemonics Section */}
                  <div class="mt-6 flex flex-col items-center gap-4">
                    {/* Meaning Mnemonic */}
                    <Show
                      when={meaningMnemonic() && meaningMnemonic().length > 0}
                    >
                      <div class="w-full max-w-xl px-2">
                        <p class="text-muted-foreground mb-2 text-sm tracking-wider uppercase">
                          <span class="text-sky-400">Meaning</span> Mnemonic
                        </p>
                        <p class="text-muted-foreground text-base leading-relaxed italic">
                          {parseMnemonicText(meaningMnemonic())}
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
                          <span class="text-orange-400">Reading</span> Mnemonic
                        </p>
                        <p class="text-muted-foreground text-base leading-relaxed italic">
                          {parseMnemonicText(readingMnemonic())}
                        </p>
                      </div>
                    </Show>
                  </div>
                </Show>
              </div>
            </div>
            <Show when={showAnswer()}>
              {/* Desktop: Normal positioning */}
              <div class="mt-8 hidden w-full max-w-3xl grid-cols-4 gap-3 lg:grid">
                <For each={RATING_BUTTONS}>
                  {(button) => (
                    <Button
                      onClick={() => handleAnswer(button.rating as Grade)}
                      class={cn(
                        "relative h-14 rounded-xl text-base font-semibold text-white",
                        button.color,
                      )}
                    >
                      <div class="absolute top-[7px] right-[7px] flex h-6 w-6 items-center justify-center rounded-full bg-black/20 font-mono text-xs font-bold text-white">
                        {button.key}
                      </div>
                      {button.label}
                    </Button>
                  )}
                </For>
              </div>

              {/* Mobile: Fixed at bottom */}
              <div class="fixed right-0 bottom-0 left-0 z-50 p-4 lg:hidden">
                <div class="grid grid-cols-4 gap-3">
                  <For each={RATING_BUTTONS}>
                    {(button) => (
                      <Button
                        onClick={() => handleAnswer(button.rating as Grade)}
                        class={cn(
                          "relative h-10 rounded-xl text-base font-semibold text-white",
                          button.color,
                        )}
                      >
                        {button.label}
                      </Button>
                    )}
                  </For>
                </div>
              </div>
            </Show>
            </div>
          </div>
        )
      }}
    </Show>
  )
}
