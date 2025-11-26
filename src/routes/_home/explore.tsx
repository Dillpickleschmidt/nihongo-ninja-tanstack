import { createFileRoute, Link } from "@tanstack/solid-router"
import { Index, Show, createResource, type Component } from "solid-js"
import {
  Search,
  UserLists,
  Viewer,
} from "@/features/explore/api/anilist/queries"
import { Search as SearchIcon } from "lucide-solid"
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
import {
  userSettingsQueryOptions,
  anizipDataQueryOptions,
} from "@/query/query-options"
import { queryAniList } from "@/features/explore/api/anilist/query-wrapper"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { queryKeys } from "@/query/utils/query-keys"
import type { FragmentOf } from "gql.tada"
import type { FullMedia } from "@/features/explore/api/anilist/queries"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/_home/explore")({
  loader: async ({ context }) => {
    // Set background settings for vocab page
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 0,
      backgroundOpacityOffset: -1,
      showGradient: false,
    })
    context.queryClient.setQueryData(
      queryKeys.bottomNavClass(),
      "bg-background/90",
    )
    return {
      genericSections: getGenericSections(),
    }
  },
  onLeave: ({ context }) => {
    context.queryClient.setQueryData(queryKeys.bottomNavClass(), "")
  },
  component: HomePage,
})

function HomePage() {
  const { genericSections } = Route.useLoaderData()()
  const { urqlClient, urqlSSR, user } = Route.useRouteContext()()

  return (
    <div>
      <Link class="absolute top-4 right-5 z-20" to="/search">
        <Button
          variant="ghost"
          class="group h-11 w-11 rounded-full hover:bg-white/10"
          onClick={() => {}}
        >
          <SearchIcon class="h-5! w-5! origin-center transition-transform group-hover:scale-110" />
        </Button>
      </Link>
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
      (item: FragmentOf<typeof FullMedia> | null) =>
        !!item && !!(item.bannerImage ?? item.trailer?.id),
    )
    const shuffled = shuffle(filtered)
    return shuffled.slice(0, 5).filter((m) => m !== null)
  })

  // Get anime IDs for banner to fetch AniZip data
  const bannerAnimeIds = () => {
    const items = bannerData()
    if (!items || items.length === 0) return []
    return (items as Array<FragmentOf<typeof FullMedia> | null>)
      .map((m) => m?.id)
      .filter(Boolean) as number[]
  }

  // Fetch AniZip data for all banner anime using useCustomQuery
  const anizipQueries = () =>
    bannerAnimeIds().map((id) =>
      useCustomQuery(() => anizipDataQueryOptions(id)),
    )

  // Map query results to data array
  const anizipData = () => anizipQueries().map((q) => q.data ?? null)

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
          anizipDataArray={anizipData()}
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

        // Get user's personal anime lists
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
