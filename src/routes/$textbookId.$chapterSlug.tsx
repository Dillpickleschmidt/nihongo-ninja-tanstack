import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import {
  userSettingsQueryOptions,
  applyUserSettingsUpdate,
} from "@/features/main-cookies/query/query-options"
import { BackgroundLayers } from "@/features/homepage/shared/components/BackgroundLayers"
import Nav from "@/features/homepage/shared/components/Nav2"
import LoginMessage from "@/features/homepage/shared/assets/login-message.svg"
import { LearningPathPage } from "@/features/homepage/pages/learning-path"
import { completedModulesQueryOptions } from "@/features/learn-page/query/query-options"
import { getDeckBySlug } from "@/data/utils/core"
import type { TextbookIDEnum } from "@/data/types"

export const Route = createFileRoute("/$textbookId/$chapterSlug")({
  loader: async ({ context, params }) => {
    const { user, queryClient } = context
    const { textbookId, chapterSlug } = params

    // Validate chapter exists
    const chapter = getDeckBySlug(textbookId as TextbookIDEnum, chapterSlug)
    if (!chapter) {
      throw new Error(`Chapter not found: ${chapterSlug}`)
    }

    // Sync route params to user settings (slug format)
    await applyUserSettingsUpdate(
      user?.id || null,
      queryClient,
      {
        "active-textbook": textbookId as TextbookIDEnum,
        "active-deck": chapterSlug,
      },
      { awaitDb: false },
    )

    // Prefetch completed modules
    queryClient.prefetchQuery(completedModulesQueryOptions(user?.id || null))

    return { textbookId, chapterSlug }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })
  const loaderData = Route.useLoaderData()
  const { textbookId, chapterSlug } = loaderData() as {
    textbookId: string
    chapterSlug: string
  }

  return (
    <>
      <BackgroundLayers />
      <Nav />
      <LoginMessage class="fixed top-6 right-24 hidden h-auto w-64 text-neutral-500 md:block" />
      <LearningPathPage
        chapterSlug={chapterSlug}
        textbookId={textbookId}
        user={context().user}
      />
    </>
  )
}
