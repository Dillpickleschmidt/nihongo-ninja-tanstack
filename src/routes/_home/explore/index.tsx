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
import { getServiceCredentials } from "@/features/main-cookies/functions/service-credentials"
import { setAniListToken } from "@/features/explore/api/anilist/urql-client"

type CombinedBannerData = {
  bannerResult: {
    Page: ResultOf<typeof Search>["Page"]
    shuffledBannerData: (FragmentOf<typeof FullMedia> | null)[]
  }
  anizipDataArray: (EpisodesResponse | null)[]
}

export const Route = createFileRoute("/_home/explore/")({
  loader: async ({ context }) => {
    const { urqlClient, queryClient, user } = context

    const { season, year } = getCurrentSeason()

    // Get device type from user settings query (reads from settings cookie)
    const settings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )
    const isDesktop = settings["device-type"] === "desktop"

    // Preload AniList token from cookie into URQL client cache
    const credentials = await getServiceCredentials()
    if (credentials.anilist?.accessToken && credentials.anilist?.expiresAt) {
      setAniListToken(
        credentials.anilist.accessToken,
        credentials.anilist.expiresAt,
      )
    }

    return {
      combinedBannerPromise: loadBannerData(
        urqlClient,
        season,
        year,
        isDesktop,
      ),
      isDesktop,
      genericSections: getGenericSections(),
      personalizedSectionsPromise: loadPersonalizedSections(
        urqlClient,
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
  const { urqlClient } = Route.useRouteContext()()

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
function loadBannerData(
  urqlClient: any,
  season: string,
  year: number,
  isDesktop: boolean,
) {
  return fetchSeasonalAnime(urqlClient, season, year).then((result) => {
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
  })
}

// Fetch popular seasonal anime from AniList
function fetchSeasonalAnime(urqlClient: any, season: string, year: number) {
  return urqlClient
    .query(Search, {
      page: 1,
      perPage: 15,
      sort: ["POPULARITY_DESC"],
      season,
      seasonYear: year,
      statusNot: ["NOT_YET_RELEASED"],
    })
    .toPromise()
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
function loadPersonalizedSections(urqlClient: any, userId?: string) {
  if (!userId) {
    return Promise.resolve([])
  }

  return urqlClient
    .query(Viewer, {})
    .toPromise()
    .then((viewerResult) => {
      const anilistUserId = viewerResult.data?.Viewer?.id
      if (!anilistUserId) {
        return Promise.resolve([])
      }

      return urqlClient.query(UserLists, { id: anilistUserId }).toPromise()
    })
    .then((userListsResult) => {
      if (!userListsResult?.data) {
        return []
      }

      const userListIds = extractUserListIds(userListsResult.data)
      return getPersonalizedSections(userListIds)
    })
    .catch(() => []) // Return empty array on error
}
