import type {
  CheckResult,
  ErrorRange,
  PreparedAnswerForMatching,
  RichAnswer,
} from "../types"
import { normalizeWithPositions } from "../textProcessor"

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

  if (m < n && correctAnswer.endsWith(userInput)) {
    return {
      similarity: m / n,
      userErrors: [],
      answerErrors: [{ start: 0, end: n - m }],
    }
  }

  if (m < n && correctAnswer.startsWith(userInput)) {
    return {
      similarity: m / n,
      userErrors: [],
      answerErrors: [{ start: m, end: n }],
    }
  }

  const dp = createAlignmentTables(userInput, correctAnswer)
  const { userErrorPositions, answerErrorPositions, editDistance } =
    backtrackAlignment(dp, userInput, correctAnswer)

  return {
    similarity: 1 - editDistance / Math.max(m, n),
    userErrors: compressPositionsToRanges(userErrorPositions),
    answerErrors: compressPositionsToRanges(answerErrorPositions),
  }
}

type AlignmentState = "match" | "insert" | "delete"

interface AlignmentCost {
  edits: number
  gapSegments: number
}

interface AlignmentCell {
  cost: AlignmentCost
  previous: AlignmentState | null
}

interface AlignmentTables {
  match: AlignmentCell[][]
  insert: AlignmentCell[][]
  delete: AlignmentCell[][]
}

const INF_COST: AlignmentCost = {
  edits: Number.POSITIVE_INFINITY,
  gapSegments: Number.POSITIVE_INFINITY,
}

function createAlignmentTables(
  userInput: string,
  correctAnswer: string,
): AlignmentTables {
  const m = userInput.length
  const n = correctAnswer.length
  const match = createStateGrid(m, n)
  const insert = createStateGrid(m, n)
  const deleteState = createStateGrid(m, n)

  match[0][0] = { cost: { edits: 0, gapSegments: 0 }, previous: null }

  for (let i = 1; i <= m; i++) {
    insert[i][0] = chooseBestCell([
      transitionCell(insert[i - 1][0], 1, 0, "insert"),
      transitionCell(match[i - 1][0], 1, 1, "match"),
      transitionCell(deleteState[i - 1][0], 1, 1, "delete"),
    ])
  }

  for (let j = 1; j <= n; j++) {
    deleteState[0][j] = chooseBestCell([
      transitionCell(deleteState[0][j - 1], 1, 0, "delete"),
      transitionCell(match[0][j - 1], 1, 1, "match"),
      transitionCell(insert[0][j - 1], 1, 1, "insert"),
    ])
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const substitutionCost = userInput[i - 1] === correctAnswer[j - 1] ? 0 : 1

      match[i][j] = chooseBestCell([
        transitionCell(match[i - 1][j - 1], substitutionCost, 0, "match"),
        transitionCell(insert[i - 1][j - 1], substitutionCost, 0, "insert"),
        transitionCell(deleteState[i - 1][j - 1], substitutionCost, 0, "delete"),
      ])

      insert[i][j] = chooseBestCell([
        transitionCell(insert[i - 1][j], 1, 0, "insert"),
        transitionCell(match[i - 1][j], 1, 1, "match"),
        transitionCell(deleteState[i - 1][j], 1, 1, "delete"),
      ])

      deleteState[i][j] = chooseBestCell([
        transitionCell(deleteState[i][j - 1], 1, 0, "delete"),
        transitionCell(match[i][j - 1], 1, 1, "match"),
        transitionCell(insert[i][j - 1], 1, 1, "insert"),
      ])
    }
  }

  return { match, insert, delete: deleteState }
}

function createStateGrid(m: number, n: number): AlignmentCell[][] {
  return Array(m + 1)
    .fill(0)
    .map(() =>
      Array(n + 1)
        .fill(0)
        .map(() => ({ cost: INF_COST, previous: null })),
    )
}

