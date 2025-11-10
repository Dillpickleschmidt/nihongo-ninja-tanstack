import { createFileRoute } from "@tanstack/solid-router"
import { VocabPageProvider } from "@/features/vocab-page/layout/VocabPageProvider"
import { VocabLayout } from "@/features/vocab-page/layout/VocabLayout"
import { getUserFoldersAndDecks } from "@/features/supabase/db/folder"
import { queryKeys } from "@/query/utils/query-keys"
import type { User } from "@supabase/supabase-js"

export const Route = createFileRoute("/_home/vocab")({
  loader: ({ context }) => {
    // Set background settings for vocab page
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 6,
      backgroundOpacityOffset: -0.22,
      showGradient: false,
    })

    // Fetch user folders and decks if authenticated
    // For unsigned users, data will be loaded from session storage in the component
    const foldersAndDecksPromise = context.user
      ? getUserFoldersAndDecks(context.user.id)
      : Promise.resolve({ folders: [], decks: [], shareStatus: {} })

    return {
      foldersAndDecksPromise,
      user: context.user,
    }
  },
  onLeave: ({ context }) => {
    // Reset background settings to defaults
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: undefined,
      backgroundOpacityOffset: 0,
      showGradient: true,
    })
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = Route.useLoaderData()()

  return (
    <VocabPageProvider
      foldersAndDecksPromise={data.foldersAndDecksPromise}
      user={data.user as User | null}
    >
      <VocabLayout user={data.user as User | null} />
    </VocabPageProvider>
  )
}
