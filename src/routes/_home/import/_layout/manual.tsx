// src/routes/_home/import/_layout/manual.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { createEffect } from "solid-js"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { useImportSelection } from "@/features/import-page/shared/hooks/use-import-selection"
import { useImportState } from "@/features/import-page/shared/hooks/useImportState"
import { ManualImportView } from "@/features/import-page/manual/components/ManualImportView"
import { getVocabularyBySets } from "@/features/supabase/db/core-vocab"
import {
  getN5Grammar,
  getN4Grammar,
} from "@/features/import-page/shared/data/jlpt-data"
import { buildVocabHierarchy } from "@/features/resolvers/util/hierarchy-builder"
import { fetchItemStatuses } from "@/features/import-page/shared/services/fsrs-status-service"
import { useImportHandler } from "@/features/import-page/shared/hooks/useImportHandler"
import { createVocabKanjiTypeResolver } from "@/features/import-page/shared/utils/type-resolver-factory"
import {
  buildExistingCardsMap,
  buildCardTypeIdSets,
} from "@/features/import-page/shared/utils/fsrs-map-builder"
import type { DBPracticeItemType } from "@/features/fsrs-import/shared/types/fsrs-types"

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

    const userId = (context as any).user?.id
    const fsrsStatusPromise = (async () => {
      if (!userId) {
        return new Map()
      }

      try {
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
        return new Map()
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

  // State management: badge states
  const {
    itemStates,
    updateItemStatus,
    initialItemStates,
    captureInitialState,
  } = useImportState()

  // UI state: selection
  const {
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
  } = useImportSelection(updateItemStatus)

  let typeResolver: (id: string) => DBPracticeItemType
  let existingCardsMap = new Map()

  createEffect(() => {
    Promise.all([
      loaderData().fsrsStatusPromise,
      loaderData().vocabPromise,
      loaderData().n5KanjiPromise,
      loaderData().n4KanjiPromise,
    ])
      .then(([statusMap, vocabBySet, n5Kanji, n4Kanji]) => {
        // Update badge states from FSRS
        statusMap.forEach((statusData, id) => {
          updateItemStatus(id, statusData.status)
        })
        captureInitialState()

        // Build derived data structures
        const { vocabIds, kanjiIds } = buildCardTypeIdSets(statusMap)
        const allVocab = Object.values(vocabBySet).flat()
        const allKanji = [...n5Kanji, ...n4Kanji]

        typeResolver = createVocabKanjiTypeResolver(
          vocabIds,
          kanjiIds,
          allVocab,
          allKanji
        )
        existingCardsMap = buildExistingCardsMap(statusMap)
      })
      .catch((err) => {
        console.error("[Manual Import] Error loading FSRS statuses:", err)
      })
  })

  const { handleImport, isImporting } = useImportHandler({
    itemStates,
    initialItemStates,
    getTypeResolver: () => typeResolver,
    getExistingCards: () => existingCardsMap,
    routeType: "manual",
  })

  return (
    <div onClick={clearSelection} class="container px-4 py-6 md:px-8 md:py-8">
      <ManualImportView
        selectedIds={selectedIds()}
        itemStates={itemStates()}
        initialItemStates={initialItemStates()}
        handleItemClick={handleItemClick}
        handlePointerDown={handlePointerDown}
        toggleSelectGroup={toggleSelectGroup}
        onImport={handleImport}
        isImporting={isImporting()}
        onUndoItem={(id) => updateItemStatus(id, initialItemStates()[id])}
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
