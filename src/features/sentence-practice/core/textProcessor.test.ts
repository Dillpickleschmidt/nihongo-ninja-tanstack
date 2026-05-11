import { describe, expect, it } from "vitest"
import {
  calculatePositionMap,
  convertToKana,
  normalizeText,
  normalizeWithPositions,
  removeFurigana,
  createRichSegment,
} from "./textProcessor"

describe("normalizeText", () => {
  it("removes separators and trailing punctuation", () => {
    expect(normalizeText(" 給料\x1Fをもらったら。 ")).toBe("給料をもらったら")
    expect(normalizeText("行きます？")).toBe("行きます")
  })

  it("removes Japanese commas and internal spaces", () => {
    expect(normalizeText("九時ごろ、 私はテレビを見ます")).toBe(
      "九時ごろ私はテレビを見ます",
    )
  })
})

describe("normalizeWithPositions", () => {
  it("maps normalized positions back to the original string", () => {
    const normalized = normalizeWithPositions(" 九時ごろ、 私はテレビを見ます。 ")

    expect(normalized.text).toBe("九時ごろ私はテレビを見ます")
    expect(normalized.toOriginal(0)).toBe(0)
    expect(normalized.toOriginal(4)).toBe(6)
    expect(normalized.toOriginal(5)).toBe(7)
    expect(normalized.toOriginal(normalized.text.length)).toBe(16)
  })

  it("drops separators from the normalized text", () => {
    const normalized = normalizeWithPositions("給料\x1Fを\x1Fもらったら")

    expect(normalized.text).toBe("給料をもらったら")
    expect(normalized.toOriginal(2)).toBe(3)
    expect(normalized.toOriginal(3)).toBe(5)
  })
})

describe("furigana conversion", () => {
  it("removes furigana brackets while preserving kanji", () => {
    expect(removeFurigana("仕事[しごと]で疲[つか]れたら")).toBe(
      "仕事で疲れたら",
    )
  })

  it("converts bracketed kanji to kana while preserving adjacent kana", () => {
    expect(convertToKana("行[い]きましょう")).toBe("いきましょう")
    expect(convertToKana("食[た]べ物[もの]")).toBe("たべもの")
    expect(convertToKana("時々[ときどき]")).toBe("ときどき")
  })

  it("leaves plain kana text unchanged", () => {
    expect(convertToKana("ください")).toBe("ください")
  })

  it("keeps original text while removing whitespace from rich plain and kana forms", () => {
    const segment = createRichSegment("お 父[とう]さん", false)

    expect(segment.original).toBe("お 父[とう]さん")
    expect(segment.plain).toBe("お父さん")
    expect(segment.kana).toBe("おとうさん")
  })
})

describe("calculatePositionMap", () => {
  it("maps plain-text positions through furigana spans", () => {
    const map = calculatePositionMap("給料[きゅうりょう]をもらったら")

    expect(map.get(0)).toBe(0)
    expect(map.get(1)).toBe(1)
    expect(map.get(2)).toBe(10)
    expect(map.get(3)).toBe(11)
    expect(map.get(7)).toBe(15)
    expect(map.get(8)).toBe(16)
  })

  it("uses the string length for the terminal boundary", () => {
    const text = "行[い]きます"
    const map = calculatePositionMap(text)

    expect(map.get(4)).toBe(text.length)
  })
})
