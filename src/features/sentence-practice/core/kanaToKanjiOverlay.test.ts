import { describe, expect, it } from "vitest"
import { overlayKanji } from "./kanaToKanjiOverlay"
import { createRichSegment } from "./textProcessor"

describe("overlayKanji", () => {
  it("returns null when user input already contains kanji", () => {
    const result = overlayKanji("九時ごろに見ます", [
      [
        createRichSegment("九時[くじ]ごろに", false),
        createRichSegment("見[み]ます", false),
      ],
    ])

    expect(result).toBeNull()
  })

  it("overlays kana input onto the best matching segment array", () => {
    const result = overlayKanji("くじごろにみます", [
      [
        createRichSegment("七時[しちじ]ごろに", false),
        createRichSegment("見[み]ます", false),
      ],
      [
        createRichSegment("九時[くじ]ごろに", false),
        createRichSegment("見[み]ます", false),
      ],
    ])

    expect(result?.overlaidText).toBe("九時ごろに見ます")
    expect(result?.characterMap.get(0)).toBe(0)
    expect(result?.characterMap.get(1)).toBe(1)
    expect(result?.characterMap.get(2)).toBe(2)
    expect(result?.characterMap.get(3)).toBe(3)
    expect(result?.characterMap.get(6)).toBe(6)
    expect(result?.characterMap.get(7)).toBe(7)
  })

  it("preserves unmatched kana while still overlaying exact segment matches", () => {
    const result = overlayKanji("くじごろにたいていみます", [
      [
        createRichSegment("九時[くじ]ごろに", false),
        createRichSegment("テレビを", false),
        createRichSegment("見[み]ます", false),
      ],
    ])

    expect(result?.overlaidText).toBe("九時ごろにたいてい見ます")
    expect(result?.characterMap.get(7)).toBe(7)
    expect(result?.characterMap.get(11)).toBe(11)
    expect(result?.characterMap.get(12)).toBe(12)
  })

  it("returns null when there are no candidate answers", () => {
    expect(overlayKanji("くじごろ", [])).toBeNull()
  })
})
