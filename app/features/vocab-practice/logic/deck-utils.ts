// vocab-practice/logic/deck-utils.ts
import type { Card } from "@/data/types"

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

export function createActiveDeck(data: Card[], deckSize: number): Card[] {
  return data.slice(0, Math.min(data.length, deckSize))
}

export function getUniqueCards(cards: Card[]): Card[] {
  return Array.from(new Map(cards.map((card) => [card.key, card])).values())
}
