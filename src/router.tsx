// src/router.tsx
import { createRouter as createTanStackRouter } from "@tanstack/solid-router"
import { QueryClient, dehydrate, hydrate } from "@tanstack/solid-query"
import { routeTree } from "./routeTree.gen"

export function createRouter() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 30, // 30 minutes
      },
    },
  })

  const router = createTanStackRouter({
    routeTree,
    context: {
      queryClient,
    },
    scrollRestoration: true,
    // Not using dehydrate/hydrate because we're using defer() for streaming
    // Dehydration happens before deferred queries complete, so cache is empty
  })

  return router
}

declare module "@tanstack/solid-router" {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
