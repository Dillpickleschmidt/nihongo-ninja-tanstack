import { createMemo } from "solid-js"
import {
  getCurrentSeason,
  getTrendingConfig,
} from "~/features/discover/utils/section-configs"
import { useDiscoverSection } from "~/features/discover/hooks/useDiscoverSection"
import { useHqImage } from "~/features/discover/hooks/useHqImage"
import { Banner } from "~/features/discover/components/ui/banner/banner"

/**
 * Displays featured anime banner carousel
 */
export function BannerSection() {
  const { season, year } = getCurrentSeason()

  const trendingQuery = useDiscoverSection(
    () => getTrendingConfig(season, year),
    { withBannerIndices: true },
  )

  const bannerData = createMemo(() => {
    const data = trendingQuery.data
    if (data === undefined) return undefined
    const media = data.media
    if (!media || media.length === 0) return []
    return data.bannerIndices.map((i) => media[i]).filter(Boolean)
  })

  // All 5 HQ images fetch independently, non-blocking
  const hq0 = useHqImage(() => bannerData()?.[0]?.id)
  const hq1 = useHqImage(() => bannerData()?.[1]?.id)
  const hq2 = useHqImage(() => bannerData()?.[2]?.id)
  const hq3 = useHqImage(() => bannerData()?.[3]?.id)
  const hq4 = useHqImage(() => bannerData()?.[4]?.id)
  const hqImageUrls = () => [hq0.data, hq1.data, hq2.data, hq3.data, hq4.data]

  return (
    <Banner
      bannerData={bannerData()}
      hqImageUrls={hqImageUrls()}
      error={trendingQuery.error}
      isDesktop={true}
    />
  )
}
