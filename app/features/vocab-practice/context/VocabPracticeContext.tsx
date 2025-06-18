// vocab-practice/context/VocabPracticeContext.tsx
import { createContext, JSX, useContext, createEffect } from "solid-js"
import { createStore, SetStoreFunction } from "solid-js/store"
import { PracticeSessionManager } from "../logic/PracticeSessionManager"
import type { Settings, CurrentPage } from "../types"
import { Rating } from "ts-fsrs"

// --- LOCAL TYPE DEFINITIONS FOR THE CONTEXT ---

type AppState = {
  currentPage: CurrentPage
  manager: PracticeSessionManager | null
  settings: Settings
  activeQueue: string[]
  recentReviewHistory: { key: string; wasCorrect: boolean }[]
  incorrectAnswerMap: Map<string, number>
  isAnswered: boolean
  lastRating: Rating | null
}

type VocabPracticeContextType = {
  state: AppState
  setState: SetStoreFunction<AppState>
}

// --- CONTEXT CREATION & PROVIDER ---

export const CARDS_UNTIL_REVIEW = 7

const VocabPracticeContext = createContext<VocabPracticeContextType>()

type ContextProviderProps = {
  children: JSX.Element
}

export function VocabPracticeContextProvider(props: ContextProviderProps) {
  const [state, setState] = createStore<AppState>({
    currentPage: "start",
    manager: null,
    activeQueue: [],
    recentReviewHistory: [],
    incorrectAnswerMap: new Map(),
    isAnswered: false,
    lastRating: null,
    settings: {
      shuffleInput: true,
      enabledAnswerCategories: [],
      flipVocabQA: false,
      flipKanjiRadicalQA: true,
    },
  })

  // --- AUTOMATIC PAGE SWITCHING LOGIC ---

  createEffect(() => {
    if (state.manager && state.manager.isFinished()) {
      setState("currentPage", "finish")
    } else if (state.recentReviewHistory.length >= CARDS_UNTIL_REVIEW) {
      setState("currentPage", "review")
    } else if (
      state.manager?.getCurrentCard().sessionStyle === "multiple-choice" ||
      state.manager?.getCurrentCard().sessionStyle === "write"
    ) {
      setState("currentPage", "practice")
    } else if (state.manager?.getCurrentCard().sessionStyle === "flashcard") {
      setState("currentPage", "fsrs-flashcard")
    }
  })

  const contextValue: VocabPracticeContextType = {
    state,
    setState,
  }

  return (
    <VocabPracticeContext.Provider value={contextValue}>
      {props.children}
    </VocabPracticeContext.Provider>
  )
}

export function useVocabPracticeContext() {
  const context = useContext(VocabPracticeContext)
  if (!context) {
    throw new Error(
      "useVocabPracticeContext must be used within a VocabPracticeContextProvider",
    )
  }
  return context
}
