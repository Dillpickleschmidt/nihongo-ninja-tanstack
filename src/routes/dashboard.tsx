// routes/dashboard.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"

export const Route = createFileRoute("/dashboard")({
  beforeLoad: ({ context }) => {
    return {
      user: context.user,
    }
  },
  loader: async ({ context }) => {
    const { user } = context
    return {
      user,
    }
  },
  component: LayoutComponent,
})

function LayoutComponent() {
  return <Outlet />
}
