// Tests for furigana utilities
import { describe, it, expect } from "vitest"
import {
  extractHiragana,
  convertFuriganaToRubyHtml,
  parseFuriganaString,
} from "./furigana"

describe("Furigana Utilities", () => {
  describe("parseFuriganaString", () => {
    it("should parse a simple furigana string into base and kana", () => {
      const result = parseFuriganaString("人[ひと]")
      expect(result.base).toBe("人")
      expect(result.kana).toBe("ひと")
    })

    it("should parse complex furigana with multiple kanji and spaces", () => {
      const result = parseFuriganaString("食[た]べ 物[もの]")
      expect(result.base).toBe("食べ物")
      expect(result.kana).toBe("たべもの")
    })

    it("should handle plain kana strings (no furigana brackets)", () => {
      const result = parseFuriganaString("ここ")
      expect(result.base).toBe("ここ")
      expect(result.kana).toBe("ここ")
    })

    it("should strip spaces from both base and kana forms", () => {
      const result = parseFuriganaString("何[なん]で 食[た]べ 物[もの]がない？")
      expect(result.base).toBe("何で食べ物がない？")
      expect(result.kana).toBe("なんでたべものがない？")
    })

    it("should handle mixed content with both furigana and plain text", () => {
      const result = parseFuriganaString("読[よ]みます")
      expect(result.base).toBe("読みます")
      expect(result.kana).toBe("よみます")
    })
  })

  describe("extractHiragana", () => {
    it("should extract hiragana from a simple furigana string", () => {
      const input = "食[た]べる"
      const expected = "たべる"
      expect(extractHiragana(input)).toBe(expected)
    })

    it("should extract hiragana and strip spaces from a complex string", () => {
      const input = "何[なん]で 食[た]べ 物[もの]がない？"
      const expected = "なんでたべものがない？"
      expect(extractHiragana(input)).toBe(expected)
    })
  })

  describe("convertFuriganaToRubyHtml", () => {
    it("should correctly convert a simple furigana string and strip spaces", () => {
      const input = "食[た]べる " // Added trailing space
      const expected = `<ruby>食<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none; position: relative; z-index: 1;">た</span></rt><rp>)</rp></ruby>べる`
      expect(convertFuriganaToRubyHtml(input)).toBe(expected)
    })

    it("should convert a complex string and strip spaces outside ruby tags", () => {
      const input = "何[なん]で 食[た]べ 物[もの]がない？"
      // Spaces not in ruby tags are stripped
      const expected = `<ruby>何<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none; position: relative; z-index: 1;">なん</span></rt><rp>)</rp></ruby>で<ruby>食<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none; position: relative; z-index: 1;">た</span></rt><rp>)</rp></ruby>べ<ruby>物<rp>(</rp><rt><span style="font-size: 0.75rem; user-select: none; position: relative; z-index: 1;">もの</span></rt><rp>)</rp></ruby>がない？`
      expect(convertFuriganaToRubyHtml(input)).toBe(expected)
    })
  })
})
