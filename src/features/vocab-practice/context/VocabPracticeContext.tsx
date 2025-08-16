// vocab-practice/context/VocabPracticeContext.tsx
import { createContext, JSX, useContext, createEffect } from "solid-js"
import { createStore, SetStoreFunction } from "solid-js/store"
import type { Settings, CurrentPage } from "../types"
import { Rating } from "ts-fsrs"
import {
  usePracticeManager,
  type PracticeManagerHook,
} from "../logic/usePracticeManager"

// --- LOCAL TYPE DEFINITIONS FOR THE CONTEXT ---

// UI-only state (non-manager state)
type UIState = {
  currentPage: CurrentPage
  settings: Settings
  recentReviewHistory: { key: string; wasCorrect: boolean }[]
  incorrectAnswerMap: Map<string, number>
  isAnswered: boolean
  lastRating: Rating | null
}

type VocabPracticeContextType = {
  // UI state
  uiState: UIState
  setUIState: SetStoreFunction<UIState>

  // Combined business + UI logic
  answerCardWithUIUpdate: (rating: Rating) => Promise<void>

  // Manager hook (reactive practice logic)
} & PracticeManagerHook

// --- CONTEXT CREATION & PROVIDER ---

export const CARDS_UNTIL_REVIEW = 7

const VocabPracticeContext = createContext<VocabPracticeContextType>()

type ContextProviderProps = {
  children: JSX.Element
}

export function VocabPracticeContextProvider(props: ContextProviderProps) {
  // UI-only state store
  const [uiState, setUIState] = createStore<UIState>({
    currentPage: "start",
    recentReviewHistory: [],
    incorrectAnswerMap: new Map(),
    isAnswered: false,
    lastRating: null,
    settings: {
      shuffleInput: true,
      enabledAnswerCategories: [],
      enablePrerequisites: true,
      flipVocabQA: false,
      flipKanjiRadicalQA: true,
    },
  })

  // Practice manager hook (handles reactive practice logic)
  const managerHook = usePracticeManager()

  // --- AUTOMATIC PAGE SWITCHING LOGIC ---

  createEffect(() => {
    if (managerHook.isFinished()) {
      setUIState("currentPage", "finish")
    } else if (uiState.recentReviewHistory.length >= CARDS_UNTIL_REVIEW) {
      setUIState("currentPage", "review")
    } else if (managerHook.currentCard()?.sessionStyle === "introduction") {
      setUIState("currentPage", "kanji-introduction")
    } else if (
      managerHook.currentCard()?.sessionStyle === "multiple-choice" ||
      managerHook.currentCard()?.sessionStyle === "write"
    ) {
      setUIState("currentPage", "practice")
    } else if (managerHook.currentCard()?.sessionStyle === "flashcard") {
      setUIState("currentPage", "fsrs-flashcard")
    }
  })

  // Wrapper function that combines business logic + UI state updates
  const answerCardWithUIUpdate = async (rating: Rating): Promise<void> => {
    const card = managerHook.currentCard()
    if (!card) return

    const isCorrect = rating !== Rating.Again

    // 1. Call business logic
    await managerHook.answerCard(rating)

    // 2. Update UI state automatically
    setUIState((prevState) => {
      const newHistory = [
        ...prevState.recentReviewHistory,
        { key: card.key, wasCorrect: isCorrect },
      ]

      const newIncorrectMap = new Map(prevState.incorrectAnswerMap)
      if (!isCorrect) {
        const currentCount = newIncorrectMap.get(card.key) ?? 0
        newIncorrectMap.set(card.key, currentCount + 1)
      }

      return {
        ...prevState,
        recentReviewHistory: newHistory,
        incorrectAnswerMap: newIncorrectMap,
        isAnswered: false, // Reset for next card
        lastRating: null,
      }
    })
  }

  const contextValue: VocabPracticeContextType = {
    // UI state
    uiState,
    setUIState,

    // Combined business + UI logic
    answerCardWithUIUpdate,

    // Manager hook values (spread all manager hook properties)
    ...managerHook,
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
