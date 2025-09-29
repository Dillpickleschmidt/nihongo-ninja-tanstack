// features/learn-page/components/content/FeaturedContent.tsx
import { For, Show } from "solid-js"
import { Await } from "@tanstack/solid-router"
import { Play } from "lucide-solid"
import type { EnrichedExternalResource } from "@/features/learn-page/utils/loader-helpers"
import { useLearnPageData } from "@/features/learn-page/context/LearnPageDataContext"
import { useAnimationManager } from "@/hooks/useAnimations"
import { ResourceCardWrapper } from "./ResourceDialog"


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
  const data = useLearnPageData()
  const resourcesArray = () => Object.values(data.externalResources)
  const { animateOnDataChange } = useAnimationManager()

  // Centralized animation management - trigger when resources change
  animateOnDataChange(["[data-featured-content-item]"], resourcesArray)

  return (
    <div class="mx-7 flex gap-6 overflow-x-auto px-1 pt-3 pb-3">
      <For each={resourcesArray()}>
        {(resource, index) => {
          const thumbnailDeferredPromise = data.deferredThumbnails[index()]
          return (
            <div class="flex-shrink-0">
              <Show
                when={thumbnailDeferredPromise}
                fallback={<FeaturedResourceCard resource={resource} />}
              >
                <Await promise={thumbnailDeferredPromise}>
                  {(thumbnailData) => (
                    <FeaturedResourceCard
                      resource={resource}
                      thumbnailUrl={thumbnailData?.thumbnailUrl}
                    />
                  )}
                </Await>
              </Show>
            </div>
          )
        }}
      </For>
    </div>
  )
}

function FeaturedResourceCard(props: {
  resource: EnrichedExternalResource
  thumbnailUrl?: string | null
}) {
  return (
    <ResourceCardWrapper
      resource={props.resource}
      thumbnailUrl={props.thumbnailUrl}
      variant="desktop"
    />
  )
}

function MobileFeaturedContentGrid() {
  const data = useLearnPageData()
  const resourcesArray = () => Object.values(data.externalResources)

  return (
    <div class="grid grid-cols-1 gap-4">
      <For each={resourcesArray()}>
        {(resource, index) => {
          const thumbnailDeferredPromise = data.deferredThumbnails[index()]
          return (
            <Show
              when={thumbnailDeferredPromise}
              fallback={<MobileFeaturedResourceCard resource={resource} />}
            >
              <Await promise={thumbnailDeferredPromise}>
                {(thumbnailData) => (
                  <MobileFeaturedResourceCard
                    resource={resource}
                    thumbnailUrl={thumbnailData?.thumbnailUrl}
                  />
                )}
              </Await>
            </Show>
          )
        }}
      </For>
    </div>
  )
}

function MobileFeaturedResourceCard(props: {
  resource: EnrichedExternalResource
  thumbnailUrl?: string | null
}) {
  return (
    <ResourceCardWrapper
      resource={props.resource}
      thumbnailUrl={props.thumbnailUrl}
      variant="mobile"
    />
  )
}
