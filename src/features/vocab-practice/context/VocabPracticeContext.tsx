// vocab-practice/context/VocabPracticeContext.tsx
import {
  createContext,
  JSX,
  useContext,
  createEffect,
  createSignal,
  createMemo,
} from "solid-js"
import { createStore, SetStoreFunction } from "solid-js/store"
import type { Settings, CurrentPage, PracticeMode } from "../types"
import { Rating } from "ts-fsrs"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"
import {
  usePracticeManager,
  type PracticeManagerHook,
} from "../logic/usePracticeManager"
import { useQueryClient, type QueryClient } from "@tanstack/solid-query"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"
import { fetchAdditionalSvgsForSession } from "../utils/svg-helpers"
import type {
  KanjiDisplaySettings,
  KanjiAnimationSettings,
  KanjiStyleSettings,
} from "@/components/KanjiAnimation"
import { useSessionTracking } from "@/features/module-session-manager/useSessionTracking"
import { getActiveLiveService } from "@/features/srs-services/utils"
import type { SRSServiceType } from "@/features/srs-services/types"

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

  // Shared queries
  settingsQuery: UseQueryResult<any, DefaultError>
  queryClient: QueryClient

  // Route params
  mode: PracticeMode
  userId: string | null
  moduleId?: string
  deckId?: string

  // SRS service state
  activeService: () => SRSServiceType
  prerequisitesEnabled: () => boolean
  prerequisitesDisabledReason: () => string | null

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
  startSession: () => Promise<void>
  addTimeAndQuestions: (seconds: number, incrementQuestions: boolean) => void

  // Manager hook (reactive practice logic)
} & PracticeManagerHook

// --- CONTEXT CREATION & PROVIDER ---

export const CARDS_UNTIL_REVIEW = 7

const VocabPracticeContext = createContext<VocabPracticeContextType>()

type ContextProviderProps = {
  children: JSX.Element
  userId: string | null
  mode: PracticeMode
  moduleId?: string
  deckId?: string
}

export function VocabPracticeContextProvider(props: ContextProviderProps) {
  // Shared queries
  const queryClient = useQueryClient()
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(props.userId),
  )
  const practiceDefaults = settingsQuery.data!.routes["vocab-practice"]

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
      enableKanjiRadicalPrereqs: !!props.userId
        ? practiceDefaults["enable-kanji-radical-prereqs"]
        : false, // Always disabled for unauthenticated users
    },
  })

  // Compute session identifier
  const getSessionIdentifier = () => {
    if (props.moduleId) return props.moduleId
    if (props.deckId && props.userId) return `${props.userId}/${props.deckId}`
    return null
  }

  // Session tracking - conditionally initialize
  const sessionIdentifier = getSessionIdentifier()
  const { startSession, addTimeAndQuestions } = sessionIdentifier
    ? useSessionTracking(props.userId, sessionIdentifier)
    : { startSession: async () => {}, addTimeAndQuestions: () => {} }

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

  // --- COMPUTED SRS SERVICE STATE ---

  // Get the active live service (if any)
  // Returns "local" if using local FSRS, or the service name if a live service is active
  const activeService = createMemo<SRSServiceType>(() => {
    const preferences = settingsQuery.data!["service-preferences"]
    const liveService = getActiveLiveService(preferences)
    // If no live service, we're using local FSRS
    return liveService ? liveService : "local"
  })

  // Compute whether prerequisites are actually enabled
  const prerequisitesEnabled = createMemo(() => {
    // User preference (the toggle setting)
    const userPreference = uiState.settings.enableKanjiRadicalPrereqs

    // Prerequisites are disabled if:
    // 1. User has disabled them
    if (!userPreference) return false

    // 2. A live service is active (external services don't support our prerequisite system)
    const service = activeService()
    if (service !== "local") return false

    // Otherwise, prerequisites are enabled
    return true
  })

  // Provide a reason for why prerequisites are disabled (for UI tooltips)
  const prerequisitesDisabledReason = createMemo<string | null>(() => {
    if (prerequisitesEnabled()) return null

    const service = activeService()
    if (service !== "local") {
      const serviceNames: Record<Exclude<SRSServiceType, "local">, string> = {
        wanikani: "WaniKani",
        jpdb: "JPDB",
        anki: "Anki",
      }
      return `Prerequisites are disabled while ${serviceNames[service]} is active`
    }

    return null
  })

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
    console.log(`[Context] Initializing ${initialSvgs.size} SVGs`)
    setSvgData(initialSvgs)
  }

  const getSvgForCharacter = async (
    character: string,
  ): Promise<string | null> => {
    const currentData = svgData()

    // If we already have the SVG, return it
    if (currentData.has(character)) {
      console.log(`[Context] getSvgForCharacter('${character}'): Found in cache`)
      return currentData.get(character)!
    }

    console.log(
      `[Context] getSvgForCharacter('${character}'): NOT in cache (have ${currentData.size} SVGs)`,
    )

    // If we haven't fetched additional SVGs yet and have a manager, try to fetch them
    if (!additionalSvgsFetched() && managerHook.manager()) {
      console.log(`[Context] Triggering fallback fetch for missing SVGs`)
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

    // Shared queries
    settingsQuery,
    queryClient,

    // Route params
    mode: props.mode,
    userId: props.userId,
    moduleId: props.moduleId,
    deckId: props.deckId,

    // SRS service state
    activeService,
    prerequisitesEnabled,
    prerequisitesDisabledReason,

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
    startSession,
    addTimeAndQuestions,

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
