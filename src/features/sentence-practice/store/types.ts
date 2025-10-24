// store/types.ts
import type {
  PracticeQuestion,
  CheckResult,
  ErrorRange,
} from "../core/answer-processing/types"
import type { UnprocessedQuestion } from "../conjugation/types"
import type { KagomeToken } from "../kagome/types/kagome"
import type { OverlayResult } from "../core/text/KanaToKanjiOverlay"

export type Difficulty = "easy" | "hard"

export type PracticeState = {
  questions: PracticeQuestion[]
  rawQuestions: UnprocessedQuestion[]
  currentQuestionIndex: number
  inputs: AnswerInputs
  showResult: boolean
  isLoading: boolean
  error: string | null
  path: string | null
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
