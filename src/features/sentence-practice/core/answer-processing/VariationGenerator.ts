// core/answer-processing/VariationGenerator.ts
import type { Answer, PracticeQuestion } from "./types"
import { HonorificHandler } from "../grammar/HonorificHandler"
import { PronounHandler } from "../grammar/PronounHandler"
import { TextProcessor } from "../text/TextProcessor"

export class VariationGenerator {
  private honorificHandler: HonorificHandler
  private pronounHandler: PronounHandler
  private textProcessor: TextProcessor

  constructor() {
    this.honorificHandler = new HonorificHandler()
    this.pronounHandler = new PronounHandler()
    this.textProcessor = new TextProcessor()
  }

  generateVariations(question: PracticeQuestion): PracticeQuestion {
    if (this.shouldIncludeFirstPerson(question.english)) {
      // Keep original answers and add versions with pronouns
      const originalAnswers = question.answers
      const answersWithPronouns = question.answers.map((answer) => ({
        ...answer,
        segments: ["私[わたし]", "は", ...answer.segments],
        isVariation: true,
        pronounType: "私[わたし]は",
      }))

      question.answers = [...originalAnswers, ...answersWithPronouns]
    }

    return {
      ...question,
      answers: this.generateAnswerVariations(question),
    }
  }

  private generateAnswerVariations(question: PracticeQuestion): Answer[] {
    const includeFirstPerson = this.shouldIncludeFirstPerson(question.english)
    const includeFirstPersonPlural = this.shouldIncludeFirstPersonPlural(
      question.english,
    )

    const uniqueVariations = new Map<string, Answer>()
    const addUniqueVariation = (variation: Answer) => {
      const key = variation.segments.join("|")
      if (!uniqueVariations.has(key)) {
        uniqueVariations.set(key, variation)
      }
    }

    question.answers.forEach((answer) => {
      // Detect if original answer has an honorific
      const hasHonorific = this.honorificHandler.hasHonorific(answer.segments)
      const honorificType = hasHonorific
        ? answer.segments.find((seg) => seg === "さん") || undefined
        : undefined

      // Add the original answer
      addUniqueVariation({
        ...answer,
        isVariation: false,
        honorificType,
      })

      // Start with pronoun variations if applicable
      let baseVariations: Answer[] = [answer]

      if (includeFirstPerson) {
        baseVariations = baseVariations.concat(
          this.pronounHandler.generatePronounVariations(answer),
        )
      }

      if (includeFirstPersonPlural) {
        baseVariations = baseVariations.concat(
          this.pronounHandler.generatePluralPronounVariations(answer),
        )
      }

      // For each base variation (original + pronoun variations),
      // generate all other types of variations
      baseVariations.forEach((baseVariation) => {
        addUniqueVariation(baseVariation)

        // Generate honorific variations if applicable
        if (this.honorificHandler.hasHonorific(baseVariation.segments)) {
          this.honorificHandler
            .generateHonorificVariations(baseVariation)
            .forEach((honorificVariation) => {
              addUniqueVariation(honorificVariation)

              // Apply kana variations to honorific variations
              this.generateKanaVariations(honorificVariation).forEach(
                addUniqueVariation,
              )
            })
        }

        // Generate kana variations for the base variation
        this.generateKanaVariations(baseVariation).forEach(addUniqueVariation)
      })
    })

    return Array.from(uniqueVariations.values())
  }

  private generateKanaVariations(answer: Answer): Answer[] {
    const variations: Answer[] = []
    const hasKanji = answer.segments.some((segment) => segment.includes("["))

    if (hasKanji) {
      const kanaSegments = answer.segments.map((segment) =>
        this.textProcessor.convertToKana(segment),
      )

      variations.push({
        ...answer,
        segments: kanaSegments,
        isVariation: true,
        isKanaVariation: true,
        // Preserve all parent metadata
        sourceAnswerIndex: answer.sourceAnswerIndex,
        pronounType: answer.pronounType,
        honorificType: answer.honorificType,
        originalPoliteForm: answer.originalPoliteForm,
      })
    }

    return variations
  }

  private shouldIncludeFirstPerson(english: string): boolean {
    return english.startsWith("I ") && !english.startsWith("I heard")
  }

  private shouldIncludeFirstPersonPlural(english: string): boolean {
    return english.startsWith("We ")
  }
}
