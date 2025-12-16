import { Index, For, Show } from 'solid-js'
import { useQuery } from '@tanstack/solid-query'
import { UserLists, Viewer } from '~/features/discover/api/anilist/queries'
import { queryAniList } from '~/features/discover/api/anilist/query-wrapper'
import { extractUserListIds } from '~/features/discover/utils/id-extractors'
import { getPersonalizedSections } from '~/features/discover/utils/section-configs'
import { AnimeQuerySection } from '~/features/discover/components/ui/cards/query-card'
import { SkeletonAnimeCard } from '~/features/discover/components/ui/cards/skeleton-card'

/**
 * Personalized sections based on user's AniList data
 */
export function PersonalizedSections(props: { userId?: string }) {
  const query = useQuery(() => ({
    queryKey: ['anilist', 'personalized-sections', props.userId],
    queryFn: async () => {
      if (!props.userId) return []

      try {
        // Query Viewer to get AniList user ID
        const viewerResult = await queryAniList(Viewer, {})

        if (viewerResult.error || !viewerResult.data?.Viewer?.id) {
          console.warn('[Personalized] No AniList user found')
          return []
        }

        // Get user's personal anime lists
        const userListsResult = await queryAniList(UserLists, {
          id: viewerResult.data.Viewer.id,
        })

        if (userListsResult.error || !userListsResult.data) {
          console.error('[Personalized] Error fetching user lists:', userListsResult.error)
          return []
        }

        const userListIds = extractUserListIds(userListsResult.data)
        return getPersonalizedSections(userListIds)
      } catch (error) {
        console.error('[Personalized] Error:', error)
        return []
      }
    },
    enabled: !!props.userId,
    staleTime: 10 * 60 * 1000, // 10 minutes
  }))

  return (
    // Derive loading from data, not isLoading prop
    <Show
      when={query.data !== undefined}
      fallback={
        <div class="space-y-6 px-4">
          <For each={Array.from({ length: 2 })}>
            {() => (
              <div class="space-y-3">
                <div class="h-6 w-48 bg-card/40 animate-pulse rounded" />
                <div class="flex gap-3 overflow-hidden">
                  <For each={Array.from({ length: 5 })}>
                    {() => <SkeletonAnimeCard />}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      }
    >
      {/* Error handling */}
      <Show
        when={!query.error}
        fallback={
          <div class="px-4 py-8 text-center text-red-600">
            Error loading personalized sections: {(query.error as Error)?.message}
          </div>
        }
      >
        {/* Empty state */}
        <Show
          when={query.data!.length > 0}
          fallback={
            <div class="px-4 py-8 text-center text-muted-foreground">
              <p>Connect your AniList account to see personalized recommendations</p>
            </div>
          }
        >
          {/* Content */}
          <Index each={query.data!}>
            {(section) => (
              <>
                <div class="text-muted-foreground flex cursor-pointer items-end px-4 pt-5">
                  <div class="text-lg font-semibold leading-none">{section().title}</div>
                  <div class="ml-auto text-xs">View More</div>
                </div>
                <div class="flex overflow-x-auto pb-4">
                  <AnimeQuerySection config={section()} />
                </div>
              </>
            )}
          </Index>
        </Show>
      </Show>
    </Show>
  )
}
