// src/routes/practice/$userID/$deckID.tsx
import { createFileRoute, notFound } from "@tanstack/solid-router"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { getActiveLiveService } from "@/features/srs-services/utils"
import {
  userDeckInfoQueryOptions,
  userDeckVocabularyQueryOptions,
  userDeckHierarchyQueryOptions,
  practiceModuleFSRSCardsQueryOptions,
  practiceDueFSRSCardsQueryOptions,
  hierarchySvgsQueryOptions,
} from "@/features/vocab-practice/query/query-options"

export const Route = createFileRoute("/practice/$userID/$deckID")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { mode: PracticeMode } => ({
    mode:
      (search.mode as PracticeMode) === "spellings" ? "spellings" : "meanings",
  }),
  loaderDeps: ({ search }) => ({ mode: search.mode }),
  loader: async ({ context, params, deps }) => {
    const { queryClient, user } = context
    const mode: PracticeMode = deps.mode

    const deckId = parseInt(params.deckID, 10)
    if (isNaN(deckId)) throw notFound()

    const userSettings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    const isLiveServiceActive =
      getActiveLiveService(userSettings["service-preferences"]) !== null

    // Prefetch deck info (non-blocking)
    queryClient.prefetchQuery(userDeckInfoQueryOptions(deckId))

    // Chain all queries without blocking the loader
    queryClient
      .ensureQueryData(userDeckVocabularyQueryOptions(deckId))
      .then((vocabulary) => {
        if (vocabulary.length === 0) throw notFound()

        return queryClient.ensureQueryData(
          userDeckHierarchyQueryOptions(
            deckId,
            vocabulary,
            mode,
            userSettings["override-settings"],
            isLiveServiceActive,
          ),
        )
      })
      .then((hierarchy) => {
        // Only prefetch FSRS and SVGs for local mode with authenticated user
        if (!isLiveServiceActive && user) {
          // Extract all slugs for FSRS data fetching
          const allHierarchySlugs = new Set<string>()
          hierarchy.vocabulary.forEach((v) => allHierarchySlugs.add(v.word))
          hierarchy.kanji.forEach((k) => allHierarchySlugs.add(k.kanji))
          hierarchy.radicals.forEach((r) => allHierarchySlugs.add(r.radical))

          queryClient.prefetchQuery(
            practiceModuleFSRSCardsQueryOptions(
              user.id,
              Array.from(allHierarchySlugs),
              true,
            ),
          )
          queryClient.prefetchQuery(
            practiceDueFSRSCardsQueryOptions(user.id, true),
          )

          // Extract and prefetch SVGs
          const hierarchyKanjiRadicals: string[] = []
          hierarchy.kanji.forEach((k) => hierarchyKanjiRadicals.push(k.kanji))
          hierarchy.radicals.forEach((r) =>
            hierarchyKanjiRadicals.push(r.radical),
          )

          if (hierarchyKanjiRadicals.length > 0) {
            queryClient.prefetchQuery(
              hierarchySvgsQueryOptions(hierarchyKanjiRadicals),
            )
          }
        }
      })
      .catch((error) => {
        console.error("[User Deck Route Loader] Query chain error:", error)
      })

    return {
      deckId,
      mode,
      userId: user?.id || null,
    }
  },
  component: RouteComponent,
  notFoundComponent: () => <div>404 Not found</div>,
})

function RouteComponent() {
  const data = Route.useLoaderData()

  return (
    <VocabPractice
      deckId={data().deckId}
      mode={data().mode}
      userId={data().userId}
    />
  )
}
