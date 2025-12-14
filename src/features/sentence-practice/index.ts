// Store
export { PracticeProvider, usePractice } from "./store/PracticeContext"
export { createPracticeStore } from "./store/practiceStore"
export type { PracticeState, Difficulty, PracticeStore } from "./store/practiceStore"

// UI Components
export { default as PracticeContainer } from "./ui/practice/PracticeContainer"
export { default as PromptDisplay } from "./ui/practice/PromptDisplay"
export { default as FillInBlankInput } from "./ui/practice/FillInBlankInput"
export { default as FullInput } from "./ui/practice/FullInput"
export { default as ResultDisplay } from "./ui/practice/ResultDisplay"
export { default as DifficultySelector } from "./ui/practice/DifficultySelector"
export { default as ProgressDisplay } from "./ui/practice/ProgressDisplay"
export { default as AlternativeAnswers } from "./ui/practice/AlternativeAnswers"
export { default as DebugPanel } from "./ui/practice/DebugPanel"
export { default as EasyModeDebugPanel } from "./ui/practice/EasyModeDebugPanel"

// Core
export { prepareQuestion } from "./core/questionProcessor"
export { checkAnswer } from "./core/answer-processing/answerChecker"
export { processSegments } from "./core/segmentProcessor"
export { generateValidAnswers } from "./core/answer-processing/variationGenerator"

// Types
export type {
  RichSegment,
  RichAnswer,
  AnswerMatch,
  ProcessedQuestion,
  CheckResult,
  ErrorRange,
} from "./core/types"
