// store/types.ts
import type {
  PracticeQuestion,
  CheckResult,
} from "../core/answer-processing/types"
import type { Doc } from "convex/_generated/dataModel"
import type { KagomeToken } from "../kagome/types/kagome"
import type { OverlayResult } from "../core/text/KanaToKanjiOverlay"

export type Difficulty = "easy" | "hard"

export type PracticeState = {
  questions: PracticeQuestion[]
  rawQuestions: Doc<"sentencePracticeQuestions">[]
  currentQuestionIndex: number
  inputs: AnswerInputs
  showResult: boolean
  isLoading: boolean
  error: string | null
  showFurigana: boolean
  selectedDifficulty: Difficulty
  effectiveDifficulty: Difficulty
  checkResult?: CheckResult
  userInputTokens?: KagomeToken[]
  userInputOverlay?: OverlayResult
}

export type AnswerInputs = {
  single?: string // For hard mode
  blanks?: (string | null | undefined)[] // For easy mode
}
