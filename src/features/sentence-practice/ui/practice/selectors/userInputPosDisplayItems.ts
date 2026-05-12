import type { SentenceAnswerToken } from "../../../../../../convex/validators"
import type { ProcessedQuestion, RichAnswer } from "../../../core/types"
import { containsKanji } from "@/data/utils/text/japanese"
import { createKanjiFuriganaGroupRegex } from "@/data/utils/text/furigana"
import {
  isIgnoredForAnswerMatching,
  isNeutralPosText,
  SEGMENT_SEPARATOR,
} from "../../../core/textProcessor"

const FURIGANA_AT_CURRENT_POSITION = new RegExp(
  `^${createKanjiFuriganaGroupRegex("").source}`,
)

export type UserInputPosDisplayItem =
  | {
      kind: "token"
      text: string
      pos: string
    }
  | {
      kind: "neutral"
      text: string
    }

export function getUserInputPosDisplayItems(
  originalInput: string,
  question: ProcessedQuestion | undefined,
): UserInputPosDisplayItem[] {
  if (!question || !originalInput.trim()) return []

  const answerIndex = getBestCanonicalAnswerIndex(originalInput, question)
  const answer = question.canonicalAnswers[answerIndex]
  const tokens = question.canonicalAnswerTokens[answerIndex]
  if (!answer || !tokens) return []

  const input = originalInput.trim()
  const answerText = getAnswerText(answer)

  return buildDisplayItems(input, answerText, tokens)
}

export function getBestCanonicalAnswerIndex(
  input: string,
  question: ProcessedQuestion,
): number {
  if (!input.trim()) return 0
  return findBestAnswerIndex(input, question.canonicalAnswers)
}

function findBestAnswerIndex(input: string, answers: RichAnswer[]): number {
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
    inputPos = appendIgnoredInput(items, input, inputPos)
    if (inputPos >= input.length) break

    const tokenStart = answerText.plain.indexOf(token.t, plainPos)
    if (tokenStart === -1) return appendNeutral(items, input, inputPos)

    const tokenEnd = tokenStart + token.t.length
    const targetStart = usesKanji
      ? tokenStart
      : answerText.plainToKana[tokenStart]
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
        text: token.t,
        pos: token.p,
      })
      inputPos += tokenMatchText.length
      plainPos = tokenEnd
      continue
    }

    if (hasSharedPrefix(input.slice(inputPos), tokenMatchText)) {
      return appendNeutral(items, input, inputPos)
    }

    return appendNeutral(items, input, inputPos)
  }

  if (inputPos < input.length) return appendNeutral(items, input, inputPos)

  return items
}

function getTargetText(input: string, answer: RichAnswer): string {
  const field = containsKanji(input) ? "plain" : "kana"
  return stripSegmentSeparators(answer[field])
}

function appendIgnoredInput(
  items: UserInputPosDisplayItem[],
  input: string,
  start: number,
): number {
  let index = start
  while (index < input.length && isNeutralPosText(input[index])) {
    index++
  }

  if (index > start) {
    items.push({ kind: "neutral", text: input.slice(start, index) })
  }
  return index
}

function appendNeutral(
  items: UserInputPosDisplayItem[],
  input: string,
  start: number,
): UserInputPosDisplayItem[] {
  const text = input.slice(start)
  if (text) items.push({ kind: "neutral", text })
  return items
}

interface AnswerText {
  plain: string
  kana: string
  plainToKana: number[]
}

function getAnswerText(answer: RichAnswer): AnswerText {
  return {
    plain: stripSegmentSeparators(answer.plain),
    kana: stripSegmentSeparators(answer.kana),
    plainToKana: buildPlainToKanaMap(answer.original),
  }
}

function stripSegmentSeparators(text: string): string {
  return text.split(SEGMENT_SEPARATOR).join("").replace(/\s+/g, "")
}

function buildPlainToKanaMap(original: string): number[] {
  const plainToKana: number[] = [0]
  let plainPos = 0
  let kanaPos = 0
  let index = 0

  while (index < original.length) {
    const char = original[index]
    if (/\s/.test(char) || char === SEGMENT_SEPARATOR) {
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
  return getSharedPrefixLength(input, target)
}

function getSharedPrefixLength(a: string, b: string): number {
  const length = Math.min(a.length, b.length)
  let index = 0
  while (index < length && a[index] === b[index]) index++
  return index
}
