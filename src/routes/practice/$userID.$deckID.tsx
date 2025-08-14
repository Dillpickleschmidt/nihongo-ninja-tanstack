// src/routes/practice/$userID/$deckID.tsx
import { createFileRoute, notFound, defer } from "@tanstack/solid-router"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import {
  type FSRSCardData,
  getDueFSRSCards,
  getFSRSCardsByKeys,
} from "@/features/supabase/db/fsrs-operations"
import {
  getDeckInfoServerFn,
  getVocabForDeck,
} from "@/features/supabase/db/deck-operations"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { getWKHierarchy } from "@/data/wanikani/utils"
import type { FullHierarchyData, VocabHierarchy } from "@/data/wanikani/types"
import type { DeferredPromise } from "@tanstack/solid-router"
import { initializePracticeSession } from "@/features/vocab-practice/logic/data-initialization"

export const Route = createFileRoute("/practice/$userID/$deckID")({
  loader: async ({ context, location, params }) => {
    try {
      // Parse deck ID from params
      const deckId = parseInt(params.deckID, 10)
      if (isNaN(deckId)) throw notFound()

      // 1. Get deck info and vocabulary from database
      const [deckInfo, deckVocabulary] = await Promise.all([
        getDeckInfoServerFn({ data: { deck_id: deckId } }),
        getVocabForDeck(deckId),
      ])

      if (!deckInfo || deckVocabulary.length === 0) throw notFound()

      // 2. Determine the practice mode
      const mode: PracticeMode = location.pathname.endsWith("-readings")
        ? "readings"
        : "kana"

      let hierarchy: FullHierarchyData

      if (mode === "readings") {
        // For "readings" mode, build the full dependency tree
        const fullHierarchy = await getWKHierarchy({
          data: deckVocabulary.map((v) => v.word),
        })
        console.log("Full hierarchy: ", fullHierarchy)
        if (!fullHierarchy) throw notFound()
        hierarchy = fullHierarchy
      } else {
        // For "kana" mode, create a "flat" hierarchy with NO dependencies
        const flatVocabHierarchy: VocabHierarchy[] = deckVocabulary.map(
          (vocab, index) => ({
            id: index, // A placeholder ID is fine
            characters: vocab.word,
            slug: vocab.word,
            kanji: [], // No kanji dependencies
          }),
        )

        hierarchy = {
          hierarchy: flatVocabHierarchy,
          uniqueKanji: [], // No kanji
          uniqueRadicals: [], // No radicals
        }
      }

      // 3. Create initial state with just hierarchy data (no FSRS)
      const initialState = await initializePracticeSession(
        hierarchy,
        [], // No module FSRS cards - will be loaded client-side
        [], // No due FSRS cards - will be loaded client-side
        mode,
        deckVocabulary,
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
        moduleVocabulary: deckVocabulary,
        deckName: deckInfo.deck_name,
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
  const data = Route.useLoaderData()()

  if (!data) {
    return <div>Loading...</div>
  }

  // Deserialize
  const initialState = {
    ...data.serializedInitialState,
    cardMap: new Map(data.serializedInitialState.cardMap),
    dependencyMap: new Map(data.serializedInitialState.dependencyMap),
    unlocksMap: new Map(data.serializedInitialState.unlocksMap),
    lockedKeys: new Set(data.serializedInitialState.lockedKeys),
  }

  return (
    <VocabPractice
      hierarchy={data.hierarchy}
      initialState={initialState}
      moduleFSRSCards={data.moduleFSRSCards}
      dueFSRSCards={data.dueFSRSCards}
      moduleVocabulary={data.moduleVocabulary}
      deckName={data.deckName}
      mode={data.mode}
    />
  )
}
