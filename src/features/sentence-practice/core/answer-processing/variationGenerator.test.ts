// core/answer-processing/variationGenerator.test.ts
import { describe, it, expect } from "vitest"
import {
  generateValidAnswers,
  generatePronounVariations,
  generateHonorificVariations,
  generateKanaVariations,
} from "./variationGenerator"
import type { RichSegment } from "../types"
import { createRichSegment } from "../textProcessor"

// Helper to strip segment separators for test assertions
const stripSeparators = (s: string) => s.replace(/\x1F/g, "")

describe("generateKanaVariations", () => {
  it("generates kana-only version of text with furigana", () => {
    const answers = ["給料[きゅうりょう]をもらったら行[い]きましょう"]
    const result = generateKanaVariations(answers)

    expect(result).toContain("きゅうりょうをもらったらいきましょう")
  })

  it("keeps original answer in output", () => {
    const answers = ["給料[きゅうりょう]をもらったら"]
    const result = generateKanaVariations(answers)

    expect(result).toContain("給料[きゅうりょう]をもらったら")
  })

  it("does not duplicate if text has no furigana", () => {
    const answers = ["ください"]
    const result = generateKanaVariations(answers)

    expect(result).toHaveLength(1)
    expect(result).toContain("ください")
  })
})

describe("generatePronounVariations", () => {
  it("generates variations for first-person pronouns", () => {
    const answers = ["私[わたし]は学生[がくせい]です"]
    const result = generatePronounVariations(answers)

    // Should include variations like 僕, 俺, and dropped pronoun
    expect(result.some((a) => a.includes("僕"))).toBe(true)
    expect(result.some((a) => a.includes("俺"))).toBe(true)
  })

  it("handles plural first-person pronouns", () => {
    const answers = ["私[わたし]たちは学生[がくせい]です"]
    const result = generatePronounVariations(answers)

    // Check for "僕[ぼく]たち" pattern (with furigana)
    expect(result.some((a) => a.includes("僕[ぼく]たち"))).toBe(true)
  })

  it("keeps original if no pronouns found", () => {
    const answers = ["天気[てんき]がいいです"]
    const result = generatePronounVariations(answers)

    expect(result).toContain("天気[てんき]がいいです")
  })
})

describe("generateHonorificVariations", () => {
  it("generates variations for さん honorific", () => {
    const answers = ["田中[たなか]さんは先生[せんせい]です"]
    const result = generateHonorificVariations(answers)

    expect(result.some((a) => a.includes("田中[たなか]くん"))).toBe(true)
    expect(result.some((a) => a.includes("田中[たなか]ちゃん"))).toBe(true)
  })

  it("keeps original if no honorifics found", () => {
    const answers = ["今日[きょう]は暑[あつ]いです"]
    const result = generateHonorificVariations(answers)

    expect(result).toHaveLength(1)
    expect(result).toContain("今日[きょう]は暑[あつ]いです")
  })
})

describe("generateValidAnswers", () => {
  it("combines segments into answer strings", () => {
    const segments: RichSegment[] = [
      createRichSegment("給料[きゅうりょう]を", false),
      createRichSegment("もらったら", true),
      createRichSegment("行[い]きましょう", false),
    ]
    const result = generateValidAnswers(segments)

    // Strip separators for comparison (separators are internal implementation detail)
    expect(
      result.some(
        (a) =>
          stripSeparators(a.original) ===
          "給料[きゅうりょう]をもらったら行[い]きましょう",
      ),
    ).toBe(true)
  })

  it("generates kana variations", () => {
    const segments: RichSegment[] = [
      createRichSegment("給料[きゅうりょう]を", false),
      createRichSegment("もらったら", true),
    ]
    const result = generateValidAnswers(segments)

    // Check that kana field has the kana version
    expect(
      result.some((a) => stripSeparators(a.kana) === "きゅうりょうをもらったら"),
    ).toBe(true)
  })

  it("generates pronoun variations when applicable", () => {
    const segments: RichSegment[] = [
      createRichSegment("私[わたし]は", false),
      createRichSegment("学生[がくせい]です", false),
    ]
    const result = generateValidAnswers(segments)

    expect(result.some((a) => a.original.includes("僕"))).toBe(true)
  })

  it("handles empty segments array", () => {
    const segments: RichSegment[] = []
    const result = generateValidAnswers(segments)

    expect(result).toEqual([{ original: "", plain: "", kana: "" }])
  })
})
