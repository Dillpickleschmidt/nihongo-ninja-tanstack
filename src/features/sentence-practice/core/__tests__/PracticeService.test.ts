// core/__tests__/PracticeService.test.ts
import { describe, it, expect, beforeEach } from "vitest"
import { PracticeService } from "../PracticeService"
import type { PracticeQuestion } from "../answer-processing/types"
import type { UnprocessedQuestion } from "../conjugation/types"
import type { AnswerInputs } from "../../store/types"

describe("PracticeService", () => {
  let service: PracticeService

  beforeEach(() => {
    service = new PracticeService()
  })

  describe("Hard Mode", () => {
    it("processes single input correctly", () => {
      const question: PracticeQuestion = {
        english: "Test",
        answers: [
          {
            segments: ["テスト"],
            isVariation: false,
            originalPoliteForm: true,
          },
        ],
      }
      const inputs: AnswerInputs = { single: "テスト" }

      const result = service.checkAnswer(inputs, question)
      expect(result.isCorrect).toBe(true)
      expect(result.inputs).toHaveLength(1)
      expect(result.inputs[0].value).toBe("テスト")
    })
  })

  describe("Easy Mode", () => {
    it("processes blank inputs correctly", () => {
      const question: PracticeQuestion = {
        english: "I am a student",
        answers: [
          {
            segments: ["私", "は", "学生", "です"],
            isVariation: false,
            originalPoliteForm: true,
          },
        ],
      }
      const inputs: AnswerInputs = {
        blanks: ["私", undefined, null, undefined],
      }

      const filledInputs = service.fillBlankInputs(inputs, question)
      expect(filledInputs.blanks).toEqual(["私", "は", null, "です"])
    })

    it("validates filled blank inputs", () => {
      const question: PracticeQuestion = {
        english: "I am a student",
        answers: [
          {
            segments: ["私", "は", "学生", "です"],
            isVariation: false,
            originalPoliteForm: true,
          },
        ],
      }
      const inputs: AnswerInputs = {
        blanks: ["私", "は", "学生", "です"],
      }

      const result = service.checkAnswer(inputs, question)
      expect(result.isCorrect).toBe(true)
      expect(result.inputs).toHaveLength(4)
    })
  })

  describe("Question Processing", () => {
    it("prepares questions with blank segments", () => {
      const unprocessedQuestions: UnprocessedQuestion[] = [
        {
          english: "Test",
          answers: [
            {
              segments: [
                { word: "私", blank: true },
                "は",
                { word: "学生", blank: true },
                "です",
              ],
            },
          ],
        },
      ]

      const processed = service.prepareQuestions(unprocessedQuestions)
      expect(processed[0].answers[0].segments).toEqual([
        "私",
        "は",
        "学生",
        "です",
      ])
    })
  })
})
