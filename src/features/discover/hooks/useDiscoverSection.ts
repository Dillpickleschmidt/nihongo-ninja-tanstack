import { useQuery } from "@tanstack/solid-query"
import { fetchDiscoverSection } from "../api/anilist/fetch"
import type { SectionConfig } from "../utils/section-configs"

export function useDiscoverSection(
  config: () => SectionConfig,
  options?: { withBannerIndices?: boolean },
) {
  return useQuery(() => ({
    queryKey: sectionQueryKey(config()),
    queryFn: () =>
      fetchDiscoverSection(config().queryVars!, {
        withBannerIndices: options?.withBannerIndices,
      }),
    staleTime: 30 * 60 * 1000, // 30 min
    gcTime: 60 * 60 * 1000, // 1 hour
  }))
}

export function sectionQueryKey(config: SectionConfig) {
  return ["anilist", config.type ?? null, config.queryVars ?? null] as const
}
