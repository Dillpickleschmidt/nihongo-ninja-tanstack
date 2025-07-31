// routes/_home/learn/index.tsx
import { createFileRoute, redirect } from "@tanstack/solid-router"
import { getUserPreferencesFromDBServerFn } from "@/features/main-cookies/server/server-functions"

export const Route = createFileRoute("/_home/learn/")({
  beforeLoad: ({ context }) => {
    const preferences = context.initialUserPreferenceData

    // Case 1: Have cookie preferences - redirect immediately (fast)
    if (
      preferences?.timestamp > 0 &&
      preferences["active-textbook"] &&
      preferences["active-deck"]
    ) {
      throw redirect({
        to: "/learn/$textbookId/$chapterSlug",
        params: {
          textbookId: preferences["active-textbook"],
          chapterSlug: preferences["active-deck"],
        },
      })
    }
  },
  loader: async ({ context }) => {
    const { user, initialUserPreferenceData } = context
    const preferences = initialUserPreferenceData

    // Case 2: No cookie but have user - await DB fetch (only for new devices)
    if (preferences?.timestamp === 0 && user) {
      const dbPreferences = await getUserPreferencesFromDBServerFn({
        data: user.id,
      })

      if (dbPreferences["active-textbook"] && dbPreferences["active-deck"]) {
        throw redirect({
          to: "/learn/$textbookId/$chapterSlug",
          params: {
            textbookId: dbPreferences["active-textbook"],
            chapterSlug: dbPreferences["active-deck"],
          },
        })
      }
    }

    // Case 3: No preferences anywhere - use fallback
    throw redirect({
      to: "/learn/$textbookId/$chapterSlug",
      params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
    })
  },
})
