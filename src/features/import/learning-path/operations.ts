import type { TextbookIDEnum } from "@/data/textbooks"
import { extractTranscriptData } from "./extraction"
import { createLearningPath } from "./generation"
import { formatTimestamp, parseSRT } from "./parse-srt"
import type {
  LearningPathSelection,
  ProcessedLearningPathData,
} from "./types"

export async function processLearningPathFile(
  file: File,
  textbookId: TextbookIDEnum,
): Promise<ProcessedLearningPathData> {
  const content = await file.text()
  const subtitles = parseSRT(content)

  const transcriptInput = subtitles.map((subtitle) => ({
    text: subtitle.text,
    english: "",
    timestamp: formatTimestamp(subtitle.start_time),
  }))

  const extracted = await extractTranscriptData(transcriptInput)
  const learningPath = await createLearningPath(extracted, textbookId)

  return {
    modules: learningPath.modules,
    grammarPatterns: extracted.grammarPatterns.map((pattern) => ({
      pattern,
      lineIds: extracted.grammarPatternLineIds[pattern] ?? [],
    })),
    transcript: extracted.transcript,
  }
}

export function prepareSaveData(
  processedData: ProcessedLearningPathData,
): {
  selectedGrammarModules: Array<{
    moduleId: string
    transcriptLineIds: number[][]
    orderIndex: number
  }>
  selectedVocabDecks: Array<{
    isVerbDeck: boolean
    words: Array<{ word: string; furigana?: string; english?: string }>
    transcriptLineIds: number[][]
    orderIndex: number
  }>
} {
  const selected = processedData.modules.filter(
    (module) => module.checked,
  ) as LearningPathSelection[]

  const selectedGrammarModules = selected
    .filter((module) => module.type === "grammar")
    .map((module) => ({
      moduleId: module.moduleId,
      transcriptLineIds: module.transcriptLineIds,
      orderIndex: module.orderIndex,
    }))

  const selectedVocabDecks = selected
    .filter((module) => module.type === "vocabulary")
    .map((module) => ({
      isVerbDeck: module.isVerbDeck,
      words: module.words,
      transcriptLineIds: module.transcriptLineIds,
      orderIndex: module.orderIndex,
    }))

  return { selectedGrammarModules, selectedVocabDecks }
}
