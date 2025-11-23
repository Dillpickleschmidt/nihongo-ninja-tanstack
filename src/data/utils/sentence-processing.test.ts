// Tests for sentence processing utilities
import { describe, it, expect } from "vitest"
import type { ExampleSentence } from "@/data/types"
import { getExampleSentenceParts } from "./sentence-processing"

describe("Sentence Processing", () => {
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
          content: `<ruby>何<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none; position: relative; z-index: 1;">なん</span></rt><rp>)</rp></ruby>で`,
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
})
