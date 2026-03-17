import { createFileRoute } from "@tanstack/solid-router"
import { Suspense, lazy } from "solid-js"

export const Route = createFileRoute("/_home/external-resources/$resource")({
  loader: ({ params }) => {
    import(
      /* @vite-ignore */ `/src/features/external-resources/${params.resource}.tsx`
    )
  },
  errorComponent: ({ error }) => (
    <div class="flex min-h-[60vh] items-center justify-center">
      <div class="space-y-4 text-center">
        <h1 class="text-2xl font-semibold">Resource Not Found</h1>
        <p class="text-muted-foreground">{error.message}</p>
      </div>
    </div>
  ),
  component: ExternalResourcePage,
})

function ExternalResourcePage() {
  const params = Route.useParams()

  const DynamicComponent = lazy(
    () =>
      import(
        /* @vite-ignore */ `/src/features/external-resources/${params().resource}.tsx`
      ),
  )

  return (
    <Suspense
      fallback={
        <div class="flex min-h-[60vh] items-center justify-center">
          <div class="text-muted-foreground">Loading content...</div>
        </div>
      }
    >
      <DynamicComponent />
    </Suspense>
  )
}
