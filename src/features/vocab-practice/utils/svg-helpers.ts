import { fetchKanjiSvgsBatch } from "@/utils/svg-processor"
import type { PracticeSessionState } from "../types"

/**
 * Extracts unique kanji and radical characters from practice session state
 */
function extractKanjiRadicalsFromSession(
  state: PracticeSessionState,
): string[] {
  const characters: string[] = []

  for (const card of state.cardMap.values()) {
    if (
      card.practiceItemType === "kanji" ||
      card.practiceItemType === "radical"
    ) {
      // For kanji/radicals, the character is the word
      characters.push(card.vocab.word)
    }
  }

  return Array.from(new Set(characters))
}

/**
 * Fetches additional SVGs for characters in the session that weren't in the initial hierarchy
 */
export async function fetchAdditionalSvgsForSession(
  state: PracticeSessionState,
  existingSvgs: Map<string, string>,
): Promise<Map<string, string>> {
  const allCharacters = extractKanjiRadicalsFromSession(state)
  const missingCharacters = allCharacters.filter(
    (char) => !existingSvgs.has(char),
  )

  if (missingCharacters.length === 0) {
    return new Map()
  }

  console.log(
    `[SVG] Fetching ${missingCharacters.length} additional SVGs for session`,
  )
  return await fetchKanjiSvgsBatch(missingCharacters)
}
