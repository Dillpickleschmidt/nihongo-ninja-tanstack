// core/text/KanaToKanjiOverlay.ts
import type { PracticeQuestion } from "../answer-processing/types"
import type { UnprocessedQuestion } from "../conjugation/types"
import { AnswerChecker } from "../answer-processing/AnswerChecker"
import { TextProcessor } from "./TextProcessor"

export interface SegmentMapping {
  overlaidStart: number
  overlaidEnd: number
  userStart: number
  userEnd: number
}

export interface OverlayResult {
  overlaidText: string
  segmentMappings: SegmentMapping[]
}

/**
 * Converts pure kana user input to parseable Japanese by overlaying kanji
 * from the best-matching answer.
 *
 * See: /KANA_TO_KANJI_OVERLAY.md for detailed algorithm explanation
 */
export class KanaToKanjiOverlay {
  constructor(
    private answerChecker: AnswerChecker,
    private textProcessor: TextProcessor,
  ) {}

  /**
   * Main method: overlays kanji onto pure kana input
   * Returns overlay result with position mapping, or null if no overlay needed
   *
   * @param userInput - User's pure kana input
   * @param question - Processed question (for accurate matching)
   * @param rawQuestion - Unprocessed question (for extracting kanji from furigana)
   */
  overlayKanji(
    userInput: string,
    question: PracticeQuestion,
    rawQuestion: UnprocessedQuestion,
  ): OverlayResult | null {
    // Skip if input contains kanji
    if (this.textProcessor.containsKanji(userInput)) {
      return null
    }

    // Find best matching answer
    const checkResult = this.answerChecker.checkAnswer(userInput, question)
    const bestMatch = checkResult.allMatches[0]

    // Skip if no match found
    if (!bestMatch) {
      return null
    }

    // Extract kanji and kana forms from raw answer (preserves furigana notation)
    const rawSegments = rawQuestion.answers[bestMatch.answer.sourceAnswerIndex].segments

    // Process each segment individually to extract both kanji and kana forms
    const parts = rawSegments.map((segment) => {
      let segmentText: string

      if (typeof segment === "string") {
        segmentText = segment
      } else if ("word" in segment) {
        // Handle conjugation objects - extract the word
        segmentText = typeof segment.word === "string" ? segment.word : segment.word.word
      } else {
        segmentText = ""
      }

      return {
        kanji: this.textProcessor.removeFurigana(segmentText),
        kana: this.textProcessor.convertToKana(segmentText),
      }
    })

    // Build segment range mappings
    interface SegmentRange {
      kanaStart: number
      kanaEnd: number
      kanji: string
    }

    const segmentRanges: SegmentRange[] = []
    let kanaOffset = 0
    for (const part of parts) {
      if (part.kana.length > 0) {
        segmentRanges.push({
          kanaStart: kanaOffset,
          kanaEnd: kanaOffset + part.kana.length,
          kanji: part.kanji,
        })
        kanaOffset += part.kana.length
      }
    }

    const kanaForm = parts.map((p) => p.kana).join("")

    // Apply left-to-right overlay using segment ranges
    return this.applyKanjiOverlay(userInput, kanaForm, segmentRanges)
  }

  /**
   * Left-to-right overlay of kanji onto user's kana using segment ranges
   * When a full segment's kana matches, replace with its kanji (output once, not per character)
   * Returns both overlaid text and segment mappings
   */
  private applyKanjiOverlay(
    userKana: string,
    matchKana: string,
    segmentRanges: Array<{ kanaStart: number; kanaEnd: number; kanji: string }>,
  ): OverlayResult {
    let overlaidText = ""
    const segmentMappings: SegmentMapping[] = []
    let userPos = 0
    let matchPos = 0
    let matchedSegments = 0
    let mismatchedChars = 0

    while (userPos < userKana.length && matchPos < matchKana.length) {
      // Find current segment in match
      const segment = segmentRanges.find(
        (s) => matchPos >= s.kanaStart && matchPos < s.kanaEnd,
      )

      if (!segment) {
        // No segment found (shouldn't happen) - output user char
        const overlaidStart = overlaidText.length
        overlaidText += userKana[userPos]
        segmentMappings.push({
          overlaidStart,
          overlaidEnd: overlaidText.length,
          userStart: userPos,
          userEnd: userPos + 1,
        })
        userPos++
        continue
      }

      // Try to match the entire segment
      const segmentLength = segment.kanaEnd - segment.kanaStart
      const userSegment = userKana.substring(userPos, userPos + segmentLength)
      const matchSegment = matchKana.substring(
        segment.kanaStart,
        segment.kanaEnd,
      )

      if (userSegment === matchSegment) {
        // Full segment match - output kanji once and record segment mapping
        const overlaidStart = overlaidText.length
        const userSegmentStart = userPos
        const userSegmentEnd = userPos + segmentLength

        overlaidText += segment.kanji

        segmentMappings.push({
          overlaidStart,
          overlaidEnd: overlaidText.length,
          userStart: userSegmentStart,
          userEnd: userSegmentEnd,
        })

        userPos += segmentLength
        matchPos += segmentLength
        matchedSegments++
      } else {
        // Segment doesn't match - output user's character and skip this segment in match
        const overlaidStart = overlaidText.length
        overlaidText += userKana[userPos]
        segmentMappings.push({
          overlaidStart,
          overlaidEnd: overlaidText.length,
          userStart: userPos,
          userEnd: userPos + 1,
        })
        userPos++
        matchPos = segment.kanaEnd // Skip to next segment in match
        mismatchedChars++
      }
    }

    // Append any remaining user characters
    while (userPos < userKana.length) {
      const overlaidStart = overlaidText.length
      overlaidText += userKana[userPos]
      segmentMappings.push({
        overlaidStart,
        overlaidEnd: overlaidText.length,
        userStart: userPos,
        userEnd: userPos + 1,
      })
      userPos++
    }

    return { overlaidText, segmentMappings }
  }
}
