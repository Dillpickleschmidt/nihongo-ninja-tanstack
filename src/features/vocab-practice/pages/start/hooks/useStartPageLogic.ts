// features/vocab-practice/components/pages/start-page/hooks/useStartPageLogic.ts
import { createSignal, createMemo, createEffect } from "solid-js"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  practiceModuleFSRSCardsQueryOptions,
  practiceDueFSRSCardsQueryOptions,
  hierarchySvgsQueryOptions,
} from "@/query/query-options"
import {
  initializePracticeSession,
  type PracticeItemData,
} from "@/features/vocab-practice/logic/data-initialization"
import { getVocabFromDB } from "@/features/resolvers/vocabulary"
import { getKanjiDetails } from "@/features/resolvers/kanji"
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
import type { VocabModuleAllData } from "@/query/utils/hierarchy-builder"
import type { VocabHierarchy } from "@/features/resolvers/util/hierarchy-builder"

// Client-only wrapper for session initialization to prevent SSR issues
const initializeSessionClientOnly = createClientOnlyFn(
  async (
    hierarchy: VocabHierarchy,
    moduleData: PracticeItemData,
    nonModuleData: PracticeItemData,
    mode: PracticeMode,
    shuffleAnswers: boolean,
    prerequisitesEnabled: boolean,
    isMixed: boolean,
  ) => {
    return initializePracticeSession(
      hierarchy,
      moduleData,
      nonModuleData,
      mode,
      shuffleAnswers,
      prerequisitesEnabled,
      isMixed,
    )
  },
)

