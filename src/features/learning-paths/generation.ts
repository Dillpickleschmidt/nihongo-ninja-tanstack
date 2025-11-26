import { GRAMMAR_TO_MODULES } from "@/data/grammar_to_modules"
import type { TextbookIDEnum } from "@/data/types"
import type { POS } from "@/features/sentence-practice/kagome/types/kagome"

/*
 * Learning path generation: Transforms extracted transcript data (grammar
 * patterns + vocabulary) into a structured list of grammar modules and
 * vocabulary decks for user selection and ordering
 */

// Constants
const ALWAYS_INCLUDED_MODULES = [
  "welcome-overview",
  "japanese-pronunciation",
  "writing-systems",
  "hiragana",
]
const VOCAB_TARGET_SIZE = 15
const MAX_VOCAB_PER_GRAMMAR = 4

// Types
export interface VocabWord {
  word: string
  furigana?: string
  english?: string
  pos: POS
  transcriptLineIds: number[]
}

interface VocabWordWithFrequency extends VocabWord {
  count: number
}

export interface ExtractedData {
  grammarPatterns: string[]
  grammarPatternLineIds: Record<string, number[]>
  vocabulary: VocabWord[]
  transcript: Array<{
    line_id: number
    text: string
    english: string
    timestamp?: string
  }>
}

export interface GrammarModuleOption {
  type: "grammar"
  moduleId: string
  transcriptLineIds: number[][]
  checked: boolean
  orderIndex: number
}

export interface VocabDeckPreview {
  type: "vocabulary"
  previewId: string
  words: Array<{
    word: string
    furigana?: string
    english?: string
  }>
  isVerbDeck: boolean
  transcriptLineIds: number[][]
  checked: boolean
  orderIndex: number
}

export type LearningPathModule = GrammarModuleOption | VocabDeckPreview

export interface LearningPathPreview {
  modules: LearningPathModule[]
}

// Helper: Map grammar patterns to module IDs
function getGrammarModules(grammarPatterns: string[]): string[] {
  const moduleIds = new Set<string>()

  ALWAYS_INCLUDED_MODULES.forEach((id) => moduleIds.add(id))

  // Map grammar patterns to modules
  grammarPatterns.forEach((pattern) => {
    const modules =
      GRAMMAR_TO_MODULES[pattern as keyof typeof GRAMMAR_TO_MODULES]
    if (modules) {
      modules.forEach((id) => moduleIds.add(id))
    }
  })

  return Array.from(moduleIds)
}

// Helper: Enrich grammar modules with metadata
function enrichGrammarModules(
  moduleIds: string[],
  extractedData: ExtractedData,
): GrammarModuleOption[] {
  const grammarToPatterns = new Map<string, Set<string>>()

  // Build reverse mapping: module -> patterns that trigger it
  extractedData.grammarPatterns.forEach((pattern) => {
    const modules =
      GRAMMAR_TO_MODULES[pattern as keyof typeof GRAMMAR_TO_MODULES]
    if (modules) {
      modules.forEach((moduleId) => {
        if (!grammarToPatterns.has(moduleId)) {
          grammarToPatterns.set(moduleId, new Set())
        }
        grammarToPatterns.get(moduleId)!.add(pattern)
      })
    }
  })

  return moduleIds.map((moduleId) => {
    // Collect all transcript line IDs for the patterns that trigger this module
    const patterns = Array.from(grammarToPatterns.get(moduleId) || [])
    const transcriptLineIds: number[][] = patterns.map(
      (pattern) => extractedData.grammarPatternLineIds[pattern] || [],
    )

    return {
      type: "grammar" as const,
      moduleId,
      transcriptLineIds,
      checked: true,
      orderIndex: 0, // Will be set during interleaving
    }
  })
}

