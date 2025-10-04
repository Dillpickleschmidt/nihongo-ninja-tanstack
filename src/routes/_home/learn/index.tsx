// routes/_home/learn/index.tsx
import { createFileRoute, redirect } from "@tanstack/solid-router"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"

export const Route = createFileRoute("/_home/learn/")({
  loader: async ({ context }) => {
    const { user, queryClient } = context

    // Get settings from query cache (already loaded in root)
    const settings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    // Redirect to active textbook/chapter if set
    if (settings["active-textbook"] && settings["active-deck"]) {
      throw redirect({
        to: "/learn/$textbookId/$chapterSlug",
        params: {
          textbookId: settings["active-textbook"],
          chapterSlug: settings["active-deck"],
        },
      })
    }

    // Fallback to chapter-0
    throw redirect({
      to: "/learn/$textbookId/$chapterSlug",
      params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
    })
  },
})
