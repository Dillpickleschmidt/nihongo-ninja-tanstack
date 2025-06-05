// app/routes/learn/_learn.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import ContentBox from "@/components/ContentBox"

export const Route = createFileRoute("/learn/_learn")({
  loader: async ({ context }) => {
    const { user } = context
    return { user }
  },
  component: LearnLayout,
})

function LearnLayout() {
  const { user } = Route.useLoaderData()()

  return (
    <ContentBox user={user}>
      <Outlet />
    </ContentBox>
  )
}
