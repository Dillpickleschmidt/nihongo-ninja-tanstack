import type { Client, OperationContext, RequestPolicy } from '@urql/core'

import { createUrqlClient } from './urql-client'
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
import type { Media, RelationTreeMedia } from './types'
import type { ResultOf, VariablesOf } from 'gql.tada'

/**
 * Non-reactive AniList client.
 * All business logic here - no reactive primitives.
 * Reactive state (continueIDs, sequelIDs, etc.) lives in AnilistContext.
 */
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

  // Fetch user lists as a promise
  async fetchUserLists(userId: number) {
    const result = await this.client.query(UserLists, { id: userId }).toPromise()
    return result
  }

  // Plain method - returns promise, no reactive wrapper
  async search (variables: VariablesOf<typeof Search>) {
    return await this.client.query(Search, variables).toPromise()
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

  async schedule (ids?: number[], onList: boolean | null = true, nsfwFilter?: ['Hentai'] | null) {
    return await this.client.query(Schedule, {
      ids,
      onList,
      seasonCurrent: currentSeason,
      seasonYearCurrent: currentYear,
      seasonLast: lastSeason,
      seasonYearLast: lastYear,
      seasonNext: nextSeason,
      seasonYearNext: nextYear,
      formatNot: onList ? null : 'TV_SHORT',
      nsfw: nsfwFilter
    }).toPromise()
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

  async following (animeID: number) {
    return await this.client.query(Following, { id: animeID }).toPromise()
  }

  async threads (animeID: number, page = 1) {
    return await this.client.query(Threads, { id: animeID, page, perPage: 16 }).toPromise()
  }

  async comments (threadId: number, page = 1) {
    return await this.client.query(Comments, { threadId, page }).toPromise()
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
export const anilistClient = new AnilistClient()
