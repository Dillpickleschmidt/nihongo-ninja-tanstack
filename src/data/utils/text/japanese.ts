// Japanese text utilities for character detection and analysis

// Check if text contains kanji characters
export function containsKanji(text: string): boolean {
  return /[\u4e00-\u9faf]/.test(text)
}

/**
 * Extract all kanji characters from text using Unicode ranges
 * @param text - Input text that may contain kanji
 * @returns Array of unique kanji characters
 */
export function extractKanjiCharacters(text: string): string[] {
  const matches = text.match(/[\u4e00-\u9faf]/g) || []
  return [...new Set(matches)] // Remove duplicates
}
