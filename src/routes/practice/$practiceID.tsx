// src/routes/practice/$practiceID.tsx
import { createFileRoute, notFound } from "@tanstack/solid-router"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import type { PracticeMode } from "@/features/vocab-practice/types"
import {
  userSettingsQueryOptions,
  vocabModuleAllQueryOptions,
  practiceDueFSRSCardsQueryOptions,
} from "@/query/query-options"
import { getActiveService } from "@/features/srs-services/utils"

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

    // Get user settings (needed for prerequisitesEnabled)
    const userSettings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    const prerequisitesEnabled =
      userSettings.routes["vocab-practice"]["enable-kanji-radical-prereqs"] ??
      true
    const isExternalServiceActive =
      getActiveService(userSettings["srs-service-preferences"]) !== null

    // Prefetch module data (non-blocking - fire and forget)
    queryClient.ensureQueryData(
      vocabModuleAllQueryOptions(
        moduleId,
        mode,
        isExternalServiceActive,
        prerequisitesEnabled,
      ),
    )

    // Prefetch due cards for review items (only for local service)
    if (!isExternalServiceActive && user) {
      queryClient.ensureQueryData(
        practiceDueFSRSCardsQueryOptions(user.id, true),
      )
    }

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
