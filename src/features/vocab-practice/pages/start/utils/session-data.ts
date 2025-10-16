// features/vocab-practice/components/pages/start-page/utils/session-data.ts
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { QueryClient } from "@tanstack/solid-query"
import type { SRSServiceType } from "@/features/srs-services/types"
import {
  practiceModuleFSRSCardsQueryOptions,
  practiceDueFSRSCardsQueryOptions,
} from "@/features/vocab-practice/query/query-options"

/**
 * Fetches FSRS card data for a practice session.
 * Only fetches data when using local FSRS service.
 */
export async function fetchStartSessionData(params: {
  queryClient: QueryClient
  hierarchy: VocabHierarchy
  activeService: SRSServiceType | null
  userId: string | null
}): Promise<{
  hierarchy: VocabHierarchy
  fsrsCards: any[]
  dueCards: any[]
}> {
  const { queryClient, hierarchy, activeService, userId } = params

  // Extract slugs from hierarchy for FSRS queries
  const allSlugs = Array.from(
    new Set([
      ...hierarchy.vocabulary.map((v: any) => v.word),
      ...hierarchy.kanji.map((k: any) => k.kanji),
      ...hierarchy.radicals.map((r: any) => r.radical),
    ]),
  )

  // Fetch FSRS data with the slugs (only for local service)
  const [fsrsCards, dueCards] = await Promise.all([
    activeService === "local" && userId
      ? queryClient.ensureQueryData(
          practiceModuleFSRSCardsQueryOptions(userId, allSlugs, true),
        )
      : [],
    activeService === "local" && userId
      ? queryClient.ensureQueryData(
          practiceDueFSRSCardsQueryOptions(userId, true),
        )
      : [],
  ])

  return {
    hierarchy,
    fsrsCards,
    dueCards,
  }
}
