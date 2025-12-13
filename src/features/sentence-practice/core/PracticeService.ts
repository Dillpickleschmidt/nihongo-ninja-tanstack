// core/PracticeService.ts
import { AnswerChecker } from "./answer-processing/AnswerChecker"
import { VariationGenerator } from "./answer-processing/VariationGenerator"
import { ConjugationEngine } from "./conjugation/ConjugationEngine"
import { textProcessor } from "./text/TextProcessor"
import type {
  PracticeQuestion,
  CheckResult,
  Answer,
} from "./answer-processing/types"
import type { ConjugatedWord } from "./conjugation/types"
import type { Doc } from "convex/_generated/dataModel"
import type { SentenceSegment, SentenceAnswer } from "convex/validators"
import { AnswerInputs } from "../store/types"

export class PracticeService {
  private answerChecker: AnswerChecker
  private variationGenerator: VariationGenerator
  private conjugationEngine: ConjugationEngine

  constructor() {
    this.answerChecker = new AnswerChecker()
    this.variationGenerator = new VariationGenerator()
    this.conjugationEngine = new ConjugationEngine()
  }

  /**
   * Converts questions from Convex into processed questions with string segments
   */
  prepareQuestions(
    questions: Doc<"sentencePracticeQuestions">[],
  ): PracticeQuestion[] {
    return questions.map((question) => ({
      ...question,
      answers: this.processAnswers(question.answers, question.english),
    }))
  }

  /**
   * Transforms SentenceSegment to the format expected by ConjugationEngine
   */
  private transformSegment(segment: SentenceSegment): string | ConjugatedWord {
    if (!segment.conjugation) {
      return segment.text
    }
    return {
      word: segment.text,
      pos: segment.conjugation.pos,
      form: segment.conjugation.form ?? "normal",
      polarity: segment.conjugation.polarity,
      tense: segment.conjugation.tense,
    } as ConjugatedWord
  }

  /**
   * Processes raw segments into simple string arrays by conjugating words
   */
  private prepareSegments(
    segments: SentenceSegment[],
    isPolite: boolean,
  ): string[][] {
    const transformedSegments = segments.map((segment) =>
      this.transformSegment(segment),
    )

    return this.conjugationEngine.conjugateSegments(
      transformedSegments,
      isPolite,
    )
  }

  private processAnswers(
    answers: SentenceAnswer[],
    english: string,
  ): Answer[] {
    return answers.flatMap((answer, sourceAnswerIndex) => {
      const processedAnswers = this.processAnswer(answer, sourceAnswerIndex)
      return this.variationGenerator.generateVariations({
        answers: processedAnswers,
        english,
      }).answers
    })
  }

  private processAnswer(
    answer: SentenceAnswer,
    sourceAnswerIndex: number,
  ): Answer[] {
    const politenessVariations = [true, false]

    return politenessVariations.flatMap((isPolite) => {
      const preparedSegments = this.prepareSegments(answer.segments, isPolite)

      return this.generateCombinations(preparedSegments).map(
        (combinedSegments) => ({
          segments: combinedSegments,
          notes: answer.notes,
          originalPoliteForm: isPolite,
          isVariation: false,
          sourceAnswerIndex,
          pronounType: "none",
        }),
      )
    })
  }

  private generateCombinations(segmentArrays: string[][]): string[][] {
    if (segmentArrays.length === 0) return [[]]
    if (segmentArrays.length === 1) return segmentArrays[0].map((seg) => [seg])

    const [firstSegmentArray, ...restSegmentArrays] = segmentArrays
    const remainingCombinations = this.generateCombinations(restSegmentArrays)

    const result: string[][] = []
    for (const segment of firstSegmentArray) {
      for (const combination of remainingCombinations) {
        result.push([segment, ...combination])
      }
    }

    return result
  }

  fillBlankInputs(
    inputs: AnswerInputs,
    question: PracticeQuestion,
  ): AnswerInputs {
    // If we have a single input (hard mode), return it as-is
    if (inputs.single !== undefined) return inputs

    // Only process blank inputs for easy mode
    const blankInputs = inputs.blanks ?? []
    const baseSegments = question.answers[0].segments
    const shouldUseKana = !textProcessor.containsKanji(blankInputs)

    const fullInput = baseSegments.map((segment, index) => {
      if (blankInputs[index] !== undefined) {
        return blankInputs[index]
      } else {
        const text = segment
        return shouldUseKana
          ? textProcessor.convertToKana(text)
          : textProcessor.removeFurigana(text)
      }
    })

    return { blanks: fullInput }
  }

  checkAnswer(inputs: AnswerInputs, question: PracticeQuestion): CheckResult {
    if (inputs.single) {
      return this.answerChecker.checkAnswer(inputs.single, question)
    }

    const blankInputs = inputs.blanks ?? []

    return {
      ...this.answerChecker.checkAnswer(blankInputs.join(""), question),
      inputs: blankInputs.map((input) => ({
        value: input || "",
        errors: [], // Individual blank errors to be implemented
      })),
    }
  }
}
