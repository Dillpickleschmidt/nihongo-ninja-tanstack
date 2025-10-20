// routes/_home/learn/$textbookId/$chapterSlug.tsx
import { createFileRoute, redirect } from "@tanstack/solid-router"
import { getDeckBySlug, getModules } from "@/data/utils/core"
import { vocabHierarchyQueryOptions } from "@/features/learn-page/query/query-options"
import { resourceThumbnailQueryOptions } from "@/features/learn-page/query/query-options"
import { enrichExternalResources } from "@/features/learn-page/utils/loader-helpers"
import {
  userSettingsQueryOptions,
  dbUserSettingsQueryOptions,
  applyUserSettingsUpdate,
} from "@/features/main-cookies/query/query-options"
import type { TextbookIDEnum, ExternalResource } from "@/data/types"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import DesktopLayout from "@/features/learn-page/components/shared/DesktopLayout"

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

    // If invalid chapter slug, redirect to active chapter
    if (!deck) {
      throw redirect({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId: textbookId as TextbookIDEnum, chapterSlug: userSettings["active-deck"] },
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
        const dbActiveDeck = dbData["active-deck"] // This is already a slug
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
      externalResources,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <DesktopLayout />
}
