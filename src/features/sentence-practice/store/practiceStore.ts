// store/practiceStore.ts
import { createStore } from "solid-js/store"
import type { PracticeState, Difficulty } from "./types"
import { PracticeService } from "../core/PracticeService"
import type { FileLoader } from "./fileLoader"
import type { UnprocessedQuestion } from "../core/conjugation/types"

const initialState: PracticeState = {
  questions: [],
  rawQuestions: [],
  currentQuestionIndex: 0,
  inputs: {
    single: "",
    blanks: [],
  },
  showResult: false,
  isLoading: true,
  error: null,
  path: null,
  showFurigana: true,
  selectedDifficulty: "hard",
  effectiveDifficulty: "hard",
}

export function createPracticeStore(fileLoader: FileLoader) {
  const [store, setStore] = createStore(initialState)
  const practiceService = new PracticeService()

  function calculateEffectiveDifficulty(
    selectedDifficulty: Difficulty,
    currentQuestion?: UnprocessedQuestion,
  ): Difficulty {
    if (selectedDifficulty === "hard") return "hard"

    const hasBlankSegments = currentQuestion?.answers[0]?.segments.some(
      (segment) =>
        typeof segment === "object" && "blank" in segment && segment.blank,
    )

    return hasBlankSegments ? "easy" : "hard"
  }

  function prepareBlankInputs(
    currentRawQuestion: UnprocessedQuestion,
    currentInputs: (string | null | undefined)[] = [],
  ): (string | null | undefined)[] {
    return currentRawQuestion.answers[0].segments.map((segment, i) => {
      const isBlank = typeof segment === "object" && "blank" in segment
      return currentInputs[i] || (isBlank ? null : undefined)
    })
  }

  function resetInputsForDifficulty(difficulty: Difficulty) {
    return {
      effectiveDifficulty: difficulty,
      inputs: difficulty === "easy" ? { blanks: [] } : { single: "" },
      showResult: false,
      checkResult: undefined,
    }
  }

  // Extracted here for reuse in updateInput
  function checkCurrentAnswer(updateStore = true) {
    const currentQuestion = store.questions[store.currentQuestionIndex]
    const currentRawQuestion = store.rawQuestions[store.currentQuestionIndex]
    if (!currentQuestion) return

    const inputs =
      store.effectiveDifficulty === "easy"
        ? {
            blanks: prepareBlankInputs(currentRawQuestion, store.inputs.blanks),
          }
        : { single: store.inputs.single }

    const answers = practiceService.fillBlankInputs(inputs, currentQuestion)
    const result = practiceService.checkAnswer(answers, currentQuestion)

    if (updateStore) {
      setStore({ showResult: true, checkResult: result })
    }
    return result
  }

  return {
    store,
    setStore,
    actions: {
      checkAnswer: () => checkCurrentAnswer(),

      updateInput: (value: string, index?: number) => {
        if (store.effectiveDifficulty === "easy" && typeof index === "number") {
          setStore("inputs", "blanks", (blanks = []) => {
            const newBlanks = [...(blanks || [])]
            newBlanks[index] = value
            return newBlanks
          })
        } else {
          setStore("inputs", "single", value)
        }

        // If showing result, recheck answer with current question
        if (store.showResult) {
          const result = checkCurrentAnswer(false)
          setStore("checkResult", result)
        }
      },

      setDifficulty: (difficulty: Difficulty) => {
        const newEffectiveDifficulty = calculateEffectiveDifficulty(
          difficulty,
          store.rawQuestions[store.currentQuestionIndex],
        )
        setStore({
          selectedDifficulty: difficulty,
          ...resetInputsForDifficulty(newEffectiveDifficulty),
        })
      },

      nextQuestion: () => {
        if (store.currentQuestionIndex < store.questions.length - 1) {
          const nextIndex = store.currentQuestionIndex + 1
          const newEffectiveDifficulty = calculateEffectiveDifficulty(
            store.selectedDifficulty,
            store.rawQuestions[nextIndex],
          )
          setStore({
            currentQuestionIndex: nextIndex,
            ...resetInputsForDifficulty(newEffectiveDifficulty),
          })
        }
      },

      resetInput: () => {
        setStore({
          ...resetInputsForDifficulty(store.effectiveDifficulty),
        })
      },
      toggleFurigana: () => setStore("showFurigana", (prev) => !prev),
      loadQuestions: async (path: string) => {
        setStore({
          path,
          currentQuestionIndex: 0,
          inputs: { single: "", blanks: [] },
          showResult: false,
          isLoading: true,
          error: null,
        })

        try {
          const rawQuestions = await fileLoader.loadQuestionFile(path)
          const processedQuestions =
            practiceService.prepareQuestions(rawQuestions)

          const initialEffectiveDifficulty = calculateEffectiveDifficulty(
            store.selectedDifficulty,
            rawQuestions[0],
          )

          setStore({
            rawQuestions,
            questions: processedQuestions,
            isLoading: false,
            effectiveDifficulty: initialEffectiveDifficulty,
            inputs:
              initialEffectiveDifficulty === "easy"
                ? { blanks: [] }
                : { single: "" },
          })
        } catch (e) {
          setStore({
            error: e instanceof Error ? e.message : "Unknown error",
            questions: [],
            rawQuestions: [],
            isLoading: false,
          })
        }
      },
    },
  }
}
