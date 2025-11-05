// routes/_home/learn/$textbookId/$chapterSlug.tsx
import { onMount } from "solid-js"
import {
  createFileRoute,
  redirect,
  useRouteContext,
} from "@tanstack/solid-router"
import { getDeckBySlug, getModules } from "@/data/utils/core"
import { useTour } from "@/features/guided-tour/TourContext"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { vocabHierarchyQueryOptions } from "@/query/query-options"
import { resourceThumbnailQueryOptions } from "@/query/query-options"
import { enrichExternalResources } from "@/features/learn-page/utils/loader-helpers"
import { userSettingsQueryOptions } from "@/query/query-options"
import { applyUserSettingsUpdate } from "@/query/utils/user-settings"
import type { TextbookIDEnum, ExternalResource } from "@/data/types"
import { Route as RootRoute } from "@/routes/__root"
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
        params: {
          textbookId: textbookId as TextbookIDEnum,
          chapterSlug: userSettings["active-chapter"],
        },
      })
    }

    // Update active-deck if URL differs from current settings
    const needsUpdate =
      userSettings["active-chapter"] !== chapterSlug ||
      userSettings["active-learning-path"] !== (textbookId as TextbookIDEnum)

    if (needsUpdate) {
      await applyUserSettingsUpdate(
        user?.id || null,
        queryClient,
        {
          "active-chapter": chapterSlug,
          "active-learning-path": textbookId as TextbookIDEnum,
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
  const { startTour, resumeTour } = useTour()
  const context = useRouteContext({ from: RootRoute.id })
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  onMount(() => {
    const settings = settingsQuery.data
    const tourId = "learn-page-intro"
    const tourStep = settings?.tours[tourId]

    if (tourStep === undefined) {
      // Not started - start from beginning
      startTour(tourId)
    } else if (tourStep >= 0) {
      // In progress - resume from saved step
      resumeTour(tourId, tourStep)
    }
  })

  return <DesktopLayout />
}
