// features/learn-page/components/content/FeaturedContent.tsx
import { For } from "solid-js"
import { useAnimationManager } from "@/hooks/useAnimations"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { resourceThumbnailQueryOptions } from "@/features/learn-page/query/query-options"
import { ResourceCardWrapper } from "./ResourceDialog"
import { Route } from "@/routes/_home/learn/$textbookId"

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
    <div class="space-y-1">
      <div class="px-8">
        <h2 class="text-2xl font-bold">Featured Content</h2>
        <p class="text-muted-foreground">You might enjoy</p>
      </div>

      <FeaturedContentGrid />
    </div>
  )
}

function FeaturedContentGrid() {
  const loaderData = Route.useLoaderData()

  const resourcesArray = () => Object.values(loaderData().externalResources)
  const { animateOnDataChange } = useAnimationManager()

  // Centralized animation management - trigger when resources change
  animateOnDataChange(["[data-featured-item]"], resourcesArray)

  return (
    <div class="mx-7 flex gap-6 overflow-x-auto px-1 pt-3 pb-3">
      <For each={resourcesArray()}>
        {(resource) => {
          const thumbnailQuery = useCustomQuery(() =>
            resourceThumbnailQueryOptions(
              resource.id,
              resource.external_url,
              resource.creator_id,
            ),
          )

          return (
            <div class="flex-shrink-0">
              <ResourceCardWrapper
                resource={resource}
                thumbnailUrl={() => thumbnailQuery.data}
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

  const resourcesArray = () => Object.values(loaderData().externalResources)

  return (
    <div class="grid grid-cols-1 gap-4">
      <For each={resourcesArray()}>
        {(resource) => {
          const thumbnailQuery = useCustomQuery(() =>
            resourceThumbnailQueryOptions(
              resource.id,
              resource.external_url,
              resource.creator_id,
            ),
          )

          return (
            <ResourceCardWrapper
              resource={resource}
              thumbnailUrl={() => thumbnailQuery.data}
              variant="mobile"
            />
          )
        }}
      </For>
    </div>
  )
}
