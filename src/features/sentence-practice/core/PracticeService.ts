// core/PracticeService.ts
import { AnswerChecker } from "./answer-processing/AnswerChecker"
import { VariationGenerator } from "./answer-processing/VariationGenerator"
import { ConjugationEngine } from "./conjugation/ConjugationEngine"
import { TextProcessor } from "./text/TextProcessor"
import type {
  PracticeQuestion,
  CheckResult,
  Answer,
} from "./answer-processing/types"
import type {
  UnprocessedQuestion,
  ConjugatableSegment,
  ConjugatedWord,
  BlankableWord,
} from "./conjugation/types"
import { AnswerInputs } from "../store/types"

export class PracticeService {
  private answerChecker: AnswerChecker
  private variationGenerator: VariationGenerator
  private conjugationEngine: ConjugationEngine
  private textProcessor: TextProcessor

  constructor() {
    this.answerChecker = new AnswerChecker()
    this.variationGenerator = new VariationGenerator()
    this.conjugationEngine = new ConjugationEngine()
    this.textProcessor = new TextProcessor()
  }

  /**
   * Converts unprocessed questions with conjugatable segments into processed questions with string segments
   */
  prepareQuestions(questions: UnprocessedQuestion[]): PracticeQuestion[] {
    return questions.map((question) => ({
      ...question,
      answers: this.processAnswers(question.answers, question.english),
    }))
  }

  /**
   * Processes raw segments into simple string arrays by handling both blank words and conjugatable words
   */
  private prepareSegments(
    segments: ConjugatableSegment[],
    isPolite: boolean,
  ): string[][] {
    return segments.map((segment) => {
      // First handle blank words
      const transformedSegment = this.transformBlankWords(segment)
      // Then handle any conjugatable words
      return this.transformConjugatableWords(transformedSegment, isPolite)
    })
  }

  private transformBlankWords(
    segment: ConjugatableSegment,
  ): string | ConjugatedWord {
    return this.isBlankableWord(segment) ? segment.word : segment
  }

  private transformConjugatableWords(
    segment: string | ConjugatedWord,
    isPolite: boolean,
  ): string[] {
    if (this.isConjugatedWord(segment)) {
      return this.conjugationEngine
        .conjugateSegments([segment], isPolite)
        .flat()
    }
    return [segment as string]
  }

  private processAnswers(
    unprocessedAnswers: UnprocessedQuestion["answers"],
    english: string,
  ): Answer[] {
    return unprocessedAnswers.flatMap((answer) => {
      const processedAnswers = this.processAnswer(answer)
      return this.variationGenerator.generateVariations({
        answers: processedAnswers,
        english,
      }).answers
    })
  }

  private processAnswer(
    answer: UnprocessedQuestion["answers"][number],
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
        }),
      )
    })
  }

  private isBlankableWord(
    segment: ConjugatableSegment,
  ): segment is BlankableWord {
    return typeof segment === "object" && "blank" in segment
  }

  private isConjugatedWord(
    segment: ConjugatableSegment,
  ): segment is ConjugatedWord {
    return typeof segment !== "string" && "word" in segment && "pos" in segment
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
    const shouldUseKana = !this.textProcessor.containsKanji(blankInputs)

    const fullInput = baseSegments.map((segment, index) => {
      if (blankInputs[index] !== undefined) {
        return blankInputs[index]
      } else {
        const text = segment
        return shouldUseKana
          ? this.textProcessor.convertToKana(text)
          : this.textProcessor.removeFurigana(text)
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
