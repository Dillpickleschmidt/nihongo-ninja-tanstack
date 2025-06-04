// features/dashboard/components/ExternalResourceCard.tsx
import { Link } from "@tanstack/solid-router"
import { SmoothCard } from "./SmoothCard"
import type { ExternalResource } from "@/data/types"

interface ExternalResourceCardProps {
  resource: ExternalResource
  thumbnailUrl?: string | null
}

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "easy":
      return "bg-green-500"
    case "medium":
      return "bg-yellow-500"
    case "hard":
      return "bg-red-500"
    default:
      return "bg-gray-500"
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
  const ResourceWrapper = resource.internal_url ? Link : "a"
  const linkProps = resource.internal_url
    ? { to: resource.internal_url }
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
        class="relative overflow-hidden p-4 shadow-lg shadow-black xl:p-5"
      >
        {/* Background image with low opacity */}
        {thumbnailUrl && (
          <div
            class="absolute inset-0 -z-2 scale-[135%] opacity-65"
            style={{
              "background-image": `url(${thumbnailUrl})`,
              "background-size": "cover",
              "background-position": "center",
              "background-repeat": "no-repeat",
            }}
          />
        )}

        <div class="absolute inset-0 -z-1 bg-gradient-to-b from-transparent to-black/50 dark:to-black/65" />

        {/* Content */}
        <div class="relative z-10">
          <div class="mb-2 flex items-start justify-between">
            <span class="text-2xl leading-5 drop-shadow-md xl:text-3xl xl:leading-6">
              {getResourceIcon(resource.resource_type)}
            </span>
            <div
              class={`h-3.5 w-3.5 rounded-full drop-shadow-sm xl:h-4 xl:w-4 ${getDifficultyColor(resource.difficulty_rating)}`}
            />
          </div>
          <div class="flex h-24 flex-col justify-end xl:h-28">
            <div class="font-inter text-sm font-semibold text-white drop-shadow-sm drop-shadow-black xl:text-base">
              {truncateText(resource.title, 35)}
            </div>
            <div class="text-muted-foreground text-xs capitalize drop-shadow-sm xl:text-sm">
              {resource.resource_type.replace("_", " ")}
            </div>
          </div>
        </div>
      </SmoothCard>
    </ResourceWrapper>
  )
}
