import { createFileRoute, Outlet } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/extracurriculars-v2")({
  component: () => {
    return <Outlet />
  },
})
