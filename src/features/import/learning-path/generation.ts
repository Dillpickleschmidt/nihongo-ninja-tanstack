import { chapters } from "@/data/chapters"
import { dynamic_modules } from "@/data/dynamic_modules"
import { GRAMMAR_TO_MODULES } from "@/data/grammar_to_modules"
import { static_modules } from "@/data/static_modules"
import type { TextbookIDEnum } from "@/data/textbooks"
import type {
  ExtractedData,
  GrammarModuleSelection,
  LearningPathSelection,
  VocabDeckSelection,
  VocabWord,
} from "./types"

const ALWAYS_INCLUDED_MODULES = [
  "welcome-overview",
  "japanese-pronunciation",
  "writing-systems",
  "hiragana",
]

const VOCAB_TARGET_SIZE = 15
const MAX_VOCAB_PER_GRAMMAR = 4

const availableModules = new Set<string>([
  ...Object.keys(static_modules),
  ...Object.keys(dynamic_modules),
])

interface VocabWordWithFrequency extends VocabWord {
  count: number
}

export function createLearningPath(
  extractedData: ExtractedData,
  textbookId: TextbookIDEnum,
  completedModuleIds?: string[],
): { modules: LearningPathSelection[] } {
  const grammarModuleIds = getGrammarModules(extractedData.grammarPatterns)

  const alwaysIncludedIds = grammarModuleIds.filter((id) =>
    ALWAYS_INCLUDED_MODULES.includes(id),
  )
  const remainingGrammarIds = grammarModuleIds.filter(
    (id) => !ALWAYS_INCLUDED_MODULES.includes(id),
  )

  let alwaysIncluded = enrichGrammarModules(alwaysIncludedIds, extractedData)
  let grammarModules = enrichGrammarModules(remainingGrammarIds, extractedData)

  alwaysIncluded = applyTextbookOrdering(alwaysIncluded, textbookId)
  grammarModules = applyTextbookOrdering(grammarModules, textbookId)

  if (completedModuleIds && completedModuleIds.length > 0) {
    alwaysIncluded = uncheckCompletedModules(alwaysIncluded, completedModuleIds)
    grammarModules = uncheckCompletedModules(grammarModules, completedModuleIds)
  }

  const vocabularyDecks = chunkVocabularyByFrequency(extractedData.vocabulary)
  const modules = interleaveModules(
    alwaysIncluded,
    grammarModules,
    vocabularyDecks,
  )

  return { modules }
}

function getGrammarModules(grammarPatterns: string[]): string[] {
  const moduleIds = new Set<string>()
  ALWAYS_INCLUDED_MODULES.forEach((id) => moduleIds.add(id))

  grammarPatterns.forEach((pattern) => {
    const mapped =
      GRAMMAR_TO_MODULES[pattern as keyof typeof GRAMMAR_TO_MODULES]
    if (!mapped) return
    mapped.forEach((id) => moduleIds.add(id))
  })

  return Array.from(moduleIds).filter((id) => availableModules.has(id))
}

function enrichGrammarModules(
  moduleIds: string[],
  extractedData: ExtractedData,
): GrammarModuleSelection[] {
  const grammarToPatterns = new Map<string, Set<string>>()

  extractedData.grammarPatterns.forEach((pattern) => {
    const mapped =
      GRAMMAR_TO_MODULES[pattern as keyof typeof GRAMMAR_TO_MODULES]
    if (!mapped) return

    mapped.forEach((moduleId) => {
      if (!grammarToPatterns.has(moduleId)) {
        grammarToPatterns.set(moduleId, new Set())
      }
      grammarToPatterns.get(moduleId)!.add(pattern)
    })
  })

  return moduleIds.map((moduleId) => {
    const patterns = Array.from(grammarToPatterns.get(moduleId) ?? [])
    return {
      type: "grammar" as const,
      moduleId,
      transcriptLineIds: patterns.map(
        (pattern) => extractedData.grammarPatternLineIds[pattern] ?? [],
      ),
      checked: true,
      orderIndex: 0,
    }
  })
}

function chunkVocabularyByFrequency(
  vocabulary: VocabWord[],
): VocabDeckSelection[] {
  const vocabMap = filterAndDeduplicateVocab(vocabulary)
  if (vocabMap.size === 0) return []

  const words = Array.from(vocabMap.values())
  const verbCount = words.filter((word) => word.pos === "動詞").length
  const nonVerbCount = words.length - verbCount

  const verbsDistribution =
    verbCount > 0
      ? distributeEvenly(Array(verbCount).fill(0), VOCAB_TARGET_SIZE).map(
          (bucket) => bucket.length,
        )
      : []

  const nonVerbsDistribution =
    nonVerbCount > 0
      ? distributeEvenly(Array(nonVerbCount).fill(0), VOCAB_TARGET_SIZE).map(
          (bucket) => bucket.length,
        )
      : []

  const sortedWords = words.sort((a, b) => b.count - a.count)
  const buckets = fillBucketsWithDistribution(
    sortedWords,
    verbsDistribution,
    nonVerbsDistribution,
  )

  let previewId = 0
  return buckets
    .filter((bucket) => bucket.length > 0)
    .map((bucket) => ({
      type: "vocabulary" as const,
      previewId: `vocab-preview-${previewId++}`,
      words: bucket.map(({ word, furigana, english }) => ({
        word,
        furigana,
        english,
      })),
      isVerbDeck: bucket[0]!.pos === "動詞",
      transcriptLineIds: bucket.map((word) => word.transcriptLineIds),
      checked: true,
      orderIndex: 0,
    }))
}

