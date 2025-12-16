import { createFileRoute } from '@tanstack/solid-router'
import { useQueryClient } from '@tanstack/solid-query'
import { queryKeys } from '~/query/query-keys'
import { getGenericSections, getCurrentSeason } from '~/features/discover/utils/section-configs'
import { BannerSection } from '~/features/discover/components/ui/homepage/banner-section'
import { PersonalizedSections } from '~/features/discover/components/ui/homepage/personalized-sections'
import { GenericSections } from '~/features/discover/components/ui/homepage/generic-sections'
import { getUser } from '~/lib/auth'
import { convexMutation, convexQuery } from '~/lib/convex-query'
import { api } from '~/../convex/_generated/api'
import { BottomNav } from '~/features/navbar/Nav'

export const Route = createFileRoute('/discover')({
  loader: ({ context }) => {
    const { season, year } = getCurrentSeason()

    const mutationFn = convexMutation(api.api.anime.ensureTrendingAnime, {
      season,
      year,
    })
    mutationFn().catch(() => { })

    const popularSeasonFn = convexMutation(api.api.anime.ensurePopularSeasonAnime, {
      season,
      year,
    })
    popularSeasonFn().catch(() => { })

    const allTimePopularFn = convexMutation(api.api.anime.ensureAllTimePopularAnime, {})
    allTimePopularFn().catch(() => { })

    const genres = ['Romance', 'Action', 'Adventure', 'Fantasy']
    genres.forEach((genre) => {
      const genreFn = convexMutation(api.api.anime.ensureGenreAnime, { genre })
      genreFn().catch(() => { })
    })

    context.queryClient.prefetchQuery(
      convexQuery(api.api.anime.getTrendingAnime, { season, year })
    )

    return {
      genericSections: getGenericSections(),
    }
  },
  component: DiscoverPage,
})

function DiscoverPage() {
  const loaderData = Route.useLoaderData()
  const user = getUser()
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
        {/* <PersonalizedSections userId={user()?.id} /> */}
        <GenericSections sections={loaderData().genericSections} />
      </div>

      <BottomNav class='bg-background/85 opacity-100' dailyProgressPercentage={65} />
    </div>
  )
}
