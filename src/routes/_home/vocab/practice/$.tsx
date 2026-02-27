import { createFileRoute } from "@tanstack/solid-router"
import type { QueryClient } from "@tanstack/solid-query"
import { z } from "zod"
import { createSignal, createResource, createEffect, Show } from "solid-js"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { useVocab } from "@/features/vocab-page/context/VocabContext"
import { resolveDeckFromPath } from "@/features/vocab-page/utils/navigation"
import { usePracticeManager } from "@/features/vocab-practice/logic/usePracticeManager"
import {
  initializePracticeSession,
  type PracticeItemData,
  type FSRSCardInput,
} from "@/features/vocab-practice/logic/data-initialization"
import type { UnifiedDeck } from "convex/model/decks"
import type { DeckHierarchyResult } from "convex/model/hierarchy"
import { toTsFsrsCard, fromTsFsrsCard, fromTsFsrsLog } from "convex/model/fsrs"
import type { Doc } from "convex/_generated/dataModel"
import type { PracticeMode } from "convex/validators"
import type { Grade } from "ts-fsrs"
import { useMutation } from "convex-solidjs"
import { VocabPractice } from "@/features/vocab-practice/VocabPractice"

type DeckLookupResult =
  | { type: "deck"; deck: UnifiedDeck }
  | { type: "not-found"; pathSegments: string[] }

type PracticeData = {
  hierarchy: DeckHierarchyResult
  moduleFsrs: {
    vocabulary: Doc<"userFsrsCards">[]
    kanji: Doc<"userFsrsCards">[]
    radical: Doc<"userFsrsCards">[]
  }
  reviewFsrs: Doc<"userFsrsCards">[]
}

const practiceSearchSchema = z.object({
  mode: z.enum(["meanings", "spellings"]).catch("meanings"),
})

export const Route = createFileRoute("/_home/vocab/practice/$")({
  validateSearch: (search) => practiceSearchSchema.parse(search),
  loaderDeps: ({ search }) => ({ mode: search.mode }),
  loader: ({ context, params, deps }) => {
    const pathSegments = parsePathSegments(params._splat)
    const mode = deps.mode

    const foldersAndDecksPromise = context.queryClient.fetchQuery(
      convexQuery(api.api.folders.getAllFoldersAndDecks, {}),
    )
    const dueCardsPromise = context.queryClient.fetchQuery(
      convexQuery(api.api.fsrs.getDueFSRSCards, { mode, limit: 50 }),
    )

    const deckLookupPromise = foldersAndDecksPromise.then((data) =>
      lookupDeck(pathSegments, data.decks),
    )

    const practiceDataPromise = deckLookupPromise.then((result) =>
      result.type === "deck"
        ? fetchPracticeData(
            context.queryClient,
            result.deck,
            mode,
            dueCardsPromise,
          )
        : null,
    )

    return { deckLookupPromise, practiceDataPromise, pathSegments }
  },
  component: PracticeCatchAll,
})

