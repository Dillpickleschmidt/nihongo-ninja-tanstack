// legacy route gets redirected
import { createFileRoute, redirect } from "@tanstack/solid-router"

export const Route = createFileRoute(
  "/_home/learn/additional-resources/kanji-practice-sheet",
)({
  beforeLoad: () => {
    throw redirect({ to: "/additional-resources/kanji-practice-sheet" })
  },
})
