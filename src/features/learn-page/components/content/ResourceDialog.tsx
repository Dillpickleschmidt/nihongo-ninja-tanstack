import { Show, lazy, Suspense, createSignal } from "solid-js"
import { ArrowUpRight, ExternalLink } from "lucide-solid"
import { useNavigate } from "@tanstack/solid-router"
import { cn } from "@/utils"
import {
  getResourceIconComponent,
  type EnrichedExternalResource,
} from "@/features/learn-page/utils/loader-helpers"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// ============================================================================
// Shared Classes
// ============================================================================

const MOBILE_CARD_BASE =
  "bg-card hover:bg-card/90 flex items-center gap-4 rounded-2xl p-4 shadow-sm transition-colors"

const DESKTOP_CARD_BASE =
  "border-card-foreground/30 relative h-32 w-[180px] overflow-hidden rounded-2xl border opacity-0 backdrop-blur-sm hover:shadow-xl"

const DESKTOP_CARD_VISIBLE =
  "border-card-foreground/30 relative h-32 w-[180px] overflow-hidden rounded-2xl border backdrop-blur-sm hover:shadow-xl"

// ============================================================================
// Resource Card Wrapper - Handles dialog vs external link logic
// ============================================================================

export function ResourceCardWrapper(props: {
  resource: EnrichedExternalResource
  thumbnailUrl: (() => string | null | undefined) | string | null | undefined
  variant: "desktop" | "mobile"
  forceVisible?: boolean
}) {
  return (
    <Dialog>
      <DialogTrigger
        class={cn(
          "group block w-full cursor-pointer text-left transition-transform hover:scale-[1.02]",
          props.variant === "mobile" && MOBILE_CARD_BASE,
          props.variant === "desktop" &&
            (props.forceVisible ? DESKTOP_CARD_VISIBLE : DESKTOP_CARD_BASE),
        )}
        data-featured-item={props.variant === "desktop" ? "" : undefined}
        style={
          props.variant === "desktop"
            ? { "background-image": props.resource.gradientStyle }
            : undefined
        }
      >
        <ResourceCardContent
          resource={props.resource}
          thumbnailUrl={props.thumbnailUrl}
          variant={props.variant}
        />
      </DialogTrigger>
      <ResourceDialogContent resource={props.resource} />
    </Dialog>
  )
}

// ============================================================================
// Resource Card Content - Renders the card UI
// ============================================================================

export function ResourceCardContent(props: {
  resource: EnrichedExternalResource
  thumbnailUrl: (() => string | null | undefined) | string | null | undefined
  variant: "desktop" | "mobile"
}) {
  const Icon = getResourceIconComponent(props.resource.lesson_type)

  // Normalize thumbnailUrl to always be a function
  const getThumbnailUrl = () =>
    typeof props.thumbnailUrl === "function"
      ? props.thumbnailUrl()
      : props.thumbnailUrl

  if (props.variant === "mobile") {
    return (
      <>
        <div class="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
          <Suspense
            fallback={
              <div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                <Icon class="h-8 w-8 text-white" />
              </div>
            }
          >
            <Show
              when={getThumbnailUrl()}
              fallback={
                <div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                  <Icon class="h-8 w-8 text-white" />
                </div>
              }
            >
              <img
                src={getThumbnailUrl()!}
                alt={props.resource.title}
                class="h-full w-full object-cover"
              />
            </Show>
          </Suspense>
        </div>

        <div class="min-w-0 flex-1">
          <h3 class="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
            {props.resource.truncatedTitle}
          </h3>
          <div class="mt-1 flex items-center gap-2">
            <span class="text-muted-foreground text-xs capitalize">
              {props.resource.lesson_type.replace("_", " ")}
            </span>
            <span
              class={cn(
                "rounded-full px-2 py-1 text-[10px] font-medium",
                props.resource.difficultyColorClass,
              )}
            >
              {props.resource.difficulty_rating}
            </span>
          </div>
        </div>

        <ArrowUpRight class="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
      </>
    )
  }

  // Desktop variant - content only (wrapper is now on DialogTrigger/anchor)
  return (
    <>
      <Suspense>
        <Show when={getThumbnailUrl()}>
          <div
            class="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-40"
            style={{
              "background-image": `url(${getThumbnailUrl()})`,
              "background-size": "cover",
              "background-position": "center",
            }}
          />
        </Show>
      </Suspense>

      <div class="absolute inset-0 dark:bg-gradient-to-t dark:from-black/60 dark:via-transparent dark:to-transparent" />

      <div class="relative flex h-full flex-col justify-between p-5">
        <div class="flex items-start justify-between">
          <Icon class="text-primary h-6 w-6 drop-shadow-md" />
          <ArrowUpRight class="h-5 w-5 text-white/80 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <div class="space-y-2">
          <h3 class="line-clamp-2 text-sm font-semibold drop-shadow-md">
            {props.resource.truncatedTitle}
          </h3>
          <div class="flex items-center gap-2">
            <span class="rounded-full bg-neutral-500 px-2 py-1 text-[9px] text-nowrap text-white/80 capitalize dark:bg-neutral-600">
              {props.resource.lesson_type.replace("_", " ")}
            </span>
            <span
              class={cn(
                "rounded-full px-2 py-1 text-[9px]",
                props.resource.difficultyColorClass,
              )}
            >
              {props.resource.difficulty_rating}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

// ============================================================================
// Resource Dialog Content - Iframe implementation
// ============================================================================

function ResourceDialogContent(props: { resource: EnrichedExternalResource }) {
  const [hasError, setHasError] = createSignal(false)
  const navigate = useNavigate()

  const resourceId = () => props.resource.link!.split("/").pop() || ""
  const componentPath = () =>
    props.resource.link!.replace(
      "/external-resources/",
      "/src/features/external-resources/",
    )

  // Dynamic component import
  const DynamicComponent = lazy(async () => {
    try {
      const module = await import(/* @vite-ignore */ componentPath())
      return { default: module.default }
    } catch (error) {
      console.error("Failed to load component:", componentPath(), error)
      setHasError(true)
      return { default: () => null }
    }
  })

  return (
    <DialogContent
      class="border-card-foreground/70 h-[85vh] w-[90vw] max-w-7xl border-2 p-0"
      tabindex="-1"
    >
      <Show
        when={!hasError()}
        fallback={
          <div class="absolute inset-0 flex items-center justify-center">
            <p class="text-muted-foreground">
              Uh-oh, seems like this link is broken!
            </p>
          </div>
        }
      >
        <Button
          onClick={() =>
            navigate({ to: `/external-resources/${resourceId()}` })
          }
          tabindex="1"
          variant="ghost"
          class="bg-primary/10 hover:bg-primary/20 absolute top-4 right-4 z-20 flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium backdrop-blur-sm transition-colors"
        >
          <ExternalLink class="h-4 w-4" />
          Open in New Tab
        </Button>

        <div class="h-full w-full overflow-auto">
          <Suspense
            fallback={
              <div class="flex h-full items-center justify-center">
                <div class="text-muted-foreground">Loading content...</div>
              </div>
            }
          >
            <DynamicComponent />
          </Suspense>
        </div>
      </Show>
    </DialogContent>
  )
}
