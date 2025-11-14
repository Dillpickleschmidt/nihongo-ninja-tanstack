import { createFileRoute } from "@tanstack/solid-router"
import { For } from "solid-js"
import { createQuery } from "@urql/solid"
import { Search } from "@/features/extracurriculars-v2/api/anilist/queries"

export const Route = createFileRoute("/_home/extracurriculars-v2/")({
  loader: async ({ context }) => {
    const { urqlClient } = context as any

    try {
      // Prefetch data on server-side (client-side navigation uses cache)
      await urqlClient
        .query(Search, { page: 1, perPage: 5, sort: ["TRENDING_DESC"] })
        .toPromise()
    } catch (error) {
      console.error("Error prefetching trending anime:", error)
    }

    // Router handles SSR state extraction and hydration
    return {}
  },

  component: () => {
    return <TrendingAnimeSection />
  },
})

function TrendingAnimeSection() {
  // This should use cached data from SSR, not refetch
  const [query] = createQuery({
    query: Search,
    variables: { page: 1, perPage: 5, sort: ["TRENDING_DESC"] },
  })

  return (
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Trending Anime (SSR Test)</h1>
      <div class="space-y-2">
        <For each={query.data?.Page?.media}>
          {(anime) => (
            <div class="bg-card rounded p-2">
              <p>
                {anime?.id}: {anime?.title?.romaji}
              </p>
            </div>
          )}
        </For>
      </div>
      <div class="mt-4 text-sm text-gray-600">
        {query.fetching && <p>Loading...</p>}
        {query.error && <p>Error: {query.error.message}</p>}
        {!query.fetching && !query.error && !query.data && <p>No data</p>}
      </div>
    </div>
  )
}
