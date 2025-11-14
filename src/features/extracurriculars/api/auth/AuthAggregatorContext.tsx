import { createContext, useContext, createMemo, type ParentComponent } from 'solid-js'
import type { VariablesOf } from 'gql.tada'

import { useAnilist } from '../anilist/AnilistContext'
import { anilistClient, episodes, type Media } from '../anilist'

import kitsu from './kitsu'
import local from './local'
import mal from './mal'

import type { Entry } from '../anilist/queries'
import { createPersisted } from '../../utils/solid-helpers'

/**
 * Auth aggregator context - coordinates multiple auth providers
 */
type AuthAggregatorContextType = {
  // Auth checks
  hasAuth: () => boolean
  anilist: () => boolean
  kitsu: () => boolean
  mal: () => boolean

  // User info
  id: () => number | undefined
  profile: () => any | undefined

  // Data access
  mediaListEntry: (media: Pick<Media, 'mediaListEntry' | 'id'>) => any
  isFavourite: (media: Pick<Media, 'isFavourite' | 'id'>) => boolean

  // Computed IDs (aggregated from all sources)
  planningIDs: () => number[] | null
  continueIDs: () => number[] | null
  sequelIDs: () => number[] | null

  // Methods
  schedule: (onList?: boolean | null) => Promise<any>
  toggleFav: (id: number) => Promise<any>
  deleteEntry: (media: Media) => Promise<any>
  entry: (variables: VariablesOf<typeof Entry>) => Promise<any>
  following: (id: number) => Promise<any>
  watch: (outdated: Media, progress: number) => Promise<any>
  setInitialState: (media: Media, episode: number) => Promise<any>
}

/**
 * Create the auth aggregator context
 */
const AuthAggregatorContext = createContext<AuthAggregatorContextType>()

/**
 * Auth Aggregator Provider
 */
