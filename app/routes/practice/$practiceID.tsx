// app/routes/practice/$practiceID.tsx
import { createFileRoute, notFound, defer } from "@tanstack/solid-router"
import { loadModuleData } from "@/data/utils/vocab"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import {
  type FSRSCardData,
  getDueFSRSCards,
  getFSRSCardsByKeys,
} from "@/features/supabase/db/utils"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { getWKHierarchy } from "@/data/wanikani/utils"
import type { FullHierarchyData, VocabHierarchy } from "@/data/wanikani/types"
import type { DeferredPromise } from "@tanstack/solid-router"
import { initializePracticeSession } from "@/features/vocab-practice/logic/data-initialization"
import { vocabulary } from "@/data/vocabulary"

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
        const fullHierarchy = await getWKHierarchy({
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

      // 2. Create initial state with just hierarchy data (no FSRS)
      const initialState = await initializePracticeSession(
        hierarchy,
        [], // No module FSRS cards - will be loaded client-side
        [], // No due FSRS cards - will be loaded client-side
        mode,
        vocabulary,
        false, // Default settings - will be overridden client-side
        true,
        false,
        true,
      )

      // 3. Serialize the initial state
      const serializedInitialState = {
        ...initialState,
        cardMap: Array.from(initialState.cardMap.entries()),
        dependencyMap: Array.from(initialState.dependencyMap.entries()),
        unlocksMap: Array.from(initialState.unlocksMap.entries()),
        lockedKeys: Array.from(initialState.lockedKeys),
      }

      // 4. Extract all slugs for FSRS data fetching
      const allHierarchySlugs = new Set<string>()
      hierarchy.hierarchy.forEach((v) => allHierarchySlugs.add(v.slug))
      hierarchy.uniqueKanji.forEach((k) => allHierarchySlugs.add(k.slug))
      hierarchy.uniqueRadicals.forEach((r) => allHierarchySlugs.add(r.slug))

      // 5. Defer FSRS data fetching
      let moduleFSRSCards: DeferredPromise<FSRSCardData[]> | null = null
      let dueFSRSCards: DeferredPromise<FSRSCardData[]> | null = null

      if (context.user && allHierarchySlugs.size > 0) {
        moduleFSRSCards = defer(
          getFSRSCardsByKeys(context.user.id, Array.from(allHierarchySlugs)),
        )
        dueFSRSCards = defer(getDueFSRSCards(context.user.id))
      }

      return {
        hierarchy,
        initialState: serializedInitialState,
        moduleFSRSCards,
        dueFSRSCards,
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
      initialState={data().initialState}
      moduleFSRSCards={data().moduleFSRSCards}
      dueFSRSCards={data().dueFSRSCards}
      deckName={data().deckName}
      mode={data().mode}
    />
  )
}
