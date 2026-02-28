import { describe, expect, it } from "vitest"
import { shouldSkipToken } from "./token-filter"

describe("learning-path token filter", () => {
  it("skips UNKNOWN class tokens", () => {
    expect(
      shouldSkipToken({
        tokenClass: "UNKNOWN",
        pos: ["名詞", "一般"],
        normalizedWord: "蟬",
      }),
    ).toBe(true)
  })

  it("skips filtered POS tokens", () => {
    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        pos: ["記号", "句点"],
        normalizedWord: "。",
      }),
    ).toBe(true)
    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        pos: ["助詞", "係助詞"],
        normalizedWord: "は",
      }),
    ).toBe(true)
  })

  it("skips proper nouns, numbers, fillers, and interjection fillers", () => {
    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        pos: ["名詞", "固有名詞"],
        normalizedWord: "ルフィ",
      }),
    ).toBe(true)

    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        pos: ["名詞", "数"],
        normalizedWord: "三",
      }),
    ).toBe(true)

    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        pos: ["フィラー"],
        normalizedWord: "えー",
      }),
    ).toBe(true)

    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        pos: ["感動詞", "間投"],
        normalizedWord: "あっ",
      }),
    ).toBe(true)
  })

  it("skips empty normalized words", () => {
    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        pos: ["名詞", "一般"],
        normalizedWord: "",
      }),
    ).toBe(true)
  })

  it("keeps normal known tokens", () => {
    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        pos: ["名詞", "一般"],
        normalizedWord: "図書館",
      }),
    ).toBe(false)
  })
})
