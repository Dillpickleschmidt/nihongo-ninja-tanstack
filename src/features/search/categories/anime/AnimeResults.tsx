import { For, Show } from "solid-js"
import { SmallAnimeCard } from "@/features/explore/components/ui/cards/small-card"
import { SkeletonAnimeCard } from "@/features/explore/components/ui/cards/skeleton-card"
import { useAnimeInfiniteScroll } from "./hooks/useAnimeInfiniteScroll"
import type { SearchFilters } from "./types"

interface AnimeResultsProps {
  urqlClient: any
  search: () => SearchFilters
}

export function AnimeResults(props: AnimeResultsProps) {
  const { results, isLoading, hasMore, error, sentinelRef } =
    useAnimeInfiniteScroll({
      urqlClient: props.urqlClient,
      search: props.search,
    })

  return (
    <>
      <Show
        when={results().length > 0}
        fallback={
          <Show
            when={!isLoading()}
            fallback={
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                <For each={Array.from({ length: 50 })}>
                  {() => <SkeletonAnimeCard />}
                </For>
              </div>
            }
          >
            <div class="flex h-60 w-full flex-col items-center justify-center text-center">
              <div class="text-2xl font-bold">No results found</div>
              <div class="text-muted-foreground">
                Try adjusting your filters
              </div>
            </div>
          </Show>
        }
      >
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <For each={results()}>
            {(anime) => <SmallAnimeCard media={anime} />}
          </For>
        </div>
      </Show>

      <Show when={isLoading() && results().length > 0}>
        <div class="text-muted-foreground flex justify-center p-8 text-sm">
          Loading more...
        </div>
      </Show>

      <div ref={sentinelRef} class="h-4 w-full" />
    </>
  )
}
