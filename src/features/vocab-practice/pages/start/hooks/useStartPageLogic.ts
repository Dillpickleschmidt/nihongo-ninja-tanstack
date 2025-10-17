// features/vocab-practice/components/pages/start-page/hooks/useStartPageLogic.ts
import { createSignal, createMemo, createEffect } from "solid-js"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  practiceModuleFSRSCardsQueryOptions,
  practiceDueFSRSCardsQueryOptions,
  hierarchySvgsQueryOptions,
} from "@/features/vocab-practice/query/query-options"
import { initializePracticeSession } from "@/features/vocab-practice/logic/data-initialization"
import { buildPreviewCards } from "../utils/preview-cards"
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
    mode,
    userId,
  } = useVocabPracticeContext()

  const [isStarting, setIsStarting] = createSignal(false)
  const [sessionMode, setSessionMode] =
    createSignal<PracticeSessionMode>("mixed")

  // Destructure queries
  const { vocabularyQuery, hierarchyQuery, metadataQuery } = params.queries

  const hierarchy = () => hierarchyQuery.data
  const vocabulary = () => vocabularyQuery.data

  // Extract all slugs for FSRS queries
  const allHierarchySlugs = () => {
    const h = hierarchy()
    if (!h) return []
    const slugs = new Set<string>()
    h.vocabulary.forEach((v: any) => slugs.add(v.word))
    h.kanji.forEach((k: any) => slugs.add(k.kanji))
    h.radicals.forEach((r: any) => slugs.add(r.radical))
    return Array.from(slugs)
  }

  // Extract characters for SVG queries
  const hierarchyCharacters = () => {
    const h = hierarchy()
    if (!h) return []
    const chars: string[] = []
    h.kanji.forEach((k: any) => chars.push(k.kanji))
    h.radicals.forEach((r: any) => chars.push(r.radical))
    return chars
  }

  // FSRS queries - only enabled when hierarchy is available
  const fsrsCardsQuery = useCustomQuery(() => {
    const slugs = allHierarchySlugs()
    const hasHierarchy = !!hierarchy()

    return practiceModuleFSRSCardsQueryOptions(
      userId,
      slugs,
      mode,
      hasHierarchy && activeService() === "local" && !!userId,
    )
  })

  const dueCardsQuery = useCustomQuery(() =>
    practiceDueFSRSCardsQueryOptions(
      userId,
      activeService() === "local" && !!userId,
    ),
  )

  // SVG queries - only enabled when hierarchy is available
  const svgsQuery = useCustomQuery(() => {
    const chars = hierarchyCharacters()
    const hasHierarchy = !!hierarchy()

    return {
      ...hierarchySvgsQueryOptions(chars),
      enabled: hasHierarchy && chars.length > 0,
    }
  })

  createEffect(() => {
    if (!svgsQuery.isPending && svgsQuery.data) {
      initializeSvgData(svgsQuery.data)
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

    if (activeService() === "local") {
      if (fsrsCardsQuery.isPending || dueCardsQuery.isPending) return null
    }

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
    if (svgsQuery.isFetching) return true
    if (activeService() === "local" && userId) {
      if (fsrsCardsQuery.isFetching || dueCardsQuery.isFetching) return true
    }
    return false
  }

  const hasError = () => {
    const baseErrors =
      hierarchyQuery.isError ||
      vocabularyQuery.isError ||
      metadataQuery?.isError ||
      svgsQuery.isError

    // Only check FSRS errors when using local service
    if (activeService() === "local" && userId) {
      return baseErrors || fsrsCardsQuery.isError || dueCardsQuery.isError
    }

    return baseErrors
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
