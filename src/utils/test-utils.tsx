import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createMemoryHistory,
} from "@tanstack/solid-router"
import { render } from "@solidjs/testing-library"
import type { JSX } from "solid-js"

export function renderWithRouter(ui: () => JSX.Element) {
  const rootRoute = createRootRoute()

  const router = createRouter({
    routeTree: rootRoute,
    history: createMemoryHistory({ initialEntries: ["/"] }),
    defaultComponent: ui,
  })

  return render(() => <RouterProvider router={router} />)
}

export * from "@solidjs/testing-library"
