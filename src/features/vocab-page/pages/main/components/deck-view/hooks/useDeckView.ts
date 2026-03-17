import { createSignal, createMemo, type Accessor, type Setter } from "solid-js"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { extractKanjiCharacters } from "@/data/utils/text/japanese"
import { useVocab } from "@/features/vocab-page/context/VocabContext"
import { resolveDeckScopeId } from "@/features/vocab-page/utils/scope"
import type { UnifiedDeck } from "convex/model/decks"
import type { VocabularyItem, KanjiEntry } from "convex/validators"

export type TabValue = "vocabulary" | "kanji"

interface UseDeckViewOptions {
  deck: UnifiedDeck
}

interface UseDeckViewReturn {
  // State
  activeTab: Accessor<TabValue>
  setActiveTab: Setter<TabValue>
  selectedKanji: Accessor<string | null>
  selectedRadical: Accessor<string | null>

  // Derived data (undefined when data not loaded)
  filteredVocab: Accessor<VocabularyItem[] | undefined>
  filteredKanji: Accessor<KanjiEntry[] | undefined>
  kanjiToVocab: Accessor<Map<string, string[]> | undefined>
  counts: Accessor<
    { vocab: number; kanji: number; radicals: number } | undefined
  >
  dueRows: Accessor<
    | {
        vocabulary: {
          meanings: { hasHistory: boolean; dueCount: number }
          spellings: { hasHistory: boolean; dueCount: number }
        }
        kanji: {
          meanings: { hasHistory: boolean; dueCount: number }
        }
        radicals: {
          meanings: { hasHistory: boolean; dueCount: number }
        }
      }
    | undefined
  >
  dueRowsLoading: Accessor<boolean>
  orderedKeys: Accessor<string[] | undefined>
  skippedKanji: () => string[] | undefined
  hasSelection: () => boolean

  // Handlers
  toggleKanji: (kanji: string) => void
  toggleRadical: (radical: string) => void
  handleKanjiChipClick: (kanji: string) => void
  clearSelection: () => void
}

