// core/answer-processing/types.ts
export type Answer = {
  segments: string[] // Array of strings with readings in brackets
  notes?: string
  isVariation?: boolean
  isKanaVariation?: boolean
  originalPoliteForm?: boolean
  sourceAnswerIndex?: number
  pronounType?: string
  honorificType?: string // Compound key for display (e.g., "くん+先生")
}

export type PracticeQuestion = {
  english: string
  hint?: string
  answers: Answer[]
}

export type ErrorRange = {
  start: number
  end: number
}

export type AnswerMatch = {
  answer: Answer
  similarity: number
  userErrors: ErrorRange[]
  answerErrors: ErrorRange[]
}

export type CheckResult = {
  isCorrect: boolean
  inputs: {
    value: string
    errors: ErrorRange[]
  }[]
  answers: {
    segments: string[]
    errors: ErrorRange[]
  }[]
  allMatches: AnswerMatch[]
}
