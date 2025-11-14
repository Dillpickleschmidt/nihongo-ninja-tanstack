import { createSignal, onCleanup } from 'solid-js'
import type { Client, OperationContext, RequestPolicy, TypedDocumentNode } from '@urql/core'
import type { Subscription } from 'wonka'

export interface CreateQueryState<Data = any> {
  fetching: () => boolean
  error: () => any | null
  data: () => Data | undefined
  isPaused: () => boolean
  pause: () => void
  resume: () => void
}

/**
 * Creates a reactive query state object similar to URQL's queryStore in Svelte.
 * This is the SolidJS equivalent that returns reactive signals instead of a store.
 *
 * @param client - URQL client instance
 * @param query - GraphQL document/query
 * @param variables - Query variables (will be read at each execution)
 * @param initialPause - Whether to initially pause the query
 * @param context - Optional URQL operation context
 * @returns Object with reactive signals and control methods
 */
export function createQuery<Data = any, Variables extends object = {}>(
  client: Client,
  query: TypedDocumentNode<Data, Variables>,
  variables: Variables,
  initialPause?: boolean,
  context?: Partial<OperationContext>
): CreateQueryState<Data> {
  const [isPaused, setIsPaused] = createSignal(initialPause ?? false)
  const [fetching, setFetching] = createSignal(false)
  const [error, setError] = createSignal<any>(null)
  const [data, setData] = createSignal<Data | undefined>()

  let subscription: Subscription | undefined

  const execute = () => {
    // Clean up previous subscription
    subscription?.unsubscribe()

    // Don't execute if paused
    if (isPaused()) {
      return
    }

    setFetching(true)
    setError(null)

    // Execute query and subscribe to results
    subscription = client
      .query(query, variables, context)
      .subscribe((result) => {
        setFetching(result.fetching)
        setError(result.error ?? null)
        setData(result.data)
      })
  }

  const pause = () => {
    setIsPaused(true)
    subscription?.unsubscribe()
  }

  const resume = () => {
    setIsPaused(false)
    execute()
  }

  // Cleanup subscription on unmount
  onCleanup(() => {
    subscription?.unsubscribe()
  })

  // Execute immediately if not paused
  if (!isPaused()) {
    execute()
  }

  return {
    fetching,
    error,
    data,
    isPaused,
    pause,
    resume
  }
}
