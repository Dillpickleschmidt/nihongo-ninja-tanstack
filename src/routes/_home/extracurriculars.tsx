import { queryKeys } from "@/query/utils/query-keys"
import { createFileRoute, useNavigate } from "@tanstack/solid-router"
import { For, Show, createEffect, createMemo, createSignal } from "solid-js"
import { isServer } from "solid-js/web"
import { createQuery } from "@urql/solid"
import {
  currentSeason,
  currentYear,
  type Media,
  Search,
} from "@/features/extracurriculars/api/anilist"
import {
  AnilistProvider,
  useAnilist,
} from "@/features/extracurriculars/api/anilist/AnilistContext"
import {
  AuthAggregatorProvider,
  useAuthAggregator,
} from "@/features/extracurriculars/api/auth/AuthAggregatorContext"
import { Banner } from "@/features/extracurriculars/components/ui/banner/banner"
import { QueryCard } from "@/features/extracurriculars/components/ui/cards/query"
import { BannerImage } from "@/features/extracurriculars/components/ui/banner/banner-image"
import {
  BannerProvider,
  useBanner,
} from "@/features/extracurriculars/components/ui/banner/BannerContext"
import type { VariablesOf } from "gql.tada"

export const Route = createFileRoute("/_home/extracurriculars")({
  loader: async ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      backgroundOpacityOffset: -0.32,
      showGradient: false,
    })
  },
  component: () => (
    <BannerProvider>
      <AnilistProvider>
        <AuthAggregatorProvider>
          <RouteComponent />
        </AuthAggregatorProvider>
      </AnilistProvider>
    </BannerProvider>
  ),
})

interface Section {
  title: string
  variables: VariablesOf<typeof Search>
}

const staticSections: Section[] = [
  {
    title: "Popular This Season",
    variables: {
      sort: ["POPULARITY_DESC"],
      season: currentSeason,
      seasonYear: currentYear,
    },
  },
  { title: "Trending Now", variables: { sort: ["TRENDING_DESC"] } },
  { title: "All Time Popular", variables: { sort: ["POPULARITY_DESC"] } },
  {
    title: "Romance",
    variables: { sort: ["TRENDING_DESC"], genre: ["Romance"] },
  },
  {
    title: "Action",
    variables: { sort: ["TRENDING_DESC"], genre: ["Action"] },
  },
  {
    title: "Adventure",
    variables: { sort: ["TRENDING_DESC"], genre: ["Adventure"] },
  },
  {
    title: "Fantasy",
    variables: { sort: ["TRENDING_DESC"], genre: ["Fantasy"] },
  },
]

interface SectionVariables {
  title: string
  variables: VariablesOf<typeof Search>
}

function RouteComponent() {
  const navigate = useNavigate()
  const authAggregator = useAuthAggregator()
  const anilist = useAnilist()
  const { setHideBanner } = useBanner()
  const [scrollTop, setScrollTop] = createSignal(0)

  // Create dynamic sections based on auth state
  const sections = createMemo<SectionVariables[]>(() => {
    const items: SectionVariables[] = [...staticSections]
    const continueIDs = authAggregator.continueIDs()
    const sequelIDs = authAggregator.sequelIDs()
    const planningIDs = authAggregator.planningIDs()

    // Sequels You Missed
    if (sequelIDs && sequelIDs.length > 0) {
      items.unshift({
        title: "Sequels You Missed",
        variables: {
          ids: sequelIDs,
          status: ["FINISHED", "RELEASING"],
          onList: false,
        },
      })
    }

    // Your List (Planning)
    if (planningIDs && planningIDs.length > 0) {
      items.unshift({
        title: "Your List",
        variables: {
          ids: planningIDs,
          status: ["FINISHED", "RELEASING"],
          sort: ["START_DATE_DESC"],
        },
      })
    }

    // Continue Watching
    if (continueIDs && continueIDs.length > 0) {
      items.unshift({
        title: "Continue Watching",
        variables: { ids: continueIDs.slice(0, 50), sort: ["UPDATED_AT_DESC"] },
      })
    }

    return items
  })

  // Helper component to create query for each section
  const SectionWithQuery = (props: SectionVariables) => {
    const [query] = createQuery({
      query: Search,
      variables: () => ({ ...props.variables, nsfw: anilist.nsfw() }),
    })

    return (
      <>
        <div
          class="text-muted-foreground flex cursor-pointer items-end px-4 pt-5"
          onClick={() =>
            navigate({ to: "/app/search", state: { search: props.variables } })
          }
        >
          <div class="select:text-foreground text-lg leading-none font-semibold">
            {props.title}
          </div>
          <div class="select:text-foreground ml-auto text-xs">View More</div>
        </div>
        <div class="select:-ml-14 select:pl-14 group pointer-events-none relative -mt-40 -mb-5 flex overflow-x-scroll pt-40 pb-5">
          <QueryCard query={query} />
        </div>
      </>
    )
  }

  const handleScroll = (e: Event) => {
    const target = e.currentTarget as HTMLDivElement
    setScrollTop(target.scrollTop)
    setHideBanner(target.scrollTop > 100)
  }

  // Initialize banner visibility
  createEffect(() => {
    setHideBanner(false)
  })

  return (
    <BannerProvider>
      <AnilistProvider>
        <AuthAggregatorProvider>
          <>
            <BannerImage />
            <div
              class="-ml-14 h-full min-w-0 grow overflow-y-scroll pl-14"
              onScroll={handleScroll}
            >
              <Banner />
              <Show when={!isServer}>
                <For each={sections()}>
                  {(section) => <SectionWithQuery {...section} />}
                </For>
              </Show>
            </div>
          </>
        </AuthAggregatorProvider>
      </AnilistProvider>
    </BannerProvider>
  )
}
