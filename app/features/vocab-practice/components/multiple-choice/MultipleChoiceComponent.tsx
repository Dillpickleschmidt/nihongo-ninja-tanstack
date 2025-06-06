// vocab-practice/components/multiple-choice/MultipleChoiceComponent.tsx
import {
  createEffect,
  createMemo,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js"
import { presentMultipleChoiceOptions } from "./multiple-choice"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { cn } from "@/utils"
import { createStore } from "solid-js/store"
import { MultipleChoiceButtonState } from "../../types"

export default function MultipleChoiceComponent() {
  const context = useVocabPracticeContext()

  const [buttonStore, setButtonStore] = createStore<
    MultipleChoiceButtonState[]
  >([
    { isSelected: false, isCorrect: false },
    { isSelected: false, isCorrect: false },
    { isSelected: false, isCorrect: false },
    { isSelected: false, isCorrect: false },
  ])
  const [isTouchDevice, setIsTouchDevice] = createSignal(false)

  onMount(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)

    // Add keyboard listener
    const handleKeyPress = (e: KeyboardEvent) => {
      if (context.gameState.hasUserAnswered) return

      // Check if the pressed key is a number between 1-4
      const num = parseInt(e.key)
      if (num >= 1 && num <= choices().options.length) {
        handleSelection(num - 1) // subtract 1 because array is 0-based
      }
    }

    window.addEventListener("keydown", handleKeyPress)

    // Cleanup function to remove event listener
    onCleanup(() => {
      window.removeEventListener("keydown", handleKeyPress)
    })
  })

  const choices = createMemo(() =>
    presentMultipleChoiceOptions(
      context.deckState.activeDeck,
      context.gameState.currentCardIndex,
    ),
  )

  createEffect(() => {
    setButtonStore(
      choices().options.map(() => ({ isSelected: false, isCorrect: false })),
    )
  })

  const handleSelection = (selectionIndex: number) => {
    const { correctOption } = choices()
    const correctIndex = choices().options.indexOf(correctOption)

    context.setGameState({
      hasUserAnswered: true,
      isAnswerCorrect: selectionIndex === correctIndex,
    })

    setButtonStore(
      buttonStore.map((state, index) => ({
        isSelected: index === selectionIndex,
        isCorrect: index === correctIndex,
      })),
    )
  }

  const getButtonClasses = (isSelected: boolean, isCorrect: boolean) => {
    if (isCorrect)
      return "disabled:opacity-100 bg-green-500 text-white font-semibold"
    if (isSelected) return "disabled:opacity-100 bg-red-500 text-white"
    return "bg-background opacity-60"
  }

  return (
    <div>
      <ul class="mb-6 grid grid-cols-1 gap-[.875rem] px-4 lg:grid-cols-2 lg:px-16">
        <For each={choices().options}>
          {(option, index) => {
            const enabledAnswers = createMemo(() =>
              option.answerCategories
                .filter((object) =>
                  context.settings.enabledAnswerCategories.includes(
                    object.category,
                  ),
                )
                .flatMap((category) => category.answers),
            )

            return (
              <Button
                variant="outline"
                {...(isTouchDevice()
                  ? { onPointerDown: () => handleSelection(index()) }
                  : { onClick: () => handleSelection(index()) })}
                disabled={context.gameState.hasUserAnswered}
                class={cn(
                  context.gameState.hasUserAnswered &&
                    getButtonClasses(
                      buttonStore[index()].isSelected,
                      buttonStore[index()].isCorrect,
                    ),
                  "font-japanese min-h-20 w-full flex-col items-start justify-center rounded-xl py-4 text-start text-xl shadow-md duration-75 ease-in-out hover:scale-[98.5%]",
                )}
              >
                {enabledAnswers().join(", ")}
                <Show when={option.particles}>
                  <For each={option.particles}>
                    {(object) => (
                      <div class="text-base font-light">
                        {object.label ? (
                          <span>
                            {object.label} -{" "}
                            <span class="font-japanese">{object.particle}</span>
                          </span>
                        ) : (
                          <span>
                            particle:{" "}
                            <span class="font-japanese">{object.particle}</span>
                          </span>
                        )}
                      </div>
                    )}
                  </For>
                </Show>
              </Button>
            )
          }}
        </For>
      </ul>
    </div>
  )
}
