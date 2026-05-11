import type { SentenceAnswerToken } from "../../../../../../convex/validators"
import type { ProcessedQuestion, RichSegment } from "../../../core/types"
import { containsKanji } from "@/data/utils/text/japanese"
import { createKanjiFuriganaGroupRegex } from "@/data/utils/text/furigana"
import { isIgnoredForAnswerMatching } from "../../../core/textProcessor"

const FURIGANA_AT_CURRENT_POSITION = new RegExp(
  `^${createKanjiFuriganaGroupRegex("").source}`,
)

export type UserInputPosDisplayItem =
  | {
      kind: "token"
      text: string
      pos: string[]
    }
  | {
      kind: "incomplete"
      text: string
    }

export function getUserInputPosDisplayItems(
  originalInput: string,
  question: ProcessedQuestion | undefined,
): UserInputPosDisplayItem[] {
  if (!question || !originalInput.trim()) return []

  const answerIndex = findBestAnswerIndex(originalInput, question.answers)
  const answer = question.answers[answerIndex]
  const tokens = question.preparedAnswerTokens[answerIndex]
  const input = originalInput.trim()
  const answerText = getAnswerText(answer)

  return buildDisplayItems(input, answerText, tokens)
}

function findBestAnswerIndex(
  input: string,
  answers: RichSegment[][],
): number {
  let bestIndex = 0
  let bestScore = -1

  for (let index = 0; index < answers.length; index++) {
    const answer = answers[index]
    const targetText = getTargetText(input, answer)
    const score = calculateMatchScore(input, targetText)
    if (score > bestScore) {
      bestScore = score
      bestIndex = index
    }
  }

  return bestIndex
}

function buildDisplayItems(
  input: string,
  answerText: AnswerText,
  tokens: SentenceAnswerToken[],
): UserInputPosDisplayItem[] {
  const items: UserInputPosDisplayItem[] = []
  const usesKanji = containsKanji(input)
  const targetText = usesKanji ? answerText.plain : answerText.kana
  let inputPos = 0
  let plainPos = 0

  for (const token of tokens) {
    if (inputPos >= input.length) break

    const tokenStart = answerText.plain.indexOf(token.text, plainPos)
    if (tokenStart === -1) return appendIncomplete(items, input, inputPos)

    const tokenEnd = tokenStart + token.text.length
    const targetStart = usesKanji ? tokenStart : answerText.plainToKana[tokenStart]
    const targetEnd = usesKanji ? tokenEnd : answerText.plainToKana[tokenEnd]
    const tokenTargetText = targetText.slice(targetStart, targetEnd)
    const tokenMatchText = normalizeForInputMatching(tokenTargetText)

    if (!tokenMatchText) {
      plainPos = tokenEnd
      continue
    }

    if (input.startsWith(tokenMatchText, inputPos)) {
      items.push({
        kind: "token",
        text: input.slice(inputPos, inputPos + tokenMatchText.length),
        pos: token.pos,
      })
      inputPos += tokenMatchText.length
      plainPos = tokenEnd
      continue
    }

    if (hasSharedPrefix(input.slice(inputPos), tokenMatchText)) {
      return appendIncomplete(items, input, inputPos)
    }

    return appendIncomplete(items, input, inputPos)
  }

  if (inputPos < input.length) return appendIncomplete(items, input, inputPos)

  return items
}

function getTargetText(input: string, answer: RichSegment[]): string {
  const field = containsKanji(input) ? "plain" : "kana"
  return answer.map((segment) => segment[field]).join("")
}

function appendIncomplete(
  items: UserInputPosDisplayItem[],
  input: string,
  start: number,
): UserInputPosDisplayItem[] {
  const text = input.slice(start)
  if (text) items.push({ kind: "incomplete", text })
  return items
}

interface AnswerText {
  plain: string
  kana: string
  plainToKana: number[]
}

function getAnswerText(answer: RichSegment[]): AnswerText {
  const plainToKana: number[] = []
  let plain = ""
  let kana = ""

  for (const segment of answer) {
    const segmentMap = buildPlainToKanaMap(segment.original)
    const plainOffset = plain.length
    const kanaOffset = kana.length

    plain += segment.plain
    kana += segment.kana

    for (let i = 0; i < segmentMap.length; i++) {
      plainToKana[plainOffset + i] = kanaOffset + segmentMap[i]
    }
  }

  return { plain, kana, plainToKana }
}

function buildPlainToKanaMap(original: string): number[] {
  const plainToKana: number[] = [0]
  let plainPos = 0
  let kanaPos = 0
  let index = 0

  while (index < original.length) {
    const char = original[index]
    if (/\s/.test(char)) {
      index++
      continue
    }

    const match = original.slice(index).match(FURIGANA_AT_CURRENT_POSITION)
    if (match) {
      const kanjiText = match[1]
      const kanaText = match[2]
      for (let i = 1; i <= kanjiText.length; i++) {
        plainToKana[plainPos + i] =
          kanaPos + Math.round((kanaText.length * i) / kanjiText.length)
      }
      plainPos += kanjiText.length
      kanaPos += kanaText.length
      index += match[0].length
      continue
    }

    plainPos++
    kanaPos++
    plainToKana[plainPos] = kanaPos
    index++
  }

  return plainToKana
}

function normalizeForInputMatching(text: string): string {
  const normalized = text.trim().normalize("NFKC")
  let result = ""

  for (let i = 0; i < normalized.length; i++) {
    if (!isIgnoredForAnswerMatching(normalized[i], i, normalized)) {
      result += normalized[i]
    }
  }

  return result
}

function hasSharedPrefix(a: string, b: string): boolean {
  return a.length > 0 && b.length > 0 && a[0] === b[0]
}

function calculateMatchScore(input: string, target: string): number {
  const sharedPrefixLength = getSharedPrefixLength(input, target)
  const lengthSimilarity =
    1 - Math.abs(input.length - target.length) / Math.max(input.length, target.length, 1)
  return sharedPrefixLength * 10 + lengthSimilarity
}

function getSharedPrefixLength(a: string, b: string): number {
  const length = Math.min(a.length, b.length)
  let index = 0
  while (index < length && a[index] === b[index]) index++
  return index
}
