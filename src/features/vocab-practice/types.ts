// vocab-practice/types.ts
import type { RichVocabItem, Mnemonics } from "@/data/types"
import type { Card as FSRSCard, ReviewLog } from "ts-fsrs"

export type CurrentPage =
  | "start"
  | "practice"
  | "review"
  | "finish"
  | "fsrs-flashcard"
  | "kanji-introduction"

export type PracticeMode = "readings" | "kana"

export type Settings = {
  shuffleInput: boolean
  enabledAnswerCategories: string[]
  enablePrerequisites: boolean
  flipVocabQA: boolean
  flipKanjiRadicalQA: boolean
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
  | "introduction"
  | "done"

// Holds the core FSRS card and the logs from previous reviews
export type FSRSInfo = {
  card: FSRSCard
  logs?: ReviewLog[]
}

// Unified card data for the session, with pre-processed answers
export type PracticeCard = {
  key: string // e.g., "vocabulary:食べる" or "kanji:食"
  vocab: RichVocabItem // The core vocabulary data for display
  fsrs: FSRSInfo
  practiceMode: PracticeMode
  practiceItemType: DBPracticeItemType
  sessionStyle: SessionCardStyle
  prompt: string // Question to display
  validAnswers: string[] // Acceptable written answers
  /**
   * 'module': A required item for the current learning objective or its dependencies.
   * 'review': An optional, non-module due review card.
   */
  sessionScope: "module" | "review"
  mnemonics?: Mnemonics
  isDisabled: boolean
}

// State for the three-queue session system with dependency tracking
export type PracticeSessionState = {
  cardMap: Map<string, PracticeCard> // All cards by key
  moduleQueue: string[] // Keys for unlocked, module-scope cards
  reviewQueue: string[] // Keys for unlocked, review-scope cards
  activeQueue: string[] // Buffer of up to 10 active card keys
  isFinished: boolean
  unlocksMap: Map<string, string[]> // Maps a prerequisite's key to an array of keys for items that depend on it.
  dependencyMap: Map<string, string[]> // Maps a dependent item's key to an array of its remaining prerequisite keys.
  lockedKeys: Set<string> // Cards that are currently locked and waiting for their prerequisites to be completed
}
