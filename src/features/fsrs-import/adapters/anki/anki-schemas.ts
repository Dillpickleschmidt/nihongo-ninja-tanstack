import { Rating } from "ts-fsrs"
import type { AnkiExtractedData } from "./anki-types"
import { AnkiExtractedDataSchema } from "./anki-types"

export function mapAnkiEaseToFSRS(ease: number): Rating {
  switch (ease) {
    case 1:
      return Rating.Again
    case 2:
      return Rating.Hard
    case 3:
      return Rating.Good
    case 4:
      return Rating.Easy
    default:
      console.warn(`[AnkiSchemas] Unknown ease rating: ${ease}, defaulting to Rating.Again`)
      return Rating.Again
  }
}

export function safeParseAnkiExtractedData(data: unknown) {
  return AnkiExtractedDataSchema.safeParse(data)
}

export function isValidAnkiExtractedData(data: unknown): data is AnkiExtractedData {
  return AnkiExtractedDataSchema.safeParse(data).success
}
