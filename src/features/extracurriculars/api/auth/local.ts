import { createStore, set, get } from 'idb-keyval'
import { createStore as createSolidStore, SetStoreFunction } from 'solid-js/store'
import { createMemo, createEffect } from 'solid-js'

import { client, type Media } from '../anilist'

import type { Entry } from '../anilist/queries'
import type { VariablesOf } from 'gql.tada'

import { arrayEqual } from '../../utils'

type StoredMedia = Pick<Media, 'isFavourite' | 'mediaListEntry' | 'id'>

interface LocalStore {
  entries: Record<number, StoredMedia>
}

export default new class LocalSync {
  idbStore = createStore('watchlist', 'local')

  [Symbol.for('solid')] = true // Mark as SolidJS store

  private _entries: Record<number, StoredMedia> = {}
  private _setEntries: SetStoreFunction<Record<number, StoredMedia>>
  private subscribers = new Set<(entries: Record<number, StoredMedia>) => void>()

  constructor() {
    const [entries, setEntries] = createSolidStore<Record<number, StoredMedia>>({})
    this._setEntries = setEntries

    // Load from IndexedDB
    get('entries', this.idbStore).then((stored) => {
      const data = stored ?? {}
      this._entries = data
      setEntries(data)
    })

    // Sync to IndexedDB when entries change
    createEffect(() => {
      const current = entries
      set('entries', current, this.idbStore)
      this.subscribers.forEach((cb) => cb(current))
    })
  }

  get entries(): Record<number, StoredMedia> {
    return this._entries
  }

  set entries(val: Record<number, StoredMedia>) {
    this._entries = val
    this._setEntries(val)
  }

  subscribe(callback: (entries: Record<number, StoredMedia>) => void) {
    this.subscribers.add(callback)
    callback(this.entries)
    return () => this.subscribers.delete(callback)
  }

  update(fn: (entries: Record<number, StoredMedia>) => Record<number, StoredMedia>) {
    const updated = fn(this.entries)
    this.entries = updated
  }

  get(id: number) {
    return this.entries[id]
  }

  _getEntry(id: number): StoredMedia {
    return this.entries[id] ?? {
      id,
      isFavourite: false,
      mediaListEntry: {
        id,
        customLists: null,
        progress: null,
        repeat: null,
        score: null,
        status: null
      }
    }
  }

  schedule(onList: boolean | null = true): ReturnType<typeof client.schedule> {
    const ids = Object.values(this.entries)
      .map(({ mediaListEntry }) => mediaListEntry?.id)
      .filter((e) => e != null) as number[]
    return client.schedule(onList && ids.length ? ids : undefined)
  }

  toggleFav(id: number) {
    this.update((entries) => {
      const entry = this._getEntry(id)
      entry.isFavourite = !entry.isFavourite
      return { ...entries, [id]: entry }
    })
  }

  deleteEntry(media: Media) {
    const id = media.id
    this.update((entries) => {
      const entry = this._getEntry(id)
      entry.mediaListEntry = null
      return { ...entries, [id]: entry }
    })
  }

  continueIDs = createMemo(() => {
    const entries = Object.entries(this.entries)
    if (!entries.length) return []

    const ids: number[] = []
    for (const [alId, entry] of entries) {
      if (entry.mediaListEntry?.status === 'REPEATING' || entry.mediaListEntry?.status === 'CURRENT') {
        ids.push(Number(alId))
      }
    }
    return ids
  })

  planningIDs = createMemo(() => {
    const entries = Object.entries(this.entries)
    if (!entries.length) return []

    const ids: number[] = []
    for (const [alId, entry] of entries) {
      if (entry.mediaListEntry?.status === 'PLANNING') {
        ids.push(Number(alId))
      }
    }
    return ids
  })

  entry(variables: VariablesOf<typeof Entry>) {
    this.update((entries) => {
      const entry = this._getEntry(variables.id)
      entry.mediaListEntry ??= {
        id: variables.id,
        customLists: null,
        progress: null,
        repeat: null,
        score: null,
        status: null
      }

      const keys = ['status', 'score', 'repeat', 'progress'] as Array<keyof typeof variables>
      for (const key of keys) {
        let value = variables[key]
        // @ts-expect-error idk how to fix this tbf
        if (key === 'score' && value != null) value /= 10
        // @ts-expect-error idk how to fix this tbf
        entry.mediaListEntry[key] = value ?? entry.mediaListEntry[key] ?? null
      }
      return { ...entries, [variables.id]: entry }
    })
  }
}()
