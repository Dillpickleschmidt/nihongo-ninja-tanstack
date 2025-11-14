import { Component, Show } from 'solid-js'
import { isServer } from 'solid-js/web'
import { createQuery } from '@urql/solid'
import type { ResultOf, VariablesOf } from 'gql.tada'
import { FullBanner } from './full-banner'
import { SkeletonBanner } from './skeleton-banner'
import { currentSeason, currentYear, Search } from '../../../api/anilist'
import { useAnilist } from '../../../api/anilist/AnilistContext'

const Banner: Component = () => {
  const anilist = useAnilist()

  // Server-side: just render skeleton, don't create query (contains non-serializable internals)
  if (isServer) {
    return (
      <div class="w-full h-[70vh] md:h-[80vh] relative flex flex-col">
        <div class="absolute top-0 transparent h-full opacity-0">.</div>
        <SkeletonBanner />
      </div>
    )
  }

  // Client-side: create URQL query with reactive nsfw filter
  const [query] = createQuery({
    query: Search,
    variables: () => ({
      sort: ['POPULARITY_DESC'],
      perPage: 15,
      season: currentSeason,
      seasonYear: currentYear,
      statusNot: ['NOT_YET_RELEASED'],
      nsfw: anilist.nsfw()
    })
  })

  return (
    <div class="w-full h-[70vh] md:h-[80vh] relative flex flex-col">
      {/* Spacer to prevent scroll position jumping when banner changes height */}
      <div class="absolute top-0 transparent h-full opacity-0">.</div>

      <Show when={query.fetching}>
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

      <Show when={query.data}>
        {(data) => (
          <Show
            when={data().Page?.media && data().Page!.media!.length > 0 && data().Page!.media}
            fallback={<SkeletonBanner />}
          >
            {(mediaArray) => <FullBanner mediaList={mediaArray()} />}
          </Show>
        )}
      </Show>
    </div>
  )
}

export { Banner }
