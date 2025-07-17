// routes/dashboard/index.tsx
import { createFileRoute, redirect } from "@tanstack/solid-router"
import { getActiveDeckInfo } from "@/data/utils/core"
import { getRequestHeader } from "@tanstack/solid-start/server"
import { isServer } from "solid-js/web"
import { serverOnly } from "@tanstack/solid-start"

export const Route = createFileRoute("/dashboard/")({
  beforeLoad: () => {
    const cookieHeader = isServer
      ? serverOnly(() => getRequestHeader("Cookie") || "")()
      : document.cookie
    const activeDeckInfo = getActiveDeckInfo(cookieHeader)

    if (activeDeckInfo) {
      const { sourceType, sourceId, deckSlug } = activeDeckInfo

      if (sourceType === "textbook") {
        throw redirect({
          to: "/dashboard/$textbookId/$chapterSlug",
          params: { textbookId: sourceId, chapterSlug: deckSlug },
        })
      } else if (sourceType === "service") {
        throw redirect({
          to: "/dashboard/$serviceId",
          params: { serviceId: sourceId },
        })
      } else if (sourceType === "user") {
        throw redirect({
          to: "/dashboard/$userId",
          params: { userId: sourceId },
        })
      }
    }

    // Default fallback
    throw redirect({
      to: "/dashboard/$textbookId/$chapterSlug",
      params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
    })
  },
})
