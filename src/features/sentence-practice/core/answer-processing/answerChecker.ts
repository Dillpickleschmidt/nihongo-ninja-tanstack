import { createKanjiFuriganaGroupRegex } from "@/data/utils/text/furigana"
import type { CheckResult, ErrorRange, RichAnswer } from "../types"
import { removeFurigana } from "../textProcessor"
import { createVisibleTextWithMap, normalizeWithPositions } from "../textProcessor"

interface PreparedAnswerForMatching {
  normalizedPlain: string
  normalizedKana: string
  visiblePlain: string
  plainToVisible: (pos: number) => number
  kanaToPlainVisible: (pos: number) => number
}

const preparedAnswerCache = new WeakMap<RichAnswer, PreparedAnswerForMatching>()

export interface MatchResult {
  similarity: number
  userErrors: ErrorRange[]
  answerErrors: ErrorRange[]
}

// LCS-based matching, returns similarity and error positions
export function matchAnswer(
  userInput: string,
  correctAnswer: string,
): MatchResult {
  const m = userInput.length
  const n = correctAnswer.length

  // Handle empty strings
  if (m === 0 && n === 0) {
    return { similarity: 1, userErrors: [], answerErrors: [] }
  }
  if (m === 0 || n === 0) {
    return {
      similarity: 0,
      userErrors: m > 0 ? [{ start: 0, end: m }] : [],
      answerErrors: n > 0 ? [{ start: 0, end: n }] : [],
    }
  }

  // Build LCS dynamic programming table
  const dp: number[][] = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  const backtrack: string[][] = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(""))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (userInput[i - 1] === correctAnswer[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        backtrack[i][j] = "diag"
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
        dp[i][j] = dp[i - 1][j]
        backtrack[i][j] = "up"
      } else {
        dp[i][j] = dp[i][j - 1]
        backtrack[i][j] = "left"
      }
    }
  }

  // Reconstruct matches via backtracking, preferring earlier answer positions
  const matches: Array<{ input: number; answer: number }> = []
  let i = m
  let j = n

  while (i > 0 && j > 0) {
    if (
      backtrack[i][j] === "diag" &&
      // Only take this match if there's no equally good path to an earlier occurrence
      dp[i][j - 1] < dp[i][j]
    ) {
      matches.unshift({ input: i - 1, answer: j - 1 })
      i--
      j--
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--
    } else {
      j--
    }
  }

  // Convert matches into error ranges
  const userErrors: ErrorRange[] = []
  const answerErrors: ErrorRange[] = []
  let lastInputPos = 0
  let lastAnswerPos = 0
  let matchCount = 0

  for (const { input: inputPos, answer: answerPos } of matches) {
    if (inputPos > lastInputPos) {
      userErrors.push({ start: lastInputPos, end: inputPos })
    }
    if (answerPos > lastAnswerPos) {
      answerErrors.push({ start: lastAnswerPos, end: answerPos })
    }
    matchCount++
    lastInputPos = inputPos + 1
    lastAnswerPos = answerPos + 1
  }

  // Handle remaining characters
  if (lastInputPos < m) {
    userErrors.push({ start: lastInputPos, end: m })
  }
  if (lastAnswerPos < n) {
    answerErrors.push({ start: lastAnswerPos, end: n })
  }

  return {
    similarity: matchCount / Math.max(m, n),
    userErrors,
    answerErrors,
  }
}

// Returns particles (よ/ね/よね) that can be stripped (not in any answer)
function getStrippableParticles(validAnswers: RichAnswer[]): string[] {
  const particles = ["よね", "ね", "よ"]
  const strippable: string[] = []

  // Don't strip particles from questions
  const anyAnswerIsQuestion = validAnswers.some(
    (a) => a.plain.endsWith("か") || a.plain.endsWith("？"),
  )
  if (anyAnswerIsQuestion) {
    return []
  }

  for (const particle of particles) {
    const anyAnswerEndsWithParticle = validAnswers.some((a) =>
      a.plain.endsWith(particle),
    )
    if (!anyAnswerEndsWithParticle) {
      strippable.push(particle)
    }
  }

  return strippable
}

// Main entry: normalizes, strips particles, matches against kanji + kana versions
export function checkAnswer(
  input: string,
  validAnswers: RichAnswer[],
): CheckResult {
  const { text: normalizedInput, toOriginal: userToOriginal } =
    normalizeWithPositions(input)
  let userText = normalizedInput
  const strippableParticles = getStrippableParticles(validAnswers)

  let strippedParticle: string | undefined
  for (const particle of strippableParticles) {
    if (userText.endsWith(particle)) {
      userText = userText.slice(0, -particle.length)
      strippedParticle = particle
      break
    }
  }

  const matches = validAnswers
    .map((richAnswer) => {
      const preparedAnswer = getPreparedAnswerForMatching(richAnswer)

      const kanjiMatch = matchAnswer(userText, preparedAnswer.normalizedPlain)
      const kanaMatch = matchAnswer(userText, preparedAnswer.normalizedKana)

      // Use whichever matched better, display that version
      const kanaWon = kanaMatch.similarity > kanjiMatch.similarity
      const toVisible = kanaWon
        ? preparedAnswer.kanaToPlainVisible
        : preparedAnswer.plainToVisible
      const errors = kanaWon ? kanaMatch : kanjiMatch

      // Map error positions back to original (un-normalized) space
      const mappedUserErrors = errors.userErrors.map((e) => ({
        start: userToOriginal(e.start),
        end: userToOriginal(e.end),
      }))
      const mappedAnswerErrors = errors.answerErrors.map((e) => ({
        start: toVisible(e.start),
        end: toVisible(e.end),
      }))

      // Return AnswerMatch with full RichAnswer
      return {
        answer: richAnswer,
        displayText: preparedAnswer.visiblePlain,
        similarity: Math.max(kanjiMatch.similarity, kanaMatch.similarity),
        userErrors: mappedUserErrors,
        answerErrors: mappedAnswerErrors,
      }
    })
    .sort((a, b) => b.similarity - a.similarity)

  const bestMatchIndex = 0

  return {
    isCorrect: matches[0].similarity === 1,
    bestMatch: matches[0].displayText,
    similarity: matches[0].similarity,
    errorRanges: matches[0].userErrors,
    bestMatchErrors: matches[0].answerErrors,
    strippedParticle,
    allMatches: matches,
    bestMatchIndex,
  }
}

function getPreparedAnswerForMatching(
  richAnswer: RichAnswer,
): PreparedAnswerForMatching {
  const cached = preparedAnswerCache.get(richAnswer)
  if (cached) return cached

  const { text: normalizedPlain } = normalizeWithPositions(richAnswer.plain)
  const { text: normalizedKana } = normalizeWithPositions(richAnswer.kana)
  const { text: visiblePlain, normalizedToVisible: plainToVisible } =
    createVisibleTextWithMap(richAnswer.plain)
  const kanaToPlainVisible = createNormalizedKanaToVisiblePlainMapper(
    richAnswer.original,
    richAnswer.kana,
  )

  const preparedAnswer = {
    normalizedPlain,
    normalizedKana,
    visiblePlain,
    plainToVisible,
    kanaToPlainVisible,
  }

  preparedAnswerCache.set(richAnswer, preparedAnswer)
  return preparedAnswer
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
  const furiganaRegex = createKanjiFuriganaGroupRegex("")
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
