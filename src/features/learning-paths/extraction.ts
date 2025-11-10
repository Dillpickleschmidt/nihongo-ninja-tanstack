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
 * Vocabulary is aggregated by base_form with frequency counts
 * @param transcriptLines - Array of transcript lines with text and English translation
 * @returns ExtractedData with grammar patterns, vocabulary sorted by frequency, and transcript metadata
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
  const foundGrammarPatterns: string[] = []

  // Vocabulary map: base_form -> {furigana, pos, english, transcriptLineId, count}
  const vocabularyMap = new Map<
    string,
    {
      furigana: string
      pos: POS
      english?: string
      transcriptLineId: number
      count: number
    }
  >()

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
          // Check if this pattern exists in the mapping
          const moduleIds =
            GRAMMAR_TO_MODULES[
              match.pattern_name as keyof typeof GRAMMAR_TO_MODULES
            ]
          if (moduleIds) {
            // Store the pattern ID itself, not the module IDs
            // generation.ts will look up the pattern ID to get modules
            if (!grammarPatternSet.has(match.pattern_name)) {
              grammarPatternSet.add(match.pattern_name)
              foundGrammarPatterns.push(match.pattern_name)
            }
          }
        }
      }

      // Extract vocabulary directly from tokens
      for (const token of tokens) {
        const primaryPos = token.pos[0] as POS

        // Skip particles and punctuation
        if (primaryPos === "助詞" || primaryPos === "補助記号") continue

        const baseForm = token.base_form

        if (vocabularyMap.has(baseForm)) {
          // Increment count for existing word
          const existing = vocabularyMap.get(baseForm)!
          existing.count++
        } else {
          // First occurrence of this word
          vocabularyMap.set(baseForm, {
            furigana: token.reading,
            pos: primaryPos,
            english: undefined, // Would need additional lookup
            transcriptLineId: lineId,
            count: 1,
          })
        }
      }
    } catch (error) {
      console.error(`Error processing line ${lineId}: ${error}`)
      // Continue with next line on error
    }
  }

  // Convert map to array and sort by frequency (descending)
  const vocabularyList: VocabWord[] = Array.from(vocabularyMap.entries())
    .sort((a, b) => b[1].count - a[1].count)
    .map(([word, data]) => ({
      word,
      furigana: data.furigana,
      english: data.english,
      pos: data.pos,
      transcriptLineId: data.transcriptLineId,
    }))

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
