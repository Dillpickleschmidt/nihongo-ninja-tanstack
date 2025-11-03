// routes/guides.tsx
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import { createFileRoute, Outlet } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/additional-resources")({
  loader: async ({ context }) => {
    const { user } = context
    return { user }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { user } = Route.useLoaderData()()
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(user?.id || null),
  )

  return (
    <>
      <div class="fixed inset-0 -z-1">
        <TextbookChapterBackgrounds
          textbook={settingsQuery.data["active-learning-path"]}
          chapter={settingsQuery.data["active-chapter"]}
          showGradient={false}
          blur="16px"
          class="opacity-50"
        />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
