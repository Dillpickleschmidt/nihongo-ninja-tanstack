export function parseBuiltInDeckId(originalDeckId: string): {
  textbook: string
  chapter: string
} | null {
  const match = originalDeckId.match(/^(genki_[12])_ch(\d+)/)
  if (!match) return null

  return {
    textbook: match[1], // "genki_1"
    chapter: `chapter-${match[2]}`, // "chapter-0"
  }
}
