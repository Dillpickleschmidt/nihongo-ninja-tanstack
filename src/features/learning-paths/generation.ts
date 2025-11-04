import { GRAMMAR_TO_MODULES } from "@/data/grammar_to_modules"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import type { TextbookIDEnum } from "@/data/types"
import { getLearningPathModules } from "@/data/utils/core"
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

// Types
export interface VocabWord {
  word: string
  baseForm: string
  furigana?: string
  english?: string
  pos: POS
  transcriptLineId: number
}

export interface ExtractedData {
  grammarPatterns: string[]
  vocabulary: VocabWord[]
  transcript: Array<{
    line_id: number
    text: string
    english: string
    timestamp?: string
  }>
}

export interface GrammarModuleOption {
  moduleId: string
  title: string
  sourceType: "grammar"
  matchedPatterns: string[]
  transcriptLineIds: number[]
  checked: boolean
}

export interface VocabDeckPreview {
  previewId: string
  words: Array<{
    word: string
    baseForm: string
    furigana?: string
    english?: string
  }>
  posTag: POS
  transcriptLineIds: number[]
  checked: boolean
}

export interface LearningPathPreview {
  grammarModules: GrammarModuleOption[]
  vocabularyDecks: VocabDeckPreview[]
}

// Helper: Map grammar patterns to module IDs
function getGrammarModules(grammarPatterns: string[]): string[] {
  const moduleIds = new Set<string>()

  // Add always-included modules
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

// Helper: Get title for a module
function getModuleTitle(moduleId: string): string {
  const staticModule = static_modules[moduleId as keyof typeof static_modules]
  if (staticModule) return staticModule.title

  const dynamicModule =
    dynamic_modules[moduleId as keyof typeof dynamic_modules]
  if (dynamicModule) return dynamicModule.title

  return moduleId
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

  return moduleIds.map((moduleId) => ({
    moduleId,
    title: getModuleTitle(moduleId),
    sourceType: "grammar" as const,
    matchedPatterns: Array.from(grammarToPatterns.get(moduleId) || []),
    transcriptLineIds: [], // Will be populated from transcript references
    checked: true,
  }))
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

// Helper: Chunk vocabulary by category (verbs vs non-verbs)
function chunkVocabularyByCategory(
  vocabulary: VocabWord[],
): VocabDeckPreview[] {
  const verbs: VocabWord[] = []
  const nonVerbs: VocabWord[] = []

  // Separate by POS
  vocabulary.forEach((word) => {
    if (word.pos === "動詞") {
      verbs.push(word)
    } else {
      nonVerbs.push(word)
    }
  })

  const decks: VocabDeckPreview[] = []
  let previewIdCounter = 0

  // Chunk verbs
  if (verbs.length > 0) {
    const verbChunks = distributeEvenly(verbs, VOCAB_TARGET_SIZE)
    verbChunks.forEach((chunk) => {
      decks.push({
        previewId: `vocab-preview-${previewIdCounter++}`,
        words: chunk.map((w) => ({
          word: w.word,
          baseForm: w.baseForm,
          furigana: w.furigana,
          english: w.english,
        })),
        posTag: "動詞",
        transcriptLineIds: chunk.map((w) => w.transcriptLineId),
        checked: true,
      })
    })
  }

  // Chunk non-verbs
  if (nonVerbs.length > 0) {
    const nonVerbChunks = distributeEvenly(nonVerbs, VOCAB_TARGET_SIZE)
    nonVerbChunks.forEach((chunk) => {
      decks.push({
        previewId: `vocab-preview-${previewIdCounter++}`,
        words: chunk.map((w) => ({
          word: w.word,
          baseForm: w.baseForm,
          furigana: w.furigana,
          english: w.english,
        })),
        posTag: chunk[0]!.pos, // Use first word's POS as category
        transcriptLineIds: chunk.map((w) => w.transcriptLineId),
        checked: true,
      })
    })
  }

  return decks
}

// Helper: Apply textbook ordering to grammar modules
function applyTextbookOrdering(
  grammarModules: GrammarModuleOption[],
  textbookId: TextbookIDEnum,
): GrammarModuleOption[] {
  const ordering = getLearningPathModules(textbookId)
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

// Main function: Generate learning path preview
export function createLearningPath(
  extractedData: ExtractedData,
  textbookId: TextbookIDEnum,
  completedModuleIds?: string[],
): LearningPathPreview {
  // Get grammar module IDs
  const grammarModuleIds = getGrammarModules(extractedData.grammarPatterns)

  // Enrich with metadata
  let grammarModules = enrichGrammarModules(grammarModuleIds, extractedData)

  // Apply textbook ordering
  grammarModules = applyTextbookOrdering(grammarModules, textbookId)

  // Uncheck completed modules
  if (completedModuleIds && completedModuleIds.length > 0) {
    grammarModules = uncheckCompletedModules(grammarModules, completedModuleIds)
  }

  // Generate vocabulary deck previews
  const vocabularyDecks = chunkVocabularyByCategory(extractedData.vocabulary)

  return {
    grammarModules,
    vocabularyDecks,
  }
}
