// features/learn-page/components/content/FeaturedContent.tsx
import { For, createResource } from "solid-js"
import { useQueryClient } from "@tanstack/solid-query"
import { Play } from "lucide-solid"
import { useAnimationManager } from "@/hooks/useAnimations"
import { ResourceCardWrapper } from "./ResourceDialog"
import { Route } from "@/routes/_home/learn/$textbookId.$chapterSlug"

interface FeaturedContentProps {
  variant?: "mobile" | "desktop"
}

export function FeaturedContent(props: FeaturedContentProps = {}) {
  const variant = props.variant || "desktop"

  if (variant === "mobile") {
    return <MobileFeaturedContent />
  }

  return <DesktopFeaturedContent />
}

// ============================================================================
// Mobile Implementation
// ============================================================================

function MobileFeaturedContent() {
  return (
    <div class="px-6 py-4">
      <div class="mb-4">
        <h2 class="text-xl font-bold">Featured Content</h2>
        <p class="text-muted-foreground">You might enjoy</p>
      </div>
      <MobileFeaturedContentGrid />
    </div>
  )
}

// ============================================================================
// Desktop Implementation
// ============================================================================

function DesktopFeaturedContent() {
  return (
    <div
      data-content-section
      data-transition-content
      class="space-y-1"
      data-animate="featured-content"
    >
      <FeaturedContentHeader />
      <FeaturedContentGrid />
    </div>
  )
}

// ============================================================================
// Header and Grid Components
// ============================================================================
function FeaturedContentHeader() {
  return (
    <div class="flex items-center justify-between px-8">
      <div>
        <h2 class="text-2xl font-bold">Featured Content</h2>
        <p class="text-muted-foreground">You might enjoy</p>
      </div>
      <button class="bg-primary/10 flex items-center gap-2 rounded-lg px-4 py-2.5 transition-colors hover:opacity-80">
        <Play class="h-4 w-4" />
        <span class="text-sm font-medium">Start Studying</span>
      </button>
    </div>
  )
}

function FeaturedContentGrid() {
  const loaderData = Route.useLoaderData()
  const queryClient = useQueryClient()

  const resourcesArray = () => Object.values(loaderData().externalResources)
  const { animateOnDataChange } = useAnimationManager()

  // Centralized animation management - trigger when resources change
  animateOnDataChange(["[data-featured-content-item]"], resourcesArray)

  return (
    <div class="mx-7 flex gap-6 overflow-x-auto px-1 pt-3 pb-3">
      <For each={resourcesArray()}>
        {(resource, index) => {
          const [thumbnailUrl] = createResource(async () => {
            const data = await loaderData().resourceThumbnails[index()]
            // Populate cache for future navigations
            queryClient.setQueryData(["resource-thumbnail", resource.id], data)
            return data
          })

          return (
            <div class="flex-shrink-0">
              <ResourceCardWrapper
                resource={resource}
                thumbnailUrl={thumbnailUrl}
                variant="desktop"
              />
            </div>
          )
        }}
      </For>
    </div>
  )
}

function MobileFeaturedContentGrid() {
  const loaderData = Route.useLoaderData()
  const queryClient = useQueryClient()

  const resourcesArray = () => Object.values(loaderData().externalResources)

  return (
    <div class="grid grid-cols-1 gap-4">
      <For each={resourcesArray()}>
        {(resource, index) => {
          const [thumbnailUrl] = createResource(async () => {
            const data = await loaderData().resourceThumbnails[index()]
            // Populate cache for future navigations
            queryClient.setQueryData(["resource-thumbnail", resource.id], data)
            return data
          })

          return (
            <ResourceCardWrapper
              resource={resource}
              thumbnailUrl={thumbnailUrl}
              variant="mobile"
            />
          )
        }}
      </For>
    </div>
  )
}
