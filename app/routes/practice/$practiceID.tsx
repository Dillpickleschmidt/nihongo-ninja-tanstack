// app/routes/practice/$practiceID.tsx
import { createFileRoute, notFound } from "@tanstack/solid-router"
import { loadModuleData } from "@/data/utils/vocab"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import {
  type FSRSCardData,
  getDueFSRSCards,
  getFSRSCardsByKeys,
} from "@/features/supabase/db/utils"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { getStaticWKHierarchy } from "@/data/wanikani/utils"
import type { FullHierarchyData, VocabHierarchy } from "@/data/wanikani/types"

export const Route = createFileRoute("/practice/$practiceID")({
  loader: async ({ context, location }) => {
    try {
      // 1. Determine the practice mode first
      const mode: PracticeMode = location.pathname.endsWith("-kana")
        ? "kana"
        : "readings"

      const targetVocabSlugs = loadModuleData(location.pathname).vocabulary.map(
        (v) => v.word,
      )

      let hierarchy: FullHierarchyData

      if (mode === "readings") {
        // For "readings" mode, build the full dependency tree
        const fullHierarchy = await getStaticWKHierarchy({
          data: targetVocabSlugs,
        })
        if (!fullHierarchy) throw notFound()
        hierarchy = fullHierarchy
      } else {
        // For "kana" mode, create a "flat" hierarchy with NO dependencies
        const flatVocabHierarchy: VocabHierarchy[] = targetVocabSlugs.map(
          (slug, index) => ({
            id: index, // A placeholder ID is fine
            characters: slug,
            slug: slug,
            kanji: [], // No kanji dependencies
          }),
        )

        hierarchy = {
          hierarchy: flatVocabHierarchy,
          uniqueKanji: [], // No kanji
          uniqueRadicals: [], // No radicals
        }
      }

      // 3. Extract all slugs from the now-resolved (and correctly shaped) hierarchy
      const allHierarchySlugs = new Set<string>()
      hierarchy.hierarchy.forEach((v) => allHierarchySlugs.add(v.slug))
      hierarchy.uniqueKanji.forEach((k) => allHierarchySlugs.add(k.slug))
      hierarchy.uniqueRadicals.forEach((r) => allHierarchySlugs.add(r.slug))

      let moduleFSRSCardsPromise: Promise<FSRSCardData[]> | null = null
      let dueFSRSCardsPromise: Promise<FSRSCardData[]> | null = null

      if (context.user && allHierarchySlugs.size > 0) {
        // 4. Start fetching FSRS data for the items in our (now correct) hierarchy
        moduleFSRSCardsPromise = getFSRSCardsByKeys(
          context.user.id,
          Array.from(allHierarchySlugs),
        )
        dueFSRSCardsPromise = getDueFSRSCards(context.user.id)
      }

      return {
        hierarchy,
        moduleFSRSCards: moduleFSRSCardsPromise,
        dueFSRSCards: dueFSRSCardsPromise,
        deckName: loadModuleData(location.pathname).module.title,
        mode,
      }
    } catch (error) {
      console.error(error)
      throw notFound()
    }
  },
  component: RouteComponent,
  notFoundComponent: () => <div>404 Not found</div>,
})

function RouteComponent() {
  const data = Route.useLoaderData()

  return (
    <VocabPractice
      hierarchy={data().hierarchy}
      moduleFSRSCards={data().moduleFSRSCards}
      dueFSRSCards={data().dueFSRSCards}
      deckName={data().deckName}
      mode={data().mode}
    />
  )
}
