// hooks/useCustomQuery.ts
import {
  useQuery,
  useQueryClient,
  type QueryOptions,
  type UseQueryResult,
} from "@tanstack/solid-query"
import { QueryObserver } from "@tanstack/query-core"
import { createIsomorphicFn } from "@tanstack/solid-start"
import { createResource } from "solid-js"
import type { QueryClient } from "@tanstack/solid-query"

/**
 * Drop-in replacement for useQuery that works around SSR hanging bug.
 * Server: Uses createResource with ensureQueryData (awaits prefetched data).
 * Client: Uses standard useQuery.
 */
export function useCustomQuery<TData>(
  options: () => QueryOptions<TData>,
): UseQueryResult<TData, Error> {
  const queryClient = useQueryClient()

  return createIsomorphicFn()
    .server(function (queryClient: QueryClient, options) {
      const observer = new QueryObserver(queryClient, options)

      // Check if data is already available synchronously
      const cachedData = queryClient.getQueryData(options.queryKey)
      const hasCachedData = cachedData !== undefined

      // Only use createResource if data is not cached (for Suspense integration)
      const [data] = hasCachedData
        ? [() => cachedData as TData]
        : createResource(() => queryClient.ensureQueryData(options))

      // Proxy to get fresh snapshot on every property access
      return new Proxy({} as UseQueryResult<TData, Error>, {
        get(_target, prop) {
          const result = observer.getOptimisticResult(options)

          if (prop === "data") {
            // If observer has placeholderData, use it (avoid Suspense)
            if (result.data !== undefined) {
              return result.data
            }
            // Otherwise use resource (triggers Suspense if pending)
            return data()
          }

          return result[prop as keyof typeof result]
        },
      })
    })
    .client(function (_queryClient: QueryClient, options) {
      return useQuery(() => options)
    })(queryClient, options()) as UseQueryResult<TData, Error>
}
