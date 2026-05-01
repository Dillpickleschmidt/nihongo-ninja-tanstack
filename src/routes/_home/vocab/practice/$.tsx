import { createFileRoute } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { z } from "zod"
import { createSignal, createResource, createEffect, Show } from "solid-js"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { usePracticeManager } from "@/features/vocab-practice/logic/usePracticeManager"
import { buildFsrsSessionState } from "@/features/vocab-practice/logic/fsrs-session-state"
import { initializeAnkiPracticeSession } from "@/features/vocab-practice/logic/anki-data-initialization"
import { prefetchPracticeSessionSvgs } from "@/features/vocab-practice/logic/svg-prefetch"
import type { UnifiedDeck } from "convex/model/decks"
import type { DeckHierarchyResult } from "convex/model/hierarchy"
import type { DeckPracticeSessionData } from "convex/model/practice"
import { fromTsFsrsCard, fromTsFsrsLog } from "convex/model/fsrs"
import type { PracticeMode } from "convex/validators"
import type { Grade } from "ts-fsrs"
import { useMutation } from "convex-solidjs"
import { VocabPractice } from "@/features/vocab-practice/VocabPractice"
import { usePreferences } from "@/lib/preferences"
import { validateAnkiConnect } from "@/features/import/anki/anki-connect-client"
import { ensureAnkiSetup } from "@/features/import/anki/anki-setup"
import {
  buildModuleNotesFromData,
  checkModuleSync,
  pushNotesToAnki,
  fetchModuleCardData,
  fetchDueReviewCards,
  gradeAnkiCard,
} from "@/features/import/anki/anki-sync"
import {
  meaningsDeckName,
  spellingsDeckName,
} from "@/features/import/anki/anki-models"
import {
  AnkiSyncDialog,
  type AnkiSyncState,
} from "@/features/vocab-practice/components/AnkiSyncDialog"
import { parsePreferencesCookie } from "@/query/model/preferences"
import { toast } from "solid-sonner"
import { useRecordVocabProgress } from "@/features/vocab-practice/logic/useRecordVocabProgress"

const practiceSearchSchema = z.object({
  mode: z.enum(["meanings", "spellings"]).catch("meanings"),
})

export const Route = createFileRoute("/_home/vocab/practice/$")({
  validateSearch: (search) => practiceSearchSchema.parse(search),
  loaderDeps: ({ search }) => ({ mode: search.mode }),
  loader: ({ context, params, deps }) => {
    const deckId = parsePathSegments(params._splat).at(-1)
    const mode = deps.mode

    const prefs = parsePreferencesCookie()
    const anki = prefs.srsServicePreferences.anki
    const isAnkiMode = anki.mode === "enabled" && anki.is_api_key_valid

    const practiceDataPromise =
      deckId && !isAnkiMode
        ? context.queryClient.fetchQuery(
            convexQuery(api.api.practice.getPracticeData, { deckId, mode }),
          )
        : null

    const ankiDataPromise =
      deckId && isAnkiMode
        ? context.queryClient.fetchQuery(
            convexQuery(api.api.hierarchy.getDeckHierarchy, { deckId }),
          )
        : null

    return { practiceDataPromise, ankiDataPromise, deckId }
  },
  component: PracticeCatchAll,
})

function PracticeCatchAll() {
  const loaderData = Route.useLoaderData()
  const search = Route.useSearch()
  const mode = () => search().mode
  const { preferences } = usePreferences()

  const ankiActive = () => {
    const anki = preferences().srsServicePreferences.anki
    return anki.mode === "enabled" && anki.is_api_key_valid
  }

  const [practiceData] = createResource(
    () => loaderData().practiceDataPromise ?? Promise.resolve(null),
  )
  const [ankiData] = createResource(
    () => loaderData().ankiDataPromise ?? Promise.resolve(null),
  )

  const deck = () =>
    ankiActive() ? (ankiData()?.deck ?? null) : (practiceData()?.deck ?? null)

  return (
    <Show
      when={deck()}
      fallback={
        <div>
          <p>{loaderData().deckId ? "Loading..." : "Deck not found"}</p>
        </div>
      }
    >
      {(d) => (
        <Show
          when={ankiActive()}
          fallback={
            <FsrsPractice
              deck={d()}
              mode={mode()}
              practiceData={practiceData()}
              includeReviews={true}
            />
          }
        >
          <AnkiPractice
            deck={d()}
            mode={mode()}
            hierarchy={ankiData()?.hierarchy}
          />
        </Show>
      )}
    </Show>
  )
}

// --- FSRS Practice (existing flow, extracted) ---

