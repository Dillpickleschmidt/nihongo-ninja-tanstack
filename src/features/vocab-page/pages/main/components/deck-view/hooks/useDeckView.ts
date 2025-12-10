import { createSignal, createMemo, type Accessor, type Setter } from 'solid-js'
import { useConvexQuery } from '@/lib/convex-query'
import { api } from 'convex/_generated/api'
import { extractKanjiCharacters } from '@/data/utils/text/japanese'
import type { UnifiedDeck } from 'convex/model/decks'
import type { VocabularyItem, KanjiEntry } from 'convex/validators'

export type TabValue = 'vocabulary' | 'kanji'

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
  counts: Accessor<{ vocab: number; kanji: number; radicals: number } | undefined>
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
  const [activeTab, setActiveTab] = createSignal<TabValue>('vocabulary')
  const [selectedKanji, setSelectedKanji] = createSignal<string | null>(null)
  const [selectedRadical, setSelectedRadical] = createSignal<string | null>(null)

  // Fetch vocabulary with hierarchy (works for both built-in and user decks)
  const hierarchyQuery = useConvexQuery(
    api.api.hierarchy.getVocabHierarchyByDeck,
    () => ({
      deckId: deck.id,
      deckSource: deck.source,
    })
  )

  // Derived: kanji → vocab lookup map
  const kanjiToVocab = createMemo(() => {
    const data = hierarchyQuery.data()
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
    const data = hierarchyQuery.data()
    if (!data) return undefined

    const selected = selectedKanji()
    if (!selected) return data.vocabulary

    return data.vocabulary.filter((item) =>
      extractKanjiCharacters(item.word).includes(selected)
    )
  })

  // Derived: filtered kanji based on selected radical
  const filteredKanji = createMemo(() => {
    const data = hierarchyQuery.data()
    if (!data) return undefined

    const selected = selectedRadical()
    if (!selected) return data.kanji

    return data.kanji.filter((k) => k.radicalComponents.includes(selected))
  })

  // Derived: counts
  const counts = createMemo(() => {
    const data = hierarchyQuery.data()
    if (!data) return undefined
    return {
      vocab: data.vocabulary.length,
      kanji: data.kanji.length,
      radicals: data.radicals.length,
    }
  })

  // Derived: skipped kanji (plain function - used once)
  const skippedKanji = () => hierarchyQuery.data()?.skippedKanji

  const hasSelection = () => selectedKanji() !== null || selectedRadical() !== null

  // Handlers
  const toggleKanji = (kanji: string) => {
    if (selectedKanji() === kanji) {
      setSelectedKanji(null)
    } else {
      setSelectedKanji(kanji)
      setSelectedRadical(null)
      setActiveTab('vocabulary')
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
    setActiveTab('kanji')
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
    skippedKanji,
    hasSelection,

    // Handlers
    toggleKanji,
    toggleRadical,
    handleKanjiChipClick,
    clearSelection,
  }
}
