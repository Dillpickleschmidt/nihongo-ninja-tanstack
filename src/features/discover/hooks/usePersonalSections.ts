import { useQuery } from "@tanstack/solid-query"
import { convexAction, convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { getUser } from "@/lib/auth"
import { extractUserListIds } from "../utils/id-extractors"
import { getPersonalSections } from "../utils/section-configs"

export const personalSectionsQueryKey = (userId: string | null) =>
  ["discover", "personal-sections", userId] as const

export function personalSectionsQueryOptions(userId: string | null) {
  return {
    queryKey: personalSectionsQueryKey(userId),
    queryFn: async () => {
      const connectionStatus = await convexQuery(
        api.api.animeAuth.getConnectionStatus,
        {},
      ).queryFn()

      if (!connectionStatus.anilist) {
        return null
      }

      const { lists, titleLanguage } = await convexAction(
        api.api.animeAuth.fetchUserLists,
        {},
      )()
      const userListIds = extractUserListIds(lists)
      return { sections: getPersonalSections(userListIds), titleLanguage }
    },
    staleTime: Infinity,
  }
}

export function usePersonalSections() {
  const user = getUser()
  const userId = () => user()?.id ?? null

  return useQuery(() => ({
    ...personalSectionsQueryOptions(userId()),
    enabled: !!userId(),
  }))
}
