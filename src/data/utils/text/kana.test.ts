import { describe, expect, it } from "vitest"
import { buildBracketFurigana, toHiraganaIfNeeded } from "./kana"

describe("kana utilities", () => {
  it("converts katakana reading to hiragana when word has no katakana", () => {
    expect(toHiraganaIfNeeded("食べる", "タベル")).toBe("たべる")
  })

  it("keeps katakana reading when word includes katakana", () => {
    expect(toHiraganaIfNeeded("コンピューター", "コンピューター")).toBe(
      "コンピューター",
    )
  })

  it("builds bracket furigana for mixed kanji and kana", () => {
    expect(buildBracketFurigana("食べる", "タベル")).toBe("食[た]べる")
    expect(buildBracketFurigana("見る", "ミル")).toBe("見[み]る")
  })

  it("builds single bracket span for all-kanji base forms", () => {
    expect(buildBracketFurigana("日本語", "ニホンゴ")).toBe("日本語[にほんご]")
  })

  it("returns normalized reading for kana-only words", () => {
    expect(buildBracketFurigana("たべる", "タベル")).toBe("たべる")
  })
})
