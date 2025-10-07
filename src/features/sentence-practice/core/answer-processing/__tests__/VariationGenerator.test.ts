// core/answer-processing/__tests__/VariationGenerator.test.ts
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
    test("generates pronoun variations while preserving original", () => {
      const question: PracticeQuestion = {
        english: "I am Mr. Tanaka.",
        answers: [
          {
            segments: ["田中[たなか]", "さん", "です"],
          },
        ],
      }

      const result = generator.generateVariations(question)

      // Representative examples of each combination type
      const expectedVariations = [
        // Original answer (without pronoun)
        {
          segments: ["田中[たなか]", "さん", "です"],
        },

        // With pronouns added
        {
          segments: ["私[わたし]", "は", "田中[たなか]", "さん", "です"],
        },
        {
          segments: ["僕[ぼく]", "は", "田中[たなか]", "さん", "です"],
        },

        // Kana variations (both with and without pronouns)
        {
          segments: ["たなか", "さん", "です"],
        },
        {
          segments: ["わたし", "は", "たなか", "さん", "です"],
        },

        // Honorific variations
        {
          segments: ["田中[たなか]", "先生[せんせい]", "です"],
        },
        {
          segments: [
            "私[わたし]",
            "は",
            "田中[たなか]",
            "先生[せんせい]",
            "です",
          ],
        },
      ]

      const generatedSet = new Set(result.answers.map(serialize))
      const expectedSet = new Set(expectedVariations.map(serialize))

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
    test("handles empty answers array", () => {
      const question = createQuestion([])
      const result = generator.generateVariations(question)
      expect(result.answers).toEqual([])
    })

    test("handles answers without kanji or honorifics", () => {
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

    test("does not generate pronoun variations for non-first-person sentences", () => {
      const question = createQuestion([
        {
          segments: ["彼[かれ]", "は", "学生[がくせい]", "です"],
        },
      ])

      const result = generator.generateVariations(question)

      // Should not contain first-person pronoun variations
      const firstPersonPronouns = ["私[わたし]", "僕[ぼく]", "俺[おれ]"]
      firstPersonPronouns.forEach((pronoun) => {
        expect(result.answers).not.toContainEqual(
          expect.objectContaining({
            segments: [pronoun, "は", "学生[がくせい]", "です"],
          }),
        )
      })
    })

    test("does not generate honorific variations for answers without honorifics", () => {
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

    test("adds pronoun variations only for sentences starting with 'I '", () => {
      const notFirstPerson = [
        "We are",
        "You are",
        "They are",
        "I'll",
        "I've",
        "I'd",
      ]

      notFirstPerson.forEach((start) => {
        const question: PracticeQuestion = {
          english: `${start} students.`,
          answers: [
            {
              segments: ["学生[がくせい]", "です"],
            },
          ],
        }

        const result = generator.generateVariations(question)

        // Should not contain any pronoun variations
        result.answers.forEach((answer) => {
          expect(answer.segments[0]).not.toContain("私")
          expect(answer.segments[0]).not.toContain("僕")
          expect(answer.segments[0]).not.toContain("俺")
        })
      })
    })
  })
})
