// src/routes/_home/import/_layout/manual.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { useImportSelection } from "@/features/import-page/shared/hooks/use-import-selection"
import { ManualImportView } from "@/features/import-page/manual/components/ManualImportView"
import { getVocabularyBySets } from "@/features/supabase/db/core-vocab"
import {
  getN5Grammar,
  getN4Grammar,
} from "@/features/import-page/shared/data/jlpt-data"
import { buildVocabHierarchy } from "@/features/resolvers/util/hierarchy-builder"

export const Route = createFileRoute("/_home/import/_layout/manual")({
  loader: async () => {
    const n5GrammarPromise = getN5Grammar()
    const n4GrammarPromise = getN4Grammar()
    const vocabPromise = getVocabularyBySets(["n5", "n4"])

    // Build kanji hierarchies from vocabulary
    const n5KanjiPromise = (async () => {
      const vocabBySet = await vocabPromise
      const vocab = vocabBySet.n5 || []
      const hierarchy = await buildVocabHierarchy(vocab.map((v) => v.word))
      return hierarchy.kanji.map((k) => ({
        id: `n5-k-${k.kanji}`,
        main: k.kanji,
        meaning: k.meanings.join(", "),
        status: "learning" as const,
      }))
    })()

    const n4KanjiPromise = (async () => {
      const [vocabBySet, n5Kanji] = await Promise.all([vocabPromise, n5KanjiPromise])
      const vocab = vocabBySet.n4 || []
      const hierarchy = await buildVocabHierarchy(vocab.map((v) => v.word))

      const n5KanjiSet = new Set(n5Kanji.map((k) => k.main))

      // Filter out kanji that are already in n5
      const filteredKanji = hierarchy.kanji.filter((k) => !n5KanjiSet.has(k.kanji))

      return filteredKanji.map((k) => ({
        id: `n4-k-${k.kanji}`,
        main: k.kanji,
        meaning: k.meanings.join(", "),
        status: "learning" as const,
      }))
    })()

    return {
      n5GrammarPromise,
      n4GrammarPromise,
      vocabPromise,
      n5KanjiPromise,
      n4KanjiPromise,
    }
  },
  component: ManualImportPage,
})

function ManualImportPage() {
  const loaderData = Route.useLoaderData()

  const {
    itemStates,
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
  } = useImportSelection()

  return (
    <div onClick={clearSelection} class="container px-4 py-6 md:px-8 md:py-8">
      <ManualImportView
        selectedIds={selectedIds()}
        itemStates={itemStates}
        handleItemClick={handleItemClick}
        handlePointerDown={handlePointerDown}
        toggleSelectGroup={toggleSelectGroup}
        grammarPromises={{
          n5: loaderData().n5GrammarPromise,
          n4: loaderData().n4GrammarPromise,
        }}
        vocabPromise={loaderData().vocabPromise}
        kanjiPromises={{
          n5: loaderData().n5KanjiPromise,
          n4: loaderData().n4KanjiPromise,
        }}
      />

      <FloatingActionBar
        selectedCount={selectedIds().size}
        onApply={applyStatus}
        onClearSelection={clearSelection}
        mode="manual"
      />
    </div>
  )
}