export const AuthAggregatorProvider: ParentComponent = (props) => {
  const anilist = useAnilist()

  const syncSettings = createPersisted('syncSettings', { al: true, local: true, kitsu: true, mal: true })

  // Auth checks
  const isAnilistAuth = () => anilist.isAuthenticated()
  const isKitsuAuth = () => !!kitsu.id()
  const isMalAuth = () => !!mal.id()

  const checkAuth = () => isAnilistAuth() || isKitsuAuth() || isMalAuth()

  // User ID
  const userId = () => {
    if (isAnilistAuth()) return anilist.viewer()?.viewer?.id
    if (isKitsuAuth()) return kitsu.id()
    return -1
  }

  // User profile
  const userProfile = () => {
    if (isAnilistAuth()) return anilist.viewer()?.viewer
    if (isKitsuAuth()) return kitsu.profile()
    if (isMalAuth()) return mal.profile()
    return undefined
  }

  // Get media list entry from appropriate source
  const getMediaListEntry = (media: Pick<Media, 'mediaListEntry' | 'id'>) => {
    if (isAnilistAuth()) return media.mediaListEntry
    if (isKitsuAuth()) return kitsu.userlist.value[media.id]
    if (isMalAuth()) return mal.userlist.value[media.id]
    return local.get(media.id)?.mediaListEntry
  }

  // Check if media is favourite
  const checkIsFavourite = (media: Pick<Media, 'isFavourite' | 'id'>) => {
    if (isAnilistAuth()) return media.isFavourite
    if (isKitsuAuth()) return kitsu.isFav(media.id)
    return local.get(media.id)?.isFavourite ?? false
  }

  // Computed: Planning IDs from all sources
  const planningIDs = createMemo(() => {
    const clientIDs = anilist.planningIDs()
    const kitsuIDs = kitsu.planningIDs()
    const localIDs = local.planningIDs()
    const malIDs = mal.planningIDs()

    if (isAnilistAuth()) return clientIDs
    if (isKitsuAuth()) return kitsuIDs
    if (isMalAuth()) return malIDs
    if (localIDs.length) return localIDs
    return null
  })

  // Computed: Continue IDs from all sources
  const continueIDs = createMemo(() => {
    const clientIDs = anilist.continueIDs()
    const kitsuIDs = kitsu.continueIDs()
    const localIDs = local.continueIDs()
    const malIDs = mal.continueIDs()

    if (isAnilistAuth()) return clientIDs
    if (isKitsuAuth()) return kitsuIDs
    if (isMalAuth()) return malIDs
    if (localIDs.length) return localIDs
    return null
  })

  // Computed: Sequel IDs from all sources
  const sequelIDs = createMemo(() => {
    const clientIDs = anilist.sequelIDs()

    if (isAnilistAuth()) return clientIDs
    return null
  })

  // Schedule - aggregate across sources
  const schedule = async (onList: boolean | null = true) => {
    if (isAnilistAuth()) return await anilistClient.schedule(undefined, onList, anilist.nsfw())
    if (isKitsuAuth()) return await kitsu.schedule(onList)
    if (isMalAuth()) return await mal.schedule(onList)
    return await local.schedule(onList)
  }

  // Toggle favourite - sync across all sources
  const toggleFav = async (id: number) => {
    return await Promise.allSettled([
      isAnilistAuth() && anilistClient.toggleFav(id),
      isKitsuAuth() && kitsu.toggleFav(id),
      local.toggleFav(id)
    ])
  }

  // Delete entry - sync across all sources
  const deleteEntry = async (media: Media) => {
    const sync = syncSettings.value
    return await Promise.allSettled([
      sync.al && isAnilistAuth() && anilistClient.deleteEntry(media),
      sync.kitsu && isKitsuAuth() && kitsu.deleteEntry(media),
      sync.mal && isMalAuth() && mal.deleteEntry(media),
      sync.local && local.deleteEntry(media)
    ])
  }

  // Entry - sync across all sources
  const entry = async (variables: VariablesOf<typeof Entry>) => {
    const sync = syncSettings.value
    variables.lists ??= []
    if (!variables.lists.includes('Watched using Hayase')) {
      variables.lists.push('Watched using Hayase')
    }

    return await Promise.allSettled([
      sync.al && isAnilistAuth() && anilistClient.entry(variables),
      sync.kitsu && isKitsuAuth() && kitsu.entry(variables),
      sync.mal && isMalAuth() && mal.entry(variables),
      sync.local && local.entry(variables)
    ])
  }

  // Following
  const following = async (id: number) => {
    if (isAnilistAuth()) return await anilistClient.following(id)
    if (isKitsuAuth()) return await kitsu.following(id)
    return null
  }

  // Watch - mark progress and update status
  const watch = async (outdated: Media, progress: number) => {
    const media = (await anilistClient.single(outdated.id, navigator.onLine ? 'network-only' : 'cache-first')).data?.Media ?? outdated
    const totalEps = episodes(media) ?? 1
    if (totalEps < progress) return

    const mediaList = getMediaListEntry(media)

    const currentProgress = mediaList?.progress ?? 0
    if (currentProgress >= progress) return

    const canBeCompleted = media.status === 'FINISHED' || media.episodes != null

    const status =
      totalEps === progress && canBeCompleted
        ? 'COMPLETED'
        : mediaList?.status === 'REPEATING'
          ? 'REPEATING'
          : 'CURRENT'

    const lists =
      ((mediaList?.customLists as Array<{ enabled: boolean; name: string }> | undefined)?.filter(({ enabled }) => enabled).map(({ name }) => name)) ?? []

    return await entry({ id: media.id, progress, status, lists })
  }

  // Set initial state
  const setInitialState = async (media: Media, episode: number) => {
    if (episode !== 1) return
    const mediaList = getMediaListEntry(media)

    if (!mediaList) return await entry({ id: media.id, progress: 0, status: 'CURRENT' })

    if (['COMPLETED', 'PLANNING', 'PAUSED'].includes(mediaList.status ?? '')) {
      const status = mediaList.status === 'COMPLETED' ? 'REPEATING' : 'CURRENT'
      const lists =
        ((mediaList.customLists as Array<{ enabled: boolean; name: string }> | undefined)?.filter(({ enabled }) => enabled).map(({ name }) => name)) ?? []

      return await entry({ id: media.id, progress: 0, status, lists })
    }
  }

  const value: AuthAggregatorContextType = {
    hasAuth: checkAuth,
    anilist: isAnilistAuth,
    kitsu: isKitsuAuth,
    mal: isMalAuth,
    id: userId,
    profile: userProfile,
    mediaListEntry: getMediaListEntry,
    isFavourite: checkIsFavourite,
    planningIDs,
    continueIDs,
    sequelIDs,
    schedule,
    toggleFav,
    deleteEntry,
    entry,
    following,
    watch,
    setInitialState,
  }

  return (
    <AuthAggregatorContext.Provider value={value}>
      {props.children}
    </AuthAggregatorContext.Provider>
  )
}

/**
 * Hook to use auth aggregator context
 */
export function useAuthAggregator() {
  const context = useContext(AuthAggregatorContext)
  if (!context) {
    throw new Error('useAuthAggregator must be used within an <AuthAggregatorProvider>')
  }
  return context
}
