// vocab-practice/context/VocabPracticeContext.tsx
import {
  createContext,
  JSX,
  useContext,
  createEffect,
  createSignal,
} from "solid-js"
import { createStore, SetStoreFunction } from "solid-js/store"
import type { Settings, CurrentPage } from "../types"
import { Rating } from "ts-fsrs"
import { useSettings } from "@/context/SettingsContext"
import {
  usePracticeManager,
  type PracticeManagerHook,
} from "../logic/usePracticeManager"
import { fetchAdditionalSvgsForSession } from "../utils/svg-helpers"
import type {
  KanjiDisplaySettings,
  KanjiAnimationSettings,
  KanjiStyleSettings,
} from "@/components/KanjiAnimation"

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

  // SVG data management
  svgData: () => Map<string, string>
  getSvgForCharacter: (character: string) => Promise<string | null>
  initializeSvgData: (initialSvgs: Map<string, string>) => void

  // Kanji animation settings
  kanjiDisplaySettings: KanjiDisplaySettings
  setKanjiDisplaySettings: SetStoreFunction<KanjiDisplaySettings>
  kanjiAnimationSettings: KanjiAnimationSettings
  setKanjiAnimationSettings: SetStoreFunction<KanjiAnimationSettings>
  kanjiStyleSettings: KanjiStyleSettings

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
  // Get default settings from SettingsContext
  const { deviceUISettings } = useSettings()
  const practiceDefaults = deviceUISettings().routes["vocab-practice"]

  // UI-only state store
  const [uiState, setUIState] = createStore<UIState>({
    currentPage: "start",
    recentReviewHistory: [],
    incorrectAnswerMap: new Map(),
    isAnswered: false,
    lastRating: null,
    settings: {
      shuffleAnswers: practiceDefaults["shuffle-answers"],
      enabledAnswerCategories: [],
      enableKanjiRadicalPrereqs:
        practiceDefaults["enable-kanji-radical-prereqs"],
      flipVocabQA: practiceDefaults["flip-vocab-qa"],
      flipKanjiRadicalQA: practiceDefaults["flip-kanji-radical-qa"],
    },
  })

  // SVG data management
  const [svgData, setSvgData] = createSignal<Map<string, string>>(new Map())
  const [additionalSvgsFetched, setAdditionalSvgsFetched] = createSignal(false)

  // Kanji animation settings (reactive stores)
  const [kanjiDisplaySettings, setKanjiDisplaySettings] =
    createStore<KanjiDisplaySettings>({
      numbers: true,
      startDots: true,
      directionLines: true,
    })

  const [kanjiAnimationSettings, setKanjiAnimationSettings] =
    createStore<KanjiAnimationSettings>({
      speed: 0.5,
      autostart: true,
    })

  const kanjiStyleSettings: KanjiStyleSettings = {
    strokeWidth: 3,
    strokeColor: "var(--color-primary)",
    size: 190,
    showGrid: true,
  }

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

  // --- SVG DATA MANAGEMENT FUNCTIONS ---

  const initializeSvgData = (initialSvgs: Map<string, string>) => {
    setSvgData(initialSvgs)
  }

  const getSvgForCharacter = async (
    character: string,
  ): Promise<string | null> => {
    const currentData = svgData()

    // If we already have the SVG, return it
    if (currentData.has(character)) {
      return currentData.get(character)!
    }

    // If we haven't fetched additional SVGs yet and have a manager, try to fetch them
    if (!additionalSvgsFetched() && managerHook.manager()) {
      const sessionState = managerHook.getManagerState()
      const additionalSvgs = await fetchAdditionalSvgsForSession(
        sessionState,
        currentData,
      )

      // Merge additional SVGs with existing data
      const mergedData = new Map([...currentData, ...additionalSvgs])
      setSvgData(mergedData)
      setAdditionalSvgsFetched(true)

      // Return the character if it was found in additional fetch
      return mergedData.get(character) || null
    }

    // Character not found
    return null
  }

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

    // SVG data management
    svgData,
    getSvgForCharacter,
    initializeSvgData,

    // Kanji animation settings
    kanjiDisplaySettings,
    setKanjiDisplaySettings,
    kanjiAnimationSettings,
    setKanjiAnimationSettings,
    kanjiStyleSettings,

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
