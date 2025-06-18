// vocab-practice/components/pages/FSRSFlashcardPageComponent.tsx
import {
  createSignal,
  Show,
  createMemo,
  createEffect,
  onMount,
  onCleanup,
} from "solid-js"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Rating, Grade } from "ts-fsrs"
import { cn } from "@/utils/util" // Import cn utility

export default function FSRSFlashcardPageComponent() {
  const { state, setState } = useVocabPracticeContext()
  const manager = () => state.manager!

  const currentCard = createMemo(() => {
    if (!state.manager || state.activeQueue.length === 0) {
      return null
    }
    return state.manager.getCardFromMap(state.activeQueue[0])
  })

  const [showAnswer, setShowAnswer] = createSignal(false)

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

      const newActiveQueue = manager().getActiveQueue()

      return {
        ...prevState,
        recentReviewHistory: newHistory,
        incorrectAnswerMap: newIncorrectMap,
        activeQueue: newActiveQueue,
      }
    })
  }

  return (
    <Show when={currentCard()} fallback={<div>Loading...</div>}>
      {(card) => (
        <div class="flex min-h-screen flex-col items-center justify-center p-4">
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
              <h1 class="font-japanese text-5xl lg:text-6xl">
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
                <p class="mt-6 text-2xl font-semibold text-orange-400">
                  {card().validAnswers.join(", ")}
                </p>
              </Show>
            </div>
          </div>
          <Show when={showAnswer()}>
            {/* Desktop: Normal positioning */}
            <div class="mt-8 hidden w-full max-w-3xl grid-cols-4 gap-3 lg:grid">
              <Button
                onClick={() => handleAnswer(Rating.Again)}
                class={cn(
                  "relative h-14 rounded-xl bg-red-600 text-base font-semibold text-white hover:bg-red-700",
                )}
              >
                <div class="bg-card-foreground/70 text-muted-foreground absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full font-mono text-xs font-bold">
                  1
                </div>
                Again
              </Button>
              <Button
                onClick={() => handleAnswer(Rating.Hard)}
                class={cn(
                  "relative h-14 rounded-xl bg-yellow-500 text-base font-semibold text-white hover:bg-yellow-600",
                )}
              >
                <div class="bg-card-foreground/70 text-muted-foreground absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full font-mono text-xs font-bold">
                  2
                </div>
                Hard
              </Button>
              <Button
                onClick={() => handleAnswer(Rating.Good)}
                class={cn(
                  "relative h-14 rounded-xl bg-green-600 text-base font-semibold text-white hover:bg-green-700",
                )}
              >
                <div class="bg-card-foreground/70 text-muted-foreground absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full font-mono text-xs font-bold">
                  3
                </div>
                Good
              </Button>
              <Button
                onClick={() => handleAnswer(Rating.Easy)}
                class={cn(
                  "relative h-14 rounded-xl bg-blue-600 text-base font-semibold text-white hover:bg-blue-700",
                )}
              >
                <div class="bg-card-foreground/70 text-muted-foreground absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full font-mono text-xs font-bold">
                  4
                </div>
                Easy
              </Button>
            </div>

            {/* Mobile: Fixed at bottom */}
            <div class="fixed right-0 bottom-0 left-0 z-50 p-4 lg:hidden">
              <div class="grid grid-cols-4 gap-3">
                <Button
                  onClick={() => handleAnswer(Rating.Again)}
                  class={cn(
                    "relative h-10 rounded-xl bg-red-600 text-base font-semibold text-white hover:bg-red-700",
                  )}
                >
                  Again
                </Button>
                <Button
                  onClick={() => handleAnswer(Rating.Hard)}
                  class={cn(
                    "relative h-10 rounded-xl bg-yellow-500 text-base font-semibold text-white hover:bg-yellow-600",
                  )}
                >
                  Hard
                </Button>
                <Button
                  onClick={() => handleAnswer(Rating.Good)}
                  class={cn(
                    "relative h-10 rounded-xl bg-green-600 text-base font-semibold text-white hover:bg-green-700",
                  )}
                >
                  Good
                </Button>
                <Button
                  onClick={() => handleAnswer(Rating.Easy)}
                  class={cn(
                    "relative h-10 rounded-xl bg-blue-600 text-base font-semibold text-white hover:bg-blue-700",
                  )}
                >
                  Easy
                </Button>
              </div>
            </div>
          </Show>
        </div>
      )}
    </Show>
  )
}
