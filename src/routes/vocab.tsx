import { createFileRoute, notFound } from "@tanstack/solid-router"
import { VocabPage } from "@/features/vocab-page/VocabPage"
import { dynamic_modules } from "@/data/dynamic_modules"
import { getVocabPracticeModulesFromTextbooks } from "@/data/utils/core"
import type { DeckPart } from "@/features/vocab-page/types"

export const Route = createFileRoute("/vocab")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      import: search.import as string | undefined,
    }
  },
  loader: async ({ location }) => {
    let pendingImport: DeckPart | null = null

    const importKey = new URLSearchParams(location.search).get("import")
    if (importKey) {
      const module = dynamic_modules[importKey]
      if (module && module.session_type === "vocab-practice") {
        // Find the corresponding deck part in textbooks
        const allTextbooks = getVocabPracticeModulesFromTextbooks()
        let foundDeckPart: DeckPart | null = null

        for (const textbook of allTextbooks) {
          for (const chapter of textbook.chapters) {
            const deckPart = chapter.parts.find((part) => part.id === importKey)
            if (deckPart) {
              foundDeckPart = deckPart
              break
            }
          }
          if (foundDeckPart) break
        }

        if (foundDeckPart && !foundDeckPart.isImported) {
          pendingImport = foundDeckPart
        }
      }
    }

    return { pendingImport }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = Route.useLoaderData()
  return <VocabPage pendingImport={data().pendingImport} />
}
