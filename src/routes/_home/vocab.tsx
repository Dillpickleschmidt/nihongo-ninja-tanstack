import { createFileRoute, defer } from "@tanstack/solid-router"
import { VocabPage } from "@/features/vocab-page/VocabPage"
import { getVocabPracticeModulesFromTextbooks } from "@/data/utils/core"
import { getUserFoldersAndDecks } from "@/features/supabase/db/folder"
import type { VocabBuiltInDeck } from "@/features/vocab-page/types"
import type { TextbookIDEnum } from "@/data/types"
import type { User } from "@supabase/supabase-js"

function findVocabPracticeDeck(deckId: string): {
  deck: VocabBuiltInDeck
  textbookId: TextbookIDEnum
  chapterId: string
} | null {
  const allTextbooks = getVocabPracticeModulesFromTextbooks()

  for (const [textbookId, textbook] of allTextbooks) {
    for (const chapter of textbook.chapters) {
      const deck = chapter.decks.find((d) => d.id === deckId)
      if (deck) {
        return { deck, textbookId, chapterId: chapter.id }
      }
    }
  }

  return null
}

export const Route = createFileRoute("/_home/vocab")({
  loader: ({ location, context }) => {
    const importKey = new URLSearchParams(location.search).get("import")
    const result = importKey ? findVocabPracticeDeck(importKey) : null

    // Fetch user folders and decks if authenticated
    // For unsigned users, data will be loaded from session storage in the component
    const foldersAndDecksPromise = context.user
      ? getUserFoldersAndDecks(context.user.id)
      : Promise.resolve({ folders: [], decks: [] })

    return {
      importRequest: result
        ? {
            deck: result.deck,
            location: {
              textbookId: result.textbookId,
              chapterId: result.chapterId,
            },
          }
        : null,
      textbooks: getVocabPracticeModulesFromTextbooks(),
      foldersAndDecksPromise: defer(foldersAndDecksPromise),
      user: context.user,
    }
  },
  component: () => {
    const data = Route.useLoaderData()()
    return (
      <VocabPage
        importRequest={data.importRequest}
        textbooks={data.textbooks}
        foldersAndDecksPromise={data.foldersAndDecksPromise}
        user={data.user as User | null}
      />
    )
  },
})
