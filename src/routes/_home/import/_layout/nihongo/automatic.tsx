// src/routes/_home/import/_layout/nihongo/automatic.tsx
import { createFileRoute, useNavigate } from "@tanstack/solid-router"
import { createSignal, Show } from "solid-js"
import { toast } from "solid-sonner"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { ImportFlowProvider, useImportFlow } from "@/features/import-page/shared/context/ImportFlowContext"
import { FileUploadArea } from "@/features/import-page/shared/components/FileUploadArea"
import { AnkiFieldMappingView } from "@/features/import-page/automatic/components/AnkiFieldMappingView"
import { AutomaticResultsView } from "@/features/import-page/automatic/components/AutomaticResultsView"
import { queryKeys } from "@/query/utils/query-keys"
import { transformAnkiData } from "@/features/fsrs-import/adapters/anki/anki-adapter"
import { importReviewsServerFn } from "@/features/fsrs-import/server/importReviewsServerFn"
import { processJpdbFile } from "@/features/import-page/automatic/services/jpdb-processor"
import { processAnkiFile } from "@/features/import-page/automatic/services/anki-processor"
import { useImportHandler } from "@/features/import-page/shared/hooks/useImportHandler"
import { createNormalizedCardTypeResolver } from "@/features/import-page/shared/utils/type-resolver-factory"
import type {
  AnkiExtractedData,
  FieldMapping,
} from "@/features/fsrs-import/adapters/anki/anki-types"
import type { NormalizedCard } from "@/features/fsrs-import/shared/types/import-data-models"
import type { ImportItem } from "@/features/import-page/shared/types"
import { z } from "zod"

const automaticSearchSchema = z.object({
  step: z.number().optional().catch(1),
})

export const Route = createFileRoute("/_home/import/_layout/nihongo/automatic")({
  staticData: {
    headerConfig: {
      title: "Import from File",
      backLabel: "Back to Nihongo",
      backTo: "/import/nihongo",
    },
  },
  validateSearch: (search) => automaticSearchSchema.parse(search),
  loader: async ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 16,
      backgroundOpacityOffset: -0.25,
      showGradient: true,
    })
  },
  component: AutomaticImportPage,
})

function AutomaticImportPage() {
  return (
    <ImportFlowProvider>
      <AutomaticImportPageContent />
    </ImportFlowProvider>
  )
}

