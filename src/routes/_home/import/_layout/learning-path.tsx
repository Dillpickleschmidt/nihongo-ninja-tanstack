// src/routes/_home/import/_layout/learning-path.tsx
import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { createSignal, Show, createMemo } from "solid-js"
import { toast } from "solid-sonner"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { useImportSelection } from "@/features/import-page/shared/hooks/use-import-selection"
import { useImportState } from "@/features/import-page/shared/hooks/useImportState"
import { MasteredConfirmDialog } from "@/features/import-page/shared/components/MasteredConfirmDialog"
import { uploadLearningPath } from "@/features/supabase/db/learning-paths"
import { transformModulesToUIFormat } from "@/features/learning-paths/ui-adapter"
import {
  processLearningPathFile,
  prepareSaveData,
} from "@/features/learning-paths/learning-path-operations"
import { LearningPathUploadView } from "@/features/import-page/learning-path/components/LearningPathUploadView"
import { LearningPathResultsView } from "@/features/import-page/learning-path/components/LearningPathResultsView"
import { fetchItemStatuses } from "@/features/import-page/shared/services/fsrs-status-service"
import { useImportHandler } from "@/features/import-page/shared/hooks/useImportHandler"
import { createVocabularyOnlyTypeResolver } from "@/features/import-page/shared/utils/type-resolver-factory"
import { extractCardsFromStatuses } from "@/features/import-page/shared/utils/fsrs-map-builder"
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
  const [showMasteredDialog, setShowMasteredDialog] = createSignal(false)
  const [pendingMasteredItem, setPendingMasteredItem] = createSignal<string | null>(null)

  // Badge state management with initial snapshot
  const {
    itemStates: badgeStates,
    updateItemStatus,
    initialItemStates,
    captureInitialState,
  } = useImportState()

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
        items: transformed.vocabulary.items.filter((item) => badgeStates()[item.id] !== "mastered"),
      },
      kanji: {
        ...transformed.kanji,
        items: transformed.kanji.items.filter((item) => badgeStates()[item.id] !== "mastered"),
      },
    }
  })

  const userId = context().user?.id || null

  // Handle badge changes with mastered confirmation
  const handleBadgeChange = (id: string, newStatus: any) => {
    if (newStatus === "mastered") {
      // Show confirmation dialog
      setPendingMasteredItem(id)
      setShowMasteredDialog(true)
    } else {
      updateItemStatus(id, newStatus)
    }
  }

  // Selection with badge change interception for mastered confirmation
  const {
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
  } = useImportSelection(handleBadgeChange)

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

          // Fetch all FSRS statuses (which includes the full card data)
          const statuses = await fetchItemStatuses(userId, vocabIds, kanjiIds)

          // Extract cards from status data for later use
          setExistingFsrsCards(extractCardsFromStatuses(statuses))

          // Apply statuses to UI
          statuses.forEach((statusData, id) => {
            updateItemStatus(id, statusData.status)
          })

          // Capture as initial state for change detection
          captureInitialState()
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

  const handleMasteredConfirm = () => {
    const id = pendingMasteredItem()
    if (id) {
      updateItemStatus(id, "mastered")
    }
    setShowMasteredDialog(false)
    setPendingMasteredItem(null)
  }

  const handleMasteredCancel = () => {
    setShowMasteredDialog(false)
    setPendingMasteredItem(null)
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

    setIsProcessing(true)
    setError(null)

    try {
      const data = processedData()!
      const { selectedGrammarModules, selectedVocabDecks } = prepareSaveData(
        data,
        selectedIds(),
      )

      // Build existing cards map from fetched FSRS data
      const existingCardsMap = new Map(
        existingFsrsCards().map((c) => [c.practice_item_key, c])
      )

      const typeResolver = createVocabularyOnlyTypeResolver()
      const { handleImport } = useImportHandler({
        itemStates: badgeStates,
        initialItemStates,
        getTypeResolver: () => typeResolver,
        getExistingCards: () => existingCardsMap,
        routeType: "learning-path",
      })

      const result = await handleImport()

      if (!result.success) {
        toast.error(result.message)
      } else if (result.upserted > 0) {
        toast.success(`Created ${result.upserted} FSRS cards from badge selections`)
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
          itemStates={badgeStates()}
          initialItemStates={initialItemStates()}
          selectedIds={selectedIds()}
          handleItemClick={handleItemClick}
          handlePointerDown={handlePointerDown}
          toggleSelectGroup={toggleSelectGroup}
          onUndoItem={(id) => updateItemStatus(id, initialItemStates()[id])}
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

        {/* Mastered confirmation dialog */}
        <MasteredConfirmDialog
          isOpen={showMasteredDialog()}
          onConfirm={handleMasteredConfirm}
          onCancel={handleMasteredCancel}
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
