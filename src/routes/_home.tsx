import { Suspense } from "solid-js"
import { createFileRoute, Outlet, useNavigate } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { authClient } from "@/lib/auth-client"
import { BottomNav } from "@/features/navbar/Nav"
import { TextbookChapterBackgrounds } from "@/components/TextbookChapterBackgrounds"
import { Sidebar } from "@/features/sidebar/Sidebar"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"

export const Route = createFileRoute("/_home")({
  component: HomeLayout,
})

function HomeLayout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const handleSignOut = async () => {
    await authClient.signOut()
    queryClient.invalidateQueries({ queryKey: ["auth"] })
    navigate({ to: "/" })
  }

  return (
    <>
      <Suspense>
        <TextbookChapterBackgrounds />
      </Suspense>

      <Outlet />

      <SSRMediaQuery showFrom="md">
        <Sidebar animated={false} onSignOut={handleSignOut} />
      </SSRMediaQuery>

      <BottomNav dailyProgressPercentage={65} />
    </>
  )
}