function transitionCell(
  cell: AlignmentCell,
  addedEdits: number,
  addedGapSegments: number,
  previous: AlignmentState,
): AlignmentCell {
  if (!Number.isFinite(cell.cost.edits)) {
    return { cost: INF_COST, previous }
  }

  return {
    cost: {
      edits: cell.cost.edits + addedEdits,
      gapSegments: cell.cost.gapSegments + addedGapSegments,
    },
    previous,
  }
}

function chooseBestCell(candidates: AlignmentCell[]): AlignmentCell {
  return candidates.reduce((best, candidate) =>
    compareAlignmentCost(candidate.cost, best.cost) < 0 ? candidate : best,
  )
}

function compareAlignmentCost(a: AlignmentCost, b: AlignmentCost): number {
  if (a.edits !== b.edits) return a.edits - b.edits
  return a.gapSegments - b.gapSegments
}

function backtrackAlignment(
  tables: AlignmentTables,
  userInput: string,
  correctAnswer: string,
): {
  userErrorPositions: number[]
  answerErrorPositions: number[]
  editDistance: number
} {
  const userErrorPositions: number[] = []
  const answerErrorPositions: number[] = []
  let i = userInput.length
  let j = correctAnswer.length
  let state = bestFinalState(tables, i, j)

  while (i > 0 || j > 0) {
    const cell = tables[state][i][j]

    if (state === "match") {
      if (i > 0 && j > 0 && userInput[i - 1] !== correctAnswer[j - 1]) {
        userErrorPositions.push(i - 1)
        answerErrorPositions.push(j - 1)
      }
      i -= 1
      j -= 1
    } else if (state === "insert") {
      userErrorPositions.push(i - 1)
      i -= 1
    } else {
      answerErrorPositions.push(j - 1)
      j -= 1
    }

    state = cell.previous ?? "match"
  }

  return {
    userErrorPositions: userErrorPositions.sort((a, b) => a - b),
    answerErrorPositions: answerErrorPositions.sort((a, b) => a - b),
    editDistance: bestFinalCost(tables, userInput.length, correctAnswer.length).edits,
  }
}

function bestFinalState(
  tables: AlignmentTables,
  i: number,
  j: number,
): AlignmentState {
  const candidates: Array<{ state: AlignmentState; cost: AlignmentCost }> = [
    { state: "match", cost: tables.match[i][j].cost },
    { state: "insert", cost: tables.insert[i][j].cost },
    { state: "delete", cost: tables.delete[i][j].cost },
  ]

  return candidates.reduce((best, candidate) =>
    compareAlignmentCost(candidate.cost, best.cost) < 0 ? candidate : best,
  ).state
}

function bestFinalCost(
  tables: AlignmentTables,
  i: number,
  j: number,
): AlignmentCost {
  const state = bestFinalState(tables, i, j)
  return tables[state][i][j].cost
}

function compressPositionsToRanges(positions: number[]): ErrorRange[] {
  if (positions.length === 0) return []

  const ranges: ErrorRange[] = []
  let start = positions[0]
  let end = positions[0] + 1

  for (let index = 1; index < positions.length; index++) {
    const position = positions[index]

    if (position === end) {
      end += 1
      continue
    }

    ranges.push({ start, end })
    start = position
    end = position + 1
  }

  ranges.push({ start, end })
  return ranges
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
  preparedAnswers: PreparedAnswerForMatching[],
): CheckResult {
  const { text: normalizedInput, toOriginal: userToOriginal } =
    normalizeWithPositions(input)
  let userText = normalizedInput
  const strippableParticles = getStrippableParticles(
    preparedAnswers.map((preparedAnswer) => preparedAnswer.answer),
  )

  let strippedParticle: string | undefined
  for (const particle of strippableParticles) {
    if (userText.endsWith(particle)) {
      userText = userText.slice(0, -particle.length)
      strippedParticle = particle
      break
    }
  }

  const matches = preparedAnswers
    .map((preparedAnswer) => {
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
        answer: preparedAnswer.answer,
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
