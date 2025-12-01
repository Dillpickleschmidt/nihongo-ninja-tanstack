// src/routes/_home/import/_layout/learning-path.tsx
import { createFileRoute, useRouteContext, useNavigate } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { createSignal, Show, createMemo } from "solid-js"
import { toast } from "solid-sonner"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { ImportFlowProvider, useImportFlow } from "@/features/import-page/shared/context/ImportFlowContext"
import { MasteredConfirmDialog } from "@/features/import-page/shared/components/MasteredConfirmDialog"
import { queryKeys } from "@/query/utils/query-keys"
import { uploadLearningPath } from "@/features/supabase/db/learning-paths"
import { transformModulesToUIFormat } from "@/features/import-page/learning-path/path-generation/ui-adapter"
import {
  processLearningPathFile,
  prepareSaveData,
  type ProcessedData
} from "@/features/import-page/learning-path/path-generation/learning-path-operations"
import { FileUploadArea } from "@/features/import-page/shared/components/FileUploadArea"
import { LearningPathResultsView } from "@/features/import-page/learning-path/components/LearningPathResultsView"
import { fetchItemStatuses } from "@/features/import-page/shared/services/fsrs-status-service"
import { useImportHandler } from "@/features/import-page/shared/hooks/useImportHandler"
import { createVocabularyOnlyTypeResolver } from "@/features/import-page/shared/utils/type-resolver-factory"
import { extractCardsFromStatuses } from "@/features/import-page/shared/utils/fsrs-map-builder"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import type { TextbookIDEnum } from "@/data/types"
import { z } from "zod"

const learningPathSearchSchema = z.object({
  step: z.number().optional().catch(1),
})

export const Route = createFileRoute("/_home/import/_layout/learning-path")({
  staticData: {
    headerConfig: {
      title: "Generate Custom Path",
      backLabel: "Back to Tools",
      backTo: "/import",
    },
  },
  validateSearch: (search) => learningPathSearchSchema.parse(search),
  loader: async ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 16,
      backgroundOpacityOffset: -0.25,
      showGradient: true,
    })
  },
  component: LearningPathPage,
})

function LearningPathPage() {
  return (
    <ImportFlowProvider>
      <LearningPathPageContent />
    </ImportFlowProvider>
  )
}

