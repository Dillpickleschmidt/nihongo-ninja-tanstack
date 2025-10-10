// features/learn-page-v2/components/content/FeaturedContent.tsx
import { For } from "solid-js"
import { useAnimationManager } from "@/hooks/useAnimations"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { resourceThumbnailQueryOptions } from "@/features/learn-page-v2/query/query-options"
import { ResourceCardWrapper } from "./ResourceDialog"
import { Route } from "@/routes/_home/learn/$textbookId/$chapterSlug"

interface FeaturedContentProps {
  variant?: "mobile" | "desktop"
}

export function FeaturedContent(props: FeaturedContentProps = {}) {
  const variant = props.variant || "desktop"
  const loaderData = Route.useLoaderData()

  const resourcesArray = () => Object.values(loaderData().externalResources)
  const { animateOnDataChange } = useAnimationManager()

  // Centralized animation management - trigger when resources change
  animateOnDataChange(["[data-featured-item]"], resourcesArray)

  return (
    <div class="mx-8 flex gap-6 overflow-x-auto px-1 pt-5 pb-2">
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
