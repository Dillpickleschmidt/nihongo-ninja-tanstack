// routes/guides.tsx
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/queries/user-settings"
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
          textbook={settingsQuery.data["active-textbook"]}
          chapter={settingsQuery.data["active-deck"]}
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
