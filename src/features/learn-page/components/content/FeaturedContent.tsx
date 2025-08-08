// features/learn-page/components/content/FeaturedContent.tsx
import { For, Show } from "solid-js"
import { Await, Link } from "@tanstack/solid-router"
import { ArrowUpRight, Play } from "lucide-solid"
import { cn } from "@/utils"
import {
  getResourceIconComponent,
  type EnrichedExternalResource,
} from "@/features/learn-page/utils/loader-helpers"
import { useLearnPageData } from "@/features/learn-page/context/LearnPageDataContext"
import { useAnimationManager } from "@/hooks/useAnimations"

const MOBILE_DIRECTION = "right" as const

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
    <Show
      when={props.resource.internal_url}
      fallback={
        <a
          href={props.resource.external_url}
          target="_blank"
          rel="noopener noreferrer"
          class="group block transition-transform hover:scale-[1.02]"
        >
          <FeaturedResourceCardContent
            resource={props.resource}
            thumbnailUrl={props.thumbnailUrl}
          />
        </a>
      }
    >
      <Link
        to={props.resource.internal_url!}
        class="group block transition-transform hover:scale-[1.02]"
      >
        <FeaturedResourceCardContent
          resource={props.resource}
          thumbnailUrl={props.thumbnailUrl}
        />
      </Link>
    </Show>
  )
}

function FeaturedResourceCardContent(props: {
  resource: EnrichedExternalResource
  thumbnailUrl?: string | null
}) {
  const Icon = getResourceIconComponent(props.resource.resource_type)

  return (
    <div
      data-featured-content-item
      class="border-card-foreground/70 relative h-40 w-[220px] overflow-hidden rounded-2xl border backdrop-blur-sm hover:shadow-xl"
      style={{ "background-image": props.resource.gradientStyle }}
    >
      {props.thumbnailUrl && (
        <div
          class="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-40"
          style={{
            "background-image": `url(${props.thumbnailUrl})`,
            "background-size": "cover",
            "background-position": "center",
          }}
        />
      )}

      <div class="absolute inset-0 dark:bg-gradient-to-t dark:from-black/60 dark:via-transparent dark:to-transparent" />

      <div class="relative flex h-full flex-col justify-between p-5">
        <div class="flex items-start justify-between">
          <Icon class="text-primary h-6 w-6 drop-shadow-md" />
          <ArrowUpRight class="h-5 w-5 text-white/80 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <div class="space-y-2">
          <h3 class="line-clamp-2 text-base font-semibold drop-shadow-md">
            {props.resource.truncatedTitle}
          </h3>
          <div class="flex items-center gap-2">
            <span class="rounded-full bg-neutral-500 px-2 py-1 text-[11px] text-white/80 capitalize dark:bg-neutral-600">
              {props.resource.resource_type.replace("_", " ")}
            </span>
            <span
              class={cn(
                "rounded-full px-2 py-1 text-[11px]",
                props.resource.difficultyColorClass,
              )}
            >
              {props.resource.difficulty_rating}
            </span>
          </div>
        </div>
      </div>
    </div>
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
  const IconComponent = getResourceIconComponent(props.resource.resource_type)

  return (
    <Link
      to={props.resource.link}
      target="_blank"
      class="bg-card hover:bg-card/90 group flex items-center gap-4 rounded-2xl p-4 shadow-sm transition-colors"
    >
      <div class="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
        <Show
          when={props.thumbnailUrl}
          fallback={
            <div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
              <IconComponent class="h-8 w-8 text-white" />
            </div>
          }
        >
          <img
            src={props.thumbnailUrl!}
            alt={props.resource.title}
            class="h-full w-full object-cover"
          />
        </Show>
      </div>

      <div class="min-w-0 flex-1">
        <h3 class="text-foreground group-hover:text-primary text-base font-semibold transition-colors">
          {props.resource.truncatedTitle}
        </h3>
        <div class="mt-1 flex items-center gap-2">
          <span class="text-muted-foreground text-sm capitalize">
            {props.resource.resource_type.replace("_", " ")}
          </span>
          <span
            class={cn(
              "rounded-full px-2 py-1 text-xs font-medium",
              props.resource.difficultyColorClass,
            )}
          >
            {props.resource.difficulty_rating}
          </span>
        </div>
      </div>

      <ArrowUpRight class="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
    </Link>
  )
}
