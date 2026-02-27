import { useQuery } from "@tanstack/solid-query"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { getUser } from "@/lib/auth"
import { usePreferences } from "@/lib/preferences"
import { getAnkiDueCount } from "@/features/import/anki/anki-adapter"

export function useSrs() {
  const { preferences } = usePreferences()
  const user = getUser()
  const ankiActive = () => {
    const anki = preferences().srsServicePreferences.anki
    return anki.mode === "enabled" && anki.is_api_key_valid
  }
  const authed = () => !!user()

  // Built-in FSRS — reactive via Convex WebSocket
  const fsrsDueCount = useConvexQuery(
    api.api.fsrs.getDueFSRSCardsCount,
    {},
    () => ({ enabled: authed() && !ankiActive() }),
  )

  // Anki — polled via TanStack Query, client-only
  const ankiDueCount = useQuery(() => ({
    queryKey: ["srs", "anki", "dueCount"] as const,
    queryFn: async () => (await getAnkiDueCount()).total,
    enabled: authed() && ankiActive(),
    refetchInterval: 30_000,
    staleTime: 30_000,
  }))

  return {
    dueCount: () => {
      if (ankiActive()) return ankiDueCount.data
      return fsrsDueCount.data()
    },
  }
}
