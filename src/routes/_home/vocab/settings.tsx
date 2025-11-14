import { createFileRoute } from "@tanstack/solid-router"
import { OverridesContent } from "@/features/vocab-page/pages/settings/OverridesContent"
import { Route as VocabParentRoute } from "@/routes/_home/vocab"

export const Route = createFileRoute("/_home/vocab/settings")({
  component: RouteComponent,
})

function RouteComponent() {
  const parentData = VocabParentRoute.useLoaderData()()

  return <OverridesContent user={parentData.user || null} />
}
