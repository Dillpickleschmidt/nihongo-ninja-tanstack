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
    <div class="space-y-5">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
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
                  "font-japanese relative min-h-20 w-full flex-col items-start justify-center rounded-xl py-4 text-start text-lg shadow-md duration-75 ease-in-out hover:scale-[98.5%]",
                )}
              >
                {/* Option number indicator - hidden on mobile */}
                <div class="bg-card-foreground/70 text-muted-foreground absolute top-3 right-3 hidden h-6 w-6 items-center justify-center rounded-full text-sm font-bold lg:flex">
                  {index() + 1}
                </div>

                <div class="w-full space-y-2 overflow-x-auto">
                  <p class="text-lg font-bold lg:text-xl">
                    {enabledAnswers().join(", ")}
                  </p>

                  <Show when={option.particles}>
                    <div class="space-y-1">
                      <For each={option.particles}>
                        {(object) => (
                          <div class="text-sm font-light">
                            {object.label ? (
                              <span>
                                {object.label} -{" "}
                                <span class="font-japanese">
                                  {object.particle}
                                </span>
                              </span>
                            ) : (
                              <span>
                                particle:{" "}
                                <span class="font-japanese">
                                  {object.particle}
                                </span>
                              </span>
                            )}
                          </div>
                        )}
                      </For>
                    </div>
                  </Show>
                </div>
              </Button>
            )
          }}
        </For>
      </div>
    </div>
  )
}
