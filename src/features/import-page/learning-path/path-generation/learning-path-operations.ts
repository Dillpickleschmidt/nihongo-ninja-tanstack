/**
 * Business logic for learning path processing and saving
 * Separated from UI concerns in the route component
 */

import { parseSRT } from "./parse-srt"
import { extractTranscriptData } from "./extraction"
import { createLearningPath } from "./generation"
import type { LearningPathModule } from "./generation"
import type { TextbookIDEnum } from "@/data/types"

export type ProcessedData = {
  modules: LearningPathModule[]
  grammarPatterns: Array<{ pattern: string; lineIds: number[] }>
}

interface SRTSubtitle {
  start_time: { hours: number; minutes: number; seconds: number }
  end_time: { hours: number; minutes: number; seconds: number }
  text: string
}

/**
 * Process an uploaded SRT file and generate learning path data
 * Handles: file reading → parsing → extraction → generation → transformation
 */
export async function processLearningPathFile(
  file: File,
  textbookId: TextbookIDEnum,
): Promise<ProcessedData> {
  const content = await file.text()

  const subtitles = parseSRT(content)

  const transcript = convertSubtitlesToTranscript(subtitles)

  const extracted = await extractTranscriptData(transcript)

  const learningPath = await createLearningPath(
    extracted,
    textbookId,
    undefined,
  )

  // Return processed data with both modules and raw patterns
  return {
    modules: learningPath.modules,
    grammarPatterns: extracted.grammarPatterns.map((pattern) => ({
      pattern,
      lineIds: extracted.grammarPatternLineIds[pattern] || [],
    })),
  }
}

/**
 * Prepare data for database upload
 * Filters selected items and formats them for the API
 */
export function prepareSaveData(
  processedData: ProcessedData,
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
  // Extract grammar modules
  const selectedGrammarModules = processedData.modules
    .filter((m) => m.type === "grammar")
    .map((m) => ({
      moduleId: (m as any).moduleId,
      transcriptLineIds: (m as any).transcriptLineIds,
      orderIndex: m.orderIndex,
    }))

  // Extract vocabulary decks
  const selectedVocabDecks = processedData.modules
    .filter((m) => m.type === "vocabulary")
    .map((d) => ({
      isVerbDeck: (d as any).isVerbDeck,
      words: (d as any).words,
      transcriptLineIds: (d as any).transcriptLineIds,
      orderIndex: d.orderIndex,
    }))

  return { selectedGrammarModules, selectedVocabDecks }
}

/**
 * Convert SRT subtitle objects to transcript format
 */
function convertSubtitlesToTranscript(
  subtitles: SRTSubtitle[],
): Array<{
  text: string
  english: string
  timestamp: string
}> {
  return subtitles.map((sub) => ({
    text: sub.text,
    english: "",
    timestamp: `${sub.start_time.hours}:${sub.start_time.minutes}:${sub.start_time.seconds}`,
  }))
}
