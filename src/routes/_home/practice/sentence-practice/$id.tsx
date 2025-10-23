import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import PracticeContainer from "@/features/sentence-practice/ui/practice/PracticeContainer"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { Route as RootRoute } from "@/routes/__root"

export const Route = createFileRoute("/_home/practice/sentence-practice/$id")({
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams()
  const context = useRouteContext({ from: RootRoute.id })
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )
  return (
    <>
      <div class="fixed inset-0 -z-1">
        <TextbookChapterBackgrounds
          textbook={settingsQuery.data!["active-textbook"]}
          chapter={settingsQuery.data!["active-deck"]}
          showGradient={false}
          blur="4px"
          class="opacity-40"
        />
      </div>
      <PracticeContainer
        path={params().id}
        moduleId={`sentence-practice-${params().id}`}
      />
    </>
  )
}
