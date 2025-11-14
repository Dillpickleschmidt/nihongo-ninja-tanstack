import { authExchange } from '@urql/exchange-auth'
import { offlineExchange } from '@urql/exchange-graphcache'
import { Client, fetchExchange, ssrExchange } from '@urql/core'
import Bottleneck from 'bottleneck'
import { isServer } from 'solid-js/web'

import { refocusExchange } from './refocus'
import { makeDefaultStorage } from './storage'
import schema from './schema.json'
import { CommentFrag, CustomLists, type Entry, FullMedia, FullMediaList, ThreadFrag, type ToggleFavourite, UserLists, Viewer } from './queries'
import { gql } from './gql'

import type { ResultOf } from 'gql.tada'

interface ViewerData { viewer: ResultOf<typeof Viewer>['Viewer'], token: string, expires: string }

class FetchError extends Error {
  res

  constructor (res: Response, message?: string, opts?: ErrorOptions) {
    super(message, opts)
    this.res = res
  }
}

// Load token from localStorage if available
const loadStoredViewer = (): ViewerData | undefined => {
  if (isServer) return undefined
  try {
    const stored = localStorage.getItem('ALViewer')
    return stored ? JSON.parse(stored) : undefined
  } catch {
    return undefined
  }
}

// Setup storage with proper SSR support
const setupStorage = () => {
  if (isServer) return undefined

  return makeDefaultStorage({
    idbName: 'anilist-cache-v1',
    maxAge: 14 // The maximum age of the persisted data in days
  })
}

// Clean up old database version
if (!isServer && typeof indexedDB !== 'undefined') {
  indexedDB.deleteDatabase('graphcache-v3') // old version
}

const storage = setupStorage()

