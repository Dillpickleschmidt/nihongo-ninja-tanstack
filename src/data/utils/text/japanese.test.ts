import { describe, expect, it } from "vitest"
import {
  containsJapanese,
  containsKanji,
  extractKanjiCharacters,
} from "./japanese"

describe("Japanese text utilities", () => {
  it("treats 々 as kanji-like for detection", () => {
    expect(containsKanji("時々")).toBe(true)
    expect(extractKanjiCharacters("時々")).toEqual(["時", "々"])
  })

  it("detects Japanese text across kana and kanji", () => {
    expect(containsJapanese("ひらがな")).toBe(true)
    expect(containsJapanese("カタカナ")).toBe(true)
    expect(containsJapanese("漢字")).toBe(true)
    expect(containsJapanese("abc123")).toBe(false)
  })
})
