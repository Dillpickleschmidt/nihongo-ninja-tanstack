import { createContext, useContext, createMemo, createSignal, createEffect, onCleanup, type ParentComponent } from 'solid-js'
import type { ResultOf, VariablesOf } from 'gql.tada'

import { anilistClient } from './client'
import { UserLists } from './queries'
import { showHentai } from '../../modules/settings/settings'
import type { Media } from './types'

/**
 * Computed IDs from user lists
 */
interface AnilistListIds {
  continueIDs: () => number[]
  sequelIDs: () => number[]
  planningIDs: () => number[]
}

/**
 * AniList context type - all reactive state and methods
 */
type AnilistContextType = {
  // Viewer/Auth
  viewer: () => ReturnType<typeof anilistClient.getViewer>
  isAuthenticated: () => boolean

  // Reactive computed IDs
  continueIDs: () => number[]
  sequelIDs: () => number[]
  planningIDs: () => number[]

  // NSFW filter
  nsfw: () => ['Hentai'] | null

  // Methods (wrapped from client)
  fetchUserLists: (userId: number) => Promise<any>
  search: (variables: VariablesOf<typeof import('./queries').Search>) => Promise<any>
  toggleFav: (id: number) => Promise<any>
  deleteEntry: (media: Media) => Promise<any>
}

/**
 * Create the context
 */
const AnilistContext = createContext<AnilistContextType>()

/**
 * Provider component
 */
export const AnilistProvider: ParentComponent = (props) => {
  // Sync viewer state from client
  const [viewer, setViewer] = createSignal(anilistClient.getViewer())

  // User lists - fetched via subscription pattern
  const [userLists, setUserLists] = createSignal<ResultOf<typeof UserLists> | undefined>()
  const [userListsFetching, setUserListsFetching] = createSignal(false)

  // Fetch user lists when viewer changes
  createEffect(() => {
    const currentViewer = viewer()
    if (!currentViewer?.viewer?.id) {
      setUserLists(undefined)
      return
    }

    void (async () => {
      setUserListsFetching(true)
      try {
        const result = await anilistClient.fetchUserLists(currentViewer.viewer.id)
        if (result.data) {
          setUserLists(result.data)
        }
      } catch (error) {
        console.error('Failed to fetch user lists:', error)
      } finally {
        setUserListsFetching(false)
      }
    })()
  })

  // Computed: continue IDs
  const continueIDs = createMemo(() => {
    const data = userLists()
    if (!data?.MediaListCollection?.lists) return []

    const mediaList = data.MediaListCollection.lists
      .filter(list => list?.status === 'CURRENT' || list?.status === 'REPEATING')
      .flatMap(list => list?.entries ?? [])

    return mediaList
      .filter(entry => {
        if (entry?.media?.status === 'FINISHED') return true
        const progress = entry?.media?.mediaListEntry?.progress ?? 0
        return progress < (entry?.media?.nextAiringEpisode?.episode ?? (progress + 2)) - 1
      })
      .map(entry => entry?.media?.id)
      .filter((id): id is number => id !== undefined)
  })

  // Computed: sequel IDs
  const sequelIDs = createMemo(() => {
    const data = userLists()
    if (!data?.MediaListCollection?.lists) return []

    const completedList = data.MediaListCollection.lists.find(list => list?.status === 'COMPLETED')
    if (!completedList?.entries) return []

    const ids = [...new Set(
      completedList.entries
        .flatMap(entry => entry?.media?.relations?.edges?.filter(edge => edge?.relationType === 'SEQUEL'))
        .map(edge => edge?.node?.id)
        .filter((id): id is number => id !== undefined)
    )]

    return ids
  })

  // Computed: planning IDs
  const planningIDs = createMemo(() => {
    const data = userLists()
    if (!data?.MediaListCollection?.lists) return []

    const planningList = data.MediaListCollection.lists.find(list => list?.status === 'PLANNING')
    if (!planningList?.entries) return []

    return planningList.entries
      .map(entry => entry?.media?.id)
      .filter((id): id is number => id !== undefined)
  })

  // Computed: NSFW filter
  const nsfw = createMemo(() =>
    showHentai.value ? null : (['Hentai'] as const)
  )

  const value: AnilistContextType = {
    viewer,
    isAuthenticated: () => !!viewer()?.viewer?.id,
    continueIDs,
    sequelIDs,
    planningIDs,
    nsfw,
    fetchUserLists: anilistClient.fetchUserLists.bind(anilistClient),
    search: (variables) => anilistClient.search({ ...variables, nsfw: nsfw() }),
    toggleFav: anilistClient.toggleFav.bind(anilistClient),
    deleteEntry: anilistClient.deleteEntry.bind(anilistClient),
  }

  return (
    <AnilistContext.Provider value={value}>
      {props.children}
    </AnilistContext.Provider>
  )
}

/**
 * Hook to use AniList context
 */
export function useAnilist() {
  const context = useContext(AnilistContext)
  if (!context) {
    throw new Error('useAnilist must be used within an <AnilistProvider>')
  }
  return context
}
