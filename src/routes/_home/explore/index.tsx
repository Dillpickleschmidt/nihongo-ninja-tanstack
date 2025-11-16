import { createFileRoute, Await } from "@tanstack/solid-router"
import { For, Show } from "solid-js"
import { Search, FullMedia } from "@/features/explore/api/anilist/queries"
import { fetchEpisodes } from "@/features/explore/api/anizip"
import { shuffle } from "@/features/explore/utils/banner-utils"
import {
  getHomepageSections,
  getCurrentSeason,
} from "@/features/explore/utils/section-configs"
import { Banner } from "@/features/explore/components/ui/banner/banner"
import { BannerSkeleton } from "@/features/explore/components/ui/banner/skeleton-banner"
import { AnimeQuerySection } from "@/features/explore/components/ui/cards/query-card"
import { userSettingsQueryOptions } from "@/query/query-options"
import type { ResultOf, FragmentOf } from "gql.tada"
import type { EpisodesResponse } from "@/features/explore/api/anizip"

const sections = getHomepageSections()

type CombinedBannerData = {
  bannerResult: {
    Page: ResultOf<typeof Search>["Page"]
    shuffledBannerData: (FragmentOf<typeof FullMedia> | null)[]
  }
  anizipDataArray: (EpisodesResponse | null)[]
}

export const Route = createFileRoute("/_home/explore/")({
  loader: async ({ context }) => {
    const { urqlClient, queryClient, user } = context as any

    const { season, year } = getCurrentSeason()

    // Get device type from user settings query (reads from settings cookie)
    const settings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )
    const deviceType = settings["device-type"]
    const isDesktop = deviceType === "desktop"

    // Banner query - popular seasonal anime
    const bannerPromise = urqlClient
      .query(Search, {
        page: 1,
        perPage: 15,
        sort: ["POPULARITY_DESC"],
        season,
        seasonYear: year,
        statusNot: ["NOT_YET_RELEASED"],
      })
      .toPromise()
      .then((result) => ({ data: result.data, error: result.error }))

    // Shuffle, filter, and pre-fetch AniZip for all 5 banner items
    const combinedBannerPromise = bannerPromise.then(
      (result: {
        data: ResultOf<typeof Search> | null | undefined
        error?: any
      }) => {
        // Shuffle and filter to get 5 items (same logic as Banner component would do)
        const shuffledBannerData = shuffle(
          result.data?.Page?.media?.filter(
            (media) => media && (media.bannerImage ?? media.trailer?.id),
          ) || [],
        )
          .slice(0, 5)
          .filter((m) => m !== null)

        // Pre-fetch AniZip for all 5 items (only on desktop)
        const anizipPromise = isDesktop
          ? Promise.all(
              shuffledBannerData
                .map((m) => m?.id)
                .filter(Boolean)
                .map((id) => fetchEpisodes(id as number)),
            ).catch(() => {
              return Array(shuffledBannerData.length).fill(null)
            })
          : Promise.resolve(Array(shuffledBannerData.length).fill(null))

        return Promise.all([shuffledBannerData, anizipPromise]).then(
          ([bannerData, anizipData]) => ({
            bannerResult: {
              Page: result.data?.Page,
              shuffledBannerData: bannerData,
            },
            anizipDataArray: anizipData,
            error: result.error,
          }),
        )
      },
    )

    return { combinedBannerPromise, isDesktop, sectionConfigs: sections }
  },

  component: HomePage,
})

function HomePage() {
  const { combinedBannerPromise, isDesktop, sectionConfigs } =
    Route.useLoaderData()()
  const { urqlClient } = Route.useRouteContext()()

  return (
    <div>
      {/* Banner */}
      <Await promise={combinedBannerPromise} fallback={<BannerSkeleton />}>
        {(data: CombinedBannerData & { error?: any }) => (
          <Show
            when={!data.error}
            fallback={
              <div class="w-full bg-red-50 p-4 text-red-600">
                Error loading banner: {data.error?.message ?? "Unknown error"}
              </div>
            }
          >
            <Banner
              bannerData={data.bannerResult.shuffledBannerData}
              anizipDataArray={data.anizipDataArray ?? null}
              isDesktop={isDesktop}
            />
          </Show>
        )}
      </Await>

      {/* Sections */}
      <div class="mx-auto pb-16 sm:px-2">
        <For each={sectionConfigs}>
          {(config) => (
            <>
              {/* Section Header */}
              <div class="text-muted-foreground flex cursor-pointer items-end px-4 pt-5">
                <div class="text-lg leading-none font-semibold">
                  {config.title}
                </div>
                <div class="ml-auto text-xs">View More</div>
              </div>

              {/* Horizontal Scroll Container */}
              <div class="flex overflow-x-auto pb-4">
                <AnimeQuerySection config={config} urqlClient={urqlClient} />
              </div>
            </>
          )}
        </For>
      </div>
    </div>
  )
}
