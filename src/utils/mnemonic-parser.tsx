// utils/mnemonic-parser.tsx
import { JSX } from "solid-js"

/**
 * Safely parses mnemonic text containing only <kanji>, <radical>, <reading>, and <vocabulary> tags
 * and returns JSX elements with proper styling.
 */
export function parseMnemonicText(text: string): JSX.Element[] {
  if (!text) return []

  // Split by the specific tags we want to handle
  const parts = text.split(
    /(<(?:kanji|radical|reading|vocabulary)>.*?<\/(?:kanji|radical|reading|vocabulary)>)/gi,
  )

  return parts.map((part, index) => {
    // Check if this part is a tag we want to style
    const kanjiMatch = part.match(/^<kanji>(.*?)<\/kanji>$/i)
    const radicalMatch = part.match(/^<radical>(.*?)<\/radical>$/i)
    const readingMatch = part.match(/^<reading>(.*?)<\/reading>$/i)
    const vocabMatch = part.match(/^<vocabulary>(.*?)<\/vocabulary>$/i)

    if (kanjiMatch) {
      return (
        <span class="inline-flex items-center rounded-[6px] bg-pink-500/20 px-1 py-0.25 text-sm font-normal text-pink-400">
          {kanjiMatch[1]}
        </span>
      )
    } else if (radicalMatch) {
      return (
        <span class="inline-flex items-center rounded-[6px] bg-green-500/20 px-1 py-0.25 text-sm font-normal text-green-400">
          {radicalMatch[1]}
        </span>
      )
    } else if (readingMatch) {
      return (
        <span class="inline-flex items-center rounded-[6px] bg-orange-500/20 px-1 py-0.25 text-sm font-normal text-orange-400">
          {readingMatch[1]}
        </span>
      )
    } else if (vocabMatch) {
      return (
        <span class="inline-flex items-center rounded-[6px] bg-blue-500/20 px-1 py-0.25 text-sm font-normal text-blue-400">
          {vocabMatch[1]}
        </span>
      )
    } else {
      // Regular text
      return <span>{part}</span>
    }
  })
}
