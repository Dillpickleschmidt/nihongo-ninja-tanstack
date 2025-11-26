// src/routes/_home/import/_layout/learning-path.tsx
import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { createSignal, Show, createMemo } from "solid-js"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { useImportSelection } from "@/features/import-page/shared/hooks/use-import-selection"
import { uploadLearningPath } from "@/features/supabase/db/learning-paths"
import { transformModulesToUIFormat } from "@/features/learning-paths/ui-adapter"
import {
  processLearningPathFile,
  prepareSaveData,
} from "@/features/learning-paths/learning-path-operations"
import { LearningPathUploadView } from "@/features/import-page/learning-path/components/LearningPathUploadView"
import { LearningPathResultsView } from "@/features/import-page/learning-path/components/LearningPathResultsView"
import { batchUpsertFSRSCardsForUser, getAllFSRSCardsForUser } from "@/features/supabase/db/fsrs"
import { fetchItemStatuses } from "@/features/import-page/shared/services/fsrs-status-service"
import { createEmptyCard } from "ts-fsrs"
import type { ProcessedData } from "@/features/learning-paths/learning-path-operations"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import type { TextbookIDEnum } from "@/data/types"

export const Route = createFileRoute("/_home/import/_layout/learning-path")({
  component: LearningPathPage,
})

