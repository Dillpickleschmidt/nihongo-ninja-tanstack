import { Show, For } from "solid-js"
import type { FragmentOf } from "gql.tada"
import { FullMedia } from "@/features/extracurriculars-v2/api/anilist/queries"
import { AnimeCard } from "./AnimeCard"

interface AnimeSectionProps {
  title: string
  data: (FragmentOf<typeof FullMedia> | null)[] | undefined
  isLoading?: boolean
  error?: Error | null
  viewMoreLink?: string
}

export function AnimeSection(props: AnimeSectionProps) {
  return (
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold">{props.title}</h2>
        <Show when={props.viewMoreLink}>
          {(link) => (
            <a href={link()} class="text-sm text-blue-600 hover:underline">
              View More →
            </a>
          )}
        </Show>
      </div>

      <Show
        when={props.error}
        fallback={
          <div class="flex gap-4 overflow-x-auto pb-2">
            <For each={props.data}>
              {(anime) => <AnimeCard anime={anime} />}
            </For>
          </div>
        }
      >
        {(error) => (
          <div class="text-red-600 text-sm">
            Error loading {props.title}: {error().message}
          </div>
        )}
      </Show>

      <Show when={props.isLoading}>
        <div class="text-gray-500 text-sm">Loading...</div>
      </Show>
    </div>
  )
}
