import { useInfiniteQuery } from "@tanstack/solid-query"
import { fetchDiscoverSection } from "../api/anilist/fetch"
import type { SectionConfig } from "../utils/section-configs"

const EXPANDED_PER_PAGE = 25

export function useDiscoverSection(
  config: () => SectionConfig,
  options?: {
    enabled?: () => boolean
  },
) {
  return useInfiniteQuery(() => ({
    queryKey: sectionQueryKey(config()),
    queryFn: ({ pageParam }: { pageParam: number }) => {
      const perPage =
        pageParam === 1
          ? (config().queryVars?.perPage ?? 10)
          : EXPANDED_PER_PAGE
      return fetchDiscoverSection({
        ...config().queryVars,
        page: pageParam,
        perPage,
      })
    },
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage?.pageInfo?.hasNextPage ? lastPageParam + 1 : undefined,
    initialPageParam: 1,
    enabled: options?.enabled?.() ?? true,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  }))
}

export function sectionQueryKey(config: SectionConfig) {
  return ["anilist", config.type ?? null, config.queryVars ?? null] as const
}
