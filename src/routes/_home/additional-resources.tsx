// routes/guides.tsx
import { useSettings } from "@/context/SettingsContext"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import { createFileRoute, Outlet } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/additional-resources")({
  component: RouteComponent,
})

function RouteComponent() {
  const { userPreferences } = useSettings()

  return (
    <>
      <div class="fixed inset-0 -z-1">
        <TextbookChapterBackgrounds
          textbook={userPreferences()["active-textbook"]}
          chapter={userPreferences()["active-deck"]}
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
