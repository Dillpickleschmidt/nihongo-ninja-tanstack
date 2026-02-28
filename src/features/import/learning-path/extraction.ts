import { GRAMMAR_TO_MODULES } from "@/data/grammar_to_modules"
import { getKagomeWorker } from "@/features/sentence-practice/kagome/kagomeWorkerManager"
import type { POS } from "@/features/sentence-practice/kagome/types"
import type { ExtractedData, TranscriptLine } from "./types"

interface RawTranscriptLine {
  text: string
  english: string
  timestamp?: string
}

export async function extractTranscriptData(
  transcriptLines: RawTranscriptLine[],
): Promise<ExtractedData> {
  const worker = getKagomeWorker()
  await worker.waitForReady()

  const grammarPatternSet = new Set<string>()
  const foundGrammarPatterns: string[] = []
  const grammarPatternMap = new Map<string, number[]>()

  const vocabularyMap = new Map<
    string,
    {
      furigana?: string
      pos: POS
      english?: string
      transcriptLineIds: number[]
      count: number
    }
  >()

  for (let lineId = 0; lineId < transcriptLines.length; lineId++) {
    const line = transcriptLines[lineId]

    try {
      const { tokens, grammarMatches } = await worker.tokenize(line.text)

      for (const match of grammarMatches) {
        const patternName = match.pattern_name
        if (!GRAMMAR_TO_MODULES[patternName as keyof typeof GRAMMAR_TO_MODULES]) {
          continue
        }

        if (!grammarPatternSet.has(patternName)) {
          grammarPatternSet.add(patternName)
          foundGrammarPatterns.push(patternName)
        }

        if (!grammarPatternMap.has(patternName)) {
          grammarPatternMap.set(patternName, [])
        }

        const ids = grammarPatternMap.get(patternName)!
        if (!ids.includes(lineId)) {
          ids.push(lineId)
        }
      }

      for (const token of tokens) {
        const primaryPos = (token.pos[0] ?? "") as POS
        if (!primaryPos) continue

        const baseForm = normalizeTokenWord(token.base_form, token.surface)
        if (!baseForm) continue

        if (vocabularyMap.has(baseForm)) {
          const existing = vocabularyMap.get(baseForm)!
          if (!existing.transcriptLineIds.includes(lineId)) {
            existing.transcriptLineIds.push(lineId)
          }
          existing.count++
        } else {
          vocabularyMap.set(baseForm, {
            furigana: normalizeOptional(token.reading),
            pos: primaryPos,
            english: undefined,
            transcriptLineIds: [lineId],
            count: 1,
          })
        }
      }
    } catch (error) {
      console.error(`[Learning Path] Failed processing line ${lineId}:`, error)
    }
  }

  const vocabulary = Array.from(vocabularyMap.entries())
    .sort((a, b) => b[1].count - a[1].count)
    .map(([word, data]) => ({
      word,
      furigana: data.furigana,
      english: data.english,
      pos: data.pos,
      transcriptLineIds: data.transcriptLineIds,
    }))

  const transcript: TranscriptLine[] = transcriptLines.map((line, idx) => ({
    line_id: idx,
    text: line.text,
    english: line.english,
    timestamp: line.timestamp,
  }))

  return {
    grammarPatterns: foundGrammarPatterns,
    grammarPatternLineIds: Object.fromEntries(grammarPatternMap),
    vocabulary,
    transcript,
  }
}

function normalizeTokenWord(baseForm: string, surface: string): string {
  if (baseForm && baseForm !== "*" && baseForm !== "\u3000") {
    return baseForm.trim()
  }
  return surface.trim()
}

function normalizeOptional(value: string | undefined): string | undefined {
  if (!value || value === "*") return undefined
  return value
}
