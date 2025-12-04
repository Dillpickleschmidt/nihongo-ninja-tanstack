import { Show, createMemo, createSignal } from "solid-js"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { SimpleVocabularyList } from "./SimpleView"
import { FullDependencyView } from "./FullView"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import type { VocabularyItem } from "@/data/types"
import type { VocabRelationship } from "@/features/resolvers/util/hierarchy-builder"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"

type DependencyOverviewProps = {
  class?: string
  /** Combined module query with vocabulary, hierarchy, kanji, radicals */
  moduleAllQuery: UseQueryResult<any, DefaultError>
  /** FSRS cards query from parent */
  fsrsCardsQuery: UseQueryResult<any, DefaultError>
  /** Due FSRS cards query from parent */
  dueCardsQuery: UseQueryResult<any, DefaultError>
}

/**
 * DependencyOverview
 *
 * Minimal first draft visualization for:
 * - Core counts: Vocabulary, Kanji, Radicals (scoped to this practice module/deck)
 * - Tabs:
 *   - Vocabulary (vocab grouped with kanji chips)
 *   - Kanji → Radicals (kanji cards with radical chips and dependent vocab count)
 *
 * Notes:
 * - In live-service or spellings mode, hierarchy will be flat (no kanji/radicals).
 */
export default function DependencyOverview(props: DependencyOverviewProps) {
  const { activeService, prerequisitesEnabled } = useVocabPracticeContext()

  // Create FSRS data map for efficient lookups
  const fsrsMap = createMemo(() => {
    const map = new Map<string, FSRSCardData>()
    if (!props.fsrsCardsQuery.data) return map
    for (const card of props.fsrsCardsQuery.data) {
      const key = `${card.type}:${card.practice_item_key}`
      map.set(key, card)
    }
    return map
  })

  // Create vocabulary map for efficient lookups
  const vocabularyMap = createMemo(() => {
    const map = new Map<string, VocabularyItem>()
    const vocabulary = props.moduleAllQuery.data?.vocabulary
    if (!vocabulary) return map
    for (const vocab of vocabulary) {
      map.set(vocab.word, vocab)
    }
    return map
  })

  // Selection filters (minimal)
  const [selectedKanji, setSelectedKanji] = createSignal<string | null>(null)
  const [selectedRadical, setSelectedRadical] = createSignal<string | null>(
    null,
  )

  // Derived data and indexes
  const vocabList = () => props.moduleAllQuery.data?.hierarchy?.vocabulary
  const kanjiToRadicals = () => {
    const map = new Map<string, string[]>()
    const h = props.moduleAllQuery.data?.hierarchy
    if (!h) return map
    for (const k of h.kanji ?? []) {
      map.set(k.kanji, k.radicalComponents || [])
    }
    return map
  }
  const vocabToKanji = () => {
    const map = new Map<string, string[]>()
    const h = props.moduleAllQuery.data?.hierarchy
    if (!h) return map
    for (const v of h.vocabulary ?? []) {
      map.set(v.word, v.kanjiComponents || [])
    }
    return map
  }
  const kanjiToVocab = () => {
    const map = new Map<string, string[]>()
    for (const [word, kanjiArr] of vocabToKanji().entries()) {
      for (const k of kanjiArr) {
        if (!map.has(k)) map.set(k, [])
        map.get(k)!.push(word)
      }
    }
    return map
  }
  const kanjiSet = () => {
    const set = new Set<string>()
    const h = props.moduleAllQuery.data?.hierarchy
    if (!h) return set
    for (const v of h.vocabulary ?? []) {
      for (const k of v.kanjiComponents ?? []) {
        set.add(k)
      }
    }
    return set
  }
  const radicalSet = () => {
    const set = new Set<string>()
    for (const radicals of kanjiToRadicals().values()) {
      for (const r of radicals) set.add(r)
    }
    return set
  }

  // Calculate due counts for each item type
  const dueCounts = createMemo(
    ():
      | { vocabulary: number; kanji: number; radicals: number; total: number }
      | undefined => {
      if (!props.fsrsCardsQuery.data || activeService() !== "local") {
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

  const filteredVocabAll = () => {
    const vocab = vocabList()
    if (!vocab) return props.moduleAllQuery.data?.vocabulary // Fallback to raw vocab while hierarchy loads
    const kSel = selectedKanji()
    if (!kSel) return vocab
    return vocab.filter((v: VocabRelationship) =>
      v.kanjiComponents?.includes(kSel),
    )
  }

  const filteredKanji = () => {
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
  }

  const isFlatHierarchy = () => {
    const h = props.moduleAllQuery.data?.hierarchy
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

  const { mode } = useVocabPracticeContext()

  return (
    <div class={`space-y-4 ${props.class || ""}`}>
      {/* Loading/Error */}
      <Show
        when={!props.moduleAllQuery.isPending}
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
          when={!props.moduleAllQuery.isError}
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
                vocabularyData={props.moduleAllQuery.data?.vocabulary!}
                fsrsMap={fsrsMap()}
                fsrsCardsQuery={props.fsrsCardsQuery}
                mode={mode}
              />
            }
          >
            <FullDependencyView
              moduleAllQuery={props.moduleAllQuery}
              fsrsCardsQuery={props.fsrsCardsQuery}
              vocabList={vocabList}
              filteredVocabList={filteredVocabAll}
              kanjiSet={kanjiSet()}
              radicalSet={radicalSet()}
              filteredKanji={filteredKanji}
              kanjiToRadicals={kanjiToRadicals()}
              kanjiToVocab={kanjiToVocab()}
              fsrsMap={fsrsMap()}
              vocabularyMap={vocabularyMap()}
              dueCounts={dueCounts()}
              selectedKanji={selectedKanji}
              selectedRadical={selectedRadical}
              setSelectedKanji={setSelectedKanji}
              setSelectedRadical={setSelectedRadical}
              toggleKanji={toggleKanji}
              toggleRadical={toggleRadical}
              isFlatHierarchy={isFlatHierarchy}
            />
          </Show>
        </Show>
      </Show>
    </div>
  )
}
