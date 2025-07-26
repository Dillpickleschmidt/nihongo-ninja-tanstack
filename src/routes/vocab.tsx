import { createFileRoute, notFound } from "@tanstack/solid-router"
import { VocabPage } from "@/features/vocab-page/VocabPage"
import { dynamic_modules } from "@/data/dynamic_modules"
import { getVocabPracticeModulesFromTextbooks } from "@/data/utils/core"
import type { BuiltInDeck } from "@/features/vocab-page/types"

export const Route = createFileRoute("/vocab")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      import: search.import as string | undefined,
    }
  },
  loader: async ({ location }) => {
    let pendingImport: BuiltInDeck | null = null

    const importKey = new URLSearchParams(location.search).get("import")
    if (importKey) {
      const module = dynamic_modules[importKey]
      if (module && module.session_type === "vocab-practice") {
        // Find the corresponding deck part in textbooks
        const allTextbooks = getVocabPracticeModulesFromTextbooks()
        let foundBuiltInDeck: BuiltInDeck | null = null

        for (const textbook of allTextbooks) {
          for (const chapter of textbook.chapters) {
            const builtInDeck = chapter.parts.find((part) => part.id === importKey)
            if (builtInDeck) {
              foundBuiltInDeck = builtInDeck
              break
            }
          }
          if (foundBuiltInDeck) break
        }

        if (foundBuiltInDeck && !foundBuiltInDeck.isImported) {
          pendingImport = foundBuiltInDeck
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
