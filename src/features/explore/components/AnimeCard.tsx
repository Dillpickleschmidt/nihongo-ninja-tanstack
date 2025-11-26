import { Show } from "solid-js"
import type { FragmentOf } from "gql.tada"
import { FullMedia } from "@/features/explore/api/anilist/queries"

interface AnimeCardProps {
  anime: FragmentOf<typeof FullMedia> | null | undefined
}

export function AnimeCard(props: AnimeCardProps) {
  return (
    <Show when={props.anime}>
      {(anime) => (
        <div class="w-40 flex-shrink-0">
          <div class="h-56 overflow-hidden rounded bg-gray-200">
            <Show
              when={anime().coverImage?.medium}
              fallback={<div class="h-full w-full bg-gray-300" />}
            >
              {(coverUrl) => (
                <img
                  src={coverUrl()}
                  alt={anime().title?.userPreferred || "Anime"}
                  class="h-full w-full object-cover"
                />
              )}
            </Show>
          </div>

          <div class="mt-2">
            <h3 class="truncate text-sm font-semibold">
              {anime().title?.userPreferred}
            </h3>

            <div class="space-y-1 text-xs text-gray-600">
              <Show when={anime().seasonYear}>{(year) => <p>{year()}</p>}</Show>

              <Show when={anime().format}>
                {(format) => <p class="capitalize">{format()}</p>}
              </Show>

              <Show when={anime().averageScore}>
                {(score) => <p>★ {(score() / 10).toFixed(1)}</p>}
              </Show>
            </div>
          </div>
        </div>
      )}
    </Show>
  )
}
