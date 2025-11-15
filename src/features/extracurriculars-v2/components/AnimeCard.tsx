import { Show } from "solid-js"
import type { FragmentOf } from "gql.tada"
import { FullMedia } from "@/features/extracurriculars-v2/api/anilist/queries"

interface AnimeCardProps {
  anime: FragmentOf<typeof FullMedia> | null | undefined
}

export function AnimeCard(props: AnimeCardProps) {
  return (
    <Show when={props.anime}>
      {(anime) => (
        <div class="flex-shrink-0 w-40">
          <div class="bg-gray-200 rounded overflow-hidden h-56">
            <Show
              when={anime().coverImage?.medium}
              fallback={<div class="w-full h-full bg-gray-300" />}
            >
              {(coverUrl) => (
                <img
                  src={coverUrl()}
                  alt={anime().title?.userPreferred || "Anime"}
                  class="w-full h-full object-cover"
                />
              )}
            </Show>
          </div>

          <div class="mt-2">
            <h3 class="font-semibold text-sm truncate">
              {anime().title?.userPreferred}
            </h3>

            <div class="text-xs text-gray-600 space-y-1">
              <Show when={anime().seasonYear}>
                {(year) => <p>{year()}</p>}
              </Show>

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
