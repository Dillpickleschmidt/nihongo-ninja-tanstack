// vocab-practice/types.ts
import type { Card } from "@/data/types"
import type { FSRSCardData } from "@/features/supabase/db/utils"

export type CurrentPage =
  | "start"
  | "practice"
  | "review"
  | "finish"
  | "fsrs-flashcard"
export type PracticeMode = "readings" | "kana"

// Break down the large state into logical groups
export type GameState = {
  currentPage: CurrentPage
  currentCardIndex: number
  hasUserAnswered: boolean
  isAnswerCorrect: boolean
  started: boolean
}

export type DeckState = {
  allCards: Card[]
  workingSet: Card[]
  recentlySeenCards: Card[]
  deckRefillIndex: number
  moduleFSRSCards: FSRSCardData[] // default empty array
  dueFSRSCards: FSRSCardData[] // default empty array
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
