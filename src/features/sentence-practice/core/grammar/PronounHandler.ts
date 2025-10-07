// core/grammar/PronounHandler.ts
import { Answer } from "../answer-processing/types"
import type { SinglePronoun, PluralPronoun } from "./types"

export class PronounHandler {
  private readonly PRONOUNS: readonly SinglePronoun[] = [
    "私[わたし]",
    "私[わたくし]",
    "僕[ぼく]",
    "俺[おれ]",
    "あたし",
    "うち",
  ]

  private readonly PLURAL_PRONOUNS: readonly PluralPronoun[] = [
    "私たち[わたしたち]",
    "僕たち[ぼくたち]",
    "俺たち[おれたち]",
  ]

  generatePronounVariations(answer: Answer): Answer[] {
    return this.PRONOUNS.map((pronoun) => {
      const newSegments = answer.segments.map((segment, index) => {
        // Replace the first occurrence of a pronoun
        if (index === 0 && this.PRONOUNS.includes(segment as SinglePronoun)) {
          return pronoun
        }
        return segment
      })

      return {
        ...answer,
        segments: newSegments,
        isVariation: true,
        pronounType: pronoun + "は",
        // Explicitly preserve parent metadata
        sourceAnswerIndex: answer.sourceAnswerIndex,
        honorificType: answer.honorificType,
        originalPoliteForm: answer.originalPoliteForm,
      }
    })
  }

  generatePluralPronounVariations(answer: Answer): Answer[] {
    return this.PLURAL_PRONOUNS.map((pronoun) => {
      const newSegments = answer.segments.map((segment, index) => {
        // Replace the first occurrence of a pronoun
        if (index === 0 && this.PRONOUNS.includes(segment as SinglePronoun)) {
          return pronoun
        }
        return segment
      })

      return {
        ...answer,
        segments: newSegments,
        isVariation: true,
        pronounType: pronoun + "は",
        // Explicitly preserve parent metadata
        sourceAnswerIndex: answer.sourceAnswerIndex,
        honorificType: answer.honorificType,
        originalPoliteForm: answer.originalPoliteForm,
      }
    })
  }
}
