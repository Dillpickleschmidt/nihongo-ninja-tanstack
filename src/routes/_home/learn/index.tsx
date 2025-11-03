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

    // Redirect to active textbook/chapter
    throw redirect({
      to: "/learn/$textbookId/$chapterSlug",
      params: {
        textbookId: settings["active-learning-path"],
        chapterSlug: settings["active-chapter"],
      },
    })
  },
})