type StartPageLogicParams = {
  /** Combined query for vocabulary + hierarchy + kanji/radicals */
  moduleAllQuery: UseQueryResult<VocabModuleAllData | null, DefaultError>
  /** Optional query for additional metadata (e.g., deck info) */
  metadataQuery?: UseQueryResult<any, DefaultError>
  getDeckName: () => string
  /** Function to ensure data is properly initialized before starting */
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

  // Destructure params
  const { moduleAllQuery, metadataQuery } = params

  // Extract data from combined query
  const moduleAllData = () => moduleAllQuery.data
  const vocabulary = () => moduleAllData()?.vocabulary
  const hierarchy = () => moduleAllData()?.hierarchy

  // Module FSRS cards query (fetches all types: vocabulary, kanji, radicals)
  const moduleFsrsCardsQuery = useCustomQuery(() => {
    const h = hierarchy()
    if (!h || activeService() !== "local" || !userId)
      return { enabled: false, queryKey: ["disabled"], queryFn: () => [] }

    const slugs = new Set<string>()
    h.vocabulary.forEach((v) => slugs.add(v.word))
    h.kanji.forEach((k) => slugs.add(k.kanji))
    h.radicals.forEach((r) => slugs.add(r))

    return practiceModuleFSRSCardsQueryOptions(
      userId,
      Array.from(slugs),
      mode,
      true,
    )
  })

  // Due cards for review mixing (only for local service)
  const dueCardsQuery = useCustomQuery(() =>
    activeService() === "local" && userId
      ? practiceDueFSRSCardsQueryOptions(userId, true)
      : { enabled: false, queryKey: ["disabled"], queryFn: () => [] },
  )

  // Pre-filter due cards to exclude module items
  // When prerequisites disabled, only include vocabulary
  const nonModuleFsrsCards = createMemo(() => {
    const dueCards = dueCardsQuery.data || []
    const h = hierarchy()
    if (!h) return []

    const moduleKeys = new Set<string>()
    h.vocabulary.forEach((v) => moduleKeys.add(`vocabulary:${v.word}`))
    h.kanji.forEach((k) => moduleKeys.add(`kanji:${k.kanji}`))
    h.radicals.forEach((r) => moduleKeys.add(`radical:${r}`))

    return dueCards.filter((card) => {
      if (moduleKeys.has(`${card.type}:${card.practice_item_key}`)) return false
      if (!prerequisitesEnabled() && card.type !== "vocabulary") return false
      return true
    })
  })

  // Fetch display data for non-module vocabulary items
  const nonModuleVocabQuery = useCustomQuery(() => {
    const keys = nonModuleFsrsCards()
      .filter((c) => c.type === "vocabulary")
      .map((c) => c.practice_item_key)
    return keys.length > 0
      ? {
          queryKey: ["nonModuleVocab", keys] as const,
          queryFn: () => getVocabFromDB(keys),
        }
      : { enabled: false, queryKey: ["disabled"] as const, queryFn: () => [] }
  })

  // Fetch display data for non-module kanji/radical items
  const nonModuleKanjiRadicalQuery = useCustomQuery(() => {
    const cards = nonModuleFsrsCards()
    const kanjiKeys = cards
      .filter((c) => c.type === "kanji")
      .map((c) => c.practice_item_key)
    const radicalKeys = cards
      .filter((c) => c.type === "radical")
      .map((c) => c.practice_item_key)
    return kanjiKeys.length > 0 || radicalKeys.length > 0
      ? {
          queryKey: ["nonModuleKanjiRadical", kanjiKeys, radicalKeys] as const,
          queryFn: () => getKanjiDetails(kanjiKeys, radicalKeys),
        }
      : {
          enabled: false,
          queryKey: ["disabled"] as const,
          queryFn: () => ({ kanji: [], radicals: [] }),
        }
  })

  // Build moduleData for initializePracticeSession
  const moduleData = createMemo(
    (): PracticeItemData => ({
      vocabulary: moduleAllData()?.vocabulary || [],
      kanji: moduleAllData()?.kanji || [],
      radicals: moduleAllData()?.radicals || [],
      fsrsCards: moduleFsrsCardsQuery.data || [],
    }),
  )

  // Build nonModuleData with fetched display data
  // No checks needed - data naturally empty when prerequisites disabled
  // (nonModuleFsrsCards filters at source, so kanji/radical queries are disabled)
  const nonModuleData = createMemo(
    (): PracticeItemData => ({
      vocabulary: nonModuleVocabQuery.data || [],
      kanji: nonModuleKanjiRadicalQuery.data?.kanji || [],
      radicals: nonModuleKanjiRadicalQuery.data?.radicals || [],
      fsrsCards: nonModuleFsrsCards(),
    }),
  )

  // Create SVG query using calculated characters
  const svgsQuery = useCustomQuery(() => {
    const h = hierarchy()
    if (!h)
      return {
        enabled: false,
        queryKey: ["disabled"],
        queryFn: () => new Map(),
      }

    const chars = calculateSvgCharacters({
      hierarchy: h,
      dueCards: dueCardsQuery.data || [],
      isLocalService: activeService() === "local",
    })
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
      activeService() === "local" ? moduleFsrsCardsQuery.data : undefined,
      mode,
      prerequisitesEnabled(),
    )

  const [initializedSession, setInitializedSession] =
    createSignal<PracticeSessionState | null>(null)

  // Initialize session when all data is ready
  createEffect(() => {
    const h = hierarchy()
    const mData = moduleData()
    const nmData = nonModuleData()

    if (!h || mData.vocabulary.length === 0) return

    initializeSessionClientOnly(
      h,
      mData,
      nmData,
      mode,
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
    if (moduleAllQuery.isFetching) return true
    if (metadataQuery?.isFetching) return true
    if (moduleFsrsCardsQuery.isFetching) return true
    if (dueCardsQuery.isFetching) return true
    if (nonModuleVocabQuery.isFetching) return true
    if (nonModuleKanjiRadicalQuery.isFetching) return true
    if (svgsQuery.isFetching) return true
    return false
  }

  const hasError = () => {
    return moduleAllQuery.isError || metadataQuery?.isError || false
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
    moduleAllQuery,
    moduleFsrsCardsQuery,
    dueCardsQuery,
    svgsQuery,

    // Computed values
    vocabulary,
    hierarchy,
    previewCards,
    reviewItems,
    isDataPending,
    hasError,

    // Functions
    handleStart,
    getDeckName: params.getDeckName,
  }
}