export function useDeckView(options: UseDeckViewOptions): UseDeckViewReturn {
  const { deck } = options

  // State
  const [activeTab, setActiveTab] = createSignal<TabValue>("vocabulary")
  const [selectedKanji, setSelectedKanji] = createSignal<string | null>(null)
  const [selectedRadical, setSelectedRadical] = createSignal<string | null>(
    null,
  )

  // Fetch vocabulary with hierarchy (works for both built-in and user decks)
  const hierarchyQuery = useConvexQuery(
    api.api.hierarchy.getDeckHierarchy,
    () => ({
      deckId: deck.id,
    }),
  )

  const hierarchyKeys = createMemo(() => {
    const data = hierarchyQuery.data()?.hierarchy
    if (!data) return [] as string[]

    return [
      ...new Set([
        ...data.vocabulary.map((item) => item.word),
        ...data.kanji.map((item) => item.kanji),
        ...data.radicals.map((item) => item.radical),
      ]),
    ].sort()
  })

  const meaningsFsrsQuery = useConvexQuery(
    api.api.fsrs.getFSRSCardsForItems,
    () => ({ keys: hierarchyKeys(), mode: "meanings" as const }),
    () => ({ enabled: hierarchyKeys().length > 0 }),
  )

  const spellingsFsrsQuery = useConvexQuery(
    api.api.fsrs.getFSRSCardsForItems,
    () => ({ keys: hierarchyKeys(), mode: "spellings" as const }),
    () => ({ enabled: hierarchyKeys().length > 0 }),
  )

  // Vocab index for IK ranking (orderedKeys)
  const { folders, decks } = useVocab()
  const scopeId = createMemo(() =>
    resolveDeckScopeId(deck.id, decks(), folders()),
  )
  const vocabIndexQuery = useConvexQuery(
    api.api.vocabulary.getVocabIndex,
    () => ({ scopeId: scopeId() }),
  )
  const orderedKeys = () => vocabIndexQuery.data()?.orderedKeys

  // Derived: kanji → vocab lookup map
  const kanjiToVocab = createMemo(() => {
    const data = hierarchyQuery.data()?.hierarchy
    if (!data) return undefined

    const map = new Map<string, string[]>()
    for (const rel of data.hierarchy.vocabulary) {
      for (const kanji of rel.kanjiComponents) {
        const existing = map.get(kanji) || []
        existing.push(rel.word)
        map.set(kanji, existing)
      }
    }
    return map
  })

  // Derived: filtered vocabulary based on selected kanji
  const filteredVocab = createMemo(() => {
    const data = hierarchyQuery.data()?.hierarchy
    if (!data) return undefined

    const selected = selectedKanji()
    if (!selected) return data.vocabulary

    return data.vocabulary.filter((item) =>
      extractKanjiCharacters(item.word).includes(selected),
    )
  })

  // Derived: filtered kanji based on selected radical
  const filteredKanji = createMemo(() => {
    const data = hierarchyQuery.data()?.hierarchy
    if (!data) return undefined

    const selected = selectedRadical()
    if (!selected) return data.kanji

    return data.kanji.filter((k) => k.radicalComponents.includes(selected))
  })

  // Derived: counts
  const counts = createMemo(() => {
    const data = hierarchyQuery.data()?.hierarchy
    if (!data) return undefined
    return {
      vocab: data.vocabulary.length,
      kanji: data.kanji.length,
      radicals: data.radicals.length,
    }
  })

  const dueRows = createMemo(() => {
    const meanings = meaningsFsrsQuery.data()
    const spellings = spellingsFsrsQuery.data()
    if (!meanings || !spellings) return undefined

    const now = Date.now()
    const countDue = (cards: { dueAt: number }[]) =>
      cards.reduce((count, card) => count + (card.dueAt <= now ? 1 : 0), 0)

    return {
      vocabulary: {
        meanings: {
          hasHistory: meanings.vocabulary.length > 0,
          dueCount: countDue(meanings.vocabulary),
        },
        spellings: {
          hasHistory: spellings.vocabulary.length > 0,
          dueCount: countDue(spellings.vocabulary),
        },
      },
      kanji: {
        meanings: {
          hasHistory: meanings.kanji.length > 0,
          dueCount: countDue(meanings.kanji),
        },
      },
      radicals: {
        meanings: {
          hasHistory: meanings.radical.length > 0,
          dueCount: countDue(meanings.radical),
        },
      },
    }
  })

  const dueRowsLoading = createMemo(() => {
    if (hierarchyKeys().length === 0) return false
    return meaningsFsrsQuery.isLoading() || spellingsFsrsQuery.isLoading()
  })

  // Derived: skipped kanji (plain function - used once)
  const skippedKanji = () => hierarchyQuery.data()?.hierarchy.skippedKanji

  const hasSelection = () =>
    selectedKanji() !== null || selectedRadical() !== null

  // Handlers
  const toggleKanji = (kanji: string) => {
    if (selectedKanji() === kanji) {
      setSelectedKanji(null)
    } else {
      setSelectedKanji(kanji)
      setSelectedRadical(null)
      setActiveTab("vocabulary")
    }
  }

  const toggleRadical = (radical: string) => {
    if (selectedRadical() === radical) {
      setSelectedRadical(null)
    } else {
      setSelectedRadical(radical)
      setSelectedKanji(null)
    }
  }

  const handleKanjiChipClick = (kanji: string) => {
    setSelectedKanji(kanji)
    setSelectedRadical(null)
    setActiveTab("kanji")
  }

  const clearSelection = () => {
    setSelectedKanji(null)
    setSelectedRadical(null)
  }

  return {
    // State
    activeTab,
    setActiveTab,
    selectedKanji,
    selectedRadical,

    // Derived data
    filteredVocab,
    filteredKanji,
    kanjiToVocab,
    counts,
    dueRows,
    dueRowsLoading,
    orderedKeys,
    skippedKanji,
    hasSelection,

    // Handlers
    toggleKanji,
    toggleRadical,
    handleKanjiChipClick,
    clearSelection,
  }
}
