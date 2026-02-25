import { Match, Switch } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { getUser } from "@/lib/auth"
import {
  SearchProvider,
  useSearchContext,
} from "@/features/search/context/SearchContext"
import { AnimeContent } from "@/features/search/categories/anime/AnimeContent"
import { BooksContent } from "@/features/search/categories/books/BooksContent"
import { LiveActionContent } from "@/features/search/categories/live-action/LiveActionContent"
import { YouTubeContent } from "@/features/search/categories/youtube/YouTubeContent"
import { NihongoNinjaContent } from "@/features/search/categories/nihongo-ninja/NihongoNinjaContent"
import { queryKeys } from "@/query/query-keys"
import { BottomNav } from "~/features/navbar/Nav"

export const Route = createFileRoute("/search")({
  component: SearchPage,
})

function SearchPage() {
  const queryClient = useQueryClient()
  const user = getUser()

  queryClient.setQueryData(queryKeys.backgroundSettings(), {
    blur: 0,
    opacityOffset: -1,
    showGradient: false,
  })

  return (
    <SearchProvider>
      <SearchContent user={user} />
      <BottomNav
        class="bg-background/85 opacity-100"
        dailyProgressPercentage={65}
      />
    </SearchProvider>
  )
}

function SearchContent(props: { user: any }) {
  const { activeCategory, setActiveCategory } = useSearchContext()

  return (
    <Switch>
      <Match when={activeCategory() === "Anime"}>
        <AnimeContent
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          user={props.user}
        />
      </Match>

      <Match when={activeCategory() === "Live Action"}>
        <LiveActionContent
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </Match>

      <Match when={activeCategory() === "YouTube"}>
        <YouTubeContent
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </Match>

      <Match when={activeCategory() === "Books"}>
        <BooksContent
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </Match>

      <Match when={activeCategory() === "Nihongo Ninja"}>
        <NihongoNinjaContent
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </Match>
    </Switch>
  )
}
