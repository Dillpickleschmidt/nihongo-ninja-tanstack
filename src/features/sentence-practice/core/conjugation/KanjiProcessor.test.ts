import { describe, expect, it } from "vitest"
import { KanjiProcessor } from "./KanjiProcessor"

describe("KanjiProcessor", () => {
  const processor = new KanjiProcessor()

  it("restores kanji readings into conjugated hiragana", () => {
    const restored = processor.restoreKanji(
      {
        word: "食[た]べる",
        pos: "Ichidan verb",
        form: "te-form",
        polarity: "positive",
        tense: "non-past",
      },
      "たべて",
    )

    expect(restored).toBe("食[た]べて")
  })

  it("leaves words without furigana unchanged", () => {
    const restored = processor.restoreKanji(
      {
        word: "ください",
        pos: "Ichidan verb",
        form: "normal",
        polarity: "positive",
        tense: "non-past",
      },
      "ください",
    )

    expect(restored).toBe("ください")
  })

  it("handles kuru verb stems specially", () => {
    const restored = processor.restoreKanji(
      {
        word: "来[く]る",
        pos: "Kuru verb - special class",
        form: "te-form",
        polarity: "positive",
        tense: "non-past",
      },
      "きて",
    )

    expect(restored).toBe("来[き]て")
  })
})
