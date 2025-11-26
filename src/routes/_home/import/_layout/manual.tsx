// src/routes/_home/import/_layout/manual.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { createEffect } from "solid-js"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { useImportSelection } from "@/features/import-page/shared/hooks/use-import-selection"
import { ManualImportView } from "@/features/import-page/manual/components/ManualImportView"
import { getVocabularyBySets } from "@/features/supabase/db/core-vocab"
import {
  getN5Grammar,
  getN4Grammar,
} from "@/features/import-page/shared/data/jlpt-data"
import { buildVocabHierarchy } from "@/features/resolvers/util/hierarchy-builder"
import { fetchItemStatuses } from "@/features/import-page/shared/services/fsrs-status-service"

export const Route = createFileRoute("/_home/import/_layout/manual")({
  loader: async ({ context }) => {
    const n5GrammarPromise = getN5Grammar()
    const n4GrammarPromise = getN4Grammar()
    const vocabPromise = getVocabularyBySets(["n5", "n4"])

    // Build kanji hierarchies - fetch all kanji at once, then split by JLPT level
    const kanjiPromise = (async () => {
      const vocabBySet = await vocabPromise
      const n5Vocab = vocabBySet.n5 || []
      const n4Vocab = vocabBySet.n4 || []

      const allVocabWords = [...n5Vocab, ...n4Vocab].map((v) => v.word)
      const hierarchy = await buildVocabHierarchy(allVocabWords)

      // Split kanji by JLPT level based on which vocab they appear in
      const n5Kanji = hierarchy.kanji
        .filter((k) => n5Vocab.some((v) => v.word.includes(k.kanji)))
        .map((k) => ({
          id: k.kanji,
          meaning: k.meanings.join(", "),
        }))

      const n5KanjiSet = new Set(n5Kanji.map((k) => k.id))

      const n4Kanji = hierarchy.kanji
        .filter((k) => !n5KanjiSet.has(k.kanji) && n4Vocab.some((v) => v.word.includes(k.kanji)))
        .map((k) => ({
          id: k.kanji,
          meaning: k.meanings.join(", "),
        }))

      return { n5Kanji, n4Kanji }
    })()

    const n5KanjiPromise = kanjiPromise.then((k) => k.n5Kanji)
    const n4KanjiPromise = kanjiPromise.then((k) => k.n4Kanji)

    // Fetch FSRS statuses for prefilling
    const userId = (context as any).user?.id
    const fsrsStatusPromise = (async () => {
      if (!userId) {
        return new Map<string, any>()
      }

      try {
        // Wait for vocab and kanji data to load
        const [vocabBySet, n5Kanji, n4Kanji] = await Promise.all([
          vocabPromise,
          n5KanjiPromise,
          n4KanjiPromise,
        ])

        const vocabWords = Object.values(vocabBySet)
          .flat()
          .map((v) => v.word)
        const kanjiChars = [...n5Kanji, ...n4Kanji].map((k) => k.id)

        return await fetchItemStatuses(userId, vocabWords, kanjiChars)
      } catch (err) {
        console.error("[Manual Import] Error fetching FSRS:", err)
        return new Map<string, any>()
      }
    })()

    return {
      n5GrammarPromise,
      n4GrammarPromise,
      vocabPromise,
      n5KanjiPromise,
      n4KanjiPromise,
      fsrsStatusPromise,
    }
  },
  component: ManualImportPage,
})

function ManualImportPage() {
  const loaderData = Route.useLoaderData()

  // Initialize with empty state - FSRS data will populate asynchronously
  const {
    itemStates,
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    setItemStates,
    clearSelection,
  } = useImportSelection({})

  // Apply FSRS statuses once they resolve
  createEffect(() => {
    loaderData().fsrsStatusPromise.then((statusMap) => {
      statusMap.forEach((status, id) => {
        setItemStates(id, status)
      })
    }).catch((err) => {
      console.error("[Manual Import] Error loading FSRS statuses:", err)
    })
  })

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
