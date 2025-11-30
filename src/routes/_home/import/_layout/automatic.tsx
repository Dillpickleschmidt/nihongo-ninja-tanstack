// src/routes/_home/import/_layout/automatic.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, Show } from "solid-js"
import { toast } from "solid-sonner"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { ImportFlowProvider, useImportFlow } from "@/features/import-page/shared/context/ImportFlowContext"
import { AutomaticUploadView } from "@/features/import-page/automatic/components/AutomaticUploadView"
import { AnkiFieldMappingView } from "@/features/import-page/automatic/components/AnkiFieldMappingView"
import { AutomaticResultsView } from "@/features/import-page/automatic/components/AutomaticResultsView"
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

// --- Import Steps Enum ---

const IMPORT_STEPS = {
  UPLOAD: 1,
  FIELD_MAPPING: 2,
  RESULTS: 3,
} as const

type ImportStep = (typeof IMPORT_STEPS)[keyof typeof IMPORT_STEPS]


export const Route = createFileRoute("/_home/import/_layout/automatic")({
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

  // Step management
  const [currentStep, setCurrentStep] = createSignal<ImportStep>(
    IMPORT_STEPS.UPLOAD,
  )
  const [importSource, setImportSource] = createSignal<"anki" | "jpdb" | null>(
    null,
  )
  const [extractedData, setExtractedData] =
    createSignal<AnkiExtractedData | null>(null)
  const [fieldMapping, setFieldMapping] = createSignal<FieldMapping | null>(
    null,
  )

  // Processing
  const [isProcessing, setIsProcessing] = createSignal(false)
  const [errorMessage, setErrorMessage] = createSignal<string | null>(null)

  // Results
  const [vocabItems, setVocabItems] = createSignal<ImportItem[]>([])
  const [kanjiItems, setKanjiItems] = createSignal<ImportItem[]>([])
  const [normalizedCards, setNormalizedCards] = createSignal<NormalizedCard[]>([])



  // Step 1: Handle file upload with auto-detection
  const handleUpload = async (file: File) => {
    setIsProcessing(true)
    setErrorMessage(null)

    try {
      // Detect file type
      const source = file.name.endsWith(".json") ? "jpdb" : "anki"
      setImportSource(source)

      if (source === "jpdb") {
        // JPDB import path: use service to process
        const { vocabImportItems: vocab, kanjiImportItems: kanji, normalizedCards: cards } = await processJpdbFile(file)

        setVocabItems(vocab)
        setKanjiItems(kanji)
        setNormalizedCards(cards)

        // Populate itemStates with initial status badges from JPDB
        vocab.concat(kanji).forEach((item) => {
          if (item.status) {
            flow.updateItemStatus(item.id, item.status)
          }
        })

        // Capture as initial state for change detection
        flow.captureInitialState()

        // Skip field mapping and go directly to results
        setCurrentStep(IMPORT_STEPS.RESULTS)
      } else {
        // Anki import path: use service to process
        const { extractedData, detectedFieldMapping } = await processAnkiFile(file)

        setExtractedData(extractedData)
        setFieldMapping(detectedFieldMapping)

        setCurrentStep(IMPORT_STEPS.FIELD_MAPPING)
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

  // Step 2: Handle field mapping and move to results
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

      // Populate itemStates with initial status badges from Anki review history
      vocabItems.forEach((item) => {
        if (item.status) {
          flow.updateItemStatus(item.id, item.status)
        }
      })

      // Capture as initial state for change detection
      flow.captureInitialState()

      setCurrentStep(IMPORT_STEPS.RESULTS)
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to transform data"
      setErrorMessage(message)
      console.error("Transform error:", err)
    } finally {
      setIsProcessing(false)
    }
  }

  // Step 3: Handle import progress button
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

      // Process unchanged items via review history
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
    <div onClick={flow.clearSelection} class="container px-4 py-6 md:px-8 md:py-8">
      {/* Error Display */}
      <Show when={errorMessage()}>
        <div class="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
          <p class="text-sm font-medium text-red-400">{errorMessage()}</p>
        </div>
      </Show>

      {/* Step 1: Upload */}
      <Show when={currentStep() === IMPORT_STEPS.UPLOAD}>
        <AutomaticUploadView
          onUpload={handleUpload}
          isProcessing={isProcessing()}
        />
      </Show>

      {/* Step 2: Field Mapping */}
      <Show
        when={
          currentStep() === IMPORT_STEPS.FIELD_MAPPING &&
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
      <Show when={currentStep() === IMPORT_STEPS.RESULTS}>
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
  )
}