// Helper: Distribute items evenly into chunks
function distributeEvenly<T>(items: T[], targetSize: number): T[][] {
  const total = items.length

  if (total === 0) return []
  if (total <= targetSize) return [items]

  const numChunks = Math.floor(total / targetSize)
  const baseSize = Math.floor(total / numChunks)
  const remainder = total % numChunks

  const chunks: T[][] = []
  let startIndex = 0

  for (let i = 0; i < numChunks; i++) {
    // First 'remainder' chunks get baseSize + 1
    const chunkSize = i < remainder ? baseSize + 1 : baseSize
    chunks.push(items.slice(startIndex, startIndex + chunkSize))
    startIndex += chunkSize
  }

  return chunks
}

// Helper: Check if a POS should be filtered out
function shouldFilterPOS(pos: string): boolean {
  const filteredPOS = ["記号", "助詞"] // Punctuation, particles
  return filteredPOS.includes(pos)
}

// Helper: Filter vocabulary and deduplicate by word
function filterAndDeduplicateVocab(
  vocabulary: VocabWord[],
): Map<string, VocabWordWithFrequency> {
  const vocabMap = new Map<string, VocabWordWithFrequency>()

  vocabulary.forEach((word) => {
    // Skip empty strings and filtered POS
    if (!word.word || shouldFilterPOS(word.pos)) {
      return
    }

    const key = word.word
    if (vocabMap.has(key)) {
      // Increment count for duplicate
      const existing = vocabMap.get(key)!
      existing.count++
    } else {
      // Add new entry with count = 1
      vocabMap.set(key, {
        ...word,
        count: 1,
      })
    }
  })

  return vocabMap
}

// Helper: Convert map to array and count by POS
function convertToArrayWithCounts(
  vocabMap: Map<string, VocabWordWithFrequency>,
): {
  words: Array<VocabWordWithFrequency>
  verbCount: number
  nonVerbCount: number
} {
  const words = Array.from(vocabMap.values())
  let verbCount = 0
  let nonVerbCount = 0

  words.forEach((word) => {
    if (word.pos === "動詞") {
      verbCount++
    } else {
      nonVerbCount++
    }
  })

  return { words, verbCount, nonVerbCount }
}

// Helper: Calculate optimal chunk distributions
function calculateDistributions(
  verbCount: number,
  nonVerbCount: number,
): { verbsDistribution: number[]; nonVerbsDistribution: number[] } {
  const verbsDistribution =
    verbCount > 0
      ? distributeEvenly(Array(verbCount).fill(0), VOCAB_TARGET_SIZE).map(
        (c) => c.length,
      )
      : []
  const nonVerbsDistribution =
    nonVerbCount > 0
      ? distributeEvenly(Array(nonVerbCount).fill(0), VOCAB_TARGET_SIZE).map(
        (c) => c.length,
      )
      : []

  return { verbsDistribution, nonVerbsDistribution }
}

// Helper: Sort vocabulary by frequency (count)
function sortByFrequency(
  words: Array<VocabWordWithFrequency>,
): Array<VocabWordWithFrequency> {
  return [...words].sort((a, b) => b.count - a.count)
}

// Helper: Fill buckets and create vocab modules
function fillBucketsWithDistribution(
  sortedWords: Array<VocabWordWithFrequency>,
  verbsDistribution: number[],
  nonVerbsDistribution: number[],
): Array<Array<VocabWordWithFrequency>> {
  const modules: Array<Array<VocabWordWithFrequency>> = []
  let verbsTemp: Array<VocabWordWithFrequency> = []
  let nonVerbsTemp: Array<VocabWordWithFrequency> = []
  let verbDistIdx = 0
  let nonVerbDistIdx = 0

  // Pop from sorted words and fill buckets
  for (const word of sortedWords) {
    if (word.pos === "動詞") {
      verbsTemp.push(word)
      // Check if verb bucket is full
      if (verbsTemp.length === verbsDistribution[verbDistIdx]) {
        modules.push(verbsTemp)
        verbsTemp = []
        verbDistIdx++
      }
    } else {
      nonVerbsTemp.push(word)
      // Check if non-verb bucket is full
      if (nonVerbsTemp.length === nonVerbsDistribution[nonVerbDistIdx]) {
        modules.push(nonVerbsTemp)
        nonVerbsTemp = []
        nonVerbDistIdx++
      }
    }
  }

  // Flush remaining items
  if (verbsTemp.length > 0) {
    modules.push(verbsTemp)
  }
  if (nonVerbsTemp.length > 0) {
    modules.push(nonVerbsTemp)
  }

  return modules
}

