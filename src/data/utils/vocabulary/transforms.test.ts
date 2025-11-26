// Tests for vocabulary transformations
import { describe, it, expect, vi } from "vitest"
import type { VocabularyItem } from "@/data/types"

// Mock the vocabulary resolver to prevent server function imports
vi.mock("@/features/resolvers/vocabulary", () => ({
  getVocabulary: vi.fn(),
}))

import { vocabularyToKana, addKanaAndRuby } from "./transforms"

describe("Vocabulary Transforms", () => {
  describe("vocabularyToKana", () => {
    it("should transform a VocabularyItem array to a KanaItem array", () => {
      const vocab: VocabularyItem[] = [
        {
          word: "こんにちは",
          furigana: "こんにちは",
          english: ["hello"],
        },
      ]
      const expected = [{ hiragana: "こんにちは", romaji: ["hello"] }]
      expect(vocabularyToKana(vocab)).toEqual(expected)
    })
  })

  describe("addKanaAndRuby", () => {
    it("should add correct hiragana and rubyText to a vocabulary item", () => {
      const vocabItem: VocabularyItem = {
        word: "食べる",
        furigana: "食[た]べる",
        english: ["to eat"],
      }
      const result = addKanaAndRuby([vocabItem])[0]
      expect(result.hiragana).toEqual(["たべる"])
      // EXPECTED: rubyText content also reflects space stripping in convertFuriganaToRubyHtml
      expect(result.rubyText).toEqual([
        `<ruby>食<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none; position: relative; z-index: 1;">た</span></rt><rp>)</rp></ruby>べる`,
      ])
    })

    it("should add correct hiragana and rubyText, stripping spaces from word/furigana", () => {
      const vocabItem: VocabularyItem = {
        word: "水",
        furigana: "水[みず] ",
        english: ["water"],
      }
      const result = addKanaAndRuby([vocabItem])[0]
      expect(result.hiragana).toEqual(["みず"])
      expect(result.rubyText).toEqual([
        `<ruby>水<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none; position: relative; z-index: 1;">みず</span></rt><rp>)</rp></ruby>`, // convertFuriganaToRubyHtml strips spaces
      ])
    })
  })
})
