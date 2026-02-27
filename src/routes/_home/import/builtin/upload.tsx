import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, Show } from "solid-js"
import { queryKeys } from "@/query/query-keys"
import { ImportPageHeader } from "@/features/import/shared/ImportPageHeader"
import { UploadHistorySection } from "@/features/import/upload/UploadHistorySection"
import { ImportResultsView } from "@/features/import/upload/ImportResultsView"
import { AnkiFieldMappingView } from "@/features/import/upload/anki/AnkiFieldMappingView"
import { transformAnkiData } from "@/features/import/upload/anki/anki-adapter"
import type { ImportProcessResult } from "@/features/import/upload/types"
import type { AnkiExtractionResult } from "@/features/import/upload/anki/anki-processor"
import type { AnkiExtractedData, FieldMapping } from "@/features/import/upload/anki/anki-types"

export const Route = createFileRoute("/_home/import/builtin/upload")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 12,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
  },
  component: UploadHistoryPage,
})

type Step = "upload" | "field-mapping" | "review"

function UploadHistoryPage() {
  const [step, setStep] = createSignal<Step>("upload")
  const [processedResult, setProcessedResult] =
    createSignal<ImportProcessResult | null>(null)
  const [importSource, setImportSource] = createSignal<"JPDB" | "Anki">("JPDB")

  // Anki-specific state
  const [ankiExtractedData, setAnkiExtractedData] =
    createSignal<AnkiExtractedData | null>(null)
  const [fieldMapping, setFieldMapping] = createSignal<FieldMapping | null>(
    null,
  )

  const handleProcessed = (result: ImportProcessResult) => {
    setProcessedResult(result)
    setImportSource("JPDB")
    setStep("review")
  }

  const handleAnkiExtracted = (result: AnkiExtractionResult) => {
    setAnkiExtractedData(result.extractedData)
    setFieldMapping(result.detectedFieldMapping)
    setImportSource("Anki")
    setStep("field-mapping")
  }

  const handleFieldMappingNext = () => {
    const data = ankiExtractedData()
    const mapping = fieldMapping()
    if (!data || !mapping) return

    const result = transformAnkiData(data, mapping)
    setProcessedResult(result)
    setStep("review")
  }

  const handleBack = () => {
    const current = step()
    if (current === "review" && importSource() === "Anki") {
      setStep("field-mapping")
      setProcessedResult(null)
    } else if (current === "field-mapping") {
      setStep("upload")
      setAnkiExtractedData(null)
      setFieldMapping(null)
    } else {
      setStep("upload")
      setProcessedResult(null)
    }
  }

  return (
    <div class="mx-auto max-w-4xl px-4 pt-24 pb-32 md:pb-16">
      <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Show when={step() === "upload"}>
          <ImportPageHeader
            title="Upload Your History"
            subtitle="Import your review data from external sources"
            backTo="/import/builtin"
            backLabel="Back"
          />
          <UploadHistorySection
            onProcessed={handleProcessed}
            onAnkiExtracted={handleAnkiExtracted}
          />
        </Show>

        <Show when={step() === "field-mapping" && ankiExtractedData() && fieldMapping()}>
          <ImportPageHeader
            title="Map Anki Fields"
            subtitle="Confirm which fields contain the word and meaning"
            backTo="/import/builtin/upload"
            backLabel="Back"
            onBackClick={(e) => {
              e.preventDefault()
              handleBack()
            }}
          />
          <AnkiFieldMappingView
            extractedData={ankiExtractedData()!}
            fieldMapping={fieldMapping()!}
            onMappingChange={setFieldMapping}
            onNext={handleFieldMappingNext}
          />
        </Show>

        <Show when={step() === "review" && processedResult()}>
          {(result) => (
            <>
              <ImportPageHeader
                title="Review Import"
                subtitle="Select items to import"
                backTo="/import/builtin/upload"
                backLabel="Back"
                onBackClick={(e) => {
                  e.preventDefault()
                  handleBack()
                }}
              />
              <ImportResultsView
                result={result()}
                onBack={handleBack}
                source={importSource()}
              />
            </>
          )}
        </Show>
      </div>
    </div>
  )
}
