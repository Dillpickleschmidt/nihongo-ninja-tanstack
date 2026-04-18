import type { QueryClient } from "@tanstack/solid-query"
import { kanjiSvgPrefetchQueryOptions } from "@/query/query-options"
import type { PracticeCard, PracticeSessionState } from "../types"

type PrefetchQueryClient = Pick<QueryClient, "prefetchQuery">

export function getPracticeSessionSvgCharacters(
  state: PracticeSessionState,
): string[] {
  const characters: string[] = []
  const seenKeys = new Set<string>()
  const seenCharacters = new Set<string>()

  const visitKey = (key: string) => {
    if (seenKeys.has(key)) return
    seenKeys.add(key)

    const card = state.cardMap.get(key)
    if (!card || !shouldPrefetchCardSvg(card)) return

    const character = card.vocab.word
    if (seenCharacters.has(character)) return

    seenCharacters.add(character)
    characters.push(character)
  }

  state.activeQueue.forEach(visitKey)
  state.moduleQueue.forEach(visitKey)
  state.reviewQueue.forEach(visitKey)
  state.lockedKeys.forEach(visitKey)
  state.cardMap.forEach((_card, key) => visitKey(key))

  return characters
}

export function prefetchPracticeSessionSvgs(
  queryClient: PrefetchQueryClient,
  state: PracticeSessionState,
): void {
  void prefetchKanjiSvgCharacters(
    queryClient,
    getPracticeSessionSvgCharacters(state),
  )
}

export async function prefetchKanjiSvgCharacters(
  queryClient: PrefetchQueryClient,
  characters: string[],
): Promise<void> {
  const uniqueCharacters = Array.from(new Set(characters))

  await Promise.all(
    uniqueCharacters.map(async (character) => {
      try {
        await queryClient.prefetchQuery(kanjiSvgPrefetchQueryOptions(character))
      } catch (error) {
        if (import.meta.env.DEV) {
          console.warn(`Failed to prefetch SVG for ${character}:`, error)
        }
      }
    }),
  )
}

function shouldPrefetchCardSvg(card: PracticeCard): boolean {
  if (card.isDisabled) return false

  if (
    card.practiceItemType !== "kanji" &&
    card.practiceItemType !== "radical"
  ) {
    return false
  }

  if (Array.from(card.vocab.word).length !== 1) return false

  if (card.ankiRenderedHtml && card.sessionStyle !== "introduction") {
    return false
  }

  return true
}
