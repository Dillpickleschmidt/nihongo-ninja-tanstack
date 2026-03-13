import { createFileRoute, Link } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/misc/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mx-auto max-w-4xl space-y-4 p-6">
      <h1 class="text-xl font-semibold">Misc</h1>
      <ul class="space-y-2">
        <li>
          <Link
            href="/misc/kanji-practice-sheet"
            class="text-primary hover:underline"
          >
            Kanji Practice Sheet
          </Link>
        </li>
      </ul>
    </div>
  )
}
