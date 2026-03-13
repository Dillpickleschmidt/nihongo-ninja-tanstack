// src/routes/_home/vocab/index.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { parsePreferencesCookie } from "@/query/model/preferences"
import { VocabDashboard } from "@/features/vocab-page/pages/main/components/VocabDashboard"

export const Route = createFileRoute("/_home/vocab/")({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(
      convexQuery(api.api.progress.getRecentModuleActivity, { limit: 20 }),
    )
    context.queryClient.prefetchQuery(
      convexQuery(api.api.missedWords.getMostMissedItems, {
        daysBack: 14,
        maxItems: 25,
        mode: "meanings",
      }),
    )
    const pathId = parsePreferencesCookie().activeLearningPath
    if (pathId) {
      context.queryClient.prefetchQuery(
        convexQuery(api.api.learning_paths.getDashboardData, { pathId }),
      )
    }
  },
  component: VocabDashboard,
})
