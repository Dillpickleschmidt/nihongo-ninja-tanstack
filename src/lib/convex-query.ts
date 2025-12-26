import { createIsomorphicFn } from "@tanstack/solid-start"
import { useQuery as useConvexSolidQuery } from "convex-solidjs"
import { useQueryClient } from "@tanstack/solid-query"
import type {
  FunctionReference,
  FunctionArgs,
  FunctionReturnType,
} from "convex/server"

// Symbol used by Convex to store function name on FunctionReference
const functionNameSymbol = Symbol.for("functionName")

// Get a serializable key from a function reference
function getQueryKey<Query extends FunctionReference<"query">>(
  query: Query,
  args: FunctionArgs<Query>,
) {
  const name = (query as any)[functionNameSymbol] as string
  return ["convex", name, JSON.stringify(args)] as const
}

// For loaders - isomorphic (works on both server and client)
export const convexQuery = createIsomorphicFn()
  .server(
    <Query extends FunctionReference<"query">>(
      query: Query,
      args: FunctionArgs<Query>,
    ) => ({
      queryKey: getQueryKey(query, args),
      queryFn: async () => {
        const { fetchQuery } = await import("./auth-server")
        return fetchQuery(query, args)
      },
    }),
  )
  .client(
    <Query extends FunctionReference<"query">>(
      query: Query,
      args: FunctionArgs<Query>,
    ) => ({
      queryKey: getQueryKey(query, args),
      queryFn: async () => {
        const { convexQueryClient } = await import("@/providers/convex")
        return convexQueryClient.client.query(query, args)
      },
    }),
  )

// For actions - isomorphic (works on both server and client)
export const convexAction = createIsomorphicFn()
  .server(
    <Action extends FunctionReference<"action">>(
      action: Action,
      args: FunctionArgs<Action>,
    ) =>
      async (): Promise<FunctionReturnType<Action>> => {
        const { fetchAction } = await import("./auth-server")
        return fetchAction(action, args)
      },
  )
  .client(
    <Action extends FunctionReference<"action">>(
      action: Action,
      args: FunctionArgs<Action>,
    ) =>
      async (): Promise<FunctionReturnType<Action>> => {
        const { convexQueryClient } = await import("@/providers/convex")
        return convexQueryClient.client.action(action, args)
      },
  )

// For mutations - isomorphic (works on both server and client)
export const convexMutation = createIsomorphicFn()
  .server(
    <Mutation extends FunctionReference<"mutation">>(
      mutation: Mutation,
      args: FunctionArgs<Mutation>,
    ) =>
      async (): Promise<FunctionReturnType<Mutation>> => {
        const { fetchMutation } = await import("./auth-server")
        return fetchMutation(mutation, args)
      },
  )
  .client(
    <Mutation extends FunctionReference<"mutation">>(
      mutation: Mutation,
      args: FunctionArgs<Mutation>,
    ) =>
      async (): Promise<FunctionReturnType<Mutation>> => {
        const { convexQueryClient } = await import("@/providers/convex")
        return convexQueryClient.client.mutation(mutation, args)
      },
  )

type MaybeAccessor<T> = T | (() => T)

interface QueryOptions {
  enabled?: boolean
}

// Helper to unwrap MaybeAccessor (matches convex-solidjs pattern)
function resolve<T>(value: MaybeAccessor<T>): T {
  return typeof value === "function" ? (value as () => T)() : value
}

// For components - bridges TanStack cache + convex-solidjs live updates
export function useConvexQuery<Query extends FunctionReference<"query">>(
  query: Query,
  args: MaybeAccessor<FunctionArgs<Query>>,
  options?: MaybeAccessor<QueryOptions>,
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
