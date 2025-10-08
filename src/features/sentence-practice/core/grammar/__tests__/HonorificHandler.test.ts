import { describe, it, expect } from "vitest"
import { HonorificHandler } from "../HonorificHandler"
import type { Answer } from "../../answer-processing/types"

describe("HonorificHandler", () => {
  const handler = new HonorificHandler()

  describe("findHonorific", () => {
    it("finds さん when present", () => {
      const segments = ["田中[たなか]", "さん", "です"]
      expect(handler.findHonorific(segments)).toBe("さん")
    })

    it("finds くん when present", () => {
      const segments = ["山田[やまだ]", "くん", "です"]
      expect(handler.findHonorific(segments)).toBe("くん")
    })

    it("finds ちゃん when present", () => {
      const segments = ["花子[はなこ]", "ちゃん", "です"]
      expect(handler.findHonorific(segments)).toBe("ちゃん")
    })

    it("finds 先生[せんせい] when present", () => {
      const segments = ["佐藤[さとう]", "先生[せんせい]", "です"]
      expect(handler.findHonorific(segments)).toBe("先生[せんせい]")
    })

    it("finds 様[さま] when present", () => {
      const segments = ["お客[きゃく]", "様[さま]", "です"]
      expect(handler.findHonorific(segments)).toBe("様[さま]")
    })

    it("returns first honorific when multiple exist", () => {
      const segments = ["田中[たなか]", "さん", "と", "山田[やまだ]", "くん"]
      expect(handler.findHonorific(segments)).toBe("さん")
    })

    it("returns undefined when no honorific present", () => {
      const segments = ["これ", "は", "本[ほん]", "です"]
      expect(handler.findHonorific(segments)).toBeUndefined()
    })

    // Critical regression tests for the endsWith bug
    it("does not match 富士山 as さん (endsWith bug)", () => {
      const segments = ["富士山[ふじさん]", "です"]
      expect(handler.findHonorific(segments)).toBeUndefined()
    })

    it("does not match 楽しくん as くん (endsWith bug)", () => {
      const segments = ["楽[たの]しくん", "です"]
      expect(handler.findHonorific(segments)).toBeUndefined()
    })

    it("does not match 可愛いちゃん as ちゃん (endsWith bug)", () => {
      const segments = ["可愛[かわい]いちゃん", "です"]
      expect(handler.findHonorific(segments)).toBeUndefined()
    })
  })

  describe("generateHonorificVariations", () => {
    it("generates all honorific variations from さん", () => {
      const answer: Answer = {
        segments: ["田中[たなか]", "さん", "です"],
        sourceAnswerIndex: 0,
        pronounType: "none",
        originalPoliteForm: true,
      }

      const variations = handler.generateHonorificVariations(answer)

      expect(variations).toHaveLength(3) // くん, ちゃん, 先生

      const segmentsList = variations.map((v) => v.segments)
      expect(segmentsList).toContainEqual(["田中[たなか]", "くん", "です"])
      expect(segmentsList).toContainEqual(["田中[たなか]", "ちゃん", "です"])
      expect(segmentsList).toContainEqual([
        "田中[たなか]",
        "先生[せんせい]",
        "です",
      ])
    })

    it("generates variations from くん (さん, ちゃん)", () => {
      const answer: Answer = {
        segments: ["山田[やまだ]", "くん", "です"],
      }

      const variations = handler.generateHonorificVariations(answer)

      expect(variations).toHaveLength(2)
      const segmentsList = variations.map((v) => v.segments)
      expect(segmentsList).toContainEqual(["山田[やまだ]", "さん", "です"])
      expect(segmentsList).toContainEqual(["山田[やまだ]", "ちゃん", "です"])
    })

    it("generates variations from ちゃん (さん, くん)", () => {
      const answer: Answer = {
        segments: ["花子[はなこ]", "ちゃん", "です"],
      }

      const variations = handler.generateHonorificVariations(answer)

      expect(variations).toHaveLength(2)
      const segmentsList = variations.map((v) => v.segments)
      expect(segmentsList).toContainEqual(["花子[はなこ]", "さん", "です"])
      expect(segmentsList).toContainEqual(["花子[はなこ]", "くん", "です"])
    })

    it("generates variations from 先生 (only さん)", () => {
      const answer: Answer = {
        segments: ["佐藤[さとう]", "先生[せんせい]", "です"],
      }

      const variations = handler.generateHonorificVariations(answer)

      expect(variations).toHaveLength(1)
      expect(variations[0].segments).toEqual(["佐藤[さとう]", "さん", "です"])
    })

    it("generates no variations from 様", () => {
      const answer: Answer = {
        segments: ["お客[きゃく]", "様[さま]", "です"],
      }

      const variations = handler.generateHonorificVariations(answer)

      expect(variations).toHaveLength(0)
    })

    it("preserves metadata when generating variations", () => {
      const answer: Answer = {
        segments: ["田中[たなか]", "さん", "です"],
        sourceAnswerIndex: 1,
        pronounType: "私[わたし]は",
        originalPoliteForm: true,
      }

      const variations = handler.generateHonorificVariations(answer)

      variations.forEach((variation) => {
        expect(variation.sourceAnswerIndex).toBe(1)
        expect(variation.pronounType).toBe("私[わたし]は")
        expect(variation.originalPoliteForm).toBe(true)
        expect(variation.isVariation).toBe(true)
      })
    })

    it("sets honorificType for each variation", () => {
      const answer: Answer = {
        segments: ["田中[たなか]", "さん", "です"],
      }

      const variations = handler.generateHonorificVariations(answer)

      const honorificTypes = variations.map((v) => v.honorificType)
      expect(honorificTypes).toContain("くん")
      expect(honorificTypes).toContain("ちゃん")
      expect(honorificTypes).toContain("先生[せんせい]")
      expect(honorificTypes).not.toContain("様[さま]")
    })

    it("returns empty array when no honorific is present", () => {
      const answer: Answer = {
        segments: ["田中[たなか]", "です"],
      }

      const variations = handler.generateHonorificVariations(answer)
      expect(variations).toHaveLength(0)
    })

    it("generates cartesian product for multiple honorifics (くん and 先生)", () => {
      const answer: Answer = {
        segments: [
          "要[かなめ]",
          "くん",
          "は",
          "ヲールドーフ",
          "先生[せんせい]",
          "に",
          "本[ほん]",
          "を",
          "上[あ]げました",
        ],
      }

      const variations = handler.generateHonorificVariations(answer)

      // くん has 3 options (くん, さん, ちゃん)
      // 先生 has 2 options (先生, さん)
      // Cartesian product: 3 × 2 = 6 combinations
      // Minus 1 for original (くん + 先生) = 5 variations
      expect(variations).toHaveLength(5)

      const segmentsList = variations.map((v) => v.segments)

      // くん + さん (先生 → さん)
      expect(segmentsList).toContainEqual([
        "要[かなめ]",
        "くん",
        "は",
        "ヲールドーフ",
        "さん",
        "に",
        "本[ほん]",
        "を",
        "上[あ]げました",
      ])

      // さん + 先生 (くん → さん)
      expect(segmentsList).toContainEqual([
        "要[かなめ]",
        "さん",
        "は",
        "ヲールドーフ",
        "先生[せんせい]",
        "に",
        "本[ほん]",
        "を",
        "上[あ]げました",
      ])

      // さん + さん (both changed)
      expect(segmentsList).toContainEqual([
        "要[かなめ]",
        "さん",
        "は",
        "ヲールドーフ",
        "さん",
        "に",
        "本[ほん]",
        "を",
        "上[あ]げました",
      ])

      // ちゃん + 先生 (くん → ちゃん)
      expect(segmentsList).toContainEqual([
        "要[かなめ]",
        "ちゃん",
        "は",
        "ヲールドーフ",
        "先生[せんせい]",
        "に",
        "本[ほん]",
        "を",
        "上[あ]げました",
      ])

      // ちゃん + さん (both changed)
      expect(segmentsList).toContainEqual([
        "要[かなめ]",
        "ちゃん",
        "は",
        "ヲールドーフ",
        "さん",
        "に",
        "本[ほん]",
        "を",
        "上[あ]げました",
      ])

      // Verify honorificType compound keys (in segment order: くん first, then 先生)
      const honorificTypes = variations.map((v) => v.honorificType)
      expect(honorificTypes).toContain("くん+さん")
      expect(honorificTypes).toContain("さん+先生[せんせい]")
      expect(honorificTypes).toContain("さん+さん")
      expect(honorificTypes).toContain("ちゃん+先生[せんせい]")
      expect(honorificTypes).toContain("ちゃん+さん")
    })

    it("handles multiple honorifics with 様 (様 never changes)", () => {
      const answer: Answer = {
        segments: [
          "要[かなめ]",
          "くん",
          "は",
          "ヲールドーフ",
          "様[さま]",
          "に",
          "本[ほん]",
          "を",
          "上[あ]げました",
        ],
      }

      const variations = handler.generateHonorificVariations(answer)

      // くん can become さん or ちゃん (2 variations)
      // 様 has no variations (0 variations)
      // Total: 2 variations
      expect(variations).toHaveLength(2)

      const segmentsList = variations.map((v) => v.segments)

      // 要くん → 要さん, 様 stays 様
      expect(segmentsList).toContainEqual([
        "要[かなめ]",
        "さん",
        "は",
        "ヲールドーフ",
        "様[さま]",
        "に",
        "本[ほん]",
        "を",
        "上[あ]げました",
      ])

      // 要くん → 要ちゃん, 様 stays 様
      expect(segmentsList).toContainEqual([
        "要[かなめ]",
        "ちゃん",
        "は",
        "ヲールドーフ",
        "様[さま]",
        "に",
        "本[ほん]",
        "を",
        "上[あ]げました",
      ])

      // Verify くん never becomes 先生 or 様
      const hasInvalidVariation = segmentsList.some(
        (segments) =>
          segments[1] === "先生[せんせい]" || segments[1] === "様[さま]",
      )
      expect(hasInvalidVariation).toBe(false)

      // Verify 様 never changes
      const allKeep様 = segmentsList.every(
        (segments) => segments[4] === "様[さま]",
      )
      expect(allKeep様).toBe(true)
    })
  })
})
