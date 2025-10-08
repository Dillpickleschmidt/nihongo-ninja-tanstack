// core/grammar/HonorificHandler.ts
import { Answer } from "../answer-processing/types"
import type { Honorific, GrammarModification } from "./types"

export class HonorificHandler {
  private readonly HONORIFIC_VARIATIONS: Record<
    Honorific,
    readonly Honorific[]
  > = {
    さん: ["くん", "ちゃん", "先生[せんせい]"],
    くん: ["さん", "ちゃん"],
    ちゃん: ["さん", "くん"],
    "先生[せんせい]": ["さん"],
    "様[さま]": [],
  }

  // Cache keys array for performance
  private readonly HONORIFIC_KEYS = Object.keys(
    this.HONORIFIC_VARIATIONS,
  ) as readonly Honorific[]

  findHonorific(segments: string[]): string | undefined {
    return segments.find((segment) =>
      this.HONORIFIC_KEYS.includes(segment as Honorific),
    )
  }

  generateHonorificVariations(answer: Answer): Answer[] {
    // Find all honorific positions and their possible variations
    const honorificPositions: Array<{
      index: number
      original: Honorific
      variations: readonly Honorific[]
    }> = []

    answer.segments.forEach((segment, index) => {
      const validVariations = this.HONORIFIC_VARIATIONS[segment as Honorific]
      if (validVariations) {
        honorificPositions.push({
          index,
          original: segment as Honorific,
          variations: validVariations,
        })
      }
    })

    if (honorificPositions.length === 0) {
      return []
    }

    // Generate cartesian product, maintaining index order and skipping original
    const generateCombinations = (
      positions: typeof honorificPositions,
      isOriginalPath: boolean,
    ): Array<Map<number, Honorific>> => {
      if (positions.length === 0) {
        // Skip if this is the all-original combination
        return isOriginalPath ? [] : [new Map()]
      }

      const [first, ...rest] = positions
      const result: Array<Map<number, Honorific>> = []

      // Try original first (to maintain index order in Map)
      const originalCombos = generateCombinations(rest, isOriginalPath)
      for (const restCombo of originalCombos) {
        const combo = new Map()
        combo.set(first.index, first.original)
        for (const [k, v] of restCombo) combo.set(k, v)
        result.push(combo)
      }

      // Try variations (not original path anymore)
      for (const variation of first.variations) {
        const variationCombos = generateCombinations(rest, false)
        for (const restCombo of variationCombos) {
          const combo = new Map()
          combo.set(first.index, variation)
          for (const [k, v] of restCombo) combo.set(k, v)
          result.push(combo)
        }
      }

      return result
    }

    const combinations = generateCombinations(honorificPositions, true)

    // Convert combinations to Answer variations
    const variations: Answer[] = []

    for (const combo of combinations) {
      const newSegments = [...answer.segments]
      const honorificTypes: string[] = []

      // Map iteration order is insertion order, which we maintained during generation
      combo.forEach((honorific, index) => {
        newSegments[index] = honorific
        honorificTypes.push(honorific)
      })

      variations.push({
        ...answer,
        segments: newSegments,
        isVariation: true,
        honorificType: honorificTypes.join("+"),
        // Explicitly preserve parent metadata
        sourceAnswerIndex: answer.sourceAnswerIndex,
        pronounType: answer.pronounType,
        originalPoliteForm: answer.originalPoliteForm,
      })
    }

    return variations
  }
}
