import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/import/_layout/automatic")({
  component: AutomaticImportPage,
})

function AutomaticImportPage() {
  return <div>Hello</div>
}
