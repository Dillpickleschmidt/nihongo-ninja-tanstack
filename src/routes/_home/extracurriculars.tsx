import { queryKeys } from "@/query/utils/query-keys"
import { createFileRoute, useNavigate } from "@tanstack/solid-router"
import { For, Show, createEffect, createMemo, createSignal, onCleanup } from "solid-js"
import { client, currentSeason, currentYear, type Media } from "@/features/extracurriculars/api/anilist"
import { authAggregator } from "@/features/extracurriculars/api/auth"
import Banner from "@/features/extracurriculars/components/ui/banner/banner"
import QueryCard from "@/features/extracurriculars/components/ui/cards/query"
import { dragScroll } from "@/features/extracurriculars/utils/navigate"
import { click as clickDirective } from "@/features/extracurriculars/utils/navigate"
import BannerImage, { setHideBanner } from "@/features/extracurriculars/components/ui/banner/banner-image"
import type { VariablesOf } from "gql.tada"
import type { Search } from "@/features/extracurriculars/api/anilist/queries"

export const Route = createFileRoute("/_home/extracurriculars")({
  loader: async ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      backgroundOpacityOffset: -0.32,
      showGradient: false,
    })
  },
  component: RouteComponent,
})

interface Section {
  title: string
  variables: VariablesOf<typeof Search>
}

const staticSections: Section[] = [
  { title: "Popular This Season", variables: { sort: ["POPULARITY_DESC"], season: currentSeason, seasonYear: currentYear } },
  { title: "Trending Now", variables: { sort: ["TRENDING_DESC"] } },
  { title: "All Time Popular", variables: { sort: ["POPULARITY_DESC"] } },
  { title: "Romance", variables: { sort: ["TRENDING_DESC"], genre: ["Romance"] } },
  { title: "Action", variables: { sort: ["TRENDING_DESC"], genre: ["Action"] } },
  { title: "Adventure", variables: { sort: ["TRENDING_DESC"], genre: ["Adventure"] } },
  { title: "Fantasy", variables: { sort: ["TRENDING_DESC"], genre: ["Fantasy"] } },
]

interface SectionQuery {
  title: string
  query: ReturnType<typeof client.search>
  variables: VariablesOf<typeof Search>
}

function RouteComponent() {
  const navigate = useNavigate()
  const [scrollTop, setScrollTop] = createSignal(0)

  // Create static section queries
  const staticSectionQueries = staticSections.map(({ title, variables }) => {
    const query = client.search(variables, true)
    return { title, query, variables }
  })

  // Create dynamic sections based on auth state
  const sectionQueries = createMemo<SectionQuery[]>(() => {
    const sections: SectionQuery[] = [...staticSectionQueries]
    const continueIDs = authAggregator.continueIDs()
    const sequelIDs = authAggregator.sequelIDs()
    const planningIDs = authAggregator.planningIDs()

    // Sequels You Missed
    if (sequelIDs && sequelIDs.length > 0) {
      const sequelsQuery = client.search(
        { ids: sequelIDs, status: ["FINISHED", "RELEASING"], onList: false },
        true
      )
      sections.unshift({
        title: "Sequels You Missed",
        query: sequelsQuery,
        variables: { ids: sequelIDs, status: ["FINISHED", "RELEASING"], onList: false },
      })
    }

    // Your List (Planning)
    if (planningIDs && planningIDs.length > 0) {
      const planningQuery = client.search(
        { ids: planningIDs, status: ["FINISHED", "RELEASING"], sort: ["START_DATE_DESC"] },
        true
      )
      sections.unshift({
        title: "Your List",
        query: planningQuery,
        variables: { ids: planningIDs, status: ["FINISHED", "RELEASING"], sort: ["START_DATE_DESC"] },
      })
    }

    // Continue Watching
    if (continueIDs && continueIDs.length > 0) {
      const continueQuery = client.search(
        { ids: continueIDs.slice(0, 50), sort: ["UPDATED_AT_DESC"] },
        false
      )
      sections.unshift({
        title: "Continue Watching",
        query: continueQuery,
        variables: { ids: continueIDs, sort: ["UPDATED_AT_DESC"] },
      })
    }

    return sections
  })

  const handleScroll = (e: Event) => {
    const target = e.currentTarget as HTMLDivElement
    setScrollTop(target.scrollTop)
    setHideBanner(target.scrollTop > 100)
  }

  const search = (variables: VariablesOf<typeof Search>) => {
    navigate({ to: "/app/search", state: { search: variables } })
  }

  // Cleanup queries on unmount
  createEffect(() => {
    onCleanup(() => {
      for (const { query } of sectionQueries()) {
        if ("pause" in query && typeof query.pause === "function") {
          query.pause()
        }
      }
    })
  })

  // Initialize banner visibility
  createEffect(() => {
    setHideBanner(false)
  })

  let containerRef: HTMLDivElement | undefined

  return (
    <>
      <BannerImage />
      <div
        ref={(el) => {
          containerRef = el
          dragScroll(el)
        }}
        class="grow h-full min-w-0 -ml-14 pl-14 overflow-y-scroll"
        onScroll={handleScroll}
      >
        <Banner />
        <For each={sectionQueries()}>
          {({ title, query, variables }) => (
            <>
              <div
                class="flex px-4 pt-5 items-end cursor-pointer text-muted-foreground"
                onClick={() => search(variables)}
              >
                <div class="font-semibold text-lg leading-none select:text-foreground">
                  {title}
                </div>
                <div class="ml-auto text-xs select:text-foreground">View More</div>
              </div>
              <div class="flex overflow-x-scroll select:-ml-14 select:pl-14 -mt-40 pt-40 -mb-5 pb-5 relative group pointer-events-none">
                <QueryCard query={query} />
              </div>
            </>
          )}
        </For>
      </div>
    </>
  )
}