function LearningPathPage() {
  const context = useRouteContext({ from: RootRoute.id })

  // Form inputs
  const [pathName, setPathName] = createSignal("")
  const [showName, setShowName] = createSignal("")
  const [episodeName, setEpisodeName] = createSignal("")
  const [textbookId, setTextbookId] = createSignal<TextbookIDEnum>("genki_1")

  // UI state
  const [hasUploaded, setHasUploaded] = createSignal(false)
  const [isProcessing, setIsProcessing] = createSignal(false)
  const [processedData, setProcessedData] = createSignal<ProcessedData | null>(
    null,
  )
  const [error, setError] = createSignal<string | null>(null)
  const [existingFsrsCards, setExistingFsrsCards] = createSignal<FSRSCardData[]>([])

  // Single UI data transformation with mastered item filtering
  const uiData = createMemo(() => {
    const data = processedData()
    if (!data) return null
    const transformed = transformModulesToUIFormat(data.modules, data.grammarPatterns)
    if (!transformed) return null

    return {
      ...transformed,
      vocabulary: {
        ...transformed.vocabulary,
        items: transformed.vocabulary.items.filter((item) => itemStates[item.id] !== "mastered"),
      },
      kanji: {
        ...transformed.kanji,
        items: transformed.kanji.items.filter((item) => itemStates[item.id] !== "mastered"),
      },
    }
  })

  const userId = context().user?.id || null

  const {
    itemStates,
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
    setItemStates,
  } = useImportSelection()

  const handleFileUpload = async (file: File) => {
    setIsProcessing(true)
    setError(null)

    try {
      const data = await processLearningPathFile(file, textbookId())
      setProcessedData(data)
      setHasUploaded(true)

      // Fetch FSRS cards and prefill statuses if user is authenticated
      if (userId && data) {
        try {
          // Extract all vocab IDs from modules
          const vocabIds = data.modules
            .filter((m) => m.type === "vocabulary")
            .flatMap((m) => m.words.map((word) => word.word))

          // Learning paths don't currently include kanji, so empty for now
          const kanjiIds: string[] = []

          // Fetch all FSRS statuses in one call
          const statuses = await fetchItemStatuses(userId, vocabIds, kanjiIds)

          // Store FSRS cards for later use in handleSavePath (avoid duplicate fetch)
          const fsrsCards = await getAllFSRSCardsForUser(userId, "meanings")
          setExistingFsrsCards(fsrsCards)

          // Apply statuses to UI
          statuses.forEach((status, id) => {
            setItemStates(id, status)
          })
        } catch (fsrsErr) {
          console.error("[Learning Path] Error fetching FSRS:", fsrsErr)
          // Continue without FSRS data if fetch fails
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      setError(message)
      console.error("[Error]", message)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleSavePath = async () => {
    const user = context().user
    if (!user?.id) {
      setError("User not authenticated")
      return
    }

    if (!processedData()) {
      setError("No data available")
      return
    }

    try {
      setIsProcessing(true)
      const data = processedData()!
      const { selectedGrammarModules, selectedVocabDecks } = prepareSaveData(
        data,
        selectedIds(),
      )

      // Extract selected vocab items for FSRS card creation
      const selectedVocabItems = selectedVocabDecks
        .flatMap((deck) => deck.words)
        .filter((word) => selectedIds().has(word.word))
        .map((word) => ({ id: word.word }))

      // Learning paths don't currently include kanji
      const selectedKanjiItems: Array<{ id: string }> = []

      // Use FSRS cards fetched during upload (avoid duplicate fetch)
      const allUserFsrsCards = existingFsrsCards()

      // Get existing cards by type
      const existingVocabCards = new Set(
        allUserFsrsCards
          .filter((c) => c.type === "vocabulary")
          .map((c) => c.practice_item_key)
      )
      const existingKanjiCards = new Set(
        allUserFsrsCards
          .filter((c) => c.type === "kanji")
          .map((c) => c.practice_item_key)
      )

      // Find new items to create cards for
      const newVocabItems = selectedVocabItems.filter((item) => !existingVocabCards.has(item.id))
      const newKanjiItems = selectedKanjiItems.filter((item) => !existingKanjiCards.has(item.id))

      // Create blank FSRS cards for new items
      const allNewCards = [
        ...newVocabItems.map((item) => ({
          practice_item_key: item.id,
          type: "vocabulary" as const,
          fsrs_card: createEmptyCard(new Date()),
          mode: "meanings" as const,
          fsrs_logs: [],
        })),
        ...newKanjiItems.map((item) => ({
          practice_item_key: item.id,
          type: "kanji" as const,
          fsrs_card: createEmptyCard(new Date()),
          mode: "meanings" as const,
          fsrs_logs: [],
        })),
      ]

      // Batch upsert all new cards at once
      if (allNewCards.length > 0) {
        await batchUpsertFSRSCardsForUser(allNewCards)
      }

      // Upload learning path
      await uploadLearningPath({
        userId: user.id,
        transcript: {
          name: pathName(),
          show_name: showName() || undefined,
          episode_name: episodeName() || undefined,
          transcript_data: [],
        },
        selectedGrammarModules,
        selectedVocabDecks,
      })

      // Reset form
      setHasUploaded(false)
      setProcessedData(null)
      setPathName("")
      setShowName("")
      setEpisodeName("")
      setError(null)
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      setError(message)
      console.error("[Error]", message)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div onClick={clearSelection} class="container px-4 py-6 md:px-8 md:py-8">
      <Show
        when={hasUploaded()}
        fallback={
          <LearningPathUploadView
            onUpload={handleFileUpload}
            isProcessing={isProcessing()}
            error={error()}
          />
        }
      >
        <LearningPathResultsView
          uiData={uiData()}
          itemStates={itemStates}
          selectedIds={selectedIds()}
          handleItemClick={handleItemClick}
          handlePointerDown={handlePointerDown}
          toggleSelectGroup={toggleSelectGroup}
          pathName={pathName()}
          setPathName={setPathName}
          showName={showName()}
          setShowName={setShowName}
          episodeName={episodeName()}
          setEpisodeName={setEpisodeName}
          textbookId={textbookId()}
          setTextbookId={setTextbookId}
          onSave={handleSavePath}
          error={error()}
        />
      </Show>

      {/* FLOATING ACTION BAR */}
      <Show when={hasUploaded()}>
        <FloatingActionBar
          selectedCount={selectedIds().size}
          onApply={applyStatus}
          onClearSelection={clearSelection}
          mode="manual"
        />
      </Show>
    </div>
  )
}
