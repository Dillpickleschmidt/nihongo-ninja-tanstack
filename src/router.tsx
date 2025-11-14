// src/router.tsx
import { createRouter } from "@tanstack/solid-router"
import { routeTree } from "./routeTree.gen"
import { dehydrate, hydrate, QueryClient } from "@tanstack/solid-query"

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

  return createRouter({
    routeTree,
    context: {
      queryClient,
    },
    scrollRestoration: true,
    dehydrate: () => {
      return {
        queryClientState: dehydrate(queryClient, {
          shouldDehydrateQuery: () => true, // Include all queries (even pending)
          shouldDehydrateMutation: () => true, // Include all mutations
        }),
      } as any
    },
    hydrate: (dehydrated) => {
      hydrate(queryClient, dehydrated.queryClientState)
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
