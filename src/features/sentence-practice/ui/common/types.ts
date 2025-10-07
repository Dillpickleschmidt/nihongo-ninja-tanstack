// store/types.ts
import type {
  PracticeQuestion,
  CheckResult,
} from "../../core/answer-processing/types"

export type PracticeState = {
  questions: PracticeQuestion[]
  currentQuestionIndex: number
  currentInput: string
  showResult: boolean
  isLoading: boolean
  error: string | null
  path: string | null
  showFurigana: boolean
  checkResult?: CheckResult
}
