import { tokenizeSentences } from "@/lib/kagome/tokenize"

// =====================================
// Types (matches apiv2.immersionkit.com response)
// =====================================

export type ImmersionKitExample = {
  id: string
  sentence: string
  sentence_with_furigana: string
  translation: string
  image: string
  sound: string
  title: string
  word_list: string[]
  matched_indexes: { index: number; length: number }[]
}

export type ImmersionKitData = {
  examples: ImmersionKitExample[]
  baseForms: string[][]
}

// =====================================
// Fetch + Tokenize (cached together)
// =====================================

let pending: Promise<void> = Promise.resolve()

function fetchImmersionKitExamples(
  word: string,
): Promise<ImmersionKitExample[]> {
  const result = pending.then(() => doFetch(word))
  pending = result.then(() => {}, () => {})
  return result
}

async function doFetch(word: string): Promise<ImmersionKitExample[]> {
  const response = await fetch(
    `https://apiv2.immersionkit.com/search?q=${encodeURIComponent(word)}&showUrlInMedia=true`,
  )

  if (!response.ok) {
    throw new Error(`IK API error: ${response.status}`)
  }

  const data: { examples: ImmersionKitExample[] } = await response.json()
  return data?.examples ?? []
}

/**
 * Fetches IK examples and tokenizes sentences to extract base forms.
 * Both are cached together in TanStack Query.
 */
export async function fetchAndTokenize(
  word: string,
): Promise<ImmersionKitData> {
  const examples = await fetchImmersionKitExamples(word)
  const baseForms = await tokenizeSentences(
    examples.map((e) => e.sentence),
  )
  return { examples, baseForms }
}

// =====================================
// Ranking
// =====================================

const OPTIMAL_LENGTH = 30
const LENGTH_WEIGHT = 0.3
const VOCAB_WEIGHT = 0.5
const PROXIMITY_WEIGHT = 0.2

/**
 * Ranks IK examples by relevance using Kagome base forms.
 * - baseForms: base forms per sentence (from Lambda tokenizer)
 * - orderedKeys: vocab from current learning path (enables proximity scoring)
 * - knownWords: all vocab the user has practiced via SRS (enables global vocab overlap)
 * - Falls back to sentence length only when neither is available.
 */
export function rankExamples(
  examples: ImmersionKitExample[],
  baseForms: string[][],
  targetWord: string,
  orderedKeys: string[] | undefined,
  knownWords: string[],
): ImmersionKitExample[] {
  if (examples.length === 0) return []

  const knownWordsSet = new Set(knownWords)

  // Build position map from current learning path
  const positionMap = new Map<string, number>()
  if (orderedKeys) {
    for (let i = 0; i < orderedKeys.length; i++) {
      if (!positionMap.has(orderedKeys[i])) {
        positionMap.set(orderedKeys[i], i)
      }
    }
  }

  const targetPosition = positionMap.get(targetWord)

  // No path context and no SRS history -> length only
  if (targetPosition === undefined && knownWordsSet.size === 0) {
    return rankByLengthOnly(examples)
  }

  const scored = examples.map((example, i) => ({
    example,
    score: calculateScore(
      baseForms[i] ?? [],
      positionMap,
      knownWordsSet,
      targetWord,
      targetPosition,
      example.sentence.length,
    ),
  }))

  scored.sort((a, b) => b.score - a.score)
  return scored.map(({ example }) => example)
}

function rankByLengthOnly(
  examples: ImmersionKitExample[],
): ImmersionKitExample[] {
  const scored = examples.map((example) => ({
    example,
    score: lengthScore(example.sentence.length),
  }))
  scored.sort((a, b) => b.score - a.score)
  return scored.map(({ example }) => example)
}

function calculateScore(
  wordList: string[],
  positionMap: Map<string, number>,
  knownWordsSet: Set<string>,
  targetWord: string,
  targetPosition: number | undefined,
  sentenceLength: number,
): number {
  const otherWords = wordList.filter((w) => w !== targetWord)
  if (otherWords.length === 0) return 0

  let knownCount = 0
  let proximitySum = 0

  for (const word of otherWords) {
    const position = positionMap.get(word)
    if (
      targetPosition !== undefined &&
      position !== undefined &&
      position <= targetPosition
    ) {
      // Known from current path — vocab overlap + proximity
      knownCount++
      proximitySum += Math.exp(-(targetPosition - position) / 2)
    } else if (knownWordsSet.has(word)) {
      // Known from SRS globally — vocab overlap only, no proximity
      knownCount++
    }
  }

  const vocabScore = 1 - Math.exp(-knownCount / 5)
  const proxScore = knownCount > 0 ? proximitySum / knownCount : 0
  const lenScore = lengthScore(sentenceLength)

  return (
    vocabScore * VOCAB_WEIGHT +
    lenScore * LENGTH_WEIGHT +
    proxScore * PROXIMITY_WEIGHT
  )
}

function lengthScore(length: number): number {
  if (length <= OPTIMAL_LENGTH) return 1.0
  return Math.exp(-(length - OPTIMAL_LENGTH) / 20)
}
