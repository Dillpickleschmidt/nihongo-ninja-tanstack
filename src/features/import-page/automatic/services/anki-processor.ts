import { AnkiWorkerManager } from "@/features/fsrs-import/adapters/anki/anki-worker-manager"
import { autoDetectFieldMapping } from "@/features/fsrs-import/adapters/anki/anki-field-detector"
import type { AnkiExtractedData, FieldMapping } from "@/features/fsrs-import/adapters/anki/anki-types"

export interface AnkiProcessResult {
  extractedData: AnkiExtractedData
  detectedFieldMapping: FieldMapping
}

/**
 * Processes an Anki collection.anki2 file and extracts data with auto-detected field mapping
 */
export async function processAnkiFile(file: File): Promise<AnkiProcessResult> {
  const workerManager = new AnkiWorkerManager()

  try {
    await workerManager.waitForReady()

    // Extract Anki data from the uploaded file
    const extracted = await workerManager.extractAnkiData(file)

    // Validate we found some cards with reviews
    if (extracted.notes.length === 0) {
      throw new Error("No cards with reviews found in the Anki file")
    }

    // Auto-detect field mapping from first note
    const detected = autoDetectFieldMapping(extracted.notes[0])

    return {
      extractedData: extracted,
      detectedFieldMapping: detected,
    }
  } finally {
    // Always cleanup worker
    workerManager.terminate()
  }
}
