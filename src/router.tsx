// src/router.tsx
import { createRouter as createTanStackRouter } from "@tanstack/solid-router"
import { QueryClient, dehydrate, hydrate } from "@tanstack/solid-query"
import { routeTree } from "./routeTree.gen"

export function createRouter() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24,
        staleTime: Infinity,
      },
    },
  })

  const router = createTanStackRouter({
    routeTree,
    context: {
      queryClient,
    },
    scrollRestoration: true,
    dehydrate: () => {
      return {
        queryClientState: dehydrate(queryClient, {
          shouldDehydrateQuery: () => true, // Include all queries (even pending)
        }),
      }
    },
    hydrate: (dehydrated) => {
      hydrate(queryClient, dehydrated.queryClientState)
    }
  })

  return router
}

declare module "@tanstack/solid-router" {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
