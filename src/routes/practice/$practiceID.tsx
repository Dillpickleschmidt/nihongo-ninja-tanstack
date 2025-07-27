// src/routes/practice/$practiceID.tsx
import { createFileRoute, notFound, defer } from "@tanstack/solid-router"
import {
  getVocabularyWordsForModule,
  getModuleTitleFromPath,
} from "@/data/utils/vocab"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import {
  type FSRSCardData,
  getDueFSRSCards,
  getFSRSCardsByKeys,
} from "@/features/supabase/db/fsrs-operations"
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

      const targetVocabSlugs = await getVocabularyWordsForModule(
        location.pathname,
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

      // 4. Serialize for transport
      const serializedInitialState = {
        ...initialState,
        cardMap: Array.from(initialState.cardMap.entries()),
        dependencyMap: Array.from(initialState.dependencyMap.entries()),
        unlocksMap: Array.from(initialState.unlocksMap.entries()),
        lockedKeys: Array.from(initialState.lockedKeys),
      }

      // 5. Extract all slugs for FSRS data fetching
      const allHierarchySlugs = new Set<string>()
      hierarchy.hierarchy.forEach((v) => allHierarchySlugs.add(v.slug))
      hierarchy.uniqueKanji.forEach((k) => allHierarchySlugs.add(k.slug))
      hierarchy.uniqueRadicals.forEach((r) => allHierarchySlugs.add(r.slug))

      // 6. Defer FSRS data fetching
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
        serializedInitialState,
        moduleFSRSCards,
        dueFSRSCards,
        deckName: getModuleTitleFromPath(location.pathname),
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

  // Deserialize
  const initialState = {
    ...data().serializedInitialState,
    cardMap: new Map(data().serializedInitialState.cardMap),
    dependencyMap: new Map(data().serializedInitialState.dependencyMap),
    unlocksMap: new Map(data().serializedInitialState.unlocksMap),
    lockedKeys: new Set(data().serializedInitialState.lockedKeys),
  }

  return (
    <VocabPractice
      hierarchy={data().hierarchy}
      initialState={initialState}
      moduleFSRSCards={data().moduleFSRSCards}
      dueFSRSCards={data().dueFSRSCards}
      deckName={data().deckName}
      mode={data().mode}
    />
  )
}
