// src/features/fsrs-import/__tests__/jpdbAdapter.test.ts

import { describe, it, expect } from "vitest"
import { Rating } from "ts-fsrs"
import { jpdbAdapter } from "./jpdb-adapter"
import { type JpdbJsonData } from "./jpdb-types"
import { CustomFSRSRating } from "../../services/spaced-repetition-processor"

describe("jpdbAdapter", () => {
  describe("validateInput", () => {
    it("accepts valid jpdb JSON structure", () => {
      const validData: JpdbJsonData = {
        cards_vocabulary_jp_en: [],
        cards_vocabulary_en_jp: [],
        cards_kanji_keyword_char: [],
        cards_kanji_char_keyword: [],
      }

      expect(jpdbAdapter.validateInput(validData)).toBe(true)
    })

    it("rejects missing vocabulary arrays", () => {
      const invalidData = {
        cards_vocabulary_jp_en: [],
        // Missing other required arrays
      }

      expect(jpdbAdapter.validateInput(invalidData)).toBe(false)
    })

    it("rejects malformed data structure", () => {
      const invalidData = {
        cards_vocabulary_jp_en: "not-an-array",
        cards_vocabulary_en_jp: [],
        cards_kanji_keyword_char: [],
        cards_kanji_char_keyword: [],
      }

      expect(jpdbAdapter.validateInput(invalidData)).toBe(false)
    })

    it("provides helpful error messages", () => {
      expect(jpdbAdapter.validateInput(null)).toBe(false)
      expect(jpdbAdapter.validateInput({})).toBe(false)
      expect(jpdbAdapter.validateInput("string")).toBe(false)
    })
  })

  describe("normalizeGrade", () => {
    it("maps 'okay' to Rating.Good", () => {
      expect(jpdbAdapter.normalizeGrade("okay")).toBe(Rating.Good)
    })

    it("maps 'hard' to Rating.Hard", () => {
      expect(jpdbAdapter.normalizeGrade("hard")).toBe(Rating.Hard)
    })

    it("maps 'something' to Rating.Again", () => {
      expect(jpdbAdapter.normalizeGrade("something")).toBe(Rating.Again)
    })

    it("maps 'easy' to Rating.Easy", () => {
      expect(jpdbAdapter.normalizeGrade("easy")).toBe(Rating.Easy)
    })

    it("maps 'known' to Rating.Good", () => {
      expect(jpdbAdapter.normalizeGrade("known")).toBe(Rating.Good)
    })

    it("maps 'unknown' to CustomFSRSRating.Ignore", () => {
      expect(jpdbAdapter.normalizeGrade("unknown")).toBe(
        CustomFSRSRating.Ignore,
      )
    })

    it("maps 'nothing' to CustomFSRSRating.Forget", () => {
      expect(jpdbAdapter.normalizeGrade("nothing")).toBe(
        CustomFSRSRating.Forget,
      )
    })

    it("maps 'never-forget' to CustomFSRSRating.NeverForget", () => {
      expect(jpdbAdapter.normalizeGrade("never-forget")).toBe(
        CustomFSRSRating.NeverForget,
      )
    })

    it("handles unknown grades with fallback", () => {
      expect(jpdbAdapter.normalizeGrade("invalid-grade")).toBe(Rating.Again)
    })
  })

  describe("transformCards", () => {
    it("converts jpdb vocabulary to common format", () => {
      const jpdbData: JpdbJsonData = {
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
        cards_vocabulary_en_jp: [],
        cards_kanji_keyword_char: [],
        cards_kanji_char_keyword: [],
      }

      const result = jpdbAdapter.transformCards(jpdbData)

      expect(result).toHaveLength(1)
      expect(result[0].searchTerm).toBe("食べ物")
      expect(result[0].reviews).toHaveLength(1)
      expect(result[0].reviews[0].grade).toBe(Rating.Good)
      expect(result[0].source).toContain("vocabulary-jp-en")
    })

    it("converts jpdb kanji to common format", () => {
      const jpdbData: JpdbJsonData = {
        cards_vocabulary_jp_en: [],
        cards_vocabulary_en_jp: [],
        cards_kanji_keyword_char: [
          {
            character: "食",
            reviews: [
              { timestamp: 1704110400, grade: "hard", from_anki: false },
            ],
          },
        ],
        cards_kanji_char_keyword: [],
      }

      const result = jpdbAdapter.transformCards(jpdbData)

      expect(result).toHaveLength(1)
      expect(result[0].searchTerm).toBe("食")
      expect(result[0].reviews).toHaveLength(1)
      expect(result[0].reviews[0].grade).toBe(Rating.Hard)
      expect(result[0].source).toContain("kanji-keyword-char")
    })

    it("preserves review history correctly", () => {
      const jpdbData: JpdbJsonData = {
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
        cards_vocabulary_en_jp: [],
        cards_kanji_keyword_char: [],
        cards_kanji_char_keyword: [],
      }

      const result = jpdbAdapter.transformCards(jpdbData)

      expect(result[0].reviews).toHaveLength(3)
      expect(result[0].reviews[0].grade).toBe(Rating.Again)
      expect(result[0].reviews[1].grade).toBe(Rating.Good)
      expect(result[0].reviews[2].grade).toBe(Rating.Easy)

      // Check chronological order is preserved
      expect(result[0].reviews[0].timestamp.getTime()).toBeLessThan(
        result[0].reviews[1].timestamp.getTime(),
      )
    })

    it("handles missing optional fields", () => {
      const jpdbData: JpdbJsonData = {
        cards_vocabulary_jp_en: [
          {
            vid: 1,
            spelling: "test",
            reading: "", // Empty reading
            reviews: [], // No reviews
          },
        ],
        cards_vocabulary_en_jp: [],
        cards_kanji_keyword_char: [],
        cards_kanji_char_keyword: [],
      }

      const result = jpdbAdapter.transformCards(jpdbData)

      expect(result).toHaveLength(1)
      expect(result[0].searchTerm).toBe("test")
      expect(result[0].reviews).toEqual([])
    })

    it("extracts correct search terms", () => {
      const jpdbData: JpdbJsonData = {
        cards_vocabulary_jp_en: [
          { vid: 1, spelling: "vocab-term", reading: "reading", reviews: [] },
        ],
        cards_vocabulary_en_jp: [
          { vid: 2, spelling: "english-term", reading: "reading", reviews: [] },
        ],
        cards_kanji_keyword_char: [{ character: "漢", reviews: [] }],
        cards_kanji_char_keyword: [{ character: "字", reviews: [] }],
      }

      const result = jpdbAdapter.transformCards(jpdbData)

      expect(result).toHaveLength(4)
      expect(result[0].searchTerm).toBe("vocab-term")
      expect(result[1].searchTerm).toBe("english-term")
      expect(result[2].searchTerm).toBe("漢")
      expect(result[3].searchTerm).toBe("字")
    })

    it("filters invalid cards", () => {
      const jpdbData: JpdbJsonData = {
        cards_vocabulary_jp_en: [
          { vid: 1, spelling: "valid", reading: "reading", reviews: [] },
          { vid: 2, spelling: "", reading: "reading", reviews: [] }, // Empty spelling
          { vid: 3, spelling: "  ", reading: "reading", reviews: [] }, // Whitespace only
        ],
        cards_vocabulary_en_jp: [],
        cards_kanji_keyword_char: [
          { character: "有", reviews: [] },
          { character: "", reviews: [] }, // Empty character
        ],
        cards_kanji_char_keyword: [],
      }

      const result = jpdbAdapter.transformCards(jpdbData)

      // Should only include valid cards
      expect(result).toHaveLength(2)
      expect(result[0].searchTerm).toBe("valid")
      expect(result[1].searchTerm).toBe("有")
    })
  })

  describe("getSupportedCardTypes", () => {
    it("returns all jpdb card types", () => {
      const result = jpdbAdapter.getSupportedCardTypes()

      expect(result).toEqual([
        "vocabulary-jp-en",
        "vocabulary-en-jp",
        "kanji-keyword-char",
        "kanji-char-keyword",
      ])
    })
  })

  describe("jpdb card type processing", () => {
    it("processes vocabulary JP->EN cards correctly", () => {
      const jpdbData: JpdbJsonData = {
        cards_vocabulary_jp_en: [
          { vid: 1, spelling: "日本語", reading: "にほんご", reviews: [] },
        ],
        cards_vocabulary_en_jp: [],
        cards_kanji_keyword_char: [],
        cards_kanji_char_keyword: [],
      }

      const result = jpdbAdapter.transformCards(jpdbData)

      expect(result).toHaveLength(1)
      expect(result[0].source).toContain("vocabulary-jp-en")
      expect(result[0].searchTerm).toBe("日本語")
    })

    it("processes vocabulary EN->JP cards correctly", () => {
      const jpdbData: JpdbJsonData = {
        cards_vocabulary_jp_en: [],
        cards_vocabulary_en_jp: [
          { vid: 1, spelling: "language", reading: "げんご", reviews: [] },
        ],
        cards_kanji_keyword_char: [],
        cards_kanji_char_keyword: [],
      }

      const result = jpdbAdapter.transformCards(jpdbData)

      expect(result).toHaveLength(1)
      expect(result[0].source).toContain("vocabulary-en-jp")
      expect(result[0].searchTerm).toBe("language")
    })

    it("processes kanji keyword->char cards correctly", () => {
      const jpdbData: JpdbJsonData = {
        cards_vocabulary_jp_en: [],
        cards_vocabulary_en_jp: [],
        cards_kanji_keyword_char: [{ character: "学", reviews: [] }],
        cards_kanji_char_keyword: [],
      }

      const result = jpdbAdapter.transformCards(jpdbData)

      expect(result).toHaveLength(1)
      expect(result[0].source).toContain("kanji-keyword-char")
      expect(result[0].searchTerm).toBe("学")
    })

    it("processes kanji char->keyword cards correctly", () => {
      const jpdbData: JpdbJsonData = {
        cards_vocabulary_jp_en: [],
        cards_vocabulary_en_jp: [],
        cards_kanji_keyword_char: [],
        cards_kanji_char_keyword: [{ character: "習", reviews: [] }],
      }

      const result = jpdbAdapter.transformCards(jpdbData)

      expect(result).toHaveLength(1)
      expect(result[0].source).toContain("kanji-char-keyword")
      expect(result[0].searchTerm).toBe("習")
    })

    it("processes multiple card types together", () => {
      const jpdbData: JpdbJsonData = {
        cards_vocabulary_jp_en: [
          { vid: 1, spelling: "単語", reading: "たんご", reviews: [] },
        ],
        cards_vocabulary_en_jp: [
          { vid: 2, spelling: "word", reading: "たんご", reviews: [] },
        ],
        cards_kanji_keyword_char: [{ character: "単", reviews: [] }],
        cards_kanji_char_keyword: [{ character: "語", reviews: [] }],
      }

      const result = jpdbAdapter.transformCards(jpdbData)

      expect(result).toHaveLength(4)

      const sources = result.map((card) => card.source)

      expect(
        sources.some((source) => source.includes("vocabulary-jp-en")),
      ).toBe(true)
      expect(
        sources.some((source) => source.includes("vocabulary-en-jp")),
      ).toBe(true)
      expect(
        sources.some((source) => source.includes("kanji-keyword-char")),
      ).toBe(true)
      expect(
        sources.some((source) => source.includes("kanji-char-keyword")),
      ).toBe(true)
    })
  })
})