function PracticeCatchAll() {
  const loaderData = Route.useLoaderData()
  const { decks } = useVocab()
  const search = Route.useSearch()
  const mode = () => search().mode

  const [deckLookup] = createResource(() => loaderData().deckLookupPromise)
  const [practiceData] = createResource(() => loaderData().practiceDataPromise)

  const [includeReviews] = createSignal(true)

  const deck = () => {
    const result = deckLookup()
    if (result?.type === "deck") return result.deck
    if (result?.type === "not-found") {
      return resolveDeckFromPath(result.pathSegments, decks())
    }
    return null
  }

  const upsertFSRSCardMutation = useMutation(api.api.fsrs.upsertFSRSCard)
  const recordProgressMutation = useMutation(api.api.progress.recordProgressEvent)

  const practiceManager = usePracticeManager(async (card) => {
    const itemKey = card.key.split(":")[1]
    try {
      await upsertFSRSCardMutation.mutate({
        practiceItemKey: itemKey,
        card: fromTsFsrsCard(card.fsrs.card),
        newLogs: (card.fsrs.logs || []).map(fromTsFsrsLog),
        mode: card.practiceMode,
        type: card.practiceItemType,
      })
    } catch (error) {
      console.error("Failed to save FSRS progress:", error)
    }
  })

  const [sessionInitialized, setSessionInitialized] = createSignal(false)

  const recordProgress = (progressUnitsDelta: number, questionsAnsweredDelta: number) => {
    const currentDeck = deck()
    if (!currentDeck) return

    recordProgressMutation.mutate({
      modulePath: buildVocabModulePath(currentDeck),
      moduleType: "vocab-practice",
      progressUnitsDelta,
      questionsAnsweredDelta,
      eventTs: Date.now(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    })
  }

  createEffect(() => {
    const data = practiceData()
    if (!data || sessionInitialized()) return

    const sessionState = buildSessionState(data, mode(), includeReviews())
    practiceManager.initializeManager(sessionState)
    setSessionInitialized(true)
  })

  return (
    <Show
      when={deck()}
      fallback={
        <div>
          <p>{deckLookup() ? "Deck not found" : "Loading..."}</p>
        </div>
      }
    >
      {(d) => (
        <Show
          when={sessionInitialized()}
          fallback={<div>Loading practice session...</div>}
        >
          <VocabPractice
            practiceManager={practiceManager}
            deckName={d().deckName}
            mode={mode()}
            onAnswer={(rating: Grade) => practiceManager.answerCard(rating)}
            onIntroductionComplete={() => practiceManager.processIntroduction()}
            onProgressEvent={recordProgress}
          />
        </Show>
      )}
    </Show>
  )
}

function buildVocabModulePath(deck: UnifiedDeck): string {
  return `vocab-deck:${deck.id}`
}

function parsePathSegments(splat: string | undefined): string[] {
  return splat ? splat.split("/").filter(Boolean) : []
}

function lookupDeck(
  pathSegments: string[],
  decks: UnifiedDeck[],
): DeckLookupResult {
  const deck = resolveDeckFromPath(pathSegments, decks)
  if (deck) return { type: "deck", deck }
  return { type: "not-found", pathSegments }
}

async function fetchPracticeData(
  queryClient: QueryClient,
  deck: UnifiedDeck,
  mode: PracticeMode,
  dueCardsPromise: Promise<Doc<"userFsrsCards">[]>,
): Promise<PracticeData> {
  const [hierarchy, reviewFsrs] = await Promise.all([
    queryClient.fetchQuery(
      convexQuery(api.api.hierarchy.getVocabHierarchyByDeck, {
        deckId: deck.id,
        deckSource: deck.source,
      }),
    ),
    dueCardsPromise,
  ])

  const keys = extractHierarchyKeys(hierarchy)
  const moduleFsrs =
    keys.length > 0
      ? await queryClient.fetchQuery(
          convexQuery(api.api.fsrs.getFSRSCardsForItems, { keys, mode }),
        )
      : { vocabulary: [], kanji: [], radical: [] }

  return { hierarchy, moduleFsrs, reviewFsrs }
}

function extractHierarchyKeys(hierarchy: DeckHierarchyResult): string[] {
  return [
    ...hierarchy.vocabulary.map((v) => v.word),
    ...hierarchy.kanji.map((k) => k.kanji),
    ...hierarchy.radicals.map((r) => r.radical),
  ]
}

// Convert flat card document to FSRSCardInput for practice session
function toFSRSCardInput(doc: Doc<"userFsrsCards">): FSRSCardInput {
  return {
    practiceItemKey: doc.practiceItemKey,
    card: toTsFsrsCard(doc),
    mode: doc.mode,
    type: doc.type,
  }
}

function buildSessionState(
  data: PracticeData,
  mode: PracticeMode,
  includeReviews: boolean,
) {
  const { hierarchy, moduleFsrs, reviewFsrs } = data
  const allModuleFsrs = [
    ...moduleFsrs.vocabulary,
    ...moduleFsrs.kanji,
    ...moduleFsrs.radical,
  ]

  const moduleData: PracticeItemData = {
    vocabulary: hierarchy.vocabulary,
    kanji: mode === "meanings" ? hierarchy.kanji : [],
    radicals: mode === "meanings" ? hierarchy.radicals : [],
    fsrsCards: allModuleFsrs.map(toFSRSCardInput),
  }

  const moduleKeys = {
    vocabulary: new Set(hierarchy.vocabulary.map((v) => v.word)),
    kanji: new Set(hierarchy.kanji.map((k) => k.kanji)),
    radicals: new Set(hierarchy.radicals.map((r) => r.radical)),
  }

  const filteredReviewFsrs = (reviewFsrs || [])
    .map(toFSRSCardInput)
    .filter((card) => {
      if (card.type === "vocabulary")
        return !moduleKeys.vocabulary.has(card.practiceItemKey)
      if (card.type === "kanji")
        return !moduleKeys.kanji.has(card.practiceItemKey)
      if (card.type === "radical")
        return !moduleKeys.radicals.has(card.practiceItemKey)
      return true
    })

  const nonModuleData: PracticeItemData = {
    vocabulary: [],
    kanji: [],
    radicals: [],
    fsrsCards: filteredReviewFsrs,
  }

  return initializePracticeSession(
    hierarchy.hierarchy,
    moduleData,
    nonModuleData,
    mode,
    false,
    true,
    includeReviews,
  )
}
