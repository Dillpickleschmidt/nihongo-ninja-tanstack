import type { PracticeCard } from "../types"
import { getPosCategory } from "@/data/utils/vocabulary/part-of-speech"

export type ChoiceOption = {
  answer: string
  particles?: { label?: string; particle: string }[]
}

export function generateDistractors(
  currentCard: PracticeCard,
  allCards: PracticeCard[],
  count: number,
): ChoiceOption[] {
  const correctAnswers = currentCard.validAnswers.map((a) => a.toLowerCase())
  const currentPosCategory = getPosCategory(currentCard.vocab.partOfSpeech)

  const toOptions = (cards: PracticeCard[]): ChoiceOption[] =>
    cards.flatMap((card) =>
      card.validAnswers
        .filter((answer) => !correctAnswers.includes(answer.toLowerCase()))
        .map((answer) => ({ answer, particles: card.vocab.particles })),
    )

  // Filter by: same item type + same POS category
  const matchingCards = allCards.filter(
    (card) =>
      card.practiceItemType === currentCard.practiceItemType &&
      getPosCategory(card.vocab.partOfSpeech) === currentPosCategory,
  )
  const matchingOptions = toOptions(matchingCards)

  // Fallback 1: same item type only (relax POS filter)
  const sameTypeCards = allCards.filter(
    (card) => card.practiceItemType === currentCard.practiceItemType,
  )
  const sameTypeOptions = toOptions(sameTypeCards)

  // Fallback 2: any card (relax all filters)
  const allOtherOptions = toOptions(allCards)

  // Use strictest pool with enough distractors, else fall back
  const distractorPool =
    matchingOptions.length >= count
      ? matchingOptions
      : sameTypeOptions.length >= count
        ? sameTypeOptions
        : allOtherOptions

  // Deduplicate by answer string (keep first occurrence's particles)
  const seen = new Set<string>()
  const uniqueDistractors: ChoiceOption[] = []
  for (const option of distractorPool) {
    if (!seen.has(option.answer)) {
      seen.add(option.answer)
      uniqueDistractors.push(option)
    }
  }

  const shuffled = shuffleArray(uniqueDistractors)
  return shuffled.slice(0, count)
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
