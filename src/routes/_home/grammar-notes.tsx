import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/_home/grammar-notes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/grammar-notes"!</div>
}
