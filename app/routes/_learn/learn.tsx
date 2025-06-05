// app/routes/_learn/learn.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import ContentBox from "@/components/ContentBox"

export const Route = createFileRoute("/_learn/learn")({
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
