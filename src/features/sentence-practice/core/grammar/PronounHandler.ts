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

  private findPronounIndices(segments: string[]): number[] {
    const indices: number[] = []
    const allPronouns = [...this.PRONOUNS, ...this.PLURAL_PRONOUNS]

    segments.forEach((segment, index) => {
      if (allPronouns.includes(segment as SinglePronoun | PluralPronoun)) {
        indices.push(index)
      }
    })

    return indices
  }

  generatePronounVariations(answer: Answer): Answer[] {
    const pronounIndices = this.findPronounIndices(answer.segments)

    if (pronounIndices.length === 0) {
      return []
    }

    const variations: Answer[] = []

    // For each pronoun found, generate variations with all other pronouns
    pronounIndices.forEach((index) => {
      this.PRONOUNS.forEach((pronoun) => {
        // Skip if it's the same pronoun
        if (pronoun === answer.segments[index]) {
          return
        }

        const newSegments = [...answer.segments]
        newSegments[index] = pronoun

        variations.push({
          ...answer,
          segments: newSegments,
          isVariation: true,
          pronounType: pronoun,
          // Explicitly preserve parent metadata
          sourceAnswerIndex: answer.sourceAnswerIndex,
          honorificType: answer.honorificType,
          originalPoliteForm: answer.originalPoliteForm,
        })
      })

      // Special case: if 私[わたし] at index 0 with は at index 1, allow dropping both
      if (
        index === 0 &&
        answer.segments[0] === "私[わたし]" &&
        answer.segments[1] === "は"
      ) {
        const newSegments = answer.segments.filter((_, i) => i !== 0 && i !== 1)

        variations.push({
          ...answer,
          segments: newSegments,
          isVariation: true,
          pronounType: "dropped",
          // Explicitly preserve parent metadata
          sourceAnswerIndex: answer.sourceAnswerIndex,
          honorificType: answer.honorificType,
          originalPoliteForm: answer.originalPoliteForm,
        })
      }
    })

    return variations
  }

  generatePluralPronounVariations(answer: Answer): Answer[] {
    const pronounIndices = this.findPronounIndices(answer.segments)

    if (pronounIndices.length === 0) {
      return []
    }

    const variations: Answer[] = []

    // For each pronoun found, generate variations with all plural pronouns
    pronounIndices.forEach((index) => {
      this.PLURAL_PRONOUNS.forEach((pronoun) => {
        // Skip if it's the same pronoun
        if (pronoun === answer.segments[index]) {
          return
        }

        const newSegments = [...answer.segments]
        newSegments[index] = pronoun

        variations.push({
          ...answer,
          segments: newSegments,
          isVariation: true,
          pronounType: pronoun,
          // Explicitly preserve parent metadata
          sourceAnswerIndex: answer.sourceAnswerIndex,
          honorificType: answer.honorificType,
          originalPoliteForm: answer.originalPoliteForm,
        })
      })
    })

    return variations
  }
}
