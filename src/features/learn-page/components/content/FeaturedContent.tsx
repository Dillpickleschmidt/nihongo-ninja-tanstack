// features/learn-page/components/content/FeaturedContent.tsx
import { For, Show, onMount, createEffect, createSignal } from "solid-js"
import { Await, Link, useLocation } from "@tanstack/solid-router"
import { ArrowUpRight, Play } from "lucide-solid"
import { Transition } from "solid-transition-group"
import { cn } from "@/utils"
import { usePageTransition } from "@/context/TransitionContext"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import {
  getResourceIconComponent,
  type EnrichedExternalResource,
} from "@/features/learn-page/utils/loader-helpers"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { useLearnPageData } from "@/features/learn-page/context/LearnPageDataContext"

const MOBILE_DIRECTION = "right" as const

export function FeaturedContent() {
  return (
    <>
      {/* Mobile Layout - Empty Placeholder */}
      <SSRMediaQuery hideFrom="xl">
        <div />
      </SSRMediaQuery>

      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        <DesktopFeaturedContent />
      </SSRMediaQuery>
    </>
  )
}

// ============================================================================
// Desktop Implementation
// ============================================================================

function DesktopFeaturedContent() {
  const location = useLocation()
  const { shouldAnimate, animationTrigger } = usePageTransition()
  const [isClient, setIsClient] = createSignal(false)

  onMount(() => {
    setIsClient(true)
  })

  // Animation Effects
  createEffect(() => {
    animationTrigger()
    if (
      location().pathname.includes("/learn") &&
      shouldAnimate() &&
      isClient()
    ) {
      requestAnimationFrame(() => {
        animateFeaturedItems()
      })
    }
  })

  return (
    <Transition
      onEnter={(element, done) => {
        if (!shouldAnimate()) {
          done()
          return
        }
        createSlideWithFadeInAnimation(
          element as HTMLElement,
          MOBILE_DIRECTION,
        ).then(() => done())
      }}
    >
      <div data-content-section data-transition-content class="space-y-1">
        <FeaturedContentHeader />
        <FeaturedContentGrid />
      </div>
    </Transition>
  )
}

// ============================================================================
// Animation Utilities
// ============================================================================

function animateFeaturedItems() {
  const featuredItems = document.querySelectorAll(
    "[data-featured-content-item]",
  ) as NodeListOf<HTMLElement>

  featuredItems.forEach((item) => {
    prepareElementForEnter(item, "left", true)
    setTimeout(() => {
      createSlideWithFadeInAnimation(item, "left", {
        withOpacity: true,
      })
    }, 100)
  })
}

// Rest of the components remain the same...
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
  const Icon = getResourceIconComponent(props.resource.iconType)

  return (
    <div
      data-featured-content-item
      class="relative h-40 w-[220px] overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
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

      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div class="relative flex h-full flex-col justify-between p-5">
        <div class="flex items-start justify-between">
          <Icon class="h-6 w-6 text-white drop-shadow-md" />
          <ArrowUpRight class="h-5 w-5 text-white/80 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <div class="space-y-2">
          <h3 class="line-clamp-2 text-base font-semibold text-white drop-shadow-md">
            {props.resource.truncatedTitle}
          </h3>
          <div class="flex items-center gap-2">
            <span class="rounded-full bg-white/20 px-2 py-1 text-[11px] text-white/80 capitalize backdrop-blur-sm">
              {props.resource.resource_type.replace("_", " ")}
            </span>
            <span
              class={cn(
                "rounded-full px-2 py-1 text-[11px] backdrop-blur-sm",
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
