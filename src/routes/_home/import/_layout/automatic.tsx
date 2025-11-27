// src/routes/_home/import/_layout/automatic.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, Show } from "solid-js"
import { toast } from "solid-sonner"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { useImportSelection } from "@/features/import-page/shared/hooks/use-import-selection"
import { useImportState } from "@/features/import-page/shared/hooks/useImportState"
import { AutomaticUploadView } from "@/features/import-page/automatic/components/AutomaticUploadView"
import { AnkiFieldMappingView } from "@/features/import-page/automatic/components/AnkiFieldMappingView"
import { AutomaticResultsView } from "@/features/import-page/automatic/components/AutomaticResultsView"
import { AnkiWorkerManager } from "@/features/fsrs-import/adapters/anki/anki-worker-manager"
import { autoDetectFieldMapping } from "@/features/fsrs-import/adapters/anki/anki-field-detector"
import { transformAnkiData } from "@/features/fsrs-import/adapters/anki/anki-adapter"
import { jpdbAdapter, transformJpdbData } from "@/features/fsrs-import/adapters/jpdb/jpdb-adapter"
import { importReviewsServerFn } from "@/features/fsrs-import/server/importReviewsServerFn"
import { useImportHandler } from "@/features/import-page/shared/hooks/useImportHandler"
import { createNormalizedCardTypeResolver } from "@/features/import-page/shared/utils/type-resolver-factory"
import type {
  AnkiExtractedData,
  FieldMapping,
} from "@/features/fsrs-import/adapters/anki/anki-types"
import type { NormalizedCard } from "@/features/fsrs-import/shared/types/import-data-models"
import type { ImportItem } from "@/features/import-page/shared/types"
import type { JpdbJsonData } from "@/features/fsrs-import/adapters/jpdb/jpdb-types"

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

  // Badge state management
  const {
    itemStates,
    updateItemStatus,
    initialItemStates,
    captureInitialState,
  } = useImportState()

  // Selection Hook
  const {
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
    handleDelete,
  } = useImportSelection(updateItemStatus)


  // Step 1: Handle file upload with auto-detection
  const handleUpload = async (file: File) => {
    setIsProcessing(true)
    setErrorMessage(null)

    try {
      // Detect file type
      const source = file.name.endsWith(".json") ? "jpdb" : "anki"
      setImportSource(source)

      if (source === "jpdb") {
        // JPDB import path: parse JSON and validate
        const jsonText = await file.text()
        const jpdbData = JSON.parse(jsonText)

        if (!jpdbAdapter.validateInput(jpdbData)) {
          throw new Error(
            "Invalid JPDB JSON format. Please check your file and try again.",
          )
        }

        const jpdbTypedData = jpdbData as JpdbJsonData

        // Transform to both ImportItems and NormalizedCards
        const { vocabImportItems: vocab, kanjiImportItems: kanji, normalizedCards: cards } = await transformJpdbData(jpdbTypedData)

        if (vocab.length === 0 && kanji.length === 0) {
          throw new Error(
            "No vocabulary or kanji cards found in the JPDB file",
          )
        }

        setVocabItems(vocab)
        setKanjiItems(kanji)
        setNormalizedCards(cards)

        // Populate itemStates with initial status badges from JPDB
        vocab.concat(kanji).forEach((item) => {
          if (item.status) {
            updateItemStatus(item.id, item.status)
          }
        })

        // Capture as initial state for change detection
        captureInitialState()

        // Skip field mapping and go directly to results
        setCurrentStep(IMPORT_STEPS.RESULTS)
      } else {
        // Anki import path: extract and field mapping
        const workerManager = new AnkiWorkerManager()

        await workerManager.waitForReady()

        // Extract Anki data from the uploaded file
        const extracted = await workerManager.extractAnkiData(file)

        if (extracted.notes.length === 0) {
          throw new Error("No cards with reviews found in the Anki file")
        }

        setExtractedData(extracted)

        // Auto-detect field mapping from first note
        const detected = autoDetectFieldMapping(extracted.notes[0])
        setFieldMapping(detected)

        setCurrentStep(IMPORT_STEPS.FIELD_MAPPING)

        // Cleanup worker
        workerManager.terminate()
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
          updateItemStatus(item.id, item.status)
        }
      })

      // Capture as initial state for change detection
      captureInitialState()

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
        itemStates,
        initialItemStates,
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
    <div onClick={clearSelection} class="container px-4 py-6 md:px-8 md:py-8">
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
          itemStates={itemStates()}
          initialItemStates={initialItemStates()}
          selectedIds={selectedIds()}
          handleItemClick={handleItemClick}
          handlePointerDown={handlePointerDown}
          toggleSelectGroup={toggleSelectGroup}
          onVocabDelete={(id) => {
            setVocabItems((items) => items.filter((item) => item.id !== id))
            handleDelete(id)
          }}
          onKanjiDelete={(id) => {
            setKanjiItems((items) => items.filter((item) => item.id !== id))
            handleDelete(id)
          }}
          onUndoItem={(id) => updateItemStatus(id, initialItemStates()[id])}
          onImportProgress={handleImportProgress}
          isImporting={isProcessing()}
        />
      </Show>

      {/* FLOATING ACTION BAR */}
      <FloatingActionBar
        selectedCount={selectedIds().size}
        onApply={applyStatus}
        onClearSelection={clearSelection}
        mode="automatic"
      />
    </div>
  )
}
