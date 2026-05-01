import { createFileRoute, Link, useNavigate } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { z } from "zod"
import { createEffect, createResource, createSignal, onMount, Show } from "solid-js"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { usePracticeManager } from "@/features/vocab-practice/logic/usePracticeManager"
import { buildFsrsSessionState } from "@/features/vocab-practice/logic/fsrs-session-state"
import { initializeAnkiPracticeSession } from "@/features/vocab-practice/logic/anki-data-initialization"
import { prefetchPracticeSessionSvgs } from "@/features/vocab-practice/logic/svg-prefetch"
import { fromTsFsrsCard, fromTsFsrsLog } from "convex/model/fsrs"
import type { ReviewOnlySessionData } from "convex/model/practice"
import type { PracticeMode, VocabHierarchy } from "convex/validators"
import type { Grade } from "ts-fsrs"
import { useMutation } from "convex-solidjs"
import { VocabPractice } from "@/features/vocab-practice/VocabPractice"
import { parsePreferencesCookie } from "@/query/model/preferences"
import { validateAnkiConnect } from "@/features/import/anki/anki-connect-client"
import {
  fetchDueReviewCardsByMode,
  gradeAnkiCard,
} from "@/features/import/anki/anki-sync"
import { toast } from "solid-sonner"
import { Button } from "@/components/ui/button"
import { useRecordVocabProgress } from "@/features/vocab-practice/logic/useRecordVocabProgress"

const reviewSearchSchema = z.object({
  mode: z.enum(["meanings", "spellings"]).catch("meanings"),
})

const EMPTY_HIERARCHY: VocabHierarchy = {
  vocabulary: [],
  kanji: [],
  radicals: [],
}

export const Route = createFileRoute("/_home/review/session")({
  validateSearch: (search) => reviewSearchSchema.parse(search),
  loaderDeps: ({ search }) => ({ mode: search.mode }),
  loader: ({ context, deps }) => {
    const prefs = parsePreferencesCookie()
    const anki = prefs.srsServicePreferences.anki
    const isAnkiMode = anki.mode === "enabled" && anki.is_api_key_valid

    const reviewDataPromise = !isAnkiMode
      ? context.queryClient.fetchQuery(
          convexQuery(api.api.practice.getReviewSessionData, {
            mode: deps.mode,
          }),
        )
      : null

    return { isAnkiMode, reviewDataPromise }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()
  const search = Route.useSearch()
  const [reviewData] = createResource(
    () => loaderData().reviewDataPromise ?? Promise.resolve(null),
  )

  return (
    <Show
      when={!loaderData().isAnkiMode}
      fallback={<AnkiReviewPractice mode={search().mode} />}
    >
      <FsrsReviewPractice mode={search().mode} reviewData={reviewData()} />
    </Show>
  )
}

function FsrsReviewPractice(props: {
  mode: PracticeMode
  reviewData: ReviewOnlySessionData | null | undefined
}) {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const upsertFSRSCardMutation = useMutation(api.api.fsrs.upsertFSRSCard)
  const [redirecting, setRedirecting] = createSignal(false)

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

  const recordProgress = useRecordVocabProgress(
    () => `vocab-review:nihongo-ninja-${props.mode}`,
  )

  createEffect(() => {
    const data = props.reviewData
    if (data === undefined || practiceManager.manager() || redirecting()) return

    if (!data || data.reviewData.fsrsCards.length === 0) {
      setRedirecting(true)
      navigate({ to: "/review", replace: true })
      return
    }

    const sessionState = buildFsrsSessionState(data.reviewData, props.mode)

    practiceManager.initializeManager(sessionState, { reviewOnly: true })
    prefetchPracticeSessionSvgs(queryClient, practiceManager.getManagerState())
  })

  return (
    <Show
      when={practiceManager.manager()}
      fallback={<div>Loading review session...</div>}
    >
      <VocabPractice
        practiceManager={practiceManager}
        deckName={getReviewSessionName(props.mode)}
        mode={props.mode}
        reviewOnly
        onAnswer={(rating: Grade) => practiceManager.answerCard(rating)}
        onIntroductionComplete={() => practiceManager.processIntroduction()}
        onProgressEvent={recordProgress}
        onReturn={() => navigate({ to: "/review" })}
        returnLabel="Return to Review"
      />
    </Show>
  )
}

function AnkiReviewPractice(props: { mode: PracticeMode }) {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [errorMessage, setErrorMessage] = createSignal<string | null>(null)

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

  const recordProgress = useRecordVocabProgress(
    () => `vocab-review:anki-${props.mode}`,
  )

  onMount(async () => {
    const validation = await validateAnkiConnect()
    if (!validation.success) {
      setErrorMessage(validation.error || "Failed to connect to Anki")
      return
    }

    try {
      const reviewCards = await fetchDueReviewCardsByMode(props.mode)
      if (reviewCards.length === 0) {
        navigate({ to: "/review", replace: true })
        return
      }

      const sessionState = initializeAnkiPracticeSession(
        EMPTY_HIERARCHY,
        [],
        reviewCards,
        props.mode,
      )

      practiceManager.initializeManager(sessionState, {
        reviewOnly: true,
        ankiMode: true,
      })
      prefetchPracticeSessionSvgs(queryClient, practiceManager.getManagerState())
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Unknown error occurred",
      )
    }
  })

  return (
    <Show
      when={practiceManager.manager()}
      fallback={
        <Show
          when={errorMessage()}
          fallback={<div>Loading review session...</div>}
        >
          {(message) => (
            <div class="mx-auto mt-24 flex max-w-md flex-col items-center gap-4 px-4 text-center">
              <p class="text-sm text-rose-300">{message()}</p>
              <Button as={Link} to="/review" variant="outline">
                Return to Review
              </Button>
            </div>
          )}
        </Show>
      }
    >
      <VocabPractice
        practiceManager={practiceManager}
        deckName={getReviewSessionName(props.mode)}
        mode={props.mode}
        reviewOnly
        onAnswer={(rating: Grade) => practiceManager.answerCard(rating)}
        onIntroductionComplete={() => practiceManager.processIntroduction()}
        onProgressEvent={recordProgress}
        onReturn={() => navigate({ to: "/review" })}
        returnLabel="Return to Review"
      />
    </Show>
  )
}

function getReviewSessionName(mode: PracticeMode) {
  return mode === "meanings" ? "Meanings Review" : "Spellings Review"
}
