// core/answer-processing/__tests__/AnswerMatcher.test.ts
import { describe, it, expect } from "vitest"
import { AnswerMatcher, MatchResult } from "../AnswerMatcher"
import { ErrorRange } from "../types"

describe("AnswerMatcher", () => {
  const matcher = new AnswerMatcher()
  const createErrorRange = (start: number, end: number): ErrorRange => ({
    start,
    end,
  })

  describe("String Matching", () => {
    const testCases = [
      {
        description: "identical strings",
        input: "hello",
        answer: "hello",
        expected: {
          similarity: 1,
          userErrors: [],
          answerErrors: [],
        },
      },
      {
        description: "completely different strings",
        input: "abc",
        answer: "xyz",
        expected: {
          similarity: 0,
          userErrors: [createErrorRange(0, 3)],
          answerErrors: [createErrorRange(0, 3)],
        },
      },
      {
        description: "partial match - extra character in input",
        input: "hello",
        answer: "hell",
        expected: {
          similarity: 4 / 5,
          userErrors: [createErrorRange(4, 5)],
          answerErrors: [],
        },
      },
      {
        description: "partial match - missing character in input",
        input: "hell",
        answer: "hello",
        expected: {
          similarity: 4 / 5,
          userErrors: [],
          answerErrors: [createErrorRange(4, 5)],
        },
      },
    ]

    it.each(testCases)(
      "handles $description",
      ({ input, answer, expected }) => {
        const result = matcher.match(input, answer)
        expect(result).toEqual(expected)
      },
    )
  })

  describe("Complex Matching Scenarios", () => {
    const complexTestCases = [
      {
        description: "interleaved errors",
        input: "abcde",
        answer: "abXde",
        expected: {
          similarity: 4 / 5,
          userErrors: [createErrorRange(2, 3)],
          answerErrors: [createErrorRange(2, 3)],
        },
      },
      {
        description: "missing section at end",
        input: "abc",
        answer: "abcdef",
        expected: {
          similarity: 3 / 6,
          userErrors: [],
          answerErrors: [createErrorRange(3, 6)],
        },
      },
      {
        description: "extra section at end",
        input: "abcdef",
        answer: "abc",
        expected: {
          similarity: 3 / 6,
          userErrors: [createErrorRange(3, 6)],
          answerErrors: [],
        },
      },
    ]

    it.each(complexTestCases)(
      "handles $description",
      ({ input, answer, expected }) => {
        const result = matcher.match(input, answer)
        expect(result).toEqual(expected)
      },
    )
  })

  describe("Edge Cases", () => {
    const edgeCases = [
      {
        description: "empty user input",
        input: "",
        answer: "hello",
        expected: {
          similarity: 0,
          userErrors: [],
          answerErrors: [createErrorRange(0, 5)],
        },
      },
      {
        description: "empty correct answer",
        input: "hello",
        answer: "",
        expected: {
          similarity: 0,
          userErrors: [createErrorRange(0, 5)],
          answerErrors: [],
        },
      },
      // {
      //   description: "both inputs empty",
      //   input: "",
      //   answer: "",
      //   expected: {
      //     similarity: 1,
      //     userErrors: [],
      //     answerErrors: [],
      //   },
      // },
    ]

    it.each(edgeCases)(
      "handles $description",
      ({ input, answer, expected }) => {
        const result = matcher.match(input, answer)
        expect(result).toEqual(expected)
      },
    )
  })
})
