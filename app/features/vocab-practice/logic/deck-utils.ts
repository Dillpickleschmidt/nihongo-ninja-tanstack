// vocab-practice/logic/deck-utils.ts
import type { Card } from "@/data/types"
import type { DeckState, GameState } from "../types"

export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5)
}

export function extractUniqueCategories(data: Card[]): string[] {
  const categories = new Set<string>()
  data.forEach((card) => {
    card.answerCategories.forEach((category) => {
      categories.add(category.category)
    })
  })
  return Array.from(categories)
}

export function createNewWorkingSet(data: Card[], deckSize: number): Card[] {
  return data.slice(0, Math.min(data.length, deckSize))
}

export function getUniqueCards(cards: Card[]): Card[] {
  return Array.from(new Map(cards.map((card) => [card.key, card])).values())
}

export function getCurrentCard(
  deckState: DeckState,
  gameState: GameState,
): Card {
  return deckState.workingSet[gameState.currentCardIndex] // typically index 0 until the end
}

export function getProgressPercentage(deckState: DeckState): number {
  const totalCards = deckState.allCards.length
  const completedCards = deckState.allCards.filter(
    (card) => card.cardStyle === "done",
  ).length
  return totalCards > 0 ? Math.round((completedCards / totalCards) * 100) : 0
}

export function getProgressText(deckState: DeckState): string {
  const totalCards = deckState.allCards.length
  const completedCards = deckState.allCards.filter(
    (card) => card.cardStyle === "done",
  ).length
  return `${completedCards}/${totalCards}`
}
