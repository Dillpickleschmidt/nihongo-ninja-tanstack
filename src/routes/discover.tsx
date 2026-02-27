import { createResource, Show, Suspense } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import { queryKeys } from "~/query/query-keys"
import { authQueryOptions } from "~/query/query-options"
import {
  getGenericSections,
  getCurrentSeason,
} from "~/features/discover/utils/section-configs"
import { BannerSkeleton } from "~/features/discover/components/ui/banner/skeleton-banner"
import { BannerSection } from "~/features/discover/components/ui/homepage/banner-section"
import { GenericSections } from "~/features/discover/components/ui/homepage/generic-sections"
import {
  fetchDiscoverSection,
  fetchHqImage,
  hqImageQueryKey,
} from "~/features/discover/api/anilist/fetch"
import { sectionQueryKey } from "~/features/discover/hooks/useDiscoverSection"
import {
  personalSectionsQueryOptions,
} from "~/features/discover/hooks/usePersonalSections"
import { BottomNav } from "~/features/navbar/Nav"

export const Route = createFileRoute("/discover")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 0,
        opacityOffset: -1,
        showGradient: false,
      })
    }

    const { season, year } = getCurrentSeason()
    const genericSections = getGenericSections(season, year)
    const auth = context.queryClient.getQueryData(authQueryOptions().queryKey)

    const trendingConfig = genericSections.find((s) => s.type === "trending")!

    const userId = auth?.session?.user?.id ?? null
    const personalSectionsPromise = userId
      ? context.queryClient.fetchQuery(personalSectionsQueryOptions(userId))
      : Promise.resolve(null)

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
      personalSectionsPromise,
    }
  },
  component: DiscoverPage,
})

function DiscoverPage() {
  const loaderData = Route.useLoaderData()
  const [personalSections] = createResource(
    () => loaderData().personalSectionsPromise,
  )

  return (
    <div>
      <Suspense fallback={<BannerSkeleton />}>
        <BannerSection />
      </Suspense>

      <div class="mx-auto pb-16 sm:px-2">
        <Suspense fallback={null}>
          <Show when={personalSections()}>
            {(sections) => <GenericSections sections={sections()} />}
          </Show>
        </Suspense>
        <GenericSections sections={loaderData().genericSections} />
      </div>

      <BottomNav
        class="bg-background/85 opacity-100"
        dailyProgressPercentage={65}
      />
    </div>
  )
}
