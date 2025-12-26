import { createFileRoute } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { queryKeys } from "~/query/query-keys"
import {
  getGenericSections,
  getCurrentSeason,
} from "~/features/discover/utils/section-configs"
import { BannerSection } from "~/features/discover/components/ui/homepage/banner-section"
import { GenericSections } from "~/features/discover/components/ui/homepage/generic-sections"
import { convexQuery, convexMutation } from "~/lib/convex-query"
import { api } from "~/../convex/_generated/api"
import { BottomNav } from "~/features/navbar/Nav"

export const Route = createFileRoute("/discover")({
  loader: ({ context }) => {
    const { season, year } = getCurrentSeason()
    const genericSections = getGenericSections(season, year)

    const sections = genericSections.map((section) => ({
      type: section.type!,
      params: section.params,
      queryVars: section.queryVars,
    }))

    const mutationFn = convexMutation(api.api.anime.ensureAllSections, {
      sections,
    })
    mutationFn().catch(() => {})

    context.queryClient.prefetchQuery(
      convexQuery(api.api.anime.getSectionAnime, {
        sectionType: "trending",
        season,
        year,
      }),
    )

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
