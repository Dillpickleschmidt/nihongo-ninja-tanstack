import { useQueryClient } from "@tanstack/solid-query"
import { QueryObserver } from "@tanstack/query-core"
import { useConvexQuery } from "@/lib/convex-query"
import { getUser } from "@/lib/auth"
import { usePreferences } from "@/lib/preferences"
import { getAnkiDueCount } from "@/features/import/anki/anki-adapter"
import { api } from "convex/_generated/api"
import { createEffect, createSignal, onCleanup } from "solid-js"

export type DueCounts = {
  vocabMeanings: number | undefined
  vocabSpellings: number | undefined
  vocabTotal: number | undefined
  sentences: number | undefined // placeholder — not tracked yet
}

export function useSrs() {
  const queryClient = useQueryClient()
  const { preferences } = usePreferences()
  const user = getUser()
  const ankiActive = () => {
    const anki = preferences().srsServicePreferences.anki
    return anki.mode === "enabled" && anki.is_api_key_valid
  }
  const authed = () => !!user()

  const fsrsDueCountQuery = useConvexQuery(
    api.api.fsrs.getDueFSRSCardsCount,
    {},
    () => ({ enabled: authed() && !ankiActive() }),
  )

  const [ankiCount, setAnkiCount] = createSignal<
    | {
        meanings: number
        spellings: number
        total: number
      }
    | undefined
  >(undefined)

  createEffect(() => {
    if (!authed() || !ankiActive()) {
      setAnkiCount(undefined)
      return
    }

    const observer = new QueryObserver(queryClient, {
      queryKey: ["srs", "anki", "dueCount"] as const,
      queryFn: async () => getAnkiDueCount(),
      refetchInterval: 30_000,
      staleTime: 30_000,
      refetchOnMount: "always",
    })

    const updateFromResult = (
      result: ReturnType<typeof observer.getCurrentResult>,
    ) => {
      setAnkiCount(result.status === "success" ? result.data : undefined)
    }

    updateFromResult(observer.getCurrentResult())
    const unsubscribe = observer.subscribe(updateFromResult)

    onCleanup(unsubscribe)
  })

  const dueCounts = (): DueCounts => {
    if (!authed()) {
      return { vocabMeanings: 0, vocabSpellings: 0, vocabTotal: 0, sentences: undefined }
    }

    if (ankiActive()) {
      const counts = ankiCount()
      return {
        vocabMeanings: counts?.meanings,
        vocabSpellings: counts?.spellings,
        vocabTotal: counts?.total,
        sentences: undefined,
      }
    }

    const data = fsrsDueCountQuery.data()
    if (data === undefined) {
      return { vocabMeanings: undefined, vocabSpellings: undefined, vocabTotal: undefined, sentences: undefined }
    }

    return {
      vocabMeanings: data.meanings,
      vocabSpellings: data.spellings,
      vocabTotal: data.meanings + data.spellings,
      sentences: undefined, // not tracked yet
    }
  }

  return { dueCounts }
}
