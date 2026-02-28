import type { POS } from "@/features/sentence-practice/kagome/types"

export interface TranscriptLine {
  line_id: number
  text: string
  english: string
  timestamp?: string
}

export interface VocabWord {
  word: string
  furigana?: string
  english?: string
  pos: POS
  transcriptLineIds: number[]
}

export interface ExtractedData {
  grammarPatterns: string[]
  grammarPatternLineIds: Record<string, number[]>
  vocabulary: VocabWord[]
  transcript: TranscriptLine[]
}

export interface GrammarModuleSelection {
  type: "grammar"
  moduleId: string
  transcriptLineIds: number[][]
  checked: boolean
  orderIndex: number
}

export interface VocabDeckSelection {
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

export type LearningPathSelection = GrammarModuleSelection | VocabDeckSelection

export interface ProcessedLearningPathData {
  modules: LearningPathSelection[]
  grammarPatterns: Array<{ pattern: string; lineIds: number[] }>
  transcript: TranscriptLine[]
}
