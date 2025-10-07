import { describe, it, expect } from "vitest"
import { AnswerChecker } from "../AnswerChecker"
import type { PracticeQuestion } from "../types"

describe("AnswerChecker", () => {
  const checker = new AnswerChecker()

  describe("Basic Answer Checking", () => {
    it("correctly checks perfect match", () => {
      const question: PracticeQuestion = {
        english: "Test question",
        answers: [
          {
            segments: ["こんにちは"],
          },
        ],
      }

      const result = checker.checkAnswer("こんにちは", question)

      expect(result.isCorrect).toBe(true)
      expect(result.inputs[0].errors).toEqual([])
      expect(result.answers[0].errors).toEqual([])
    })

    it("correctly checks partial match", () => {
      const question: PracticeQuestion = {
        english: "Test question",
        answers: [
          {
            segments: ["こんにちは"],
          },
        ],
      }

      const result = checker.checkAnswer("こんにち", question)

      expect(result.isCorrect).toBe(false)
      // Partial match: user typed correct characters, just missing the end
      expect(result.inputs[0].errors).toEqual([])
      expect(result.answers[0].errors.length).toBeGreaterThan(0)
    })

    it("correctly checks input with wrong characters", () => {
      const question: PracticeQuestion = {
        english: "Test question",
        answers: [
          {
            segments: ["こんにちは"],
          },
        ],
      }

      const result = checker.checkAnswer("こんばんは", question)

      expect(result.isCorrect).toBe(false)
      // Wrong characters: should have errors in user input
      expect(result.inputs[0].errors.length).toBeGreaterThan(0)
    })

    it("correctly checks no match", () => {
      const question: PracticeQuestion = {
        english: "Test question",
        answers: [
          {
            segments: ["こんにちは"],
          },
        ],
      }

      const result = checker.checkAnswer("xyz", question)

      expect(result.isCorrect).toBe(false)
      expect(result.inputs[0].errors.length).toBeGreaterThan(0)
      expect(result.answers[0].errors.length).toBeGreaterThan(0)
    })
  })

  describe("Multiple Answers", () => {
    it("selects best match from multiple answers", () => {
      const input = "ねこ"
      const question: PracticeQuestion = {
        english: "What is cat in Japanese?",
        answers: [
          {
            segments: ["猫[ねこ]"],
          },
          {
            segments: ["ねこ"],
            isVariation: true,
            isKanaVariation: true,
          },
        ],
      }

      const result = checker.checkAnswer(input, question)

      expect(result.isCorrect).toBe(true)
      expect(result.inputs[0].value).toBe(input)
      expect(result.answers[0].segments).toEqual(["ねこ"])
      expect(result.allMatches).toHaveLength(2)
    })
  })

  describe("Edge Cases", () => {
    it("handles empty input", () => {
      const question: PracticeQuestion = {
        english: "Test question",
        answers: [
          {
            segments: ["テスト"],
          },
        ],
      }

      const result = checker.checkAnswer("", question)

      expect(result.isCorrect).toBe(false)
      expect(result.inputs[0].value).toBe("")
      expect(result.answers[0].errors.length).toBeGreaterThan(0)
    })
  })
})
