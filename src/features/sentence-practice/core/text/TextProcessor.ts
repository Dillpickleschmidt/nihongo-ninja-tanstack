// core/text/TextProcessor.ts
import { extractHiragana, convertFuriganaToRubyHtml } from "@/data/utils/text/furigana"
import type { SentenceSegment } from "convex/validators"
import * as wanakana from "wanakana"

class TextProcessor {
  normalize(text: string): string {
    return text.trim().normalize("NFKC").replace(/、/g, "").replace(/[。?!]$/, "")
  }

  /**
   * Extract plain text from processed answer segments (string[])
   */
  extractPlainText(segments: string[]): string {
    const plainText = segments
      .map((segment) => this.removeFurigana(segment))
      .join("")
      .replace(/\s+/g, "") // Remove all spaces after joining

    return this.normalize(plainText)
  }

  /**
   * Extract plain text from raw DB segments (SentenceSegment[])
   */
  extractPlainTextFromRaw(segments: SentenceSegment[]): string {
    const plainText = segments
      .map((segment) => this.removeFurigana(segment.text))
      .join("")
      .replace(/\s+/g, "")

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

  getSegmentDisplay(segment: SentenceSegment): {
    text: string
    isBlank: boolean
  } {
    return {
      text: this.removeFurigana(segment.text),
      isBlank: segment.blank ?? false,
    }
  }

  processSegmentsForDisplay(segments: SentenceSegment[]): Array<{
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

export const textProcessor = new TextProcessor()
