// routes/_home/learn/$textbookId.$chapterSlug.tsx
import { createFileRoute, redirect } from "@tanstack/solid-router"
import { LeftSidebar } from "@/features/learn-page/components/layout/LeftSidebar"
import { RightSidebar } from "@/features/learn-page/components/layout/RightSidebar"
import { ChapterContentArea } from "@/features/learn-page/components/content/ChapterContentArea"
import { MobileContentRenderer } from "@/features/learn-page/components/layout/MobileContentRenderer"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import { getDeckBySlug, getModules } from "@/data/utils/core"
import {
  vocabHierarchyQueryOptions,
  resourceThumbnailQueryOptions,
} from "@/features/learn-page/query/query-options"
import { enrichExternalResources } from "@/features/learn-page/utils/loader-helpers"
import {
  userSettingsQueryOptions,
  dbUserSettingsQueryOptions,
  applyUserSettingsUpdate,
} from "@/features/main-cookies/query/query-options"
import type { TextbookIDEnum, ExternalResource } from "@/data/types"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"

export const Route = createFileRoute("/_home/learn/$textbookId/$chapterSlug")({
  loader: async ({ context, params }) => {
    const { user, queryClient } = context
    const { textbookId, chapterSlug } = params

    // Get user settings (will be instant cache hit from parent)
    const userSettings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    // Get deck for current chapter
    const deck = getDeckBySlug(textbookId as TextbookIDEnum, chapterSlug)

    // If invalid chapter slug, redirect to chapter-0
    if (!deck) {
      throw redirect({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }

    // Check DB query status to determine if we should redirect based on cross-device sync
    const dbQueryState = user?.id
      ? queryClient.getQueryState(dbUserSettingsQueryOptions(user.id).queryKey)
      : null

    const isDbComplete = dbQueryState?.status === "success"

    // If DB is complete and fresher than cookie, redirect to DB's active chapter
    // This handles cross-device sync when coming from parent redirect
    if (isDbComplete && user?.id) {
      const dbData = queryClient.getQueryData<UserSettings>(
        dbUserSettingsQueryOptions(user.id).queryKey,
      )

      if (dbData) {
        const dbActiveDeck = dbData["active-deck"]
        const dbActiveTextbook = dbData["active-textbook"]
        const cookieTimestamp = userSettings.timestamp || 0
        const dbTimestamp = dbData.timestamp || 0

        // Only redirect if DB is fresher than cookie AND differs from URL
        // (corrects stale /learn redirect from other devices)
        if (
          dbTimestamp > cookieTimestamp &&
          ((dbActiveDeck && dbActiveDeck !== chapterSlug) ||
            (dbActiveTextbook && dbActiveTextbook !== textbookId))
        ) {
          throw redirect({
            to: "/learn/$textbookId/$chapterSlug",
            params: {
              textbookId: dbActiveTextbook || (textbookId as TextbookIDEnum),
              chapterSlug: dbActiveDeck || chapterSlug,
            },
          })
        }
      }
    }

    // Update active-deck if URL differs from current settings
    const needsUpdate =
      userSettings["active-deck"] !== chapterSlug ||
      userSettings["active-textbook"] !== (textbookId as TextbookIDEnum)

    if (needsUpdate) {
      await applyUserSettingsUpdate(
        user?.id || null,
        queryClient,
        {
          "active-deck": chapterSlug,
          "active-textbook": textbookId as TextbookIDEnum,
        },
        { awaitDb: false }, // Don't await DB (non-blocking)
      )
    }

    // Prefetch vocab hierarchy for this chapter
    queryClient.prefetchQuery(
      vocabHierarchyQueryOptions(
        textbookId,
        deck,
        userSettings["override-settings"],
      ),
    )

    // Pre-fetch all resource thumbnails for this chapter
    const currentChapterModules = getModules(deck)
    const rawResources = Object.fromEntries(
      currentChapterModules
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

    return {
      deck,
      chapterSlug,
      externalResources,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()
  const { mobileContentView } = useLearnPageContext()

  return (
    <>
      {/* Mobile: Single column with content renderer */}
      <div class="xl:hidden">
        <MobileContentRenderer activeView={mobileContentView} />
      </div>

      {/* Desktop: 3-column layout */}
      <div class="hidden xl:flex xl:w-full xl:pr-4 xl:pl-8">
        <div class="relative max-h-[calc(100vh-146px)] w-[20%] overflow-y-auto pt-6">
          <LeftSidebar variant="desktop" />
        </div>
        <div class="w-[60%]">
          <ChapterContentArea />
        </div>
        <div class="relative h-[calc(100vh-146px)] w-[20%] overflow-y-auto pt-6">
          <RightSidebar variant="desktop" />
        </div>
      </div>
    </>
  )
}
