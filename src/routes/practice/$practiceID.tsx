// src/routes/practice/$practiceID.tsx
import { createFileRoute, notFound } from "@tanstack/solid-router"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { getActiveLiveService } from "@/features/srs-services/utils"
import {
  practiceHierarchyQueryOptions,
  moduleVocabularyQueryOptions,
  practiceModuleFSRSCardsQueryOptions,
  practiceDueFSRSCardsQueryOptions,
  hierarchySvgsQueryOptions,
} from "@/features/vocab-practice/query/query-options"

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
        console.error("[Route Loader] Query chain error:", error)
      })

    return {
      moduleId,
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
      moduleId={data().moduleId}
      mode={data().mode}
      userId={data().userId}
    />
  )
}
