import { createSignal, createStore, createEffect } from 'solid-js'
import type { Store, SetStoreFunction } from 'solid-js/store'

/**
 * Creates a persisted signal-like object synced to localStorage
 * Works like Svelte's persisted() store but with SolidJS
 */
export function createPersisted<T>(
  key: string,
  initial: T
): {
  value: T
  set value(val: T)
  get value(): T
  subscribe: (cb: (val: T) => void) => () => void
} {
  // Load from localStorage
  let stored: T | undefined
  try {
    const item = localStorage.getItem(key)
    if (item !== null) {
      stored = JSON.parse(item) as T
    }
  } catch (e) {
    console.error(`Failed to load ${key} from localStorage`, e)
  }

  const [signal, setSignal] = createSignal<T>(stored !== undefined ? stored : initial)
  const subscribers = new Set<(val: T) => void>()

  // Persist to localStorage when value changes
  createEffect(() => {
    const val = signal()
    localStorage.setItem(key, JSON.stringify(val))
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
 */
export function createPersistedStore<T extends object>(
  key: string,
  initial: T
): [store: Store<T>, setStore: SetStoreFunction<T>, subscribe: (cb: (val: T) => void) => () => void] {
  // Load from localStorage
  let stored: T | undefined
  try {
    const item = localStorage.getItem(key)
    if (item !== null) {
      stored = JSON.parse(item) as T
    }
  } catch (e) {
    console.error(`Failed to load ${key} from localStorage`, e)
  }

  const [store, setStore] = createStore<T>(stored || initial)
  const subscribers = new Set<(val: T) => void>()

  // Persist to localStorage when store changes
  createEffect(() => {
    // Deep clone to ensure we capture full state
    const snapshot = JSON.parse(JSON.stringify(store))
    localStorage.setItem(key, JSON.stringify(snapshot))
    subscribers.forEach(cb => cb(store))
  })

  const subscribe = (cb: (val: T) => void) => {
    subscribers.add(cb)
    cb(store)
    return () => subscribers.delete(cb)
  }

  return [store, setStore, subscribe]
}
