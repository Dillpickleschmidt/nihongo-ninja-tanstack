// vocab-practice/context/VocabPracticeContext.tsx
import { createContext, JSX, useContext } from "solid-js"
import { createStore } from "solid-js/store"
import { GameState, DeckState, Settings } from "../types"

// Separate initial states for clarity
export const initialGameState: GameState = {
  currentPage: "start",
  currentCardIndex: 0,
  hasUserAnswered: false,
  isAnswerCorrect: false,
}

export const initialDeckState: DeckState = {
  data: [],
  activeDeck: [],
  recentlySeenCards: [],
  deckRefillIndex: 0,
}

export const initialSettings: Settings = {
  practiceMode: "readings",
  shuffleInput: true,
  enabledAnswerCategories: [],
}

export type VocabPracticeContextType = {
  gameState: GameState
  setGameState: (
    update: Partial<GameState> | ((prev: GameState) => GameState),
  ) => void
  deckState: DeckState
  setDeckState: (
    update: Partial<DeckState> | ((prev: DeckState) => DeckState),
  ) => void
  settings: Settings
  setSettings: (
    update: Partial<Settings> | ((prev: Settings) => Settings),
  ) => void
}

const VocabPracticeContext = createContext<VocabPracticeContextType>()

export function VocabPracticeContextProvider(props: { children: JSX.Element }) {
  const [gameState, setGameState] = createStore(initialGameState)
  const [deckState, setDeckState] = createStore(initialDeckState)
  const [settings, setSettings] = createStore(initialSettings)

  const contextValue: VocabPracticeContextType = {
    gameState,
    setGameState,
    deckState,
    setDeckState,
    settings,
    setSettings,
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
