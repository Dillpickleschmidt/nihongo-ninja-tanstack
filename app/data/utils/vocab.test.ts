// app/data/utils/vocab.test.ts
import { describe, it, expect } from "vitest"
import type { VocabularyItem, ExampleSentence } from "@/data/types"
import {
  vocabularyToKana,
  addKanaAndRuby,
  extractHiragana,
  convertFuriganaToRubyHtml,
  getExampleSentence,
} from "./vocab"

describe("Vocabulary Utils", () => {
  describe("extractHiragana", () => {
    it("should extract hiragana from a simple furigana string", () => {
      const input = "食[た]べる"
      const expected = "たべる" // This will now pass with the corrected function.
      expect(extractHiragana(input)).toBe(expected)
    })

    it("should extract hiragana and strip spaces from a complex string", () => {
      const input = "何[なん]で 食[た]べ 物[もの]がない？"
      const expected = "なんでたべものがない？" // This will now pass.
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

    it("should correctly apply a custom font size", () => {
      const input = "日本[にほん]"
      const expected = `<ruby>日本<rp>(</rp><rt><span style="font-size: 1rem; user-select: none;">にほん</span></rt><rp>)</rp></ruby>`
      expect(convertFuriganaToRubyHtml(input, "1rem")).toBe(expected)
    })

    it("should correctly handle an array of furigana strings", () => {
      const input = ["日本[にほん]", "語[ご]"]
      const expected = [
        `<ruby>日本<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">にほん</span></rt><rp>)</rp></ruby>`,
        `<ruby>語<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">ご</span></rt><rp>)</rp></ruby>`,
      ]
      expect(convertFuriganaToRubyHtml(input)).toEqual(expected)
    })
  })

  describe("getExampleSentence", () => {
    it("should process and strip spaces from an example sentence", () => {
      const sentence: ExampleSentence = {
        english: ["Shall I help you?"],
        japanese: ["これ を ", { t: "手伝[てつだ]って" }, " ください"],
      }
      const result = getExampleSentence(sentence)
      expect(result.targets).toEqual(["手伝[てつだ]って"])

      // UPDATED: Expect the correct HTML with the space preserved in the style attribute,
      // as the function now correctly avoids stripping it.
      const expectedHtml = `これを<ruby>手伝<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">てつだ</span></rt><rp>)</rp></ruby>ってください`
      expect(result.sentence).toBe(expectedHtml)
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
      // This will now pass because extractHiragana is fixed.
      expect(result.hiragana).toEqual(["たべる"])
      // This will now pass because the font-size default is handled.
      expect(result.rubyText).toEqual([
        `<ruby>食<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">た</span></rt><rp>)</rp></ruby>べる`,
      ])
    })
  })
})
