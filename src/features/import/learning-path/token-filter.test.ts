import { describe, expect, it } from "vitest"
import { shouldSkipToken } from "./token-filter"

describe("learning-path token filter", () => {
  it("skips UNKNOWN class tokens", () => {
    expect(
      shouldSkipToken({
        tokenClass: "UNKNOWN",
        primaryPos: "名詞",
        normalizedWord: "蟬",
      }),
    ).toBe(true)
  })

  it("skips filtered POS tokens", () => {
    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        primaryPos: "記号",
        normalizedWord: "。",
      }),
    ).toBe(true)
    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        primaryPos: "助詞",
        normalizedWord: "は",
      }),
    ).toBe(true)
  })

  it("skips empty normalized words", () => {
    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        primaryPos: "名詞",
        normalizedWord: "",
      }),
    ).toBe(true)
  })

  it("keeps normal known tokens", () => {
    expect(
      shouldSkipToken({
        tokenClass: "KNOWN",
        primaryPos: "名詞",
        normalizedWord: "図書館",
      }),
    ).toBe(false)
  })
})
