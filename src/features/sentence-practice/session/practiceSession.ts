import type { ProcessedQuestion, Difficulty } from "../core/types"

export interface SessionSnapshot {
  questions: ProcessedQuestion[]
  currentQuestionIndex: number
  effectiveDifficulty: Difficulty
}

export function hasBlankSegments(question: ProcessedQuestion): boolean {
  return question.displayAnswer.some((segment) => segment.isBlank)
}

export function calculateEffectiveDifficulty(
  selectedDifficulty: Difficulty,
  question?: ProcessedQuestion,
): Difficulty {
  if (selectedDifficulty === "hard") return "hard"
  if (!question) return "hard"
  return hasBlankSegments(question) ? "easy" : "hard"
}

export function createSessionSnapshot(
  questions: ProcessedQuestion[],
  selectedDifficulty: Difficulty,
): SessionSnapshot {
  const firstQuestion = questions[0]
  const effectiveDifficulty = calculateEffectiveDifficulty(
    selectedDifficulty,
    firstQuestion,
  )

  return {
    questions,
    currentQuestionIndex: 0,
    effectiveDifficulty,
  }
}

export function createNextQuestionSnapshot(
  questions: ProcessedQuestion[],
  nextIndex: number,
  selectedDifficulty: Difficulty,
): SessionSnapshot | undefined {
  const nextQuestion = questions[nextIndex]
  if (!nextQuestion) return undefined

  return {
    questions,
    currentQuestionIndex: nextIndex,
    effectiveDifficulty: calculateEffectiveDifficulty(
      selectedDifficulty,
      nextQuestion,
    ),
  }
}

export function isSessionComplete(
  currentQuestionIndex: number,
  questionsLength: number,
  showResult: boolean,
  isCorrect: boolean | undefined,
): boolean {
  return (
    currentQuestionIndex >= questionsLength - 1 && showResult && !!isCorrect
  )
}
