import { createFileRoute } from "@tanstack/solid-router"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { authQueryOptions } from "@/query/query-options"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DeckCreationContainer } from "@/features/vocab-page/pages/create/components/DeckCreationContainer"
import { DeckCreationStoreProvider } from "@/features/vocab-page/pages/create/context/DeckCreationStoreContext"
import { MissedWordsDeckBuilder } from "@/features/vocab-page/pages/create/components/MissedWordsDeckBuilder"
import { useVocab } from "@/features/vocab-page/context/VocabContext"

export const Route = createFileRoute("/_home/vocab/create")({
  loader: ({ context }) => {
    const auth = context.queryClient.getQueryData(authQueryOptions().queryKey)
    if (auth?.session?.user) {
      context.queryClient.prefetchQuery(
        convexQuery(api.api.folders.getAllFoldersAndDecks, {}),
      )
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { folders, decks } = useVocab()

  return (
    <Tabs defaultValue="manual" class="mx-auto max-w-5xl p-2 sm:px-4 lg:px-6">
      <TabsList class="mb-6">
        <TabsTrigger value="manual">Manual</TabsTrigger>
        <TabsTrigger value="missed-words">From Missed Words</TabsTrigger>
      </TabsList>

      <TabsContent value="manual" class="mt-0">
        <DeckCreationStoreProvider initialData={undefined}>
          <DeckCreationContainer folders={folders()} decks={decks()} />
        </DeckCreationStoreProvider>
      </TabsContent>

      <TabsContent value="missed-words" class="mt-0">
        <MissedWordsDeckBuilder />
      </TabsContent>
    </Tabs>
  )
}
