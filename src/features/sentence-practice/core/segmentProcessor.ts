import type { SentenceSegment } from "convex/validators"
import type { ProcessedSegment } from "./types"
import { ConjugationEngine, type ConjugatedWord } from "./conjugation"
import { createRichSegment } from "./textProcessor"

const conjugationEngine = new ConjugationEngine()

function transformToConjugatedWord(
  segment: SentenceSegment,
): string | ConjugatedWord {
  if (!segment.conjugation) {
    return segment.text
  }
  return {
    word: segment.text,
    pos: segment.conjugation.pos,
    form: segment.conjugation.form ?? "normal",
    polarity: segment.conjugation.polarity,
    tense: segment.conjugation.tense,
  } as ConjugatedWord
}

// Returns every conjugated variant for the segment. Plain-text segments
// yield a single-element array.
export function conjugateSegment(
  segment: SentenceSegment,
  isPolite: boolean,
): string[] {
  const transformed = transformToConjugatedWord(segment)
  const results = conjugationEngine.conjugateSegments([transformed], isPolite)
  return results[0]
}

// Conjugates each segment, fans out the per-segment variants into complete
// sequences via cartesian product. A segment that conjugates to N forms
// multiplies the number of returned sequences by N.
export function processSegments(
  segments: SentenceSegment[],
  isPolite: boolean,
): ProcessedSegment[][] {
  return expandExplanatorySegments(segments, isPolite).flatMap(
    (expandedSegments) => processSegmentSequence(expandedSegments, isPolite),
  )
}

function processSegmentSequence(
  segments: SentenceSegment[],
  isPolite: boolean,
): ProcessedSegment[][] {
  const perSegmentOptions: ProcessedSegment[][] = segments.map(
    (segment, sourceIndex) => {
      const isBlank = segment.blank ?? false
      return conjugateSegmentInContext(
        segment,
        isPolite,
        segments,
        sourceIndex,
      ).map((text) => ({
        ...createRichSegment(text, isBlank),
        sourceIndex,
        source: segment,
      }))
    },
  )
  return cartesian(perSegmentOptions)
}

function conjugateSegmentInContext(
  segment: SentenceSegment,
  isPolite: boolean,
  segments: SentenceSegment[],
  sourceIndex: number,
): string[] {
  // Casual final か becomes ？, so drop a following sentence-ending 。.
  if (!isPolite && followsSentenceFinalKa(segments, sourceIndex)) {
    return [segment.text.replace(/^\s*。/, "")]
  }

  if (isKaQuestionSegment(segment)) {
    if (isPolite) return [segment.text]
    return [
      isSentenceFinalKa(segments, sourceIndex)
        ? segment.text.replace(/か。?$/, "？")
        : segment.text,
    ]
  }

  if (!segment.conjugation) {
    const apologyVariants = getApologyVariants(segment.text, isPolite, segments, sourceIndex)
    if (apologyVariants) return apologyVariants
  }

  // Normalize contrastive connector register only when followed by 、.
  if (!segment.conjugation) {
    const text = segment.text
    const trimmed = text.trim()

    const nextStartsWithConnectorPunctuation = startsWithConnectorPunctuation(
      segments[sourceIndex + 1]?.text,
    )
    const [source, target] = isPolite ? ["けど", "が"] : ["が", "けど"]
    const punctuation = connectorPunctuationSuffix(trimmed, source)

    if (punctuation !== undefined) {
      return [text.replace(trimmed, `${target}${punctuation}`)]
    }
    if (trimmed === source && nextStartsWithConnectorPunctuation) {
      return [text.replace(source, target)]
    }
  }

  return conjugateSegment(segment, isPolite)
}

