// src/router.tsx
import { createRouter } from "@tanstack/solid-router"
import { routeTree } from "./routeTree.gen"
import { dehydrate, hydrate, QueryClient } from "@tanstack/solid-query"
import type { Client as UrqlClient, SSRExchange } from '@urql/core'
import { createUrqlClient } from "@/features/extracurriculars/api/anilist"

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

  // Create URQL client with SSR support
  const { client: urqlClient, ssr: urqlSSR } = createUrqlClient()

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
      if (dehydrated.urqlState) {
        urqlSSR.restoreData(dehydrated.urqlState)
      }
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
