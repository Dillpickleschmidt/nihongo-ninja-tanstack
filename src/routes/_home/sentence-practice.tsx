import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/_home/sentence-practice')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/sentence-practice"!</div>
}
