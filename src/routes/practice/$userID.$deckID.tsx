// src/routes/practice/$userID/$deckID.tsx
import { createFileRoute, notFound } from "@tanstack/solid-router"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { userSettingsQueryOptions } from "@/query/query-options"
import { getActiveLiveService } from "@/features/srs-services/utils"
import {
  userDeckInfoQueryOptions,
  userDeckVocabularyQueryOptions,
  userDeckHierarchyQueryOptions,
} from "@/query/query-options"
import {
  extractHierarchySlugs,
  prefetchFSRSAndSVGs,
} from "@/features/vocab-practice/utils/route-loader-helpers"

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

    const deckId = params.deckID // deckID is now a string, not numeric
    if (!deckId) {
      console.error(`[User Deck Route] Missing deckID`)
      throw notFound()
    }

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
        if (vocabulary.length === 0) {
          console.error(
            `[User Deck Route] No vocabulary found for deck ${deckId} - throwing notFound()`,
          )
          throw notFound()
        }

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
          const hierarchySlugs = extractHierarchySlugs(hierarchy)

          prefetchFSRSAndSVGs({
            queryClient,
            userId: user.id,
            hierarchySlugs,
            hierarchy,
            mode,
          })
        }
      })
      .catch((error) => {
        console.error(
          `[User Deck Route Loader] Query chain error for deck ${deckId}:`,
          error,
        )
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
