// core/text/TextProcessor.ts
import { extractHiragana, convertFuriganaToRubyHtml } from "@/data/utils/text/furigana"
import type { ConjugatableSegment, BlankableWord } from "../conjugation/types"
import * as wanakana from "wanakana"

export class TextProcessor {
  normalize(text: string): string {
    return text.trim().normalize("NFKC").replace(/、/g, "").replace(/[。?!]$/, "")
  }

  isBlankableWord(segment: ConjugatableSegment): segment is BlankableWord {
    return typeof segment === "object" && "blank" in segment
  }

  extractPlainText(segments: ConjugatableSegment[]): string {
    const plainText = segments
      .map((segment) => {
        if (typeof segment === "string") {
          return this.removeFurigana(segment)
        }
        if (this.isBlankableWord(segment)) {
          const word = segment.word
          return this.removeFurigana(
            typeof word === "string" ? word : word.word,
          )
        }
        if ("word" in segment) {
          return this.removeFurigana(segment.word)
        }
        return ""
      })
      .join("")
      .replace(/\s+/g, "") // Remove all spaces after joining

    return this.normalize(plainText)
  }

  removeFurigana(segment: string): string {
    return segment.replace(/\[.*?\]/g, "")
  }

  convertToRuby(text: string, furiganaSize?: string): string {
    return convertFuriganaToRubyHtml(text, furiganaSize)
  }

  /**
   * Extracts kana readings from text with furigana brackets
   */
  convertToKana(text: string): string {
    return extractHiragana(text)
  }

  /**
   * Checks if text contains only kana characters (and allowed punctuation)
   */
  containsKanji(input: string | (string | null | undefined)[]): boolean {
    const inputs = Array.isArray(input) ? input : [input]
    return inputs.some(
      (text) => text && text.split("").some((char) => wanakana.isKanji(char)),
    )
  }

  getSegmentDisplay(segment: ConjugatableSegment): {
    text: string
    isBlank: boolean
  } {
    if (typeof segment === "string") {
      return { text: this.removeFurigana(segment), isBlank: false }
    }

    if (this.isBlankableWord(segment)) {
      const word = segment.word
      const text = typeof word === "string" ? word : word.word
      return { text: this.removeFurigana(text), isBlank: segment.blank }
    }

    return { text: this.removeFurigana(segment.word), isBlank: false }
  }

  processSegmentsForDisplay(segments: ConjugatableSegment[]): Array<{
    text: string
    isBlank: boolean
  }> {
    return segments.map((segment) => this.getSegmentDisplay(segment))
  }

  calculatePositionMappings(text: string): {
    originalToBase: Map<number, number>
    baseToOriginal: Map<number, number>
  } {
    const originalToBase = new Map<number, number>()
    const baseToOriginal = new Map<number, number>()
    let basePosition = 0
    let inBracket = false

    // Pre-calculate normalized positions
    const normalizedPositions = new Map<number, number>()
    let normalizedIndex = 0
    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      if (char !== "、") {
        normalizedPositions.set(normalizedIndex, i)
        normalizedIndex++
      }
    }

    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      if (char === "[") {
        inBracket = true
      } else if (char === "]") {
        inBracket = false
      } else if (!inBracket && char !== " " && char !== "、") {
        originalToBase.set(i, basePosition)
        baseToOriginal.set(basePosition, i)
        basePosition++
      }
    }

    // Map end positions
    originalToBase.set(text.length, basePosition)
    baseToOriginal.set(basePosition, text.length)

    return { originalToBase, baseToOriginal }
  }
}
