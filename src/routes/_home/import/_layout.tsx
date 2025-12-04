import { createFileRoute, Outlet, useMatches } from "@tanstack/solid-router"
import { Show } from "solid-js"
import { ImportHeader } from "@/features/import-page/shared/components/ImportHeader"

interface HeaderConfig {
  title: string
  backLabel?: string
  backTo?: string
}

export const Route = createFileRoute("/_home/import/_layout")({
  component: ImportLayoutComponent,
})

function ImportLayoutComponent() {
  const matches = useMatches()

  const headerConfig = (): HeaderConfig | undefined => {
    const childMatch = matches().findLast(
      (m) => (m.staticData as { headerConfig?: HeaderConfig })?.headerConfig
    )
    return (childMatch?.staticData as { headerConfig?: HeaderConfig })?.headerConfig
  }

  return (
    <>
      <Show when={headerConfig()}>
        {(config) => (
          <div class="fixed top-0 left-0 right-0 z-20 mx-auto max-w-7xl px-2 pt-4">
            <ImportHeader
              title={config().title}
              backLabel={config().backLabel}
              backTo={config().backTo}
            />
          </div>
        )}
      </Show>
      <Outlet />
    </>
  )
}
