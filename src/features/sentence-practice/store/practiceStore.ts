import { createStore } from "solid-js/store"
import type { Doc } from "../../../../convex/_generated/dataModel"
import type { ProcessedQuestion, CheckResult, Difficulty } from "../core/types"
import type { KagomeToken } from "../kagome/types"
import type { OverlayResult } from "../core/kanaToKanjiOverlay"
import { prepareQuestion } from "../core/questionProcessor"
import { checkAnswer } from "../core/answer-processing/answerChecker"
import {
  calculateEffectiveDifficulty,
  createNextQuestionSnapshot,
  createSessionSnapshot,
  isSessionComplete,
} from "../session/practiceSession"

export interface PracticeState {
  questions: ProcessedQuestion[]
  currentQuestionIndex: number
  // Canonical answer text for the current question, regardless of mode.
  answerText: string
  showResult: boolean
  checkResult: CheckResult | undefined
  difficulty: Difficulty
  effectiveDifficulty: Difficulty
  showFurigana: boolean
  isLoading: boolean
  // Tokenization state
  kagomeReady: boolean
  modelAnswerTokens: KagomeToken[]
  userInputTokens: KagomeToken[]
  overlayResult: OverlayResult | null
  currentSetId: string | null
}

const initialState: PracticeState = {
  questions: [],
  currentQuestionIndex: 0,
  answerText: "",
  showResult: false,
  checkResult: undefined,
  difficulty: "hard",
  effectiveDifficulty: "hard",
  showFurigana: true,
  isLoading: true,
  // Tokenization initial state
  kagomeReady: false,
  modelAnswerTokens: [],
  userInputTokens: [],
  overlayResult: null,
  currentSetId: null,
}

export function createPracticeStore(
  onProgressEvent?: (progressUnitsDelta: number, questionsAnsweredDelta: number) => void,
) {
  const [store, setStore] = createStore<PracticeState>(initialState)

  function getCurrentQuestion(): ProcessedQuestion | undefined {
    return store.questions[store.currentQuestionIndex]
  }

  function getCurrentAnswerText(): string {
    return store.answerText
  }

  function evaluateCurrentAnswer(): CheckResult | undefined {
    const question = getCurrentQuestion()
    if (!question) return undefined

    return checkAnswer(
      getCurrentAnswerText(),
      question.preparedAnswersForMatching,
    )
  }

  return {
    store,
    setStore,
    actions: {
      // Initialize with raw questions from Convex
      initializeSession: (rawQuestions: Doc<"sentencePracticeQuestions">[]) => {
        const nextSetId = rawQuestions[0]?.setId ?? null

        // Preserve the in-progress session when the same set re-renders.
        if (store.currentSetId === nextSetId && store.questions.length > 0) {
          return
        }

        const processedQuestions = rawQuestions.map(prepareQuestion)
        const session = createSessionSnapshot(processedQuestions, store.difficulty)

        setStore({
          questions: session.questions,
          currentQuestionIndex: session.currentQuestionIndex,
          answerText: "",
          showResult: false,
          checkResult: undefined,
          effectiveDifficulty: session.effectiveDifficulty,
          isLoading: false,
          currentSetId: nextSetId,
          // Reset tokenization state
          modelAnswerTokens: [],
          userInputTokens: [],
          overlayResult: null,
        })
      },

      setAnswerText: (value: string) => {
        setStore("answerText", value)

        // Keep the result panel live if the user edits after checking.
        if (store.showResult) {
          const result = evaluateCurrentAnswer()
          setStore("checkResult", result)
        }
      },

      // Check the current answer
      checkAnswer: () => {
        const result = evaluateCurrentAnswer()
        setStore({
          showResult: true,
          checkResult: result,
        })
      },

      // Move to next question
      nextQuestion: () => {
        const currentDifficulty = store.effectiveDifficulty
        const progressUnitsDelta = currentDifficulty === "easy" ? 15 : 30
        const nextIndex = store.currentQuestionIndex + 1
        if (nextIndex >= store.questions.length) return

        onProgressEvent?.(progressUnitsDelta, 1)

        const session = createNextQuestionSnapshot(
          store.questions,
          nextIndex,
          store.difficulty,
        )
        if (!session) return

        setStore({
          currentQuestionIndex: session.currentQuestionIndex,
          answerText: "",
          showResult: false,
          checkResult: undefined,
          effectiveDifficulty: session.effectiveDifficulty,
          // Reset tokenization state
          modelAnswerTokens: [],
          userInputTokens: [],
          overlayResult: null,
        })
      },

      // Reset current question
      resetInput: () => {
        setStore({
          answerText: "",
          showResult: false,
          checkResult: undefined,
        })
      },

      // Change difficulty
      setDifficulty: (difficulty: Difficulty) => {
        const question = getCurrentQuestion()
        const effectiveDifficulty = calculateEffectiveDifficulty(difficulty, question)

        setStore({
          difficulty,
          effectiveDifficulty,
          answerText: "",
          showResult: false,
          checkResult: undefined,
        })
      },

      // Toggle furigana display
      toggleFurigana: () => {
        setStore("showFurigana", (prev) => !prev)
      },

      // Tokenization actions
      setKagomeReady: (ready: boolean) => {
        setStore("kagomeReady", ready)
      },

      setModelAnswerTokens: (tokens: KagomeToken[]) => {
        setStore("modelAnswerTokens", tokens)
      },

      setUserInputTokens: (
        tokens: KagomeToken[],
        overlayResult: OverlayResult | null,
      ) => {
        setStore({
          userInputTokens: tokens,
          overlayResult,
        })
      },

      clearUserInputTokens: () => {
        setStore({
          userInputTokens: [],
          overlayResult: null,
        })
      },
    },
    // Computed values
    computed: {
      getCurrentQuestion,
      getCurrentAnswerText,
      hasMoreQuestions: () =>
        store.currentQuestionIndex < store.questions.length - 1,
      isComplete: () =>
        isSessionComplete(
          store.currentQuestionIndex,
          store.questions.length,
          store.showResult,
          store.checkResult?.isCorrect,
        ),
    },
  }
}

export type PracticeStore = ReturnType<typeof createPracticeStore>
