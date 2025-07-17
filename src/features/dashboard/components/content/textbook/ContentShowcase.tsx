// features/dashboard/components/content/textbook/ContentShowcase.tsx
import { For, Show, Component, onMount, createEffect } from "solid-js"
import { Await, Link, useLocation } from "@tanstack/solid-router"
import {
  ArrowUpRight,
  BookOpen,
  Video,
  Headphones,
  FileText,
  Mic,
  Wrench,
  MessageCircle,
  Newspaper,
  BookMarked,
  Ear,
  Eye,
  PenTool,
  ArrowRight,
  Plus,
  Play,
} from "lucide-solid"
import { Transition } from "solid-transition-group"
import type { ExternalResource } from "@/data/types"
import { cn } from "@/utils"
import { usePageTransition } from "@/context/TransitionContext"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"

interface ContentShowcaseProps {
  resources: ExternalResource[]
  thumbnailPromises: Promise<{
    resourceId: string
    thumbnailUrl: string | null
  }>[]
  variant: "mobile" | "desktop"
}

const SELECTOR = "[data-content-section]"
const DIRECTION = "right" as const
const ENTER_DELAY = 0

export function ContentShowcase(props: ContentShowcaseProps) {
  const location = useLocation()
  const { hasUserNavigated, animationTrigger } = usePageTransition()

  const runAnimation = () => {
    if (location().pathname.includes("/dashboard") && hasUserNavigated()) {
      const element = document.querySelector(SELECTOR) as HTMLElement
      if (element) {
        prepareElementForEnter(element, DIRECTION)
        setTimeout(() => {
          createSlideWithFadeInAnimation(element, DIRECTION)
        }, ENTER_DELAY)
      }
    }
  }

  onMount(() => {
    runAnimation()
  })

  createEffect(() => {
    animationTrigger()
    runAnimation()
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
          <Transition
            onEnter={(element, done) => {
              if (!hasUserNavigated()) {
                done()
                return
              }
              createSlideWithFadeInAnimation(
                element as HTMLElement,
                DIRECTION,
              ).then(() => done())
            }}
          >
            {true && (
              <div
                data-content-section
                data-transition-content
                class="flex gap-4 pr-4 xl:contents"
              >
                <For each={props.resources}>
                  {(resource, index) => {
                    const thumbnailPromise = props.thumbnailPromises[index()]
                    return (
                      <Await
                        promise={thumbnailPromise}
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
            )}
          </Transition>
        </div>
      </div>
    )
  }

  // Desktop variant
  return (
    <div class="space-y-1">
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
            const thumbnailPromise = props.thumbnailPromises[index()]
            return (
              <div class="flex-shrink-0">
                <Show
                  when={thumbnailPromise}
                  fallback={<FeaturedResourceCard resource={resource} />}
                >
                  <Await promise={thumbnailPromise}>
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
  resource: ExternalResource
  thumbnailUrl?: string | null
}) {
  const { setUserHasNavigated } = usePageTransition()

  const getResourceIcon = () => {
    const iconMap = {
      video: Video,
      article: FileText,
      podcast: Mic,
      tool: Wrench,
      forum: MessageCircle,
      news: Newspaper,
      textbook_companion: BookMarked,
      listening_practice: Ear,
      reading_practice: Eye,
      grammar_guide: PenTool,
      audio: Headphones,
    }
    return (
      iconMap[props.resource.resource_type as keyof typeof iconMap] || BookOpen
    )
  }

  const getGradientStyle = () => {
    const gradients = {
      video:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)",
      audio:
        "linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(236, 72, 153, 0.1) 100%)",
      article:
        "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)",
      podcast:
        "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)",
      tool: "linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)",
      forum:
        "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%)",
      news: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(251, 113, 133, 0.1) 100%)",
      textbook_companion:
        "linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)",
      listening_practice:
        "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(244, 114, 182, 0.1) 100%)",
      reading_practice:
        "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(74, 222, 128, 0.1) 100%)",
      grammar_guide:
        "linear-gradient(135deg, rgba(245, 101, 101, 0.2) 0%, rgba(252, 165, 165, 0.1) 100%)",
    }
    return (
      gradients[props.resource.resource_type as keyof typeof gradients] ||
      gradients.article
    )
  }

  const Icon = getResourceIcon()

  const handleClick = () => {
    if (props.resource.internal_url) {
      setUserHasNavigated(true)
    }
  }

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
            Icon={Icon}
            getGradientStyle={getGradientStyle}
          />
        </a>
      }
    >
      <Link
        to={props.resource.internal_url!}
        onClick={handleClick}
        class="group block transition-transform hover:scale-[1.02]"
      >
        <FeaturedResourceCardContent
          resource={props.resource}
          thumbnailUrl={props.thumbnailUrl}
          Icon={Icon}
          getGradientStyle={getGradientStyle}
        />
      </Link>
    </Show>
  )
}

