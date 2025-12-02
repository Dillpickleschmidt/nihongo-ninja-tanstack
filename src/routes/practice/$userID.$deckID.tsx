// src/routes/practice/$userID/$deckID.tsx
import { createFileRoute, notFound } from "@tanstack/solid-router"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import type { PracticeMode } from "@/features/vocab-practice/types"
import {
  userSettingsQueryOptions,
  userDeckInfoQueryOptions,
  userDeckVocabularyQueryOptions,
  userDeckAllQueryOptions,
  practiceDueFSRSCardsQueryOptions,
} from "@/query/query-options"
import { getActiveService } from "@/features/srs-services/utils"

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

    const deckId = params.deckID
    if (!deckId) {
      console.error(`[User Deck Route] Missing deckID`)
      throw notFound()
    }

    // Get user settings (needed for prerequisitesEnabled)
    const userSettings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    const prerequisitesEnabled =
      userSettings.routes["vocab-practice"]["enable-kanji-radical-prereqs"] ??
      true
    const isExternalServiceActive =
      getActiveService(userSettings["srs-service-preferences"]) !== null

    // Prefetch deck info (non-blocking)
    queryClient.prefetchQuery(userDeckInfoQueryOptions(deckId))

    // Chain vocabulary fetch then hierarchy (non-blocking)
    queryClient
      .ensureQueryData(userDeckVocabularyQueryOptions(deckId))
      .then((vocabulary) => {
        if (vocabulary.length === 0) {
          console.error(
            `[User Deck Route] No vocabulary found for deck ${deckId}`,
          )
          return
        }

        return queryClient.ensureQueryData(
          userDeckAllQueryOptions(
            deckId,
            vocabulary,
            mode,
            isExternalServiceActive,
            prerequisitesEnabled,
          ),
        )
      })
      .catch((error) => {
        console.error(
          `[User Deck Route Loader] Query chain error for deck ${deckId}:`,
          error,
        )
      })

    // Prefetch due cards for review items (only for local service)
    if (!isExternalServiceActive && user) {
      queryClient.ensureQueryData(
        practiceDueFSRSCardsQueryOptions(user.id, true),
      )
    }

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
