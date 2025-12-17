import { useInfiniteQuery } from "@tanstack/solid-query"
import { onMount } from "solid-js"
import { print } from "graphql"
import type { SearchFilters } from "../types"
import { filterEmpty, buildSearchQuery } from "../utils"
import { Search } from "@/features/discover/api/anilist/queries"
import { rateLimitedAniListFetch } from "@/features/discover/api/anilist/anilist-rate-limiter"

interface UseAnimeInfiniteScrollOptions {
  search: () => SearchFilters
}

export function useAnimeInfiniteScroll(options: UseAnimeInfiniteScrollOptions) {
  const query = useInfiniteQuery(() => ({
    queryKey: ["anime-search", options.search()],
    queryFn: async ({ pageParam = 1 }) => {
      const filtered = filterEmpty(options.search())
      const vars = buildSearchQuery(filtered, pageParam)

      // Convert query object to GraphQL string
      const queryString = print(Search)

      const response = await rateLimitedAniListFetch(
        "https://graphql.anilist.co",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: queryString,
            variables: vars,
          }),
        },
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.errors) {
        throw new Error(result.errors[0]?.message || "Failed to fetch results")
      }

      return result.data
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.Page?.pageInfo?.hasNextPage
        ? allPages.length + 1
        : undefined
    },
    getPreviousPageParam: () => undefined,
    initialPageParam: 1,
  }))

  let sentinelRef: HTMLDivElement | undefined

  // Setup IntersectionObserver for infinite scroll
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0]?.isIntersecting &&
          query.hasNextPage &&
          !query.isFetchingNextPage
        ) {
          query.fetchNextPage()
        }
      },
      { threshold: 0.1 },
    )

    if (sentinelRef) {
      observer.observe(sentinelRef)
    }

    return () => observer.disconnect()
  })

  // Flatten all pages into a single results array
  const results = () => {
    const pages = query.data?.pages ?? []
    return pages.flatMap((page) => page?.Page?.media ?? [])
  }

  return {
    results,
    isLoading: () => query.isLoading,
    hasMore: () => query.hasNextPage ?? false,
    error: () => query.error?.message ?? null,
    sentinelRef: (el: HTMLDivElement) => {
      sentinelRef = el
    },
  }
}
