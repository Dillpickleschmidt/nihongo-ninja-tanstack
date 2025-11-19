import { createFileRoute } from "@tanstack/solid-router"
import { Index, Show, createResource, type Component } from "solid-js"
import {
  Search,
  UserLists,
  Viewer,
} from "@/features/explore/api/anilist/queries"
import { fetchAniZipImagesServerFn } from "@/features/explore/api/anizip"
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
import { queryAniList } from "@/features/explore/api/anilist/query-wrapper"
import type { FragmentOf } from "gql.tada"
import type { FullMedia } from "@/features/explore/api/anilist/queries"

export const Route = createFileRoute("/_home/explore/")({
  loader: async () => {
    return {
      genericSections: getGenericSections(),
    }
  },

  component: HomePage,
})

function HomePage() {
  const { genericSections } = Route.useLoaderData()()
  const { urqlClient, urqlSSR, user } = Route.useRouteContext()()

  return (
    <div>
      {/* Banner */}
      <BannerData urqlClient={urqlClient} urqlSSR={urqlSSR} />

      {/* Sections */}
      <div class="mx-auto pb-16 sm:px-2">
        <PersonalizedSections
          urqlClient={urqlClient}
          urqlSSR={urqlSSR}
          userId={user?.id}
        />
        <Index each={genericSections}>
          {(section) => (
            <>
              <div class="text-muted-foreground flex cursor-pointer items-end px-4 pt-5">
                <div class="text-lg leading-none font-semibold">
                  {section().title}
                </div>
                <div class="ml-auto text-xs">View More</div>
              </div>
              <div class="flex overflow-x-auto pb-4">
                <AnimeQuerySection config={section()} urqlClient={urqlClient} />
              </div>
            </>
          )}
        </Index>
      </div>
    </div>
  )
}

/**
 * Banner component that fetches its own data
 */
const BannerData: Component<{
  urqlClient: any
  urqlSSR: any
}> = (props) => {
  const { queryClient, user } = Route.useRouteContext()()
  const { season, year } = getCurrentSeason()

  // Get device type from settings cache
  const settings = queryClient.getQueryData(
    userSettingsQueryOptions(user?.id || null).queryKey,
  )!
  const isDesktop = settings["device-type"] === "desktop"

  // Fetch banner data from AniList
  const [bannerData] = createResource(async () => {
    const result = await queryAniList(props.urqlClient, props.urqlSSR, Search, {
      page: 1,
      perPage: 15,
      sort: ["POPULARITY_DESC"],
      season,
      seasonYear: year,
      statusNot: ["NOT_YET_RELEASED"],
    })

    if (result.error || !result.data?.Page?.media) {
      throw new Error(result.error || "Failed to fetch banner data")
    }

    // Filter, shuffle, and select 5 items for banner
    const media = result.data.Page.media
    const filtered = media.filter(
      (item) => item && (item.bannerImage ?? item.trailer?.id),
    )
    const shuffled = shuffle(filtered)
    return shuffled.slice(0, 5).filter((m) => m !== null)
  })

  // Fetch AniZip data after banner data resolves
  const [anizipData] = createResource(
    () => (isDesktop ? bannerData() : null),
    async (items) => {
      if (!items || items.length === 0) return []

      const animeIds = items.map((m) => m?.id).filter(Boolean)
      return Promise.all(
        animeIds.map((id) =>
          fetchAniZipImagesServerFn({ data: { id: id as number } }).catch(
            () => null,
          ),
        ),
      ).catch(() => Array(items.length).fill(null))
    },
  )

  return (
    <Show when={!bannerData.loading} fallback={<BannerSkeleton />}>
      <Show
        when={!bannerData.error}
        fallback={
          <div class="w-full bg-red-50 p-4 text-red-600">
            Error loading banner: {bannerData.error?.message ?? "Unknown error"}
          </div>
        }
      >
        <Banner
          bannerData={
            (bannerData() || []) as (FragmentOf<typeof FullMedia> | null)[]
          }
          anizipDataArray={
            anizipData() || Array((bannerData() || []).length).fill(null)
          }
          isDesktop={isDesktop}
        />
      </Show>
    </Show>
  )
}

/**
 * Personalized sections component that fetches user's AniList data
 */
const PersonalizedSections: Component<{
  urqlClient: any
  urqlSSR: any
  userId?: string
}> = (props) => {
  const [sections] = createResource(
    () => props.userId,
    async (userId) => {
      if (!userId) return []

      try {
        // Query Viewer to get AniList user ID
        const viewerResult = await queryAniList(
          props.urqlClient,
          props.urqlSSR,
          Viewer,
          {},
        )

        if (viewerResult.error || !viewerResult.data?.Viewer?.id) {
          return []
        }

        // Query UserLists to get user's anime lists
        const userListsResult = await queryAniList(
          props.urqlClient,
          props.urqlSSR,
          UserLists,
          { id: viewerResult.data.Viewer.id },
        )

        if (userListsResult.error || !userListsResult.data) {
          return []
        }

        const userListIds = extractUserListIds(userListsResult.data)
        return getPersonalizedSections(userListIds)
      } catch {
        return []
      }
    },
  )

  return (
    <Index each={sections() || []}>
      {(section) => (
        <>
          <div class="text-muted-foreground flex cursor-pointer items-end px-4 pt-5">
            <div class="text-lg leading-none font-semibold">
              {section().title}
            </div>
            <div class="ml-auto text-xs">View More</div>
          </div>
          <div class="flex overflow-x-auto pb-4">
            <AnimeQuerySection
              config={section()}
              urqlClient={props.urqlClient}
            />
          </div>
        </>
      )}
    </Index>
  )
}
