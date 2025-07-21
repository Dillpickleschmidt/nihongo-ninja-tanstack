// features/dashboard/components/content/textbook/ContentShowcase.tsx
import { For, Show, onMount, createEffect, createSignal } from "solid-js"
import { Await, Link, useLocation } from "@tanstack/solid-router"
import { ArrowUpRight, ArrowRight, Plus, Play } from "lucide-solid"
import { Transition } from "solid-transition-group"
import { cn } from "@/utils"
import { usePageTransition } from "@/context/TransitionContext"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import type { DeferredPromise } from "@tanstack/solid-router"
import { getResourceIconComponent } from "@/features/dashboard/utils/contentShowcaseUtils"
import type { EnrichedExternalResource } from "@/features/dashboard/utils/loader-helpers"

interface ContentShowcaseProps {
  resources: EnrichedExternalResource[]
  thumbnailPromises: DeferredPromise<{
    resourceId: string
    thumbnailUrl: string | null
  }>[]
  variant: "mobile" | "desktop"
}

const MOBILE_DIRECTION = "right" as const

export function ContentShowcase(props: ContentShowcaseProps) {
  const location = useLocation()
  const { shouldAnimate, animationTrigger } = usePageTransition()
  const [isClient, setIsClient] = createSignal(false)

  onMount(() => {
    setIsClient(true)
  })

  // Animate individual featured content items
  createEffect(() => {
    animationTrigger()
    if (
      props.variant === "desktop" &&
      location().pathname.includes("/dashboard") &&
      shouldAnimate() &&
      isClient()
    ) {
      requestAnimationFrame(() => {
        const featuredItems = document.querySelectorAll(
          "[data-featured-content-item]",
        ) as NodeListOf<HTMLElement>

        featuredItems.forEach((item) => {
          prepareElementForEnter(item, "left", true)
          setTimeout(() => {
            createSlideWithFadeInAnimation(item, "left", {
              withOpacity: true,
              // duration: 600,
            })
          }, 100)
        })
      })
    }
  })

  if (props.variant === "mobile") {
    return (
      <div class="mt-6 xl:mt-0">
        <div class="mb-4 flex items-center justify-between pl-8 xl:pl-0">
          <div class="flex items-end">
            <h2 class="text-xl xl:text-2xl">Content</h2>
            <p class="text-muted-foreground pb-1 pl-2 text-xs xl:pl-3 xl:text-sm">
              You Might Enjoy
            </p>
          </div>
          <ArrowRight class="mr-5 h-5 w-5 xl:mr-0" />
        </div>

        <div class="scrollbar-hide mb-5 flex gap-4 overflow-x-auto pl-8 xl:grid xl:grid-cols-[repeat(auto-fill,minmax(190px,1fr))] xl:gap-5 xl:overflow-x-visible xl:p-0">
          <div class="bg-background border-primary/30 flex min-w-[50px] items-center justify-center rounded-[14px] border-2 border-dashed xl:min-w-0 xl:rounded-[16px]">
            <Plus class="text-primary/30 h-6 w-6 xl:h-7 xl:w-7" />
          </div>
          <Show
            when={isClient()}
            fallback={
              <div data-content-section class="flex gap-4 pr-4 xl:contents">
                <For each={props.resources}>
                  {(resource) => <MobileResourceCard resource={resource} />}
                </For>
              </div>
            }
          >
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
              <div
                data-content-section
                data-transition-content
                class="flex gap-4 pr-4 xl:contents"
              >
                <For each={props.resources}>
                  {(resource, index) => {
                    const thumbnailDeferredPromise =
                      props.thumbnailPromises[index()]
                    return (
                      <Await
                        promise={thumbnailDeferredPromise}
                        fallback={<MobileResourceCard resource={resource} />}
                      >
                        {(thumbnailData) => (
                          <MobileResourceCard
                            resource={resource}
                            thumbnailUrl={thumbnailData.thumbnailUrl}
                          />
                        )}
                      </Await>
                    )
                  }}
                </For>
              </div>
            </Transition>
          </Show>
        </div>
      </div>
    )
  }

  // Desktop variant
  return (
    <div data-content-section class="space-y-1">
      <div class="flex items-center justify-between px-8">
        <div>
          <h2 class="text-2xl font-bold">Featured Content</h2>
          <p class="text-muted-foreground">
            Curated resources for your current chapter
          </p>
        </div>
        <button class="bg-primary/10 flex items-center gap-2 rounded-lg px-4 py-2.5 transition-colors hover:opacity-80">
          <Play class="h-4 w-4" />
          <span class="text-sm font-medium">Start Studying</span>
        </button>
      </div>

      {/* Horizontal scrolling list of featured resources */}
      <div class="mx-7 flex gap-6 overflow-x-auto px-1 pt-3 pb-3">
        <For each={props.resources}>
          {(resource, index) => {
            const thumbnailDeferredPromise = props.thumbnailPromises[index()]
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
      class="relative h-44 w-[240px] overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
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

      <div class="relative flex h-full flex-col justify-between p-6">
        <div class="flex items-start justify-between">
          <Icon class="h-8 w-8 text-white drop-shadow-md" />
          <ArrowUpRight class="h-5 w-5 text-white/80 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <div class="space-y-2">
          <h3 class="line-clamp-2 text-lg font-semibold text-white drop-shadow-md">
            {props.resource.truncatedTitle}
          </h3>
          <div class="flex items-center gap-2">
            <span class="rounded-full bg-white/20 px-2 py-1 text-xs text-white/80 capitalize backdrop-blur-sm">
              {props.resource.resource_type.replace("_", " ")}
            </span>
            <span
              class={cn(
                "rounded-full px-2 py-1 text-xs backdrop-blur-sm",
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

// Simplified mobile card component
function MobileResourceCard(props: {
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
          class="transition-transform hover:scale-[99%]"
        >
          <MobileResourceCardContent
            resource={props.resource}
            thumbnailUrl={props.thumbnailUrl}
          />
        </a>
      }
    >
      <Link
        to={props.resource.internal_url!}
        class="transition-transform hover:scale-[99%]"
      >
        <MobileResourceCardContent
          resource={props.resource}
          thumbnailUrl={props.thumbnailUrl}
        />
      </Link>
    </Show>
  )

  function MobileResourceCardContent(props: {
    resource: EnrichedExternalResource
    thumbnailUrl?: string | null
  }) {
    const Icon = getResourceIconComponent(props.resource.iconType)

    return (
      <div class="bg-card relative h-40 w-48 overflow-hidden rounded-2xl p-4">
        {props.thumbnailUrl && (
          <div
            class="absolute inset-0 -z-2 scale-[135%] opacity-75 dark:opacity-65"
            style={{
              "background-image": `url(${props.thumbnailUrl})`,
              "background-size": "cover",
              "background-position": "center",
              "background-repeat": "no-repeat",
            }}
          />
        )}
        <div class="absolute inset-0 -z-1 bg-gradient-to-b from-transparent via-transparent to-black/60 dark:from-transparent dark:to-black/65" />

        <div class="relative z-10">
          <div class="mb-2 flex items-start justify-between">
            <span class="text-2xl leading-5 drop-shadow-md">
              <Icon class="h-8 w-8 text-white drop-shadow-md" />
            </span>
            <div
              class={cn(
                "h-3.5 w-3.5 rounded-full shadow-sm drop-shadow-sm",
                props.resource.difficultyColorClass,
              )}
            />
          </div>
          <div class="flex h-24 flex-col justify-end">
            <div class="font-inter text-sm font-semibold text-white drop-shadow-md">
              {props.resource.truncatedTitleMobile}
            </div>
            <div class="dark:text-muted-foreground text-xs text-gray-200 capitalize drop-shadow-sm">
              {props.resource.resource_type.replace("_", " ")}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
