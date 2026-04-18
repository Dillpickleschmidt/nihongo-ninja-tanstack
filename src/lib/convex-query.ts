import { createIsomorphicFn } from "@tanstack/solid-start"
import { useQueryClient } from "@tanstack/solid-query"
import { useQuery as useConvexSolidQuery } from "convex-solidjs"
import { createEffect } from "solid-js"
import { isServer } from "solid-js/web"
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
        const { fetchAuthenticatedConvexQuery } = await import("./auth-server")
        return fetchAuthenticatedConvexQuery(query, args)
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
        const { fetchAuthenticatedConvexAction } =
          await import("./auth-server")
        return fetchAuthenticatedConvexAction(action, args)
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
        const { fetchAuthenticatedConvexMutation } =
          await import("./auth-server")
        return fetchAuthenticatedConvexMutation(mutation, args)
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

function resolve<T>(value: MaybeAccessor<T>): T {
  return typeof value === "function" ? (value as () => T)() : value
}

// Bridges convex-solidjs with TQ cache for instant client-side navigations.
export function useConvexQuery<Query extends FunctionReference<"query">>(
  query: Query,
  args: MaybeAccessor<FunctionArgs<Query>>,
  options?: MaybeAccessor<{ enabled?: boolean }>,
) {
  const queryClient = useQueryClient()
  const resolvedArgs = () => resolve(args)
  const queryKey = () => getQueryKey(query, resolvedArgs())

  // On client only, check TQ cache for data from a previous visit or loader
  const cached = isServer ? undefined : queryClient.getQueryData(queryKey())

  const result = useConvexSolidQuery(query, args, () => ({
    ...resolve(options),
    ...(cached !== undefined ? { initialData: cached } : {}),
  }))

  // Sync live data back to TQ cache for future navigations
  createEffect(() => {
    const data = result.data()
    if (data === undefined) return
    queryClient.setQueryData(queryKey(), data)
  })

  return result
}