// Helper: Chunk vocabulary by frequency with POS grouping
function chunkVocabularyByFrequency(
  vocabulary: VocabWord[],
): VocabDeckPreview[] {
  // Step 1: Filter and deduplicate
  const vocabMap = filterAndDeduplicateVocab(vocabulary)

  if (vocabMap.size === 0) {
    return []
  }

  // Step 2: Convert to array and count by POS
  const { words, verbCount, nonVerbCount } = convertToArrayWithCounts(vocabMap)

  // Step 3: Calculate distributions
  const { verbsDistribution, nonVerbsDistribution } = calculateDistributions(
    verbCount,
    nonVerbCount,
  )

  // Step 4: Sort by frequency
  const sortedWords = sortByFrequency(words)

  // Step 5-6: Fill buckets
  const vocabModules = fillBucketsWithDistribution(
    sortedWords,
    verbsDistribution,
    nonVerbsDistribution,
  )

  // Step 7: Convert to VocabDeckPreview format
  const decks: VocabDeckPreview[] = []
  let previewIdCounter = 0

  vocabModules.forEach((moduleWords) => {
    if (moduleWords.length === 0) return

    const isVerbDeck = moduleWords[0]!.pos === "動詞"
    decks.push({
      type: "vocabulary" as const,
      previewId: `vocab-preview-${previewIdCounter++}`,
      words: moduleWords.map(({ word, furigana, english }) => ({
        word,
        furigana,
        english,
      })),
      isVerbDeck,
      transcriptLineIds: moduleWords.map((w) => w.transcriptLineIds),
      checked: true,
      orderIndex: 0, // Will be set during interleaving
    })
  })

  return decks
}

// Helper: Apply textbook ordering to grammar modules
async function applyTextbookOrdering(
  grammarModules: GrammarModuleOption[],
  textbookId: TextbookIDEnum,
): Promise<GrammarModuleOption[]> {
  // Lazy import to avoid loading the supabase/db chain in tests
  const { getStaticTextbookModuleIds } = await import("@/data/utils/modules")
  const ordering = getStaticTextbookModuleIds(textbookId)
  const orderingMap = new Map(ordering.map((id, idx) => [id, idx]))

  return grammarModules.sort((a, b) => {
    const aOrder = orderingMap.get(a.moduleId) ?? Infinity
    const bOrder = orderingMap.get(b.moduleId) ?? Infinity
    return aOrder - bOrder
  })
}

// Helper: Uncheck completed modules
function uncheckCompletedModules(
  modules: GrammarModuleOption[],
  completedIds: string[],
): GrammarModuleOption[] {
  const completedSet = new Set(completedIds)

  return modules.map((module) => ({
    ...module,
    checked: !completedSet.has(module.moduleId),
  }))
}