// True when this non-conjugated segment is sentence-final question か:
// last segment ending in か/か。, ending in か。, or ending in か before next 。.
export function isSentenceFinalKa(
  segments: SentenceSegment[],
  sourceIndex: number,
): boolean {
  const segment = segments[sourceIndex]
  if (!isKaQuestionSegment(segment)) return false

  const text = segment.text.trim()
  const isLastSegment = sourceIndex === segments.length - 1
  if (isLastSegment && (text.endsWith("か") || text.endsWith("か。"))) {
    return true
  }
  if (text.endsWith("か。")) return true

  const next = segments[sourceIndex + 1]
  return text.endsWith("か") && next?.text.trim().startsWith("。") === true
}

function isKaQuestionSegment(segment: SentenceSegment | undefined): boolean {
  return !segment?.conjugation && /か。?$/.test(segment?.text.trim() ?? "")
}

function expandExplanatorySegments(
  segments: SentenceSegment[],
  isPolite: boolean,
): SentenceSegment[][] {
  const expanded: SentenceSegment[][] = [segments]

  for (let i = 0; i < segments.length - 1; i++) {
    if (!isPlainText(segments[i], "ん") || !isPlainText(segments[i + 1], "です")) {
      continue
    }

    if (isPolite) {
      expanded.push(replaceSegmentRange(segments, i, 1, [{ ...segments[i], text: "の" }]))

      if (
        isPlainText(segments[i + 2], "が") &&
        startsWithConnectorPunctuation(segments[i + 3]?.text)
      ) {
        expanded.push(
          replaceSegmentRange(segments, i, 3, [
            {
              text: "んですけど",
              blank:
                (segments[i].blank ?? false) ||
                (segments[i + 1].blank ?? false) ||
                (segments[i + 2].blank ?? false),
            },
          ]),
        )
      }
    }
  }

  return expanded
}

function isPlainText(
  segment: SentenceSegment | undefined,
  text: string,
): boolean {
  return !segment?.conjugation && segment?.text.trim() === text
}

function replaceSegmentRange(
  segments: SentenceSegment[],
  start: number,
  count: number,
  replacement: SentenceSegment[],
): SentenceSegment[] {
  return [
    ...segments.slice(0, start),
    ...replacement,
    ...segments.slice(start + count),
  ]
}

function getApologyVariants(
  text: string,
  isPolite: boolean,
  segments: SentenceSegment[],
  sourceIndex: number,
): string[] | undefined {
  if (!text.includes("すみません")) return undefined

  const nextText = segments[sourceIndex + 1]?.text.trim() ?? ""
  const protectedMatches = [...text.matchAll(/すみません/g)].some((match) => {
    const after = text.slice((match.index ?? 0) + "すみません".length).trimStart()
    return after.startsWith("が") || (after === "" && nextText.startsWith("が"))
  })
  if (protectedMatches) return undefined

  return isPolite
    ? [text, text.replaceAll("すみません", "すいません")]
    : [text.replaceAll("すみません", "ごめん")]
}

function startsWithConnectorPunctuation(text: string | undefined): boolean {
  const trimmed = text?.trim() ?? ""
  return (
    trimmed.startsWith("、") || trimmed.startsWith("…") || trimmed.startsWith("...")
  )
}

function connectorPunctuationSuffix(
  trimmed: string,
  connector: string,
): "、" | "…" | "..." | undefined {
  const match = trimmed.match(new RegExp(`^${connector}(、|…|\\.\\.\\.)$`))
  return match?.[1] as "、" | "…" | "..." | undefined
}

function followsSentenceFinalKa(
  segments: SentenceSegment[],
  sourceIndex: number,
): boolean {
  return (
    segments[sourceIndex]?.text.trim().startsWith("。") === true &&
    isSentenceFinalKa(segments, sourceIndex - 1)
  )
}

function cartesian<T>(arrays: T[][]): T[][] {
  let acc: T[][] = [[]]
  for (const options of arrays) {
    const next: T[][] = []
    for (const prefix of acc) {
      for (const item of options) {
        next.push([...prefix, item])
      }
    }
    acc = next
  }
  return acc
}
