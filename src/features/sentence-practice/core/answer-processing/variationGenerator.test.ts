// core/answer-processing/variationGenerator.test.ts
import { describe, it, expect } from "vitest"
import {
  generateAcceptedAnswers,
  generateCanonicalAnswers,
} from "./variationGenerator"
import type { RichSegment } from "../types"
import { createRichSegment } from "../textProcessor"

// Helper to strip segment separators for test assertions
const stripSeparators = (s: string) => s.replace(/\x1F/g, "")

describe("generateCanonicalAnswers", () => {
  it("combines segments into answer strings", () => {
    const segments: RichSegment[] = [
      createRichSegment("給料[きゅうりょう]を", false),
      createRichSegment("もらったら", true),
      createRichSegment("行[い]きましょう", false),
    ]
    const result = generateCanonicalAnswers(segments, 0, true)

    // Strip separators for comparison (separators are internal implementation detail)
    expect(
      result.some(
        (a) =>
          stripSeparators(a.original) ===
          "給料[きゅうりょう]をもらったら行[い]きましょう",
      ),
    ).toBe(true)
  })

  it("generates kana input aliases for accepted answers", () => {
    const segments: RichSegment[] = [
      createRichSegment("給料[きゅうりょう]を", false),
      createRichSegment("もらったら", true),
    ]
    const result = generateAcceptedAnswers(
      generateCanonicalAnswers(segments, 0, true),
    )

    // Check that kana field has the kana version
    expect(
      result.some(
        (a) => stripSeparators(a.kana) === "きゅうりょうをもらったら",
      ),
    ).toBe(true)
    // Check that input alias metadata is set
    expect(result.some((a) => a.isInputAlias === true)).toBe(true)
  })

  it("generates pronoun variations when applicable", () => {
    const segments: RichSegment[] = [
      createRichSegment("私[わたし]は", false),
      createRichSegment("学生[がくせい]です", false),
    ]
    const result = generateCanonicalAnswers(segments, 0, true)

    expect(result.some((a) => a.original.includes("僕"))).toBe(true)
    // Check that pronounType metadata is set
    expect(result.some((a) => a.pronounType === "僕[ぼく]")).toBe(true)
  })

  it("sets metadata correctly", () => {
    const segments: RichSegment[] = [createRichSegment("こんにちは", false)]
    const result = generateCanonicalAnswers(segments, 1, false)

    // Check that metadata is set correctly
    expect(result[0].sourceAnswerIndex).toBe(1)
    expect(result[0].originalPoliteForm).toBe(false)
    expect(result[0].pronounType).toBe("none")
    expect(result[0].honorificType).toBe("none")
    expect(result[0].isInputAlias).toBeUndefined()
  })

  it("handles empty segments array", () => {
    const segments: RichSegment[] = []
    const result = generateCanonicalAnswers(segments, 0, true)

    expect(result).toEqual([
      {
        original: "",
        plain: "",
        kana: "",
        sourceAnswerIndex: 0,
        originalPoliteForm: true,
        pronounType: "none",
        honorificType: "none",
      },
    ])
  })
})

describe("honorific variations", () => {
  it("generates variations for さん honorific", () => {
    const segments: RichSegment[] = [
      createRichSegment("田中[たなか]さんは先生[せんせい]です", false),
    ]
    const result = generateCanonicalAnswers(segments, 0, true)

    // Should have variations with くん, ちゃん, 先生
    expect(result.some((a) => a.original.includes("田中[たなか]くん"))).toBe(
      true,
    )
    expect(result.some((a) => a.original.includes("田中[たなか]ちゃん"))).toBe(
      true,
    )
    expect(
      result.some((a) => a.original.includes("田中[たなか]先生[せんせい]")),
    ).toBe(true)

    // Check metadata
    expect(result.some((a) => a.honorificType === "くん")).toBe(true)
  })

  it("generates independent variations for multiple honorifics", () => {
    const segments: RichSegment[] = [
      createRichSegment("田中[たなか]さんと山田[やまだ]さん", false),
    ]
    const result = generateCanonicalAnswers(segments, 0, true)

    // Should have variations where ONLY first さん is replaced
    expect(
      result.some(
        (a) =>
          stripSeparators(a.original) === "田中[たなか]くんと山田[やまだ]さん",
      ),
    ).toBe(true)
    // Should have variations where ONLY second さん is replaced
    expect(
      result.some(
        (a) =>
          stripSeparators(a.original) === "田中[たなか]さんと山田[やまだ]くん",
      ),
    ).toBe(true)
    // Note: Variations where BOTH are replaced would require chaining,
    // which happens naturally through multiple generation passes
  })

  it("preserves text with no honorifics", () => {
    const segments: RichSegment[] = [
      createRichSegment("今日[きょう]は暑[あつ]いです", false),
    ]
    const result = generateCanonicalAnswers(segments, 0, true)

    // Should only have the original canonical answer (no honorific variations)
    expect(result).toHaveLength(1)
    expect(stripSeparators(result[0].original)).toBe(
      "今日[きょう]は暑[あつ]いです",
    )
  })

  it("does not replace honorific-looking text inside furigana readings", () => {
    const segments: RichSegment[] = [
      createRichSegment("三階[さんがい]にございます", false),
      createRichSegment("参加[さんか]いたします", false),
    ]
    const result = generateCanonicalAnswers(segments, 0, true)

    expect(result).toHaveLength(1)
    expect(stripSeparators(result[0].original)).toBe(
      "三階[さんがい]にございます参加[さんか]いたします",
    )
    expect(result[0].honorificType).toBe("none")
  })

  it("does not replace honorific-looking text in protected lexical words", () => {
    const segments: RichSegment[] = [
      createRichSegment("赤[あか]ちゃんが泣[な]いています", false),
    ]
    const result = generateCanonicalAnswers(segments, 0, true)

    expect(
      result.some((a) => stripSeparators(a.original).includes("赤[あか]ちゃん")),
    ).toBe(true)
    expect(
      result.every(
        (a) =>
          !stripSeparators(a.original).includes("赤[あか]さん") &&
          !stripSeparators(a.original).includes("赤[あか]くん"),
      ),
    ).toBe(true)
  })
})

