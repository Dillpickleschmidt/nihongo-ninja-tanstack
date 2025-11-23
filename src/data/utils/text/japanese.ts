// Japanese text utilities for character detection and analysis

/**
 * Check if text contains kanji characters
 */
export function hasKanji(text: string): boolean {
  return /[一-龯]/.test(text)
}
