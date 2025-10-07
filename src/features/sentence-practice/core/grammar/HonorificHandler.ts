// core/grammar/HonorificHandler.ts
import { Answer } from "../answer-processing/types"
import type { Honorific, GrammarModification } from "./types"

export class HonorificHandler {
  private readonly HONORIFICS: readonly Honorific[] = [
    "さん",
    "くん",
    "ちゃん",
    "先生[せんせい]",
    "様[さま]",
  ]

  hasHonorific(segments: string[]): boolean {
    return segments.some((segment) =>
      this.HONORIFICS.some((honorific) => segment.endsWith(honorific)),
    )
  }

  generateHonorificVariations(answer: Answer): Answer[] {
    return answer.segments.reduce<Answer[]>((variations, segment, index) => {
      if (segment === "さん") {
        this.HONORIFICS.forEach((honorific) => {
          if (honorific !== "さん") {
            const newSegments = [...answer.segments]
            newSegments[index] = honorific
            variations.push({
              ...answer,
              segments: newSegments,
              isVariation: true,
              honorificType: honorific,
              // Explicitly preserve parent metadata
              sourceAnswerIndex: answer.sourceAnswerIndex,
              pronounType: answer.pronounType,
              originalPoliteForm: answer.originalPoliteForm,
            })
          }
        })
      }
      return variations
    }, [])
  }
}
