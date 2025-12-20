import type { PracticeCard } from '../types'
import { getPosCategory } from '@/data/utils/vocabulary/part-of-speech'

export function generateDistractors(
  currentCard: PracticeCard,
  allCards: PracticeCard[],
  count: number,
): string[] {
  const correctAnswers = currentCard.validAnswers.map((a) => a.toLowerCase())
  const currentPosCategory = getPosCategory(currentCard.vocab.partOfSpeech)

  // Filter by: same item type + same POS category
  const matchingCards = allCards.filter(
    (card) =>
      card.practiceItemType === currentCard.practiceItemType &&
      getPosCategory(card.vocab.partOfSpeech) === currentPosCategory,
  )
  const matchingAnswers = matchingCards
    .flatMap((card) => card.validAnswers)
    .filter((answer) => !correctAnswers.includes(answer.toLowerCase()))

  // Fallback 1: same item type only (relax POS filter)
  const sameTypeCards = allCards.filter(
    (card) => card.practiceItemType === currentCard.practiceItemType,
  )
  const sameTypeAnswers = sameTypeCards
    .flatMap((card) => card.validAnswers)
    .filter((answer) => !correctAnswers.includes(answer.toLowerCase()))

  // Fallback 2: any card (relax all filters)
  const allOtherAnswers = allCards
    .flatMap((card) => card.validAnswers)
    .filter((answer) => !correctAnswers.includes(answer.toLowerCase()))

  // Use strictest pool with enough distractors, else fall back
  const distractorPool =
    matchingAnswers.length >= count
      ? matchingAnswers
      : sameTypeAnswers.length >= count
        ? sameTypeAnswers
        : allOtherAnswers

  // Shuffle and take required count (deduplicated)
  const uniqueDistractors = [...new Set(distractorPool)]
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
