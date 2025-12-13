// Store
export { PracticeProvider, usePractice } from "./store/PracticeContext"
export { createPracticeStore } from "./store/practiceStore"
export type { PracticeState, Difficulty, PracticeStore } from "./store/practiceStore"

// UI Components
export { default as PracticeContainer } from "./ui/PracticeContainer"
export { default as PromptDisplay } from "./ui/PromptDisplay"
export { default as FillInBlankInput } from "./ui/FillInBlankInput"
export { default as FullInput } from "./ui/FullInput"
export { default as ResultDisplay } from "./ui/ResultDisplay"
export { default as DifficultySelector } from "./ui/DifficultySelector"
export { default as ProgressDisplay } from "./ui/ProgressDisplay"

// Core
export { prepareQuestion } from "./core/questionProcessor"
export { checkAnswer } from "./core/answerChecker"
export { processSegments } from "./core/segmentProcessor"
export { generateValidAnswers } from "./core/variationGenerator"

// Types
export type { RichSegment, RichAnswer, ProcessedQuestion, CheckResult, ErrorRange } from "./core/types"
