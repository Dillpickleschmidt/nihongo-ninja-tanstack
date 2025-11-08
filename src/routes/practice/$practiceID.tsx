// src/routes/practice/$practiceID.tsx
import { createFileRoute, notFound } from "@tanstack/solid-router"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { userSettingsQueryOptions } from "@/query/query-options"
import { getActiveLiveService } from "@/features/srs-services/utils"
import {
  practiceHierarchyQueryOptions,
  moduleVocabularyQueryOptions,
} from "@/query/query-options"
import {
  extractHierarchySlugs,
  prefetchFSRSAndSVGs,
} from "@/features/vocab-practice/utils/route-loader-helpers"

export const Route = createFileRoute("/practice/$practiceID")({
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

    if (!params.practiceID) throw notFound()
    const moduleId = params.practiceID

    const userSettings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    const isLiveServiceActive =
      getActiveLiveService(userSettings["service-preferences"]) !== null

    queryClient
      .ensureQueryData(moduleVocabularyQueryOptions(moduleId))
      .then((vocabulary) => {
        return queryClient.ensureQueryData(
          practiceHierarchyQueryOptions(
            moduleId,
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
        console.error("[Route Loader] Query chain error:", error)
      })

    return {
      moduleId,
      mode,
      userId: user?.id || null,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = Route.useLoaderData()

  return (
    <VocabPractice
      moduleId={data().moduleId}
      mode={data().mode}
      userId={data().userId}
    />
  )
}