// Helper: Interleave grammar modules (textbook order) with vocab decks (frequency order)
// Always-included modules come first, then interleave, then any remaining vocab
function interleaveModulesWithOrdering(
  alwaysIncluded: GrammarModuleOption[],
  grammarModules: GrammarModuleOption[],
  vocabDecks: VocabDeckPreview[],
): LearningPathModule[] {
  let orderIndex = 0

  // 1. Add always-included modules first (order_index 0-3)
  const result: Array<GrammarModuleOption | VocabDeckPreview> = []
  for (const module of alwaysIncluded) {
    result.push({ ...module, orderIndex: orderIndex++ })
  }

  // 2. If no grammar modules or vocab decks, return what we have
  if (grammarModules.length === 0 || vocabDecks.length === 0) {
    // Add remaining without interleaving
    for (const module of grammarModules) {
      result.push({ ...module, orderIndex: orderIndex++ })
    }
    for (const deck of vocabDecks) {
      result.push({ ...deck, orderIndex: orderIndex++ })
    }
    return result
  }

  // 3. Calculate interleave distribution
  const grammarCount = grammarModules.length
  const vocabCount = vocabDecks.length
  const baseRatio = Math.floor(vocabCount / grammarCount)
  const extraCount = vocabCount % grammarCount

  let vocabIndex = 0

  // 4. Interleave grammar and vocab
  for (let i = 0; i < grammarCount; i++) {
    // Add grammar module
    result.push({ ...grammarModules[i]!, orderIndex: orderIndex++ })

    // Calculate how many vocab for this grammar module
    // Cap vocab per grammar module to maintain learning balance
    let vocabsToAdd = baseRatio
    if (baseRatio < MAX_VOCAB_PER_GRAMMAR && i < extraCount) {
      vocabsToAdd = baseRatio + 1
    } else if (baseRatio >= MAX_VOCAB_PER_GRAMMAR) {
      vocabsToAdd = MAX_VOCAB_PER_GRAMMAR
    }

    // Add vocab modules
    for (let v = 0; v < vocabsToAdd && vocabIndex < vocabCount; v++) {
      result.push({ ...vocabDecks[vocabIndex]!, orderIndex: orderIndex++ })
      vocabIndex++
    }
  }

  // 5. Append any remaining vocab (only when baseRatio >= 4)
  const remainingVocab = vocabCount - vocabIndex
  if (remainingVocab > 0) {
    while (vocabIndex < vocabCount) {
      result.push({ ...vocabDecks[vocabIndex]!, orderIndex: orderIndex++ })
      vocabIndex++
    }
  }

  return result
}

// Main function: Generate learning path preview
export async function createLearningPath(
  extractedData: ExtractedData,
  textbookId: TextbookIDEnum,
  completedModuleIds?: string[],
): Promise<LearningPathPreview> {
  // Get grammar module IDs
  const grammarModuleIds = getGrammarModules(extractedData.grammarPatterns)

  // Separate always-included from other grammar modules
  const alwaysIncludedModules = grammarModuleIds.filter((id) =>
    ALWAYS_INCLUDED_MODULES.includes(id),
  )
  const otherGrammarModuleIds = grammarModuleIds.filter(
    (id) => !ALWAYS_INCLUDED_MODULES.includes(id),
  )

  // Enrich always-included modules
  let alwaysIncluded = enrichGrammarModules(
    alwaysIncludedModules,
    extractedData,
  )

  // Enrich other grammar modules
  let otherGrammarModules = enrichGrammarModules(
    otherGrammarModuleIds,
    extractedData,
  )

  // Apply textbook ordering to non-always-included modules
  otherGrammarModules = await applyTextbookOrdering(
    otherGrammarModules,
    textbookId,
  )

  // Uncheck completed modules
  if (completedModuleIds && completedModuleIds.length > 0) {
    alwaysIncluded = uncheckCompletedModules(alwaysIncluded, completedModuleIds)
    otherGrammarModules = uncheckCompletedModules(
      otherGrammarModules,
      completedModuleIds,
    )
  }

  // Generate vocabulary deck previews (sorted by frequency)
  const vocabularyDecks = chunkVocabularyByFrequency(extractedData.vocabulary)

  // Interleave modules and assign order_index
  const modules = interleaveModulesWithOrdering(
    alwaysIncluded,
    otherGrammarModules,
    vocabularyDecks,
  )

  return { modules }
}
