// features/dashboard/components/content/textbook/MoreResourcesSection.tsx
import { For, Show } from "solid-js"
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
import { Link } from "@tanstack/solid-router"
import type { ExternalResource } from "@/data/types"
import { usePageTransition } from "@/context/TransitionContext"

// Fake data for "More Resources"
const moreResourcesData: ExternalResource[] = [
  {
    id: "fake-1",
    title: "Advanced Grammar Patterns",
    resource_type: "grammar_guide",
    difficulty_rating: "hard",
    external_url: "https://example.com/grammar",
    internal_url: null,
    creator_id: "textbook_companion" as any,
  },
  {
    id: "fake-2",
    title: "Daily Conversation Practice",
    resource_type: "listening_practice",
    difficulty_rating: "medium",
    external_url: "https://example.com/conversation",
    internal_url: null,
    creator_id: "textbook_companion" as any,
  },
  {
    id: "fake-3",
    title: "Pronunciation Workshop",
    resource_type: "audio",
    difficulty_rating: "easy",
    external_url: "https://example.com/pronunciation",
    internal_url: null,
    creator_id: "textbook_companion" as any,
  },
  {
    id: "fake-4",
    title: "Writing Techniques Guide",
    resource_type: "article",
    difficulty_rating: "medium",
    external_url: "https://example.com/writing",
    internal_url: null,
    creator_id: "textbook_companion" as any,
  },
  {
    id: "fake-5",
    title: "Cultural Context Videos",
    resource_type: "video",
    difficulty_rating: "easy",
    external_url: "https://example.com/culture",
    internal_url: null,
    creator_id: "textbook_companion" as any,
  },
  {
    id: "fake-6",
    title: "Interactive Exercises",
    resource_type: "tool",
    difficulty_rating: "medium",
    external_url: "https://example.com/exercises",
    internal_url: null,
    creator_id: "textbook_companion" as any,
  },
]

export function MoreResourcesSection() {
  return (
    <div class="space-y-3">
      <h3 class="text-muted-foreground text-lg font-semibold">
        More Resources
      </h3>
      <div class="max-h-[142px] space-y-2 overflow-x-visible overflow-y-auto">
        <For each={moreResourcesData}>
          {(resource) => <CompactResourceItem resource={resource} />}
        </For>
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
  Icon: any
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
