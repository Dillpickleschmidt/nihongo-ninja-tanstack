import { createFileRoute } from "@tanstack/solid-router"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { BrowsePage } from "@/features/vocab-page/pages/browse/BrowsePage"

export const Route = createFileRoute("/_home/vocab/browse")({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(
      convexQuery(api.api.sharing.getSharedDecks, {
        sortBy: "recent",
        limit: 20,
        offset: 0,
      }),
    )
  },
  component: BrowsePage,
})
