import { createFileRoute } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { queryKeys } from "~/query/query-keys"
import {
  getGenericSections,
  getCurrentSeason,
} from "~/features/discover/utils/section-configs"
import { BannerSection } from "~/features/discover/components/ui/homepage/banner-section"
import { GenericSections } from "~/features/discover/components/ui/homepage/generic-sections"
import {
  fetchDiscoverSection,
  fetchHqImage,
  hqImageQueryKey,
} from "~/features/discover/api/anilist/fetch"
import { sectionQueryKey } from "~/features/discover/hooks/useDiscoverSection"
import { BottomNav } from "~/features/navbar/Nav"

export const Route = createFileRoute("/discover")({
  loader: ({ context }) => {
    const { season, year } = getCurrentSeason()
    const genericSections = getGenericSections(season, year)

    const trendingConfig = genericSections.find((s) => s.type === "trending")!

    // Prefetch trending, then kick off HQ image prefetches for banner items
    context.queryClient
      .ensureQueryData({
        queryKey: sectionQueryKey(trendingConfig),
        queryFn: () =>
          fetchDiscoverSection(trendingConfig.queryVars!, {
            withBannerIndices: true,
          }),
      })
      .then((data) => {
        const media =
          data.media?.filter(
            (m): m is NonNullable<typeof m> => m != null,
          ) ?? []
        const bannerMedia = data.bannerIndices
          .map((i) => media[i])
          .filter(Boolean)

        for (const anime of bannerMedia) {
          context.queryClient.prefetchQuery({
            queryKey: hqImageQueryKey(anime.id),
            queryFn: () => fetchHqImage(anime.id),
          })
        }
      })

    return {
      genericSections,
    }
  },
  component: DiscoverPage,
})

function DiscoverPage() {
  const loaderData = Route.useLoaderData()
  const queryClient = useQueryClient()

  queryClient.setQueryData(queryKeys.backgroundSettings(), {
    blur: 0,
    opacityOffset: -1,
    showGradient: false,
  })

  return (
    <div>
      <BannerSection />

      <div class="mx-auto pb-16 sm:px-2">
        <GenericSections sections={loaderData().genericSections} />
      </div>

      <BottomNav
        class="bg-background/85 opacity-100"
        dailyProgressPercentage={65}
      />
    </div>
  )
}
