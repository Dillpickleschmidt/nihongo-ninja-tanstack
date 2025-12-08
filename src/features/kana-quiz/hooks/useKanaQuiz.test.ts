import { describe, it, expect } from "vitest"
import type { VocabularyItem } from "convex/validators"
import { vocabularyToKana } from "./useKanaQuiz"

describe("vocabularyToKana", () => {
  it("should transform a VocabularyItem array to a KanaItem array", () => {
    const vocab: VocabularyItem[] = [
      {
        key: "こんにちは",
        word: "こんにちは",
        furigana: "こんにちは",
        english: ["hello"],
      },
    ]
    const expected = [{ hiragana: "こんにちは", romaji: ["hello"] }]
    expect(vocabularyToKana(vocab)).toEqual(expected)
  })
})
