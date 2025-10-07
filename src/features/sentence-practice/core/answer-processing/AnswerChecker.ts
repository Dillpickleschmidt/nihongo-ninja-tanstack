// core/answer-processing/AnswerChecker.ts
import type { CheckResult, PracticeQuestion } from "./types"
import { AnswerMatcher } from "./AnswerMatcher"
import { TextProcessor } from "../text/TextProcessor"

export class AnswerChecker {
  private matcher: AnswerMatcher
  private textProcessor: TextProcessor

  constructor() {
    this.matcher = new AnswerMatcher()
    this.textProcessor = new TextProcessor()
  }

  checkAnswer(input: string, question: PracticeQuestion): CheckResult {
    const userText = this.textProcessor.normalize(input)
    const shouldUseKana = !this.textProcessor.containsKanji(input)

    const matches = question.answers
      .map((answer) => {
        // Convert text for comparison based on user input style
        const correctText = this.textProcessor.extractPlainText(answer.segments)
        const textForComparison = shouldUseKana
          ? this.textProcessor.convertToKana(correctText)
          : correctText

        const matchResult = this.matcher.match(userText, textForComparison)

        return {
          answer,
          similarity: matchResult.similarity,
          userErrors: matchResult.userErrors,
          answerErrors: matchResult.answerErrors,
        }
      })
      .sort((a, b) => b.similarity - a.similarity)

    const bestMatch = matches[0]

    return {
      isCorrect: bestMatch.similarity === 1,
      inputs: [
        {
          value: input, // Using original input here, not normalized
          errors: bestMatch.userErrors,
        },
      ],
      answers: [
        {
          segments: bestMatch.answer.segments,
          errors: bestMatch.answerErrors,
        },
      ],
      allMatches: matches,
    }
  }
}