function filterAndDeduplicateVocab(
  vocabulary: VocabWord[],
): Map<string, VocabWordWithFrequency> {
  const vocabMap = new Map<string, VocabWordWithFrequency>()

  vocabulary.forEach((word) => {
    if (vocabMap.has(word.word)) {
      const existing = vocabMap.get(word.word)!
      existing.count++
      const lineIds = new Set([
        ...existing.transcriptLineIds,
        ...word.transcriptLineIds,
      ])
      existing.transcriptLineIds = [...lineIds]
      return
    }

    vocabMap.set(word.word, { ...word, count: 1 })
  })

  return vocabMap
}

function distributeEvenly<T>(items: T[], targetSize: number): T[][] {
  const total = items.length
  if (total === 0) return []
  if (total <= targetSize) return [items]

  const numChunks = Math.floor(total / targetSize)
  const baseSize = Math.floor(total / numChunks)
  const remainder = total % numChunks

  const chunks: T[][] = []
  let start = 0

  for (let i = 0; i < numChunks; i++) {
    const chunkSize = i < remainder ? baseSize + 1 : baseSize
    chunks.push(items.slice(start, start + chunkSize))
    start += chunkSize
  }

  return chunks
}

function fillBucketsWithDistribution(
  sortedWords: VocabWordWithFrequency[],
  verbsDistribution: number[],
  nonVerbsDistribution: number[],
): Array<Array<VocabWordWithFrequency>> {
  const modules: Array<Array<VocabWordWithFrequency>> = []
  let verbBucket: Array<VocabWordWithFrequency> = []
  let nonVerbBucket: Array<VocabWordWithFrequency> = []
  let verbIndex = 0
  let nonVerbIndex = 0

  for (const word of sortedWords) {
    if (word.pos === "動詞") {
      verbBucket.push(word)
      if (verbBucket.length === verbsDistribution[verbIndex]) {
        modules.push(verbBucket)
        verbBucket = []
        verbIndex++
      }
    } else {
      nonVerbBucket.push(word)
      if (nonVerbBucket.length === nonVerbsDistribution[nonVerbIndex]) {
        modules.push(nonVerbBucket)
        nonVerbBucket = []
        nonVerbIndex++
      }
    }
  }

  if (verbBucket.length > 0) modules.push(verbBucket)
  if (nonVerbBucket.length > 0) modules.push(nonVerbBucket)

  return modules
}

function applyTextbookOrdering(
  grammarModules: GrammarModuleSelection[],
  textbookId: TextbookIDEnum,
): GrammarModuleSelection[] {
  const chapterMap = chapters[textbookId]
  const order = chapterMap
    ? Object.values(chapterMap).flatMap(
        (chapter) => chapter.learning_path_item_ids,
      )
    : []
  const orderMap = new Map(order.map((id, idx) => [id, idx]))

  return [...grammarModules].sort((a, b) => {
    const aOrder = orderMap.get(a.moduleId) ?? Number.POSITIVE_INFINITY
    const bOrder = orderMap.get(b.moduleId) ?? Number.POSITIVE_INFINITY
    return aOrder - bOrder
  })
}

function interleaveModules(
  alwaysIncluded: GrammarModuleSelection[],
  grammarModules: GrammarModuleSelection[],
  vocabDecks: VocabDeckSelection[],
): LearningPathSelection[] {
  let orderIndex = 0
  const result: LearningPathSelection[] = []

  for (const module of alwaysIncluded) {
    result.push({ ...module, orderIndex: orderIndex++ })
  }

  if (grammarModules.length === 0 || vocabDecks.length === 0) {
    for (const module of grammarModules) {
      result.push({ ...module, orderIndex: orderIndex++ })
    }
    for (const deck of vocabDecks) {
      result.push({ ...deck, orderIndex: orderIndex++ })
    }
    return result
  }

  const grammarCount = grammarModules.length
  const vocabCount = vocabDecks.length
  const baseRatio = Math.floor(vocabCount / grammarCount)
  const extraCount = vocabCount % grammarCount

  let vocabIndex = 0

  for (let i = 0; i < grammarCount; i++) {
    result.push({ ...grammarModules[i]!, orderIndex: orderIndex++ })

    let vocabsToAdd = baseRatio
    if (baseRatio < MAX_VOCAB_PER_GRAMMAR && i < extraCount) {
      vocabsToAdd = baseRatio + 1
    } else if (baseRatio >= MAX_VOCAB_PER_GRAMMAR) {
      vocabsToAdd = MAX_VOCAB_PER_GRAMMAR
    }

    for (let v = 0; v < vocabsToAdd && vocabIndex < vocabCount; v++) {
      result.push({ ...vocabDecks[vocabIndex]!, orderIndex: orderIndex++ })
      vocabIndex++
    }
  }

  while (vocabIndex < vocabCount) {
    result.push({ ...vocabDecks[vocabIndex]!, orderIndex: orderIndex++ })
    vocabIndex++
  }

  return result
}

function uncheckCompletedModules(
  modules: GrammarModuleSelection[],
  completedIds: string[],
): GrammarModuleSelection[] {
  const completedSet = new Set(completedIds)
  return modules.map((module) => ({
    ...module,
    checked: !completedSet.has(module.moduleId),
  }))
}
