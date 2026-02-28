import { GRAMMAR_TO_MODULES } from "@/data/grammar_to_modules"
import { containsKanji } from "@/data/utils/text/japanese"
import { buildBracketFurigana } from "@/data/utils/text/kana"
import { getKagomeWorker } from "@/features/sentence-practice/kagome/kagomeWorkerManager"
import type { POS } from "@/features/sentence-practice/kagome/types"
import { shouldSkipToken } from "./token-filter"
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
  const baseFormReadingCache = new Map<string, string>()

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
        const baseForm = normalizeTokenWord(token.base_form, token.surface)
        if (
          shouldSkipToken({
            tokenClass: token.class,
            pos: token.pos,
            normalizedWord: baseForm,
          })
        ) {
          continue
        }

        if (vocabularyMap.has(baseForm)) {
          const existing = vocabularyMap.get(baseForm)!
          if (!existing.transcriptLineIds.includes(lineId)) {
            existing.transcriptLineIds.push(lineId)
          }
          existing.count++
        } else {
          const resolvedReading = await resolveReadingForBaseForm(
            baseForm,
            token.surface,
            token.reading,
            worker,
            baseFormReadingCache,
          )

          vocabularyMap.set(baseForm, {
            furigana: normalizeOptional(
              buildBracketFurigana(baseForm, resolvedReading),
            ),
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

async function resolveReadingForBaseForm(
  baseForm: string,
  surface: string,
  tokenReading: string,
  worker: Awaited<ReturnType<typeof getKagomeWorker>>,
  cache: Map<string, string>,
): Promise<string> {
  const fallbackReading = tokenReading ?? ""
  if (!baseForm || !containsKanji(baseForm)) {
    return fallbackReading
  }

  const cached = cache.get(baseForm)
  if (cached !== undefined) return cached

  const shouldResolveLemmaReading = baseForm !== surface.trim()
  if (!shouldResolveLemmaReading) {
    cache.set(baseForm, fallbackReading)
    return fallbackReading
  }

  try {
    const { tokens } = await worker.tokenize(baseForm)
    const resolvedReading = tokens[0]?.reading
    if (resolvedReading && resolvedReading !== "*") {
      cache.set(baseForm, resolvedReading)
      return resolvedReading
    }
  } catch {
    // Fall through to fallback.
  }

  cache.set(baseForm, fallbackReading)
  return fallbackReading
}
