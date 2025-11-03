// features/vocab-practice/components/pages/start-page/hooks/useStartPageLogic.ts
import { createSignal, createMemo, createEffect } from "solid-js"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  practiceModuleFSRSCardsQueryOptions,
  practiceDueFSRSCardsQueryOptions,
  hierarchySvgsQueryOptions,
} from "@/query/query-options"
import { initializePracticeSession } from "@/features/vocab-practice/logic/data-initialization"
import { buildPreviewCards } from "../utils/preview-cards"
import { calculateSvgCharacters } from "@/features/vocab-practice/utils/route-loader-helpers"
import { createClientOnlyFn } from "@tanstack/solid-start"
import type {
  PracticeMode,
  PracticeSessionMode,
  PracticeCard,
  PracticeSessionState,
} from "@/features/vocab-practice/types"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"

// Client-only wrapper for session initialization to prevent SSR issues
const initializeSessionClientOnly = createClientOnlyFn(
  async (
    hierarchy: any,
    fsrsCards: any[],
    dueCards: any[],
    mode: PracticeMode,
    vocabulary: any[],
    shuffleAnswers: boolean,
    prerequisitesEnabled: boolean,
    isMixed: boolean,
  ) => {
    return initializePracticeSession(
      hierarchy,
      fsrsCards,
      dueCards,
      mode,
      vocabulary,
      shuffleAnswers,
      prerequisitesEnabled,
      isMixed,
    )
  },
)

type StartPageQueries = {
  vocabularyQuery: UseQueryResult<any, DefaultError>
  hierarchyQuery: UseQueryResult<any, DefaultError>
  /** Optional query for additional metadata (e.g., deck info) */
  metadataQuery?: UseQueryResult<any, DefaultError>
}

type StartPageLogicParams = {
  queries: StartPageQueries
  getDeckName: () => string
  /** Function to ensure hierarchy data is properly initialized before starting */
  onStart: () => Promise<void>
}

export function useStartPageLogic(params: StartPageLogicParams) {
  const {
    uiState,
    initializeManager,
    initializeSvgData,
    startSession,
    prerequisitesEnabled,
    activeService,
    settingsQuery,
    queryClient,
    mode,
    userId,
  } = useVocabPracticeContext()

  const [isStarting, setIsStarting] = createSignal(false)
  const [sessionMode, setSessionMode] =
    createSignal<PracticeSessionMode>("mixed")

  // Destructure queries
  const { vocabularyQuery, hierarchyQuery, metadataQuery} = params.queries

  const hierarchy = () => hierarchyQuery.data
  const vocabulary = () => vocabularyQuery.data

  // Extract all slugs for FSRS data
  const allHierarchySlugs = () => {
    const h = hierarchy()
    if (!h) return []
    const slugs = new Set<string>()
    h.vocabulary.forEach((v: any) => slugs.add(v.word))
    h.kanji.forEach((k: any) => slugs.add(k.kanji))
    h.radicals.forEach((r: any) => slugs.add(r.radical))
    return Array.from(slugs)
  }

  // Create queries (these will hit cache from loader when keys match)
  const fsrsCardsQuery = useCustomQuery(() =>
    activeService() === "local" && userId && hierarchy()
      ? practiceModuleFSRSCardsQueryOptions(userId, allHierarchySlugs(), mode, true)
      : { enabled: false, queryKey: ["disabled"], queryFn: () => [] },
  )

  const dueCardsQuery = useCustomQuery(() =>
    activeService() === "local" && userId
      ? practiceDueFSRSCardsQueryOptions(userId, true)
      : { enabled: false, queryKey: ["disabled"], queryFn: () => [] },
  )

  // Calculate SVG characters using shared helper
  const svgCharacters = createMemo(() => {
    const h = hierarchy()
    const dueCards = dueCardsQuery.data || []
    if (!h) return []

    return calculateSvgCharacters({
      hierarchy: h,
      dueCards,
      isLocalService: activeService() === "local",
    })
  })

  // Create SVG query using calculated characters
  const svgsQuery = useCustomQuery(() => {
    const chars = svgCharacters()
    return chars.length > 0
      ? hierarchySvgsQueryOptions(chars)
      : { enabled: false, queryKey: ["disabled"], queryFn: () => new Map() }
  })

  // Initialize SVG data when query succeeds
  createEffect(() => {
    const svgData = svgsQuery.data
    if (svgData && svgData.size > 0) {
      console.log(`[Start Page] Initializing ${svgData.size} SVGs from cache`)
      initializeSvgData(svgData)
    }
  })

  // Progressive preview cards - build as data becomes available
  const previewCards = () =>
    buildPreviewCards(
      vocabulary(),
      hierarchy(),
      activeService() === "local" ? fsrsCardsQuery.data : undefined,
      mode,
      prerequisitesEnabled(),
    )

  const practiceState = createMemo(() => {
    const h = hierarchy()
    const vocab = vocabulary()
    if (!h || !vocab) return null

    return {
      hierarchy: h,
      vocabulary: vocab,
      fsrsCards: fsrsCardsQuery.data || [],
      dueCards: dueCardsQuery.data || [],
    }
  })

  const [initializedSession, setInitializedSession] =
    createSignal<PracticeSessionState | null>(null)

  createEffect(() => {
    const state = practiceState()
    if (!state) return

    initializeSessionClientOnly(
      state.hierarchy,
      state.fsrsCards,
      state.dueCards,
      mode,
      state.vocabulary,
      uiState.settings.shuffleAnswers,
      prerequisitesEnabled(),
      sessionMode() === "mixed",
    )
      .then((sessionState) => {
        setInitializedSession(sessionState)
      })
      .catch((error) => {
        console.error("Failed to initialize practice session:", error)
      })
  })

  const isDataPending = () => {
    if (vocabularyQuery.isFetching) return true
    if (hierarchyQuery.isFetching) return true
    if (metadataQuery?.isFetching) return true
    if (fsrsCardsQuery.isFetching) return true
    if (dueCardsQuery.isFetching) return true
    if (svgsQuery.isFetching) return true
    return false
  }

  const hasError = () => {
    return (
      hierarchyQuery.isError ||
      vocabularyQuery.isError ||
      metadataQuery?.isError ||
      false
    )
  }

  const reviewItems = createMemo(() => {
    const session = initializedSession()
    if (!session) return []

    return session.reviewQueue
      .map((key) => session.cardMap.get(key))
      .filter((card): card is PracticeCard => !!card)
  })

  const [visibleReviewCount, setVisibleReviewCount] = createSignal(20)

  async function handleStart() {
    setIsStarting(true)
    try {
      await params.onStart()

      await startSession()

      const session = initializedSession()
      if (session) {
        initializeManager(session)
      }
    } catch (error) {
      console.error("Failed to start practice session:", error)
    } finally {
      setIsStarting(false)
    }
  }

  return {
    // State
    isStarting,
    sessionMode,
    setSessionMode,
    visibleReviewCount,
    setVisibleReviewCount,

    // Queries
    settingsQuery,
    vocabularyQuery,
    hierarchyQuery,
    fsrsCardsQuery,
    dueCardsQuery,
    svgsQuery,

    // Computed values
    previewCards,
    reviewItems,
    isDataPending,
    hasError,

    // Functions
    handleStart,
    getDeckName: params.getDeckName,
  }
}
