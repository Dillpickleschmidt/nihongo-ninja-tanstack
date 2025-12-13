import { convertFuriganaToRubyHtml } from "@/data/utils/text/furigana"
import { containsKanji } from "@/data/utils/text/japanese"
import type { RichSegment } from "./types"

export const SEGMENT_SEPARATOR = "\x1F" // segment boundary marker

// Normalizes: strips punctuation, whitespace, separators
export function normalizeText(text: string): string {
  return text
    .trim()
    .normalize("NFKC")
    .replace(/\x1F/g, "")
    .replace(/、/g, "")
    .replace(/[。?!？！]$/, "")
}

export interface NormalizedWithMap {
  text: string
  toOriginal: (pos: number) => number
}

// Normalizes text and returns a function to map positions back to original
export function normalizeWithPositions(text: string): NormalizedWithMap {
  const trimmed = text.trim().normalize("NFKC")

  // Track which positions survive normalization
  const survivingPositions: number[] = []
  let normalized = ""

  for (let i = 0; i < trimmed.length; i++) {
    const char = trimmed[i]
    const isEndPunctuation = /[。?!？！]/.test(char) && i === trimmed.length - 1
    if (char !== "\x1F" && char !== "、" && !isEndPunctuation) {
      survivingPositions.push(i)
      normalized += char
    }
  }
  survivingPositions.push(trimmed.length) // end position

  return {
    text: normalized,
    toOriginal: (pos: number) => survivingPositions[pos] ?? trimmed.length,
  }
}

// "行[い]く" → "行く"
export function removeFurigana(text: string): string {
  return text.replace(/\[.*?\]/g, "")
}

// "行[い]く" → "いく" (only matches kanji before brackets, preserves adjacent hiragana)
export function convertToKana(text: string): string {
  return text.replace(/[一-龯]+\[(.+?)\]/g, "$1")
}

export function convertToRuby(text: string, furiganaSize?: string): string {
  return convertFuriganaToRubyHtml(text, furiganaSize)
}

export function anyContainsKanji(inputs: (string | null | undefined)[]): boolean {
  return inputs.some((text) => text && containsKanji(text))
}

export function extractPlainText(segments: string[]): string {
  const plainText = segments
    .map((segment) => removeFurigana(segment))
    .join("")
    .replace(/\s+/g, "")
  return normalizeText(plainText)
}

export function createRichSegment(original: string, isBlank: boolean): RichSegment {
  return {
    original,
    plain: removeFurigana(original),
    kana: convertToKana(original),
    ruby: convertToRuby(original),
    isBlank,
  }
}

// Maps plain text positions → original positions (for error highlighting through furigana)
export function calculatePositionMap(original: string): Map<number, number> {
  const plainToOriginal = new Map<number, number>()
  let plainPos = 0
  let inBracket = false

  for (let i = 0; i < original.length; i++) {
    const char = original[i]
    if (char === "[") {
      inBracket = true
    } else if (char === "]") {
      inBracket = false
    } else if (!inBracket) {
      plainToOriginal.set(plainPos, i)
      plainPos++
    }
  }
  plainToOriginal.set(plainPos, original.length)

  return plainToOriginal
}
