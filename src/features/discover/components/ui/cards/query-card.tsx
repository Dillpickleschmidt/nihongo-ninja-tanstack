import { Show, For, createSignal, onCleanup, createMemo } from 'solid-js'
import { useQuery } from '@tanstack/solid-query'
import { useConvexQuery } from '~/lib/convex-query'
import { api } from '~/../convex/_generated/api'
import { SmallAnimeCard } from './small-card'
import { SkeletonAnimeCard } from './skeleton-card'
import { Search } from '../../../api/anilist/queries'
import { anilistQueryOptions } from '~/query/query-options'
import { getCurrentSeason } from '../../../utils/section-configs'
import type { SectionConfig } from '../../../utils/section-configs'

interface ConvexAnimeSectionProps {
  config: SectionConfig
}

/**
 * Anime section that loads data from Convex
 * Uses deferred loading with IntersectionObserver for performance
 */
export function ConvexAnimeSection(props: ConvexAnimeSectionProps) {
  const [isPaused, setIsPaused] = createSignal(true)
  const { season, year } = getCurrentSeason()

  // Call all queries at top level - only the matching type will be enabled
  const trendingQuery = useConvexQuery(
    api.api.anime.getTrendingAnime,
    () => ({ season, year }),
    () => ({ enabled: !isPaused() && props.config.type === 'trending' })
  )

  const popularSeasonQuery = useConvexQuery(
    api.api.anime.getPopularSeasonAnime,
    () => ({ season, year }),
    () => ({ enabled: !isPaused() && props.config.type === 'popular-season' })
  )

  const allTimePopularQuery = useConvexQuery(
    api.api.anime.getAllTimePopularAnime,
    () => ({}),
    () => ({ enabled: !isPaused() && props.config.type === 'all-time-popular' })
  )

  const genreQuery = useConvexQuery(
    api.api.anime.getGenreAnime,
    () => ({ genre: props.config.params?.genre ?? '' }),
    () => ({ enabled: !isPaused() && props.config.type === 'genre' })
  )

  // Select the active query based on section type
  const query = () => {
    switch (props.config.type) {
      case 'trending': return trendingQuery
      case 'popular-season': return popularSeasonQuery
      case 'all-time-popular': return allTimePopularQuery
      case 'genre': return genreQuery
      default: return trendingQuery
    }
  }

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

  // Access data via query()
  const mediaData = createMemo(() => query().data()?.data?.media)

  return (
    <>
      <Show when={isPaused()}>
        <div class="h-0 w-0" ref={deferredLoad} />
      </Show>

      <Show
        when={mediaData() !== undefined}
        fallback={
          <For each={Array.from({ length: 10 })}>
            {() => <SkeletonAnimeCard />}
          </For>
        }
      >
        <Show
          when={!query().error()}
          fallback={
            <div class="flex h-80 w-full items-center justify-center p-5">
              <div>
                <div class="mb-1 text-center text-4xl font-bold">Ooops!</div>
                <div class="text-muted-foreground text-center text-lg">
                  Looks like something went wrong!
                </div>
                <div class="text-muted-foreground text-center text-lg">
                  {(query().error() as Error)?.message}
                </div>
              </div>
            </div>
          }
        >
          <Show
            when={mediaData() && mediaData()!.length > 0}
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
            <For each={mediaData()}>
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

// ============================================================================
// Legacy AnimeQuerySection (for Personalized Sections)
// ============================================================================

interface AnimeQuerySectionProps {
  config: SectionConfig
}

/**
 * Legacy component for personalized sections that use direct AniList queries
 * Used by PersonalizedSections for user-specific data (Continue Watching, etc.)
 *
 * NOTE: Generic sections should use ConvexAnimeSection instead
 */
export function AnimeQuerySection(props: AnimeQuerySectionProps) {
  const [isPaused, setIsPaused] = createSignal(true)

  // Create paused query - will fetch when scrolled into view
  const query = useQuery(() => ({
    ...anilistQueryOptions(Search, props.config.queryVars!),
    enabled: !isPaused(),
  }))

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
        when={query.data !== undefined}
        fallback={
          <For each={Array.from({ length: 10 })}>
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
                  {(query.error as Error)?.message}
                </div>
              </div>
            </div>
          }
        >
          <Show
            when={query.data!.Page?.media && query.data!.Page.media.length > 0}
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
