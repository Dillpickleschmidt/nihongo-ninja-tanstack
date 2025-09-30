// routes/_home/learn/$textbookId.$chapterSlug.tsx
import { createFileRoute, redirect, defer } from "@tanstack/solid-router"
import { getDeckBySlug, getExternalResources } from "@/data/utils/core"
import { LearnPageContent } from "@/features/learn-page/components/layout/LearnPageContent"
import {
  dueFSRSCardsCountQueryOptions,
  vocabHierarchyQueryOptions,
  completedModulesQueryOptions,
  fsrsProgressQueryOptions,
  resourceThumbnailQueryOptions,
} from "@/features/learn-page/queries/learn-page-queries"
import { enrichExternalResources } from "@/features/learn-page/utils/loader-helpers"
import type { TextbookIDEnum } from "@/data/types"

export const Route = createFileRoute("/_home/learn/$textbookId/$chapterSlug")({
  loader: async ({ context, params }) => {
    const { user, queryClient } = context
    const { textbookId, chapterSlug } = params

    // Validate deck exists (synchronous)
    const deck = getDeckBySlug(textbookId as TextbookIDEnum, chapterSlug)

    if (!deck) {
      throw redirect({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }

    // Use TanStack Query's ensureQueryData (checks cache, fetches if needed)
    const dueFSRSCardsCountPromise = queryClient.ensureQueryData(
      dueFSRSCardsCountQueryOptions(user?.id || null),
    )

    const completedModulesPromise = queryClient.ensureQueryData(
      completedModulesQueryOptions(user?.id || null),
    )

    const vocabHierarchyPromise = queryClient.ensureQueryData(
      vocabHierarchyQueryOptions(
        deck,
        context.initialUserPreferenceData["override-settings"],
      ),
    )

    // fsrsProgress depends on vocabHierarchy slugs, so we need to await it first
    const vocabHierarchyData = await vocabHierarchyPromise
    const fsrsProgressPromise = queryClient.ensureQueryData(
      fsrsProgressQueryOptions(
        user?.id || null,
        vocabHierarchyData?.slugs || [],
      ),
    )

    // Pre-fetch all resource thumbnails in parallel (non-blocking, for streaming)
    const rawResources = getExternalResources(deck)
    const externalResources = enrichExternalResources(rawResources)
    const resourcesArray = Object.values(externalResources)
    const thumbnailPromises = resourcesArray.map((resource) =>
      queryClient.ensureQueryData(
        resourceThumbnailQueryOptions(
          resource.id,
          resource.external_url,
          resource.creator_id,
        ),
      ),
    )

    // TODO: Replace with real data from backend
    const mockStruggles = ["食べる", "飲む", "見る", "聞く", "話す"]
    const mockHistoryItems = [
      {
        name: "Vocabulary Practice",
        icon: "📚",
        amount: 50,
        color: "bg-blue-500",
      },
      { name: "Grammar Lesson", icon: "✏️", amount: 30, color: "bg-green-500" },
      { name: "Kanji Review", icon: "🔠", amount: -20, color: "bg-red-500" },
      {
        name: "Reading Practice",
        icon: "📖",
        amount: 40,
        color: "bg-purple-500",
      },
    ]

    return {
      user,
      textbookId: textbookId as TextbookIDEnum,
      chapterSlug,
      deck,
      struggles: mockStruggles,
      historyItems: mockHistoryItems,
      externalResources,
      dueFSRSCardsCount: defer(dueFSRSCardsCountPromise),
      completedModules: defer(completedModulesPromise),
      vocabHierarchy: defer(Promise.resolve(vocabHierarchyData)),
      fsrsProgress: defer(fsrsProgressPromise),
      resourceThumbnails: thumbnailPromises.map((p) => defer(p)),
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <LearnPageContent />
}
