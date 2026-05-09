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

// Kinship-term groups. A fluent speaker interchangeably uses 母 / お母さん,
// 父 / お父さん, etc. depending on register and context. Each inner array
// is a mutual-swap group — for any source containing one of these exact
// furigana-annotated forms, generate variants that swap it for each
// other form in the group. Source data must use the furigana form
// (e.g. `母[はは]`, `お 母[かあ]さん`) for the swap to fire.
const KINSHIP_GROUPS: string[][] = [
  ["母[はは]", "お 母[かあ]さん"],
  ["父[ちち]", "お 父[とう]さん"],
  ["兄[あに]", "お 兄[にい]さん"],
  ["姉[あね]", "お 姉[ねえ]さん"],
  ["祖父[そふ]", "おじいさん", "おじいちゃん"],
  ["祖母[そぼ]", "おばあさん", "おばあちゃん"],
]

function generateKinshipVariations(answers: RichAnswer[]): RichAnswer[] {
  const resultMap = new Map<string, RichAnswer>()

  for (const answer of answers) {
    resultMap.set(answer.original, answer)
  }

  for (const answer of answers) {
    for (const group of KINSHIP_GROUPS) {
      for (const baseForm of group) {
        const regex = new RegExp(escapeRegex(baseForm), "g")
        const occurrences = (answer.original.match(regex) || []).length

        for (let i = 0; i < occurrences; i++) {
          for (const altForm of group) {
            if (altForm === baseForm) continue
            const newOriginal = replaceAtIndex(
              answer.original,
              baseForm,
              altForm,
              i,
            )
            if (!resultMap.has(newOriginal)) {
              resultMap.set(newOriginal, {
                ...answer,
                original: newOriginal,
                plain: removeFurigana(newOriginal),
                kana: convertToKana(newOriginal),
              })
            }
          }
        }
      }
    }
  }

  return Array.from(resultMap.values())
}

// Casual 〜ている → 〜てる contractions. Fires only when te-form
// (〜て or 〜で) ends one segment and an いる-auxiliary form begins the
// next; the segment separator is consumed. Single-segment 〜ている text
// is intentionally not contracted — split such data into te-form +
// いる-auxiliary segments. ます-polite forms (てます/てました/てません) are
// not included.
const TE_IRU_CONTRACTIONS: Array<[from: string, to: string]> = [
  ["て" + SEGMENT_SEPARATOR + "いなかった", "てなかった"],
  ["て" + SEGMENT_SEPARATOR + "いない", "てない"],
  ["て" + SEGMENT_SEPARATOR + "いた", "てた"],
  ["て" + SEGMENT_SEPARATOR + "いる", "てる"],
  ["で" + SEGMENT_SEPARATOR + "いなかった", "でなかった"],
  ["で" + SEGMENT_SEPARATOR + "いない", "でない"],
  ["で" + SEGMENT_SEPARATOR + "いた", "でた"],
  ["で" + SEGMENT_SEPARATOR + "いる", "でる"],
]

function contractTeIru(s: string): string {
  let out = s
  for (const [from, to] of TE_IRU_CONTRACTIONS) {
    out = out.split(from).join(to)
  }
  return out
}

// Adds a 〜てる/〜てた/〜てない variant for each answer containing a
// 〜ている-family form. Pure orthographic substitution — the furigana
// brackets around preceding kanji are untouched.
function generateTeIruContractions(answers: RichAnswer[]): RichAnswer[] {
  const resultMap = new Map<string, RichAnswer>()

  for (const answer of answers) {
    resultMap.set(answer.original, answer)
  }

  for (const answer of answers) {
    const contracted = contractTeIru(answer.original)
    if (contracted !== answer.original && !resultMap.has(contracted)) {
      resultMap.set(contracted, {
        ...answer,
        original: contracted,
        plain: removeFurigana(contracted),
        kana: convertToKana(contracted),
      })
    }
  }

  return Array.from(resultMap.values())
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

// Some forms contain さん/ちゃん as part of a fixed word or expression rather
// than as a swappable person-name honorific. Swapping those endings would
// produce nonsense like お父くん, 赤さん, or 皆くん, so skip these positions
// during honorific variation.
const HONORIFIC_SWAP_PROTECTED_FORMS = [
  ...KINSHIP_GROUPS.flat(),
  "赤[あか]ちゃん",
  "皆[みな]さん",
]

function isInHonorificSwapProtectedForm(
  text: string,
  honorific: string,
  honorificStart: number,
): boolean {
  for (const form of HONORIFIC_SWAP_PROTECTED_FORMS) {
    const offset = form.indexOf(honorific)
    if (offset < 0) continue
    const formStart = honorificStart - offset
    if (formStart < 0) continue
    if (text.substr(formStart, form.length) === form) return true
  }
  return false
}

// Enumerate all character positions of `needle` in `haystack`.
function allIndexesOf(haystack: string, needle: string): number[] {
  const out: number[] = []
  let from = 0
  while (true) {
    const idx = haystack.indexOf(needle, from)
    if (idx < 0) break
    out.push(idx)
    from = idx + needle.length
  }
  return out
}

function isInsideFuriganaReading(text: string, index: number): boolean {
  const lastOpen = text.lastIndexOf("[", index)
  const lastClose = text.lastIndexOf("]", index)
  return lastOpen > lastClose
}

// Replaces さん/くん/ちゃん with alternatives (position-based), skipping
// occurrences that are part of a kinship-term form or furigana reading.
function generateHonorificVariations(answers: RichAnswer[]): RichAnswer[] {
  const resultMap = new Map<string, RichAnswer>()

  for (const answer of answers) {
    resultMap.set(answer.original, answer)
  }

  for (const answer of answers) {
    for (const [baseHonorific, alternatives] of Object.entries(
      HONORIFIC_VARIATIONS,
    )) {
      const positions = allIndexesOf(answer.original, baseHonorific)

      for (let i = 0; i < positions.length; i++) {
        if (
          isInsideFuriganaReading(answer.original, positions[i]) ||
          isInHonorificSwapProtectedForm(
            answer.original,
            baseHonorific,
            positions[i],
          )
        ) {
          continue
        }
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
  variations = generateKinshipVariations(variations)
  variations = generateTeIruContractions(variations)
  variations = generateKanaVariations(variations)

  return variations
}
