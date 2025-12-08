// Tests for vocabulary transformations
import { describe, it, expect } from "vitest"
import type { VocabularyItem } from "convex/validators"
import { addKanaAndRuby } from "./transforms"

describe("Vocabulary Transforms", () => {
  describe("addKanaAndRuby", () => {
    it("should add correct hiragana and rubyText to a vocabulary item", () => {
      const vocabItem: VocabularyItem = {
        key: "食べる",
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
        key: "水",
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
