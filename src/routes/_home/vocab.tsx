import { createFileRoute } from "@tanstack/solid-router"
import { VocabPage } from "@/features/vocab-page/VocabPage"
import { getVocabPracticeModulesFromTextbooks } from "@/data/utils/core"
import type { VocabBuiltInDeck } from "@/features/vocab-page/types"
import type { TextbookIDEnum } from "@/data/types"

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
  loader: ({ location }) => {
    const importKey = new URLSearchParams(location.search).get("import")
    const result = importKey ? findVocabPracticeDeck(importKey) : null

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
    }
  },
  component: () => {
    const data = Route.useLoaderData()()
    return (
      <VocabPage
        importRequest={data.importRequest}
        textbooks={data.textbooks}
      />
    )
  },
})
