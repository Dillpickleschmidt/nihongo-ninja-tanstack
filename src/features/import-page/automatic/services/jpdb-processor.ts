import { jpdbAdapter, transformJpdbData } from "@/features/fsrs-import/adapters/jpdb/jpdb-adapter"
import type { JpdbJsonData } from "@/features/fsrs-import/adapters/jpdb/jpdb-types"
import type { ImportItem } from "@/features/import-page/shared/types"
import type { NormalizedCard } from "@/features/fsrs-import/shared/types/import-data-models"

export interface JpdbProcessResult {
  vocabImportItems: ImportItem[]
  kanjiImportItems: ImportItem[]
  normalizedCards: NormalizedCard[]
}

/**
 * Processes a JPDB JSON file and returns import items and normalized cards
 */
export async function processJpdbFile(file: File): Promise<JpdbProcessResult> {
  const jsonText = await file.text()
  const jpdbData = JSON.parse(jsonText)

  // Validate the JSON structure
  if (!jpdbAdapter.validateInput(jpdbData)) {
    throw new Error(
      "Invalid JPDB JSON format. Please check your file and try again.",
    )
  }

  const jpdbTypedData = jpdbData as JpdbJsonData

  // Transform to both ImportItems and NormalizedCards
  const { vocabImportItems: vocab, kanjiImportItems: kanji, normalizedCards: cards } = await transformJpdbData(jpdbTypedData)

  // Validate we found some data
  if (vocab.length === 0 && kanji.length === 0) {
    throw new Error(
      "No vocabulary or kanji cards found in the JPDB file",
    )
  }

  return {
    vocabImportItems: vocab,
    kanjiImportItems: kanji,
    normalizedCards: cards,
  }
}
