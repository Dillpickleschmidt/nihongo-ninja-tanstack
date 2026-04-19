/**
 * Anki Extraction Worker
 * Runs Anki file extraction in a separate thread to keep main thread responsive
 * Delegates to anki-extraction.ts for actual extraction logic
 */

import { extractAnkiData } from "./anki-extraction"

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

      self.postMessage({
        type: "extract-result",
        id,
        extractedData,
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
