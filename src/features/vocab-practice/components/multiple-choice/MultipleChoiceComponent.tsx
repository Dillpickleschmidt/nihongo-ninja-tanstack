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
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Rating } from "ts-fsrs"
import type { PracticeCard, MultipleChoiceButtonState } from "../../types"
import type { PartOfSpeech } from "@/data/types"

// Helper function to determine if a part of speech is a verb
function isVerb(partOfSpeech?: PartOfSpeech): boolean {
  if (!partOfSpeech) return false
  return partOfSpeech !== "I-adjective" && partOfSpeech !== "Na-adjective"
}

export default function MultipleChoiceComponent() {
  const { uiState, setUIState, currentCard, getCardMap, addTimeAndQuestions } =
    useVocabPracticeContext()

  const [selectedIndex, setSelectedIndex] = createSignal<number | null>(null)

  // Generate 4 multiple-choice options from the entire card map
  const choices = createMemo(() => {
    const card = currentCard()
    if (!card) return []

    const allCards = Array.from(getCardMap().values())

    const getComparableValue = (c: PracticeCard) =>
      c.validAnswers.sort().join("|")

    const currentValue = getComparableValue(card)
    const seenValues = new Set([currentValue])

    // Get wrong options (with filtering logic)
    const filteredCards = allCards.filter(
      (c) =>
        // 1. Must be the same type (e.g., kanji questions only get kanji distractors).
        c.practiceItemType === card.practiceItemType &&
        // 2. Must be in the same practice mode.
        c.practiceMode === card.practiceMode &&
        // 3. Cannot be the same card.
        c.key !== card.key &&
        // 4. Part of speech must match: verbs with verbs, non-verbs with non-verbs.
        isVerb(c.vocab.part_of_speech) === isVerb(card.vocab.part_of_speech),
    )

    // 5. Filter for unique answers and collect up to 3 options
    const wrongOptions: PracticeCard[] = []
    const shuffledCandidates = filteredCards.sort(() => Math.random() - 0.5)

    for (const candidate of shuffledCandidates) {
      const candidateValue = getComparableValue(candidate)
      if (!seenValues.has(candidateValue)) {
        seenValues.add(candidateValue)
        wrongOptions.push(candidate)
        if (wrongOptions.length >= 3) break
      }
    }

    // Return shuffled choices
    return [card, ...wrongOptions].sort(() => Math.random() - 0.5)
  })

  // Derive button states from current selection and choices
  const buttonStates = createMemo(() =>
    choices().map((choice, index) => ({
      isSelected: selectedIndex() === index,
      isCorrect:
        selectedIndex() === index ? choice.key === currentCard()?.key : false,
    })),
  )

  // Reset selection whenever the card changes
  createEffect(() => {
    setSelectedIndex(null)
  })

  // Keyboard support for number keys 1-4
  onMount(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (uiState.isAnswered) return
      const num = parseInt(e.key)
      if (num >= 1 && num <= choices().length) {
        handleSelection(choices()[num - 1])
      }
    }
    window.addEventListener("keydown", handleKeyPress)
    onCleanup(() => window.removeEventListener("keydown", handleKeyPress))
  })

  // Handle user selection
  function handleSelection(selectedCard: PracticeCard) {
    if (uiState.isAnswered) return

    const card = currentCard()
    if (!card) return

    const isCorrect = selectedCard.key === card.key
    const rating = isCorrect ? Rating.Good : Rating.Again

    // Track time and questions
    addTimeAndQuestions(5, true)

    // Set selected index for immediate visual feedback
    const index = choices().findIndex(
      (choice) => choice.key === selectedCard.key,
    )
    setSelectedIndex(index)

    // Set the global state to show the "Next" button and store the rating.
    // This does NOT advance the card.
    setUIState({
      isAnswered: true,
      lastRating: rating,
    })
  }

  return (
    <Show when={buttonStates().length > 0 && currentCard()}>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
        <For each={choices()}>
          {(option, index) => (
            <MultipleChoiceButton
              option={option}
              index={index()}
              buttonState={buttonStates()[index()]}
              isAnswered={uiState.isAnswered}
              onSelect={() => handleSelection(option)}
            />
          )}
        </For>
      </div>
    </Show>
  )
}

function MultipleChoiceButton(props: {
  option: PracticeCard
  index: number
  buttonState: MultipleChoiceButtonState
  isAnswered: boolean
  onSelect: () => void
}) {
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
      classes += " bg-background hover:bg-muted"
    }
    return classes
  }

  return (
    <button
      onClick={props.onSelect}
      disabled={props.isAnswered}
      class={buttonClasses()}
      type="button"
      role="button"
      tabIndex={0}
      aria-pressed={props.buttonState.isSelected}
      aria-disabled={props.isAnswered}
    >
      <div class="bg-card-foreground/70 text-muted-foreground absolute top-3 right-3 hidden h-6 w-6 items-center justify-center rounded-full text-sm font-bold lg:flex">
        {props.index + 1}
      </div>
      <div class="w-full space-y-2 overflow-x-auto">
        <p class="text-lg font-bold lg:text-xl">
          {props.option.validAnswers.join(", ")}
        </p>
        <Show when={props.option.vocab.particles}>
          <div class="space-y-1">
            <For each={props.option.vocab.particles}>
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
