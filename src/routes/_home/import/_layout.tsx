// src/routes/_home/import/_layout.tsx
import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/solid-router"
import { ChevronLeft } from "lucide-solid"
import { queryKeys } from "@/query/utils/query-keys"

export const Route = createFileRoute("/_home/import/_layout")({
  loader: async ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 16,
      backgroundOpacityOffset: -0.25,
      showGradient: true,
    })
  },
  component: ImportWrapper,
})

const ROUTE_CONFIG = {
  "manual": {
    title: "Mark What You Know",
    subtitle: "Select items you've seen before",
  },
  "automatic": {
    title: "Import from File",
    subtitle: "Upload Anki or JPDB exports to sync progress",
  },
}

function ImportWrapper() {
  const location = useLocation()

  // Determine current route config
  const getRouteConfig = () => {
    for (const [route, config] of Object.entries(ROUTE_CONFIG)) {
      if (location().pathname.includes(route)) {
        return config
      }
    }
    return null
  }

  const routeConfig = () => getRouteConfig()

  return (
    <div class="animate-in fade-in slide-in-from-bottom-4 min-h-screen w-full duration-500">
      {/* STICKY HEADER */}
      {routeConfig() && (
        <header class="bg-neutral-900 sticky top-0 z-40 w-full shadow-sm backdrop-blur-md">
          <div class="container flex h-16 items-center justify-between px-4 md:px-8">
            <div class="flex items-center gap-4">
              <Link
                to="/import"
                class="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/5"
              >
                <ChevronLeft class="size-5" />
              </Link>
              <div>
                <h1 class="text-foreground text-lg leading-none font-bold tracking-tight md:text-xl">
                  {routeConfig()?.title}
                </h1>
                <p class="text-muted-foreground hidden text-xs md:block">
                  {routeConfig()?.subtitle}
                </p>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* CONTENT */}
      <Outlet />
    </div>
  )
}
