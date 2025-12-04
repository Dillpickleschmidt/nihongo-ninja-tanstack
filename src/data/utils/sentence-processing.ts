// Sentence processing for practice modes
import type { ExampleSentence } from "@/data/types"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { convertFuriganaToRubyHtml, parseFuriganaString } from "@/data/utils/text/furigana"

export type ProcessedSentencePart =
  | { type: "html"; content: string }
  | { type: "input"; index: number }

export type ProcessedSentenceResult = {
  displayParts: ProcessedSentencePart[]
  inputValidationTargets: string[][]
}

/**
 * Process example sentence parts for practice modes
 */
export function getExampleSentenceParts(
  sentence: ExampleSentence,
  mode: PracticeMode,
): ProcessedSentenceResult {
  const displayParts: ProcessedSentencePart[] = []
  const inputValidationTargets: string[][] = []
  let inputCount = 0

  const parts = mode === "spellings" ? sentence.japanese : sentence.english

  parts.forEach((part, index) => {
    if (typeof part === "string") {
      // If in 'spellings' mode, convertFuriganaToRubyHtml will now strip spaces for us.
      // If in 'meanings' mode, the 'part' is already English and spaces should be preserved.
      const htmlContent =
        mode === "spellings" ? convertFuriganaToRubyHtml(part) : part

      displayParts.push({
        type: "html",
        content: htmlContent, // Use the potentially modified content
      })
    } else {
      // This is the target word's location for the input field.
      displayParts.push({ type: "input", index: inputCount })

      // Extract the validation targets from the JAPANESE side of the example sentence.
      const japaneseTargetPart = sentence.japanese[index]

      if (
        typeof japaneseTargetPart !== "string" &&
        japaneseTargetPart &&
        japaneseTargetPart.t
      ) {
        // Use the new parseFuriganaString helper
        const { base, kana } = parseFuriganaString(japaneseTargetPart.t)

        // Use a Set to ensure unique values
        const targets = new Set<string>()
        targets.add(base)
        if (base !== kana) {
          targets.add(kana)
        }
        inputValidationTargets.push(Array.from(targets))
      } else {
        // Fallback for missing target (should ideally not happen if structure is consistent)
        inputValidationTargets.push([])
      }
      inputCount++
    }
  })

  return { displayParts, inputValidationTargets }
}
