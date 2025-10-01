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

    // Prefetch queries without awaiting (for streaming SSR)
    queryClient.prefetchQuery(completedModulesQueryOptions(user?.id || null))
    queryClient.prefetchQuery(dueFSRSCardsCountQueryOptions(user?.id || null))

    const vocabHierarchyData = await queryClient.ensureQueryData(
      vocabHierarchyQueryOptions(
        deck,
        context.initialUserPreferenceData["override-settings"],
      ),
    )
    // Now prefetch fsrsProgress with the slugs from vocabHierarchy
    queryClient.prefetchQuery(
      fsrsProgressQueryOptions(user?.id || null, textbookId, deck.slug, vocabHierarchyData.slugs),
    )

    // Pre-fetch all resource thumbnails in parallel (non-blocking, for streaming)
    const rawResources = getExternalResources(deck)
    const externalResources = enrichExternalResources(rawResources)
    const resourcesArray = Object.values(externalResources)
    resourcesArray.forEach((resource) =>
      queryClient.prefetchQuery(
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
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <LearnPageContent />
}
