import { createKanjiFuriganaGroupRegex } from "@/data/utils/text/furigana"
import type { PreparedAnswerForMatching, RichAnswer } from "../types"
import {
  createVisibleTextWithMap,
  normalizeWithPositions,
  removeFurigana,
} from "../textProcessor"

export function prepareAnswersForMatching(
  validAnswers: RichAnswer[],
): PreparedAnswerForMatching[] {
  return validAnswers.map((answer) => ({
    answer,
    normalizedPlain: normalizeWithPositions(answer.plain).text,
    normalizedKana: normalizeWithPositions(answer.kana).text,
    visiblePlain: createVisibleTextWithMap(answer.plain).text,
    plainToVisible: createVisibleTextWithMap(answer.plain).normalizedToVisible,
    kanaToPlainVisible: createNormalizedKanaToVisiblePlainMapper(
      answer.original,
      answer.kana,
    ),
  }))
}

function createNormalizedKanaToVisiblePlainMapper(
  original: string,
  kanaText: string,
): (pos: number) => number {
  const { normalizedToVisible: normalizedKanaToVisible } =
    createVisibleTextWithMap(kanaText)
  const visibleKanaToPlain = buildVisibleKanaToPlainBoundaryMap(original)

  return (pos: number) => {
    const visibleKanaPos = normalizedKanaToVisible(pos)
    return visibleKanaToPlain[visibleKanaPos] ?? visibleKanaToPlain.at(-1) ?? 0
  }
}

function buildVisibleKanaToPlainBoundaryMap(original: string): number[] {
  const boundaryMap: number[] = [0]
  const furiganaRegex = new RegExp(
    `^${createKanjiFuriganaGroupRegex("").source}`,
  )
  let visibleKanaPos = 0
  let visiblePlainPos = 0
  let index = 0

  while (index < original.length) {
    const furiganaMatch = original.substring(index).match(furiganaRegex)

    if (furiganaMatch) {
      const baseText = removeFurigana(furiganaMatch[0]).replace(/\s+/g, "")
      const kanaReading = furiganaMatch[2].replace(/\s+/g, "")

      for (let step = 1; step <= kanaReading.length; step++) {
        const proportionalPlain = Math.round(
          (baseText.length * step) / kanaReading.length,
        )
        boundaryMap[visibleKanaPos + step] = visiblePlainPos + proportionalPlain
      }

      visibleKanaPos += kanaReading.length
      visiblePlainPos += baseText.length
      index += furiganaMatch[0].length
      continue
    }

    const char = original[index]
    index += 1

    if (/\s/.test(char) || char === "\x1F" || char === "[" || char === "]") {
      continue
    }

    visibleKanaPos += 1
    visiblePlainPos += 1
    boundaryMap[visibleKanaPos] = visiblePlainPos
  }

  return boundaryMap
}
