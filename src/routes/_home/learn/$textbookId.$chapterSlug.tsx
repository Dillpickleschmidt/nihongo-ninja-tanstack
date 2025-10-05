// routes/_home/learn/$textbookId.$chapterSlug.tsx
import { createFileRoute, redirect } from "@tanstack/solid-router"
import { getDeckBySlug, getModules } from "@/data/utils/core"
import { LearnPageContent } from "@/features/learn-page/components/layout/LearnPageContent"
import { LearnPageProvider } from "@/features/learn-page/context/LearnPageContext"
import {
  dueFSRSCardsCountQueryOptions,
  vocabHierarchyQueryOptions,
  completedModulesQueryOptions,
  fsrsProgressQueryOptions,
  resourceThumbnailQueryOptions,
  upcomingModulesQueryOptions,
} from "@/features/learn-page/query/query-options"
import { enrichExternalResources } from "@/features/learn-page/utils/loader-helpers"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import type { TextbookIDEnum, ExternalResource } from "@/data/types"

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

    // Get user settings for vocab hierarchy
    const userSettings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    // Prefetch queries without awaiting (for streaming SSR)
    queryClient.prefetchQuery(completedModulesQueryOptions(user?.id || null))
    queryClient.prefetchQuery(dueFSRSCardsCountQueryOptions(user?.id || null))
    queryClient.prefetchQuery(
      upcomingModulesQueryOptions(
        user?.id || null,
        textbookId as TextbookIDEnum,
        deck.learning_path_items,
        userSettings["textbook-positions"]?.[textbookId as TextbookIDEnum] ||
          null,
      ),
    )

    const vocabHierarchyData = await queryClient.ensureQueryData(
      vocabHierarchyQueryOptions(
        textbookId,
        deck,
        userSettings["override-settings"],
      ),
    )
    // Now prefetch fsrsProgress with the slugs from vocabHierarchy
    queryClient.prefetchQuery(
      fsrsProgressQueryOptions(
        user?.id || null,
        textbookId,
        deck.slug,
        vocabHierarchyData.slugs,
      ),
    )

    // Pre-fetch all resource thumbnails in parallel (non-blocking, for streaming)
    const allModules = getModules(deck)
    const rawResources = Object.fromEntries(
      allModules
        .filter(({ module }) => "external_url" in module)
        .map(({ key, module }) => [key, module as ExternalResource]),
    )
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
      userSettings,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <LearnPageProvider>
      <LearnPageContent />
    </LearnPageProvider>
  )
}
