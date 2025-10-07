// vocab-practice/context/VocabPracticeContext.tsx
import {
  createContext,
  JSX,
  useContext,
  createEffect,
  createSignal,
  onCleanup,
} from "solid-js"
import { createStore, SetStoreFunction } from "solid-js/store"
import type { Settings, CurrentPage } from "../types"
import { Rating } from "ts-fsrs"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import type { User } from "@supabase/supabase-js"
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
import { updateSession } from "@/features/supabase/db/module-progress"

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

  // Session tracking
  moduleId: string
  sessionId: () => string | null
  setSessionId: (id: string | null) => void
  addTimeAndQuestions: (seconds: number, incrementQuestions: boolean) => void
  flushToDatabase: () => void

  // Manager hook (reactive practice logic)
} & PracticeManagerHook

// --- CONTEXT CREATION & PROVIDER ---

export const CARDS_UNTIL_REVIEW = 7

const VocabPracticeContext = createContext<VocabPracticeContextType>()

type ContextProviderProps = {
  children: JSX.Element
  user: User | null
  moduleId: string
}

export function VocabPracticeContextProvider(props: ContextProviderProps) {
  // Get default settings from user settings
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(props.user?.id || null),
  )
  const practiceDefaults = settingsQuery.data.routes["vocab-practice"]

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
      enableKanjiRadicalPrereqs: !!props.user
        ? practiceDefaults["enable-kanji-radical-prereqs"]
        : false, // Always disabled for unauthenticated users
      flipVocabQA: practiceDefaults["flip-vocab-qa"],
      flipKanjiRadicalQA: practiceDefaults["flip-kanji-radical-qa"],
    },
  })

  // Session tracking state
  const [sessionId, setSessionId] = createSignal<string | null>(null)
  let cumulativeTime = 0
  let cumulativeQuestions = 0
  let updateTimer: ReturnType<typeof setTimeout> | null = null
  let firstEventTime: number | null = null
  const WINDOW_DURATION = 5000 // 5 seconds

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

  // --- SESSION TRACKING HELPERS ---

  const flushToDatabase = () => {
    const sid = sessionId()
    if (!sid || !props.user) return

    updateSession(sid, {
      durationSeconds: cumulativeTime,
      questionsAnswered: cumulativeQuestions,
    })
  }

  const addTimeAndQuestions = (
    seconds: number,
    incrementQuestions: boolean,
  ) => {
    // Skip if not authenticated
    if (!props.user) return

    // Update in-memory counters
    cumulativeTime += seconds
    if (incrementQuestions) cumulativeQuestions++

    const now = Date.now()

    // Start new window if needed
    if (firstEventTime === null) {
      firstEventTime = now
    }

    // Calculate remaining time in window
    const timeInWindow = now - firstEventTime
    const remainingTime = WINDOW_DURATION - timeInWindow

    // Clear existing timer
    if (updateTimer) {
      clearTimeout(updateTimer)
    }

    // If window expired, write immediately and start new window
    if (remainingTime <= 0) {
      flushToDatabase()
      firstEventTime = now

      updateTimer = setTimeout(() => {
        flushToDatabase()
        updateTimer = null
        firstEventTime = null
      }, WINDOW_DURATION)
      return
    }

    // Schedule write for remaining time in window
    updateTimer = setTimeout(() => {
      flushToDatabase()
      updateTimer = null
      firstEventTime = null
    }, remainingTime)
  }

  // Cleanup on unmount
  onCleanup(() => {
    if (updateTimer) {
      clearTimeout(updateTimer)
      flushToDatabase()
    }
  })

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

    // Session tracking
    moduleId: props.moduleId,
    sessionId,
    setSessionId,
    addTimeAndQuestions,
    flushToDatabase,

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
