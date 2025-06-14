import type { RichVocabItem } from "@/data/types"
import type { Card as FSRSCard, ReviewLog } from "ts-fsrs"

export type CurrentPage =
  | "start"
  | "practice"
  | "review"
  | "finish"
  | "fsrs-flashcard"

export type PracticeMode = "readings" | "kana"

export type Settings = {
  shuffleInput: boolean
  enabledAnswerCategories: string[]
}

export type MultipleChoiceButtonState = {
  isSelected: boolean
  isCorrect: boolean
}

// Card state within the current session
export type SessionCardStyle =
  | "multiple-choice"
  | "write"
  | "flashcard"
  | "done"

// Holds the core FSRS card and the logs from previous reviews
export type FSRSInfo = {
  card: FSRSCard
  logs?: ReviewLog[]
}

// Unified card data for the session, with pre-processed answers
export type PracticeCard = {
  key: string // derived from vocab.word
  vocab: RichVocabItem // The core vocabulary data for display
  fsrs: FSRSInfo
  practiceMode: PracticeMode
  sessionStyle: SessionCardStyle
  prompt: string // Question to display
  validAnswers: string[] // Acceptable written answers
}

// State for the three-queue session system
export type PracticeSessionState = {
  cardMap: Map<string, PracticeCard> // All cards by key
  moduleQueue: string[] // Keys for module cards
  reviewQueue: string[] // Keys for due non-module cards
  activeQueue: string[] // Buffer of up to 10 active card keys
  isFinished: boolean
}
