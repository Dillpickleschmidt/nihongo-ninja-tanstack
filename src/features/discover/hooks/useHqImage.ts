import { useQuery } from "@tanstack/solid-query"
import { fetchHqImage, hqImageQueryKey } from "../api/anilist/fetch"

export function useHqImage(anilistId: () => number | undefined) {
  return useQuery(() => {
    const id = anilistId()
    return {
      queryKey: hqImageQueryKey(id ?? 0),
      queryFn: id ? () => fetchHqImage(id) : () => Promise.resolve(null),
      staleTime: 24 * 60 * 60 * 1000,
      gcTime: 24 * 60 * 60 * 1000,
    }
  })
}
