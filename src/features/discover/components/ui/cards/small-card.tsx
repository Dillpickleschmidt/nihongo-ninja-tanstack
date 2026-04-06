import { Show, createMemo } from "solid-js"
import { StatusDot } from "../status-dot"
import { LoadImage } from "../img/load-image"
import type { DiscoverMedia, Media } from "../../../api/anilist/types"
import { cover, coverMedium, title } from "../../../api/anilist/util"
import { getMockComprehension } from "../../../utils/mock-data"

interface SmallAnimeCardProps {
  media: DiscoverMedia | Media
  size?: "small" | "large"
  titleLanguage?: string | null
  status?:
    | "CURRENT"
    | "PLANNING"
    | "COMPLETED"
    | "PAUSED"
    | "DROPPED"
    | "REPEATING"
  onCardClick?: (media: DiscoverMedia | Media) => void
}

function getColor(pct: number): string {
  if (pct >= 70) return "#34d399"
  if (pct >= 45) return "#fbbf24"
  return "#f87171"
}

export function SmallAnimeCard(props: SmallAnimeCardProps) {
  const isLarge = () => props.size === "large"
  const coverUrl = () =>
    isLarge() ? (cover(props.media) ?? "") : (coverMedium(props.media) ?? "")
  const titleText = () => title(props.media, props.titleLanguage)
  const comprehension = createMemo(() => getMockComprehension(props.media.id))

  return (
    <>
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(1rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.5s ease-out both; }
      `}</style>

      <button
        type="button"
        onClick={() => props.onCardClick?.(props.media)}
        class="animate-fade-up relative shrink-0 cursor-pointer text-left text-white ease-instant-hover-300 hover:scale-102 hover:brightness-115 [content-visibility:auto]"
        classList={{
          "w-38": !isLarge(),
          "w-56": isLarge(),
        }}
      >
        <div class="flex flex-col">
        {/* Cover Image + Progress Circle */}
        <div
          class="relative overflow-hidden rounded-lg"
          classList={{ "h-54": !isLarge(), "h-72": isLarge() }}
        >
          <LoadImage
            src={coverUrl()}
            alt="cover"
            class="h-full w-full object-cover"
            color={props.media.coverImage?.color}
          />
          {/* Progress circle */}
          <div class="absolute right-1.5 bottom-1.5" title={`Avg: ${comprehension().avg}% / Best: ${comprehension().best}%`}>
            <svg class="size-8 -rotate-90" viewBox="0 0 36 36">
              {/* Background */}
              <circle
                cx="18" cy="18" r="15"
                fill="rgba(0,0,0,0.6)"
                stroke="white"
                stroke-opacity="0.1"
                stroke-width="2.5"
              />
              {/* Best comprehension (underlaid, semi-transparent) */}
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                stroke={getColor(comprehension().best)}
                stroke-opacity="0.5"
                stroke-width="2.5"
                stroke-dasharray={`${comprehension().best * 0.9425} 94.25`}
              />
              {/* Average comprehension (primary) */}
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                stroke={getColor(comprehension().avg)}
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-dasharray={`${comprehension().avg * 0.9425} 94.25`}
              />
              {/* Number */}
              <text
                x="18" y="18"
                text-anchor="middle"
                dominant-baseline="middle"
                fill="white"
                font-size="10"
                font-weight="700"
                transform="rotate(90 18 18)"
              >
                {comprehension().avg}
              </text>
            </svg>
          </div>
        </div>

        {/* Title */}
        <div
          class="line-clamp-2 pt-1 font-black"
          classList={{
            "text-[0.8rem]": !isLarge(),
            "text-[0.9rem]": isLarge(),
          }}
        >
          <Show when={props.status}>
            <StatusDot variant={props.status!} />
          </Show>
          {titleText()}
        </div>
        </div>
      </button>
    </>
  )
}
