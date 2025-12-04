import { Match, Switch } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import {
  SearchProvider,
  useSearchContext,
} from "@/features/search/context/SearchContext"
import { AnimeContent } from "@/features/search/categories/anime/AnimeContent"
import { BooksContent } from "@/features/search/categories/books/BooksContent"
import { LiveActionContent } from "@/features/search/categories/live-action/LiveActionContent"
import { YouTubeContent } from "@/features/search/categories/youtube/YouTubeContent"
import { NihongoNinjaContent } from "@/features/search/categories/nihongo-ninja/NihongoNinjaContent"
import { queryKeys } from "@/query/utils/query-keys"

export const Route = createFileRoute("/_home/search")({
  loader: ({ context }) => {
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
  },
  onLeave: ({ context }) => {
    context.queryClient.setQueryData(queryKeys.bottomNavClass(), "")
  },
  component: SearchPage,
})

function SearchPage() {
  const { urqlClient, user } = Route.useRouteContext()()

  return (
    <SearchProvider>
      <SearchContent urqlClient={urqlClient} user={user} />
    </SearchProvider>
  )
}

function SearchContent(props: { urqlClient: any; user: any }) {
  const { activeCategory, setActiveCategory } = useSearchContext()

  return (
    <Switch>
      <Match when={activeCategory() === "Anime"}>
        <AnimeContent
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          urqlClient={props.urqlClient}
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
