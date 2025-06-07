// vocab-practice/components/multiple-choice/MultipleChoiceComponent.tsx
import {
  createEffect,
  createMemo,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js"
import { presentMultipleChoiceOptions } from "./multiple-choice"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { createStore } from "solid-js/store"
import { MultipleChoiceButtonState } from "../../types"

export default function MultipleChoiceComponent() {
  const context = useVocabPracticeContext()

  // Store for button states (selected/correct)
  const [buttonStore, setButtonStore] = createStore<
    MultipleChoiceButtonState[]
  >(Array(4).fill({ isSelected: false, isCorrect: false }))

  // Generate choices for the current card
  const choices = createMemo(() =>
    presentMultipleChoiceOptions(
      context.deckState.workingSet,
      context.gameState.currentCardIndex,
    ),
  )

  // Reset button states when choices change
  createEffect(() => {
    setButtonStore(
      choices().options.map(() => ({ isSelected: false, isCorrect: false })),
    )
  })

  // Keyboard support for 1-4
  onMount(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (context.gameState.hasUserAnswered) return
      const num = parseInt(e.key)
      if (num >= 1 && num <= choices().options.length) {
        handleSelection(num - 1)
      }
    }
    window.addEventListener("keydown", handleKeyPress)
    onCleanup(() => window.removeEventListener("keydown", handleKeyPress))
  })

  // Handle user selection
  function handleSelection(selectionIndex: number) {
    const { correctOption } = choices()
    const correctIndex = choices().options.indexOf(correctOption)
    context.setGameState({
      hasUserAnswered: true,
      isAnswerCorrect: selectionIndex === correctIndex,
    })
    setButtonStore(
      buttonStore.map((_, index) => ({
        isSelected: index === selectionIndex,
        isCorrect: index === correctIndex,
      })),
    )
  }

  // Render
  return (
    <div class="space-y-5">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
        <For each={choices().options}>
          {(option, index) => (
            <MultipleChoiceButton
              option={option}
              index={index()}
              buttonState={buttonStore[index()]}
              isAnswered={context.gameState.hasUserAnswered}
              onSelect={handleSelection}
              enabledAnswerCategories={context.settings.enabledAnswerCategories}
            />
          )}
        </For>
      </div>
    </div>
  )
}

function MultipleChoiceButton(props: {
  option: any
  index: number
  buttonState: MultipleChoiceButtonState
  isAnswered: boolean
  onSelect: (index: number) => void
  enabledAnswerCategories: string[]
}) {
  // Answers to display
  const enabledAnswers = createMemo(() =>
    props.option.answerCategories
      .filter((object) =>
        props.enabledAnswerCategories.includes(object.category),
      )
      .flatMap((category) => category.answers),
  )

  // Button classes
  const buttonClasses = () => {
    let classes =
      "font-japanese relative min-h-20 w-full flex-col items-start justify-center rounded-xl p-4 text-start text-lg shadow-md duration-75 ease-in-out hover:scale-[98.5%]"
    if (props.isAnswered) {
      if (props.buttonState.isCorrect) {
        classes += " disabled:opacity-100 bg-green-500 text-white font-semibold"
      } else if (props.buttonState.isSelected) {
        classes += " disabled:opacity-100 bg-red-500 text-white"
      } else {
        classes += " bg-background opacity-60"
      }
    } else {
      classes += " bg-background opacity-60"
    }
    return classes
  }

  // Render
  return (
    <button
      onClick={() => props.onSelect(props.index)}
      disabled={props.isAnswered}
      class={buttonClasses()}
      type="button"
      role="button"
      tabIndex={0}
      aria-pressed={props.buttonState.isSelected}
      aria-disabled={props.isAnswered}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && !props.isAnswered) {
          e.preventDefault()
          props.onSelect(props.index)
        }
      }}
    >
      {/* Option number indicator - hidden on mobile */}
      <div class="bg-card-foreground/70 text-muted-foreground absolute top-3 right-3 hidden h-6 w-6 items-center justify-center rounded-full text-sm font-bold lg:flex">
        {props.index + 1}
      </div>
      <div class="w-full space-y-2 overflow-x-auto">
        <p class="text-lg font-bold lg:text-xl">
          {enabledAnswers().join(", ")}
        </p>
        <Show when={props.option.particles}>
          <div class="space-y-1">
            <For each={props.option.particles}>
              {(object) => (
                <div class="text-sm font-light">
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
          </div>
        </Show>
      </div>
    </button>
  )
}
