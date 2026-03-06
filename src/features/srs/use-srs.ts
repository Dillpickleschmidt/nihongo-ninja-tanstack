import { useQueryClient } from "@tanstack/solid-query"
import { QueryObserver } from "@tanstack/query-core"
import { useConvexQuery } from "@/lib/convex-query"
import { getUser } from "@/lib/auth"
import { usePreferences } from "@/lib/preferences"
import { getAnkiDueCount } from "@/features/import/anki/anki-adapter"
import { api } from "convex/_generated/api"
import { createEffect, createSignal, onCleanup } from "solid-js"

export function useSrs() {
  const queryClient = useQueryClient()
  const { preferences } = usePreferences()
  const user = getUser()
  const ankiActive = () => {
    const anki = preferences().srsServicePreferences.anki
    return anki.mode === "enabled" && anki.is_api_key_valid
  }
  const authed = () => !!user()

  const fsrsDueCount = useConvexQuery(
    api.api.fsrs.getDueFSRSCardsCount,
    {},
    () => ({ enabled: authed() && !ankiActive() }),
  )

  const [ankiCount, setAnkiCount] = createSignal<number | undefined>(undefined)

  createEffect(() => {
    if (!authed() || !ankiActive()) {
      setAnkiCount(undefined)
      return
    }

    const observer = new QueryObserver(queryClient, {
      queryKey: ["srs", "anki", "dueCount"] as const,
      queryFn: async () => (await getAnkiDueCount()).total,
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

  return {
    dueCount: () => {
      if (!authed()) return 0

      if (ankiActive()) {
        return ankiCount()
      }

      if (fsrsDueCount.isLoading()) return undefined
      return fsrsDueCount.data()
    },
  }
}
