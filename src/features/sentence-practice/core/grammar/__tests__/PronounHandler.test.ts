import { describe, it, expect } from "vitest"
import { PronounHandler } from "../PronounHandler"
import type { Answer } from "../../answer-processing/types"

describe("PronounHandler", () => {
  const handler = new PronounHandler()

  describe("generatePronounVariations", () => {
    it("generates variations for pronoun at index 0 with は particle", () => {
      const answer: Answer = {
        segments: ["私[わたし]", "は", "学生[がくせい]", "です"],
      }

      const variations = handler.generatePronounVariations(answer)

      // Should generate 5 variations (6 pronouns - 1 original) + 1 dropped = 6 total
      expect(variations).toHaveLength(6)

      const segmentsList = variations.map((v) => v.segments)

      // Other pronoun variations (keeping は particle)
      expect(segmentsList).toContainEqual([
        "私[わたくし]",
        "は",
        "学生[がくせい]",
        "です",
      ])
      expect(segmentsList).toContainEqual([
        "僕[ぼく]",
        "は",
        "学生[がくせい]",
        "です",
      ])
      expect(segmentsList).toContainEqual([
        "俺[おれ]",
        "は",
        "学生[がくせい]",
        "です",
      ])
      expect(segmentsList).toContainEqual([
        "あたし",
        "は",
        "学生[がくせい]",
        "です",
      ])
      expect(segmentsList).toContainEqual([
        "うち",
        "は",
        "学生[がくせい]",
        "です",
      ])

      // Dropped variation (only for 私[わたし]は at index 0)
      expect(segmentsList).toContainEqual(["学生[がくせい]", "です"])

      // Verify pronounType doesn't include particle
      const pronounTypes = variations.map((v) => v.pronounType)
      expect(pronounTypes).toContain("私[わたくし]")
      expect(pronounTypes).toContain("僕[ぼく]")
      expect(pronounTypes).toContain("俺[おれ]")
      expect(pronounTypes).toContain("あたし")
      expect(pronounTypes).toContain("うち")
      expect(pronounTypes).toContain("dropped")

      // Should NOT contain は particle
      expect(pronounTypes.some((p) => p?.includes("は"))).toBe(false)
    })

    it("generates variations for pronoun in middle", () => {
      const answer: Answer = {
        segments: [
          "トム",
          "さん",
          "は",
          "プレゼント",
          "を",
          "私[わたし]",
          "に",
          "くれた",
        ],
      }

      const variations = handler.generatePronounVariations(answer)

      // Should generate 5 variations (6 pronouns - 1 original)
      // No dropped variation since not at index 0
      expect(variations).toHaveLength(5)

      const segmentsList = variations.map((v) => v.segments)

      // Verify pronoun is replaced (surrounding segments unchanged)
      expect(segmentsList).toContainEqual([
        "トム",
        "さん",
        "は",
        "プレゼント",
        "を",
        "私[わたくし]",
        "に",
        "くれた",
      ])
      expect(segmentsList).toContainEqual([
        "トム",
        "さん",
        "は",
        "プレゼント",
        "を",
        "僕[ぼく]",
        "に",
        "くれた",
      ])
      expect(segmentsList).toContainEqual([
        "トム",
        "さん",
        "は",
        "プレゼント",
        "を",
        "俺[おれ]",
        "に",
        "くれた",
      ])

      // Verify pronounType is just the pronoun
      const pronounTypes = variations.map((v) => v.pronounType)
      expect(pronounTypes).toContain("私[わたくし]")
      expect(pronounTypes).toContain("僕[ぼく]")
    })

    it("only generates dropped variation for 私[わたし]は at index 0", () => {
      // 私[わたくし]は should not be droppable
      const answer1: Answer = {
        segments: ["私[わたくし]", "は", "学生[がくせい]", "です"],
      }

      const variations1 = handler.generatePronounVariations(answer1)

      // Should not have dropped variation
      expect(variations1.some((v) => v.segments.length === 2)).toBe(false)

      // 僕は should not be droppable
      const answer2: Answer = {
        segments: ["僕[ぼく]", "は", "学生[がくせい]", "です"],
      }

      const variations2 = handler.generatePronounVariations(answer2)

      expect(variations2.some((v) => v.segments.length === 2)).toBe(false)
    })

    it("handles pronoun at end of sentence", () => {
      const answer: Answer = {
        segments: ["これ", "は", "私[わたし]"],
      }

      const variations = handler.generatePronounVariations(answer)

      expect(variations).toHaveLength(5)

      const segmentsList = variations.map((v) => v.segments)

      expect(segmentsList).toContainEqual(["これ", "は", "僕[ぼく]"])
      expect(segmentsList).toContainEqual(["これ", "は", "俺[おれ]"])
    })

    it("handles sentence with no pronoun", () => {
      const answer: Answer = {
        segments: ["これ", "は", "本[ほん]", "です"],
      }

      const variations = handler.generatePronounVariations(answer)

      expect(variations).toHaveLength(0)
    })

    it("preserves metadata when generating variations", () => {
      const answer: Answer = {
        segments: ["私[わたし]", "は", "学生[がくせい]", "です"],
        sourceAnswerIndex: 2,
        honorificType: "さん",
        originalPoliteForm: true,
      }

      const variations = handler.generatePronounVariations(answer)

      variations.forEach((variation) => {
        expect(variation.sourceAnswerIndex).toBe(2)
        expect(variation.honorificType).toBe("さん")
        expect(variation.originalPoliteForm).toBe(true)
        expect(variation.isVariation).toBe(true)
      })
    })

    it("handles multiple pronouns in same sentence", () => {
      const answer: Answer = {
        segments: [
          "私[わたし]",
          "は",
          "あなた",
          "が",
          "僕[ぼく]",
          "を",
          "呼[よ]んだ",
        ],
      }

      const variations = handler.generatePronounVariations(answer)

      // Should generate variations for EACH pronoun position
      // Position 0: 私[わたし] → 5 variations + 1 dropped
      // Position 4: 僕[ぼく] → 5 variations
      // Total: 11 variations
      expect(variations.length).toBeGreaterThan(0)

      // Verify some expected combinations
      const segmentsList = variations.map((v) => v.segments)

      // First pronoun changed
      expect(
        segmentsList.some(
          (s) =>
            s[0] === "僕[ぼく]" && s[2] === "あなた" && s[4] === "僕[ぼく]",
        ),
      ).toBe(true)

      // Second pronoun changed
      expect(
        segmentsList.some(
          (s) =>
            s[0] === "私[わたし]" && s[2] === "あなた" && s[4] === "私[わたし]",
        ),
      ).toBe(true)
    })
  })

  describe("generatePluralPronounVariations", () => {
    it("generates plural variations for singular pronoun at index 0", () => {
      const answer: Answer = {
        segments: ["私[わたし]", "は", "学生[がくせい]", "です"],
      }

      const variations = handler.generatePluralPronounVariations(answer)

      // Should generate 3 variations (all plural pronouns)
      expect(variations).toHaveLength(3)

      const segmentsList = variations.map((v) => v.segments)

      expect(segmentsList).toContainEqual([
        "私たち[わたしたち]",
        "は",
        "学生[がくせい]",
        "です",
      ])
      expect(segmentsList).toContainEqual([
        "僕たち[ぼくたち]",
        "は",
        "学生[がくせい]",
        "です",
      ])
      expect(segmentsList).toContainEqual([
        "俺たち[おれたち]",
        "は",
        "学生[がくせい]",
        "です",
      ])

      // Verify pronounType doesn't include particle
      const pronounTypes = variations.map((v) => v.pronounType)
      expect(pronounTypes).toContain("私たち[わたしたち]")
      expect(pronounTypes).toContain("僕たち[ぼくたち]")
      expect(pronounTypes).toContain("俺たち[おれたち]")
      expect(pronounTypes.some((p) => p?.includes("は"))).toBe(false)
    })

    it("generates plural variations for pronoun in middle", () => {
      const answer: Answer = {
        segments: [
          "田中[たなか]",
          "さん",
          "は",
          "私[わたし]",
          "に",
          "本[ほん]",
          "を",
          "くれた",
        ],
      }

      const variations = handler.generatePluralPronounVariations(answer)

      expect(variations).toHaveLength(3)

      const segmentsList = variations.map((v) => v.segments)

      expect(segmentsList).toContainEqual([
        "田中[たなか]",
        "さん",
        "は",
        "私たち[わたしたち]",
        "に",
        "本[ほん]",
        "を",
        "くれた",
      ])
    })

    it("handles sentence with no pronoun", () => {
      const answer: Answer = {
        segments: ["これ", "は", "本[ほん]", "です"],
      }

      const variations = handler.generatePluralPronounVariations(answer)

      expect(variations).toHaveLength(0)
    })

    it("preserves metadata when generating plural variations", () => {
      const answer: Answer = {
        segments: ["私[わたし]", "は", "学生[がくせい]", "です"],
        sourceAnswerIndex: 1,
        honorificType: "くん",
        originalPoliteForm: false,
      }

      const variations = handler.generatePluralPronounVariations(answer)

      variations.forEach((variation) => {
        expect(variation.sourceAnswerIndex).toBe(1)
        expect(variation.honorificType).toBe("くん")
        expect(variation.originalPoliteForm).toBe(false)
        expect(variation.isVariation).toBe(true)
      })
    })

    it("skips same pronoun when generating variations", () => {
      const answer: Answer = {
        segments: ["私たち[わたしたち]", "は", "学生[がくせい]", "です"],
      }

      const variations = handler.generatePluralPronounVariations(answer)

      // Should only generate 2 variations (excluding 私たち itself)
      expect(variations).toHaveLength(2)

      const segmentsList = variations.map((v) => v.segments)

      expect(segmentsList).toContainEqual([
        "僕たち[ぼくたち]",
        "は",
        "学生[がくせい]",
        "です",
      ])
      expect(segmentsList).toContainEqual([
        "俺たち[おれたち]",
        "は",
        "学生[がくせい]",
        "です",
      ])

      // Should NOT contain original
      expect(segmentsList.some((s) => s[0] === "私たち[わたしたち]")).toBe(
        false,
      )
    })
  })
})
