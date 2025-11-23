// src/routes/_home/import/_layout/learning-path.tsx
import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { createSignal, Show, createMemo } from "solid-js"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { useImportSelection } from "@/features/import-page/shared/hooks/use-import-selection"
import { uploadLearningPath } from "@/features/supabase/db/learning-paths"
import { transformModulesToUIFormat } from "@/features/learning-paths/ui-adapter"
import { processLearningPathFile, prepareSaveData } from "@/features/learning-paths/learning-path-operations"
import { LearningPathUploadView } from "@/features/import-page/learning-path/components/LearningPathUploadView"
import { LearningPathResultsView } from "@/features/import-page/learning-path/components/LearningPathResultsView"
import type { ProcessedData } from "@/features/learning-paths/learning-path-operations"
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
  const [processedData, setProcessedData] = createSignal<ProcessedData | null>(null)
  const [error, setError] = createSignal<string | null>(null)

  // Single UI data transformation
  const uiData = createMemo(() => {
    const data = processedData()
    if (!data) return null
    return transformModulesToUIFormat(data.modules, data.grammarPatterns)
  })

  // Display categories for useImportSelection
  const displayCategories = createMemo(() => {
    const ui = uiData()
    if (!ui) return []

    return [
      {
        id: "grammar",
        title: "Grammar",
        subcategories: [
          {
            id: "grammar-items",
            title: "Grammar Patterns",
            items: ui.grammar.items,
          },
        ],
      },
      {
        id: "vocabulary",
        title: "Vocabulary",
        subcategories: [
          {
            id: "vocab-items",
            title: "Vocabulary",
            items: ui.vocabulary.items,
          },
        ],
      },
      {
        id: "kanji",
        title: "Kanji",
        subcategories: [
          {
            id: "kanji-items",
            title: "Kanji",
            items: ui.kanji.items,
          },
        ],
      },
    ]
  })

  const {
    itemStates,
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
  } = useImportSelection(displayCategories().length > 0 ? { grammar: "decent", vocabulary: "decent", kanji: "decent" } : {})

  const handleFileUpload = async (file: File) => {
    setIsProcessing(true)
    setError(null)

    try {
      const data = await processLearningPathFile(file, textbookId())
      setProcessedData(data)
      setHasUploaded(true)
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
      const data = processedData()!
      const { selectedGrammarModules, selectedVocabDecks } = prepareSaveData(
        data,
        selectedIds(),
      )

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
          displayCategories={displayCategories()}
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