describe("position-based replacement", () => {
  it("handles multiple pronouns independently", () => {
    const segments: RichSegment[] = [
      createRichSegment(
        "私[わたし]は学生[がくせい]で僕[ぼく]は先生[せんせい]です",
        false,
      ),
    ]
    const result = generateCanonicalAnswers(segments, 0, true)

    // Should have variation where ONLY first pronoun is replaced
    expect(
      result.some((a) =>
        a.original.includes("僕[ぼく]は学生[がくせい]で僕[ぼく]は"),
      ),
    ).toBe(true)
    // Should have variation where ONLY second pronoun is replaced
    expect(
      result.some((a) =>
        a.original.includes("私[わたし]は学生[がくせい]で俺[おれ]は"),
      ),
    ).toBe(true)
  })

  it("drops pronoun only at beginning of sentence", () => {
    const segments: RichSegment[] = [
      createRichSegment("私[わたし]は学生[がくせい]です", false),
    ]
    const result = generateCanonicalAnswers(segments, 0, true)

    // Should have dropped pronoun variation
    expect(
      result.some((a) => stripSeparators(a.original) === "学生[がくせい]です"),
    ).toBe(true)
    // Check metadata
    expect(result.some((a) => a.pronounType === "dropped")).toBe(true)
  })

  it("does not drop pronoun in middle of sentence", () => {
    const segments: RichSegment[] = [
      createRichSegment("学生[がくせい]の私[わたし]は", false),
    ]
    const result = generateCanonicalAnswers(segments, 0, true)

    // Should NOT have variation with dropped pronoun (not at beginning)
    // Check for all possible pronouns that could be generated
    expect(
      result.every(
        (a) =>
          a.original.includes("私[わたし]") ||
          a.original.includes("私[わたくし]") ||
          a.original.includes("僕[ぼく]") ||
          a.original.includes("俺[おれ]") ||
          a.original.includes("あたし"),
      ),
    ).toBe(true)
  })
})

describe("plural pronouns", () => {
  it("generates variations for plural first-person pronouns", () => {
    const segments: RichSegment[] = [
      createRichSegment("私[わたし]たちは学生[がくせい]です", false),
    ]
    const result = generateCanonicalAnswers(segments, 0, true)

    // Should include 僕たち, 俺たち variations
    expect(result.some((a) => a.original.includes("僕[ぼく]たち"))).toBe(true)
    expect(result.some((a) => a.original.includes("俺[おれ]たち"))).toBe(true)

    // Check that pronounType metadata is set for canonical variations
    // Note: When "私[わたし]" in "私たち" is replaced with "僕[ぼく]",
    // pronounType is set to the base pronoun "僕[ぼく]", not the full plural "僕[ぼく]たち"
    expect(
      result.some(
        (a) => a.pronounType === "僕[ぼく]" || a.pronounType === "俺[おれ]",
      ),
    ).toBe(true)
  })
})

describe("kinship variations", () => {
  it("generates bare family-name forms alongside お-prefixed forms", () => {
    const segments: RichSegment[] = [
      createRichSegment("お 父[とう]さんはシャワーを浴[あ]びている", false),
    ]
    const result = generateAcceptedAnswers(
      generateCanonicalAnswers(segments, 0, true),
    )
    const originals = result.map((answer) => stripSeparators(answer.original))

    expect(originals).toContain("父[とう]さんはシャワーを浴[あ]びている")
  })
})

describe("kana input alias preservation", () => {
  it("keeps the canonical answer alongside the kana input alias", () => {
    const segments: RichSegment[] = [
      createRichSegment("給料[きゅうりょう]をもらったら", false),
    ]
    const result = generateAcceptedAnswers(
      generateCanonicalAnswers(segments, 0, true),
    )

    // Should have both canonical answer (with furigana) and kana alias
    const original = result.find((a) => !a.isInputAlias)
    const kanaVar = result.find((a) => a.isInputAlias)

    expect(original).toBeDefined()
    expect(stripSeparators(original!.original)).toBe(
      "給料[きゅうりょう]をもらったら",
    )

    expect(kanaVar).toBeDefined()
    expect(stripSeparators(kanaVar!.original)).toBe("きゅうりょうをもらったら")
    expect(kanaVar!.isInputAlias).toBe(true)
  })

  it("does not duplicate when text has no furigana", () => {
    const segments: RichSegment[] = [createRichSegment("ください", false)]
    const result = generateAcceptedAnswers(
      generateCanonicalAnswers(segments, 0, true),
    )

    // Should only have 1 accepted answer (no kana alias since no kanji)
    expect(result).toHaveLength(1)
    expect(result[0].isInputAlias).toBeUndefined()
  })
})
