// Kana-to-Kanji Overlay
// Converts pure kana user input to kanji for proper Kagome tokenization
// Uses pre-computed RichSegment kana/plain values for simplified matching

import type { RichSegment } from "./types"
import { containsKanji } from "@/data/utils/text/japanese"
import { createKanjiFuriganaGroupRegex } from "@/data/utils/text/furigana"

export interface OverlayResult {
  overlaidText: string
  characterMap: Map<number, number> // overlay position → user position (boundaries)
}

/**
 * Overlays kanji onto pure kana input using the best-matching segment array.
 * Returns null if input contains kanji (no overlay needed).
 */
export function overlayKanji(
  userInput: string,
  segmentArrays: RichSegment[][],
): OverlayResult | null {
  // Skip if input contains kanji
  if (containsKanji(userInput)) {
    return null
  }

  // Find best matching segment array by kana similarity
  const bestSegments = findBestMatchingSegments(userInput, segmentArrays)
  if (!bestSegments) {
    return null
  }

  // Apply overlay using the best matching segments
  return applyOverlay(userInput, bestSegments)
}

/**
 * Finds the segment array whose kana form best matches the user's input.
 * Uses prefix matching and length similarity.
 */
function findBestMatchingSegments(
  userKana: string,
  segmentArrays: RichSegment[][],
): RichSegment[] | null {
  if (segmentArrays.length === 0) return null

  let bestMatch: RichSegment[] | null = null
  let bestScore = -1

  for (const segments of segmentArrays) {
    const segmentKana = segments.map((s) => s.kana).join("")
    const score = calculateMatchScore(userKana, segmentKana)
    if (score > bestScore) {
      bestScore = score
      bestMatch = segments
    }
  }

  return bestMatch
}

/**
 * Calculates a match score based on common prefix length and overall similarity.
 */
function calculateMatchScore(userKana: string, segmentKana: string): number {
  // Find common prefix length
  let prefixLen = 0
  const minLen = Math.min(userKana.length, segmentKana.length)
  for (let i = 0; i < minLen; i++) {
    if (userKana[i] === segmentKana[i]) {
      prefixLen++
    } else {
      break
    }
  }

  // Score: prefix length weighted heavily + length similarity
  const lengthSimilarity =
    1 -
    Math.abs(userKana.length - segmentKana.length) /
      Math.max(userKana.length, segmentKana.length, 1)
  return prefixLen * 10 + lengthSimilarity
}

/**
 * Builds character-by-character mapping by parsing the original segment text.
 * Kanji with furigana uses proportional mapping, plain kana uses 1:1 mapping.
 */
function buildCharacterMap(
  original: string,
  overlaidStart: number,
  userStart: number,
  characterMap: Map<number, number>,
): void {
  let plainPos = 0
  let kanaPos = 0
  let i = 0

  while (i < original.length) {
    // Match kanji with furigana: 給料[きゅうりょう]
    const match = original.substring(i).match(createKanjiFuriganaGroupRegex(""))

    if (match) {
      const kanjiText = match[1]
      const kanaText = match[2]

      // Proportional mapping for kanji→kana
      for (let j = 1; j <= kanjiText.length; j++) {
        const proportional = Math.round(
          (kanaText.length * j) / kanjiText.length,
        )
        characterMap.set(
          overlaidStart + plainPos + j,
          userStart + kanaPos + proportional,
        )
      }

      plainPos += kanjiText.length
      kanaPos += kanaText.length
      i += match[0].length
    } else {
      // Plain character (kana/punctuation) - 1:1 mapping
      plainPos++
      kanaPos++
      characterMap.set(overlaidStart + plainPos, userStart + kanaPos)
      i++
    }
  }
}

/**
 * Applies the kanji overlay segment by segment.
 * When user's kana matches a segment's kana, outputs the segment's plain (kanji) form.
 * Tracks character boundary mappings for position translation.
 */
function applyOverlay(
  userKana: string,
  segments: RichSegment[],
): OverlayResult {
  const characterMap = new Map<number, number>()
  let overlaidText = ""
  let userPos = 0

  // Record starting boundary
  characterMap.set(0, 0)

  for (const seg of segments) {
    const segKana = seg.kana
    const segPlain = seg.plain

    // Check if user's next characters match this segment's kana
    const userSegment = userKana.substring(userPos, userPos + segKana.length)

    if (userSegment === segKana) {
      // Full match - output kanji form
      const overlaidStart = overlaidText.length
      const userStart = userPos

      overlaidText += segPlain

      // Parse original to build accurate character mappings
      buildCharacterMap(seg.original, overlaidStart, userStart, characterMap)

      userPos += segKana.length
    } else {
      // No match - output user's characters directly until end of this segment length
      // or until we run out of user input
      const charsToOutput = Math.min(segKana.length, userKana.length - userPos)
      for (let i = 0; i < charsToOutput; i++) {
        overlaidText += userKana[userPos]
        userPos++
        characterMap.set(overlaidText.length, userPos)
      }
    }
  }

  // Append any remaining user characters
  while (userPos < userKana.length) {
    overlaidText += userKana[userPos]
    userPos++
    characterMap.set(overlaidText.length, userPos)
  }

  return { overlaidText, characterMap }
}