function FeaturedResourceCardContent(props: {
  resource: ExternalResource
  thumbnailUrl?: string | null
  Icon: Component<any>
  getGradientStyle: () => string
}) {
  return (
    <div
      class="relative h-44 w-[240px] overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
      style={{ "background-image": props.getGradientStyle() }}
    >
      <Show when={props.thumbnailUrl}>
        <div
          class="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-40"
          style={{
            "background-image": `url(${props.thumbnailUrl})`,
            "background-size": "cover",
            "background-position": "center",
          }}
        />
      </Show>

      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div class="relative flex h-full flex-col justify-between p-6">
        <div class="flex items-start justify-between">
          <props.Icon class="h-8 w-8 text-white drop-shadow-md" />
          <ArrowUpRight class="h-5 w-5 text-white/80 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <div class="space-y-2">
          <h3 class="line-clamp-2 text-lg font-semibold text-white drop-shadow-md">
            {props.resource.title.length > 50
              ? props.resource.title.substring(0, 50) + "..."
              : props.resource.title}
          </h3>
          <div class="flex items-center gap-2">
            <span class="rounded-full bg-white/20 px-2 py-1 text-xs text-white/80 capitalize backdrop-blur-sm">
              {props.resource.resource_type.replace("_", " ")}
            </span>
            <span
              class={cn("rounded-full px-2 py-1 text-xs backdrop-blur-sm", {
                "bg-green-500/30 text-green-100":
                  props.resource.difficulty_rating === "easy",
                "bg-yellow-500/30 text-yellow-100":
                  props.resource.difficulty_rating === "medium",
                "bg-red-500/30 text-red-100":
                  props.resource.difficulty_rating === "hard",
                "bg-gray-500/30 text-gray-100": ![
                  "easy",
                  "medium",
                  "hard",
                ].includes(props.resource.difficulty_rating),
              })}
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
  resource: ExternalResource
  thumbnailUrl?: string | null
}) {
  const { setUserHasNavigated } = usePageTransition()

  const handleInternalNavigation = () => {
    setUserHasNavigated(true)
  }

  function getDifficultyColor(difficulty: string) {
    switch (difficulty) {
      case "easy":
        return "bg-green-500 shadow-green-500/20"
      case "medium":
        return "bg-yellow-500 shadow-yellow-500/20"
      case "hard":
        return "bg-red-500 shadow-red-500/20"
      default:
        return "bg-gray-500 shadow-gray-500/20"
    }
  }

  function getResourceIcon(resourceType: string) {
    switch (resourceType) {
      case "video":
        return "📹"
      case "article":
        return "📄"
      case "podcast":
        return "🎙️"
      case "tool":
        return "🔧"
      case "forum":
        return "💬"
      case "news":
        return "📰"
      case "textbook_companion":
        return "📚"
      case "listening_practice":
        return "👂"
      case "reading_practice":
        return "👁️"
      case "grammar_guide":
        return "📝"
      default:
        return "📎"
    }
  }

  function truncateText(text: string, maxLength: number) {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }

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
          <MobileResourceCardContent {...props} />
        </a>
      }
    >
      <Link
        to={props.resource.internal_url!}
        onClick={handleInternalNavigation}
        class="transition-transform hover:scale-[99%]"
      >
        <MobileResourceCardContent {...props} />
      </Link>
    </Show>
  )

  function MobileResourceCardContent(props: {
    resource: ExternalResource
    thumbnailUrl?: string | null
  }) {
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
              {getResourceIcon(props.resource.resource_type)}
            </span>
            <div
              class={cn(
                "h-3.5 w-3.5 rounded-full shadow-sm drop-shadow-sm",
                getDifficultyColor(props.resource.difficulty_rating),
              )}
            />
          </div>
          <div class="flex h-24 flex-col justify-end">
            <div class="font-inter text-sm font-semibold text-white drop-shadow-md">
              {truncateText(props.resource.title, 35)}
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