function FsrsPractice(props: {
  deck: UnifiedDeck
  mode: PracticeMode
  practiceData: DeckPracticeSessionData | null | undefined
  includeReviews: boolean
}) {
  const queryClient = useQueryClient()
  const upsertFSRSCardMutation = useMutation(api.api.fsrs.upsertFSRSCard)

  const practiceManager = usePracticeManager(async (card, _rating) => {
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

  const recordProgress = useRecordVocabProgress(() => `vocab-deck:${props.deck.id}`)

  createEffect(() => {
    const data = props.practiceData
    if (!data || practiceManager.manager()) return

    const sessionState = buildFsrsSessionState(data.reviewData, props.mode, {
      hierarchy: data.hierarchy.hierarchy,
      moduleData: data.moduleData,
      includeReviews: props.includeReviews,
    })
    practiceManager.initializeManager(sessionState)
    prefetchPracticeSessionSvgs(queryClient, practiceManager.getManagerState())
  })

  return (
    <Show
      when={practiceManager.manager()}
      fallback={<div>Loading practice session...</div>}
    >
      <VocabPractice
        practiceManager={practiceManager}
        deckName={props.deck.deckName}
        mode={props.mode}
        onAnswer={(rating: Grade) => practiceManager.answerCard(rating)}
        onIntroductionComplete={() => practiceManager.processIntroduction()}
        onProgressEvent={recordProgress}
      />
    </Show>
  )
}

// --- Anki Practice ---

function AnkiPractice(props: {
  deck: UnifiedDeck
  mode: PracticeMode
  hierarchy: DeckHierarchyResult | null | undefined
}) {
  const queryClient = useQueryClient()
  const [ankiState, setAnkiState] = createSignal<AnkiSyncState>({
    phase: "checking",
  })

  const practiceManager = usePracticeManager(async (card, rating) => {
    if (!card.ankiCardId) return
    try {
      const success = await gradeAnkiCard(card.ankiCardId, rating as number)
      if (!success) throw new Error("Anki rejected the answer")
    } catch (error) {
      console.error("Failed to sync answer to Anki:", error)
      toast.error("Lost connection to Anki. Answer not saved.")
    }
  })

  const recordProgress = useRecordVocabProgress(() => `vocab-deck:${props.deck.id}`)

  let syncContext: {
    hierarchy: DeckHierarchyResult
    deckName: string
    toAddNotes: ReturnType<typeof buildModuleNotesFromData>
  } | null = null

  const startAnkiFlow = async () => {
    const hierarchy = props.hierarchy
    if (!hierarchy) return

    setAnkiState({ phase: "checking" })

    try {
      const validation = await validateAnkiConnect()
      if (!validation.success) {
        setAnkiState({
          phase: "error",
          message: validation.error || "Failed to connect to Anki",
        })
        return
      }

      const ankiPath = [
        ...(props.deck.folderId ? props.deck.folderId.split("/") : []),
        props.deck.deckName,
      ]
      const deckName =
        props.mode === "meanings"
          ? meaningsDeckName(ankiPath)
          : spellingsDeckName(ankiPath)

      // Build notes from hierarchy display data
      const notes = buildModuleNotesFromData(
        hierarchy.vocabulary,
        props.mode === "meanings" ? hierarchy.kanji : [],
        props.mode === "meanings" ? hierarchy.radicals : [],
        props.mode,
        deckName,
      )

      // Check what needs syncing
      const { toAdd, alreadyExist } = await checkModuleSync(notes, deckName)

      syncContext = { hierarchy, deckName, toAddNotes: toAdd }
      setAnkiState({ phase: "confirm", toAdd: toAdd.length, alreadyExist })
    } catch (error) {
      setAnkiState({
        phase: "error",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      })
    }
  }

  const continueAnkiSetup = async () => {
    if (!syncContext) return

    setAnkiState({ phase: "loading" })

    try {
      const { hierarchy, deckName, toAddNotes } = syncContext

      // Ensure models + decks exist, then push notes
      await ensureAnkiSetup([
        ...(props.deck.folderId ? props.deck.folderId.split("/") : []),
        props.deck.deckName,
      ])
      await pushNotesToAnki(toAddNotes)

      // Fetch card data from Anki
      const nnKeys = [
        ...hierarchy.vocabulary.map((v) => `vocabulary:${v.word}`),
        ...(props.mode === "meanings"
          ? hierarchy.kanji.map((k) => `kanji:${k.kanji}`)
          : []),
        ...(props.mode === "meanings"
          ? hierarchy.radicals.map((r) => `radical:${r.radical}`)
          : []),
      ]

      const moduleCards = await fetchModuleCardData(nnKeys, deckName)
      const reviewCards = await fetchDueReviewCards(deckName, new Set(nnKeys))

      // Initialize practice session
      const sessionState = initializeAnkiPracticeSession(
        hierarchy.hierarchy,
        moduleCards,
        reviewCards,
        props.mode,
      )

      practiceManager.initializeManager(sessionState, { ankiMode: true })
      prefetchPracticeSessionSvgs(
        queryClient,
        practiceManager.getManagerState(),
      )
      setAnkiState({ phase: "ready" })
    } catch (error) {
      setAnkiState({
        phase: "error",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      })
    }
  }

  // Start flow when practice data arrives
  createEffect(() => {
    if (props.hierarchy && !practiceManager.manager()) {
      startAnkiFlow()
    }
  })

  return (
    <Show
      when={practiceManager.manager() && ankiState().phase === "ready"}
      fallback={
        <AnkiSyncDialog
          state={ankiState()}
          onContinue={continueAnkiSetup}
          onCancel={() => {
            window.location.href = "/vocab"
          }}
          onRetry={startAnkiFlow}
        />
      }
    >
      <VocabPractice
        practiceManager={practiceManager}
        deckName={props.deck.deckName}
        mode={props.mode}
        onAnswer={(rating: Grade) => practiceManager.answerCard(rating)}
        onIntroductionComplete={() => practiceManager.processIntroduction()}
        onProgressEvent={recordProgress}
      />
    </Show>
  )
}

function parsePathSegments(splat: string | undefined): string[] {
  return splat ? splat.split("/").filter(Boolean) : []
}
