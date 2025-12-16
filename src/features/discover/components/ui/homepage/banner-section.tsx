import { createMemo } from 'solid-js'
import { useConvexQuery } from '~/lib/convex-query'
import { api } from '~/../convex/_generated/api'
import { getCurrentSeason } from '~/features/discover/utils/section-configs'
import { Banner } from '~/features/discover/components/ui/banner/banner'

/**
 * Displays featured anime banner carousel
 */
export function BannerSection() {
  const { season, year } = getCurrentSeason()

  // Use Convex query for reactivity
  const trendingQuery = useConvexQuery(
    api.api.anime.getTrendingAnime,
    () => ({ season, year })
  )

  // Derive banner data using shuffled indices from Convex
  const bannerData = createMemo(() => {
    const trending = trendingQuery.data()

    if (!trending) return undefined  // Not loaded yet

    const media = trending.data?.media
    const indices = trending.bannerIndices

    if (!media || !indices || indices.length === 0) {
      return []  // Loaded but empty
    }

    // Pick items by shuffled indices
    const result = indices.map(i => media[i]).filter(Boolean)
    return result
  })

  // Derive HQ image URLs directly from trending cache
  const hqImageUrls = createMemo(() => {
    const data = bannerData()
    const trending = trendingQuery.data()

    if (!data || data.length === 0) return undefined

    const hqImages = trending?.hqImages
    if (!hqImages) return undefined

    // Map anime to their cached HQ image URLs
    return data.map((anime: any) =>
      hqImages[anime.id.toString()] ?? null
    )
  })

  return (
    <Banner
      bannerData={bannerData()}
      hqImageUrls={hqImageUrls()}
      error={trendingQuery.error()}
      isDesktop={true}
    />
  )
}
