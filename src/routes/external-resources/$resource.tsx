import { createFileRoute } from "@tanstack/solid-router"
import { Show, lazy, Suspense, createSignal } from "solid-js"
import { external_resources } from "@/data/external_resources"
import ContentBox from "@/components/ContentBox"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"

export const Route = createFileRoute("/external-resources/$resource")({
  loader: async ({ context }) => {
    const { user } = context
    return { user }
  },
  component: ExternalResourcePage,
})

// Utility function to find component path from resource ID
function findComponentPath(resourceId: string): string | null {
  // Find the resource in external_resources data by ID (key)
  const resource = external_resources[resourceId]

  if (!resource || !resource.link) {
    return null
  }

  // Convert link to component path
  // "/external-resources/chapter-0/greetings-japanese-super-immersion"
  // -> "/src/features/external-resources/chapter-0/greetings-japanese-super-immersion"
  return resource.link.replace(
    "/external-resources/",
    "/src/features/external-resources/",
  )
}

function ExternalResourcePage() {
  const { user } = Route.useLoaderData()()
  const { resource } = Route.useParams()()
  const [hasError, setHasError] = createSignal(false)

  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(user?.id || null),
  )

  const componentPath = () => findComponentPath(resource)

  // Dynamic component import
  const DynamicComponent = lazy(async () => {
    try {
      const path = componentPath()
      if (!path) {
        throw new Error(`Component not found for resource: ${resource}`)
      }

      const module = await import(/* @vite-ignore */ path)
      return { default: module.default }
    } catch (error) {
      console.error(
        "Failed to load external resource component:",
        resource,
        error,
      )
      setHasError(true)
      return { default: () => null }
    }
  })

  return (
    <>
      <div class="fixed inset-0 -z-1">
        <TextbookChapterBackgrounds
          textbook={settingsQuery.data["active-textbook"]}
          chapter={settingsQuery.data["active-deck"]}
          showGradient={false}
          blur="16px"
          class="opacity-50"
        />
      </div>
      <div>
        <ContentBox user={user}>
          <Show
            when={!hasError()}
            fallback={
              <div class="flex min-h-[60vh] items-center justify-center">
                <div class="space-y-4 text-center">
                  <h1 class="text-2xl font-semibold">Resource Not Found</h1>
                  <p class="text-muted-foreground">
                    The external resource "{resource}" could not be loaded.
                  </p>
                </div>
              </div>
            }
          >
            <Suspense
              fallback={
                <div class="flex min-h-[60vh] items-center justify-center">
                  <div class="text-muted-foreground">Loading content...</div>
                </div>
              }
            >
              <DynamicComponent />
            </Suspense>
          </Show>
        </ContentBox>
      </div>
    </>
  )
}
