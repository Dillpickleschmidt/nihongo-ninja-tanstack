import { createMemo } from 'solid-js'

import { client, episodes, type Media } from '../anilist'

import kitsu from './kitsu'
import local from './local'
import mal from './mal'

import type { Entry, UserFrag } from '../anilist/queries'
import type { ResultOf, VariablesOf } from 'gql.tada'
import { createPersisted } from '../../utils/solid-helpers'

export default new class AuthAggregator {
  hasAuth = createMemo(() => {
    return this.checkAuth()
  })

  syncSettings = createPersisted('syncSettings', { al: true, local: true, kitsu: true, mal: true })

  // AUTH

  anilist() {
    return !!client.getViewer()?.viewer?.id
  }

  kitsu() {
    return !!kitsu.id()
  }

  mal() {
    return !!mal.id()
  }

  checkAuth() {
    return this.anilist() || this.kitsu() || this.mal()
  }

  id() {
    if (this.anilist()) return client.getViewer()!.viewer?.id
    if (this.kitsu()) return kitsu.id()

    return -1
  }

  profile(): ResultOf<typeof UserFrag> | undefined {
    if (this.anilist()) return client.getViewer()?.viewer ?? undefined
    if (this.kitsu()) return kitsu.profile()
    if (this.mal()) return mal.profile()
  }

  mediaListEntry(media: Pick<Media, 'mediaListEntry' | 'id'>) {
    if (this.anilist()) return media.mediaListEntry
    if (this.kitsu()) return kitsu.userlist.value[media.id]
    if (this.mal()) return mal.userlist.value[media.id]

    return local.get(media.id)?.mediaListEntry
  }

  isFavourite(media: Pick<Media, 'isFavourite' | 'id'>) {
    if (this.anilist()) return media.isFavourite
    if (this.kitsu()) return kitsu.isFav(media.id)

    return local.get(media.id)?.isFavourite
  }

  // QUERIES/MUTATIONS

  schedule(onList: boolean | null = true) {
    if (this.anilist()) return client.schedule(undefined, onList)
    if (this.kitsu()) return kitsu.schedule(onList)
    if (this.mal()) return mal.schedule(onList)

    return local.schedule(onList)
  }

  toggleFav(id: number) {
    return Promise.allSettled([
      this.anilist() && client.toggleFav(id),
      this.kitsu() && kitsu.toggleFav(id),
      local.toggleFav(id)
    ])
  }

  following(id: number) {
    if (this.anilist()) return client.following(id)
    if (this.kitsu()) return kitsu.following(id)
    return null
  }

  planningIDs = createMemo(() => {
    const clientIDs = client.planningIDs()
    const kitsuIDs = kitsu.planningIDs()
    const localIDs = local.planningIDs()
    const malIDs = mal.planningIDs()

    if (this.anilist()) return clientIDs
    if (this.kitsu()) return kitsuIDs
    if (this.mal()) return malIDs
    if (localIDs.length) return localIDs
    return null
  })

  continueIDs = createMemo(() => {
    const clientIDs = client.continueIDs()
    const kitsuIDs = kitsu.continueIDs()
    const localIDs = local.continueIDs()
    const malIDs = mal.continueIDs()

    if (this.anilist()) return clientIDs
    if (this.kitsu()) return kitsuIDs
    if (this.mal()) return malIDs
    if (localIDs.length) return localIDs
    return null
  })

  sequelIDs = createMemo(() => {
    const clientIDs = client.sequelIDs()

    if (this.anilist()) return clientIDs
    return null
  })

  async watch(outdated: Media, progress: number) {
    const media = (await client.single(outdated.id, navigator.onLine ? 'network-only' : 'cache-first')).data?.Media ?? outdated
    const totalEps = episodes(media) ?? 1
    if (totalEps < progress) return

    const mediaList = this.mediaListEntry(media)

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

    return await this.entry({ id: media.id, progress, status, lists })
  }

  delete(media: Media) {
    const sync = this.syncSettings.value

    return Promise.allSettled([
      sync.al && this.anilist() && client.deleteEntry(media),
      sync.kitsu && this.kitsu() && kitsu.deleteEntry(media),
      sync.mal && this.mal() && mal.deleteEntry(media),
      sync.local && local.deleteEntry(media)
    ])
  }

  entry(variables: VariablesOf<typeof Entry>) {
    const sync = this.syncSettings.value
    variables.lists ??= []
    if (!variables.lists.includes('Watched using Hayase')) {
      variables.lists.push('Watched using Hayase')
    }

    return Promise.allSettled([
      sync.al && this.anilist() && client.entry(variables),
      sync.kitsu && this.kitsu() && kitsu.entry(variables),
      sync.mal && this.mal() && mal.entry(variables),
      sync.local && local.entry(variables)
    ])
  }

  async setInitialState(media: Media, episode: number) {
    if (episode !== 1) return
    const mediaList = this.mediaListEntry(media)

    if (!mediaList) return await this.entry({ id: media.id, progress: 0, status: 'CURRENT' })

    if (['COMPLETED', 'PLANNING', 'PAUSED'].includes(mediaList.status ?? '')) {
      const status = mediaList.status === 'COMPLETED' ? 'REPEATING' : 'CURRENT'
      const lists =
        ((mediaList.customLists as Array<{ enabled: boolean; name: string }> | undefined)?.filter(({ enabled }) => enabled).map(({ name }) => name)) ?? []

      return await this.entry({ id: media.id, progress: 0, status, lists })
    }
  }
}()
