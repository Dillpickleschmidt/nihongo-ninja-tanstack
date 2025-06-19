// vocab-practice/context/VocabPracticeContext.tsx
import { createContext, JSX, useContext, createEffect } from "solid-js"
import { createStore, SetStoreFunction } from "solid-js/store"
import { PracticeSessionManager } from "../logic/PracticeSessionManager"
import type { Settings, CurrentPage, PracticeCard } from "../types"
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
  currentCard: PracticeCard | null
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
    currentCard: null,
  })

  createEffect(() => {
    // Runs when state.manager or state.activeQueue changes.
    if (
      state.manager &&
      state.activeQueue.length > 0 &&
      state.currentCard === null
    ) {
      try {
        setState("currentCard", state.manager.getCurrentCard())
      } catch (e) {
        console.warn("Could not set initial currentCard from manager:", e)
        setState("currentCard", null)
      }
    } else if (
      state.manager &&
      state.activeQueue.length === 0 &&
      state.currentCard !== null &&
      state.manager.isFinished()
    ) {
      // If the session finished and active queue became empty, clear currentCard
      setState("currentCard", null)
    }
  })

  // --- AUTOMATIC PAGE SWITCHING LOGIC ---

  createEffect(() => {
    if (state.manager && state.manager.isFinished()) {
      setState("currentPage", "finish")
    } else if (state.recentReviewHistory.length >= CARDS_UNTIL_REVIEW) {
      setState("currentPage", "review")
    } else if (state.currentCard?.sessionStyle === "introduction") {
      setState("currentPage", "kanji-introduction")
    } else if (
      state.currentCard?.sessionStyle === "multiple-choice" ||
      state.currentCard?.sessionStyle === "write"
    ) {
      setState("currentPage", "practice")
    } else if (state.currentCard?.sessionStyle === "flashcard") {
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
