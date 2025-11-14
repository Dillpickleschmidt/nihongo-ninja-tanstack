import { Component, Show, createEffect, onCleanup } from 'solid-js'
import FullBanner from './full-banner'
import SkeletonBanner from './skeleton-banner'
import { client, currentSeason, currentYear } from '../../../api/anilist'

// Module-level query - runs once
const query = client.search(
  {
    sort: ['POPULARITY_DESC'],
    perPage: 15,
    season: currentSeason,
    seasonYear: currentYear,
    statusNot: ['NOT_YET_RELEASED']
  },
  true
)

const Banner: Component = () => {
  // Manage query subscription
  createEffect(() => {
    // Resume query if paused
    if (query.isPaused?.()) {
      query.resume?.()
    }

    onCleanup(() => {
      query.pause?.()
    })
  })

  return (
    <div class="w-full h-[70vh] md:h-[80vh] relative flex flex-col">
      {/* Spacer to prevent scroll position jumping when banner changes height */}
      <div class="absolute top-0 transparent h-full opacity-0">.</div>

      <Show when={query.fetching?.()}>
        <SkeletonBanner />
      </Show>

      <Show when={query.error}>
        {(error) => (
          <div class="p-5 flex items-center justify-center w-full h-72">
            <div>
              <div class="mb-1 font-bold text-4xl text-center">Ooops!</div>
              <div class="text-lg text-center text-muted-foreground">
                Looks like something went wrong!
              </div>
              <div class="text-lg text-center text-muted-foreground">{error().message}</div>
            </div>
          </div>
        )}
      </Show>

      <Show when={query.data?.()}>
        {(data) => (
          <Show
            when={data().Page?.media && data().Page!.media!.length > 0}
            fallback={<SkeletonBanner />}
          >
            {(media) => <FullBanner mediaList={media()} />}
          </Show>
        )}
      </Show>
    </div>
  )
}

export default Banner
export { Banner }
