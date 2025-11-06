/**
 * Transcript Extraction for Learning Paths
 * Extracts grammar patterns and vocabulary from transcript text using
 * Kagome tokenization and Grammar WASM analysis
 */

import { KagomeWorkerManager } from "@/features/sentence-practice/kagome/kagome-worker-manager"
import { GRAMMAR_TO_MODULES } from "@/data/grammar_to_modules"
import type { ExtractedData, VocabWord } from "./generation"
import type { POS } from "@/features/sentence-practice/kagome/types/kagome"

/**
 * Extracts grammar patterns and vocabulary from transcript lines
 * @param transcriptLines - Array of transcript lines with text and English translation
 * @returns ExtractedData with grammar patterns, vocabulary, and transcript metadata
 */
export async function extractTranscriptData(
  transcriptLines: Array<{
    text: string
    english: string
    timestamp?: string
  }>,
): Promise<ExtractedData> {
  // Initialize worker manager for tokenization
  const workerManager = new KagomeWorkerManager()
  await workerManager.waitForReady()

  const grammarPatternSet = new Set<string>()
  const vocabularyMap = new Map<string, VocabWord>()
  const foundGrammarPatterns: string[] = []
  const vocabularyList: VocabWord[] = []

  // Process each line
  for (let lineId = 0; lineId < transcriptLines.length; lineId++) {
    const line = transcriptLines[lineId]

    try {
      // Tokenize the line (this includes grammar analysis via analyze_single)
      const { tokens, grammarMatches } = await workerManager.tokenize(line.text)

      if (tokens.length === 0) continue

      // Extract grammar patterns from matches
      if (grammarMatches && grammarMatches.length > 0) {
        for (const match of grammarMatches) {
          // Map pattern name to module IDs
          const moduleIds =
            GRAMMAR_TO_MODULES[
              match.pattern_name as keyof typeof GRAMMAR_TO_MODULES
            ]
          if (moduleIds) {
            for (const moduleId of moduleIds) {
              if (!grammarPatternSet.has(moduleId)) {
                grammarPatternSet.add(moduleId)
                foundGrammarPatterns.push(moduleId)
              }
            }
          }
        }
      }

      // Extract vocabulary directly from tokens
      for (const token of tokens) {
        const primaryPos = token.pos[0] as POS

        // Skip particles and punctuation
        if (primaryPos === "助詞" || primaryPos === "補助記号") continue

        const key = `${token.base_form}|${token.reading}`

        if (!vocabularyMap.has(key)) {
          const word: VocabWord = {
            word: token.base_form,
            furigana: token.reading,
            english: undefined, // Would need additional lookup
            pos: primaryPos,
            transcriptLineId: lineId,
          }
          vocabularyMap.set(key, word)
          vocabularyList.push(word)
        }
      }
    } catch (error) {
      console.error(`Error processing line ${lineId}: ${error}`)
      // Continue with next line on error
    }
  }

  return {
    grammarPatterns: foundGrammarPatterns,
    vocabulary: vocabularyList,
    transcript: transcriptLines.map((line, idx) => ({
      line_id: idx,
      text: line.text,
      english: line.english,
      timestamp: line.timestamp,
    })),
  }
}
