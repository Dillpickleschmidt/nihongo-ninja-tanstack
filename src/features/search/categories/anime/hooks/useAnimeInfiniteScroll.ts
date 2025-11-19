import { createSignal, createMemo, createEffect, on, onMount } from "solid-js"
import type { SearchFilters } from "../types"
import { filterEmpty, buildSearchQuery } from "../utils"
import { Search } from "@/features/explore/api/anilist/queries"
import { queryAniList } from "@/features/explore/api/anilist/query-wrapper"

interface UseAnimeInfiniteScrollOptions {
  urqlClient: any
  search: () => SearchFilters
}

export function useAnimeInfiniteScroll(options: UseAnimeInfiniteScrollOptions) {
  const [results, setResults] = createSignal<any[]>([])
  const [currentPage, setCurrentPage] = createSignal(1)
  const [isLoading, setIsLoading] = createSignal(false)
  const [hasMore, setHasMore] = createSignal(true)
  const [error, setError] = createSignal<string | null>(null)

  let sentinelRef: HTMLDivElement | undefined

  // Serialize filters for change detection
  const filtersKey = createMemo(() => JSON.stringify(options.search()))

  // Main fetch function
  const loadPage = async (page: number) => {
    if (isLoading() || (page > 1 && !hasMore())) {
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const filtered = filterEmpty(options.search())
      const vars = buildSearchQuery(filtered, page)

      const result = await queryAniList(
        options.urqlClient,
        undefined,
        Search,
        vars,
      )

      if (result.error) {
        setError(result.error.message || "Failed to fetch results")
        return
      }

      const media = result.data?.Page?.media || []

      // Replace results for page 1, append for subsequent pages
      if (page === 1) {
        setResults(media)
      } else {
        setResults((prev) => [...prev, ...media])
      }

      // Check if there are more pages
      setHasMore(result.data?.Page?.pageInfo?.hasNextPage ?? false)
      setCurrentPage(page)
    } catch (err) {
      console.error("[AnimeSearch] Error loading page:", err)
      setError(String(err))
    } finally {
      setIsLoading(false)
    }
  }

  // Reset state when filters change
  const resetSearch = () => {
    setResults([])
    setCurrentPage(1)
    setHasMore(true)
    setError(null)
  }

  // Effect: Watch for filter changes
  createEffect(
    on(filtersKey, () => {
      resetSearch()
      loadPage(1)
    }),
  )

  // Effect: Setup IntersectionObserver
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && hasMore() && !isLoading()) {
          loadPage(currentPage() + 1)
        }
      },
      { threshold: 0.1 },
    )

    if (sentinelRef) {
      observer.observe(sentinelRef)
    }

    return () => observer.disconnect()
  })

  return {
    results,
    isLoading,
    hasMore,
    sentinelRef: (el: HTMLDivElement) => {
      sentinelRef = el
    },
  }
}
