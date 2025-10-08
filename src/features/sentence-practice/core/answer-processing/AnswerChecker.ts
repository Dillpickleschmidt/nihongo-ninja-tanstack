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
    let userText = this.textProcessor.normalize(input)
    const shouldUseKana = !this.textProcessor.containsKanji(input)

    const answerTexts = question.answers.map((answer) =>
      this.textProcessor.extractPlainText(answer.segments),
    )

    // Determine which particles can be stripped from user input
    const particles = ["よね", "ね", "よ"]
    const particlesToStrip: string[] = []

    // Check if any answer ends with question markers
    const anyAnswerIsQuestion = answerTexts.some(
      (text) => text.endsWith("か") || text.endsWith("？"),
    )

    // Only consider stripping particles if no answers are questions
    if (!anyAnswerIsQuestion) {
      for (const particle of particles) {
        const anyAnswerEndsWithParticle = answerTexts.some((text) =>
          text.endsWith(particle),
        )
        if (!anyAnswerEndsWithParticle) {
          particlesToStrip.push(particle)
        }
      }
    }

    // Strip applicable particles from user input (longest first, only one)
    let strippedParticle: string | undefined
    for (const particle of particlesToStrip) {
      if (userText.endsWith(particle)) {
        userText = userText.slice(0, -particle.length)
        strippedParticle = particle
        break
      }
    }

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
      strippedParticle,
    }
  }
}
