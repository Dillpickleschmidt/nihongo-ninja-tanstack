// features/dashboard/components/DesktopContentShowcase.tsx
import { For, Show, Component } from "solid-js"
import { Await, Link } from "@tanstack/solid-router"
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
} from "lucide-solid"
import type { ExternalResource } from "@/data/types"
import { cn } from "@/utils"
import { usePageTransition } from "@/context/TransitionContext"

interface DesktopContentShowcaseProps {
  resources: ExternalResource[]
  thumbnailPromises: Promise<{
    resourceId: string
    thumbnailUrl: string | null
  }>[]
}

// Fake data for "More Resources"
const moreResourcesData: ExternalResource[] = [
  {
    id: "fake-1",
    title: "Advanced Grammar Patterns",
    resource_type: "grammar_guide",
    difficulty_rating: "hard",
    external_url: "https://example.com/grammar",
    internal_url: null,
  },
  {
    id: "fake-2",
    title: "Daily Conversation Practice",
    resource_type: "listening_practice",
    difficulty_rating: "medium",
    external_url: "https://example.com/conversation",
    internal_url: null,
  },
  {
    id: "fake-3",
    title: "Pronunciation Workshop",
    resource_type: "audio",
    difficulty_rating: "easy",
    external_url: "https://example.com/pronunciation",
    internal_url: null,
  },
  {
    id: "fake-4",
    title: "Writing Techniques Guide",
    resource_type: "article",
    difficulty_rating: "medium",
    external_url: "https://example.com/writing",
    internal_url: null,
  },
  {
    id: "fake-5",
    title: "Cultural Context Videos",
    resource_type: "video",
    difficulty_rating: "easy",
    external_url: "https://example.com/culture",
    internal_url: null,
  },
  {
    id: "fake-6",
    title: "Interactive Exercises",
    resource_type: "tool",
    difficulty_rating: "medium",
    external_url: "https://example.com/exercises",
    internal_url: null,
  },
]

export function DesktopContentShowcase(props: DesktopContentShowcaseProps) {
  return (
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold">Featured Content</h2>
          <p class="text-muted-foreground">
            Curated resources for your current chapter
          </p>
        </div>
        <button class="bg-primary/10 text-primary hover:bg-primary/20 flex items-center gap-2 rounded-lg px-4 py-2 transition-colors">
          <span class="text-sm font-medium">View All</span>
          <ArrowUpRight class="h-4 w-4" />
        </button>
      </div>

      {/* Horizontal scrolling list of all featured resources */}
      <div class="flex max-w-[831px] gap-6 overflow-x-auto overflow-y-hidden">
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

      {/* More Resources - vertically scrollable with fake data */}
      <div class="space-y-3">
        <h3 class="text-muted-foreground text-lg font-semibold">
          More Resources
        </h3>
        <div class="scrollbar-hide max-h-[142px] space-y-2 overflow-y-auto">
          <For each={moreResourcesData}>
            {(resource) => <CompactResourceItem resource={resource} />}
          </For>
        </div>
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
      class="relative h-48 w-[261px] overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
      style={{ "background-image": props.getGradientStyle() }}
    >
      {/* Background image */}
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

      {/* Overlay gradient */}
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
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

function CompactResourceItem(props: { resource: ExternalResource }) {
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
          class="group flex items-center gap-4 rounded-lg border border-white/5 bg-white/2 p-3 transition-colors hover:bg-white/5"
        >
          <CompactResourceItemContent resource={props.resource} Icon={Icon} />
        </a>
      }
    >
      <Link
        to={props.resource.internal_url!}
        onClick={handleClick}
        class="group flex items-center gap-4 rounded-lg border border-white/5 bg-white/2 p-3 transition-colors hover:bg-white/5"
      >
        <CompactResourceItemContent resource={props.resource} Icon={Icon} />
      </Link>
    </Show>
  )
}

function CompactResourceItemContent(props: {
  resource: ExternalResource
  Icon: Component<any>
}) {
  return (
    <>
      <div class="bg-primary/10 flex-shrink-0 rounded-lg p-2">
        <props.Icon class="text-primary h-4 w-4" />
      </div>
      <div class="min-w-0 flex-1">
        <h4 class="group-hover:text-primary line-clamp-1 text-sm font-medium transition-colors">
          {props.resource.title}
        </h4>
        <p class="text-muted-foreground text-xs capitalize">
          {props.resource.resource_type.replace("_", " ")}
        </p>
      </div>
      <ArrowUpRight class="text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
    </>
  )
}
