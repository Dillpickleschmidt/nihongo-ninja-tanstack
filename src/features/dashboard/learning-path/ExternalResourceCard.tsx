import { SmoothCardLink } from "@/components/SmoothCard"
import { getThumbnailUrl } from "@/data/utils/thumbnails"
import type { ExternalResource } from "@/data/external_resources"

interface ExternalResourceCardProps {
  resource: ExternalResource
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
      return "\u{1F4F9}"
    case "listening-material":
      return "\u{1F442}"
    default:
      return "\u{1F4CE}"
  }
}

function truncateText(text: string, maxLength: number) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
}

export function ExternalResourceCard(props: ExternalResourceCardProps) {
  const thumbnailUrl = () => getThumbnailUrl(props.resource.external_url)

  return (
    <SmoothCardLink
      to={props.resource.link}
      width={160}
      height={105}
      cornerRadius={14}
      class="relative overflow-hidden p-3.5 shadow-lg shadow-black transition-opacity hover:opacity-80"
    >
      {thumbnailUrl() && (
        <div
          class="absolute inset-0 -z-2 scale-[135%] opacity-45"
          style={{
            "background-image": `url(${thumbnailUrl()})`,
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
          }}
        />
      )}

      <div class="absolute inset-0 -z-1 bg-gradient-to-b from-transparent to-black/35 dark:to-black/45" />

      <div class="relative z-10 flex h-full flex-col justify-between">
        <div class="flex items-start justify-between">
          <span class="text-xl leading-4 drop-shadow-md">
            {getResourceIcon(props.resource.module_type)}
          </span>
          <div
            class={`h-3 w-3 rounded-full drop-shadow-sm ${getDifficultyColor(props.resource.difficulty_rating)}`}
          />
        </div>
        <div>
          <div class="font-inter text-[13px] font-semibold leading-tight text-white drop-shadow-sm drop-shadow-black">
            {truncateText(props.resource.title, 35)}
          </div>
          <div class="text-muted-foreground pt-[5px] text-[11px] leading-none capitalize drop-shadow-sm">
            {props.resource.module_type.replace("-", " ")}
          </div>
        </div>
      </div>
    </SmoothCardLink>
  )
}
