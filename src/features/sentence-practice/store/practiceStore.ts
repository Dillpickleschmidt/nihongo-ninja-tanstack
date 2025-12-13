import { createStore } from "solid-js/store"
import type { Doc } from "../../../../convex/_generated/dataModel"
import type { ProcessedQuestion, CheckResult } from "../core/types"
import { prepareQuestion } from "../core/questionProcessor"
import { checkAnswer } from "../core/answerChecker"
import { anyContainsKanji } from "../core/textProcessor"

export type Difficulty = "easy" | "hard"

export interface PracticeState {
  questions: ProcessedQuestion[]
  currentQuestionIndex: number
  // Easy mode: array of inputs (one per blank, null = blank not yet filled, undefined = not a blank)
  blankInputs: (string | null | undefined)[]
  // Hard mode: single input string
  singleInput: string
  showResult: boolean
  checkResult: CheckResult | undefined
  difficulty: Difficulty
  effectiveDifficulty: Difficulty
  showFurigana: boolean
  isLoading: boolean
}

const initialState: PracticeState = {
  questions: [],
  currentQuestionIndex: 0,
  blankInputs: [],
  singleInput: "",
  showResult: false,
  checkResult: undefined,
  difficulty: "hard",
  effectiveDifficulty: "hard",
  showFurigana: true,
  isLoading: true,
}

export function createPracticeStore() {
  const [store, setStore] = createStore<PracticeState>(initialState)

  // Get current processed question
  function getCurrentQuestion(): ProcessedQuestion | undefined {
    return store.questions[store.currentQuestionIndex]
  }

  // Check if current question has blank segments (supports easy mode)
  function hasBlankSegments(question: ProcessedQuestion): boolean {
    return question.answers[0]?.some((seg) => seg.isBlank) ?? false
  }

  // Calculate effective difficulty based on selection and question structure
  function calculateEffectiveDifficulty(
    selectedDifficulty: Difficulty,
    question?: ProcessedQuestion,
  ): Difficulty {
    if (selectedDifficulty === "hard") return "hard"
    if (!question) return "hard"
    return hasBlankSegments(question) ? "easy" : "hard"
  }

  // Initialize blank inputs array for a question
  function initializeBlankInputs(question: ProcessedQuestion): (string | null | undefined)[] {
    const firstAnswer = question.answers[0]
    if (!firstAnswer) return []
    return firstAnswer.map((seg) => (seg.isBlank ? null : undefined))
  }

  // Get user's current answer text
  function getUserAnswer(): string {
    const question = getCurrentQuestion()
    if (!question) return ""

    if (store.effectiveDifficulty === "easy") {
      // Join segment texts, replacing blanks with user inputs
      const firstAnswer = question.answers[0]
      if (!firstAnswer) return ""

      // Check if user typed kanji in any blank (v1 approach)
      // If kana input → use pre-computed kana for all segments
      // If kanji input → use pre-computed plain (kanji without brackets)
      const blankValues = store.blankInputs.filter(
        (v): v is string => typeof v === "string",
      )
      const shouldUseKana = !anyContainsKanji(blankValues)

      return firstAnswer
        .map((seg, i) => {
          if (seg.isBlank) {
            return store.blankInputs[i] ?? ""
          }
          // Use pre-computed properties from RichSegment
          return shouldUseKana ? seg.kana : seg.plain
        })
        .join("")
    } else {
      return store.singleInput
    }
  }

  // Check the current answer
  function doCheckAnswer(): CheckResult | undefined {
    const question = getCurrentQuestion()
    if (!question) return undefined

    const userAnswer = getUserAnswer()
    return checkAnswer(userAnswer, question.validAnswers)
  }

  return {
    store,
    setStore,
    actions: {
      // Initialize with raw questions from Convex
      setQuestions: (rawQuestions: Doc<"sentencePracticeQuestions">[]) => {
        const processedQuestions = rawQuestions.map(prepareQuestion)
        const firstQuestion = processedQuestions[0]
        const effectiveDifficulty = calculateEffectiveDifficulty(
          store.difficulty,
          firstQuestion,
        )
        const blankInputs = firstQuestion
          ? initializeBlankInputs(firstQuestion)
          : []

        setStore({
          questions: processedQuestions,
          currentQuestionIndex: 0,
          blankInputs,
          singleInput: "",
          showResult: false,
          checkResult: undefined,
          effectiveDifficulty,
          isLoading: false,
        })
      },

      // Update input for easy mode (by index) or hard mode (single)
      updateInput: (value: string, index?: number) => {
        if (store.effectiveDifficulty === "easy" && typeof index === "number") {
          setStore("blankInputs", index, value)
        } else {
          setStore("singleInput", value)
        }

        // If showing result, recheck immediately
        if (store.showResult) {
          const result = doCheckAnswer()
          setStore("checkResult", result)
        }
      },

      // Check the current answer
      checkAnswer: () => {
        const result = doCheckAnswer()
        setStore({
          showResult: true,
          checkResult: result,
        })
      },

      // Move to next question
      nextQuestion: () => {
        const nextIndex = store.currentQuestionIndex + 1
        if (nextIndex >= store.questions.length) return

        const nextQuestion = store.questions[nextIndex]
        const effectiveDifficulty = calculateEffectiveDifficulty(
          store.difficulty,
          nextQuestion,
        )
        const blankInputs = initializeBlankInputs(nextQuestion)

        setStore({
          currentQuestionIndex: nextIndex,
          blankInputs,
          singleInput: "",
          showResult: false,
          checkResult: undefined,
          effectiveDifficulty,
        })
      },

      // Reset current question
      resetInput: () => {
        const question = getCurrentQuestion()
        const blankInputs = question ? initializeBlankInputs(question) : []

        setStore({
          blankInputs,
          singleInput: "",
          showResult: false,
          checkResult: undefined,
        })
      },

      // Change difficulty
      setDifficulty: (difficulty: Difficulty) => {
        const question = getCurrentQuestion()
        const effectiveDifficulty = calculateEffectiveDifficulty(
          difficulty,
          question,
        )
        const blankInputs = question ? initializeBlankInputs(question) : []

        setStore({
          difficulty,
          effectiveDifficulty,
          blankInputs,
          singleInput: "",
          showResult: false,
          checkResult: undefined,
        })
      },

      // Toggle furigana display
      toggleFurigana: () => {
        setStore("showFurigana", (prev) => !prev)
      },
    },
    // Computed values
    computed: {
      getCurrentQuestion,
      getUserAnswer,
      hasMoreQuestions: () =>
        store.currentQuestionIndex < store.questions.length - 1,
      isComplete: () =>
        store.currentQuestionIndex >= store.questions.length - 1 &&
        store.showResult &&
        store.checkResult?.isCorrect,
    },
  }
}

export type PracticeStore = ReturnType<typeof createPracticeStore>
