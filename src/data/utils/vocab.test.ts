// src/data/utils/vocab.test.ts
import { describe, it, expect } from "vitest"
import type { VocabularyItem, ExampleSentence } from "@/data/types"
import {
  vocabularyToKana,
  addKanaAndRuby,
  extractHiragana,
  convertFuriganaToRubyHtml,
  getExampleSentenceParts,
  parseFuriganaString,
} from "./vocab"

describe("Vocabulary Utils", () => {
  describe("parseFuriganaString", () => {
    it("should parse a simple furigana string into base and kana", () => {
      const result = parseFuriganaString("人[ひと]")
      expect(result.base).toBe("人")
      expect(result.kana).toBe("ひと")
    })

    it("should parse complex furigana with multiple kanji and spaces", () => {
      const result = parseFuriganaString("食[た]べ 物[もの]")
      expect(result.base).toBe("食べ物")
      expect(result.kana).toBe("たべもの")
    })

    it("should handle plain kana strings (no furigana brackets)", () => {
      const result = parseFuriganaString("ここ")
      expect(result.base).toBe("ここ")
      expect(result.kana).toBe("ここ")
    })

    it("should strip spaces from both base and kana forms", () => {
      const result = parseFuriganaString("何[なん]で 食[た]べ 物[もの]がない？")
      expect(result.base).toBe("何で食べ物がない？")
      expect(result.kana).toBe("なんでたべものがない？")
    })

    it("should handle mixed content with both furigana and plain text", () => {
      const result = parseFuriganaString("読[よ]みます")
      expect(result.base).toBe("読みます")
      expect(result.kana).toBe("よみます")
    })
  })

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
    it("should correctly convert a simple furigana string and strip spaces", () => {
      const input = "食[た]べる " // Added trailing space
      const expected = `<ruby>食<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">た</span></rt><rp>)</rp></ruby>べる`
      expect(convertFuriganaToRubyHtml(input)).toBe(expected)
    })

    it("should convert a complex string and strip spaces outside ruby tags", () => {
      const input = "何[なん]で 食[た]べ 物[もの]がない？"
      // Spaces not in ruby tags are stripped
      const expected = `<ruby>何<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">なん</span></rt><rp>)</rp></ruby>で<ruby>食<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">た</span></rt><rp>)</rp></ruby>べ<ruby>物<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">もの</span></rt><rp>)</rp></ruby>がない？`
      expect(convertFuriganaToRubyHtml(input)).toBe(expected)
    })
  })

  // --- Test suite for getExampleSentenceParts ---
  describe("getExampleSentenceParts", () => {
    const sentence: ExampleSentence = {
      english: ["Shall I ", { t: "help" }, " you?"],
      japanese: ["これ を ", { t: "手伝[てつだ]って" }, " ください"],
    }

    it('should process a Japanese sentence in "spellings" mode, stripping spaces and returning validation targets', () => {
      const result = getExampleSentenceParts(sentence, "spellings")
      const expectedDisplayParts = [
        { type: "html", content: "これを" },
        { type: "input", index: 0 },
        { type: "html", content: "ください" },
      ]
      const expectedValidationTargets = [["手伝って", "てつだって"]]
      expect(result.displayParts).toEqual(expectedDisplayParts)
      expect(result.inputValidationTargets).toEqual(expectedValidationTargets)
    })

    it('should process an English sentence in "meanings" mode, preserving spaces and returning validation targets', () => {
      const result = getExampleSentenceParts(sentence, "meanings")
      const expectedDisplayParts = [
        // EXPECTED: Spaces preserved for English text, as convertFuriganaToRubyHtml is not applied
        { type: "html", content: "Shall I " },
        { type: "input", index: 0 },
        { type: "html", content: " you?" },
      ]
      const expectedValidationTargets = [["手伝って", "てつだって"]]
      expect(result.displayParts).toEqual(expectedDisplayParts)
      expect(result.inputValidationTargets).toEqual(expectedValidationTargets)
    })

    it("should correctly process furigana within the sentence parts for multiple blanks and return validation targets", () => {
      const furiganaSentence: ExampleSentence = {
        english: [
          "Why is there no ",
          { t: "food" },
          " or ",
          { t: "water" },
          "?",
        ],
        japanese: [
          "何[なん]で ",
          { t: "食[た]べ 物[もの]" },
          "がない？",
          { t: "水[みず]" },
          "を？",
        ],
      }

      const result = getExampleSentenceParts(furiganaSentence, "spellings")
      const expectedDisplayParts = [
        {
          type: "html",
          content: `<ruby>何<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">なん</span></rt><rp>)</rp></ruby>で`,
        },
        { type: "input", index: 0 },
        { type: "html", content: "がない？" },
        { type: "input", index: 1 },
        { type: "html", content: "を？" },
      ]
      const expectedValidationTargets = [
        ["食べ物", "たべもの"],
        ["水", "みず"],
      ]
      expect(result.displayParts).toEqual(expectedDisplayParts)
      expect(result.inputValidationTargets).toEqual(expectedValidationTargets)
    })

    it("should handle cases where base and kana are the same for validation targets, stripping spaces for display", () => {
      const simpleKanaSentence: ExampleSentence = {
        english: ["I am ", { t: "here" }, " now."],
        japanese: ["今、", { t: "ここ" }, "にいる。"],
      }

      const result = getExampleSentenceParts(simpleKanaSentence, "spellings")
      const expectedDisplayParts = [
        { type: "html", content: "今、" },
        { type: "input", index: 0 },
        { type: "html", content: "にいる。" },
      ]
      const expectedValidationTargets = [["ここ"]]

      expect(result.displayParts).toEqual(expectedDisplayParts)
      expect(result.inputValidationTargets).toEqual(expectedValidationTargets)
    })

    it("should return empty targets if no target words are found, stripping spaces for kana display", () => {
      const noTargetSentence: ExampleSentence = {
        english: ["Hello, how are you?"],
        japanese: ["こんにちは、お元気ですか？"],
      }

      const result = getExampleSentenceParts(noTargetSentence, "spellings")
      const expectedDisplayParts = [
        { type: "html", content: "こんにちは、お元気ですか？" },
      ]
      const expectedValidationTargets: string[][] = []

      expect(result.displayParts).toEqual(expectedDisplayParts)
      expect(result.inputValidationTargets).toEqual(expectedValidationTargets)
    })

    it("should handle mixed content including plain kana and furigana, stripping spaces", () => {
      const mixedSentence: ExampleSentence = {
        english: [
          "That ",
          { t: "person" },
          " is ",
          { t: "reading" },
          " a book.",
        ],
        japanese: [
          "あの ",
          { t: "人[ひと]" },
          "は ",
          { t: "読[よ]みます" },
          " 本を。",
        ],
      }
      const result = getExampleSentenceParts(mixedSentence, "spellings")
      const expectedDisplayParts = [
        { type: "html", content: "あの" },
        { type: "input", index: 0 },
        { type: "html", content: "は" },
        { type: "input", index: 1 },
        { type: "html", content: "本を。" },
      ]
      const expectedValidationTargets = [
        ["人", "ひと"],
        ["読みます", "よみます"],
      ]
      expect(result.displayParts).toEqual(expectedDisplayParts)
      expect(result.inputValidationTargets).toEqual(expectedValidationTargets)
    })
  })

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
        `<ruby>食<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">た</span></rt><rp>)</rp></ruby>べる`,
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
        `<ruby>水<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none;">みず</span></rt><rp>)</rp></ruby>`, // convertFuriganaToRubyHtml strips spaces
      ])
    })
  })
})
