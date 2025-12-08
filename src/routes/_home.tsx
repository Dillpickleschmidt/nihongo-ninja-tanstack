import { createFileRoute, Outlet, useNavigate } from '@tanstack/solid-router'
import { useQueryClient } from '@tanstack/solid-query'
import { authClient } from '@/lib/auth-client'
import { TopNav, BottomNav } from '@/features/navbar/Nav'
import { TextbookChapterBackgrounds } from '@/components/TextbookChapterBackgrounds'
import { Sidebar } from '@/features/sidebar/Sidebar'
import { SSRMediaQuery } from '@/components/SSRMediaQuery'

export const Route = createFileRoute('/_home')({
  component: HomeLayout,
})

function HomeLayout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const handleSignOut = async () => {
    await authClient.signOut()
    queryClient.invalidateQueries({ queryKey: ['auth'] })
    navigate({ to: '/' })
  }

  const dailyProgress = 65

  return (
    <>
      <TextbookChapterBackgrounds blur={8} opacityOffset={0} showGradient={true} />

      <TopNav dailyProgressPercentage={dailyProgress} onSignOut={handleSignOut} />

      <Outlet />

      <SSRMediaQuery showFrom="md">
        <Sidebar user={null} />
      </SSRMediaQuery>

      <BottomNav dailyProgressPercentage={dailyProgress} class="md:hidden" />
    </>
  )
}
