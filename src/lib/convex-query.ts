import { createIsomorphicFn } from '@tanstack/solid-start'
import { useQuery as useConvexSolidQuery } from 'convex-solidjs'
import { useQueryClient } from '@tanstack/solid-query'
import type { FunctionReference, FunctionArgs, FunctionReturnType } from 'convex/server'

// Symbol used by Convex to store function name on FunctionReference
const functionNameSymbol = Symbol.for('functionName')

// Get a serializable key from a function reference
function getQueryKey<Query extends FunctionReference<'query'>>(
  query: Query,
  args: FunctionArgs<Query>
) {
  const name = (query as any)[functionNameSymbol] as string
  return ['convex', name, JSON.stringify(args)] as const
}

// For loaders - isomorphic (works on both server and client)
export const convexQuery = createIsomorphicFn()
  .server(
    <Query extends FunctionReference<'query'>>(
      query: Query,
      args: FunctionArgs<Query>
    ) => ({
      queryKey: getQueryKey(query, args),
      queryFn: async () => {
        const { fetchQuery } = await import('./auth-server')
        return fetchQuery(query, args)
      },
    })
  )
  .client(
    <Query extends FunctionReference<'query'>>(
      query: Query,
      args: FunctionArgs<Query>
    ) => ({
      queryKey: getQueryKey(query, args),
      queryFn: async () => {
        const { convexClient } = await import('@/providers/convex')
        return convexClient.query(query, args)
      },
    })
  )

type MaybeAccessor<T> = T | (() => T)

interface QueryOptions {
  enabled?: boolean
}

// Helper to unwrap MaybeAccessor (matches convex-solidjs pattern)
function resolve<T>(value: MaybeAccessor<T>): T {
  return typeof value === 'function' ? (value as () => T)() : value
}

// For components - bridges TanStack cache + convex-solidjs live updates
export function useConvexQuery<Query extends FunctionReference<'query'>>(
  query: Query,
  args: MaybeAccessor<FunctionArgs<Query>>,
  options?: MaybeAccessor<QueryOptions>
) {
  const queryClient = useQueryClient()

  const live = useConvexSolidQuery(query, args, () => {
    const resolvedArgs = resolve(args)
    const queryKey = getQueryKey(query, resolvedArgs)
    const cached = queryClient.getQueryData<FunctionReturnType<Query>>(queryKey)

    return {
      ...resolve(options),
      initialData: cached,
    }
  })

  return {
    data: () => {
      const liveData = live.data()
      if (liveData !== undefined) {
        const queryKey = getQueryKey(query, resolve(args))
        // sync live data to TQ cache
        queryClient.setQueryData(queryKey, liveData)
      }
      return liveData
    },
    error: live.error,
    isLoading: live.isLoading,
    isStale: live.isStale,
    refetch: live.refetch,
  }
}
