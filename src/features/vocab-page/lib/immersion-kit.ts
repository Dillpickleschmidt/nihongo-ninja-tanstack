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

// =====================================
// Fetch (sequential queue to avoid 429s)
// =====================================

let pending: Promise<void> = Promise.resolve()

export function fetchImmersionKitExamples(
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

// =====================================
// Ranking
// =====================================

const OPTIMAL_LENGTH = 30
const LENGTH_WEIGHT = 0.3
const VOCAB_WEIGHT = 0.5
const PROXIMITY_WEIGHT = 0.2

/**
 * Ranks IK examples by relevance.
 * If orderedKeys is provided, uses vocab overlap + proximity scoring.
 * Otherwise, ranks by sentence length only.
 */
export function rankExamples(
  examples: ImmersionKitExample[],
  targetWord: string,
  orderedKeys: string[] | undefined,
): ImmersionKitExample[] {
  if (examples.length === 0) return []

  if (!orderedKeys) {
    return rankByLengthOnly(examples)
  }

  // Build a position map for known words
  const positionMap = new Map<string, number>()
  for (let i = 0; i < orderedKeys.length; i++) {
    if (!positionMap.has(orderedKeys[i])) {
      positionMap.set(orderedKeys[i], i)
    }
  }

  const targetPosition = positionMap.get(targetWord)
  if (targetPosition === undefined) {
    return rankByLengthOnly(examples)
  }

  const scored = examples.map((example) => ({
    example,
    score: calculateScore(
      example.sentence,
      example.word_list,
      positionMap,
      targetWord,
      targetPosition,
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
  sentence: string,
  wordList: string[],
  positionMap: Map<string, number>,
  targetWord: string,
  targetPosition: number,
): number {
  const otherWords = wordList.filter((w) => w !== targetWord)
  if (otherWords.length === 0) return 0

  let knownWords = 0
  let proximitySum = 0

  for (const word of otherWords) {
    const position = positionMap.get(word)
    if (position !== undefined && position <= targetPosition) {
      knownWords++
      const distance = targetPosition - position
      proximitySum += Math.exp(-distance / 2)
    }
  }

  const vocabScore = 1 - Math.exp(-knownWords / 5)
  const proxScore = knownWords > 0 ? proximitySum / knownWords : 0
  const lenScore = lengthScore(sentence.length)

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
