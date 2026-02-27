import { useQuery } from "@tanstack/solid-query"
import { useConvexQuery } from "@/lib/convex-query"
import { isServer } from "solid-js/web"
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
    queryFn: async () => {
      if (isServer) return null as number | null
      return (await getAnkiDueCount()).total
    },
    enabled: authed() && ankiActive(),
    refetchInterval: 30_000,
    staleTime: 30_000,
    refetchOnMount: "always",
  }))

  return {
    dueCount: () => {
      if (ankiActive()) {
        if (ankiDueCount.status !== "success") return undefined
        return ankiDueCount.data === null ? undefined : ankiDueCount.data
      }
      return fsrsDueCount.data()
    },
  }
}
