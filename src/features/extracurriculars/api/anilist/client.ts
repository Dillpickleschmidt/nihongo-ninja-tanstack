import { createMemo, createSignal } from 'solid-js'
import type { Client, OperationContext, RequestPolicy } from '@urql/core'

import { createUrqlClient } from './urql-client'
import { createQuery } from './create-query'
import {
  Comments,
  DeleteEntry,
  DeleteThreadComment,
  Entry,
  Following,
  IDMedia,
  RecrusiveRelations,
  SaveThreadComment,
  Schedule,
  Search,
  Threads,
  ToggleFavourite,
  ToggleLike,
  UserLists
} from './queries'
import { currentSeason, currentYear, lastSeason, lastYear, nextSeason, nextYear } from './util'
import { nsfw } from '../../modules/settings/settings'
import type { Media, RelationTreeMedia } from './types'
import type { ResultOf, VariablesOf } from 'gql.tada'

class AnilistClient {
  client: ReturnType<typeof createUrqlClient>['client']
  private urqlClient: ReturnType<typeof createUrqlClient>

  constructor () {
    this.urqlClient = createUrqlClient()
    this.client = this.urqlClient.client
  }

  // Viewer access
  getViewer() {
    return this.urqlClient.getViewer()
  }

  setViewer(viewer: any) {
    this.urqlClient.setViewer(viewer)
  }

  // Reactive properties for list IDs
  private userlistsCache: ResultOf<typeof UserLists> | undefined
  private userlistsSubscription?: () => void
  private sequelSubscription?: () => void
  private planningSubscription?: () => void

  userlists = createMemo(() => {
    // This is a simplified implementation - in a real app, you'd use createQuery
    // For now, we'll return the cached value
    return this.userlistsCache
  })

  continueIDs = createMemo(() => {
    const data = this.userlists()
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

  sequelIDs = createMemo(() => {
    const data = this.userlists()
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

  planningIDs = createMemo(() => {
    const data = this.userlists()
    if (!data?.MediaListCollection?.lists) return []

    const planningList = data.MediaListCollection.lists.find(list => list?.status === 'PLANNING')
    if (!planningList?.entries) return []

    return planningList.entries
      .map(entry => entry?.media?.id)
      .filter((id): id is number => id !== undefined)
  })

  // Helper to fetch user lists - should be called periodically or on auth change
  async fetchUserLists(userId: number) {
    const result = await this.client.query(UserLists, { id: userId }).toPromise()
    if (result.data) {
      this.userlistsCache = result.data
    }
    return result
  }

  search (variables: VariablesOf<typeof Search>, pause?: boolean) {
    return createQuery(
      this.client,
      Search,
      { ...variables, nsfw: nsfw() },
      pause
    )
  }

  async searchCompound (flattenedTitles: Array<{key: string, title: string, year?: string, isAdult: boolean}>) {
    // TODO: Implement searchCompound with proper GraphQL query construction
    // This method requires complex dynamic query generation with js-levenshtein distance matching
    if (!flattenedTitles.length) return []
    return []
  }

  async malIdsCompound (ids: number[]) {
    if (!ids.length) return {}

    let fragmentQueries = ''
    for (let i = 0; i < ids.length; i += 50) {
      fragmentQueries += /* gql */`
        v${i}: Page(perPage: 50, page: ${Math.floor(i / 50) + 1}) {
          media(idMal_in: $ids, type: ANIME) {
            ...med
          }
        },
      `
    }

    // Simplified - would need proper GraphQL execution
    return {}
  }

  schedule (ids?: number[], onList: boolean | null = true) {
    return createQuery(
      this.client,
      Schedule,
      {
        ids,
        onList,
        seasonCurrent: currentSeason,
        seasonYearCurrent: currentYear,
        seasonLast: lastSeason,
        seasonYearLast: lastYear,
        seasonNext: nextSeason,
        seasonYearNext: nextYear,
        formatNot: onList ? null : 'TV_SHORT',
        nsfw: nsfw()
      }
    )
  }

  async toggleFav (id: number) {
    return await this.client.mutation(ToggleFavourite, { id }).toPromise()
  }

  async deleteEntry (media: Media) {
    if (!media.mediaListEntry?.id) return
    return await this.client.mutation(DeleteEntry, { id: media.mediaListEntry.id }).toPromise()
  }

  async entry (variables: VariablesOf<typeof Entry>) {
    return await this.client.mutation(Entry, variables).toPromise()
  }

  async single (id: number, requestPolicy: RequestPolicy = 'cache-first') {
    const context: Partial<OperationContext> = { requestPolicy }
    return await this.client.query(IDMedia, { id }, context).toPromise()
  }

  following (animeID: number) {
    return createQuery(
      this.client,
      Following,
      { id: animeID }
    )
  }

  threads (animeID: number, page = 1) {
    return createQuery(
      this.client,
      Threads,
      { id: animeID, page, perPage: 16 }
    )
  }

  comments (threadId: number, page = 1) {
    return createQuery(
      this.client,
      Comments,
      { threadId, page }
    )
  }

  async toggleLike (id: number, type: 'THREAD' | 'THREAD_COMMENT' | 'ACTIVITY' | 'ACTIVITY_REPLY') {
    return await this.client.mutation(ToggleLike, { id, type }).toPromise()
  }

  async comment (variables: VariablesOf<typeof SaveThreadComment>) {
    return await this.client.mutation(SaveThreadComment, variables).toPromise()
  }

  async deleteComment (id: number, rootCommentId: number) {
    return await this.client.mutation(DeleteThreadComment, { id, rootCommentId }).toPromise()
  }

  relationsTree (media: ResultOf<typeof IDMedia>['Media']) {
    // Placeholder for relations tree cache
    return new Map()
  }
}

// Create singleton instance
const client = new AnilistClient()

export default client
export { AnilistClient }
