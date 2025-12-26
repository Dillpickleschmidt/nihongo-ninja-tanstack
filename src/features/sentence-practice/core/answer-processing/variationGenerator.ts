import type { RichSegment, RichAnswer } from "../types"
import {
  convertToKana,
  removeFurigana,
  SEGMENT_SEPARATOR,
} from "../textProcessor"

const PRONOUNS = [
  "私[わたし]",
  "私[わたくし]",
  "僕[ぼく]",
  "俺[おれ]",
  "あたし",
  "うち",
]
const PLURAL_PRONOUNS = ["私[わたし]たち", "僕[ぼく]たち", "俺[おれ]たち"]
const HONORIFIC_VARIATIONS: Record<string, string[]> = {
  さん: ["くん", "ちゃん", "先生[せんせい]"],
  くん: ["さん", "ちゃん"],
  ちゃん: ["さん", "くん"],
  "先生[せんせい]": ["さん"],
}

// Escape special regex characters
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

// Replace only the Nth occurrence of a pattern
function replaceAtIndex(
  str: string,
  search: string,
  replace: string,
  occurrenceIndex: number,
): string {
  let count = 0
  return str.replace(new RegExp(escapeRegex(search), "g"), (match) =>
    count++ === occurrenceIndex ? replace : match,
  )
}

// Adds kana-only version for answers containing kanji
function generateKanaVariations(answers: RichAnswer[]): RichAnswer[] {
  const resultMap = new Map<string, RichAnswer>()

  for (const answer of answers) {
    resultMap.set(answer.original, answer)

    if (answer.original.includes("[")) {
      const newOriginal = convertToKana(answer.original)
      if (!resultMap.has(newOriginal)) {
        resultMap.set(newOriginal, {
          ...answer,
          original: newOriginal,
          plain: removeFurigana(newOriginal),
          kana: newOriginal,
          isKanaVariation: true,
        })
      }
    }
  }

  return Array.from(resultMap.values())
}

// Replaces 私/僕/俺 with alternatives (position-based)
function generatePronounVariations(answers: RichAnswer[]): RichAnswer[] {
  const resultMap = new Map<string, RichAnswer>()

  for (const answer of answers) {
    resultMap.set(answer.original, answer)
  }

  for (const answer of answers) {
    // Single pronouns
    for (const basePronoun of PRONOUNS) {
      const regex = new RegExp(escapeRegex(basePronoun), "g")
      const occurrences = (answer.original.match(regex) || []).length

      for (let i = 0; i < occurrences; i++) {
        for (const altPronoun of PRONOUNS) {
          if (altPronoun !== basePronoun) {
            const newOriginal = replaceAtIndex(
              answer.original,
              basePronoun,
              altPronoun,
              i,
            )
            if (!resultMap.has(newOriginal)) {
              resultMap.set(newOriginal, {
                ...answer,
                original: newOriginal,
                plain: removeFurigana(newOriginal),
                kana: convertToKana(newOriginal),
                pronounType: altPronoun,
              })
            }
          }
        }

        // Special case: drop "私[わたし]は" at beginning
        if (
          basePronoun === "私[わたし]" &&
          i === 0 &&
          answer.original.startsWith("私[わたし]は")
        ) {
          const newOriginal = answer.original.replace("私[わたし]は", "")
          if (newOriginal !== answer.original && !resultMap.has(newOriginal)) {
            resultMap.set(newOriginal, {
              ...answer,
              original: newOriginal,
              plain: removeFurigana(newOriginal),
              kana: convertToKana(newOriginal),
              pronounType: "dropped",
            })
          }
        }
      }
    }

    // Plural pronouns (same pattern)
    for (const basePronoun of PLURAL_PRONOUNS) {
      const regex = new RegExp(escapeRegex(basePronoun), "g")
      const occurrences = (answer.original.match(regex) || []).length

      for (let i = 0; i < occurrences; i++) {
        for (const altPronoun of PLURAL_PRONOUNS) {
          if (altPronoun !== basePronoun) {
            const newOriginal = replaceAtIndex(
              answer.original,
              basePronoun,
              altPronoun,
              i,
            )
            if (!resultMap.has(newOriginal)) {
              resultMap.set(newOriginal, {
                ...answer,
                original: newOriginal,
                plain: removeFurigana(newOriginal),
                kana: convertToKana(newOriginal),
                pronounType: altPronoun,
              })
            }
          }
        }
      }
    }
  }

  return Array.from(resultMap.values())
}

// Replaces さん/くん/ちゃん with alternatives (position-based)
function generateHonorificVariations(answers: RichAnswer[]): RichAnswer[] {
  const resultMap = new Map<string, RichAnswer>()

  for (const answer of answers) {
    resultMap.set(answer.original, answer)
  }

  for (const answer of answers) {
    for (const [baseHonorific, alternatives] of Object.entries(
      HONORIFIC_VARIATIONS,
    )) {
      const regex = new RegExp(escapeRegex(baseHonorific), "g")
      const occurrences = (answer.original.match(regex) || []).length

      for (let i = 0; i < occurrences; i++) {
        for (const altHonorific of alternatives) {
          const newOriginal = replaceAtIndex(
            answer.original,
            baseHonorific,
            altHonorific,
            i,
          )
          if (!resultMap.has(newOriginal)) {
            resultMap.set(newOriginal, {
              ...answer,
              original: newOriginal,
              plain: removeFurigana(newOriginal),
              kana: convertToKana(newOriginal),
              honorificType: altHonorific,
            })
          }
        }
      }
    }
  }

  return Array.from(resultMap.values())
}

export function generateValidAnswers(
  segments: RichSegment[],
  sourceAnswerIndex: number,
  isPoliteForm: boolean,
): RichAnswer[] {
  const baseAnswerString = segments
    .map((s) => s.original)
    .join(SEGMENT_SEPARATOR)
  if (baseAnswerString === "") {
    return [
      {
        original: "",
        plain: "",
        kana: "",
        sourceAnswerIndex,
        originalPoliteForm: isPoliteForm,
        pronounType: "none",
        honorificType: "none",
        isKanaVariation: false,
      },
    ]
  }

  const baseAnswer: RichAnswer = {
    original: baseAnswerString,
    plain: removeFurigana(baseAnswerString),
    kana: convertToKana(baseAnswerString),
    sourceAnswerIndex,
    originalPoliteForm: isPoliteForm,
    pronounType: "none",
    honorificType: "none",
    isKanaVariation: false,
  }

  let variations = [baseAnswer]
  variations = generatePronounVariations(variations)
  variations = generateHonorificVariations(variations)
  variations = generateKanaVariations(variations)

  return variations
}
