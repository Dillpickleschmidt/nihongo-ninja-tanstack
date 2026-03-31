import { convertFuriganaToRubyHtml } from "@/data/utils/text/furigana"
import type { PracticeCard } from "../types"
import type { PracticeItemType } from "convex/validators"

// Type badge classes (used across card components)
export const TYPE_BADGE_CLASSES: Record<PracticeItemType, string> = {
  vocabulary: "bg-orange-500/10 text-orange-500",
  kanji: "bg-indigo-500/10 text-indigo-500",
  radical: "bg-purple-500/10 text-purple-500",
}

// Type text colors (used for answer display)
export const TYPE_TEXT_COLORS: Record<PracticeItemType, string> = {
  vocabulary: "text-orange-500",
  kanji: "text-indigo-500",
  radical: "text-purple-500",
}

// Pre-compiled regex patterns for mnemonic formatting
const MNEMONIC_REPLACEMENTS = [
  {
    pattern: /<radical>([^<]+)<\/radical>/g,
    replacement: '<span class="text-purple-500 font-medium">$1</span>',
  },
  {
    pattern: /<kanji>([^<]+)<\/kanji>/g,
    replacement: '<span class="text-indigo-500 font-medium">$1</span>',
  },
  {
    pattern: /<reading>([^<]+)<\/reading>/g,
    replacement: '<span class="text-orange-500 font-medium">$1</span>',
  },
] as const

export function formatMnemonic(text: string): string {
  let result = text
  for (const { pattern, replacement } of MNEMONIC_REPLACEMENTS) {
    result = result.replace(pattern, replacement)
  }
  return result
}

export type PromptDisplay = {
  html?: string
  text?: string
  isHtml: boolean
}

export function getPromptDisplay(
  card: PracticeCard,
  rubySize = "1rem",
): PromptDisplay {
  if (
    card.practiceItemType === "vocabulary" &&
    card.practiceMode === "meanings"
  ) {
    if (card.vocab.furigana) {
      return {
        html: convertFuriganaToRubyHtml(card.vocab.furigana, rubySize),
        isHtml: true,
      }
    }
    return { text: card.vocab.word, isHtml: false }
  }
  return { text: card.prompt, isHtml: false }
}

export function getMnemonic(card: PracticeCard): string | null {
  const mnemonics = card.vocab.mnemonics
  if (!mnemonics) return null

  if (card.practiceItemType === "vocabulary") {
    return mnemonics.reading?.[0] || null
  }
  return mnemonics.kanji?.[0] || null
}
