import type { FSRSProcessingGrade } from "../../shared/types/fsrs-types"

export function mapAnkiEaseToFSRS(ease: number): FSRSProcessingGrade {
  switch (ease) {
    case 1:
      return 1 // Rating.Again
    case 2:
      return 2 // Rating.Hard
    case 3:
      return 3 // Rating.Good
    case 4:
      return 4 // Rating.Easy
    default:
      console.warn(
        `[AnkiSchemas] Unknown ease rating: ${ease}, defaulting to 1`,
      )
      return 1
  }
}
