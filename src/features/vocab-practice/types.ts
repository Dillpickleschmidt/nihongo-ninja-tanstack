import type { Card as FSRSCard, ReviewLog } from "ts-fsrs"
import type {
  RichVocabItem,
  PracticeMode,
  PracticeItemType,
} from "convex/validators"

// Session card UI state
export type SessionCardStyle =
  | "multiple-choice"
  | "write"
  | "flashcard"
  | "introduction"
  | "done"

// FSRS card + logs wrapper
export type FSRSInfo = {
  card: FSRSCard
  logs?: ReviewLog[]
}

// Unified practice card (mnemonics accessed via vocab.mnemonics)
export type PracticeCard = {
  key: string
  vocab: RichVocabItem // includes mnemonics
  fsrs: FSRSInfo
  practiceMode: PracticeMode
  practiceItemType: PracticeItemType
  sessionStyle: SessionCardStyle
  prompt: string
  validAnswers: string[]
  sessionScope: "module" | "review"
  isDisabled: boolean
}

// Session state with queues
export type PracticeSessionState = {
  cardMap: Map<string, PracticeCard>
  moduleQueue: string[]
  reviewQueue: string[]
  activeQueue: string[]
  isFinished: boolean
  unlocksMap: Map<string, string[]>
  dependencyMap: Map<string, string[]>
  lockedKeys: Set<string>
}
