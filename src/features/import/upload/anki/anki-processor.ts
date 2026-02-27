import { AnkiWorkerManager } from "./anki-worker-manager"
import { autoDetectFieldMapping } from "./anki-field-detector"
import type { AnkiExtractedData, FieldMapping } from "./anki-types"

export interface AnkiExtractionResult {
  extractedData: AnkiExtractedData
  detectedFieldMapping: FieldMapping
}

/**
 * Extracts data from an Anki .apkg file and auto-detects field mapping.
 * Returns raw extraction result for user to confirm/adjust mapping before transform.
 */
export async function extractAnkiFile(
  file: File,
): Promise<AnkiExtractionResult> {
  const manager = new AnkiWorkerManager()

  try {
    const extractedData = await manager.extractAnkiData(file)

    if (extractedData.notes.length === 0) {
      throw new Error("No notes found in the Anki deck")
    }

    const detectedFieldMapping = autoDetectFieldMapping(
      extractedData.notes[0],
    )

    return { extractedData, detectedFieldMapping }
  } finally {
    manager.terminate()
  }
}
