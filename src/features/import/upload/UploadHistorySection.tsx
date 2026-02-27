import { createSignal, Show } from "solid-js"
import { FileDropZone } from "@/features/import/shared/FileDropZone"
import { processJpdbFile } from "./jpdb/jpdb-processor"
import { extractAnkiFile, type AnkiExtractionResult } from "./anki/anki-processor"
import type { ImportProcessResult } from "./types"

interface UploadHistorySectionProps {
  onProcessed?: (result: ImportProcessResult) => void
  onAnkiExtracted?: (result: AnkiExtractionResult) => void
}

export function UploadHistorySection(props: UploadHistorySectionProps) {
  const [isProcessing, setIsProcessing] = createSignal(false)
  const [error, setError] = createSignal<string | null>(null)

  const handleFileSelect = async (file: File) => {
    setIsProcessing(true)
    setError(null)

    try {
      if (file.name.endsWith(".json")) {
        const result = await processJpdbFile(file)
        props.onProcessed?.(result)
      } else if (file.name.endsWith(".apkg")) {
        const result = await extractAnkiFile(file)
        props.onAnkiExtracted?.(result)
      } else {
        setError("Unsupported file format")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to process file")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <>
      <FileDropZone
        accept=".apkg,.json"
        description="Supports Anki .apkg exports and jpdb .json files"
        onFile={handleFileSelect}
      />

      {/* Processing indicator */}
      <Show when={isProcessing()}>
        <div class="mt-4 flex items-center justify-center gap-2 text-white/60">
          <svg class="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Processing...</span>
        </div>
      </Show>

      {/* Error Message */}
      <Show when={error()}>
        <div class="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
          <p class="text-sm text-red-400">{error()}</p>
        </div>
      </Show>

      {/* Supported Formats Info */}
      <div class="mt-8 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
        <h3 class="mb-4 text-sm font-semibold text-white">Supported Formats</h3>

        <div class="space-y-4">
          <FormatInfo
            name="Anki (.apkg)"
            description="Export your deck from Anki: File → Export → Anki Deck Package"
          />
          <FormatInfo
            name="jpdb (.json)"
            description="Export from jpdb.io settings page"
          />
        </div>
      </div>
    </>
  )
}

function FormatInfo(props: { name: string; description: string }) {
  return (
    <div class="flex items-start gap-3">
      <div class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
        <svg
          class="size-4 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </div>
      <div>
        <p class="font-medium text-white">{props.name}</p>
        <p class="text-sm text-white/50">{props.description}</p>
      </div>
    </div>
  )
}
