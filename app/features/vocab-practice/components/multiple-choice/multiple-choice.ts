// vocab-practice/components/multiple-choice/multiple-choice.ts
import type { Card } from "@/data/types"

type MultipleChoices = {
  options: Card[]
  correctOption: Card
}

/**
 * Generates multiple choice options from a set of cards.
 * @param data The raw vocab data array.
 * @param currentCardIndex The index of the current card.
 * @returns An object with multiple choice options and the correct option.
 */
export function presentMultipleChoiceOptions(
  data: Card[],
  currentCardIndex: number,
): MultipleChoices {
  if (data.length < 4) {
    throw new Error("Not enough entries to select 4 options")
  }

  const entries = data

  // Extract the entry at the current card index
  const correctEntry = entries[currentCardIndex]

  // Remove the correct entry from the list
  const remainingEntries = entries.filter(
    (entry) => entry.key !== correctEntry.key,
  )

  // Shuffle the remaining entries array
  const remainingShuffledEntries = remainingEntries.sort(
    () => 0.5 - Math.random(),
  )

  // Select the first 3 remaining entries after shuffling
  const select3Entries = remainingShuffledEntries.slice(0, 3)

  // Combine the correct entry with the selected entries
  const selectedEntries = [correctEntry, ...select3Entries]

  // Shuffle the entries after combining
  const shuffledSelectedEntries = selectedEntries.sort(
    () => 0.5 - Math.random(),
  )

  return {
    options: shuffledSelectedEntries,
    correctOption: correctEntry,
  }
}

/**
 * Checks if the user's selection is correct based on enabled categories.
 * @param multipleChoices The multiple choice options and correct option.
 * @param selection The user's selection to check.
 * @returns True if the selection is correct, false otherwise.
 */
export function compareMultipleChoiceAnswer(
  multipleChoices: MultipleChoices,
  selection: Card,
): boolean {
  const { correctOption } = multipleChoices
  return selection === correctOption
}
