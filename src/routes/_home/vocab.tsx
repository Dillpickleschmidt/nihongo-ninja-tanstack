import { createFileRoute } from "@tanstack/solid-router"
import { VocabPageProvider } from "@/features/vocab-page/layout/VocabPageContext"
import { VocabLayout } from "@/features/vocab-page/layout/VocabLayout"
import { queryKeys } from "@/query/utils/query-keys"
import type { User } from "@supabase/supabase-js"
import {
  completedModulesQueryOptions,
  recentlyStudiedDecksQueryOptions,
  userFoldersAndDecksQueryOptions,
  upcomingModulesQueryOptions,
  userSettingsQueryOptions,
} from "@/query/query-options"
import type { TextbookIDEnum } from "@/data/types"

export const Route = createFileRoute("/_home/vocab")({
  loader: async ({ context, location }) => {
    // Set background settings for vocab page
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 6,
      backgroundOpacityOffset: -0.22,
      showGradient: false,
    })

    // Prefetch folders and decks into query cache
    if (context.user) {
      await context.queryClient.prefetchQuery(
        userFoldersAndDecksQueryOptions(context.user.id),
      )

      // Get the prefetched data from cache for dependent queries
      const foldersAndDecks = context.queryClient.getQueryData(
        userFoldersAndDecksQueryOptions(context.user.id).queryKey,
      )

      // Get settings from cache (prefetched in __root.tsx)
      const settings = context.queryClient.getQueryData(
        userSettingsQueryOptions(context.user.id).queryKey,
      )

      // Prefetch dependent queries
      context.queryClient.prefetchQuery(
        completedModulesQueryOptions(context.user.id),
      )
      if (foldersAndDecks) {
        context.queryClient.prefetchQuery(
          recentlyStudiedDecksQueryOptions(
            context.user.id,
            foldersAndDecks.decks,
            context.queryClient,
          ),
        )
      }
      const activePath = settings["active-learning-path"]
      const activeChapter = settings["active-chapter"]
      context.queryClient.prefetchQuery(
        upcomingModulesQueryOptions(
          context.user.id,
          activePath,
          activeChapter,
          context.queryClient,
        ),
      )
    }

    return {
      user: context.user,
      pathname: location.pathname,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = Route.useLoaderData()
  const pathname = () => data().pathname

  return (
    <VocabPageProvider user={data().user as User | null}>
      <VocabLayout user={data().user as User | null} pathname={pathname} />
    </VocabPageProvider>
  )
}
