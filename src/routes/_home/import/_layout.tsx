// src/routes/_home/import/_layout.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { queryKeys } from "@/query/utils/query-keys"

export const Route = createFileRoute("/_home/import/_layout")({
  loader: async ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 16,
      backgroundOpacityOffset: -0.3,
      showGradient: true,
    })
  },
  component: ImportWrapper,
})

function ImportWrapper() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
