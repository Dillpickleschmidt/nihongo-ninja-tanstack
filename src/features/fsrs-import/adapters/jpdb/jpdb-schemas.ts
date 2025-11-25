import { Rating } from "ts-fsrs"
import { CustomFSRSRating as ProcessorCustomFSRSRating } from "../../services/spaced-repetition-processor"
import { type JpdbGrade, JpdbJsonDataSchema } from "./jpdb-types"

export { JpdbJsonDataSchema } from "./jpdb-types"

/**
 * Maps JPDB grades to FSRS ratings
 */
export function mapJpdbGradeToFSRS(grade: JpdbGrade): any {
  switch (grade) {
    case "okay":
      return Rating.Good
    case "hard":
      return Rating.Hard
    case "something":
      return Rating.Again
    case "easy":
      return Rating.Easy
    case "known":
      return Rating.Good
    case "unknown":
      return ProcessorCustomFSRSRating.Ignore
    case "nothing":
      return ProcessorCustomFSRSRating.Forget
    case "never-forget":
      return ProcessorCustomFSRSRating.NeverForget
    case "fail":
      return Rating.Again
    default:
      return Rating.Again
  }
}

export function safeParseJpdbJsonData(data: unknown) {
  return JpdbJsonDataSchema.safeParse(data)
}
