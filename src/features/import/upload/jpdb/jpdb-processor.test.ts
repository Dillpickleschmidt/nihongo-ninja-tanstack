import { describe, it, expect } from "vitest"
import { processJpdbData } from "./jpdb-processor"
import { safeParseJpdbJsonData, type JpdbJsonData } from "./jpdb-schemas"

// Valid minimal JPDB structure
const validEmptyJpdbData: JpdbJsonData = {
  cards_vocabulary_jp_en: [],
  cards_vocabulary_en_jp: [],
  cards_kanji_keyword_char: [],
  cards_kanji_char_keyword: [],
}

describe("JPDB Processor", () => {
  describe("safeParseJpdbJsonData (validation)", () => {
    it("accepts valid JPDB structure", () => {
      const result = safeParseJpdbJsonData(validEmptyJpdbData)
      expect(result.success).toBe(true)
    })

    it("rejects invalid structure", () => {
      const result = safeParseJpdbJsonData({ invalid: "structure" })
      expect(result.success).toBe(false)
    })

    it("rejects missing required arrays", () => {
      const result = safeParseJpdbJsonData({
        cards_vocabulary_jp_en: [],
        // Missing other required arrays
      })
      expect(result.success).toBe(false)
    })

    it("rejects null and primitives", () => {
      expect(safeParseJpdbJsonData(null).success).toBe(false)
      expect(safeParseJpdbJsonData("string").success).toBe(false)
      expect(safeParseJpdbJsonData(123).success).toBe(false)
    })
  })

  describe("processJpdbData", () => {
    describe("vocabulary processing", () => {
      it("processes vocabulary cards correctly", () => {
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_vocabulary_jp_en: [
            {
              vid: 1,
              spelling: "食べ物",
              reading: "たべもの",
              reviews: [
                { timestamp: 1704110400, grade: "okay", from_anki: false },
              ],
            },
          ],
        }

        const result = processJpdbData(data)

        expect(result.vocabItems).toHaveLength(1)
        expect(result.vocabItems[0].id).toBe("食べ物")
        expect(result.processedCards).toHaveLength(1)
        expect(result.processedCards[0].searchTerm).toBe("食べ物")
        expect(result.processedCards[0].type).toBe("vocabulary")
      })

      it("filters out vocabulary with empty spelling", () => {
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_vocabulary_jp_en: [
            { vid: 1, spelling: "valid", reading: "valid", reviews: [{ timestamp: 1704110400, grade: "okay", from_anki: false }] },
            { vid: 2, spelling: "", reading: "empty", reviews: [{ timestamp: 1704110400, grade: "okay", from_anki: false }] },
            { vid: 3, spelling: "  ", reading: "whitespace", reviews: [{ timestamp: 1704110400, grade: "okay", from_anki: false }] },
          ],
        }

        const result = processJpdbData(data)

        expect(result.vocabItems).toHaveLength(1)
        expect(result.vocabItems[0].id).toBe("valid")
      })

      it("processes reviews into FSRS logs", () => {
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_vocabulary_jp_en: [
            {
              vid: 1,
              spelling: "test",
              reading: "テスト",
              reviews: [
                { timestamp: 1704110400, grade: "something", from_anki: false },
                { timestamp: 1704196800, grade: "okay", from_anki: false },
                { timestamp: 1704283200, grade: "easy", from_anki: true },
              ],
            },
          ],
        }

        const result = processJpdbData(data)

        // Reviews are processed into FSRS logs
        expect(result.processedCards[0].fsrsLogs.length).toBeGreaterThan(0)
        expect(result.processedCards[0].fsrsCard).toBeDefined()
      })
    })

    describe("kanji processing", () => {
      it("processes kanji cards correctly", () => {
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_kanji_keyword_char: [
            {
              character: "食",
              reviews: [
                { timestamp: 1704110400, grade: "okay", from_anki: false },
              ],
            },
          ],
        }

        const result = processJpdbData(data)

        expect(result.kanjiItems).toHaveLength(1)
        expect(result.kanjiItems[0].id).toBe("食")
        expect(result.processedCards).toHaveLength(1)
        expect(result.processedCards[0].searchTerm).toBe("食")
        expect(result.processedCards[0].type).toBe("kanji")
      })

      it("filters out kanji with empty character", () => {
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_kanji_keyword_char: [
            { character: "有", reviews: [{ timestamp: 1704110400, grade: "okay", from_anki: false }] },
            { character: "", reviews: [{ timestamp: 1704110400, grade: "okay", from_anki: false }] },
            { character: "  ", reviews: [{ timestamp: 1704110400, grade: "okay", from_anki: false }] },
          ],
        }

        const result = processJpdbData(data)

        expect(result.kanjiItems).toHaveLength(1)
        expect(result.kanjiItems[0].id).toBe("有")
      })
    })

    describe("timestamp normalization", () => {
      it("converts Unix seconds to proper FSRS card", () => {
        const unixSeconds = 1704110400 // 2024-01-01T12:00:00Z
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_vocabulary_jp_en: [
            {
              vid: 1,
              spelling: "test",
              reading: "test",
              reviews: [{ timestamp: unixSeconds, grade: "okay", from_anki: false }],
            },
          ],
        }

        const result = processJpdbData(data)

        // Card should be processed with correct timestamp
        expect(result.processedCards[0].fsrsCard.last_review?.toISOString()).toBe("2024-01-01T12:00:00.000Z")
      })

      it("handles millisecond timestamps", () => {
        const unixMillis = 1704110400000 // Already in milliseconds
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_vocabulary_jp_en: [
            {
              vid: 1,
              spelling: "test",
              reading: "test",
              reviews: [{ timestamp: unixMillis, grade: "okay", from_anki: false }],
            },
          ],
        }

        const result = processJpdbData(data)

        // Card should be processed with correct timestamp
        expect(result.processedCards[0].fsrsCard.last_review?.toISOString()).toBe("2024-01-01T12:00:00.000Z")
      })
    })

    describe("status determination", () => {
      it("skips cards with no reviews", () => {
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_vocabulary_jp_en: [
            { vid: 1, spelling: "no-reviews", reading: "new", reviews: [] },
            { vid: 2, spelling: "has-reviews", reading: "test", reviews: [{ timestamp: 1704110400, grade: "okay", from_anki: false }] },
          ],
        }

        const result = processJpdbData(data)

        // Only the card with reviews is included
        expect(result.vocabItems).toHaveLength(1)
        expect(result.vocabItems[0].id).toBe("has-reviews")
        expect(result.processedCards).toHaveLength(1)
      })

      it("returns learning status for cards in learning state", () => {
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_vocabulary_jp_en: [
            {
              vid: 1,
              spelling: "learning",
              reading: "learning",
              reviews: [
                { timestamp: 1704110400, grade: "something", from_anki: false },
              ],
            },
          ],
        }

        const result = processJpdbData(data)

        expect(result.vocabItems[0].status).toBe("learning")
      })

      it("returns decent status for reviewed cards with low stability", () => {
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_vocabulary_jp_en: [
            {
              vid: 1,
              spelling: "decent",
              reading: "decent",
              reviews: [
                { timestamp: 1704110400, grade: "okay", from_anki: false },
                { timestamp: 1704196800, grade: "okay", from_anki: false },
                { timestamp: 1704283200, grade: "okay", from_anki: false },
              ],
            },
          ],
        }

        const result = processJpdbData(data)

        expect(result.vocabItems[0].status).toBe("decent")
      })

      it("returns mastered status for never-forget cards", () => {
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_vocabulary_jp_en: [
            {
              vid: 1,
              spelling: "mastered",
              reading: "mastered",
              reviews: [
                { timestamp: 1704110400, grade: "never-forget", from_anki: false },
              ],
            },
          ],
        }

        const result = processJpdbData(data)

        expect(result.vocabItems[0].status).toBe("mastered")
      })
    })

    describe("error handling", () => {
      it("throws error when no cards found", () => {
        expect(() => processJpdbData(validEmptyJpdbData)).toThrow(
          "No vocabulary or kanji cards found"
        )
      })
    })

    describe("mixed content", () => {
      it("processes both vocabulary and kanji together", () => {
        const review = { timestamp: 1704110400, grade: "okay" as const, from_anki: false }
        const data: JpdbJsonData = {
          ...validEmptyJpdbData,
          cards_vocabulary_jp_en: [
            { vid: 1, spelling: "単語", reading: "たんご", reviews: [review] },
            { vid: 2, spelling: "言葉", reading: "ことば", reviews: [review] },
          ],
          cards_kanji_keyword_char: [
            { character: "単", reviews: [review] },
            { character: "語", reviews: [review] },
          ],
        }

        const result = processJpdbData(data)

        expect(result.vocabItems).toHaveLength(2)
        expect(result.kanjiItems).toHaveLength(2)
        expect(result.processedCards).toHaveLength(4)
      })
    })
  })
})
