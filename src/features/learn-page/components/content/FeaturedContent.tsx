// features/learn-page-v2/components/content/FeaturedContent.tsx
import { For, createSignal, Show } from "solid-js"
import { Portal } from "solid-js/web"
import { useAnimationManager } from "@/hooks/useAnimations"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { resourceThumbnailQueryOptions } from "@/query/query-options"
import { ResourceCardWrapper } from "./ResourceDialog"
import { Route } from "@/routes/_home/learn/$learningPathId/$chapterSlug"
import type { EnrichedExternalResource } from "@/features/learn-page/utils/loader-helpers"

const ANIMATION_DURATION = 700

interface FeaturedContentProps {
  variant?: "mobile" | "desktop"
}

// Helper component to render a single resource card
function ResourceCard(props: {
  resource: EnrichedExternalResource
  forceVisible?: boolean
}) {
  const thumbnailQuery = useCustomQuery(() =>
    resourceThumbnailQueryOptions(
      props.resource.id,
      props.resource.external_url,
      props.resource.creator_id,
    ),
  )

  return (
    <div class="flex-shrink-0">
      <ResourceCardWrapper
        resource={props.resource}
        thumbnailUrl={() => thumbnailQuery.data}
        variant="desktop"
        forceVisible={props.forceVisible}
      />
    </div>
  )
}

export function FeaturedContent(props: FeaturedContentProps = {}) {
  const variant = props.variant || "desktop"
  const loaderData = Route.useLoaderData()
  const resourcesArray = () => Object.values(loaderData().externalResources)

  // Mobile variant: simple scrolling list without portal/animation
  if (variant === "mobile") {
    return (
      <div class="mx-8 flex gap-6 overflow-x-auto px-1 pt-5 pb-2">
        <For each={resourcesArray()}>
          {(resource) => <ResourceCard resource={resource} />}
        </For>
      </div>
    )
  }

  // Desktop variant: expandable portal with animation
  const [isExpanded, setIsExpanded] = createSignal(false)
  const [isAnimating, setIsAnimating] = createSignal(false)
  const [isAnimationComplete, setIsAnimationComplete] = createSignal(false)
  const [containerRect, setContainerRect] = createSignal<DOMRect | null>(null)
  let containerRef: HTMLDivElement | undefined

  const { animateOnDataChange } = useAnimationManager()

  // Centralized animation management - trigger when resources change
  animateOnDataChange(["[data-featured-item]"], resourcesArray)

  const handleMouseEnter = () => {
    if (containerRef) {
      setContainerRect(containerRef.getBoundingClientRect())
    }
    setIsExpanded(true)
    setIsAnimating(true)
    // Wait for animation duration before showing scrollbar
    setTimeout(() => setIsAnimationComplete(true), ANIMATION_DURATION)
  }

  const handleMouseLeave = () => {
    setIsAnimating(false)
    setIsAnimationComplete(false)
    setIsExpanded(false)
  }

  return (
    <>
      <div
        ref={containerRef}
        class="mx-8 flex gap-6 overflow-x-auto px-1 pt-5 pb-2"
        style={{ opacity: isExpanded() ? "0" : "1" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <For each={resourcesArray()}>
          {(resource) => <ResourceCard resource={resource} />}
        </For>
      </div>

      <Portal>
        {/* Backdrop darkening */}
        <div
          class={`pointer-events-none fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 ${isExpanded() ? "opacity-100" : "opacity-0"}`}
        />

        {/* Expanded content */}
        <div
          class="fixed z-50 flex gap-6 px-1 pt-5 pb-2 ease-out"
          style={{
            "transition-property": "width",
            "transition-duration": `${ANIMATION_DURATION}ms`,
            top: containerRect() ? `${containerRect()!.top}px` : "0px",
            left: containerRect() ? `${containerRect()!.left}px` : "0px",
            width: isAnimating()
              ? `calc(100vw - ${containerRect()!.left}px)`
              : containerRect()
                ? `${containerRect()!.width}px`
                : "0px",
            "overflow-x": isAnimationComplete() ? "auto" : "hidden",
            opacity: isExpanded() ? "1" : "0",
            "pointer-events": isExpanded() ? "auto" : "none",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <For each={resourcesArray()}>
            {(resource) => (
              <ResourceCard resource={resource} forceVisible={true} />
            )}
          </For>
        </div>
      </Portal>
    </>
  )
}