function LearningPathPageContent() {
  const flow = useImportFlow()
  const context = useRouteContext({ from: RootRoute.id })
  const search = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })

  const hasUploaded = () => search().step === 2

  const [pathName, setPathName] = createSignal("")
  const [showName, setShowName] = createSignal("")
  const [episodeName, setEpisodeName] = createSignal("")
  const [textbookId, setTextbookId] = createSignal<TextbookIDEnum>("genki_1")
  const [isProcessing, setIsProcessing] = createSignal(false)
  const [processedData, setProcessedData] = createSignal<ProcessedData | null>(
    null,
  )
  const [error, setError] = createSignal<string | null>(null)
  const [existingFsrsCards, setExistingFsrsCards] = createSignal<FSRSCardData[]>([])
  const [showMasteredDialog, setShowMasteredDialog] = createSignal(false)
  const [pendingMasteredIds, setPendingMasteredIds] = createSignal<string[]>([])

  const uiData = createMemo(() => {
    const data = processedData()
    if (!data) return null
    const transformed = transformModulesToUIFormat(data.modules, data.grammarPatterns)
    if (!transformed) return null

    const itemStates = flow.itemStates()
    const filteredVocab = transformed.vocabulary.items.filter((item) => itemStates[item.id] !== "mastered")
    const filteredKanji = transformed.kanji.items.filter((item) => itemStates[item.id] !== "mastered")

    return {
      ...transformed,
      vocabulary: {
        ...transformed.vocabulary,
        items: filteredVocab,
      },
      kanji: {
        ...transformed.kanji,
        items: filteredKanji,
      },
    }
  })

  const userId = context().user?.id || null

  const handleBadgeChange = (status: any) => {
    if (status === "mastered" && flow.selectedIds().size > 0) {
      setPendingMasteredIds(Array.from(flow.selectedIds()))
      setShowMasteredDialog(true)
    } else {
      flow.applyStatus(status)
    }
  }

  const navigateToResults = () => {
    navigate({
      search: { step: 2 },
      mask: { to: "/import/learning-path" }
    })
  }

  const handleFileUpload = async (file: File) => {
    setIsProcessing(true)
    setError(null)

    try {
      const data = await processLearningPathFile(file, textbookId())
      setProcessedData(data)

      if (userId && data) {
        try {
          const vocabIds = data.modules
            .filter((m) => m.type === "vocabulary")
            .flatMap((m) => m.words.map((word) => word.word))

          const kanjiIds: string[] = [] // Learning paths don't include kanji yet

          const statuses = await fetchItemStatuses(userId, vocabIds, kanjiIds)
          setExistingFsrsCards(extractCardsFromStatuses(statuses))
          statuses.forEach((statusData, id) => {
            flow.updateItemStatus(id, statusData.status)
          })
          flow.captureInitialState()
        } catch (fsrsErr) {
          console.error("[Learning Path] Error fetching FSRS:", fsrsErr)
        }
      }

      navigateToResults()
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      setError(message)
      console.error("[Error]", message)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleMasteredConfirm = () => {
    const idsToMaster = pendingMasteredIds()
    idsToMaster.forEach(id => flow.updateItemStatus(id, "mastered"))
    setPendingMasteredIds([])
    setShowMasteredDialog(false)
  }

  const handleMasteredCancel = () => {
    setPendingMasteredIds([])
    setShowMasteredDialog(false)
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
      const itemStates = flow.itemStates()
      const { selectedGrammarModules, selectedVocabDecks } = prepareSaveData(
        data,
      )

      // Filter mastered items and keep words/transcriptLineIds in sync
      const filteredVocabDecks = selectedVocabDecks.map((deck) => {
        const keptIndices = deck.words
          .map((word, idx) => (itemStates[word.word] !== "mastered" ? idx : -1))
          .filter((idx) => idx !== -1)

        return {
          ...deck,
          words: keptIndices.map((idx) => deck.words[idx]),
          transcriptLineIds: keptIndices.map((idx) => deck.transcriptLineIds[idx]),
        }
      })

      const existingCardsMap = new Map(
        existingFsrsCards().map((c) => [c.practice_item_key, c])
      )

      const typeResolver = createVocabularyOnlyTypeResolver()
      const { handleImport } = useImportHandler({
        itemStates: flow.itemStates,
        initialItemStates: flow.initialItemStates,
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

      await uploadLearningPath({
        userId: user.id,
        transcript: {
          name: pathName(),
          show_name: showName() || undefined,
          episode_name: episodeName() || undefined,
          transcript_data: data.transcript,
        },
        selectedGrammarModules,
        selectedVocabDecks: filteredVocabDecks,
      })

      navigate({ search: { step: 1 }, mask: { to: "/import/learning-path" } })
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
    <div class="animate-in fade-in slide-in-from-bottom-4 min-h-screen w-full duration-500 pt-12 pb-24 md:py-24">
      <div class="container relative flex flex-col items-center">
        <div class="w-full" onClick={flow.clearSelection}>
          <Show
            when={hasUploaded()}
            fallback={
              <FileUploadArea
                onUpload={handleFileUpload}
                isProcessing={isProcessing()}
                error={error()}
                accept=".srt"
                accentColor="orange"
                description="Upload subtitle files to create your learning path"
                processingDescription="Extracting grammar patterns and vocabulary..."
              />
            }
          >
            <LearningPathResultsView
              uiData={uiData()}
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
              selectedCount={flow.selectedIds().size}
              onApply={handleBadgeChange}
              onClearSelection={flow.clearSelection}
              mode="manual"
            />
          </Show>
        </div>
      </div>
    </div>
  )
}