export function createUrqlClient() {
  const storedViewer = loadStoredViewer()
  let currentViewer: ViewerData | undefined = storedViewer

  const limiter = new Bottleneck({
    reservoir: 90,
    reservoirRefreshAmount: 90,
    reservoirRefreshInterval: 60 * 1000,
    maxConcurrent: 3,
    minTime: 200
  })

  let rateLimitPromise: Promise<void> | null = null

  const handleRequest = limiter.wrap<Response, RequestInfo | URL, RequestInit | undefined>(async (req: RequestInfo | URL, opts?: RequestInit) => {
    if (rateLimitPromise) await rateLimitPromise
    const res = await fetch(req, opts)
    if (!res.ok && (res.status === 429 || res.status === 500)) {
      throw new FetchError(res)
    }
    return res
  })

  const ssr = ssrExchange({ isClient: !isServer })

  const client = new Client({
    url: 'https://graphql.anilist.co',
    preferGetMethod: false,
    fetch: (req: RequestInfo | URL, opts?: RequestInit) => handleRequest(req, opts),
    suspense: true,
    exchanges: [
      refocusExchange(60_000),
      offlineExchange({
        schema,
        ...(storage ? { storage } : {}),
        updates: {
          Mutation: {
            ToggleFavourite (result: ResultOf<typeof ToggleFavourite>, args, cache) {
              if (!result.ToggleFavourite?.anime?.nodes) return result
              const id = args.animeId as number

              // we check if exists, because AL always returns false for isFavourite, so we need to check if it exists in the list
              const exists = result.ToggleFavourite.anime.nodes.find(n => n?.id === id)

              cache.writeFragment(gql('fragment Med on Media {id, isFavourite}'), { id, isFavourite: !!exists })
            },
            DeleteMediaListEntry: (_, { id }, cache) => {
              cache.writeFragment(FullMediaList, { id: id as number, progress: null, repeat: null, status: null, customLists: null, score: null })
              cache.updateQuery({ query: UserLists, variables: { id: currentViewer?.viewer?.id } }, data => {
                if (!data?.MediaListCollection?.lists) return data
                const oldLists = data.MediaListCollection.lists

                data.MediaListCollection.lists = oldLists.map(list => {
                  if (!list?.entries) return list
                  return {
                    ...list,
                    entries: list.entries.filter(entry => entry?.media?.mediaListEntry?.id !== id)
                  }
                })

                return data
              })
            },
            SaveMediaListEntry: (result: ResultOf<typeof Entry>, { mediaId }, cache) => {
              const media = gql('fragment Med on Media {id, mediaListEntry {status, progress, repeat, score, customLists }}')

              const entry = result.SaveMediaListEntry

              if (entry?.customLists) entry.customLists = (entry.customLists as string[]).map(name => ({ enabled: true, name }))
              cache.writeFragment(media, {
                id: mediaId as number,
                mediaListEntry: entry ?? null
              })
              cache.updateQuery({ query: UserLists, variables: { id: currentViewer?.viewer?.id } }, data => {
                if (!data?.MediaListCollection?.lists) return data
                const oldLists = data.MediaListCollection.lists
                const oldEntry = oldLists.flatMap(list => list?.entries).find(entry => entry?.media?.id === mediaId) ?? { id: -1, media: cache.readFragment(FullMedia, { id: mediaId as number, __typename: 'Media' }) }
                if (!oldEntry.media) return data

                const lists = oldLists.map(list => {
                  if (!list?.entries) return list
                  return {
                    ...list,
                    entries: list.entries.filter(entry => entry?.media?.id !== mediaId)
                  }
                })

                const status = result.SaveMediaListEntry?.status ?? oldEntry.media.mediaListEntry?.status ?? 'PLANNING' as const

                const fallback: NonNullable<typeof oldLists[0]> = { status, entries: [] }
                let targetList = lists.find(list => list?.status === status)
                if (!targetList) {
                  lists.push(fallback)
                  targetList = fallback
                }
                targetList.entries ??= []
                targetList.entries.push(oldEntry)
                return { ...data, MediaListCollection: { ...data.MediaListCollection, lists } }
              })
            },
            SaveThreadComment: (_result, args, cache, _info) => {
              if (_info.variables.rootCommentId) {
                const id = _info.variables.rootCommentId as number
                cache.invalidate({
                  __typename: 'ThreadComment',
                  id
                })
              } else {
                cache.invalidate('ThreadComment')
              }
            },
            DeleteThreadComment: (_result, args, cache, _info) => {
              const id = (_info.variables.rootCommentId ?? args.id) as number
              cache.invalidate({
                __typename: 'ThreadComment',
                id
              })
            }
          }
        },
        resolvers: {
          Query: {
            Media: (parent, { id }) => ({ __typename: 'Media', id }),
            Thread: (parent, { id }) => ({ __typename: 'Thread', id })
          }
        },
        optimistic: {
          ToggleFavourite ({ animeId }, cache, info) {
            const id = animeId as number
            const media = cache.readFragment(FullMedia, { id, __typename: 'Media' })
            info.partial = true

            const nodes = media?.isFavourite ? [] : [{ id, __typename: 'Media' }]
            return {
              anime: {
                nodes,
                __typename: 'MediaConnection'
              },
              __typename: 'Favourites'
            }
          },
          DeleteMediaListEntry () {
            return { deleted: true, __typename: 'Deleted' }
          },
          SaveMediaListEntry (args, cache, info) {
            const id = args.mediaId as number
            const media = cache.readFragment(FullMedia, { id, __typename: 'Media' })
            if (!media) return null
            info.partial = true

            return {
              status: 'PLANNING' as const,
              progress: 0,
              repeat: 0,
              score: 0,
              id: -1,
              ...media.mediaListEntry,
              customLists: (args.customLists as string[]).map(name => ({ enabled: true, name })),
              ...args,
              media,
              __typename: 'MediaList'
            }
          },
          ToggleLikeV2 ({ id, type }, cache, info) {
            const threadOrCommentId = id as number
            const likable = type as 'THREAD' | 'THREAD_COMMENT' | 'ACTIVITY' | 'ACTIVITY_REPLY'

            const typename = likable === 'THREAD' ? 'Thread' : 'ThreadComment'

            const likableUnion = cache.readFragment(likable === 'THREAD' ? ThreadFrag : CommentFrag, { id: threadOrCommentId, __typename: typename })

            if (!likableUnion) return null

            return {
              id: threadOrCommentId,
              isLiked: !likableUnion.isLiked,
              likeCount: likableUnion.likeCount + (likableUnion.isLiked ? -1 : 1),
              __typename: typename
            }
          }
        },
        keys: {
          FuzzyDate: () => null,
          PageInfo: () => null,
          Page: () => null,
          MediaTitle: () => null,
          MediaCoverImage: () => null,
          AiringSchedule: () => null,
          MediaListCollection: e => (e.user as {id: string | null}).id,
          MediaListGroup: e => e.status as string | null,
          UserAvatar: () => null,
          UserOptions: () => null,
          UserStatisticTypes: () => null,
          UserGenreStatistic: () => null,
          UserStatistics: () => null,
          MediaListOptions: () => null,
          MediaListTypeOptions: () => null
        }
      }),
      authExchange(async utils => {
        return {
          addAuthToOperation: (operation) => {
            if (!currentViewer) return operation
            return utils.appendHeaders(operation, {
              Authorization: `Bearer ${currentViewer.token}`
            })
          },
          didAuthError (error, _operation) {
            return error.graphQLErrors.some(e => e.message === 'Invalid token')
          },
          refreshAuth: async () => {
            // Token refresh would go here
            // For now, clear token on auth error
            currentViewer = undefined
            if (!isServer) {
              localStorage.removeItem('ALViewer')
            }
          },
          willAuthError: () => {
            if (!currentViewer?.expires) return false
            return parseInt(currentViewer.expires) < Date.now()
          }
        }
      }),
      ssr,
      fetchExchange
    ],
    requestPolicy: 'cache-and-network'
  })

  limiter.on('failed', async (error: FetchError | Error, jobInfo) => {
    // urql has some weird bug that first error is always an AbortError ???
    if (error.name === 'AbortError') return undefined
    if (jobInfo.retryCount > 8) return undefined

    if (error.message === 'Failed to fetch') {
      rateLimitPromise ??= new Promise(resolve => setTimeout(() => { rateLimitPromise = null; resolve() }, 60000))
      return 60000
    }
    if (!(error instanceof FetchError)) return 0
    if (error.res.status === 500) return 1000

    const delay = (parseInt(error.res.headers.get('retry-after') ?? '60') + 1) * 1000
    rateLimitPromise ??= new Promise(resolve => setTimeout(() => { rateLimitPromise = null; resolve() }, delay))

    return delay
  })

  return {
    client,
    ssr,
    setViewer: (viewer: ViewerData | undefined) => {
      currentViewer = viewer
      if (!isServer) {
        if (viewer) {
          localStorage.setItem('ALViewer', JSON.stringify(viewer))
        } else {
          localStorage.removeItem('ALViewer')
        }
      }
    },
    getViewer: () => currentViewer
  }
}
