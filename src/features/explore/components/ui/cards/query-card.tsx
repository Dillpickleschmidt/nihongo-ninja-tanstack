import { Show, For, createSignal, onCleanup } from "solid-js"
import { createQuery } from "@urql/solid"
import { SmallAnimeCard } from "./small-card"
import { SkeletonAnimeCard } from "./skeleton-card"
import { Search } from "../../../api/anilist/queries"

interface SectionConfig {
  title: string
  queryVars: Record<string, any>
  viewMoreLink?: string
}

interface AnimeQuerySectionProps {
  config: SectionConfig
  urqlClient: any
}

export function AnimeQuerySection(props: AnimeQuerySectionProps) {
  const [isPaused, setIsPaused] = createSignal(true)

  // Create paused query - will fetch when scrolled into view
  const [query] = createQuery({
    query: Search,
    variables: () => props.config.queryVars,
    pause: () => isPaused(),
    context: { client: props.urqlClient },
  })

  // Deferred loading with IntersectionObserver
  const deferredLoad = (element: HTMLDivElement) => {
    // Check if already in viewport immediately
    const rect = element.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

    if (isVisible) {
      setIsPaused(false)
      return
    }

    // Otherwise, observe for when it enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsPaused(false)
          observer.unobserve(element)
        }
      },
      { threshold: 0 },
    )

    observer.observe(element)

    onCleanup(() => {
      observer.unobserve(element)
    })
  }

  return (
    <>
      <Show when={isPaused()}>
        <div class="h-0 w-0" ref={deferredLoad} />
      </Show>

      <Show
        when={!query.fetching}
        fallback={
          <For each={Array.from({ length: 50 })}>
            {() => <SkeletonAnimeCard />}
          </For>
        }
      >
        <Show
          when={!query.error}
          fallback={
            <div class="flex h-80 w-full items-center justify-center p-5">
              <div>
                <div class="mb-1 text-center text-4xl font-bold">Ooops!</div>
                <div class="text-muted-foreground text-center text-lg">
                  Looks like something went wrong!
                </div>
                <div class="text-muted-foreground text-center text-lg">
                  {query.error?.message}
                </div>
              </div>
            </div>
          }
        >
          <Show
            when={query.data?.Page?.media && query.data.Page.media.length > 0}
            fallback={
              <div class="flex h-80 w-full items-center justify-center p-5">
                <div>
                  <div class="mb-1 text-center text-4xl font-bold">Ooops!</div>
                  <div class="text-muted-foreground text-center text-lg">
                    Looks like there's nothing here.
                  </div>
                </div>
              </div>
            }
          >
            <For each={query.data!.Page!.media}>
              {(media) => (
                <Show when={media}>
                  {(m) => <SmallAnimeCard media={m()} />}
                </Show>
              )}
            </For>
          </Show>
        </Show>
      </Show>
    </>
  )
}