function AutomaticImportPageContent() {
  const flow = useImportFlow()
  const search = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })

  const currentStep = () => search().step || 1

  // Processing & Data State
  const [importSource, setImportSource] = createSignal<"anki" | "jpdb" | null>(null)
  const [extractedData, setExtractedData] = createSignal<AnkiExtractedData | null>(null)
  const [fieldMapping, setFieldMapping] = createSignal<FieldMapping | null>(null)
  const [isProcessing, setIsProcessing] = createSignal(false)
  const [errorMessage, setErrorMessage] = createSignal<string | null>(null)
  const [vocabItems, setVocabItems] = createSignal<ImportItem[]>([])
  const [kanjiItems, setKanjiItems] = createSignal<ImportItem[]>([])
  const [normalizedCards, setNormalizedCards] = createSignal<NormalizedCard[]>([])

  // Navigation Helper (updates URL with masking)
  const navigateToStep = (step: number) => {
    navigate({
      search: { step },
      mask: { to: "/import/nihongo/automatic" }
    })
  }

  const handleUpload = async (file: File) => {
    setIsProcessing(true)
    setErrorMessage(null)

    try {
      const source = file.name.endsWith(".json") ? "jpdb" : "anki"
      setImportSource(source)

      if (source === "jpdb") {
        const { vocabImportItems: vocab, kanjiImportItems: kanji, normalizedCards: cards } = await processJpdbFile(file)

        setVocabItems(vocab)
        setKanjiItems(kanji)
        setNormalizedCards(cards)

        vocab.concat(kanji).forEach((item) => {
          if (item.status) {
            flow.updateItemStatus(item.id, item.status)
          }
        })
        flow.captureInitialState()
        navigateToStep(3)
      } else {
        const { extractedData, detectedFieldMapping } = await processAnkiFile(file)

        setExtractedData(extractedData)
        setFieldMapping(detectedFieldMapping)

        navigateToStep(2)
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to process import file"
      setErrorMessage(message)
      console.error("[AutomaticImport] Error:", err)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleFieldMappingNext = async () => {
    const extracted = extractedData()
    const mapping = fieldMapping()

    if (!extracted || !mapping) return

    setIsProcessing(true)
    setErrorMessage(null)

    try {
      const { importItems: vocabItems, normalizedCards: cards } = transformAnkiData(extracted, mapping)

      if (vocabItems.length === 0) {
        throw new Error(
          `No valid cards could be transformed. Found ${extracted.notes.length} notes, ` +
          `${extracted.cards.size} notes with cards, ` +
          `${extracted.reviews.size} cards with reviews.`,
        )
      }

      setVocabItems(vocabItems)
      setNormalizedCards(cards)

      vocabItems.forEach((item) => {
        if (item.status) {
          flow.updateItemStatus(item.id, item.status)
        }
      })
      flow.captureInitialState()
      navigateToStep(3)
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to transform data"
      setErrorMessage(message)
      console.error("Transform error:", err)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleImportProgress = async () => {
    const cards = normalizedCards()
    const source = importSource()

    if (!source || cards.length === 0) {
      setErrorMessage("No cards to import")
      return
    }

    setIsProcessing(true)
    setErrorMessage(null)

    try {
      const typeResolver = createNormalizedCardTypeResolver(cards)
      const { handleImport } = useImportHandler({
        itemStates: flow.itemStates,
        initialItemStates: flow.initialItemStates,
        getTypeResolver: () => typeResolver,
        getExistingCards: () => new Map(),
        routeType: "automatic",
      })

      const result = await handleImport()

      if (!result.success) {
        return
      }

      const changedIds = new Set(result.changes.map((c) => c.id))
      const unchangedCards = cards.filter((c) => !changedIds.has(c.searchTerm))

      let unchangedCount = 0
      if (unchangedCards.length > 0) {
        await importReviewsServerFn({
          data: { cards: unchangedCards, source },
        })
        unchangedCount = unchangedCards.length
      }

      const totalCount = unchangedCount + result.upserted + result.deleted
      toast.success(`Successfully imported ${totalCount} items`)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Import failed"
      toast.error(message)
      console.error("Import error:", err)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div class="animate-in fade-in slide-in-from-bottom-4 min-h-screen w-full duration-500 pt-12 pb-24 md:py-24">
      <div class="container relative flex flex-col items-center">
        <div class="w-full" onClick={flow.clearSelection}>
          {/* Error Display */}
          <Show when={errorMessage()}>
            <div class="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
              <p class="text-sm font-medium text-red-400">{errorMessage()}</p>
            </div>
          </Show>

          {/* Step 1: Upload */}
          <Show when={currentStep() === 1}>
            <FileUploadArea
              onUpload={handleUpload}
              isProcessing={isProcessing()}
              accept=".apkg,.json"
              accentColor="purple"
              description="Support for Anki (.apkg) and JPDB (.json) files."
              processingDescription="Analyzing vocabulary mastery..."
            />
          </Show>

          {/* Step 2: Field Mapping */}
          <Show
            when={
              currentStep() === 2 &&
              extractedData() &&
              fieldMapping()
            }
          >
            <AnkiFieldMappingView
              extractedData={extractedData()!}
              fieldMapping={fieldMapping()!}
              onMappingChange={setFieldMapping}
              onNext={handleFieldMappingNext}
            />
          </Show>

          {/* Step 3: Results */}
          <Show when={currentStep() === 3}>
            <AutomaticResultsView
              vocabItems={vocabItems()}
              kanjiItems={kanjiItems()}
              onVocabDelete={(id) => {
                setVocabItems((items) => items.filter((item) => item.id !== id))
                flow.handleDelete(id)
              }}
              onKanjiDelete={(id) => {
                setKanjiItems((items) => items.filter((item) => item.id !== id))
                flow.handleDelete(id)
              }}
              onImportProgress={handleImportProgress}
              isImporting={isProcessing()}
            />
          </Show>

          {/* FLOATING ACTION BAR */}
          <FloatingActionBar
            selectedCount={flow.selectedIds().size}
            onApply={flow.applyStatus}
            onClearSelection={flow.clearSelection}
            mode="automatic"
          />
        </div>
      </div>
    </div>
  )
}
