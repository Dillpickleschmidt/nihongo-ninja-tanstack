// src/router.tsx
import { createRouter } from "@tanstack/solid-router"
import { routeTree } from "./routeTree.gen"
import { isServer } from "solid-js/web"
import { dehydrate, hydrate, QueryClient } from "@tanstack/solid-query"
import { createUrqlClient } from "@/features/explore/api/anilist/urql-client"

export function getRouter() {
  // Create a new QueryClient for each request (server) or app initialization (client)
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24,
        staleTime: Infinity,
      },
    },
  })

  // Create URQL client for each request (server) or app initialization (client)
  const { client: urqlClient, ssr: urqlSSR } = createUrqlClient(isServer)

  return createRouter({
    routeTree,
    context: {
      queryClient,
      urqlClient,
      urqlSSR,
    },
    scrollRestoration: true,
    dehydrate: () => {
      return {
        queryClientState: dehydrate(queryClient, {
          shouldDehydrateQuery: () => true, // Include all queries (even pending)
          shouldDehydrateMutation: () => true, // Include all mutations
        }),
        urqlState: urqlSSR.extractData(),
      } as any
    },
    hydrate: (dehydrated) => {
      hydrate(queryClient, dehydrated.queryClientState)
      urqlSSR.restoreData(dehydrated.urqlState)
    },
    // notFoundMode: "root",
    defaultNotFoundComponent: () => (
      <div class="flex min-h-screen items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl font-bold">404</h1>
          <p class="mt-2 text-lg">Page not found</p>
        </div>
      </div>
    ),
  })
}
