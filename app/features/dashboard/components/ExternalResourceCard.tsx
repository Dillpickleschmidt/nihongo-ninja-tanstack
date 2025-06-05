// features/dashboard/components/ExternalResourceCard.tsx
import { Link } from "@tanstack/solid-router"
import { SmoothCard } from "./SmoothCard"
import { cn } from "@/utils/util"
import { usePageTransition } from "@/context/TransitionContext"
import type { ExternalResource } from "@/data/types"

interface ExternalResourceCardProps {
  resource: ExternalResource
  thumbnailUrl?: string | null
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

export function ExternalResourceCard(props: ExternalResourceCardProps) {
  const { resource, thumbnailUrl } = props
  const { setUserHasNavigated } = usePageTransition()

  const handleInternalNavigation = () => {
    setUserHasNavigated(true)
  }

  const ResourceWrapper = resource.internal_url ? Link : "a"
  const linkProps = resource.internal_url
    ? {
        to: resource.internal_url,
        onClick: handleInternalNavigation,
      }
    : {
        href: resource.external_url,
        target: "_blank",
        rel: "noopener noreferrer",
      }

  return (
    <ResourceWrapper
      {...linkProps}
      class="transition-transform hover:scale-[99%]"
    >
      <SmoothCard
        width={190}
        height={160}
        scales={{ xl: 1.1 }}
        class={cn(
          "relative overflow-hidden p-4 xl:p-5",
          "shadow-lg shadow-black/20 dark:shadow-black",
        )}
      >
        {/* Background image with adjusted opacity for light mode */}
        {thumbnailUrl && (
          <div
            class="absolute inset-0 -z-2 scale-[135%] opacity-75 dark:opacity-65"
            style={{
              "background-image": `url(${thumbnailUrl})`,
              "background-size": "cover",
              "background-position": "center",
              "background-repeat": "no-repeat",
            }}
          />
        )}
        <div class="absolute inset-0 -z-1 bg-gradient-to-b from-transparent via-transparent to-black/60 dark:from-transparent dark:to-black/65" />
        {/* Content */}
        <div class="relative z-10">
          <div class="mb-2 flex items-start justify-between xl:mb-3">
            <span class="text-2xl leading-5 drop-shadow-md xl:text-3xl xl:leading-6">
              {getResourceIcon(resource.resource_type)}
            </span>
            <div
              class={cn(
                "h-3.5 w-3.5 rounded-full shadow-sm drop-shadow-sm xl:h-4 xl:w-4",
                getDifficultyColor(resource.difficulty_rating),
              )}
            />
          </div>
          <div class="flex h-24 flex-col justify-end xl:h-28">
            <div class="font-inter text-sm font-semibold text-white drop-shadow-md xl:text-base">
              {truncateText(resource.title, 35)}
            </div>
            <div class="dark:text-muted-foreground text-xs text-gray-200 capitalize drop-shadow-sm xl:text-sm">
              {resource.resource_type.replace("_", " ")}
            </div>
          </div>
        </div>
      </SmoothCard>
    </ResourceWrapper>
  )
}
