import { describe, it, expect } from "vitest"
import { Rating } from "ts-fsrs"
import { mapJpdbGradeToFSRS } from "./jpdb-schemas"
import { CustomFSRSRating } from "../../services/spaced-repetition-processor"

describe("JPDB Schemas", () => {
  describe("mapJpdbGradeToFSRS", () => {
    // Standard FSRS ratings mapping
    it("maps JPDB grades to FSRS ratings", () => {
      expect(mapJpdbGradeToFSRS("okay")).toBe(Rating.Good)
      expect(mapJpdbGradeToFSRS("known")).toBe(Rating.Good)
      expect(mapJpdbGradeToFSRS("hard")).toBe(Rating.Hard)
      expect(mapJpdbGradeToFSRS("easy")).toBe(Rating.Easy)
      expect(mapJpdbGradeToFSRS("something")).toBe(Rating.Again)
      expect(mapJpdbGradeToFSRS("fail")).toBe(Rating.Again)
    })

    // Custom FSRS ratings
    it("maps JPDB custom grades to CustomFSRSRating", () => {
      expect(mapJpdbGradeToFSRS("unknown")).toBe(CustomFSRSRating.Ignore)
      expect(mapJpdbGradeToFSRS("nothing")).toBe(CustomFSRSRating.Forget)
      expect(mapJpdbGradeToFSRS("never-forget")).toBe(CustomFSRSRating.NeverForget)
    })

    // Default case for unmapped values
    it("defaults unmapped grades to Rating.Again", () => {
      expect(mapJpdbGradeToFSRS("invalid-grade" as any)).toBe(Rating.Again)
      expect(mapJpdbGradeToFSRS("invalid" as any)).toBe(Rating.Again)
      expect(mapJpdbGradeToFSRS("unknown-input" as any)).toBe(Rating.Again)
    })

  })
})
