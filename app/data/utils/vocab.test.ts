// app/data/utils/vocab.test.ts
import { describe, it, expect } from "vitest"
import type { VocabularyItem, ExampleSentence } from "@/data/types"
import {
  vocabularyToKana,
  addKanaAndRuby,
  extractHiragana,
  convertFuriganaToRubyHtml,
  getExampleSentenceParts,
} from "./vocab"

describe("Vocabulary Utils", () => {
  describe("extractHiragana", () => {
    it("should extract hiragana from a simple furigana string", () => {
      const input = "食[た]べる"
      const expected = "たべる"
      expect(extractHiragana(input)).toBe(expected)
    })

    it("should extract hiragana and strip spaces from a complex string", () => {
      const input = "何[なん]で 食[た]べ 物[もの]がない？"
      const expected = "なんでたべものがない？"
      expect(extractHiragana(input)).toBe(expected)
    })
  })

  describe("convertFuriganaToRubyHtml", () => {
    it("should correctly convert a simple furigana string", () => {
      const input = "食[た]べる"
      const expected = `<ruby>食<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">た</span></rt><rp>)</rp></ruby>べる`
      expect(convertFuriganaToRubyHtml(input)).toBe(expected)
    })

    it("should convert a complex string while preserving spaces", () => {
      const input = "何[なん]で 食[た]べ 物[もの]がない？"
      const expected = `<ruby>何<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">なん</span></rt><rp>)</rp></ruby>で <ruby>食<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">た</span></rt><rp>)</rp></ruby>べ <ruby>物<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">もの</span></rt><rp>)</rp></ruby>がない？`
      expect(convertFuriganaToRubyHtml(input)).toBe(expected)
    })
  })

  // --- Test suite for getExampleSentenceParts ---
  describe("getExampleSentenceParts", () => {
    const sentence: ExampleSentence = {
      english: ["Shall I ", { t: "help" }, " you?"],
      japanese: ["これ を ", { t: "手伝[てつだ]って" }, " ください"],
    }

    it('should process a Japanese sentence and STRIP spaces when mode is "kana"', () => {
      const result = getExampleSentenceParts(sentence, "kana")
      const expected = [
        { type: "html", content: "これを" }, // Space stripped
        { type: "input" },
        { type: "html", content: "ください" }, // Space stripped
      ]
      expect(result).toEqual(expected)
    })

    it('should process a Japanese sentence and PRESERVE spaces when mode is "readings"', () => {
      const result = getExampleSentenceParts(sentence, "readings")
      const expected = [
        { type: "html", content: "Shall I " }, // Space preserved
        { type: "input" },
        { type: "html", content: " you?" }, // Space preserved
      ]
      expect(result).toEqual(expected)
    })

    it("should correctly process furigana within the sentence parts", () => {
      const furiganaSentence: ExampleSentence = {
        english: ["Why is there no ", { t: "food" }, "?"],
        japanese: ["何[なん]で ", { t: "食[た]べ物[もの]" }, "がない？"],
      }

      const result = getExampleSentenceParts(furiganaSentence, "kana")
      const expected = [
        {
          type: "html",
          content: `<ruby>何<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">なん</span></rt><rp>)</rp></ruby>で`,
        },
        { type: "input" },
        { type: "html", content: "がない？" },
      ]
      expect(result).toEqual(expected)
    })
  })

  describe("vocabularyToKana", () => {
    it("should transform a VocabularyItem array to a KanaItem array", () => {
      const vocab: VocabularyItem[] = [
        {
          word: "こんにちは",
          furigana: "こんにちは",
          english: ["hello"],
          chapter: 1,
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
        chapter: 1,
      }
      const result = addKanaAndRuby([vocabItem])[0]
      expect(result.hiragana).toEqual(["たべる"])
      expect(result.rubyText).toEqual([
        `<ruby>食<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">た</span></rt><rp>)</rp></ruby>べる`,
      ])
    })
  })
})
