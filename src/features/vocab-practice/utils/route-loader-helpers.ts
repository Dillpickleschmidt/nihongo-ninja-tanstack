// Shared utility functions for route loaders and start page logic
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { PracticeMode } from "@/features/vocab-practice/types"
import type { QueryClient } from "@tanstack/solid-query"
import {
  practiceModuleFSRSCardsQueryOptions,
  practiceDueFSRSCardsQueryOptions,
  hierarchySvgsQueryOptions,
} from "@/query/query-options"

/**
 * Extract all practice item slugs from hierarchy
 */
export function extractHierarchySlugs(hierarchy: VocabHierarchy): string[] {
  const slugs = new Set<string>()
  hierarchy.vocabulary.forEach((v) => slugs.add(v.word))
  hierarchy.kanji.forEach((k) => slugs.add(k.kanji))
  hierarchy.radicals.forEach((r) => slugs.add(r.radical))
  return Array.from(slugs)
}

/**
 * Calculate which SVG characters to prefetch/query
 * This MUST be used by both route loader and start page to ensure matching query keys
 */
export function calculateSvgCharacters(params: {
  hierarchy: VocabHierarchy
  dueCards: FSRSCardData[]
  isLocalService: boolean
}): string[] {
  const { hierarchy, dueCards, isLocalService } = params

  // Start with hierarchy characters
  const chars: string[] = []
  hierarchy.kanji.forEach((k) => chars.push(k.kanji))
  hierarchy.radicals.forEach((r) => chars.push(r.radical))

  // Add estimated review characters if using local FSRS
  if (isLocalService && dueCards.length > 0) {
    const moduleItemCount =
      hierarchy.vocabulary.length +
      (hierarchy.kanji?.length || 0) +
      (hierarchy.radicals?.length || 0)

    // Estimate reviews with 50% safety buffer (interleaving ratio ~0.33)
    const baseEstimate = Math.ceil(moduleItemCount * 0.33)
    const estimatedReviewsWithBuffer = Math.ceil(baseEstimate * 1.5)
    const reviewsToFetch = Math.min(dueCards.length, estimatedReviewsWithBuffer)

    // Add kanji/radicals from estimated review cards (sorted by due_at)
    dueCards.slice(0, reviewsToFetch).forEach((card) => {
      if (
        (card.type === "kanji" || card.type === "radical") &&
        card.practice_item_key.length === 1 &&
        !chars.includes(card.practice_item_key)
      ) {
        chars.push(card.practice_item_key)
      }
    })
  }

  return chars
}

/**
 * Prefetch FSRS cards and SVG data for a practice module
 * Used by route loaders to warm the cache before component render
 */
export async function prefetchFSRSAndSVGs(params: {
  queryClient: QueryClient
  userId: string
  hierarchySlugs: string[]
  hierarchy: VocabHierarchy
  mode: PracticeMode
}): Promise<void> {
  const { queryClient, userId, hierarchySlugs, hierarchy, mode } = params

  // Fetch FSRS data in parallel
  const [fsrsCards, dueCards] = await Promise.all([
    queryClient.ensureQueryData(
      practiceModuleFSRSCardsQueryOptions(userId, hierarchySlugs, mode, true),
    ),
    queryClient.ensureQueryData(practiceDueFSRSCardsQueryOptions(userId, true)),
  ])

  // Calculate and prefetch SVG characters
  const svgCharacters = calculateSvgCharacters({
    hierarchy,
    dueCards,
    isLocalService: true,
  })

  if (svgCharacters.length > 0) {
    const hierarchyCount = hierarchy.kanji.length + hierarchy.radicals.length
    console.log(
      `[Route Loader] Prefetching ${svgCharacters.length} SVGs (${hierarchyCount} hierarchy + ${svgCharacters.length - hierarchyCount} estimated reviews)`,
    )
    queryClient.prefetchQuery(hierarchySvgsQueryOptions(svgCharacters))
  }
}
