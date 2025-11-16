import { createFileRoute, Await } from "@tanstack/solid-router"
import { For } from "solid-js"
import type { ResultOf, FragmentOf } from "gql.tada"
import type { OperationResult } from "@urql/core"
import {
  Search,
  FullMedia,
} from "@/features/extracurriculars-v2/api/anilist/queries"
import { fetchEpisodes } from "@/features/extracurriculars-v2/api/anizip"
import type { EpisodesResponse } from "@/features/extracurriculars-v2/api/anizip"
import { shuffle } from "@/features/extracurriculars-v2/utils/banner-utils"
import {
  getHomepageSections,
  getCurrentSeason,
} from "@/features/extracurriculars-v2/utils/section-configs"
import { AnimeSection } from "@/features/extracurriculars-v2/components/AnimeSection"
import { Banner } from "@/features/extracurriculars-v2/components/ui/banner/banner"
import { BannerSkeleton } from "@/features/extracurriculars-v2/components/ui/banner/skeleton-banner"
import { userSettingsQueryOptions } from "@/query/query-options"

const sections = getHomepageSections()

type CombinedBannerData = {
  bannerResult: {
    Page: ResultOf<typeof Search>["Page"]
    shuffledBannerData: (FragmentOf<typeof FullMedia> | null)[]
  }
  anizipDataArray: (EpisodesResponse | null)[]
}

export const Route = createFileRoute("/_home/extracurriculars-v2/")({
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

    // Shuffle, filter, and pre-fetch AniZip for all 5 banner items
    const combinedBannerPromise = bannerPromise.then(
      (bannerResult: OperationResult<ResultOf<typeof Search>>) => {
        // Shuffle and filter to get 5 items (same logic as Banner component would do)
        const shuffledBannerData = shuffle(
          bannerResult.data?.Page?.media?.filter(
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
              Page: bannerResult.data?.Page,
              shuffledBannerData: bannerData,
            },
            anizipDataArray: anizipData,
          }),
        )
      },
    )

    const sectionPromises = sections.map((section) => ({
      config: section,
      promise: urqlClient.query(Search, section.queryVars).toPromise(),
    }))

    return { combinedBannerPromise, isDesktop, sectionPromises }
  },

  component: HomePage,
})

function HomePage() {
  const { combinedBannerPromise, isDesktop, sectionPromises } =
    Route.useLoaderData()()

  return (
    <div>
      {/* Banner */}
      <Await promise={combinedBannerPromise} fallback={<BannerSkeleton />}>
        {(data: CombinedBannerData) => {
          const { bannerResult, anizipDataArray } = data

          // Fallback to skeleton if data invalid
          if (
            !bannerResult.shuffledBannerData ||
            bannerResult.shuffledBannerData.length === 0
          ) {
            return <BannerSkeleton />
          }

          return (
            <Banner
              bannerData={bannerResult.shuffledBannerData}
              anizipDataArray={anizipDataArray ?? null}
              isDesktop={isDesktop}
            />
          )
        }}
      </Await>

      {/* Sections */}
      <div class="mx-auto max-w-7xl p-4">
        <For each={sectionPromises}>
          {(item) => (
            <Await
              promise={item.promise}
              fallback={<SectionSkeleton title={item.config.title} />}
            >
              {(result: OperationResult<ResultOf<typeof Search>>) => (
                <AnimeSection
                  title={item.config.title}
                  data={result.data?.Page?.media ?? null}
                  viewMoreLink={item.config.viewMoreLink}
                />
              )}
            </Await>
          )}
        </For>

        {/* Auth sections stubs */}
        <div class="mt-12 space-y-8">
          <div class="rounded bg-gray-100 p-6 text-center">
            <h2 class="mb-2 text-xl font-bold">Continue Watching</h2>
            <p class="text-gray-600">
              Sign in to see anime you're currently watching
            </p>
          </div>

          <div class="rounded bg-gray-100 p-6 text-center">
            <h2 class="mb-2 text-xl font-bold">Your List</h2>
            <p class="text-gray-600">
              Sign in to see your personalized anime list
            </p>
          </div>

          <div class="rounded bg-gray-100 p-6 text-center">
            <h2 class="mb-2 text-xl font-bold">Sequels You Missed</h2>
            <p class="text-gray-600">
              Sign in to see sequels of anime you've completed
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionSkeleton(props: { title: string }) {
  return (
    <div class="mb-8">
      <h2 class="mb-4 text-xl font-bold">{props.title}</h2>
      <div class="flex gap-4 overflow-x-auto pb-2">
        <For each={Array(5)}>
          {() => (
            <div class="w-40 flex-shrink-0 space-y-2">
              <div class="h-56 w-full animate-pulse rounded bg-gray-200" />
              <div class="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div class="h-3 w-2/3 animate-pulse rounded bg-gray-200" />
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
