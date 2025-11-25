import { type ImportAdapter } from "../import-adapter-interface"
import type { NormalizedCard } from "../../shared/types/import-data-models"
import type { AnkiExtractedData } from "./anki-types"
import { mapAnkiEaseToFSRS, isValidAnkiExtractedData } from "./anki-schemas"

export const ankiAdapter: ImportAdapter<AnkiExtractedData> = {
  validateInput: (data: any): data is AnkiExtractedData => {
    return isValidAnkiExtractedData(data)
  },

  transformCards: (data: AnkiExtractedData): NormalizedCard[] => {
    // TODO (Phase 4): Implement after field mapping UI is ready
    // Need FieldMapping from user to extract searchTerms from note fields
    console.warn("[AnkiAdapter] transformCards not yet implemented (Phase 4)")
    return []
  },

  getSupportedCardTypes: (): string[] => {
    return ["anki-note"]
  },

  normalizeGrade: mapAnkiEaseToFSRS,
}
