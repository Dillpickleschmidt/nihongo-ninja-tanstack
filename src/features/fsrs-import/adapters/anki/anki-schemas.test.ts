import { describe, it, expect } from "vitest"
import { Rating } from "ts-fsrs"
import { mapAnkiEaseToFSRS, isValidAnkiExtractedData } from "./anki-schemas"
import { AnkiExtractedDataSchema } from "./anki-types"

describe("AnkiSchemas", () => {
  describe("mapAnkiEaseToFSRS", () => {
    it("should map all Anki ease ratings to FSRS ratings", () => {
      expect(mapAnkiEaseToFSRS(1)).toBe(Rating.Again) // 1
      expect(mapAnkiEaseToFSRS(2)).toBe(Rating.Hard) // 2
      expect(mapAnkiEaseToFSRS(3)).toBe(Rating.Good) // 3
      expect(mapAnkiEaseToFSRS(4)).toBe(Rating.Easy) // 4
    })

    it("should default unknown ratings to Rating.Again", () => {
      expect(mapAnkiEaseToFSRS(0)).toBe(Rating.Again)
      expect(mapAnkiEaseToFSRS(5)).toBe(Rating.Again)
      expect(mapAnkiEaseToFSRS(-1)).toBe(Rating.Again)
    })
  })

  describe("isValidAnkiExtractedData", () => {
    it("should validate correct AnkiExtractedData structure", () => {
      const validData = {
        notes: [],
        cards: new Map(),
        reviews: new Map(),
        fieldCount: 2,
        totalCards: 0,
        skippedCards: 0,
      }

      expect(isValidAnkiExtractedData(validData)).toBe(true)
    })

    it("should reject invalid data structures", () => {
      expect(isValidAnkiExtractedData(null)).toBe(false)
      expect(isValidAnkiExtractedData(undefined)).toBe(false)
      expect(isValidAnkiExtractedData({})).toBe(false)
      expect(isValidAnkiExtractedData("not-an-object")).toBe(false)

      // Missing required fields
      expect(
        isValidAnkiExtractedData({
          notes: [],
          cards: new Map(),
          // missing reviews, fieldCount, etc.
        }),
      ).toBe(false)

      // Wrong types
      expect(
        isValidAnkiExtractedData({
          notes: "not-an-array",
          cards: new Map(),
          reviews: new Map(),
          fieldCount: 2,
          totalCards: 0,
          skippedCards: 0,
        }),
      ).toBe(false)
    })
  })

  describe("AnkiExtractedDataSchema", () => {
    it("should parse valid extracted data", () => {
      const data = {
        notes: [],
        cards: new Map(),
        reviews: new Map(),
        fieldCount: 2,
        totalCards: 5,
        skippedCards: 1,
      }

      const result = AnkiExtractedDataSchema.safeParse(data)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.fieldCount).toBe(2)
        expect(result.data.totalCards).toBe(5)
        expect(result.data.skippedCards).toBe(1)
      }
    })

    it("should reject negative counts", () => {
      const data = {
        notes: [],
        cards: new Map(),
        reviews: new Map(),
        fieldCount: -1,
        totalCards: 0,
        skippedCards: 0,
      }

      const result = AnkiExtractedDataSchema.safeParse(data)
      expect(result.success).toBe(false)
    })
  })
})
