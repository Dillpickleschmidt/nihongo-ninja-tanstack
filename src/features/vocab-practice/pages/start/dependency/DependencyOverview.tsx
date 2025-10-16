import { Show, createMemo, createSignal } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  practiceHierarchyQueryOptions,
  moduleVocabularyQueryOptions,
  practiceModuleFSRSCardsQueryOptions,
  practiceDueFSRSCardsQueryOptions,
} from "@/features/vocab-practice/query/query-options"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { SimpleVocabularyList } from "./SimpleView"
import { FullDependencyView } from "./FullView"

type DependencyOverviewProps = {
  class?: string
}

/**
 * DependencyOverview
 *
 * Minimal first draft visualization for:
 * - Core counts: Vocabulary, Kanji, Radicals (scoped to this practice module)
 * - Tabs:
 *   - Vocabulary (vocab grouped with kanji chips)
 *   - Kanji → Radicals (kanji cards with radical chips and dependent vocab count)
 *
 * Notes:
 * - In live-service or spellings mode, hierarchy will be flat (no kanji/radicals).
 * - This component reuses cached queries from ModuleStartPage and is safe to mount alongside it.
 */
export default function DependencyOverview(props: DependencyOverviewProps) {
  const {
    moduleId,
    mode,
    activeService,
    settingsQuery,
    userId,
    prerequisitesEnabled,
  } = useVocabPracticeContext()

  // Queries (will hit cache if ModuleStartPage already prefetched)
  const vocabularyQuery = useCustomQuery(() =>
    moduleVocabularyQueryOptions(moduleId!),
  )

  const hierarchyQuery = useCustomQuery(() => {
    const vocabData = vocabularyQuery.data
    // Skip hierarchy when prerequisites are disabled or no vocab data
    if (!vocabData || !prerequisitesEnabled()) {
      return {
        queryKey: ["disabled-module-hierarchy"] as const,
        queryFn: () =>
          Promise.resolve({ vocabulary: [], kanji: [], radicals: [] }),
        enabled: false,
      }
    }

    return practiceHierarchyQueryOptions(
      moduleId!,
      vocabData,
      mode,
      settingsQuery.data!["override-settings"],
      activeService() !== "local",
    )
  })

  // Extract all slugs for FSRS queries
  const allHierarchySlugs = createMemo(() => {
    const h = hierarchyQuery.data
    // When prerequisites enabled, use full hierarchy
    if (h) {
      const slugs = new Set<string>()
      h.vocabulary?.forEach((v: any) => slugs.add(v.word))
      h.kanji?.forEach((k: any) => slugs.add(k.kanji))
      h.radicals?.forEach((r: any) => slugs.add(r.radical))
      return Array.from(slugs)
    }

    // When prerequisites disabled, just get vocabulary slugs
    const vocab = vocabularyQuery.data
    if (vocab) {
      return vocab.map((v: any) => v.word)
    }

    return []
  })

  // FSRS queries - enabled when we have data (hierarchy or vocabulary) and using local service
  const fsrsCardsQuery = useCustomQuery(() => {
    const slugs = allHierarchySlugs()
    const hasData = slugs.length > 0

    return practiceModuleFSRSCardsQueryOptions(
      userId,
      slugs,
      hasData && activeService() === "local" && !!userId,
    )
  })

  const dueCardsQuery = useCustomQuery(() =>
    practiceDueFSRSCardsQueryOptions(
      userId,
      activeService() === "local" && !!userId,
    ),
  )

  // Create FSRS data map for efficient lookups
  const fsrsMap = createMemo(() => {
    const map = new Map<string, any>()
    if (!fsrsCardsQuery.data) return map
    for (const card of fsrsCardsQuery.data) {
      const key = `${card.type}:${card.practice_item_key}`
      map.set(key, card)
    }
    return map
  })

  // Selection filters (minimal)
  const [selectedKanji, setSelectedKanji] = createSignal<string | null>(null)
  const [selectedRadical, setSelectedRadical] = createSignal<string | null>(
    null,
  )

  // Derived data and indexes
  const vocabList = () => hierarchyQuery.data?.vocabulary
  const kanjiToRadicals = createMemo(() => {
    const map = new Map<string, string[]>()
    const h = hierarchyQuery.data
    if (!h) return map
    for (const k of h.kanji ?? []) {
      map.set(k.kanji, k.radicalComponents || [])
    }
    return map
  })
  const vocabToKanji = createMemo(() => {
    const map = new Map<string, string[]>()
    const h = hierarchyQuery.data
    if (!h) return map
    for (const v of h.vocabulary ?? []) {
      map.set(v.word, v.kanjiComponents || [])
    }
    return map
  })
  const kanjiToVocab = createMemo(() => {
    const map = new Map<string, string[]>()
    for (const [word, kanjiArr] of vocabToKanji().entries()) {
      for (const k of kanjiArr) {
        if (!map.has(k)) map.set(k, [])
        map.get(k)!.push(word)
      }
    }
    return map
  })
  const radicalToKanji = createMemo(() => {
    const map = new Map<string, string[]>()
    for (const [kanji, radicals] of kanjiToRadicals().entries()) {
      for (const r of radicals) {
        if (!map.has(r)) map.set(r, [])
        map.get(r)!.push(kanji)
      }
    }
    return map
  })
  const kanjiSet = createMemo(() => {
    const set = new Set<string>()
    const h = hierarchyQuery.data
    if (!h) return set
    for (const v of h.vocabulary ?? []) {
      for (const k of v.kanjiComponents ?? []) {
        set.add(k)
      }
    }
    return set
  })
  const radicalSet = createMemo(() => {
    const set = new Set<string>()
    for (const radicals of kanjiToRadicals().values()) {
      for (const r of radicals) set.add(r)
    }
    return set
  })

  // Calculate due counts for each item type
  const dueCounts = createMemo(
    ():
      | { vocabulary: number; kanji: number; radicals: number; total: number }
      | undefined => {
      if (!fsrsCardsQuery.data || activeService() !== "local") {
        return undefined
      }

      const vocab = vocabList()
      if (!vocab) return undefined

      const now = new Date()
      let vocabDue = 0
      let kanjiDue = 0
      let radicalsDue = 0

      for (const v of vocab) {
        const fsrsData = fsrsMap().get(`vocabulary:${v.word}`)
        const dueDate = fsrsData?.fsrs_card?.due
        if (dueDate && new Date(dueDate) <= now) {
          vocabDue++
        }
      }

      for (const k of kanjiSet().values()) {
        const fsrsData = fsrsMap().get(`kanji:${k}`)
        const dueDate = fsrsData?.fsrs_card?.due
        if (dueDate && new Date(dueDate) <= now) {
          kanjiDue++
        }
      }

      for (const r of radicalSet().values()) {
        const fsrsData = fsrsMap().get(`radical:${r}`)
        const dueDate = fsrsData?.fsrs_card?.due
        if (dueDate && new Date(dueDate) <= now) {
          radicalsDue++
        }
      }

      return {
        vocabulary: vocabDue,
        kanji: kanjiDue,
        radicals: radicalsDue,
        total: vocabDue + kanjiDue + radicalsDue,
      }
    },
  )

  const filteredVocabAll = createMemo(() => {
    const vocab = vocabList()
    if (!vocab) return undefined
    const kSel = selectedKanji()
    if (!kSel) return vocab
    return vocab.filter((v) => v.kanjiComponents?.includes(kSel))
  })

  const filteredKanji = createMemo(() => {
    const allKanji = Array.from(kanjiSet().values())
    const rSel = selectedRadical()
    const kSel = selectedKanji()
    let result = allKanji
    if (kSel) {
      result = result.filter((k) => k === kSel)
    }
    if (rSel) {
      result = result.filter((k) =>
        (kanjiToRadicals().get(k) || []).includes(rSel),
      )
    }
    return result
  })

  const isFlatHierarchy = () => {
    const h = hierarchyQuery.data
    if (!h) return false
    // Live service or spellings mode produce empty kanji/radicals in queryFn
    return (h.kanji?.length ?? 0) === 0 && (h.radicals?.length ?? 0) === 0
  }

  function toggleKanji(k: string) {
    setSelectedRadical(null)
    setSelectedKanji((prev) => (prev === k ? null : k))
  }

  function toggleRadical(r: string) {
    setSelectedKanji(null)
    setSelectedRadical((prev) => (prev === r ? null : r))
  }

  return (
    <div class={`space-y-4 ${props.class || ""}`}>
      {/* Title */}
      <div class="flex items-baseline justify-between">
        <h2 class="text-primary text-center text-lg font-semibold tracking-wide">
          <Show when={prerequisitesEnabled()} fallback="Module Content">
            Dependency Overview
          </Show>
        </h2>
      </div>

      {/* Loading/Error */}
      <Show
        when={!vocabularyQuery.isPending}
        fallback={
          <div class="bg-card/40 border-card-foreground/70 flex items-center justify-center rounded-xl border p-8">
            <span class="text-muted-foreground text-sm">
              <Show
                when={prerequisitesEnabled()}
                fallback="Loading vocabulary…"
              >
                Loading dependencies…
              </Show>
            </span>
          </div>
        }
      >
        <Show
          when={!vocabularyQuery.isError}
          fallback={
            <div class="bg-destructive/10 border-destructive/40 text-destructive rounded-xl border p-4">
              Failed to load dependency data.
            </div>
          }
        >
          <Show
            when={prerequisitesEnabled()}
            fallback={
              <SimpleVocabularyList
                vocabularyData={vocabularyQuery.data!}
                fsrsMap={fsrsMap()}
                activeService={activeService}
                fsrsCardsQuery={fsrsCardsQuery}
              />
            }
          >
            <FullDependencyView
              vocabularyQuery={vocabularyQuery}
              hierarchyQuery={hierarchyQuery}
              fsrsCardsQuery={fsrsCardsQuery}
              vocabList={vocabList}
              kanjiSet={kanjiSet()}
              radicalSet={radicalSet()}
              filteredKanji={filteredKanji}
              kanjiToRadicals={kanjiToRadicals()}
              kanjiToVocab={kanjiToVocab()}
              fsrsMap={fsrsMap()}
              dueCounts={dueCounts()}
              selectedKanji={selectedKanji}
              selectedRadical={selectedRadical}
              setSelectedKanji={setSelectedKanji}
              setSelectedRadical={setSelectedRadical}
              toggleKanji={toggleKanji}
              toggleRadical={toggleRadical}
              activeService={activeService}
              isFlatHierarchy={isFlatHierarchy}
            />
          </Show>
        </Show>
      </Show>
    </div>
  )
}
