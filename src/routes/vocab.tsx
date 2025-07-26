import { createFileRoute, notFound } from "@tanstack/solid-router"
import { VocabPage } from "@/features/vocab-page/VocabPage"
import { dynamic_modules } from "@/data/dynamic_modules"
import { getVocabPracticeModulesFromTextbooks } from "@/data/utils/core"
import type { ImportRequest } from "@/features/vocab-page/types"

export const Route = createFileRoute("/vocab")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      import: search.import as string | undefined,
    }
  },
  loader: async ({ location }) => {
    let importRequest: ImportRequest | null = null

    const importKey = new URLSearchParams(location.search).get("import")
    if (importKey) {
      const module = dynamic_modules[importKey]
      if (module && module.session_type === "vocab-practice") {
        // Find the corresponding deck part in textbooks
        const allTextbooks = getVocabPracticeModulesFromTextbooks()

        for (const textbook of allTextbooks) {
          for (const chapter of textbook.chapters) {
            const builtInDeck = chapter.parts.find((part) => part.id === importKey)
            if (builtInDeck && !builtInDeck.isImported) {
              // Create structured import request with deck and location
              importRequest = {
                deck: builtInDeck,
                location: { textbookId: textbook.id, chapterId: chapter.id }
              }
              break
            }
          }
          if (importRequest) break
        }
      }
    }

    return { importRequest }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = Route.useLoaderData()
  return <VocabPage importRequest={data().importRequest} />
}
