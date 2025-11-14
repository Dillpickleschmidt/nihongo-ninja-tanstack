import { createSignal, createEffect } from 'solid-js'
import { createStore } from 'solid-js/store'
import { createIsomorphicFn } from '@tanstack/solid-start'
import type { Store, SetStoreFunction } from 'solid-js/store'

/**
 * Isomorphic localStorage getter
 * Server: returns null
 * Client: returns localStorage.getItem() result
 */
const getStorageItem = createIsomorphicFn()
  .server((_key: string) => null as string | null)
  .client((key: string) => {
    try {
      return localStorage.getItem(key)
    } catch (e) {
      console.error(`Failed to read ${key} from localStorage`, e)
      return null
    }
  })

/**
 * Isomorphic localStorage setter
 * Server: no-op
 * Client: persists to localStorage
 */
const setStorageItem = createIsomorphicFn()
  .server((_key: string, _value: string) => {})
  .client((key: string, value: string) => {
    try {
      localStorage.setItem(key, value)
    } catch (e) {
      console.error(`Failed to write ${key} to localStorage`, e)
    }
  })

/**
 * Creates a persisted signal-like object synced to localStorage
 * Works like Svelte's persisted() store but with SolidJS
 * Uses TanStack Start isomorphic functions for proper SSR handling
 */
export function createPersisted<T>(
  key: string,
  initial: T
): {
  get value(): T
  set value(val: T)
  subscribe: (cb: (val: T) => void) => () => void
} {
  // Load from localStorage (isomorphic - server returns null, client reads storage)
  let stored: T | undefined
  const item = getStorageItem(key)
  if (item !== null && item !== 'undefined') {
    try {
      stored = JSON.parse(item) as T
    } catch (e) {
      console.error(`Failed to parse ${key} from localStorage`, e)
    }
  }

  const [signal, setSignal] = createSignal<T>(stored !== undefined ? stored : initial)
  const subscribers = new Set<(val: T) => void>()

  // Persist to localStorage when value changes (isomorphic - server no-op, client persists)
  createEffect(() => {
    const val = signal()
    setStorageItem(key, JSON.stringify(val))
    subscribers.forEach(cb => cb(val))
  })

  return {
    get value(): T {
      return signal()
    },
    set value(val: T) {
      setSignal(val)
    },
    subscribe: (cb: (val: T) => void) => {
      subscribers.add(cb)
      // Call immediately with current value
      cb(signal())
      // Return unsubscribe function
      return () => subscribers.delete(cb)
    }
  }
}

/**
 * Creates a persisted store synced to localStorage
 * Works like persisted() but for complex objects/arrays
 * Uses TanStack Start isomorphic functions for proper SSR handling
 */
export function createPersistedStore<T extends object>(
  key: string,
  initial: T
): [store: Store<T>, setStore: SetStoreFunction<T>, subscribe: (cb: (val: T) => void) => () => void] {
  // Load from localStorage (isomorphic - server returns null, client reads storage)
  let stored: T | undefined
  const item = getStorageItem(key)
  if (item !== null && item !== 'undefined') {
    try {
      stored = JSON.parse(item) as T
    } catch (e) {
      console.error(`Failed to parse ${key} from localStorage`, e)
    }
  }

  const [store, setStore] = createStore<T>(stored || initial)
  const subscribers = new Set<(val: T) => void>()

  // Persist to localStorage when store changes (isomorphic - server no-op, client persists)
  createEffect(() => {
    // Deep clone to ensure we capture full state
    const snapshot = JSON.parse(JSON.stringify(store))
    setStorageItem(key, JSON.stringify(snapshot))
    subscribers.forEach(cb => cb(store))
  })

  const subscribe = (cb: (val: T) => void) => {
    subscribers.add(cb)
    cb(store)
    return () => subscribers.delete(cb)
  }

  return [store, setStore, subscribe]
}
