// vocab-practice/types.ts
import type { Card } from "@/data/types"

export type CurrentPage = "start" | "practice" | "review" | "finish"

export type PracticeMode = "readings" | "kana"

// Break down the large state into logical groups
export type GameState = {
  currentPage: CurrentPage
  currentCardIndex: number
  hasUserAnswered: boolean
  isAnswerCorrect: boolean
}

export type DeckState = {
  data: Card[]
  activeDeck: Card[]
  recentlySeenCards: Card[]
  deckRefillIndex: number
}

export type Settings = {
  practiceMode: PracticeMode
  shuffleInput: boolean
  enabledAnswerCategories: string[]
}

export type MultipleChoiceButtonState = {
  isSelected: boolean
  isCorrect: boolean
}
