// core/answer-processing/__tests__/VariationGenerator.test.ts
import { describe, it, expect } from "vitest"
import { VariationGenerator } from "../VariationGenerator"
import type { PracticeQuestion, Answer } from "../types"

describe("VariationGenerator", () => {
  const generator = new VariationGenerator()

  const createQuestion = (answers: Answer[]): PracticeQuestion => ({
    english: "Test question",
    answers,
  })

  // Helper function for serialization
  const serialize = (answer: Answer) =>
    JSON.stringify({
      segments: answer.segments,
    })

  describe("Variation Combinations", () => {
    it("generates pronoun variations while preserving original", () => {
      const question: PracticeQuestion = {
        english: "I am Mr. Tanaka.",
        answers: [
          {
            segments: ["私[わたし]", "は", "田中[たなか]", "さん", "です"],
          },
        ],
      }

      const result = generator.generateVariations(question)

      // Representative examples of each combination type
      const expectedVariations = [
        // Original answer with 私[わたし]
        {
          segments: ["私[わたし]", "は", "田中[たなか]", "さん", "です"],
        },

        // With other pronouns
        {
          segments: ["僕[ぼく]", "は", "田中[たなか]", "さん", "です"],
        },
        {
          segments: ["俺[おれ]", "は", "田中[たなか]", "さん", "です"],
        },

        // Kana variations
        {
          segments: ["わたし", "は", "たなか", "さん", "です"],
        },
        {
          segments: ["ぼく", "は", "たなか", "さん", "です"],
        },

        // Honorific variations
        {
          segments: [
            "私[わたし]",
            "は",
            "田中[たなか]",
            "先生[せんせい]",
            "です",
          ],
        },
        {
          segments: ["僕[ぼく]", "は", "田中[たなか]", "くん", "です"],
        },

        // Dropped pronoun variation
        {
          segments: ["田中[たなか]", "さん", "です"],
        },
      ]

      const generatedSet = new Set(result.answers.map(serialize))

      // Verify each expected variation exists in the generated set
      expectedVariations.forEach((variation) => {
        expect(generatedSet.has(serialize(variation))).toBe(true)
      })

      // Check that variations with pronouns have proper structure
      result.answers.forEach((answer) => {
        if (
          answer.segments[0].includes("わたし") ||
          answer.segments[0].includes("ぼく")
        ) {
          expect(answer.segments[1]).toBe("は")
        }
      })
    })
  })

  describe("Edge Cases", () => {
    it("handles empty answers array", () => {
      const question = createQuestion([])
      const result = generator.generateVariations(question)
      expect(result.answers).toEqual([])
    })

    it("handles answers without kanji or honorifics", () => {
      const question = createQuestion([
        {
          segments: ["はい"],
        },
      ])

      const result = generator.generateVariations(question)
      expect(result.answers).toEqual([
        { isVariation: false, segments: ["はい"] },
      ])
    })

    it("does not generate honorific variations for answers without honorifics", () => {
      const question: PracticeQuestion = {
        english: "This is a book.",
        answers: [
          {
            segments: ["これ", "は", "本[ほん]", "です"],
          },
        ],
      }

      const result = generator.generateVariations(question)

      // Should not contain any honorific variations
      const honorifics = [
        "さん",
        "くん",
        "ちゃん",
        "先生[せんせい]",
        "様[さま]",
      ]
      result.answers.forEach((answer) => {
        honorifics.forEach((honorific) => {
          expect(answer.segments).not.toContain(honorific)
        })
      })
    })
  })
})
