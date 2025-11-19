import { createFileRoute, Await } from "@tanstack/solid-router"
import { For, Show, createResource } from "solid-js"
import {
  Search,
  FullMedia,
  UserLists,
  Viewer,
} from "@/features/explore/api/anilist/queries"
import { fetchEpisodes } from "@/features/explore/api/anizip"
import { shuffle } from "@/features/explore/utils/banner-utils"
import {
  getGenericSections,
  getPersonalizedSections,
  getCurrentSeason,
} from "@/features/explore/utils/section-configs"
import { extractUserListIds } from "@/features/explore/utils/id-extractors"
import { Banner } from "@/features/explore/components/ui/banner/banner"
import { BannerSkeleton } from "@/features/explore/components/ui/banner/skeleton-banner"
import { AnimeQuerySection } from "@/features/explore/components/ui/cards/query-card"
import { userSettingsQueryOptions } from "@/query/query-options"
import type { ResultOf, FragmentOf } from "gql.tada"
import type { EpisodesResponse } from "@/features/explore/api/anizip"
import { queryAniList } from "@/features/explore/api/anilist/query-wrapper"

type CombinedBannerData = {
  bannerResult: {
    Page: ResultOf<typeof Search>["Page"]
    shuffledBannerData: (FragmentOf<typeof FullMedia> | null)[]
  }
  anizipDataArray: (EpisodesResponse | null)[]
}

export const Route = createFileRoute("/_home/explore/")({
  loader: async ({ context }) => {
    const { urqlClient, urqlSSR, queryClient, user } = context

    const { season, year } = getCurrentSeason()

    // Get device type from user settings query (reads from settings cookie)
    const settings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )
    const isDesktop = settings["device-type"] === "desktop"

    return {
      combinedBannerPromise: loadBannerData(
        urqlClient,
        urqlSSR,
        season,
        year,
        isDesktop,
      ),
      isDesktop,
      genericSections: getGenericSections(),
      personalizedSectionsPromise: loadPersonalizedSections(
        urqlClient,
        urqlSSR,
        user?.id,
      ),
    }
  },

  component: HomePage,
})

function HomePage() {
  const {
    combinedBannerPromise,
    isDesktop,
    genericSections,
    personalizedSectionsPromise,
  } = Route.useLoaderData()()
  const { urqlClient, urqlSSR } = Route.useRouteContext()()

  // Use createResource to handle the promise - resolves to array of personalized sections
  const [personalizedSections] = createResource(
    () => personalizedSectionsPromise,
  )

  // Combine sections reactively: personalized (if available) + generic
  const allSections = () => [
    ...(personalizedSections() || []),
    ...genericSections,
  ]

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
              anizipDataArray={data.anizipDataArray}
              isDesktop={isDesktop}
            />
          </Show>
        )}
      </Await>

      {/* Sections */}
      <div class="mx-auto pb-16 sm:px-2">
        <For each={allSections()}>
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

// fetch seasonal anime → select banner items → prefetch episodes
async function loadBannerData(
  urqlClient: any,
  urqlSSR: any,
  season: string,
  year: number,
  isDesktop: boolean,
) {
  return fetchSeasonalAnime(urqlClient, urqlSSR, season, year).then(
    (result) => {
      const bannerItems = selectBannerItems(result.data?.Page?.media || [])
      const episodesPromise = prefetchEpisodeData(bannerItems, isDesktop)

      return Promise.all([bannerItems, episodesPromise]).then(
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
}

// Fetch popular seasonal anime from AniList
async function fetchSeasonalAnime(
  urqlClient: any,
  urqlSSR: any,
  season: string,
  year: number,
) {
  return queryAniList(urqlClient, urqlSSR, Search, {
    page: 1,
    perPage: 15,
    sort: ["POPULARITY_DESC"],
    season,
    seasonYear: year,
    statusNot: ["NOT_YET_RELEASED"],
  })
}

function selectBannerItems(media: any[]) {
  return shuffle(
    media.filter((item) => item && (item.bannerImage ?? item.trailer?.id)),
  )
    .slice(0, 5)
    .filter((m) => m !== null)
}

// Pre-fetch AniZip episode data for banner items (desktop only)
async function prefetchEpisodeData(bannerItems: any[], isDesktop: boolean) {
  if (!isDesktop) {
    return Promise.resolve(Array(bannerItems.length).fill(null))
  }

  return Promise.all(
    bannerItems
      .map((m) => m?.id)
      .filter(Boolean)
      .map((id) => fetchEpisodes(id as number)),
  ).catch(() => Array(bannerItems.length).fill(null))
}

// Load personalized sections
// Promise chain: Viewer → UserLists → extract IDs → create personalized sections
async function loadPersonalizedSections(
  urqlClient: any,
  urqlSSR: any,
  userId?: string,
) {
  if (!userId) {
    return []
  }

  try {
    const viewerResult = await queryAniList(urqlClient, urqlSSR, Viewer, {})
    const anilistUserId = viewerResult.data?.Viewer?.id
    if (!anilistUserId) {
      return []
    }

    const userListsResult = await queryAniList(urqlClient, urqlSSR, UserLists, {
      id: anilistUserId,
    })
    if (!userListsResult?.data) {
      return []
    }

    const userListIds = extractUserListIds(userListsResult.data)
    return getPersonalizedSections(userListIds)
  } catch (error) {
    console.error('[Personalized] Error loading sections:', error)
    return [] // Return empty array on error
  }
}
