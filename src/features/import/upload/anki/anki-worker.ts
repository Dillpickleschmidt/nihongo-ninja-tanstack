/**
 * Anki Extraction Worker
 * Runs Anki file extraction in a separate thread to keep main thread responsive
 * Delegates to anki-extraction.ts for actual extraction logic
 */

import { extractAnkiData } from "./anki-extraction"
import type { AnkiExtractedData } from "./anki-types"

/**
 * Serializes extracted data for transfer back to main thread
 */
function serializeExtractedData(data: AnkiExtractedData) {
  return {
    ...data,
    cards: Object.fromEntries(data.cards),
    reviews: Object.fromEntries(data.reviews),
  }
}

/**
 * Worker message handler
 */
self.onmessage = async (event: MessageEvent) => {
  const { type, id, fileBuffer } = event.data

  if (type === "extract") {
    try {
      // Convert ArrayBuffer to File for extraction
      const file = new File([fileBuffer], "deck.apkg", {
        type: "application/zip",
      })

      // Use the extraction logic from anki-extraction.ts
      const extractedData = await extractAnkiData(file)

      // Serialize Map objects to plain objects for JSON transfer
      self.postMessage({
        type: "extract-result",
        id,
        extractedData: serializeExtractedData(extractedData),
      })
    } catch (error) {
      self.postMessage({
        type: "extract-error",
        id,
        message: error instanceof Error ? error.message : String(error),
      })
    }
  }
}

/**
 * Initialize on worker startup
 */
self.postMessage({ type: "ready" })
