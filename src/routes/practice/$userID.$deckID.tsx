// src/routes/practice/$userID/$deckID.tsx
import { createFileRoute, notFound, defer } from "@tanstack/solid-router"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import {
  type FSRSCardData,
  getDueFSRSCards,
  getFSRSCards,
} from "@/features/supabase/db/fsrs"
import {
  getDeckInfoServerFn,
  getVocabForDeck,
} from "@/features/supabase/db/deck"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { getVocabHierarchy } from "@/features/resolvers/kanji"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { DeferredPromise } from "@tanstack/solid-router"
import { initializePracticeSession } from "@/features/vocab-practice/logic/data-initialization"
import { fetchKanjiSvgsBatch } from "@/utils/svg-processor"

export const Route = createFileRoute("/practice/$userID/$deckID")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { mode: PracticeMode } => ({
    mode:
      (search.mode as PracticeMode) === "spellings" ? "spellings" : "meanings",
  }),
  loaderDeps: ({ search }) => ({ mode: search.mode }),
  loader: async ({ context, params, deps }) => {
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

      // 2. Get the practice mode from search params (defaults to "meanings")
      const mode: PracticeMode = deps.mode

      let hierarchy: VocabHierarchy

      if (mode === "meanings") {
        // For "meanings" mode, build the full dependency tree
        const fullHierarchy = await getVocabHierarchy({
          data: {
            slugs: deckVocabulary.map((v) => v.word),
            userOverrides:
              context.initialUserPreferenceData["override-settings"],
          },
        })
        if (!fullHierarchy) throw notFound()
        hierarchy = fullHierarchy
      } else {
        // For "spellings" mode, create a "flat" hierarchy with NO dependencies
        hierarchy = {
          vocabulary: deckVocabulary.map((vocab) => ({
            word: vocab.word,
            kanjiComponents: [], // No kanji dependencies
          })),
          kanji: [], // No kanji
          radicals: [], // No radicals
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
      hierarchy.vocabulary.forEach((v) => allHierarchySlugs.add(v.word))
      hierarchy.kanji.forEach((k) => allHierarchySlugs.add(k.kanji))
      hierarchy.radicals.forEach((r) => allHierarchySlugs.add(r.radical))

      // 6. Extract kanji and radicals for SVG fetching
      const hierarchyKanjiRadicals: string[] = []
      hierarchy.kanji.forEach((k) => hierarchyKanjiRadicals.push(k.kanji))
      hierarchy.radicals.forEach((r) => hierarchyKanjiRadicals.push(r.radical))

      // 7. Defer FSRS data fetching
      let moduleFSRSCards: DeferredPromise<FSRSCardData[]> | null = null
      let dueFSRSCards: DeferredPromise<FSRSCardData[]> | null = null

      if (context.user && allHierarchySlugs.size > 0) {
        moduleFSRSCards = defer(
          getFSRSCards(context.user.id, Array.from(allHierarchySlugs)),
        )
        dueFSRSCards = defer(getDueFSRSCards({ data: context.user.id }))
      }

      // 8. Defer SVG fetching for hierarchy kanji/radicals
      let hierarchySvgs: DeferredPromise<Map<string, string>> | null = null
      if (hierarchyKanjiRadicals.length > 0) {
        hierarchySvgs = defer(fetchKanjiSvgsBatch(hierarchyKanjiRadicals))
      }

      return {
        hierarchy,
        serializedInitialState,
        moduleFSRSCards,
        dueFSRSCards,
        hierarchySvgs,
        moduleVocabulary: deckVocabulary,
        deckName: deckInfo.deck_name,
        mode,
        user: context.user,
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
      hierarchySvgs={data.hierarchySvgs}
      moduleVocabulary={data.moduleVocabulary}
      deckName={data.deckName}
      mode={data.mode}
      user={data.user}
    />
  )
}
