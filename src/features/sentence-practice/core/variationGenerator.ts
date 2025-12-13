import type { RichSegment, RichAnswer } from "./types"
import { convertToKana, removeFurigana, SEGMENT_SEPARATOR } from "./textProcessor"

const PRONOUNS = ["私[わたし]", "私[わたくし]", "僕[ぼく]", "俺[おれ]", "あたし", "うち"]
const PLURAL_PRONOUNS = ["私[わたし]たち", "僕[ぼく]たち", "俺[おれ]たち"]
const HONORIFIC_VARIATIONS: Record<string, string[]> = {
  さん: ["くん", "ちゃん", "先生[せんせい]"],
  くん: ["さん", "ちゃん"],
  ちゃん: ["さん", "くん"],
  "先生[せんせい]": ["さん"],
}

// Adds kana-only version for answers containing kanji
export function generateKanaVariations(answers: string[]): string[] {
  const result = new Set<string>(answers)
  for (const answer of answers) {
    if (answer.includes("[")) {
      result.add(convertToKana(answer))
    }
  }
  return Array.from(result)
}

// Replaces 私/僕/俺 with alternatives
export function generatePronounVariations(answers: string[]): string[] {
  const result = new Set<string>(answers)

  for (const answer of answers) {
    for (const pronoun of PRONOUNS) {
      if (answer.includes(pronoun + "は")) {
        for (const altPronoun of PRONOUNS) {
          if (altPronoun !== pronoun) {
            result.add(answer.replace(pronoun + "は", altPronoun + "は"))
          }
        }
        if (pronoun === "私[わたし]") {
          result.add(answer.replace(pronoun + "は", ""))
        }
      }
    }

    for (const pronoun of PLURAL_PRONOUNS) {
      if (answer.includes(pronoun + "は")) {
        for (const altPronoun of PLURAL_PRONOUNS) {
          if (altPronoun !== pronoun) {
            result.add(answer.replace(pronoun + "は", altPronoun + "は"))
          }
        }
      }
    }
  }

  return Array.from(result)
}

// Replaces さん/くん/ちゃん with alternatives
export function generateHonorificVariations(answers: string[]): string[] {
  const result = new Set<string>(answers)
  for (const answer of answers) {
    for (const [honorific, variations] of Object.entries(HONORIFIC_VARIATIONS)) {
      if (answer.includes(honorific)) {
        for (const altHonorific of variations) {
          result.add(answer.replace(honorific, altHonorific))
        }
      }
    }
  }
  return Array.from(result)
}

export function generateValidAnswers(segments: RichSegment[]): RichAnswer[] {
  const baseAnswer = segments.map((s) => s.original).join(SEGMENT_SEPARATOR)
  if (baseAnswer === "") return [{ original: "", plain: "", kana: "" }]

  let answers = [baseAnswer]
  answers = generatePronounVariations(answers)
  answers = generateHonorificVariations(answers)
  answers = generateKanaVariations(answers)

  // Convert each variation to RichAnswer with pre-computed forms
  return answers.map((original) => ({
    original,
    plain: removeFurigana(original),
    kana: convertToKana(original),
  }))
}
