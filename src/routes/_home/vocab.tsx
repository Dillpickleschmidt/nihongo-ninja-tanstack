import { createFileRoute } from "@tanstack/solid-router"
import { VocabPage } from "@/features/vocab-page/VocabPage"
import { getUserFoldersAndDecks } from "@/features/supabase/db/folder"
import type { User } from "@supabase/supabase-js"

export const Route = createFileRoute("/_home/vocab")({
  loader: ({ context }) => {
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
  component: () => {
    const data = Route.useLoaderData()()
    return (
      <VocabPage
        foldersAndDecksPromise={data.foldersAndDecksPromise}
        user={data.user as User | null}
      />
    )
  },
})
